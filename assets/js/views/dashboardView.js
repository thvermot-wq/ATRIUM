import { getPeriodsByLevel, getLessonsByPeriod } from "../lessons.js";
import { createPeriodCard } from "../components/periodCard.js";

function safePercent(value, max) {
  if (!max) return 0;
  return Math.max(0, Math.min(100, Math.round((value / max) * 100)));
}

function countValidatedPeriods(levelPeriods, progress) {
  return levelPeriods.filter((period) => (progress?.periods?.[period.id]?.percent || 0) >= 80).length;
}

function countStartedPeriods(levelPeriods, progress) {
  return levelPeriods.filter((period) => (progress?.periods?.[period.id]?.totalScore || 0) > 0).length;
}

export function renderDashboardView({ level, onOpenLesson, onOpenHome, progress }) {
  const wrapper = document.createElement("section");
  wrapper.className = "stack";

  const levelPeriods = getPeriodsByLevel(level?.id);
  const allLessons = levelPeriods.flatMap((period) => getLessonsByPeriod(period.id, level?.id));
  const lessonProgressMap = progress?.lessons || {};
  const playedLessonsCount = allLessons.filter((lesson) => Boolean(lessonProgressMap[lesson.id]?.playedAt)).length;
  const validatedLessonsCount = allLessons.filter((lesson) => (lessonProgressMap[lesson.id]?.best?.totalScore || 0) >= 8).length;
  const validatedPeriodsCount = countValidatedPeriods(levelPeriods, progress);
  const startedPeriodsCount = countStartedPeriods(levelPeriods, progress);
  const totalCurrentScore = levelPeriods.reduce((sum, period) => sum + (progress?.periods?.[period.id]?.totalScore || 0), 0);
  const totalMaxScore = levelPeriods.reduce((sum, period) => sum + (period.maxScore || 0), 0);
  const overallPercent = safePercent(totalCurrentScore, totalMaxScore);

  const headerCard = document.createElement("article");
  headerCard.className = "card dashboard-hero";
  headerCard.innerHTML = `
    <span class="dashboard-hero__eyebrow">${level?.label || "5e"} · Dashboard</span>
    <h2 class="dashboard-hero__headline">${level?.dashboardTitle || "Atrium I : Fondations"}</h2>
    <p class="dashboard-hero__lead">${level?.dashboardSubtitle || "Chaque période se joue comme un arc cohérent : on rebrasse, on consolide, puis on passe au suivant."}</p>
    <div class="dashboard-hero__meta">
      <span class="meta-pill">${levelPeriods.length} périodes</span>
      <span class="meta-pill">${allLessons.length} leçons</span>
      <span class="meta-pill">Progression calculée automatiquement</span>
    </div>
    <div class="dashboard-kpis">
      <div class="dashboard-kpi-card">
        <span class="dashboard-kpi-card__value">${playedLessonsCount}/${allLessons.length}</span>
        <span class="dashboard-kpi-card__label">Leçons jouées</span>
      </div>
      <div class="dashboard-kpi-card">
        <span class="dashboard-kpi-card__value">${validatedLessonsCount}/${allLessons.length}</span>
        <span class="dashboard-kpi-card__label">Leçons validées</span>
      </div>
      <div class="dashboard-kpi-card">
        <span class="dashboard-kpi-card__value">${validatedPeriodsCount}/${levelPeriods.length}</span>
        <span class="dashboard-kpi-card__label">Périodes validées</span>
      </div>
      <div class="dashboard-kpi-card">
        <span class="dashboard-kpi-card__value">${overallPercent}%</span>
        <span class="dashboard-kpi-card__label">Progression globale</span>
      </div>
    </div>
    <div class="actions-row">
      <button type="button" class="btn btn-secondary" data-action="home">← Retour au sélecteur de niveau</button>
      <span class="meta-pill">${startedPeriodsCount}/${levelPeriods.length} périodes entamées</span>
    </div>
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
        lessonProgressMap,
        onOpenLesson,
      }),
    );
  });

  wrapper.append(headerCard, grid);
  return wrapper;
}
