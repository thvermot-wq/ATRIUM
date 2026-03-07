import { LESSONS_SPEC, periods, lessons, getLessonsByPeriod } from "./lessons.js";
import { getScoringContract } from "./scoring.js";
import {
  createInitialProgress,
  hasMeaningfulProgress,
  importProgressData,
  loadProgress,
  loadSaveStatus,
  saveLessonProgress,
  saveProgress,
  saveProgressBackup,
  updateSaveStatus,
} from "./storage.js";
import {
  canUseNativeShare,
  exportProgressToJson,
  importProgressFromFile,
  shareProgressSave,
  summarizeSavePayload,
} from "./saveManager.js";
import { initRouter } from "./router.js";
import { renderApp } from "./ui.js";

const AUTOSAVE_DELAY_MS = 220;

function assertInvariants() {
  const errors = [];

  if (LESSONS_SPEC.periods !== 3) errors.push("Le nombre de périodes doit rester à 3.");
  if (LESSONS_SPEC.lessonsPerPeriod !== 5) errors.push("Le nombre de leçons par période doit rester à 5.");
  if (LESSONS_SPEC.lessonsTotal !== 15) errors.push("Le nombre total de leçons doit rester à 15.");
  if (LESSONS_SPEC.lessonMax !== 10) errors.push("Le score max d'une leçon doit rester à 10.");
  if (LESSONS_SPEC.trainingMax !== 7) errors.push("Le score d'entraînement doit rester à 7.");
  if (LESSONS_SPEC.productionMax !== 3) errors.push("Le score de production doit rester à 3.");
  if (LESSONS_SPEC.periodMax !== 50) errors.push("Le score max d'une période doit rester à 50.");
  if (LESSONS_SPEC.validationPercent !== 80) errors.push("Le seuil de validation doit rester à 80%.");

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

function formatDateTime(value) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  return date.toLocaleString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function boot() {
  const root = document.getElementById("app");
  if (!root) {
    throw new Error("Point de montage introuvable: #app");
  }

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
  let saveStatus = loadSaveStatus();

  let autosaveTimer = null;
  const persistNow = () => {
    saveProgress(progress);
    saveStatus = updateSaveStatus(saveStatus, { lastLocalSaveAt: new Date().toISOString() });
  };

  const persistDebounced = () => {
    if (autosaveTimer) {
      window.clearTimeout(autosaveTimer);
    }
    autosaveTimer = window.setTimeout(() => {
      persistNow();
      autosaveTimer = null;
    }, AUTOSAVE_DELAY_MS);
  };

  persistNow();

  let currentRoute = null;

  function getLocalProgressSummary() {
    return {
      savedAt: saveStatus.lastLocalSaveAt || progress.updatedAt,
      studentName: saveStatus.studentName || "Non renseigné",
      className: saveStatus.className || "Non renseignée",
      periodOnePercent: progress?.periods?.p1?.percent ?? 0,
    };
  }

  function renderCurrentRoute(router) {
    if (!currentRoute) return;

    renderApp(root, {
      router,
      route: currentRoute,
      progress,
      saveStatus,
      onSaveLessonScore,
      onExportSave,
      onImportSave,
      onShareSave,
      onResetProgress,
      onUpdateStudentMeta,
      canShareSave: canUseNativeShare(),
    });
  }

  let currentRoute = null;

  function renderCurrentRoute(router) {
    if (!currentRoute) return;

    renderApp(root, {
      router,
      route: currentRoute,
      progress,
      onSaveLessonScore,
      onExportSave,
      onImportSave,
      onShareSave,
      onResetProgress,
      canShareSave: canUseNativeShare(),
    });
  }

  function onSaveLessonScore({ lessonId, trainingScore, productionScore }) {
    progress = saveLessonProgress({
      progress,
      lessonId,
      trainingScore,
      productionScore,
      lessons,
      periods,
    });

    persistDebounced();

    const lessonData = lessons.find((lesson) => lesson.id === lessonId);
    return {
      lessonProgress: progress.lessons?.[lessonId],
      periodProgress: lessonData ? progress.periods?.[lessonData.periodId] : null,
    };
  }

  function onUpdateStudentMeta(patch) {
    saveStatus = updateSaveStatus(saveStatus, {
      studentName: String(patch?.studentName || "").trim(),
      className: String(patch?.className || "").trim(),
      studentId: String(patch?.studentId || "").trim(),
    });
    renderCurrentRoute(router);
    return "Profil sauvegardé localement.";
  }

  function onExportSave() {
    const result = exportProgressToJson(progress, saveStatus);
    saveStatus = updateSaveStatus(saveStatus, {
      lastExportedAt: new Date().toISOString(),
      lastLocalSaveAt: new Date().toISOString(),
    });
    return `Sauvegarde téléchargée (${result.filename}).`;
  }

  async function onImportSave(file, { onPreview, confirmOverwrite }) {
    const parsed = await importProgressFromFile(file);
    const preview = summarizeSavePayload(parsed);
    if (typeof onPreview === "function") {
      onPreview(preview);
    }

    if (hasMeaningfulProgress(progress) && typeof confirmOverwrite === "function") {
      const local = getLocalProgressSummary();
      const message = [
        "Une progression locale existe déjà.",
        `Locale — élève: ${local.studentName} · classe: ${local.className} · date: ${formatDateTime(local.savedAt)} · période 1: ${local.periodOnePercent}%`,
        `Fichier — élève: ${preview.studentName} · classe: ${preview.className} · date: ${formatDateTime(preview.savedAt)} · période 1: ${preview.periodOnePercent}%`,
        "Confirmer l'écrasement ?",
      ].join("\n");

      const shouldReplace = confirmOverwrite(message);
      if (!shouldReplace) return "Import annulé.";
    }

    saveProgressBackup(progress);

    progress = importProgressData({ data: parsed.progress, lessons, periods });
    saveStatus = updateSaveStatus(saveStatus, {
      studentName: String(parsed.studentName || saveStatus.studentName || "").trim(),
      className: String(parsed.className || saveStatus.className || "").trim(),
      studentId: String(parsed.studentId || saveStatus.studentId || "").trim(),
      lastImportedAt: new Date().toISOString(),
      lastLocalSaveAt: new Date().toISOString(),
    });

    persistNow();
    renderCurrentRoute(router);
    return "Sauvegarde importée avec succès.";
  }

  async function onShareSave() {
    const result = await shareProgressSave(progress, saveStatus);
    saveStatus = updateSaveStatus(saveStatus, {
      lastSharedAt: new Date().toISOString(),
    });
    return `Sauvegarde partagée (${result.filename}).`;
  }

  function onResetProgress({ confirmReset }) {
    if (!confirmReset || !confirmReset()) {
      return "Réinitialisation annulée.";
    }

    saveProgressBackup(progress);
    progress = createInitialProgress({ lessons, periods });
    persistNow();
    renderCurrentRoute(router);
    return "Progression réinitialisée.";
  }

  const router = initRouter({
    onRouteChange(route) {
      currentRoute = route;
      renderCurrentRoute(router);
    },
  });

  router.start();

  window.ATRIUM_BOOT = {
    scoring,
    contract: LESSONS_SPEC,
    counts: { periods: periods.length, lessons: lessons.length },
    getProgress: () => progress,
  };
}
