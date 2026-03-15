import { createProgressBar } from "./progressBar.js";
import { getLessonStatus } from "../lessonStatus.js";

function getStatusClass(status) {
  if (status === "période validée") return "status-ok";
  if (status === "consolidation nécessaire") return "status-warn";
  return "status-ko";
}

function getLessonMeta(lessonProgress) {
  const best = lessonProgress?.best?.totalScore ?? 0;
  const current = lessonProgress?.current?.totalScore ?? 0;
  if (best > 0) return `meilleur ${best}/10`;
  if (current > 0) return `courant ${current}/10`;
  return "à jouer";
}

export function createPeriodCard({
  period,
  lessons,
  periodProgress,
  lessonProgressMap,
  onOpenLesson,
  isOpen = false,
  onTogglePeriod,
}) {
  const card = document.createElement("article");
  card.className = `card period-card${isOpen ? " is-open" : ""}`;

  const safePeriod = periodProgress || {
    totalScore: 0,
    maxScore: period.maxScore,
    percent: 0,
    status: "période à reprendre",
  };

  const statusClass = getStatusClass(safePeriod.status);
  const startedLessons = lessons.filter((lesson) => Boolean(lessonProgressMap?.[lesson.id]?.playedAt)).length;
  const validatedLessons = lessons.filter((lesson) => (lessonProgressMap?.[lesson.id]?.best?.totalScore || 0) >= 8).length;

  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "period-card__toggle";
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.innerHTML = `
    <span class="period-card__header-main">
      <span class="period-card__eyebrow">${period.level}</span>
      <span class="period-card__title-wrap">
        <span class="period-card__title">${period.title}</span>
        <span class="period-card__objective">${period.objective}</span>
      </span>
    </span>
    <span class="period-card__header-side">
      <span class="period-card__header-label">${isOpen ? "Masquer les leçons" : "Voir les leçons"}</span>
      <span class="period-card__chevron" aria-hidden="true">⌄</span>
    </span>
  `;
  toggle.addEventListener("click", () => {
    if (typeof onTogglePeriod === "function") {
      onTogglePeriod({ periodId: period.id });
    }
  });

  const summary = document.createElement("div");
  summary.className = "period-card__summary";
  summary.innerHTML = `
    <div class="period-card__status-row">
      <span class="period-status-chip ${statusClass}">${safePeriod.status}</span>
      <span class="period-card__score-inline">${safePeriod.totalScore}/${period.maxScore}</span>
    </div>
    <div class="period-card__summary-grid">
      <div class="period-card__summary-item">
        <span class="period-card__summary-label">Leçons jouées</span>
        <span class="period-card__summary-value">${startedLessons}/${lessons.length}</span>
      </div>
      <div class="period-card__summary-item">
        <span class="period-card__summary-label">Leçons validées</span>
        <span class="period-card__summary-value">${validatedLessons}/${lessons.length}</span>
      </div>
      <div class="period-card__summary-item">
        <span class="period-card__summary-label">Progression</span>
        <span class="period-card__summary-value">${safePeriod.percent || 0}%</span>
      </div>
    </div>
  `;

  const progress = createProgressBar({
    value: safePeriod.totalScore,
    max: period.maxScore,
    label: "Progression de période",
  });

  const detailsBody = document.createElement("div");
  detailsBody.className = "period-card__details-body";
  detailsBody.hidden = !isOpen;

  const hint = document.createElement("p");
  hint.className = "period-card__details-hint";
  hint.textContent = "Choisis une leçon à reprendre, consolider ou rejouer.";

  const lessonList = document.createElement("ul");
  lessonList.className = "lesson-list";

  lessons.forEach((lesson) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    const lessonProgress = lessonProgressMap?.[lesson.id];
    const status = getLessonStatus(lessonProgress, { lessonMax: 10 });

    button.type = "button";
    button.className = "btn btn-link lesson-line";
    button.innerHTML = `
      <span class="lesson-line__left">
        <span class="lesson-id">${lesson.id}</span>
        <span class="lesson-title">${lesson.title}</span>
      </span>
      <span class="lesson-line__right">
        <span class="lesson-status-chip ${status.className}">${status.icon} ${status.label}</span>
        <span class="lesson-score">${getLessonMeta(lessonProgress)}</span>
      </span>
    `;
    button.addEventListener("click", () => onOpenLesson(lesson.id));
    item.appendChild(button);
    lessonList.appendChild(item);
  });

  detailsBody.append(hint, lessonList);
  card.append(toggle, summary, progress, detailsBody);
  return card;
}
