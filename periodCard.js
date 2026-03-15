import { createProgressBar } from "./progressBar.js";
import { getLessonStatus } from "../lessonStatus.js";

function getStatusClass(status) {
  if (status === "période validée") return "status-ok";
  if (status === "consolidation nécessaire") return "status-warn";
  return "status-ko";
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

  const toggleWrap = document.createElement("div");
  toggleWrap.className = "actions-row";

  const toggleButton = document.createElement("button");
  toggleButton.type = "button";
  toggleButton.className = "btn btn-secondary";
  toggleButton.style.width = "100%";
  toggleButton.style.justifyContent = "space-between";
  toggleButton.style.display = "inline-flex";
  toggleButton.style.alignItems = "center";
  toggleButton.style.textAlign = "left";
  toggleButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
  toggleButton.innerHTML = `
    <span>${isOpen ? "Masquer les leçons" : "Voir les leçons"} (${lessons.length})</span>
    <span aria-hidden="true">${isOpen ? "▴" : "▾"}</span>
  `;
  toggleButton.addEventListener("click", onToggle);
  toggleWrap.appendChild(toggleButton);

  card.append(title, objective, stats, progress, toggleWrap);

  if (isOpen) {
    const lessonList = document.createElement("ul");
    lessonList.className = "link-list lesson-list";

    lessons.forEach((lesson) => {
      const item = document.createElement("li");
      const button = document.createElement("button");
      const lessonProgress = lessonProgressMap?.[lesson.id];
      const best = lessonProgress?.best?.totalScore ?? 0;
      const current = lessonProgress?.current?.totalScore ?? 0;
      const status = getLessonStatus(lessonProgress, { lessonMax: 10 });

      button.type = "button";
      button.className = "btn btn-link lesson-line";
      button.style.width = "100%";
      button.style.textAlign = "left";
      button.innerHTML = `
        <span class="lesson-title">${lesson.title} (${lesson.id})</span>
        <span class="lesson-meta">
          <span class="lesson-status-chip ${status.className}">${status.icon} ${status.label}</span>
          <span>courant ${current}/10 · meilleur ${best}/10</span>
        </span>
      `;
      button.addEventListener("click", () => onOpenLesson(lesson.id));
      item.appendChild(button);
      lessonList.appendChild(item);
    });

    card.appendChild(lessonList);
  }

  return card;
}
