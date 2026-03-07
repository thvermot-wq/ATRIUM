import { LESSONS_SPEC } from "./lessons.js";

// Garde-fou contractuel centralisé.
export function getScoringContract() {
  return {
    lessonMax: LESSONS_SPEC.lessonMax,
    trainingMax: LESSONS_SPEC.trainingMax,
    productionMax: LESSONS_SPEC.productionMax,
    periodMax: LESSONS_SPEC.periodMax,
    validationPercent: LESSONS_SPEC.validationPercent,
  };
}

// TODO: implémenter le moteur de scoring complet.
