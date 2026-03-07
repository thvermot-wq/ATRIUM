function stripFinalPunctuation(value) {
  return value.replace(/[\s\u00A0]*[.,;:!?…]+$/u, "");
}

function harmonizeApostrophes(value) {
  return value.replace(/[’`´]/g, "'");
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
 * - harmonizes apostrophes (l’esclave == l'esclave)
 */
export function normalizeInput(value = "", options = {}) {
  const {
    toLowerCase = true,
    trim = true,
    collapseSpaces = true,
    stripTrailingPunctuation = true,
    normalizeApostrophe = true,
    ignoreDiacritics = false,
  } = options;

  let normalized = String(value);

  if (normalizeApostrophe) {
    normalized = harmonizeApostrophes(normalized);
  }

  if (trim) {
    normalized = normalized.trim();
  }

  if (collapseSpaces) {
    normalized = normalized.replace(/\s+/g, " ");
  }

  if (stripTrailingPunctuation) {
    normalized = stripFinalPunctuation(normalized);
  }

  if (ignoreDiacritics) {
    normalized = removeDiacritics(normalized);
  }

  if (toLowerCase) {
    normalized = normalized.toLowerCase();
  }

  return normalized;
}

/**
 * Backward-compat alias used by earlier code.
 */
export function normalizeAnswer(value = "", options = {}) {
  return normalizeInput(value, options);
}
