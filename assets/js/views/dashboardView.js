import { getPeriodsByLevel, getLessonsByPeriod } from "../lessons.js";
import { createPeriodCard } from "../components/periodCard.js";

function getInitialOpenPeriodId(periods, progress) {
  const inProgress = periods.find((period) => {
    const periodProgress = progress?.periods?.[period.id];
    return periodProgress && periodProgress.totalScore > 0 && periodProgress.status !== "période validée";
  });

  if (inProgress) return inProgress.id;

  const firstUnvalidated = periods.find((period) => {
    const periodProgress = progress?.periods?.[period.id];
    return !periodProgress || periodProgress.status !== "période validée";
  });

  return firstUnvalidated?.id ?? periods[0]?.id ?? null;
}

export function renderDashboardView({ level, onOpenLesson, onOpenHome, progress }) {
  const wrapper = document.createElement("section");
  wrapper.className = "stack dashboard-view";

  const levelPeriods = getPeriodsByLevel(level?.id);
  const allLessons = levelPeriods.flatMap((period) => getLessonsByPeriod(period.id, level?.id));
  const playedLessonsCount = allLessons.filter((lesson) => Boolean(progress?.lessons?.[lesson.id]?.playedAt)).length;
  const validatedPeriodsCount = levelPeriods.filter((period) => progress?.periods?.[period.id]?.status === "période validée").length;

  const headerCard = document.createElement("article");
  headerCard.className = "card dashboard-hero";
  headerCard.innerHTML = `
    <span class="dashboard-hero__eyebrow">${level?.label || "5e"} · Dashboard</span>
    <h2 class="dashboard-hero__headline">${level?.dashboardTitle || "Atrium I : Fondations"}</h2>
    <p class="dashboard-hero__lead">${level?.dashboardSubtitle || "Choisis une période et reprends le fil de ta progression, leçon après leçon."}</p>
    <div class="dashboard-hero__meta">
      <span class="meta-pill">${levelPeriods.length} périodes</span>
      <span class="meta-pill">${allLessons.length} leçons</span>
      <span class="meta-pill">${playedLessonsCount}/${allLessons.length} jouées</span>
      <span class="meta-pill">${validatedPeriodsCount}/${levelPeriods.length} validées</span>
    </div>
    <div class="actions-row">
      <button type="button" class="btn btn-secondary" data-action="home">← Retour au sélecteur de niveau</button>
    </div>
  `;
  headerCard.querySelector('[data-action="home"]').addEventListener("click", onOpenHome);

  const grid = document.createElement("div");
  grid.className = "period-grid";

  let openPeriodId = getInitialOpenPeriodId(levelPeriods, progress);

  function renderPeriods() {
    grid.innerHTML = "";

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
          isOpen: openPeriodId === period.id,
          onToggle: () => {
            openPeriodId = openPeriodId === period.id ? null : period.id;
            renderPeriods();
          },
        }),
      );
    });
  }

  renderPeriods();
  wrapper.append(headerCard, grid);
  return wrapper;
}
