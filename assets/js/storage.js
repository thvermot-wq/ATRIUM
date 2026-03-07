import { LESSONS_SPEC } from "./lessons.js";
import { computeLessonScore, computePeriodScore } from "./scoring.js";

export const STORAGE_KEY = "atrium-progress-v1";

function defaultLessonProgress() {
  return {
    current: {
      trainingScore: 0,
      productionScore: 0,
      totalScore: 0,
      maxScore: LESSONS_SPEC.lessonMax,
    },
    best: {
      trainingScore: 0,
      productionScore: 0,
      totalScore: 0,
      maxScore: LESSONS_SPEC.lessonMax,
    },
    playedAt: null,
  };
}

function defaultPeriodProgress() {
  return {
    totalScore: 0,
    maxScore: LESSONS_SPEC.periodMax,
    percent: 0,
    status: "période à reprendre",
  };
}

export function createInitialProgress({ lessons, periods }) {
  const lessonProgress = lessons.reduce((acc, lesson) => {
    acc[lesson.id] = defaultLessonProgress();
    return acc;
  }, {});

  const periodProgress = periods.reduce((acc, period) => {
    acc[period.id] = defaultPeriodProgress();
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

function normalizeProgressShape({ sourceProgress, lessons, periods }) {
  const fallback = createInitialProgress({ lessons, periods });

  const merged = {
    ...fallback,
    ...(sourceProgress || {}),
    lessons: { ...fallback.lessons, ...(sourceProgress?.lessons || {}) },
    periods: { ...fallback.periods, ...(sourceProgress?.periods || {}) },
  };

  Object.keys(merged.lessons).forEach((lessonId) => {
    const entry = merged.lessons[lessonId] || {};
    merged.lessons[lessonId] = {
      current: {
        ...defaultLessonProgress().current,
        ...(entry.current || {}),
      },
      best: {
        ...defaultLessonProgress().best,
        ...(entry.best || {}),
      },
      playedAt: typeof entry.playedAt === "string" ? entry.playedAt : null,
    };
  });

  return merged;
}

export function recomputePeriodProgress({ progress, lessons, periods }) {
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
      periodMax: LESSONS_SPEC.periodMax,
    });
  });

  next.updatedAt = new Date().toISOString();
  return next;
}

export function importProgressData({ data, lessons, periods }) {
  const normalized = normalizeProgressShape({ sourceProgress: data, lessons, periods });
  return recomputePeriodProgress({ progress: normalized, lessons, periods });
}

export function loadProgress({ lessons, periods }) {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return createInitialProgress({ lessons, periods });

  const parsed = safelyParse(raw);
  if (!parsed || typeof parsed !== "object") return createInitialProgress({ lessons, periods });

  return importProgressData({ data: parsed, lessons, periods });
}

export function hasMeaningfulProgress(progress) {
  if (!progress || typeof progress !== "object") return false;

  return Object.values(progress.lessons || {}).some((entry) => {
    const current = entry?.current?.totalScore ?? 0;
    const best = entry?.best?.totalScore ?? 0;
    return current > 0 || best > 0 || Boolean(entry?.playedAt);
  });
}

export function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function clearProgressStorage() {
  localStorage.removeItem(STORAGE_KEY);
}

export function saveLessonProgress({ progress, lessonId, trainingScore, productionScore, lessons, periods }) {
  const lessonResult = computeLessonScore({ trainingScore, productionScore });
  const existing = progress.lessons?.[lessonId] || defaultLessonProgress();

  const nextBest =
    lessonResult.totalScore >= (existing.best?.totalScore || 0)
      ? lessonResult
      : {
          ...existing.best,
          maxScore: LESSONS_SPEC.lessonMax,
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
