import assert from "node:assert/strict";
import { lessons, LESSONS_SPEC } from "../assets/js/lessons.js";

function run() {
  const playable = lessons.filter((lesson) => lesson?.meta?.status === "ready");
  const playableIds = playable.map((lesson) => lesson.id).sort();
  const expectedPlayableIds = [
    "p1-l1",
    "p1-l2",
    "p1-l3",
    "p1-l4",
    "p1-l5",
    "p1-l6",
    "p2-l10",
    "p2-l6",
    "p2-l7",
    "p2-l8",
    "p2-l9",
    "p3-l11",
    "p3-l12",
    "p3-l13",
    "p3-l14",
    "p3-l15",
  ];

  assert.deepEqual(playableIds, expectedPlayableIds);

  playable.forEach((lesson) => {
    assert.equal(lesson.training.length, LESSONS_SPEC.trainingMax);
    assert.equal(lesson.production.length, LESSONS_SPEC.productionMax);
  });

  const nonPlayable = lessons.filter((lesson) => lesson?.meta?.status !== "ready");
  assert.equal(nonPlayable.length, 20);

  console.log("playable-lessons assertions passed");
}

run();
