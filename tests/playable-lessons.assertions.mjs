import assert from "node:assert/strict";
import { lessons, LESSONS_SPEC } from "../assets/js/lessons.js";

function run() {
  const playable = lessons.filter((lesson) => lesson?.meta?.status === "ready");
  const playableIds = playable.map((lesson) => lesson.id).sort();
  const expectedPlayableIds = Array.from({ length: 12 }, (_, i) => `p1-l${i + 1}`).sort();

  assert.deepEqual(playableIds, expectedPlayableIds);

  playable.forEach((lesson) => {
    assert.equal(lesson.training.length, LESSONS_SPEC.trainingMax);
    assert.equal(lesson.production.length, LESSONS_SPEC.productionMax);
  });

  const nonPlayable = lessons.filter((lesson) => lesson?.meta?.status !== "ready");
  assert.equal(nonPlayable.length, LESSONS_SPEC.lessonsTotal - expectedPlayableIds.length);

  console.log("playable-lessons assertions passed");
}

run();
