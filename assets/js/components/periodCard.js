import { createProgressBar } from "./progressBar.js";
import { getLessonStatus } from "../lessonStatus.js";

function getStatusClass(status) {
  if (status === "période validée") return "status-ok";
  if (status === "consolidation nécessaire") return "status-warn";
  return "status-ko";
}

export function createPeriodCard({ period, lessons, periodProgress, lessonProgressMap, onOpenLesson }) {
  const card = document.createElement("article");
  card.className = "card period-card";

  const safePeriod =
    periodProgress ||
    ({
      totalScore: 0,
      maxScore: period.maxScore,
      percent: 0,
      status: "période à reprendre",
    });

  const statusClass = getStatusClass(safePeriod.status);
  const startedLessons = lessons.filter((lesson) => Boolean(lessonProgressMap?.[lesson.id]?.playedAt)).length;
  const validatedLessons = lessons.filter((lesson) => (lessonProgressMap?.[lesson.id]?.best?.totalScore || 0) >= 8).length;
  const detailsOpen = safePeriod.totalScore > 0 && safePeriod.status !== "période validée";

  const header = document.createElement("div");
  header.className = "period-card__header";
  header.innerHTML = `
    <span class="period-card__eyebrow">${period.level}</span>
    <h3 class="period-card__title">${period.title}</h3>
    <p class="period-card__objective">${period.objective}</p>
  `;

  const summary = document.createElement("div");
  summary.className = "period-card__summary";
  summary.innerHTML = `
    <div class="period-stats">
      <p class="period-status-chip ${statusClass}">${safePeriod.status}</p>
    </div>
    <div class="period-card__summary-grid">
      <div class="period-card__summary-item">
        <span class="period-card__summary-label">Score période</span>
        <span class="period-card__summary-value">${safePeriod.totalScore}/${period.maxScore}</span>
      </div>
      <div class="period-card__summary-item">
        <span class="period-card__summary-label">Leçons jouées</span>
        <span class="period-card__summary-value">${startedLessons}/${lessons.length}</span>
      </div>
      <div class="period-card__summary-item">
        <span class="period-card__summary-label">Leçons validées</span>
        <span class="period-card__summary-value">${validatedLessons}/${lessons.length}</span>
      </div>
    </div>
  `;

  const progress = createProgressBar({
    value: safePeriod.totalScore,
    max: period.maxScore,
    label: "Progression de période",
  });

  const details = document.createElement("details");
  details.className = "period-card__details";
  details.open = detailsOpen;

  const summaryToggle = document.createElement("summary");
  summaryToggle.textContent = `Voir les leçons (${lessons.length})`;

  const detailsBody = document.createElement("div");
  detailsBody.className = "period-card__details-body";

  const hint = document.createElement("p");
  hint.className = "period-card__details-hint";
  hint.textContent = "Ouvre une leçon pour poursuivre, consolider ou rejouer une étape précise.";

  const lessonList = document.createElement("ul");
  lessonList.className = "lesson-list";

  lessons.forEach((lesson) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    const lessonProgress = lessonProgressMap?.[lesson.id];
    const best = lessonProgress?.best?.totalScore ?? 0;
    const current = lessonProgress?.current?.totalScore ?? 0;
    const status = getLessonStatus(lessonProgress, { lessonMax: 10 });

    button.type = "button";
    button.className = "btn btn-link lesson-line";
    button.innerHTML = `
      <span class="lesson-id">${lesson.id}</span>
      <span class="lesson-title">${lesson.title}</span>
      <span class="lesson-meta">
        <span class="lesson-status-chip ${status.className}">${status.icon} ${status.label}</span>
        <span>${best > 0 || current > 0 ? `courant ${current}/10 · meilleur ${best}/10` : "pas encore joué"}</span>
      </span>
    `;
    button.addEventListener("click", () => onOpenLesson(lesson.id));
    item.appendChild(button);
    lessonList.appendChild(item);
  });

  detailsBody.append(hint, lessonList);
  details.append(summaryToggle, detailsBody);

  card.append(header, summary, progress, details);
  return card;
}
