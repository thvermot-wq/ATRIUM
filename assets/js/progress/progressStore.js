import { getLessonSpecForLevel } from "../lessons.js";
import { enqueueProgressEvent } from "./progressLocalQueue.js";

const STORAGE_PREFIX = "atrium:student-lesson-progress";

function keyFor(studentUserId) {
  return `${STORAGE_PREFIX}:${studentUserId}`;
}

function loadMap(studentUserId) {
  if (!studentUserId) return {};
  const raw = localStorage.getItem(keyFor(studentUserId));
  if (!raw) return {};
  try {
    return JSON.parse(raw) || {};
  } catch {
    return {};
  }
}

function saveMap(studentUserId, map) {
  localStorage.setItem(keyFor(studentUserId), JSON.stringify(map));
}

export function recordLessonOpen({ studentUserId, classId, lesson }) {
  if (!studentUserId || !lesson?.id) return null;
  const map = loadMap(studentUserId);
  const current = map[lesson.id] || {
    status: "not_started",
    first_score: null,
    best_score: null,
    attempts_count: 0,
  };

  const next = {
    ...current,
    student_user_id: studentUserId,
    class_id: classId || null,
    subject: "latin",
    level: lesson.levelId,
    period: lesson.period,
    lesson_id: lesson.id,
    lesson_title: lesson.title,
    status: current.status === "not_started" ? "in_progress" : current.status,
    last_activity_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  map[lesson.id] = next;
  saveMap(studentUserId, map);
  enqueueProgressEvent({ type: "upsert_progress", payload: next }).catch(() => {});
  return next;
}

export function recordLessonSubmission({ studentUserId, classId, lesson, score }) {
  if (!studentUserId || !lesson?.id) return null;
  const spec = getLessonSpecForLevel(lesson.levelId);
  const validationThreshold = Math.ceil((spec.validationPercent / 100) * spec.lessonMax);

  const map = loadMap(studentUserId);
  const current = map[lesson.id] || {
    status: "in_progress",
    first_score: null,
    best_score: null,
    attempts_count: 0,
  };

  const firstScore = current.first_score == null ? score : current.first_score;
  const bestScore = Math.max(current.best_score ?? 0, score);
  const validated = bestScore >= validationThreshold;
  const now = new Date().toISOString();

  const next = {
    ...current,
    student_user_id: studentUserId,
    class_id: classId || null,
    subject: "latin",
    level: lesson.levelId,
    period: lesson.period,
    lesson_id: lesson.id,
    lesson_title: lesson.title,
    first_score: firstScore,
    best_score: bestScore,
    attempts_count: Number(current.attempts_count || 0) + 1,
    status: validated ? "validated" : "completed",
    completed_at: current.completed_at || now,
    validated_at: validated ? (current.validated_at || now) : current.validated_at || null,
    last_activity_at: now,
    updated_at: now,
  };

  map[lesson.id] = next;
  saveMap(studentUserId, map);
  enqueueProgressEvent({ type: "upsert_progress", payload: next }).catch(() => {});
  return next;
}

export function loadStudentProgressMap(studentUserId) {
  return loadMap(studentUserId);
}
