import { isCorrect } from "./answerChecker.js";

function asNonEmptyArray(value) {
  if (Array.isArray(value)) {
    return value.map((item) => String(item ?? "").trim()).filter(Boolean);
  }

  if (value == null) return [];

  return [String(value).trim()].filter(Boolean);
}

function asPlainObject(value) {
  return value && typeof value === "object" && !Array.isArray(value) ? value : {};
}

function normalizeAcceptedKey(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[.,;:!?…/\\()[\]{}"“”«»]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function uniqueNonEmptyArray(values = []) {
  const seen = new Set();
  const output = [];

  values
    .map((item) => String(item ?? "").trim())
    .filter(Boolean)
    .forEach((item) => {
      const key = normalizeAcceptedKey(item);
      if (!key || seen.has(key)) return;

      seen.add(key);
      output.push(item);
    });

  return output;
}

function mergeNormalize(item = {}, config = {}) {
  const itemNormalize = asPlainObject(item.normalization);
  const configNormalize = asPlainObject(config.normalize || config.normalization);
  const merged = { ...itemNormalize, ...configNormalize };

  return Object.keys(merged).length ? merged : undefined;
}

function getMergedAccepted(item = {}, config = {}) {
  return uniqueNonEmptyArray([
    ...asNonEmptyArray(config.accepted),
    ...asNonEmptyArray(item.acceptedAnswers),
    ...asNonEmptyArray(item.accepted),
    ...(item.expected != null ? [item.expected] : []),
  ]);
}

function enrichAnswerConfig(item = {}, baseConfig = {}) {
  const safeConfig = asPlainObject(baseConfig);
  const mergedAccepted = getMergedAccepted(item, safeConfig);

  const config = {
    ...safeConfig,
    language: safeConfig.language || item.language || "latin",
  };

  if (!config.type) {
    if (item.type === "translation-segment" || config.language === "fr") {
      config.type = "translation-segment";
    } else if (mergedAccepted.length) {
      config.type = "one-of";
    } else {
      config.type = "exact";
    }
  }

  if (config.expected == null && item.expected != null) {
    config.expected = item.expected;
  }

  if (safeConfig.tolerateArticles == null && item.tolerateArticles != null) {
    config.tolerateArticles = item.tolerateArticles;
  }

  if (safeConfig.synonyms == null && item.synonyms != null) {
    config.synonyms = item.synonyms;
  }

  const normalize = mergeNormalize(item, safeConfig);

  if (normalize) {
    config.normalize = normalize;
  }

  if (
    (config.type === "one-of" || config.type === "translation-segment") &&
    mergedAccepted.length
  ) {
    config.accepted = mergedAccepted;
  }

  return config;
}

export function inferAnswerConfig(item = {}) {
  if (item && item.answerConfig && typeof item.answerConfig === "object") {
    return enrichAnswerConfig(item, item.answerConfig);
  }

  const type = item.type || "exact";
  const acceptedAnswers = asNonEmptyArray(item.acceptedAnswers);
  const accepted = asNonEmptyArray(item.accepted);
  const mergedAccepted = uniqueNonEmptyArray([...acceptedAnswers, ...accepted]);

  if (
    type === "image-to-word" ||
    type === "situation-to-formula" ||
    type === "find-verb"
  ) {
    return enrichAnswerConfig(item, {
      type: "exact",
      language: "latin",
      expected: item.expected,
    });
  }

  if (type === "short-text" || type === "translation-segment") {
    return enrichAnswerConfig(item, {
      type: "translation-segment",
      language: item.language || "fr",
      accepted: mergedAccepted.length ? mergedAccepted : [item.expected],
      tolerateArticles: item.tolerateArticles,
      synonyms: item.synonyms,
    });
  }

  if (type === "one-of") {
    return enrichAnswerConfig(item, {
      type: "one-of",
      language: item.language || "latin",
      accepted: mergedAccepted.length ? mergedAccepted : [item.expected],
      tolerateArticles: item.tolerateArticles,
      synonyms: item.synonyms,
    });
  }

  if (type === "latin-expression") {
    return enrichAnswerConfig(item, {
      type: "latin-expression",
      language: "latin",
      expected: item.expected,
    });
  }

  if (type === "textInput") {
    if (mergedAccepted.length) {
      return enrichAnswerConfig(item, {
        type: item.language === "fr" ? "translation-segment" : "one-of",
        language: item.language || "latin",
        accepted: mergedAccepted,
        tolerateArticles: item.tolerateArticles,
        synonyms: item.synonyms,
      });
    }

    return enrichAnswerConfig(item, {
      type: "exact",
      language: item.language || "latin",
      expected: item.expected,
    });
  }

  return enrichAnswerConfig(item, {
    type: "exact",
    language: item.language || "latin",
    expected: item.expected,
  });
}

export function evaluateProductionItem(item, userAnswer) {
  const config = inferAnswerConfig(item);
  const isItemCorrect = isCorrect(userAnswer, config);
  const maxPoints = Number(item.points || 1);

  return {
    isCorrect: isItemCorrect,
    awardedPoints: isItemCorrect ? maxPoints : 0,
    maxPoints,
    expected: item.expected,
  };
}

export function computeProductionProgress(items = [], resultsByItemId = {}) {
  const results = items.map((item) => resultsByItemId[item.id]).filter(Boolean);

  const answeredCount = items.reduce((count, item) => {
    const result = resultsByItemId[item.id];
    return result && typeof result.userAnswer === "string" ? count + 1 : count;
  }, 0);

  const score = results.reduce((sum, result) => sum + (result.awardedPoints || 0), 0);
  const maxScore = items.reduce((sum, item) => sum + Number(item.points || 1), 0);

  return {
    answeredCount,
    totalItems: items.length,
    score,
    maxScore,
  };
}
