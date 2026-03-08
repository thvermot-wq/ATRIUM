import { applyFrenchTypography } from "../typography.js";

export function createLessonCard({ lesson, onOpen }) {
  const card = document.createElement("article");
  card.className = "card lesson-card";
  card.innerHTML = `
    <h4>${applyFrenchTypography(lesson.title)}</h4>
    <p class="muted">Entraînement /${lesson.trainingMax} · Production /${lesson.productionMax}</p>
    <p class="muted">Total /${lesson.lessonMax}</p>
    <button type="button" class="btn btn-secondary">Ouvrir la leçon</button>
  `;

  card.querySelector("button").addEventListener("click", () => onOpen(lesson.id));
  return card;
}
