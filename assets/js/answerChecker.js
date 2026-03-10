import { normalizeInput } from "./normalize.js";
import { buildAcceptedFrenchAnswers, normalizeFrenchAnswer } from "./acceptedAnswers.js";

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

function normalizeCandidateForType(value, answerConfig) {
  if (answerConfig.language === "fr" && (answerConfig.type === "one-of" || answerConfig.type === "translation-segment")) {
    return normalizeFrenchAnswer(value, {
      tolerateArticles: answerConfig.tolerateArticles !== false,
    });
  }

  return normalizeWithConfig(value, answerConfig);
}

function getAcceptedList(answerConfig) {
  const accepted = asArray(answerConfig.accepted);
  if (answerConfig.language !== "fr") {
    return accepted.map((item) => normalizeWithConfig(item, answerConfig)).filter(Boolean);
  }

  return buildAcceptedFrenchAnswers(accepted, {
    tolerateArticles: answerConfig.tolerateArticles !== false,
    synonyms: asArray(answerConfig.synonyms),
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
