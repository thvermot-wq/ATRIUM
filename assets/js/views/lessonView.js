import { LESSONS_SPEC, getLessonById } from "../lessons.js";
import { createFeedbackBox } from "../components/feedbackBox.js";

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
  const current = progressEntry?.current?.totalScore ?? 0;
  const best = progressEntry?.best?.totalScore ?? 0;

  const hero = document.createElement("article");
  hero.className = "card";
  hero.innerHTML = `
    <h2>${lesson.title}</h2>
    <p class="muted">${lesson.id} · Période ${lesson.period}</p>
    <p><strong>Objectif :</strong> ${lesson.objective}</p>
    <p class="muted">Structure: entraînement (${lesson.training.length} items) · production (${lesson.production.length} items) · max ${lesson.maxScore}</p>
    <p class="muted">Score courant: ${current}/10 · Meilleur score: ${best}/10</p>

    <form id="lesson-score-form" class="stack compact-form">
      <label>
        Entraînement (/7)
        <input type="number" name="trainingScore" min="0" max="${LESSONS_SPEC.trainingMax}" step="1" value="${progressEntry?.current?.trainingScore ?? 0}" required />
      </label>
      <label>
        Production (/3)
        <input type="number" name="productionScore" min="0" max="${LESSONS_SPEC.productionMax}" step="1" value="${progressEntry?.current?.productionScore ?? 0}" required />
      </label>
      <div class="actions-row">
        <button type="submit" class="btn btn-primary">Enregistrer ce score</button>
        <button type="button" class="btn btn-secondary" data-action="back">Retour dashboard</button>
        <button type="button" class="btn btn-secondary" data-action="results">Voir résultats</button>
      </div>
    </form>
  `;

  const form = hero.querySelector("#lesson-score-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    onSaveLessonScore({
      lessonId: lesson.id,
      trainingScore: Number(formData.get("trainingScore") || 0),
      productionScore: Number(formData.get("productionScore") || 0),
    });

    onOpenResults();
  });

  hero.querySelector('[data-action="back"]').addEventListener("click", onBackDashboard);
  hero.querySelector('[data-action="results"]').addEventListener("click", onOpenResults);

  const feedback = createFeedbackBox({
    title: "Règle de rejeu",
    text: "Le score courant peut changer à chaque tentative, mais le meilleur score de la leçon est conservé automatiquement.",
  });

  wrapper.append(hero, feedback);
  return wrapper;
}
