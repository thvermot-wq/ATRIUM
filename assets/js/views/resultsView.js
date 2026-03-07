import { LESSONS_SPEC, periods } from "../lessons.js";

export function renderResultsView({ onOpenDashboard, progress }) {
  const section = document.createElement("section");
  section.className = "stack";

  const summary = document.createElement("article");
  summary.className = "card";
  summary.innerHTML = `
    <h2>Résultats</h2>
    <p class="muted">Barème leçon : ${LESSONS_SPEC.trainingMax} + ${LESSONS_SPEC.productionMax} = ${LESSONS_SPEC.lessonMax}</p>
    <p class="muted">Barème période : ${LESSONS_SPEC.periodMax}</p>
  `;

  const periodList = document.createElement("div");
  periodList.className = "stack";

  periods.forEach((period) => {
    const data = progress?.periods?.[period.id] || {
      totalScore: 0,
      maxScore: LESSONS_SPEC.periodMax,
      percent: 0,
      status: "période à reprendre",
    };

    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <h3>${period.title}</h3>
      <p>Total : ${data.totalScore}/${data.maxScore}</p>
      <p>Pourcentage : ${data.percent}%</p>
      <p class="muted">Statut : ${data.status}</p>
    `;
    periodList.appendChild(card);
  });

  const back = document.createElement("button");
  back.type = "button";
  back.className = "btn btn-primary";
  back.textContent = "Retour au dashboard";
  back.addEventListener("click", onOpenDashboard);

  section.append(summary, periodList, back);
  return section;
}
