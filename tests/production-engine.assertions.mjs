import assert from "node:assert/strict";
import { evaluateProductionItem, computeProductionProgress } from "../assets/js/productionEngine.js";

function run() {
  const latinItem = {
    id: "p1",
    type: "image-to-word",
    expected: "rosa",
    points: 1,
  };
  const latinResult = evaluateProductionItem(latinItem, " Rosa.");
  assert.equal(latinResult.isCorrect, true);
  assert.equal(latinResult.awardedPoints, 1);

  const frItem = {
    id: "p2",
    type: "short-text",
    expected: "l'esclave salue",
    points: 1,
  };
  const frResult = evaluateProductionItem(frItem, "l’esclave salue");
  assert.equal(frResult.isCorrect, true);

  const wrongItem = {
    id: "p3",
    type: "find-verb",
    expected: "portat",
    points: 1,
  };
  const wrongResult = evaluateProductionItem(wrongItem, "servus");
  assert.equal(wrongResult.isCorrect, false);
  assert.equal(wrongResult.awardedPoints, 0);

  const progress = computeProductionProgress(
    [latinItem, frItem, wrongItem],
    {
      p1: { ...latinResult, userAnswer: "rosa" },
      p2: { ...frResult, userAnswer: "l'esclave salue" },
      p3: { ...wrongResult, userAnswer: "servus" },
    },
  );

  assert.equal(progress.answeredCount, 3);
  assert.equal(progress.totalItems, 3);
  assert.equal(progress.score, 2);
  assert.equal(progress.maxScore, 3);

  console.log("production-engine assertions passed");
}

run();
