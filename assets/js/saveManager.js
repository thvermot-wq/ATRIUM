const SAVE_APP = "ATRIUM";
const SAVE_VERSION = 1;

function readFileText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result ?? ""));
    reader.onerror = () => reject(new Error("Lecture du fichier impossible."));
    reader.readAsText(file);
  });
}

function parseJsonSafely(text) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function sanitizeFilenamePart(value = "") {
  return String(value)
    .normalize("NFD")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function formatDateStamp(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}-${hours}${minutes}`;
}

function isIsoDate(value) {
  return typeof value === "string" && !Number.isNaN(Date.parse(value));
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function normalizeMeta(meta = {}) {
  return {
    studentName: String(meta.studentName || "").trim(),
    className: String(meta.className || "").trim(),
    studentId: String(meta.studentId || "").trim(),
  };
}

export function buildSavePayload(progress, meta = {}) {
  const profile = normalizeMeta(meta);
  return {
    app: SAVE_APP,
    version: SAVE_VERSION,
    savedAt: new Date().toISOString(),
    studentName: profile.studentName,
    className: profile.className,
    studentId: profile.studentId,
    progress,
  };
}

function createBlobFromProgress(progress, meta = {}) {
  const payload = buildSavePayload(progress, meta);
  const text = JSON.stringify(payload, null, 2);
  return {
    payload,
    text,
    blob: new Blob([text], { type: "application/json" }),
  };
}

export function getSaveFilename(meta = {}) {
  const profile = normalizeMeta(meta);
  const datePart = formatDateStamp();

  const studentPart = sanitizeFilenamePart(profile.studentName);
  const classPart = sanitizeFilenamePart(profile.className);

  if (!studentPart && !classPart) {
    return `atrium-progression-${datePart}.json`;
  }

  return `atrium-${[studentPart, classPart].filter(Boolean).join("-")}-${datePart}.json`;
}

export function validateSaveFile(data) {
  if (!isPlainObject(data)) {
    return { ok: false, message: "Fichier invalide: format JSON attendu." };
  }

  if (data.app !== SAVE_APP) {
    return { ok: false, message: "Fichier invalide: application non reconnue." };
  }

  if (!Object.prototype.hasOwnProperty.call(data, "version")) {
    return { ok: false, message: "Fichier invalide: version manquante." };
  }

  if (data.version !== SAVE_VERSION) {
    return { ok: false, message: `Version non supportée (attendue: ${SAVE_VERSION}).` };
  }

  if (!isIsoDate(data.savedAt)) {
    return { ok: false, message: "Fichier invalide: date de sauvegarde manquante ou incorrecte." };
  }

  if (!isPlainObject(data.progress)) {
    return { ok: false, message: "Fichier invalide: progression absente." };
  }

  if (!isPlainObject(data.progress.lessons) || !isPlainObject(data.progress.periods)) {
    return { ok: false, message: "Fichier invalide: structure de progression incohérente." };
  }

  return { ok: true };
}

export function summarizeSavePayload(payload) {
  const periodOnePercent = payload?.progress?.periods?.p1?.percent ?? 0;
  return {
    studentName: String(payload?.studentName || "").trim() || "Non renseigné",
    className: String(payload?.className || "").trim() || "Non renseignée",
    savedAt: payload?.savedAt || null,
    periodOnePercent,
  };
}

export function exportProgressToJson(progress, meta = {}) {
  const { text } = createBlobFromProgress(progress, meta);
  const filename = getSaveFilename(meta);
  const blob = new Blob([text], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();

  URL.revokeObjectURL(url);

  return { filename };
}

export async function importProgressFromFile(file) {
  if (!file) {
    throw new Error("Aucun fichier sélectionné.");
  }

  const text = await readFileText(file);
  const parsed = parseJsonSafely(text);

  if (!parsed) {
    throw new Error("Le fichier n'est pas un JSON valide.");
  }

  const validation = validateSaveFile(parsed);
  if (!validation.ok) {
    throw new Error(validation.message);
  }

  return parsed;
}

export function canUseNativeShare() {
  return Boolean(navigator.share && window.File);
}

export async function shareProgressSave(progress, meta = {}) {
  if (!canUseNativeShare()) {
    throw new Error("Partage natif indisponible sur cet appareil.");
  }

  const filename = getSaveFilename(meta);
  const { blob } = createBlobFromProgress(progress, meta);
  const file = new File([blob], filename, { type: "application/json" });

  if (navigator.canShare && !navigator.canShare({ files: [file] })) {
    throw new Error("Le partage de fichier n'est pas pris en charge.");
  }

  await navigator.share({
    title: "Sauvegarde ATRIUM",
    text: "Sauvegarde de progression ATRIUM",
    files: [file],
  });

  return { filename };
}
