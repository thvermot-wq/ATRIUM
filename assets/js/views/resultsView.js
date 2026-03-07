import { LESSONS_SPEC } from "../lessons.js";

export function renderResultsView({ onOpenDashboard }) {
  const section = document.createElement("section");
  section.className = "card";
  section.innerHTML = `
    <h2>Résultats (placeholder)</h2>
    <p class="muted">Vue préparée pour l'agrégation future des scores élève.</p>
    <ul>
      <li>Barème leçon : ${LESSONS_SPEC.trainingMax} + ${LESSONS_SPEC.productionMax} = ${LESSONS_SPEC.lessonMax}</li>
      <li>Barème période : ${LESSONS_SPEC.periodMax}</li>
      <li>Validation période : ${LESSONS_SPEC.validationPercent}%</li>
    </ul>
    <button type="button" class="btn btn-primary">Retour au dashboard</button>
  `;

  section.querySelector("button").addEventListener("click", onOpenDashboard);
  return section;
}
