import { LESSONS_SPEC, getLessonById } from "../lessons.js";
import { createFeedbackBox } from "../components/feedbackBox.js";
import { createTrainingItemCard } from "../components/trainingItemCard.js";
import { createProductionItemCard } from "../components/productionItemCard.js";
import { evaluateTrainingItem, computeTrainingProgress } from "../trainingEngine.js";
import { evaluateProductionItem, computeProductionProgress } from "../productionEngine.js";

function isLessonPlayable(lesson) {
  return (
    lesson?.meta?.status === "ready" &&
    Array.isArray(lesson.training) &&
    lesson.training.length === LESSONS_SPEC.trainingMax &&
    Array.isArray(lesson.production) &&
    lesson.production.length === LESSONS_SPEC.productionMax
  );
}

export function renderLessonView({ lessonId, progress, onSaveLessonScore, onBackDashboard, onOpenResults }) {
  const lesson = getLessonById(lessonId);
  const wrapper = document.createElement("section");
  wrapper.className = "stack";

  if (!lesson) {
    const missing = document.createElement("article");
    missing.className = "card";
    missing.innerHTML = `
      <h2>Leçon introuvable</h2>
      <p>La leçon demandée n'existe pas dans le référentiel actuel.</p>
      <button type="button" class="btn btn-primary">Retour dashboard</button>
    `;
    missing.querySelector("button").addEventListener("click", onBackDashboard);
    wrapper.appendChild(missing);
    return wrapper;
  }

  const progressEntry = progress?.lessons?.[lesson.id];
  const savedCurrent = progressEntry?.current?.totalScore ?? 0;
  const savedBest = progressEntry?.best?.totalScore ?? 0;

  if (!isLessonPlayable(lesson)) {
    const pending = document.createElement("article");
    pending.className = "card";
    pending.innerHTML = `
      <h2>${lesson.title}</h2>
      <p class="muted">${lesson.id} · Période ${lesson.period}</p>
      <p><strong>Objectif :</strong> ${lesson.objective}</p>
      <p class="muted">Cette leçon n'est pas encore jouable de bout en bout dans cette version.</p>
      <p class="muted">Score enregistré: courant ${savedCurrent}/10 · meilleur ${savedBest}/10</p>
      <div class="actions-row">
        <button type="button" class="btn btn-secondary" data-action="back">Retour dashboard</button>
        <button type="button" class="btn btn-secondary" data-action="results">Voir résultats</button>
      </div>
    `;

    pending.querySelector('[data-action="back"]').addEventListener("click", onBackDashboard);
    pending.querySelector('[data-action="results"]').addEventListener("click", onOpenResults);
    wrapper.appendChild(pending);
    return wrapper;
  }

  const trainingResults = {};
  const productionResults = {};

  const hero = document.createElement("article");
  hero.className = "card";

  const trainingBoard = document.createElement("div");
  trainingBoard.className = "training-board";

  const trainingState = document.createElement("p");
  trainingState.className = "muted";

  const syncTrainingState = () => {
    const current = computeTrainingProgress(lesson.training, trainingResults);
    trainingState.textContent = `Entraînement: score ${current.score}/${LESSONS_SPEC.trainingMax} · progression ${current.answeredCount}/${current.totalItems}`;
    return current;
  };

  lesson.training.forEach((item) => {
    const card = createTrainingItemCard({
      item,
      onValidate: (userResponse) => {
        const result = evaluateTrainingItem(item, userResponse);
        trainingResults[item.id] = result;
        syncTrainingState();
        syncTotalPreview();
        return result;
      },
      onReset: () => {
        delete trainingResults[item.id];
        syncTrainingState();
        syncTotalPreview();
      },
    });
    trainingBoard.appendChild(card);
  });

  const productionBoard = document.createElement("div");
  productionBoard.className = "production-board";

  const productionState = document.createElement("p");
  productionState.className = "muted";

  const syncProductionState = () => {
    const current = computeProductionProgress(lesson.production, productionResults);
    productionState.textContent = `Production guidée: score ${current.score}/${LESSONS_SPEC.productionMax} · progression ${current.answeredCount}/${current.totalItems}`;
    return current;
  };

  lesson.production.forEach((item) => {
    const card = createProductionItemCard({
      item,
      onEvaluate: (userAnswer) => {
        const result = evaluateProductionItem(item, userAnswer);
        productionResults[item.id] = {
          ...result,
          userAnswer: String(userAnswer ?? ""),
        };
        syncProductionState();
        syncTotalPreview();
        return result;
      },
      onReset: () => {
        delete productionResults[item.id];
        syncProductionState();
        syncTotalPreview();
      },
    });
    productionBoard.appendChild(card);
  });

  const totalPreview = document.createElement("p");
  totalPreview.className = "muted";

  const syncTotalPreview = () => {
    const training = computeTrainingProgress(lesson.training, trainingResults);
    const production = computeProductionProgress(lesson.production, productionResults);
    const total = training.score + production.score;
    totalPreview.textContent = `Total leçon (prévisualisation) : ${total}/${LESSONS_SPEC.lessonMax} (entraînement ${training.score}/7 + production ${production.score}/3)`;
  };

  const finalSummary = document.createElement("article");
  finalSummary.className = "card";
  finalSummary.hidden = true;

  syncTrainingState();
  syncProductionState();
  syncTotalPreview();

  hero.innerHTML = `
    <h2>${lesson.title}</h2>
    <p class="muted">${lesson.id} · Période ${lesson.period}</p>
    <p><strong>Objectif :</strong> ${lesson.objective}</p>
    <p class="muted">Score enregistré: courant ${savedCurrent}/10 · meilleur ${savedBest}/10</p>
    <p class="muted">Phase entraînement: 7 micro-items (1 point/item), correction immédiate.</p>
    <p class="muted">Phase production: 3 productions écrites guidées (1 point/item), correction automatique.</p>
  `;

  const form = document.createElement("form");
  form.className = "stack compact-form";
  form.id = "lesson-score-form";
  form.innerHTML = `
    <div class="actions-row">
      <button type="submit" class="btn btn-primary">Valider et enregistrer la leçon</button>
      <button type="button" class="btn btn-secondary" data-action="back">Retour dashboard</button>
      <button type="button" class="btn btn-secondary" data-action="results">Voir résultats</button>
    </div>
  `;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const latestTraining = computeTrainingProgress(lesson.training, trainingResults);
    const latestProduction = computeProductionProgress(lesson.production, productionResults);

    const saved = onSaveLessonScore({
      lessonId: lesson.id,
      trainingScore: latestTraining.score,
      productionScore: latestProduction.score,
    });

    const currentScore = saved?.lessonProgress?.current?.totalScore ?? latestTraining.score + latestProduction.score;
    const bestScore = saved?.lessonProgress?.best?.totalScore ?? currentScore;

    finalSummary.hidden = false;
    finalSummary.innerHTML = `
      <h3>Synthèse finale de la leçon</h3>
      <p>Entraînement : ${latestTraining.score}/7</p>
      <p>Production : ${latestProduction.score}/3</p>
      <p><strong>Total : ${currentScore}/10</strong></p>
      <p class="muted">Meilleur score conservé : ${bestScore}/10</p>
    `;
  });

  form.querySelector('[data-action="back"]').addEventListener("click", onBackDashboard);
  form.querySelector('[data-action="results"]').addEventListener("click", onOpenResults);

  const feedback = createFeedbackBox({
    title: "Moteur générique entraînement + production",
    text: "La leçon reste data-driven. Entraînement (/7) et production guidée (/3) sont évalués séparément puis combinés en total /10.",
  });

  wrapper.append(
    hero,
    trainingState,
    trainingBoard,
    productionState,
    productionBoard,
    totalPreview,
    form,
    finalSummary,
    feedback,
  );
  return wrapper;
}
