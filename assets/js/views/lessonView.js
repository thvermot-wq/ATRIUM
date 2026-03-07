import { getLessonById } from "../lessons.js";
import { createFeedbackBox } from "../components/feedbackBox.js";

export function renderLessonView({ lessonId, onBackDashboard, onOpenResults }) {
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

  const hero = document.createElement("article");
  hero.className = "card";
  hero.innerHTML = `
    <h2>${lesson.title}</h2>
    <p class="muted">${lesson.id} · Période ${lesson.periodIndex}</p>
    <p>Placeholder de leçon prêt à accueillir entraînement (/7) et production guidée (/3).</p>
    <div class="actions-row">
      <button type="button" class="btn btn-secondary" data-action="back">Retour dashboard</button>
      <button type="button" class="btn btn-primary" data-action="results">Voir résultats</button>
    </div>
  `;

  hero.querySelector('[data-action="back"]').addEventListener("click", onBackDashboard);
  hero.querySelector('[data-action="results"]').addEventListener("click", onOpenResults);

  const feedback = createFeedbackBox({
    title: "Prochaine étape",
    text: "Cette vue est intentionnellement partielle : le moteur de correction et la persistance détaillée seront branchés dans une PR suivante.",
  });

  wrapper.append(hero, feedback);
  return wrapper;
}
