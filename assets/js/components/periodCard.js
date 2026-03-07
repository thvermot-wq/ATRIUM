import { createProgressBar } from "./progressBar.js";

export function createPeriodCard({ period, lessons, onOpenLesson }) {
  const card = document.createElement("article");
  card.className = "card period-card";

  const title = document.createElement("h3");
  title.textContent = `${period.title} · ${period.level}`;

  const stats = document.createElement("p");
  stats.className = "muted";
  stats.textContent = `${lessons.length} leçons · max ${lessons.length * 10} points`;

  const progress = createProgressBar({
    value: 0,
    max: 50,
    label: "Période",
  });

  const lessonList = document.createElement("ul");
  lessonList.className = "link-list";

  lessons.forEach((lesson) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "btn btn-link";
    button.textContent = `${lesson.title} (${lesson.id})`;
    button.addEventListener("click", () => onOpenLesson(lesson.id));
    item.appendChild(button);
    lessonList.appendChild(item);
  });

  card.append(title, stats, progress, lessonList);
  return card;
}
