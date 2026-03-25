import assert from "node:assert/strict";
import { LESSONS_SPEC, periods, lessons } from "../assets/js/lessons.js";

function run() {
  assert.equal(LESSONS_SPEC.periods, 3);
  assert.equal(LESSONS_SPEC.lessonsPerPeriod, 13);
  assert.equal(LESSONS_SPEC.lessonsTotal, 39);
  assert.equal(LESSONS_SPEC.lessonMax, 10);
  assert.equal(LESSONS_SPEC.trainingMax, 7);
  assert.equal(LESSONS_SPEC.productionMax, 3);
  assert.equal(LESSONS_SPEC.periodMax, 130);
  assert.equal(LESSONS_SPEC.validationPercent, 80);
  assert.equal(LESSONS_SPEC.validationMinScore, 104);
  assert.equal(periods.length, 3);
  assert.equal(lessons.length, 39);

  periods.forEach((period) => {
    const periodLessons = lessons.filter((lesson) => lesson.periodId === period.id);
    assert.equal(periodLessons.length, 13);
    assert.equal(period.maxScore, 130);
  });

  console.log("spec-invariants assertions passed");
}

run();
