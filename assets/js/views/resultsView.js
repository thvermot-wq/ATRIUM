import { LESSONS_SPEC, periods, getLessonsByPeriod } from "../lessons.js";

function getStatusClass(status) {
  if (status === "période validée") return "status-ok";
  if (status === "consolidation nécessaire") return "status-warn";
  return "status-ko";
}

function getPlayedState(lessonProgress) {
  return lessonProgress?.playedAt ? "jouée" : "non jouée";
}

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
    card.className = "card stack";

    const lessons = getLessonsByPeriod(period.id);
    const lessonLines = lessons
      .map((lesson) => {
        const lessonProgress = progress?.lessons?.[lesson.id];
        const current = lessonProgress?.current?.totalScore ?? 0;
        const best = lessonProgress?.best?.totalScore ?? 0;
        const playedState = getPlayedState(lessonProgress);
        return `<li>${lesson.title} (${lesson.id}) · ${playedState} · courant ${current}/10 · meilleur ${best}/10</li>`;
      })
      .join("");

    card.innerHTML = `
      <h3>${period.title}</h3>
      <p><strong>Total :</strong> ${data.totalScore}/${data.maxScore}</p>
      <p><strong>Pourcentage :</strong> ${data.percent}%</p>
      <p class="period-status-chip ${getStatusClass(data.status)}">${data.status}</p>
      <ul class="results-lesson-list">${lessonLines}</ul>
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
