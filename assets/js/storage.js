import { LESSONS_SPEC, getLessonSpecForLevel } from "./lessons.js";
import { computeLessonScore, computePeriodScore } from "./scoring.js";

export const STORAGE_KEY = "atrium-progress-v1";
export const APP_STATE_KEY = "atrium-app-state-v1";

function getStorageKey(levelId = "5e") {
  return `atrium:progress:${levelId}`;
}

function resolveLevelId({ lessons = [], periods = [], lessonId = null, fallback = "5e" } = {}) {
  const fromLessonId =
    typeof lessonId === "string" ? String(lessonId).split("-")[0] : null;

  if (fromLessonId && ["5e", "4e", "3e"].includes(fromLessonId)) {
    return fromLessonId;
  }

  const fromLessonArray = lessons.find((lesson) => lesson?.levelId)?.levelId;
  if (fromLessonArray) return fromLessonArray;

  const fromPeriodArray = periods.find((period) => period?.levelId)?.levelId;
  if (fromPeriodArray) return fromPeriodArray;

  return fallback;
}

function defaultLessonProgress(levelId = "5e") {
  const spec = getLessonSpecForLevel(levelId);

  return {
    current: {
      trainingScore: 0,
      productionScore: 0,
      totalScore: 0,
      maxScore: spec.lessonMax,
    },
    best: {
      trainingScore: 0,
      productionScore: 0,
      totalScore: 0,
      maxScore: spec.lessonMax,
    },
    playedAt: null,
  };
}

function defaultPeriodProgress(levelId = "5e", maxScore = null) {
  const spec = getLessonSpecForLevel(levelId);

  return {
    totalScore: 0,
    maxScore: maxScore ?? spec.periodMax,
    percent: 0,
    status: "période à reprendre",
  };
}

function defaultAppState() {
  return {
    lastVisited: null,
    updatedAt: null,
  };
}

export function buildLessonHash({ levelId = "5e", lessonId }) {
  if (!lessonId) return `#/${levelId}`;
  return `#/${levelId}/lesson/${lessonId}`;
}

export function createInitialProgress({ lessons, periods }) {
  const levelId = resolveLevelId({ lessons, periods });

  const lessonProgress = lessons.reduce((acc, lesson) => {
    acc[lesson.id] = defaultLessonProgress(levelId);
    return acc;
  }, {});

  const periodProgress = periods.reduce((acc, period) => {
    acc[period.id] = defaultPeriodProgress(levelId, period.maxScore);
    return acc;
  }, {});

  return {
    lessons: lessonProgress,
    periods: periodProgress,
    updatedAt: new Date().toISOString(),
  };
}

function safelyParse(raw) {
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function migrateLegacyIdsFor5e(parsed, { lessons, periods }) {
  if (!parsed || typeof parsed !== "object") return null;

  const next = {
    ...parsed,
    lessons: { ...(parsed.lessons || {}) },
    periods: { ...(parsed.periods || {}) },
  };

  lessons.forEach((lesson) => {
    const legacyId = lesson.id.replace(/^5e-/, "");
    if (!next.lessons[lesson.id] && next.lessons[legacyId]) {
      next.lessons[lesson.id] = next.lessons[legacyId];
    }
  });

  periods.forEach((period) => {
    const legacyId = period.id.replace(/^5e-/, "");
    if (!next.periods[period.id] && next.periods[legacyId]) {
      next.periods[period.id] = next.periods[legacyId];
    }
  });

  return next;
}

export function recomputePeriodProgress({ progress, lessons, periods }) {
  const levelId = resolveLevelId({ lessons, periods });
  const spec = getLessonSpecForLevel(levelId);

  const next = {
    ...progress,
    periods: { ...(progress.periods || {}) },
  };

  periods.forEach((period) => {
    const periodLessons = lessons.filter((lesson) => lesson.periodId === period.id);
    const lessonScores = periodLessons.map((lesson) => {
      const entry = next.lessons?.[lesson.id];
      return entry?.best?.totalScore ?? 0;
    });

    next.periods[period.id] = computePeriodScore({
      lessonScores,
      periodMax: period.maxScore ?? spec.periodMax,
      levelId,
    });
  });

  next.updatedAt = new Date().toISOString();
  return next;
}

export function loadProgress({ lessons, periods, levelId = "5e" }) {
  const fallback = createInitialProgress({ lessons, periods });
  const namespacedRaw = localStorage.getItem(getStorageKey(levelId));

  let parsed = safelyParse(namespacedRaw);

  if (!parsed && levelId === "5e") {
    const legacyRaw = localStorage.getItem(STORAGE_KEY);
    const legacyParsed = safelyParse(legacyRaw);
    parsed = migrateLegacyIdsFor5e(legacyParsed, { lessons, periods });
  }

  if (!parsed || typeof parsed !== "object") return fallback;

  const merged = {
    ...fallback,
    ...parsed,
    lessons: { ...fallback.lessons, ...(parsed.lessons || {}) },
    periods: { ...fallback.periods, ...(parsed.periods || {}) },
  };

  const lessonDefaults = defaultLessonProgress(levelId);

  Object.keys(merged.lessons).forEach((lessonId) => {
    const entry = merged.lessons[lessonId] || {};

    merged.lessons[lessonId] = {
      current: {
        ...lessonDefaults.current,
        ...(entry.current || {}),
      },
      best: {
        ...lessonDefaults.best,
        ...(entry.best || {}),
      },
      playedAt: typeof entry.playedAt === "string" ? entry.playedAt : null,
    };
  });

  return recomputePeriodProgress({ progress: merged, lessons, periods });
}

export function saveProgress(progress, { levelId = "5e" } = {}) {
  const payload = JSON.stringify(progress);
  localStorage.setItem(getStorageKey(levelId), payload);
}

export function saveLessonProgress({
  progress,
  lessonId,
  trainingScore,
  productionScore,
  lessons,
  periods,
}) {
  const levelId = resolveLevelId({ lessons, periods, lessonId });
  const spec = getLessonSpecForLevel(levelId);

  const lessonResult = computeLessonScore({
    trainingScore,
    productionScore,
    levelId,
  });

  const existing = progress.lessons?.[lessonId] || defaultLessonProgress(levelId);

  const nextBest =
    lessonResult.totalScore >= (existing.best?.totalScore || 0)
      ? lessonResult
      : {
          ...existing.best,
          maxScore: spec.lessonMax,
        };

  const nextProgress = {
    ...progress,
    lessons: {
      ...progress.lessons,
      [lessonId]: {
        current: lessonResult,
        best: nextBest,
        playedAt: new Date().toISOString(),
      },
    },
    updatedAt: new Date().toISOString(),
  };

  return recomputePeriodProgress({ progress: nextProgress, lessons, periods });
}

export function loadAppState() {
  const raw = localStorage.getItem(APP_STATE_KEY);
  const parsed = safelyParse(raw);

  if (!parsed || typeof parsed !== "object") {
    return defaultAppState();
  }

  return {
    ...defaultAppState(),
    ...parsed,
    lastVisited:
      parsed.lastVisited && typeof parsed.lastVisited === "object"
        ? {
            levelId:
              typeof parsed.lastVisited.levelId === "string"
                ? parsed.lastVisited.levelId
                : "5e",
            lessonId:
              typeof parsed.lastVisited.lessonId === "string"
                ? parsed.lastVisited.lessonId
                : null,
            periodId:
              typeof parsed.lastVisited.periodId === "string"
                ? parsed.lastVisited.periodId
                : null,
            lessonTitle:
              typeof parsed.lastVisited.lessonTitle === "string"
                ? parsed.lastVisited.lessonTitle
                : "",
            path:
              typeof parsed.lastVisited.path === "string"
                ? parsed.lastVisited.path
                : null,
            visitedAt:
              typeof parsed.lastVisited.visitedAt === "string"
                ? parsed.lastVisited.visitedAt
                : null,
          }
        : null,
  };
}

export function saveAppState(state) {
  const payload = {
    ...defaultAppState(),
    ...(state || {}),
    updatedAt: new Date().toISOString(),
  };

  localStorage.setItem(APP_STATE_KEY, JSON.stringify(payload));
  return payload;
}

export function markLessonVisited({
  levelId = "5e",
  lessonId,
  periodId = null,
  lessonTitle = "",
  path = null,
}) {
  if (!lessonId) return loadAppState();

  const state = loadAppState();

  return saveAppState({
    ...state,
    lastVisited: {
      levelId,
      lessonId,
      periodId,
      lessonTitle,
      path: path || buildLessonHash({ levelId, lessonId }),
      visitedAt: new Date().toISOString(),
    },
  });
}

export function getLastVisitedLesson(levelId = null) {
  const state = loadAppState();
  const target = state.lastVisited;

  if (!target?.lessonId) return null;
  if (levelId && target.levelId !== levelId) return null;

  return target;
}
