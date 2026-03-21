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
} from "./lessons.js";
import { getScoringContract } from "./scoring.js";
import { loadProgress, saveLessonProgress, saveProgress } from "./storage.js";
import { initRouter } from "./router.js";
import { renderApp } from "./ui.js";
import { initTheme } from "./theme.js";

const CANONICAL_SPEC = {
  periods: 3,
  lessonsPerPeriod: 13,
  lessonsTotal: 39,
  lessonMax: 10,
  trainingMax: 7,
  productionMax: 3,
  periodMax: 130,
  validationPercent: 80,
  validationMinScore: 104,
};

function assertInvariants() {
  const errors = [];

  if (LESSONS_SPEC.periods !== CANONICAL_SPEC.periods) errors.push(`Le nombre de périodes doit rester à ${CANONICAL_SPEC.periods}.`);
  if (LESSONS_SPEC.lessonsPerPeriod !== CANONICAL_SPEC.lessonsPerPeriod) errors.push(`Le nombre de leçons par période doit rester à ${CANONICAL_SPEC.lessonsPerPeriod}.`);
  if (LESSONS_SPEC.lessonsTotal !== CANONICAL_SPEC.lessonsTotal) errors.push(`Le nombre total de leçons doit rester à ${CANONICAL_SPEC.lessonsTotal}.`);
  if (LESSONS_SPEC.lessonMax !== CANONICAL_SPEC.lessonMax) errors.push(`Le score max d'une leçon doit rester à ${CANONICAL_SPEC.lessonMax}.`);
  if (LESSONS_SPEC.trainingMax !== CANONICAL_SPEC.trainingMax) errors.push(`Le score d'entraînement doit rester à ${CANONICAL_SPEC.trainingMax}.`);
  if (LESSONS_SPEC.productionMax !== CANONICAL_SPEC.productionMax) errors.push(`Le score de production doit rester à ${CANONICAL_SPEC.productionMax}.`);
  if (LESSONS_SPEC.periodMax !== CANONICAL_SPEC.periodMax) errors.push(`Le score max d'une période doit rester à ${CANONICAL_SPEC.periodMax}.`);
  if (LESSONS_SPEC.validationPercent !== CANONICAL_SPEC.validationPercent) errors.push(`Le seuil de validation doit rester à ${CANONICAL_SPEC.validationPercent}%.`);
  if (LESSONS_SPEC.validationMinScore !== CANONICAL_SPEC.validationMinScore) errors.push(`Le score minimal de validation doit rester à ${CANONICAL_SPEC.validationMinScore}/${CANONICAL_SPEC.periodMax}.`);
  if (periods.length !== LESSONS_SPEC.periods) errors.push("Incohérence entre spec et périodes déclarées.");
  if (lessons.length !== LESSONS_SPEC.lessonsTotal) errors.push("Incohérence entre spec et leçons déclarées.");

  levels.forEach((level) => {
    const levelPeriods = getPeriodsByLevel(level.id);
    const levelLessons = getLessonsByLevel(level.id);

    if (levelPeriods.length !== LESSONS_SPEC.periods) {
      errors.push(`${level.label}: incohérence du nombre de périodes.`);
    }
    if (levelLessons.length !== LESSONS_SPEC.lessonsTotal) {
      errors.push(`${level.label}: incohérence du nombre de leçons.`);
    }

    levelPeriods.forEach((period) => {
      const periodLessons = getLessonsByPeriod(period.id, level.id);
      if (periodLessons.length !== LESSONS_SPEC.lessonsPerPeriod) {
        errors.push(`${level.label} · ${period.title} doit contenir ${LESSONS_SPEC.lessonsPerPeriod} leçons.`);
      }
      if (period.maxScore !== LESSONS_SPEC.periodMax) {
        errors.push(`${level.label} · ${period.title} doit être notée sur ${LESSONS_SPEC.periodMax}.`);
      }
      periodLessons.forEach((lesson) => {
        if (lesson.maxScore !== LESSONS_SPEC.lessonMax) errors.push(`${level.label} · ${lesson.id}: maxScore doit être ${LESSONS_SPEC.lessonMax}.`);
        if (!Array.isArray(lesson.training) || lesson.training.length === 0) errors.push(`${level.label} · ${lesson.id}: training manquant.`);
        if (!Array.isArray(lesson.production) || lesson.production.length === 0) errors.push(`${level.label} · ${lesson.id}: production manquante.`);
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
    const levelProgress = loadProgress({ lessons: levelLessons, periods: levelPeriods, levelId: level.id });
    saveProgress(levelProgress, { levelId: level.id });
    acc[level.id] = levelProgress;
    return acc;
  }, {});

  function onSaveLessonScore({ levelId = DEFAULT_LEVEL_ID, lessonId, trainingScore, productionScore }) {
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
      periodProgress: lessonData ? nextProgress.periods?.[lessonData.periodId] : null,
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
    levels: levels.map((level) => ({ id: level.id, label: level.label })),
    counts: {
      periods: periods.length,
      lessons: lessons.length,
    },
    getProgress: (levelId = DEFAULT_LEVEL_ID) => progressByLevel[levelId],
  };
}

boot();
