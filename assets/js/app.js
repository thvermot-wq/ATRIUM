import { LESSONS_SPEC, periods, lessons, getLessonsByPeriod } from "./lessons.js";
import { getScoringContract } from "./scoring.js";
import { loadProgress, saveLessonProgress, saveProgress } from "./storage.js";
import { initRouter } from "./router.js";
import { renderApp } from "./ui.js";

const CANONICAL_SPEC = {
  periods: 3,
  lessonsPerPeriod: 12,
  lessonsTotal: 36,
  lessonMax: 10,
  trainingMax: 7,
  productionMax: 3,
  periodMax: 120,
  validationPercent: 80,
  validationMinScore: 96,
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

  periods.forEach((period) => {
    const periodLessons = getLessonsByPeriod(period.id);
    if (periodLessons.length !== LESSONS_SPEC.lessonsPerPeriod) {
      errors.push(`La ${period.title} doit contenir ${LESSONS_SPEC.lessonsPerPeriod} leçons.`);
    }
    if (period.maxScore !== LESSONS_SPEC.periodMax) {
      errors.push(`Le score max de ${period.title} doit être ${LESSONS_SPEC.periodMax}.`);
    }

    periodLessons.forEach((lesson) => {
      if (lesson.maxScore !== LESSONS_SPEC.lessonMax) {
        errors.push(`${lesson.id}: maxScore doit être ${LESSONS_SPEC.lessonMax}.`);
      }
      if (!Array.isArray(lesson.training) || lesson.training.length === 0) {
        errors.push(`${lesson.id}: training doit être renseigné.`);
      }
      if (!Array.isArray(lesson.production) || lesson.production.length === 0) {
        errors.push(`${lesson.id}: production doit être renseignée.`);
      }
    });
  });

  return errors;
}

function boot() {
  const root = document.getElementById("app");
  if (!root) return;

  const scoring = getScoringContract();
  const invariantErrors = assertInvariants();

  if (invariantErrors.length > 0) {
    root.innerHTML = `
      <section class="card">
        <h2>Erreur de configuration ATRIUM</h2>
        <ul>${invariantErrors.map((error) => `<li>${error}</li>`).join("")}</ul>
      </section>
    `;
    return;
  }

  let progress = loadProgress({ lessons, periods });
  saveProgress(progress);

  function onSaveLessonScore({ lessonId, trainingScore, productionScore }) {
    progress = saveLessonProgress({
      progress,
      lessonId,
      trainingScore,
      productionScore,
      lessons,
      periods,
    });

    saveProgress(progress);

    const lessonData = lessons.find((lesson) => lesson.id === lessonId);
    return {
      lessonProgress: progress.lessons?.[lessonId],
      periodProgress: lessonData ? progress.periods?.[lessonData.periodId] : null,
    };
  }

  let router = null;
  let pendingInitialRoute = null;

  function renderRoute(route) {
    renderApp(root, {
      router,
      route,
      progress,
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
    counts: { periods: periods.length, lessons: lessons.length },
    getProgress: () => progress,
  };
}

boot();
