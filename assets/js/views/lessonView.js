import { LESSONS_SPEC, lessons, getLessonById } from "../lessons.js";
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

function findNextLessonId(currentLessonId) {
  const currentIndex = lessons.findIndex((lesson) => lesson.id === currentLessonId);
  if (currentIndex === -1 || currentIndex >= lessons.length - 1) return null;
  return lessons[currentIndex + 1].id;
}


function createLessonCourseHeader(lesson) {
  const hasPoint = Boolean(lesson?.coursePoint);
  const hasExample = Boolean(lesson?.courseExample);
  const hasCanDo = Boolean(lesson?.canDo);
  const hasLexicon = Array.isArray(lesson?.lexiconFocus) && lesson.lexiconFocus.length > 0;

  if (!hasPoint && !hasExample && !hasCanDo && !hasLexicon) {
    return null;
  }

  const card = document.createElement("article");
  card.className = "card lesson-course-header";

  const title = document.createElement("h3");
  title.textContent = "Repères de leçon";
  card.appendChild(title);

  const grid = document.createElement("div");
  grid.className = "lesson-course-grid";

  if (hasPoint) {
    const block = document.createElement("section");
    block.className = "lesson-course-block";
    block.innerHTML = `<h4>Point cours</h4><p>${lesson.coursePoint}</p>`;
    grid.appendChild(block);
  }

  if (hasExample) {
    const block = document.createElement("section");
    block.className = "lesson-course-block";
    block.innerHTML = `<h4>Exemple</h4><p>${lesson.courseExample}</p>`;
    grid.appendChild(block);
  }

  if (hasCanDo) {
    const block = document.createElement("section");
    block.className = "lesson-course-block";
    block.innerHTML = `<h4>Je peux...</h4><p>${lesson.canDo}</p>`;
    grid.appendChild(block);
  }

  if (hasLexicon) {
    const block = document.createElement("section");
    block.className = "lesson-course-block";
    block.innerHTML = `<h4>Lexique cible</h4><p>${lesson.lexiconFocus.join(" · ")}</p>`;
    grid.appendChild(block);
  }

  card.appendChild(grid);
  return card;
}

function attachMobileFocusHandling(rootNode) {
  rootNode.querySelectorAll('input[type="text"], textarea, select').forEach((field) => {
    field.addEventListener("focus", () => {
      requestAnimationFrame(() => {
        field.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
      });
    });
  });
}

export function renderLessonView({ lessonId, progress, onSaveLessonScore, onBackDashboard, onOpenResults, onOpenLesson }) {
  const lesson = getLessonById(lessonId);
  const wrapper = document.createElement("section");
  wrapper.className = "stack lesson-view";

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
  hero.className = "card lesson-hero";

  const lessonMetrics = document.createElement("article");
  lessonMetrics.className = "card lesson-metrics";

  const lessonCourseHeader = createLessonCourseHeader(lesson);

  const trainingState = document.createElement("p");
  trainingState.className = "muted";

  const productionState = document.createElement("p");
  productionState.className = "muted";

  const totalPreview = document.createElement("p");
  totalPreview.className = "lesson-preview-score";

  const syncTrainingState = () => {
    const current = computeTrainingProgress(lesson.training, trainingResults);
    trainingState.textContent = `Entraînement: score ${current.score}/${LESSONS_SPEC.trainingMax} · progression ${current.answeredCount}/${current.totalItems}`;
    return current;
  };

  const syncProductionState = () => {
    const current = computeProductionProgress(lesson.production, productionResults);
    productionState.textContent = `Production guidée: score ${current.score}/${LESSONS_SPEC.productionMax} · progression ${current.answeredCount}/${current.totalItems}`;
    return current;
  };

  const syncTotalPreview = () => {
    const training = computeTrainingProgress(lesson.training, trainingResults);
    const production = computeProductionProgress(lesson.production, productionResults);
    const total = training.score + production.score;
    totalPreview.textContent = `Total leçon (prévisualisation) : ${total}/${LESSONS_SPEC.lessonMax} (entraînement ${training.score}/7 + production ${production.score}/3)`;
  };

  const trainingBoard = document.createElement("div");
  trainingBoard.className = "training-board";

  const trainingHeading = document.createElement("h3");
  trainingHeading.textContent = "Phase entraînement";
  trainingBoard.appendChild(trainingHeading);

  lesson.training.forEach((item, index) => {
    const card = createTrainingItemCard({
      item,
      index: index + 1,
      onValidate: (userResponse) => {
        const result = evaluateTrainingItem(item, userResponse);
        trainingResults[item.id] = result;
        syncTrainingState();
        syncTotalPreview();
        return result;
      },
    });
    trainingBoard.appendChild(card);
  });

  const productionBoard = document.createElement("div");
  productionBoard.className = "production-board";

  const productionHeading = document.createElement("h3");
  productionHeading.textContent = "Phase production guidée";
  productionBoard.appendChild(productionHeading);

  lesson.production.forEach((item, index) => {
    const card = createProductionItemCard({
      item,
      index: index + 1,
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
    });
    productionBoard.appendChild(card);
  });

  const finalSummary = document.createElement("article");
  finalSummary.className = "card lesson-final-summary";
  finalSummary.hidden = true;

  const nextLessonId = findNextLessonId(lesson.id);

  syncTrainingState();
  syncProductionState();
  syncTotalPreview();

  lessonMetrics.append(trainingState, productionState, totalPreview);

  hero.innerHTML = `
    <h2>${lesson.title}</h2>
    <p class="muted">${lesson.id} · Période ${lesson.period}</p>
    <p><strong>Objectif :</strong> ${lesson.objective}</p>
    <p class="muted">Score enregistré: courant ${savedCurrent}/10 · meilleur ${savedBest}/10</p>
    <p class="muted">Phase entraînement: 7 micro-items (1 point/item), correction immédiate.</p>
    <p class="muted">Phase production: 3 productions écrites guidées (1 point/item), correction automatique.</p>
  `;

  const form = document.createElement("form");
  form.className = "stack compact-form lesson-actions-form";
  form.id = "lesson-score-form";
  form.innerHTML = `
    <div class="actions-row lesson-actions-row">
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
      <div class="actions-row lesson-completion-actions">
        <button type="button" class="btn btn-primary" data-action="replay">Rejouer la leçon</button>
        ${nextLessonId ? '<button type="button" class="btn btn-secondary" data-action="next">Suivant</button>' : ""}
      </div>
    `;

    finalSummary.querySelector('[data-action="replay"]').addEventListener("click", () => onOpenLesson(lesson.id));

    if (nextLessonId) {
      finalSummary.querySelector('[data-action="next"]').addEventListener("click", () => onOpenLesson(nextLessonId));
    }

    finalSummary.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  form.querySelector('[data-action="back"]').addEventListener("click", onBackDashboard);
  form.querySelector('[data-action="results"]').addEventListener("click", onOpenResults);

  const feedback = createFeedbackBox({
    title: "Moteur générique entraînement + production",
    text: "La leçon reste data-driven. Entraînement (/7) et production guidée (/3) sont évalués séparément puis combinés en total /10.",
  });

  if (lessonCourseHeader) {
    wrapper.append(hero, lessonCourseHeader, lessonMetrics, trainingBoard, productionBoard, form, finalSummary, feedback);
  } else {
    wrapper.append(hero, lessonMetrics, trainingBoard, productionBoard, form, finalSummary, feedback);
  }

  attachMobileFocusHandling(wrapper);
  return wrapper;
}
