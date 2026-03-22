import { createProgressBar } from "./progressBar.js";
import { getLessonStatus } from "../lessonStatus.js";

function getStatusClass(status) {
  if (status === "période validée") return "status-ok";
  if (status === "consolidation nécessaire") return "status-warn";
  return "status-ko";
}

function getLessonMetrics(lessons, lessonProgressMap) {
  return lessons.reduce(
    (acc, lesson) => {
      const lessonProgress = lessonProgressMap?.[lesson.id];
      const lessonMax = lesson?.maxScore || 10;
      const played = Boolean(lessonProgress?.playedAt || lessonProgress?.current || lessonProgress?.best);
      const status = getLessonStatus(lessonProgress, { lessonMax });

      if (played) acc.played += 1;
      if (status.className === "status-ok") acc.validated += 1;
      return acc;
    },
    { played: 0, validated: 0 },
  );
}

export function createPeriodCard({
  period,
  lessons,
  periodProgress,
  lessonProgressMap,
  onOpenLesson,
  isOpen = false,
  onToggle = () => {},
}) {
  const safePeriod =
    periodProgress ||
    ({
      totalScore: 0,
      maxScore: period.maxScore,
      percent: 0,
      status: "période à reprendre",
    });

  const metrics = getLessonMetrics(lessons, lessonProgressMap);
  const statusClass = getStatusClass(safePeriod.status);
  const panelId = `period-panel-${period.id}`;

  const card = document.createElement("article");
  card.className = `card period-card${isOpen ? " is-open" : ""}`;

  const toggleButton = document.createElement("button");
  toggleButton.type = "button";
  toggleButton.className = "period-card__toggle";
  toggleButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
  toggleButton.setAttribute("aria-controls", panelId);
  toggleButton.innerHTML = `
    <span class="period-card__header-main">
      <span class="period-card__eyebrow">${period.id.toUpperCase()}</span>
      <span class="period-card__title-wrap">
        <span class="period-card__title">${period.title}</span>
        <span class="period-card__objective">${period.objective}</span>
      </span>
    </span>
    <span class="period-card__header-side">
      <span class="period-card__header-label">${isOpen ? "Masquer les leçons" : "Voir les leçons"}</span>
      <span class="period-card__chevron" aria-hidden="true">▾</span>
    </span>
  `;
  toggleButton.addEventListener("click", onToggle);

  const summary = document.createElement("div");
  summary.className = "period-card__summary";

  const statusRow = document.createElement("div");
  statusRow.className = "period-card__status-row";
  statusRow.innerHTML = `
    <span class="period-status-chip ${statusClass}">${safePeriod.status}</span>
    <span class="period-card__score-inline">${safePeriod.totalScore}/${period.maxScore}</span>
  `;

  const progress = createProgressBar({
    value: safePeriod.totalScore,
    max: period.maxScore,
    label: "Progression",
  });

  const summaryGrid = document.createElement("div");
  summaryGrid.className = "period-card__summary-grid";
  summaryGrid.innerHTML = `
    <div class="period-card__summary-item">
      <span class="period-card__summary-label">Leçons jouées</span>
      <span class="period-card__summary-value">${metrics.played}/${lessons.length}</span>
    </div>
    <div class="period-card__summary-item">
      <span class="period-card__summary-label">Leçons validées</span>
      <span class="period-card__summary-value">${metrics.validated}/${lessons.length}</span>
    </div>
  `;

  summary.append(statusRow, progress, summaryGrid);
  card.append(toggleButton, summary);

  if (isOpen) {
    const details = document.createElement("div");
    details.id = panelId;
    details.className = "period-card__details-body";

    const hint = document.createElement("p");
    hint.className = "period-card__details-hint";
    hint.textContent = "Ouvre une leçon pour reprendre le fil de la période sans te perdre dans les détails.";

    const lessonList = document.createElement("ul");
    lessonList.className = "lesson-list";

    lessons.forEach((lesson) => {
      const lessonProgress = lessonProgressMap?.[lesson.id];
      const lessonMax = lesson?.maxScore || 10;
      const best = lessonProgress?.best?.totalScore ?? 0;
      const current = lessonProgress?.current?.totalScore ?? 0;
      const status = getLessonStatus(lessonProgress, { lessonMax });
      const scoreLabel =
        best > 0
          ? current > 0 && current !== best
            ? `actuel ${current}/${lessonMax} · meilleur ${best}/${lessonMax}`
            : `meilleur ${best}/${lessonMax}`
          : "pas encore jouée";

      const item = document.createElement("li");
      const button = document.createElement("button");
      button.type = "button";
      button.className = "btn btn-link lesson-line";
      button.innerHTML = `
        <span class="lesson-line__left">
          <span class="lesson-id">${lesson.id.toUpperCase()}</span>
          <span class="lesson-title">${lesson.title}</span>
        </span>
        <span class="lesson-line__right">
          <span class="lesson-status-chip ${status.className}">${status.icon} ${status.label}</span>
          <span class="lesson-score">${scoreLabel}</span>
        </span>
      `;
      button.addEventListener("click", () => onOpenLesson(lesson.id));
      item.appendChild(button);
      lessonList.appendChild(item);
    });

    details.append(hint, lessonList);
    card.appendChild(details);
  }

  return card;
}
