import { isCorrect } from "./answerChecker.js";

function inferAnswerConfig(item) {
  const type = item.type || "exact";

  if (type === "image-to-word" || type === "situation-to-formula" || type === "find-verb") {
    return {
      type: "exact",
      language: "latin",
      expected: item.expected,
    };
  }

  if (type === "short-text") {
    return {
      type: "translation-segment",
      language: "fr",
      accepted: [item.expected],
    };
  }

  if (type === "latin-expression") {
    return {
      type: "latin-expression",
      language: "latin",
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
