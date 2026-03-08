import { isCorrect } from "./answerChecker.js";

function inferAnswerConfig(item) {
  if (item && item.answerConfig && typeof item.answerConfig === "object") {
    return item.answerConfig;
  }

  const type = item.type || "exact";

  const acceptedAnswers =
    (Array.isArray(item.acceptedAnswers) && item.acceptedAnswers.length && item.acceptedAnswers) ||
    (Array.isArray(item.accepted) && item.accepted.length && item.accepted) ||
    [item.expected];

  if (type === "textInput" || type === "short-text" || type === "translation-segment") {
    return {
      type: "translation-segment",
      language: item.language || "fr",
      accepted: acceptedAnswers,
    };
  }

  if (type === "image-to-word" || type === "situation-to-formula" || type === "find-verb") {
    return {
      type: "exact",
      language: "latin",
      expected: item.expected,
    };
  }

  if (type === "one-of") {
    return {
      type: "one-of",
      language: item.language || "fr",
      accepted: acceptedAnswers,
    };
  }

  if (type === "latin-expression") {
    return {
      type: "latin-expression",
      language: "latin",
      expected: item.expected,
    };
  }

  if (type === "textInput") {
    if (Array.isArray(item.accepted) && item.accepted.length) {
      return {
        type: "translation-segment",
        language: item.language || "fr",
        accepted: item.accepted,
      };
    }

    return {
      type: "exact",
      language: item.language || "latin",
      expected: item.expected,
    };
  }

  return {
    type: "exact",
    language: item.language || "latin",
    expected: item.expected,
  };
}

export function evaluateProductionItem(item, userAnswer) {
  const config = inferAnswerConfig(item);
  const isItemCorrect = isCorrect(userAnswer, config);
  const maxPoints = Number(item.points || 1);
  const expected = item.expected || (Array.isArray(item.acceptedAnswers) ? item.acceptedAnswers[0] : "");

  return {
    isCorrect: isItemCorrect,
    awardedPoints: isItemCorrect ? maxPoints : 0,
    maxPoints,
    expected,
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
