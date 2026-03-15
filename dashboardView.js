import { getPeriodsByLevel, getLessonsByPeriod } from "../lessons.js";
import { getLastVisitedLesson, buildLessonHash } from "../storage.js";
import { createPeriodCard } from "../components/periodCard.js";

function safePercent(value, max) {
  if (!max) return 0;
  return Math.max(0, Math.min(100, Math.round((value / max) * 100)));
}

function countValidatedPeriods(levelPeriods, progress) {
  return levelPeriods.filter((period) => (progress?.periods?.[period.id]?.percent || 0) >= 80).length;
}

function getSuggestedLessonTarget({ levelId, allLessons, progress }) {
  const lastVisited = getLastVisitedLesson(levelId);
  if (lastVisited && allLessons.some((lesson) => lesson.id === lastVisited.lessonId)) {
    return {
      ...lastVisited,
      path: lastVisited.path || buildLessonHash(lastVisited),
    };
  }

  const firstUnplayed = allLessons.find((lesson) => !progress?.lessons?.[lesson.id]?.playedAt);
  if (firstUnplayed) {
    return {
      levelId,
      lessonId: firstUnplayed.id,
      lessonTitle: firstUnplayed.title,
      path: buildLessonHash({ levelId, lessonId: firstUnplayed.id }),
    };
  }

  const firstToConsolidate = allLessons.find((lesson) => (progress?.lessons?.[lesson.id]?.best?.totalScore || 0) < 8);
  if (firstToConsolidate) {
    return {
      levelId,
      lessonId: firstToConsolidate.id,
      lessonTitle: firstToConsolidate.title,
      path: buildLessonHash({ levelId, lessonId: firstToConsolidate.id }),
    };
  }

  const fallback = allLessons[0];
  if (!fallback) return null;
  return {
    levelId,
    lessonId: fallback.id,
    lessonTitle: fallback.title,
    path: buildLessonHash({ levelId, lessonId: fallback.id }),
  };
}

function getDefaultOpenPeriod(levelPeriods, progress) {
  const started = levelPeriods.find((period) => (progress?.periods?.[period.id]?.totalScore || 0) > 0 && (progress?.periods?.[period.id]?.percent || 0) < 100);
  return started?.id || levelPeriods[0]?.id || null;
}

export function renderDashboardView({ level, onOpenLesson, onOpenHome, progress }) {
  const wrapper = document.createElement("section");
  wrapper.className = "stack dashboard-view";

  const levelPeriods = getPeriodsByLevel(level?.id);
  const allLessons = levelPeriods.flatMap((period) => getLessonsByPeriod(period.id, level?.id));
  const lessonProgressMap = progress?.lessons || {};
  const playedLessonsCount = allLessons.filter((lesson) => Boolean(lessonProgressMap[lesson.id]?.playedAt)).length;
  const validatedLessonsCount = allLessons.filter((lesson) => (lessonProgressMap[lesson.id]?.best?.totalScore || 0) >= 8).length;
  const validatedPeriodsCount = countValidatedPeriods(levelPeriods, progress);
  const totalCurrentScore = levelPeriods.reduce((sum, period) => sum + (progress?.periods?.[period.id]?.totalScore || 0), 0);
  const totalMaxScore = levelPeriods.reduce((sum, period) => sum + (period.maxScore || 0), 0);
  const overallPercent = safePercent(totalCurrentScore, totalMaxScore);
  const continueTarget = getSuggestedLessonTarget({ levelId: level?.id, allLessons, progress });

  const headerCard = document.createElement("article");
  headerCard.className = "card dashboard-hero";
  headerCard.innerHTML = `
    <span class="dashboard-hero__eyebrow">${level?.label || "5e"} · Dashboard</span>
    <h2 class="dashboard-hero__headline">${level?.dashboardTitle || "Atrium I : Fondations"}</h2>
    <p class="dashboard-hero__lead">${level?.dashboardSubtitle || "Choisis une période, ouvre une leçon, puis avance pas à pas dans la progression."}</p>
    <div class="dashboard-hero__meta">
      <span class="meta-pill">${levelPeriods.length} périodes</span>
      <span class="meta-pill">${allLessons.length} leçons</span>
      <span class="meta-pill">${playedLessonsCount}/${allLessons.length} jouées</span>
      <span class="meta-pill">${validatedPeriodsCount}/${levelPeriods.length} validées</span>
      <span class="meta-pill">${overallPercent}% global</span>
    </div>
    <div class="actions-row dashboard-hero__actions">
      <button type="button" class="btn btn-secondary" data-action="home">← Retour au sélecteur de niveau</button>
      ${continueTarget ? `<button type="button" class="btn btn-primary" data-action="continue">Continuer · ${continueTarget.lessonTitle}</button>` : ""}
    </div>
  `;

  headerCard.querySelector('[data-action="home"]').addEventListener("click", onOpenHome);
  if (continueTarget) {
    headerCard.querySelector('[data-action="continue"]').addEventListener("click", () => {
      window.location.hash = continueTarget.path;
    });
  }

  const grid = document.createElement("div");
  grid.className = "period-grid";

  const defaultOpenPeriodId = getDefaultOpenPeriod(levelPeriods, progress);
  const cards = [];

  levelPeriods.forEach((period) => {
    const periodLessons = getLessonsByPeriod(period.id, level?.id);
    const periodProgress = progress?.periods?.[period.id];
    const card = createPeriodCard({
      period,
      lessons: periodLessons,
      periodProgress,
      lessonProgressMap,
      onOpenLesson,
      defaultOpen: period.id === defaultOpenPeriodId,
      onTogglePeriod: ({ periodId, isOpen, card: activeCard }) => {
        if (!isOpen) return;
        cards.forEach((otherCard) => {
          if (otherCard !== activeCard && typeof otherCard.__setOpen === "function") {
            otherCard.__setOpen(false);
          }
        });
      },
    });
    cards.push(card);
    grid.appendChild(card);
  });

  wrapper.append(headerCard, grid);
  return wrapper;
}
