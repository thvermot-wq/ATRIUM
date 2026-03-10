import { getPeriodsByLevel, getLessonsByPeriod } from "../lessons.js";
import { createPeriodCard } from "../components/periodCard.js";

export function renderDashboardView({ level, onOpenLesson, onOpenHome, progress }) {
  const wrapper = document.createElement("section");
  wrapper.className = "stack";

  const levelPeriods = getPeriodsByLevel(level?.id);
  const allLessons = levelPeriods.flatMap((period) => getLessonsByPeriod(period.id, level?.id));
  const playedLessonsCount = allLessons.filter((lesson) => Boolean(progress?.lessons?.[lesson.id]?.playedAt)).length;

  const headerCard = document.createElement("article");
  headerCard.className = "card";
  headerCard.innerHTML = `
    <h2>Dashboard ${level?.label || "5e"}</h2>
    <p><strong>${level?.dashboardTitle || "Atrium I : Fondations"}</strong></p>
    <p class="muted">${level?.dashboardSubtitle || ""}</p>
    <p class="muted">${levelPeriods.length} périodes · ${allLessons.length} leçons · progression calculée automatiquement</p>
    <p class="dashboard-kpi">Leçons jouées : ${playedLessonsCount}/${allLessons.length}</p>
    <div class="actions-row"><button type="button" class="btn btn-secondary" data-action="home">← Retour au sélecteur de niveau</button></div>
  `;
  headerCard.querySelector('[data-action="home"]').addEventListener("click", onOpenHome);

  const grid = document.createElement("div");
  grid.className = "period-grid";

  levelPeriods.forEach((period) => {
    const periodLessons = getLessonsByPeriod(period.id, level?.id);
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
