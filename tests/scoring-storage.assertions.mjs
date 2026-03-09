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
  // /10 lesson scoring
  assert.deepEqual(computeLessonScore({ trainingScore: 7, productionScore: 3 }).totalScore, 10);
  assert.deepEqual(computeLessonScore({ trainingScore: 9, productionScore: 5 }).totalScore, 10);

  // /120 period scoring + percentage
  const periodData = computePeriodScore({ lessonScores: Array(12).fill(10), periodMax: 120 });
  assert.equal(periodData.totalScore, 120);
  assert.equal(periodData.percent, 100);

  // status thresholds 80/60
  assert.equal(getPeriodStatus(80), "période validée");
  assert.equal(getPeriodStatus(79), "consolidation nécessaire");
  assert.equal(getPeriodStatus(60), "consolidation nécessaire");
  assert.equal(getPeriodStatus(59), "période à reprendre");

  // best score preserved when lesson replayed
  let progress = createInitialProgress({ lessons, periods });
  progress = saveLessonProgress({
    progress,
    lessonId: "p1-l1",
    trainingScore: 7,
    productionScore: 3,
    lessons,
    periods,
  });
  assert.equal(progress.lessons["p1-l1"].current.totalScore, 10);
  assert.equal(progress.lessons["p1-l1"].best.totalScore, 10);
  assert.equal(typeof progress.lessons["p1-l1"].playedAt, "string");

  progress = saveLessonProgress({
    progress,
    lessonId: "p1-l1",
    trainingScore: 2,
    productionScore: 1,
    lessons,
    periods,
  });
  assert.equal(progress.lessons["p1-l1"].current.totalScore, 3);
  assert.equal(progress.lessons["p1-l1"].best.totalScore, 10);

  // period auto recalculated using best lesson scores
  assert.equal(progress.periods.p1.totalScore >= 10, true);

  // storage load/save roundtrip
  saveProgress(progress);
  const raw = globalThis.localStorage.getItem(STORAGE_KEY);
  assert.equal(typeof raw, "string");
  const loaded = loadProgress({ lessons, periods });
  assert.equal(loaded.lessons["p1-l1"].best.totalScore, 10);
  assert.equal(typeof loaded.lessons["p1-l1"].playedAt, "string");

  console.log("scoring-storage assertions passed");
}

run();
