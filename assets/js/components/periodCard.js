import { createProgressBar } from "./progressBar.js";

function getStatusClass(status) {
  if (status === "période validée") return "status-ok";
  if (status === "consolidation nécessaire") return "status-warn";
  return "status-ko";
}

function getPlayedState(lessonProgress) {
  return lessonProgress?.playedAt ? "jouée" : "non jouée";
}

export function createPeriodCard({ period, lessons, periodProgress, lessonProgressMap, onOpenLesson }) {
  const card = document.createElement("article");
  card.className = "card period-card";

  const title = document.createElement("h3");
  title.textContent = `${period.title} · ${period.level}`;

  const objective = document.createElement("p");
  objective.className = "muted";
  objective.textContent = period.objective;

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
  stats.className = "period-stats";
  stats.innerHTML = `
    <p><strong>Score période :</strong> ${safePeriod.totalScore}/${period.maxScore}</p>
    <p><strong>Pourcentage :</strong> ${safePeriod.percent}%</p>
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
      <span class="lesson-title">${lesson.title} (${lesson.id})</span>
      <span class="lesson-meta">état: ${playedState} · courant ${current}/10 · meilleur ${best}/10</span>
    `;
    button.addEventListener("click", () => onOpenLesson(lesson.id));
    item.appendChild(button);
    lessonList.appendChild(item);
  });

  card.append(title, objective, stats, progress, lessonList);
  return card;
}
