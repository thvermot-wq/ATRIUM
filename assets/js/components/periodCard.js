import { createProgressBar } from "./progressBar.js";

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

  const stats = document.createElement("p");
  stats.className = "muted";
  stats.textContent = `Période: ${safePeriod.totalScore}/${period.maxScore} · ${safePeriod.percent}% · ${safePeriod.status}`;

  const progress = createProgressBar({
    value: safePeriod.totalScore,
    max: period.maxScore,
    label: "Période",
  });

  const lessonList = document.createElement("ul");
  lessonList.className = "link-list";

  lessons.forEach((lesson) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    const lessonProgress = lessonProgressMap?.[lesson.id];
    const best = lessonProgress?.best?.totalScore ?? 0;
    const current = lessonProgress?.current?.totalScore ?? 0;
    const playableTag = lesson?.meta?.status === "ready" ? "jouable" : "bientôt";

    button.type = "button";
    button.className = "btn btn-link";
    button.textContent = `${lesson.title} (${lesson.id}) · ${playableTag} · courant ${current}/10 · meilleur ${best}/10`;
    button.addEventListener("click", () => onOpenLesson(lesson.id));
    item.appendChild(button);
    lessonList.appendChild(item);
  });

  card.append(title, objective, stats, progress, lessonList);
  return card;
}
