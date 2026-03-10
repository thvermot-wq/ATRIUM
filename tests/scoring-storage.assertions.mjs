import assert from "node:assert/strict";
import { lessons, periods } from "../assets/js/lessons.js";
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

function run() {
  assert.deepEqual(computeLessonScore({ trainingScore: 7, productionScore: 3 }).totalScore, 10);
  assert.deepEqual(computeLessonScore({ trainingScore: 9, productionScore: 5 }).totalScore, 10);

  const periodData = computePeriodScore({ lessonScores: Array(12).fill(10), periodMax: 120 });
  assert.equal(periodData.totalScore, 120);
  assert.equal(periodData.percent, 100);

  assert.equal(getPeriodStatus(80), "période validée");
  assert.equal(getPeriodStatus(79), "consolidation nécessaire");
  assert.equal(getPeriodStatus(60), "consolidation nécessaire");
  assert.equal(getPeriodStatus(59), "période à reprendre");

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
  assert.equal(typeof loaded.lessons["5e-p1-l1"].playedAt, "string");

  // legacy key is read for 5e only, not for other levels
  globalThis.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  const fromLegacy5e = loadProgress({ lessons, periods, levelId: "5e" });
  assert.equal(fromLegacy5e.lessons["5e-p1-l1"].best.totalScore, 10);

  console.log("scoring-storage assertions passed");
}

run();
