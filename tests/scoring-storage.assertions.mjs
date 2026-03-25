import assert from "node:assert/strict";

import { getLessonsByLevel, getPeriodsByLevel } from "../assets/js/lessons.js";
import { computeLessonScore, computePeriodScore, getPeriodStatus } from "../assets/js/scoring.js";
import {
  createInitialProgress,
  saveLessonProgress,
  saveProgress,
  loadProgress,
  STORAGE_KEY,
} from "../assets/js/storage.js";

class MemoryStorage {
  constructor() {
    this.map = new Map();
  }

  getItem(key) {
    return this.map.has(key) ? this.map.get(key) : null;
  }

  setItem(key, value) {
    this.map.set(key, String(value));
  }

  removeItem(key) {
    this.map.delete(key);
  }
}

globalThis.localStorage = new MemoryStorage();

function runSharedStatusAssertions() {
  assert.equal(getPeriodStatus(80), "période validée");
  assert.equal(getPeriodStatus(79), "consolidation nécessaire");
  assert.equal(getPeriodStatus(60), "consolidation nécessaire");
  assert.equal(getPeriodStatus(59), "période à reprendre");
}

function run5eAssertions() {
  const lessons = getLessonsByLevel("5e");
  const periods = getPeriodsByLevel("5e");

  assert.equal(
    computeLessonScore({ trainingScore: 7, productionScore: 3, levelId: "5e" }).totalScore,
    10,
  );
  assert.equal(
    computeLessonScore({ trainingScore: 9, productionScore: 5, levelId: "5e" }).totalScore,
    10,
  );

  const periodData = computePeriodScore({
    lessonScores: Array(13).fill(10),
    levelId: "5e",
  });

  assert.equal(periodData.totalScore, 130);
  assert.equal(periodData.maxScore, 130);
  assert.equal(periodData.percent, 100);

  let progress = createInitialProgress({ lessons, periods });

  progress = saveLessonProgress({
    progress,
    lessonId: "5e-p1-l1",
    trainingScore: 7,
    productionScore: 3,
    lessons,
    periods,
  });

  assert.equal(progress.lessons["5e-p1-l1"].current.totalScore, 10);
  assert.equal(progress.lessons["5e-p1-l1"].best.totalScore, 10);
  assert.equal(progress.lessons["5e-p1-l1"].current.maxScore, 10);
  assert.equal(progress.periods["5e-p1"].maxScore, 130);
  assert.equal(typeof progress.lessons["5e-p1-l1"].playedAt, "string");

  progress = saveLessonProgress({
    progress,
    lessonId: "5e-p1-l1",
    trainingScore: 2,
    productionScore: 1,
    lessons,
    periods,
  });

  assert.equal(progress.lessons["5e-p1-l1"].current.totalScore, 3);
  assert.equal(progress.lessons["5e-p1-l1"].best.totalScore, 10);
  assert.equal(progress.periods["5e-p1"].totalScore >= 10, true);

  saveProgress(progress, { levelId: "5e" });

  const raw = globalThis.localStorage.getItem("atrium:progress:5e");
  assert.equal(typeof raw, "string");

  const loaded = loadProgress({ lessons, periods, levelId: "5e" });
  assert.equal(loaded.lessons["5e-p1-l1"].best.totalScore, 10);
  assert.equal(loaded.periods["5e-p1"].maxScore, 130);
  assert.equal(typeof loaded.lessons["5e-p1-l1"].playedAt, "string");

  globalThis.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  const fromLegacy5e = loadProgress({ lessons, periods, levelId: "5e" });
  assert.equal(fromLegacy5e.lessons["5e-p1-l1"].best.totalScore, 10);
}

function runAdvancedLevelAssertions(levelId) {
  const lessons = getLessonsByLevel(levelId);
  const periods = getPeriodsByLevel(levelId);
  const lessonId = `${levelId}-p1-l1`;
  const periodId = `${levelId}-p1`;

  assert.equal(
    computeLessonScore({ trainingScore: 7, productionScore: 6, levelId }).totalScore,
    13,
  );
  assert.equal(
    computeLessonScore({ trainingScore: 9, productionScore: 7, levelId }).totalScore,
    13,
  );

  const periodData = computePeriodScore({
    lessonScores: Array(15).fill(13),
    levelId,
  });

  assert.equal(periodData.totalScore, 195);
  assert.equal(periodData.maxScore, 195);
  assert.equal(periodData.percent, 100);

  let progress = createInitialProgress({ lessons, periods });

  progress = saveLessonProgress({
    progress,
    lessonId,
    trainingScore: 7,
    productionScore: 6,
    lessons,
    periods,
  });

  assert.equal(progress.lessons[lessonId].current.totalScore, 13);
  assert.equal(progress.lessons[lessonId].best.totalScore, 13);
  assert.equal(progress.lessons[lessonId].current.maxScore, 13);
  assert.equal(progress.periods[periodId].maxScore, 195);

  saveProgress(progress, { levelId });

  const raw = globalThis.localStorage.getItem(`atrium:progress:${levelId}`);
  assert.equal(typeof raw, "string");

  const loaded = loadProgress({ lessons, periods, levelId });
  assert.equal(loaded.lessons[lessonId].best.totalScore, 13);
  assert.equal(loaded.lessons[lessonId].best.maxScore, 13);
  assert.equal(loaded.periods[periodId].maxScore, 195);
}

function run() {
  runSharedStatusAssertions();
  run5eAssertions();
  runAdvancedLevelAssertions("4e");
  runAdvancedLevelAssertions("3e");

  console.log("scoring-storage assertions passed");
}

run();
