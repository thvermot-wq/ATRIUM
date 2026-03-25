import { getLessonSpecForLevel } from "./lessons.js";

export function getScoringContract(levelId = "5e") {
  const spec = getLessonSpecForLevel(levelId);
  return {
    lessonMax: spec.lessonMax,
    trainingMax: spec.trainingMax,
    productionMax: spec.productionMax,
    periodMax: spec.periodMax,
    validationPercent: spec.validationPercent,
    validationMinScore: spec.validationMinScore,
  };
}

function clampScore(value, min, max) {
  const num = Number(value);
  if (!Number.isFinite(num)) return min;
  return Math.max(min, Math.min(max, Math.round(num)));
}

export function computeLessonScore({
  trainingScore = 0,
  productionScore = 0,
  levelId = "5e",
} = {}) {
  const contract = getScoringContract(levelId);
  const safeTraining = clampScore(trainingScore, 0, contract.trainingMax);
  const safeProduction = clampScore(productionScore, 0, contract.productionMax);
  const totalScore = safeTraining + safeProduction;

  return {
    trainingScore: safeTraining,
    productionScore: safeProduction,
    totalScore,
    maxScore: contract.lessonMax,
  };
}

export function getPeriodStatus(percent) {
  if (percent >= 80) {
    return "période validée";
  }
  if (percent >= 60) {
    return "consolidation nécessaire";
  }
  return "période à reprendre";
}

export function computePeriodScore({
  lessonScores = [],
  periodMax = null,
  levelId = "5e",
} = {}) {
  const contract = getScoringContract(levelId);
  const resolvedPeriodMax =
    periodMax == null ? contract.periodMax : Number(periodMax);
  const safePeriodMax = Number.isFinite(resolvedPeriodMax)
    ? resolvedPeriodMax
    : contract.periodMax;

  const totalScore = clampScore(
    lessonScores.reduce(
      (sum, score) => sum + clampScore(score, 0, contract.lessonMax),
      0,
    ),
    0,
    safePeriodMax,
  );

  const percent =
    safePeriodMax > 0 ? Math.round((totalScore / safePeriodMax) * 100) : 0;

  return {
    totalScore,
    maxScore: safePeriodMax,
    percent,
    status: getPeriodStatus(percent),
  };
}
