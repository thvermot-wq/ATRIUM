import { normalizeInput } from "./normalize.js";

function stripFrenchArticles(text) {
  return String(text ?? "")
    .replace(/\b(l'|l’)/gi, "")
    .replace(/\b(le|la|les|un|une|des)\b/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeScalar(value) {
  const normalized = normalizeInput(String(value ?? ""), {
    toLowerCase: true,
    trim: true,
    collapseSpaces: true,
    stripTrailingPunctuation: true,
    normalizeApostrophe: true,
    ignoreDiacritics: true,
  });
  return stripFrenchArticles(normalized);
}

function normalizeType(type = "") {
  const map = {
    mcq: "single-choice",
    singleChoice: "single-choice",
    multipleChoice: "multiple-choice",
    textInput: "text-input",
  };
  return map[type] || type;
}

function compareStringArrays(left, right) {
  if (!Array.isArray(left) || !Array.isArray(right)) return false;
  if (left.length !== right.length) return false;
  const leftNormalized = left.map(normalizeScalar).sort();
  const rightNormalized = right.map(normalizeScalar).sort();
  return leftNormalized.every((value, index) => value === rightNormalized[index]);
}

function compareMapping(userMap = {}, expectedMap = {}) {
  const expectedKeys = Object.keys(expectedMap);
  if (expectedKeys.length === 0) return false;
  return expectedKeys.every(
    (key) => normalizeScalar(userMap[key]) === normalizeScalar(expectedMap[key])
  );
}

function compareOrder(userOrder = [], expectedOrder = []) {
  if (!Array.isArray(userOrder) || !Array.isArray(expectedOrder)) return false;
  if (userOrder.length !== expectedOrder.length) return false;
  return userOrder.every(
    (value, index) => normalizeScalar(value) === normalizeScalar(expectedOrder[index])
  );
}

function getTextInputCandidates(item = {}) {
  const expectedValues = Array.isArray(item.expected)
    ? item.expected
    : [item.expected];

  const acceptedAnswers = Array.isArray(item.acceptedAnswers)
    ? item.acceptedAnswers
    : [];

  const answerConfigAccepted = Array.isArray(item?.answerConfig?.accepted)
    ? item.answerConfig.accepted
    : [];

  return [...new Set(
    [...expectedValues, ...acceptedAnswers, ...answerConfigAccepted]
      .filter((value) => typeof value === "string" || typeof value === "number")
  )];
}

export function evaluateTrainingItem(item, userResponse) {
  const itemType = normalizeType(item.type || "single-choice");
  const points = Number(item.points || 1);
  let isCorrect = false;

  if (itemType === "single-choice") {
    isCorrect = normalizeScalar(userResponse) === normalizeScalar(item.expected);
  } else if (itemType === "multiple-choice") {
    isCorrect = compareStringArrays(userResponse, item.expected);
  } else if (itemType === "matching") {
    isCorrect = compareMapping(userResponse, item.expected);
  } else if (itemType === "ordering") {
    isCorrect = compareOrder(userResponse, item.expected);
  } else if (itemType === "text-input") {
    const candidates = getTextInputCandidates(item);
    isCorrect = candidates.some(
      (candidate) => normalizeScalar(userResponse) === normalizeScalar(candidate)
    );
  } else {
    throw new Error(`Unsupported training item type: ${item.type}`);
  }

  return {
    isCorrect,
    awardedPoints: isCorrect ? points : 0,
    maxPoints: points,
    normalizedType: itemType,
  };
}

export function computeTrainingProgress(items = [], resultsByItemId = {}) {
  const totalItems = items.length;
  const results = items
    .map((item) => resultsByItemId[item.id])
    .filter(Boolean);

  const answeredCount = results.length;
  const score = results.reduce((sum, result) => sum + (result.awardedPoints || 0), 0);
  const maxScore = items.reduce((sum, item) => sum + Number(item.points || 1), 0);

  return {
    answeredCount,
    totalItems,
    score,
    maxScore,
  };
}
