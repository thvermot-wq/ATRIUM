import assert from "node:assert/strict";
import { getLessonStatus } from "../assets/js/lessonStatus.js";

function run() {
  const notStarted = getLessonStatus(null, { lessonMax: 10 });
  assert.equal(notStarted.code, "not_started");

  const retry = getLessonStatus(
    { playedAt: new Date().toISOString(), current: { totalScore: 3 }, best: { totalScore: 3 } },
    { lessonMax: 10 },
  );
  assert.equal(retry.code, "to_retry");

  const inProgress = getLessonStatus(
    { playedAt: new Date().toISOString(), current: { totalScore: 6 }, best: { totalScore: 6 } },
    { lessonMax: 10 },
  );
  assert.equal(inProgress.code, "in_progress");

  const validated = getLessonStatus(
    { playedAt: new Date().toISOString(), current: { totalScore: 8 }, best: { totalScore: 10 } },
    { lessonMax: 10 },
  );
  assert.equal(validated.code, "validated");

  console.log("lesson-status assertions passed");
}

run();
