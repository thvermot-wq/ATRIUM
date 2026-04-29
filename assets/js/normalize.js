function stripFinalPunctuation(value) {
  return value.replace(/[\s\u00A0]*[.,;:!?…]+$/u, "");
}

function stripInternalPunctuation(value) {
  return value.replace(/[.,;:!?…/\\()[\]{}"“”«»]+/gu, " ");
}

function harmonizeApostrophes(value) {
  return value.replace(/[’`´ʼ]/g, "'");
}

function removeDiacritics(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/**
 * Normalize a user text input for answer checking.
 *
 * Defaults are tuned for ATRIUM short answers:
 * - case-insensitive
 * - trims and collapses spaces
 * - ignores final punctuation
 * - harmonizes apostrophes
 *
 * Backward-compatible aliases supported:
 * - ignoreCase -> toLowerCase
 * - ignorePunctuation -> stripPunctuation
 * - normalizeApostrophes -> normalizeApostrophe
 */
export function normalizeInput(value = "", options = {}) {
  const toLowerCase = options.toLowerCase ?? options.ignoreCase ?? true;
  const trim = options.trim ?? true;
  const collapseSpaces = options.collapseSpaces ?? true;
  const stripTrailingPunctuation = options.stripTrailingPunctuation ?? true;
  const stripPunctuation = options.stripPunctuation ?? options.ignorePunctuation ?? false;
  const normalizeApostrophe = options.normalizeApostrophe ?? options.normalizeApostrophes ?? true;
  const ignoreDiacritics = options.ignoreDiacritics ?? false;

  let normalized = String(value);

  if (normalizeApostrophe) {
    normalized = harmonizeApostrophes(normalized);
  }

  if (stripPunctuation) {
    normalized = stripInternalPunctuation(normalized);
  }

  if (trim) {
    normalized = normalized.trim();
  }

  if (collapseSpaces) {
    normalized = normalized.replace(/\s+/g, " ");
  }

  if (!stripPunctuation && stripTrailingPunctuation) {
    normalized = stripFinalPunctuation(normalized);
  }

  if (ignoreDiacritics) {
    normalized = removeDiacritics(normalized);
  }

  if (toLowerCase) {
    normalized = normalized.toLowerCase();
  }

  if (trim) {
    normalized = normalized.trim();
  }

  if (collapseSpaces) {
    normalized = normalized.replace(/\s+/g, " ");
  }

  return normalized;
}

/**
 * Backward-compat alias used by earlier code.
 */
export function normalizeAnswer(value = "", options = {}) {
  return normalizeInput(value, options);
}
