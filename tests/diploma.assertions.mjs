import assert from "node:assert/strict";
import { lessons, periods } from "../assets/js/lessons.js";
import { createInitialProgress, saveLessonProgress } from "../assets/js/storage.js";
import {
  areAllLessonsCompleted,
  buildDiplomaData,
  getLcaCefrProfile,
  getSchoolCertificationLabel,
  isPeriodDiplomaEligible,
} from "../assets/js/diploma.js";

function completePeriod(periodId, progress) {
  const fullPeriodId = periodId.startsWith("5e-") ? periodId : `5e-${periodId}`;
  const periodLessons = lessons.filter((lesson) => lesson.periodId === fullPeriodId);
  let next = progress;
  periodLessons.forEach((lesson) => {
    next = saveLessonProgress({
      progress: next,
      lessonId: lesson.id,
      trainingScore: 7,
      productionScore: 1,
      lessons,
      periods,
    });
  });
  return next;
}

function run() {
  let progress = createInitialProgress({ lessons, periods });

  assert.equal(areAllLessonsCompleted("p1", progress), false);
  assert.equal(isPeriodDiplomaEligible("p1", progress), false);

  progress = completePeriod("p1", progress);
  assert.equal(areAllLessonsCompleted("p1", progress), true);
  assert.equal(progress.periods["5e-p1"].totalScore, 96);
  assert.equal(isPeriodDiplomaEligible("p1", progress), true);

  assert.equal(getSchoolCertificationLabel("p1"), "Certification scolaire : Acclimatation progressive validée");
  assert.equal(getSchoolCertificationLabel("p2"), "Certification scolaire : Consolidation validée");
  assert.equal(getSchoolCertificationLabel("p3"), "Certification scolaire : Structuration validée");

  assert.equal(getLcaCefrProfile("p1", 96), "Pré-A1 validé – profil LCA");
  assert.equal(getLcaCefrProfile("p1", 120), "Pré-A1+ validé – profil LCA");
  assert.equal(getLcaCefrProfile("p2", 108), "A1 émergent – profil LCA");
  assert.equal(getLcaCefrProfile("p3", 107), "A1 émergent validé – profil LCA");
  assert.equal(getLcaCefrProfile("p3", 120), "A1 réception écrite guidée validé – profil LCA");

  const diplomaData = buildDiplomaData("p1", progress, { studentName: "Nora", className: "5eA" });
  assert.equal(diplomaData.studentName, "Nora");
  assert.equal(diplomaData.className, "5eA");
  assert.equal(diplomaData.eligible, true);
  assert.equal(diplomaData.bestPeriodScore, 96);

  const fallbackData = buildDiplomaData("p2", progress, {});
  assert.equal(fallbackData.studentName, "Élève ATRIUM");

  console.log("diploma assertions passed");
}

run();
