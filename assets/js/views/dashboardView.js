import { periods, getLessonsByPeriod } from "../lessons.js";
import { createPeriodCard } from "../components/periodCard.js";

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

function createSavePanel({
  saveStatus,
  onExportSave,
  onImportSave,
  onShareSave,
  onResetProgress,
  onUpdateStudentMeta,
  canShareSave,
  periodOnePercent,
}) {
  const panel = document.createElement("article");
  panel.className = "card save-panel";

  panel.innerHTML = `
    <h3>Sauvegarde de progression</h3>
    <p class="muted">
      Sur le même appareil, votre progression est conservée automatiquement. Pour changer d'appareil,
      exportez puis importez votre sauvegarde.
    </p>

    <div class="save-profile">
      <label>
        <span>Nom élève</span>
        <input type="text" data-field="studentName" placeholder="Ex. Lucas Dupont" value="${saveStatus.studentName || ""}" />
      </label>
      <label>
        <span>Classe</span>
        <input type="text" data-field="className" placeholder="Ex. 5eB" value="${saveStatus.className || ""}" />
      </label>
    </div>

    <div class="save-meta muted">
      <p><strong>Progression locale :</strong> sauvegardée</p>
      <p><strong>Dernière sauvegarde locale :</strong> ${formatDateTime(saveStatus.lastLocalSaveAt)}</p>
      <p><strong>Dernier export :</strong> ${saveStatus.lastExportedAt ? formatDateTime(saveStatus.lastExportedAt) : "Aucune sauvegarde exportée pour le moment."}</p>
      <p><strong>Dernier import :</strong> ${formatDateTime(saveStatus.lastImportedAt)}</p>
      <p><strong>État global :</strong> période 1 à ${periodOnePercent}%</p>
    </div>

    <div class="actions-row save-actions">
      <button type="button" class="btn btn-secondary" data-action="download">Télécharger ma sauvegarde</button>
      <button type="button" class="btn btn-secondary" data-action="import">Importer une sauvegarde</button>
      <button type="button" class="btn btn-secondary" data-action="share">Partager ma sauvegarde</button>
      <button type="button" class="btn btn-secondary danger" data-action="reset">Réinitialiser ma progression</button>
    </div>

    <input type="file" accept="application/json,.json" data-save-file hidden />

    <div class="save-preview" data-save-preview hidden>
      <p class="save-preview-title">Aperçu du fichier importé</p>
      <p data-preview-content class="muted"></p>
    </div>

    <p class="save-status muted" data-save-status aria-live="polite"></p>
  `;

  const status = panel.querySelector('[data-save-status]');
  const fileInput = panel.querySelector('[data-save-file]');
  const shareButton = panel.querySelector('[data-action="share"]');
  const previewBox = panel.querySelector('[data-save-preview]');
  const previewContent = panel.querySelector('[data-preview-content]');

  const setStatus = (message, type = "info") => {
    status.textContent = message;
    status.className = `save-status ${type}`;
  };

  const setPreview = (preview) => {
    if (!preview) {
      previewBox.hidden = true;
      previewContent.textContent = "";
      return;
    }

    previewBox.hidden = false;
    previewContent.textContent =
      `Élève: ${preview.studentName} · Classe: ${preview.className} · Date: ${formatDateTime(preview.savedAt)} · Période 1: ${preview.periodOnePercent}%`;
  };

  panel.querySelectorAll('.save-profile input').forEach((input) => {
    input.addEventListener("change", () => {
      const message = onUpdateStudentMeta?.({
        studentName: panel.querySelector('[data-field="studentName"]').value,
        className: panel.querySelector('[data-field="className"]').value,
      });
      setStatus(message || "Profil sauvegardé.", "info");
    });
  });

  if (!canShareSave) {
    shareButton.disabled = true;
    shareButton.classList.add("disabled");
    shareButton.title = "Partage natif indisponible sur cet appareil";
  }

  panel.querySelector('[data-action="download"]').addEventListener("click", () => {
    try {
      const message = onExportSave?.() || "Sauvegarde téléchargée.";
      setStatus(message, "ok");
    } catch (error) {
      setStatus(error?.message || "Erreur lors du téléchargement.", "ko");
    }
  });

  panel.querySelector('[data-action="import"]').addEventListener("click", () => {
    fileInput.click();
  });

  fileInput.addEventListener("change", async () => {
    const file = fileInput.files?.[0];
    if (!file) return;

    try {
      const message = await onImportSave?.(file, {
        onPreview: setPreview,
        confirmOverwrite: (confirmText) => window.confirm(confirmText),
      });
      setStatus(message || "Sauvegarde importée.", message === "Import annulé." ? "info" : "ok");
    } catch (error) {
      setPreview(null);
      setStatus(error?.message || "Erreur d'import.", "ko");
    } finally {
      fileInput.value = "";
    }
  });

  panel.querySelector('[data-action="share"]').addEventListener("click", async () => {
    if (!canShareSave) return;

    try {
      const message = await onShareSave?.();
      setStatus(message || "Sauvegarde partagée.", "ok");
    } catch (error) {
      setStatus(error?.message || "Partage impossible.", "ko");
    }
  });

  panel.querySelector('[data-action="reset"]').addEventListener("click", () => {
    try {
      const message = onResetProgress?.({
        confirmReset: () =>
          window.confirm("Cette action supprime toute la progression locale. Voulez-vous vraiment continuer ?"),
      });
      const kind = message === "Réinitialisation annulée." ? "info" : "ok";
      setStatus(message || "Progression réinitialisée.", kind);
    } catch (error) {
      setStatus(error?.message || "Erreur lors de la réinitialisation.", "ko");
    }
  });

  return panel;
}

export function renderDashboardView({
  onOpenLesson,
  progress,
  saveStatus,
  onExportSave,
  onImportSave,
  onShareSave,
  onResetProgress,
  onUpdateStudentMeta,
  canShareSave,
}) {
  const wrapper = document.createElement("section");
  wrapper.className = "stack dashboard-view";

  const allLessons = periods.flatMap((period) => getLessonsByPeriod(period.id));
  const playedLessonsCount = allLessons.filter((lesson) => Boolean(progress?.lessons?.[lesson.id]?.playedAt)).length;

  const headerCard = document.createElement("article");
  headerCard.className = "card dashboard-header-card";
  headerCard.innerHTML = `
    <h2>Tableau de bord</h2>
    <p class="muted">3 périodes · 36 leçons · progression calculée automatiquement</p>
    <p class="dashboard-kpi">Leçons jouées : ${playedLessonsCount}/${allLessons.length}</p>
  `;

  const savePanel = createSavePanel({
    saveStatus,
    onExportSave,
    onImportSave,
    onShareSave,
    onResetProgress,
    onUpdateStudentMeta,
    canShareSave,
    periodOnePercent: progress?.periods?.p1?.percent ?? 0,
  });

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

  wrapper.append(headerCard, savePanel, grid);
  return wrapper;
}
