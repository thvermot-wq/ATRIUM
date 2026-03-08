import { LESSONS_SPEC } from "./lessons.js";

export function getScoringContract() {
  return {
    lessonMax: LESSONS_SPEC.lessonMax,
    trainingMax: LESSONS_SPEC.trainingMax,
    productionMax: LESSONS_SPEC.productionMax,
    periodMax: LESSONS_SPEC.periodMax,
    validationPercent: LESSONS_SPEC.validationPercent,
    validationMinScore: LESSONS_SPEC.validationMinScore,
  };
}

function clampScore(value, min, max) {
  const num = Number(value);
  if (!Number.isFinite(num)) return min;
  return Math.max(min, Math.min(max, Math.round(num)));
}

export function computeLessonScore({ trainingScore = 0, productionScore = 0 } = {}) {
  const contract = getScoringContract();

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

export function computePeriodScore({ lessonScores = [], periodMax = LESSONS_SPEC.periodMax } = {}) {
  const totalScore = clampScore(
    lessonScores.reduce((sum, score) => sum + clampScore(score, 0, LESSONS_SPEC.lessonMax), 0),
    0,
    periodMax,
  );

  const percent = periodMax > 0 ? Math.round((totalScore / periodMax) * 100) : 0;

  return {
    totalScore,
    maxScore: periodMax,
    percent,
    status: getPeriodStatus(percent),
  };
}
