import { periods, getLessonsByPeriod } from "../lessons.js";
import { createPeriodCard } from "../components/periodCard.js";

export function renderDashboardView({ onOpenLesson, progress }) {
  const wrapper = document.createElement("section");
  wrapper.className = "stack dashboard-view";

  const allLessons = periods.flatMap((period) => getLessonsByPeriod(period.id));
  const playedLessonsCount = allLessons.filter((lesson) => Boolean(progress?.lessons?.[lesson.id]?.playedAt)).length;

  const headerCard = document.createElement("article");
  headerCard.className = "card dashboard-header-card";
  headerCard.innerHTML = `
    <h2>Tableau de bord</h2>
    <p class="muted">3 périodes · 15 leçons · progression calculée automatiquement</p>
    <p class="dashboard-kpi">Leçons jouées : ${playedLessonsCount}/${allLessons.length}</p>
  `;

  const grid = document.createElement("div");
  grid.className = "period-grid";

  periods.forEach((period) => {
    const periodLessons = getLessonsByPeriod(period.id);
    const periodProgress = progress?.periods?.[period.id];
    grid.appendChild(
      createPeriodCard({
        period,
        lessons: periodLessons,
        periodProgress,
        lessonProgressMap: progress?.lessons || {},
        onOpenLesson,
      }),
    );
  });

  wrapper.append(headerCard, grid);
  return wrapper;
}
