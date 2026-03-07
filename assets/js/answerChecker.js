import { normalizeInput } from "./normalize.js";

function buildNormalizationOptions(answerConfig) {
  const base = {
    toLowerCase: true,
    trim: true,
    collapseSpaces: true,
    stripTrailingPunctuation: true,
    normalizeApostrophe: true,
    ignoreDiacritics: false,
  };

  if (answerConfig.language === "fr") {
    base.ignoreDiacritics = true;
  }

  return { ...base, ...(answerConfig.normalize || {}) };
}

function normalizeWithConfig(value, answerConfig) {
  return normalizeInput(value, buildNormalizationOptions(answerConfig));
}

function asArray(value) {
  if (Array.isArray(value)) return value;
  if (value == null) return [];
  return [value];
}

/**
 * Generic answer checker.
 *
 * Supported config shapes:
 * - { type: 'exact', expected: 'salve', language?: 'latin'|'fr' }
 * - { type: 'one-of', accepted: ['aquatique', 'aquarium'] }
 * - { type: 'translation-segment', accepted: ['l\'esclave salue'] }
 * - { type: 'latin-expression', expected: 'servus aquam portat' }
 */
export function isCorrect(userAnswer, answerConfig) {
  if (!answerConfig || typeof answerConfig !== "object") {
    throw new Error("answerConfig must be an object");
  }

  const normalizedUserAnswer = normalizeWithConfig(userAnswer, answerConfig);
  const type = answerConfig.type || "exact";

  if (type === "exact" || type === "latin-expression") {
    const expected = normalizeWithConfig(answerConfig.expected || "", answerConfig);
    return normalizedUserAnswer === expected;
  }

  if (type === "one-of" || type === "translation-segment") {
    const accepted = asArray(answerConfig.accepted)
      .map((item) => normalizeWithConfig(item, answerConfig))
      .filter(Boolean);
    return accepted.includes(normalizedUserAnswer);
  }

  throw new Error(`Unsupported answer type: ${type}`);
}

/**
 * Helper for multiple accepted configurations (OR logic).
 */
export function isCorrectAny(userAnswer, answerConfigs = []) {
  return answerConfigs.some((config) => isCorrect(userAnswer, config));
}
