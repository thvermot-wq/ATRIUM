import assert from "node:assert/strict";
import { lessons, LESSONS_SPEC } from "../assets/js/lessons.js";

function run() {
  const playable = lessons.filter((lesson) => lesson?.meta?.status === "ready");
  const playableIds = playable.map((lesson) => lesson.id).sort();
  const expectedPlayableIds = [
    "5e-p1-l1",
    "5e-p1-l10",
    "5e-p1-l11",
    "5e-p1-l12",
    "5e-p1-l2",
    "5e-p1-l3",
    "5e-p1-l4",
    "5e-p1-l5",
    "5e-p1-l6",
    "5e-p1-l7",
    "5e-p1-l8",
    "5e-p1-l9",
    "5e-p2-l1",
    "5e-p2-l10",
    "5e-p2-l11",
    "5e-p2-l12",
    "5e-p2-l2",
    "5e-p2-l3",
    "5e-p2-l4",
    "5e-p2-l5",
    "5e-p2-l6",
    "5e-p2-l7",
    "5e-p2-l8",
    "5e-p2-l9",
    "5e-p3-l11",
    "5e-p3-l12",
    "5e-p3-l13",
    "5e-p3-l14",
    "5e-p3-l15",
    "5e-p3-l16",
  ];

  assert.deepEqual(playableIds, expectedPlayableIds);

  playable.forEach((lesson) => {
    assert.equal(lesson.training.length, LESSONS_SPEC.trainingMax);
    assert.equal(lesson.production.length, LESSONS_SPEC.productionMax);
  });

  const nonPlayable = lessons.filter((lesson) => lesson?.meta?.status !== "ready");
  assert.equal(nonPlayable.length, 6);

  console.log("playable-lessons assertions passed");
}

run();
