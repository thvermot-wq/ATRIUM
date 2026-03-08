import { createProgressBar } from "./progressBar.js";
import { applyFrenchTypography } from "../typography.js";

function getStatusClass(status) {
  if (status === "période validée") return "status-ok";
  if (status === "consolidation nécessaire") return "status-warn";
  return "status-ko";
}

function getPlayedState(lessonProgress) {
  return lessonProgress?.playedAt ? "jouée" : "non jouée";
}

export function createPeriodCard({
  period,
  lessons,
  periodProgress,
  lessonProgressMap,
  onOpenLesson,
  isDiplomaEligible = false,
  diplomaDisabledReason = "",
  onOpenDiploma,
}) {
  const card = document.createElement("article");
  card.className = "card period-card";

  const header = document.createElement("div");
  header.className = "period-card-header";

  const titleWrap = document.createElement("div");
  const title = document.createElement("h3");
  title.textContent = applyFrenchTypography(`${period.title} · ${period.level}`);

  const objective = document.createElement("p");
  objective.className = "muted";
  objective.textContent = applyFrenchTypography(period.objective);
  titleWrap.append(title, objective);

  const diplomaWrap = document.createElement("div");
  diplomaWrap.className = "period-diploma-controls";

  const diplomaButton = document.createElement("button");
  diplomaButton.type = "button";
  diplomaButton.className = "btn btn-secondary diploma-btn";
  diplomaButton.textContent = "Générer diplôme";
  diplomaButton.disabled = !isDiplomaEligible;
  diplomaButton.addEventListener("click", () => {
    if (isDiplomaEligible) {
      onOpenDiploma?.(period.id);
    }
  });

  diplomaWrap.appendChild(diplomaButton);

  if (!isDiplomaEligible && diplomaDisabledReason) {
    const helper = document.createElement("p");
    helper.className = "muted diploma-helper";
    helper.textContent = applyFrenchTypography(diplomaDisabledReason);
    diplomaWrap.appendChild(helper);
  }

  header.append(titleWrap, diplomaWrap);

  const safePeriod =
    periodProgress ||
    ({
      totalScore: 0,
      maxScore: period.maxScore,
      percent: 0,
      status: "période à reprendre",
    });

  const statusClass = getStatusClass(safePeriod.status);

  const stats = document.createElement("div");
  stats.className = "period-stats period-stats-grid";
  stats.innerHTML = `
    <p class="period-stat"><span class="period-stat-label">Score</span><strong>${safePeriod.totalScore}/${period.maxScore}</strong></p>
    <p class="period-stat"><span class="period-stat-label">Pourcentage</span><strong>${safePeriod.percent}%</strong></p>
    <p class="period-status-chip ${statusClass}">${safePeriod.status}</p>
  `;

  const progress = createProgressBar({
    value: safePeriod.totalScore,
    max: period.maxScore,
    label: "Période",
  });

  const lessonList = document.createElement("ul");
  lessonList.className = "link-list lesson-list";

  lessons.forEach((lesson) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    const lessonProgress = lessonProgressMap?.[lesson.id];
    const best = lessonProgress?.best?.totalScore ?? 0;
    const current = lessonProgress?.current?.totalScore ?? 0;
    const playedState = getPlayedState(lessonProgress);

    button.type = "button";
    button.className = "btn btn-link lesson-line";
    button.innerHTML = `
      <span class="lesson-title">${applyFrenchTypography(lesson.title)} (${lesson.id})</span>
      <span class="lesson-meta">${playedState} · ${current}/10 (actuel) · ${best}/10 (meilleur)</span>
    `;
    button.addEventListener("click", () => onOpenLesson(lesson.id));
    item.appendChild(button);
    lessonList.appendChild(item);
  });

  card.append(header, stats, progress, lessonList);
  return card;
}
