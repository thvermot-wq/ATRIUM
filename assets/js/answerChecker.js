import { normalizeInput } from "./normalize.js";
import { buildAcceptedFrenchAnswers, normalizeFrenchAnswer } from "./acceptedAnswers.js";

function normalizeLegacyOptions(options = {}) {
  const normalized = { ...options };

  if (normalized.ignoreCase != null && normalized.toLowerCase == null) {
    normalized.toLowerCase = normalized.ignoreCase;
  }

  if (normalized.ignorePunctuation != null && normalized.stripPunctuation == null) {
    normalized.stripPunctuation = normalized.ignorePunctuation;
  }

  if (normalized.normalizeApostrophes != null && normalized.normalizeApostrophe == null) {
    normalized.normalizeApostrophe = normalized.normalizeApostrophes;
  }

  return normalized;
}

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

  return normalizeLegacyOptions({
    ...base,
    ...(answerConfig.normalize || {}),
  });
}

function normalizeWithConfig(value, answerConfig) {
  return normalizeInput(value, buildNormalizationOptions(answerConfig));
}

function asArray(value) {
  if (Array.isArray(value)) return value;
  if (value == null) return [];
  return [value];
}

function getBaseAcceptedList(answerConfig) {
  const accepted = asArray(answerConfig.accepted);

  if (accepted.length) {
    return accepted;
  }

  if (answerConfig.expected != null) {
    return [answerConfig.expected];
  }

  return [];
}

function normalizeCandidateForType(value, answerConfig) {
  const normalize = buildNormalizationOptions(answerConfig);

  if (
    answerConfig.language === "fr" &&
    (answerConfig.type === "one-of" || answerConfig.type === "translation-segment")
  ) {
    return normalizeFrenchAnswer(value, {
      tolerateArticles: answerConfig.tolerateArticles !== false,
      normalize,
    });
  }

  return normalizeInput(value, normalize);
}

function getAcceptedList(answerConfig) {
  const accepted = getBaseAcceptedList(answerConfig);
  const normalize = buildNormalizationOptions(answerConfig);

  if (answerConfig.language !== "fr") {
    return accepted
      .map((item) => normalizeInput(item, normalize))
      .filter(Boolean);
  }

  return buildAcceptedFrenchAnswers(accepted, {
    tolerateArticles: answerConfig.tolerateArticles !== false,
    synonyms: asArray(answerConfig.synonyms),
    normalize,
  });
}

export function isCorrect(userAnswer, answerConfig) {
  if (!answerConfig || typeof answerConfig !== "object") {
    throw new Error("answerConfig must be an object");
  }

  const normalizedUserAnswer = normalizeCandidateForType(userAnswer, answerConfig);
  const type = answerConfig.type || "exact";

  if (type === "exact" || type === "latin-expression") {
    const expected = normalizeWithConfig(answerConfig.expected || "", answerConfig);
    return normalizedUserAnswer === expected;
  }

  if (type === "one-of" || type === "translation-segment") {
    const accepted = getAcceptedList(answerConfig);
    return accepted.includes(normalizedUserAnswer);
  }

  throw new Error(`Unsupported answer type: ${type}`);
}

export function isCorrectAny(userAnswer, answerConfigs = []) {
  return answerConfigs.some((config) => isCorrect(userAnswer, config));
}
