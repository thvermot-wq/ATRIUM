import { LESSONS_SPEC, periods, getLessonsByPeriod } from "../lessons.js";
import { applyFrenchTypography } from "../typography.js";

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
  section.className = "stack results-view";

  const summary = document.createElement("article");
  summary.className = "card results-summary";
  summary.innerHTML = `
    <h2>Résultats</h2>
    <p class="muted">Barème leçon : ${LESSONS_SPEC.trainingMax} + ${LESSONS_SPEC.productionMax} = ${LESSONS_SPEC.lessonMax}</p>
    <p class="muted">Barème période : ${LESSONS_SPEC.periodMax}</p>
    <div class="actions-row results-actions-top">
      <button type="button" class="btn btn-primary" data-action="back-top">Retour au dashboard</button>
    </div>
  `;

  const periodList = document.createElement("div");
  periodList.className = "stack results-period-list";

  periods.forEach((period) => {
    const data = progress?.periods?.[period.id] || {
      totalScore: 0,
      maxScore: LESSONS_SPEC.periodMax,
      percent: 0,
      status: "période à reprendre",
    };

    const card = document.createElement("article");
    card.className = "card stack results-period-card";

    const lessons = getLessonsByPeriod(period.id);
    const lessonLines = lessons
      .map((lesson) => {
        const lessonProgress = progress?.lessons?.[lesson.id];
        const current = lessonProgress?.current?.totalScore ?? 0;
        const best = lessonProgress?.best?.totalScore ?? 0;
        const playedState = getPlayedState(lessonProgress);

        return `
          <li class="results-lesson-item">
            <span class="results-lesson-title">${applyFrenchTypography(lesson.title)} (${lesson.id})</span>
            <span class="results-lesson-meta">${playedState} · actuel ${current}/10 · meilleur ${best}/10</span>
          </li>
        `;
      })
      .join("");

    card.innerHTML = `
      <h3>${applyFrenchTypography(period.title)}</h3>
      <div class="period-stats period-stats-grid">
        <p class="period-stat"><span class="period-stat-label">Score</span><strong>${data.totalScore}/${data.maxScore}</strong></p>
        <p class="period-stat"><span class="period-stat-label">Pourcentage</span><strong>${data.percent}%</strong></p>
        <p class="period-status-chip ${getStatusClass(data.status)}">${data.status}</p>
      </div>
      <ul class="results-lesson-list">${lessonLines}</ul>
    `;

    periodList.appendChild(card);
  });

  const back = document.createElement("button");
  back.type = "button";
  back.className = "btn btn-primary results-back-btn";
  back.textContent = "Retour au dashboard";
  back.addEventListener("click", onOpenDashboard);

  summary.querySelector('[data-action="back-top"]').addEventListener("click", onOpenDashboard);

  section.append(summary, periodList, back);
  return section;
}
