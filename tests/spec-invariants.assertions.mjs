import assert from "node:assert/strict";
import {
  LEVEL_LESSONS_SPEC,
  LESSONS_SPEC,
  periods,
  lessons,
  periodsByLevel,
  lessonsByLevel,
} from "../assets/js/lessons.js";

const EXPECTED_SPECS = {
  "5e": {
    periods: 3,
    lessonsPerPeriod: 13,
    lessonsTotal: 39,
    lessonMax: 10,
    trainingMax: 7,
    productionMax: 3,
    periodMax: 130,
    validationPercent: 80,
    validationMinScore: 104,
  },
  "4e": {
    periods: 3,
    lessonsPerPeriod: 15,
    lessonsTotal: 45,
    lessonMax: 13,
    trainingMax: 7,
    productionMax: 6,
    periodMax: 195,
    validationPercent: 80,
    validationMinScore: 156,
  },
  "3e": {
    periods: 3,
    lessonsPerPeriod: 15,
    lessonsTotal: 45,
    lessonMax: 13,
    trainingMax: 7,
    productionMax: 6,
    periodMax: 195,
    validationPercent: 80,
    validationMinScore: 156,
  },
};

function assertLevelContract(levelId) {
  const expected = EXPECTED_SPECS[levelId];
  const spec = LEVEL_LESSONS_SPEC[levelId];
  const levelPeriods = periodsByLevel[levelId];
  const levelLessons = lessonsByLevel[levelId];

  assert.deepEqual(spec, expected);
  assert.equal(levelPeriods.length, expected.periods);
  assert.equal(levelLessons.length, expected.lessonsTotal);

  levelPeriods.forEach((period) => {
    const periodLessons = levelLessons.filter((lesson) => lesson.periodId === period.id);
    assert.equal(periodLessons.length, expected.lessonsPerPeriod);
    assert.equal(period.maxScore, expected.periodMax);
  });
}

function run() {
  // Compat descendante : les exports non namespacés restent ceux de la 5e
  assert.deepEqual(LESSONS_SPEC, LEVEL_LESSONS_SPEC["5e"]);
  assert.equal(periods.length, 3);
  assert.equal(lessons.length, 39);

  ["5e", "4e", "3e"].forEach(assertLevelContract);

  console.log("spec-invariants assertions passed");
}

run();
