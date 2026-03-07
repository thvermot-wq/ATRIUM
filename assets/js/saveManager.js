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

function buildSavePayload(progress) {
  return {
    app: SAVE_APP,
    version: SAVE_VERSION,
    savedAt: new Date().toISOString(),
    progress,
  };
}

function createBlobFromProgress(progress) {
  const payload = buildSavePayload(progress);
  const text = JSON.stringify(payload, null, 2);
  return {
    payload,
    text,
    blob: new Blob([text], { type: "application/json" }),
  };
}

function formatDateStamp(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function getSaveFilename() {
  return `atrium-progression-${formatDateStamp()}.json`;
}

export function validateSaveFile(data) {
  if (!data || typeof data !== "object") {
    return { ok: false, message: "Fichier invalide: format JSON attendu." };
  }

  if (data.app !== SAVE_APP) {
    return { ok: false, message: "Fichier invalide: application non reconnue." };
  }

  if (data.version !== SAVE_VERSION) {
    return { ok: false, message: `Version non supportée (attendue: ${SAVE_VERSION}).` };
  }

  if (!data.progress || typeof data.progress !== "object") {
    return { ok: false, message: "Fichier invalide: progression absente." };
  }

  return { ok: true };
}

export function exportProgressToJson(progress) {
  const { text } = createBlobFromProgress(progress);
  const filename = getSaveFilename();
  const blob = new Blob([text], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();

  URL.revokeObjectURL(url);

  return filename;
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

export async function shareProgressSave(progress) {
  if (!canUseNativeShare()) {
    throw new Error("Partage natif indisponible sur cet appareil.");
  }

  const filename = getSaveFilename();
  const { blob } = createBlobFromProgress(progress);
  const file = new File([blob], filename, { type: "application/json" });

  if (navigator.canShare && !navigator.canShare({ files: [file] })) {
    throw new Error("Le partage de fichier n'est pas pris en charge.");
  }

  await navigator.share({
    title: "Sauvegarde ATRIUM",
    text: "Sauvegarde de progression ATRIUM",
    files: [file],
  });

  return filename;
}
