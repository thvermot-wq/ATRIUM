import assert from "node:assert/strict";
import { lessons, LESSONS_SPEC } from "../assets/js/lessons.js";

function run() {
  const playable = lessons.filter((lesson) => lesson?.meta?.status === "ready");
  const playableIds = playable.map((lesson) => lesson.id).sort();

  assert.deepEqual(playableIds, ["p1-l1", "p1-l2", "p3-l11"]);

  playable.forEach((lesson) => {
    assert.equal(lesson.training.length, LESSONS_SPEC.trainingMax);
    assert.equal(lesson.production.length, LESSONS_SPEC.productionMax);
  });

  const nonPlayable = lessons.filter((lesson) => lesson?.meta?.status !== "ready");
  nonPlayable.forEach((lesson) => {
    assert.notEqual(lesson.id, "p1-l1");
    assert.notEqual(lesson.id, "p1-l2");
    assert.notEqual(lesson.id, "p3-l11");
  });

  console.log("playable-lessons assertions passed");
}

run();
