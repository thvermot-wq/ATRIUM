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
    <p class="muted">${lesson.id} · Période ${lesson.period}</p>
    <p><strong>Objectif :</strong> ${lesson.objective}</p>
    <p class="muted">Structure: entraînement (${lesson.training.length} items) · production (${lesson.production.length} items) · max ${lesson.maxScore}</p>
    <div class="actions-row">
      <button type="button" class="btn btn-secondary" data-action="back">Retour dashboard</button>
      <button type="button" class="btn btn-primary" data-action="results">Voir résultats</button>
    </div>
  `;

  hero.querySelector('[data-action="back"]').addEventListener("click", onBackDashboard);
  hero.querySelector('[data-action="results"]').addEventListener("click", onOpenResults);

  const feedback = createFeedbackBox({
    title: "Contenu pédagogique",
    text: "La donnée de leçon est branchée (titre, objectif, training, production). Le moteur de correction complet sera ajouté dans une prochaine PR.",
  });

  wrapper.append(hero, feedback);
  return wrapper;
}
