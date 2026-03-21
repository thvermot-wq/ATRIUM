import {
  LESSONS_SPEC,
  periods,
  lessons,
  levels,
  DEFAULT_LEVEL_ID,
  getLevelById,
  getPeriodsByLevel,
  getLessonsByLevel,
  getLessonsByPeriod,
  getLessonSpecForLevel,
} from "./lessons.js";
import { getScoringContract } from "./scoring.js";
import { loadProgress, saveLessonProgress, saveProgress } from "./storage.js";
import { initRouter } from "./router.js";
import { renderApp } from "./ui.js";
import { initTheme } from "./theme.js";

function getLevelDisplayLabel(level) {
  return level?.classLabel || level?.title || level?.id || "Niveau";
}

function lessonIsPlaceholder(lesson) {
  return lesson?.meta?.status === "placeholder" || lesson?.status === "placeholder";
}

function levelHasPlaceholders(levelLessons) {
  return Array.isArray(levelLessons) && levelLessons.some(lessonIsPlaceholder);
}

function assertInvariants() {
  const errors = [];

  levels.forEach((level) => {
    const spec = getLessonSpecForLevel(level.id);
    const levelName = getLevelDisplayLabel(level);
    const levelPeriods = getPeriodsByLevel(level.id);
    const levelLessons = getLessonsByLevel(level.id);
    const hasPlaceholders = levelHasPlaceholders(levelLessons);

    if (levelPeriods.length !== spec.periods) {
      errors.push(`${levelName}: incohérence du nombre de périodes.`);
    }

    if (levelLessons.length !== spec.lessonsTotal) {
      errors.push(`${levelName}: incohérence du nombre de leçons.`);
    }

    levelPeriods.forEach((period) => {
      const periodLessons = getLessonsByPeriod(period.id, level.id);

      if (periodLessons.length !== spec.lessonsPerPeriod) {
        errors.push(
          `${levelName} · ${period.title} doit contenir ${spec.lessonsPerPeriod} leçons.`
        );
      }

      if (period.maxScore !== spec.periodMax) {
        errors.push(
          `${levelName} · ${period.title} doit être notée sur ${spec.periodMax}.`
        );
      }

      periodLessons.forEach((lesson) => {
        if (lesson.maxScore !== spec.lessonMax) {
          errors.push(
            `${levelName} · ${lesson.id}: maxScore doit être ${spec.lessonMax}.`
          );
        }

        if (!Array.isArray(lesson.training)) {
          errors.push(`${levelName} · ${lesson.id}: training invalide.`);
        }

        if (!Array.isArray(lesson.production)) {
          errors.push(`${levelName} · ${lesson.id}: production invalide.`);
        }

        if (!hasPlaceholders) {
          if (lesson.training.length === 0) {
            errors.push(`${levelName} · ${lesson.id}: training manquant.`);
          }
          if (lesson.production.length === 0) {
            errors.push(`${levelName} · ${lesson.id}: production manquante.`);
          }
        }
      });
    });
  });

  return errors;
}

function registerServiceWorker() {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;

  window.addEventListener("load", async () => {
    try {
      await navigator.serviceWorker.register("./service-worker.js");
    } catch (error) {
      console.warn("ATRIUM · service worker non enregistré", error);
    }
  });
}

function boot() {
  const root = document.getElementById("app");
  if (!root) return;

  initTheme();
  registerServiceWorker();

  const scoring = getScoringContract();
  const invariantErrors = assertInvariants();

  if (invariantErrors.length > 0) {
    root.innerHTML = `
      <article class="card stack">
        <h2>Erreur de configuration ATRIUM</h2>
        <ul>${invariantErrors.map((error) => `<li>${error}</li>`).join("")}</ul>
      </article>
    `;
    return;
  }

  const progressByLevel = levels.reduce((acc, level) => {
    const levelLessons = getLessonsByLevel(level.id);
    const levelPeriods = getPeriodsByLevel(level.id);
    const levelProgress = loadProgress({
      lessons: levelLessons,
      periods: levelPeriods,
      levelId: level.id,
    });
    saveProgress(levelProgress, { levelId: level.id });
    acc[level.id] = levelProgress;
    return acc;
  }, {});

  function onSaveLessonScore({
    levelId = DEFAULT_LEVEL_ID,
    lessonId,
    trainingScore,
    productionScore,
  }) {
    const levelLessons = getLessonsByLevel(levelId);
    const levelPeriods = getPeriodsByLevel(levelId);
    const currentProgress = progressByLevel[levelId];

    const nextProgress = saveLessonProgress({
      progress: currentProgress,
      lessonId,
      trainingScore,
      productionScore,
      lessons: levelLessons,
      periods: levelPeriods,
    });

    progressByLevel[levelId] = nextProgress;
    saveProgress(nextProgress, { levelId });

    const lessonData = levelLessons.find((lesson) => lesson.id === lessonId);

    return {
      lessonProgress: nextProgress.lessons?.[lessonId],
      periodProgress: lessonData
        ? nextProgress.periods?.[lessonData.periodId]
        : null,
    };
  }

  let router = null;
  let pendingInitialRoute = null;

  function renderRoute(route) {
    const activeLevelId = route.params?.levelId || DEFAULT_LEVEL_ID;
    const level = getLevelById(activeLevelId);
    const levelId = level?.id || DEFAULT_LEVEL_ID;

    renderApp(root, {
      router,
      route: {
        ...route,
        params: {
          ...route.params,
          levelId,
        },
      },
      level,
      progress: progressByLevel[levelId],
      onSaveLessonScore,
    });
  }

  router = initRouter({
    onRouteChange(route) {
      if (!router) {
        pendingInitialRoute = route;
        return;
      }
      renderRoute(route);
    },
  });

  if (pendingInitialRoute) {
    renderRoute(pendingInitialRoute);
    pendingInitialRoute = null;
  }

  window.ATRIUM_BOOT = {
    scoring,
    contract: LESSONS_SPEC,
    levelSpecs: Object.fromEntries(
      levels.map((level) => [level.id, getLessonSpecForLevel(level.id)])
    ),
    levels: levels.map((level) => ({
      id: level.id,
      label: getLevelDisplayLabel(level),
    })),
    counts: {
      periods: periods.length,
      lessons: lessons.length,
    },
    getProgress: (levelId = DEFAULT_LEVEL_ID) => progressByLevel[levelId],
  };
}

boot();
