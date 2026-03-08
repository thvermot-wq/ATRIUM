import { normalizeInput } from "./normalize.js";

function normalizeScalar(value) {
  return normalizeInput(String(value ?? ""), {
    toLowerCase: true,
    trim: true,
    collapseSpaces: true,
    stripTrailingPunctuation: true,
    normalizeApostrophe: true,
    ignoreDiacritics: true,
  });
}

function normalizeType(type = "") {
  if (type === "mcq") return "single-choice";
  if (type === "singleChoice") return "single-choice";
  if (type === "multipleChoice") return "multiple-choice";
  return type;
}

function getExpected(item) {
  return item.expected ?? item.answer;
}

function getExpectedArray(item) {
  return item.expected ?? item.answers ?? [];
}

function getExpectedMap(item) {
  if (item.expected) return item.expected;
  if (item.answers && !Array.isArray(item.answers)) return item.answers;
  const left = item.leftItems || [];
  const right = item.rightItems || [];
  return left.reduce((acc, key, index) => {
    acc[key] = right[index] || "";
    return acc;
  }, {});
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

  return expectedKeys.every((key) => normalizeScalar(userMap[key]) === normalizeScalar(expectedMap[key]));
}

function compareOrder(userOrder = [], expectedOrder = []) {
  if (!Array.isArray(userOrder) || !Array.isArray(expectedOrder)) return false;
  if (userOrder.length !== expectedOrder.length) return false;

  return userOrder.every((value, index) => normalizeScalar(value) === normalizeScalar(expectedOrder[index]));
}

export function evaluateTrainingItem(item, userResponse) {
  const itemType = normalizeType(item.type || "single-choice");
  const points = Number(item.points || 1);

  let isCorrect = false;

  if (itemType === "single-choice") {
    isCorrect = normalizeScalar(userResponse) === normalizeScalar(getExpected(item));
  } else if (itemType === "multiple-choice") {
    isCorrect = compareStringArrays(userResponse, getExpectedArray(item));
  } else if (itemType === "matching") {
    isCorrect = compareMapping(userResponse, getExpectedMap(item));
  } else if (itemType === "ordering") {
    isCorrect = compareOrder(userResponse, getExpected(item));
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
