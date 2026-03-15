import { LESSONS_SPEC, getPeriodsByLevel, getLessonsByPeriod } from "../lessons.js";
import { getLastVisitedLesson, buildLessonHash } from "../storage.js";

function getStatusClass(status) {
  if (status === "période validée") return "status-ok";
  if (status === "consolidation nécessaire") return "status-warn";
  return "status-ko";
}

function getPlayedState(lessonProgress) {
  return lessonProgress?.playedAt ? "jouée" : "non jouée";
}

function getSuggestedLessonTarget({ levelId, lessons, progress }) {
  const lastVisited = getLastVisitedLesson(levelId);
  if (lastVisited && lessons.some((lesson) => lesson.id === lastVisited.lessonId)) {
    return {
      ...lastVisited,
      path: lastVisited.path || buildLessonHash(lastVisited),
    };
  }

  const firstUnplayed = lessons.find((lesson) => !progress?.lessons?.[lesson.id]?.playedAt);
  if (firstUnplayed) {
    return {
      levelId,
      lessonId: firstUnplayed.id,
      lessonTitle: firstUnplayed.title,
      path: buildLessonHash({ levelId, lessonId: firstUnplayed.id }),
    };
  }

  return null;
}

export function renderResultsView({ level, onOpenDashboard, progress }) {
  const section = document.createElement("section");
  section.className = "stack";

  const periods = getPeriodsByLevel(level?.id);
  const allLessons = periods.flatMap((period) => getLessonsByPeriod(period.id, level?.id));
  const continueTarget = getSuggestedLessonTarget({ levelId: level?.id, lessons: allLessons, progress });

  const summary = document.createElement("article");
  summary.className = "card results-hero";
  summary.innerHTML = `
    <h2>Résultats · ${level?.label || "5e"}</h2>
    <p class="muted">Barème leçon : ${LESSONS_SPEC.trainingMax} + ${LESSONS_SPEC.productionMax} = ${LESSONS_SPEC.lessonMax}</p>
    <p class="muted">Barème période : ${LESSONS_SPEC.periodMax}</p>
    <div class="actions-row results-actions">
      <button type="button" class="btn btn-primary" data-action="dashboard">Retour au dashboard ${level?.label || "5e"}</button>
      ${continueTarget ? `<button type="button" class="btn btn-secondary" data-action="continue">Reprendre · ${continueTarget.lessonTitle}</button>` : ""}
    </div>
  `;

  summary.querySelector('[data-action="dashboard"]').addEventListener("click", onOpenDashboard);
  if (continueTarget) {
    summary.querySelector('[data-action="continue"]').addEventListener("click", () => {
      window.location.hash = continueTarget.path;
    });
  }

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

    const lessons = getLessonsByPeriod(period.id, level?.id);
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

  section.append(summary, periodList);
  return section;
}
