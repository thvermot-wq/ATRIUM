import { LESSONS_SPEC, getLessonById } from "../lessons.js";
import { createFeedbackBox } from "../components/feedbackBox.js";
import { createTrainingItemCard } from "../components/trainingItemCard.js";
import { evaluateTrainingItem, computeTrainingProgress } from "../trainingEngine.js";

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

  const trainingResults = {};

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
        return result;
      },
    });
    trainingBoard.appendChild(card);
  });

  const currentTraining = syncTrainingState();

  hero.innerHTML = `
    <h2>${lesson.title}</h2>
    <p class="muted">${lesson.id} · Période ${lesson.period}</p>
    <p><strong>Objectif :</strong> ${lesson.objective}</p>
    <p class="muted">Score enregistré: courant ${savedCurrent}/10 · meilleur ${savedBest}/10</p>
    <p class="muted">Phase entraînement: 7 micro-items (1 point/item), correction immédiate.</p>
  `;

  const form = document.createElement("form");
  form.className = "stack compact-form";
  form.id = "lesson-score-form";
  form.innerHTML = `
    <label>
      Production (/3)
      <input type="number" name="productionScore" min="0" max="${LESSONS_SPEC.productionMax}" step="1" value="${progressEntry?.current?.productionScore ?? 0}" required />
    </label>
    <div class="actions-row">
      <button type="submit" class="btn btn-primary">Enregistrer la leçon</button>
      <button type="button" class="btn btn-secondary" data-action="back">Retour dashboard</button>
      <button type="button" class="btn btn-secondary" data-action="results">Voir résultats</button>
    </div>
  `;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const latestTraining = computeTrainingProgress(lesson.training, trainingResults);

    onSaveLessonScore({
      lessonId: lesson.id,
      trainingScore: latestTraining.score,
      productionScore: Number(formData.get("productionScore") || 0),
    });

    onOpenResults();
  });

  form.querySelector('[data-action="back"]').addEventListener("click", onBackDashboard);
  form.querySelector('[data-action="results"]').addEventListener("click", onOpenResults);

  const feedback = createFeedbackBox({
    title: "Moteur entraînement générique",
    text: "Types supportés: choix unique, choix multiple, appariement simple, remise en ordre. Le score entraînement est calculé automatiquement sur 7.",
  });

  wrapper.append(hero, trainingState, trainingBoard, form, feedback);
  return wrapper;
}
