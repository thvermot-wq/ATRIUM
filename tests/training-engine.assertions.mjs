import assert from "node:assert/strict";
import { evaluateTrainingItem, computeTrainingProgress } from "../assets/js/trainingEngine.js";

function run() {
  const singleItem = {
    id: "i1",
    type: "single-choice",
    prompt: "...",
    expected: "salve",
    points: 1,
  };
  const singleResult = evaluateTrainingItem(singleItem, " Salve.");
  assert.equal(singleResult.isCorrect, true);
  assert.equal(singleResult.awardedPoints, 1);

  const multipleItem = {
    id: "i2",
    type: "multiple-choice",
    prompt: "...",
    expected: ["aquatique", "aqueux"],
    points: 1,
  };
  assert.equal(evaluateTrainingItem(multipleItem, ["AQUEUX", "aquatique"]).isCorrect, true);
  assert.equal(evaluateTrainingItem(multipleItem, ["aquatique"]).isCorrect, false);

  const matchingItem = {
    id: "i3",
    type: "matching",
    prompt: "...",
    expected: {
      "image rose": "rosa",
      "image livre": "liber",
    },
    points: 1,
  };
  assert.equal(
    evaluateTrainingItem(matchingItem, {
      "image rose": "rosa",
      "image livre": "liber",
    }).isCorrect,
    true,
  );

  const orderingItem = {
    id: "i4",
    type: "ordering",
    prompt: "...",
    expected: ["puella", "aquam", "portat"],
    points: 1,
  };
  assert.equal(evaluateTrainingItem(orderingItem, ["puella", "aquam", "portat"]).isCorrect, true);
  assert.equal(evaluateTrainingItem(orderingItem, ["aquam", "puella", "portat"]).isCorrect, false);

  const progress = computeTrainingProgress(
    [singleItem, multipleItem, matchingItem, orderingItem],
    {
      i1: singleResult,
      i2: { awardedPoints: 1 },
      i3: { awardedPoints: 0 },
    },
  );

  assert.equal(progress.answeredCount, 3);
  assert.equal(progress.totalItems, 4);
  assert.equal(progress.score, 2);

  console.log("training-engine assertions passed");
}

run();
