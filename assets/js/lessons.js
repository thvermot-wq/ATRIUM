import { lessons5eP1 } from "./data/lessons/5e/p1.js";
import { lessons5eP2 } from "./data/lessons/5e/p2.js";
import { lessons5eP3 } from "./data/lessons/5e/p3.js";
import { lessons4eP1 } from "./data/lessons/4e/p1.js";
import { lessons4eP2 } from "./data/lessons/4e/p2.js";
import { lessons4eP3 } from "./data/lessons/4e/p3.js";
import { lessons3eP1 } from "./data/lessons/3e/p1.js";
import { lessons3eP2 } from "./data/lessons/3e/p2.js";
import { lessons3eP3 } from "./data/lessons/3e/p3.js";
import { validateLessons } from "./data/lessonValidation.js";

export const LEVEL_LESSONS_SPEC = {
  "5e": {
    periods: 3,
    lessonsPerPeriod: 13,
    lessonsTotal: 39,
    lessonMax: 10,
    trainingMax: 7,
    productionMax: 3,
    periodMax: 130,
    validationPercent: 80,
    validationMinScore: 104,
  },
  "4e": {
    periods: 3,
    lessonsPerPeriod: 15,
    lessonsTotal: 45,
    lessonMax: 13,
    trainingMax: 7,
    productionMax: 6,
    periodMax: 195,
    validationPercent: 80,
    validationMinScore: 156,
  },
  "3e": {
    periods: 3,
    lessonsPerPeriod: 15,
    lessonsTotal: 45,
    lessonMax: 13,
    trainingMax: 7,
    productionMax: 6,
    periodMax: 195,
    validationPercent: 80,
    validationMinScore: 156,
  },
};

// Compatibilité descendante : la 5e reste la spec par défaut exposée
export const LESSONS_SPEC = LEVEL_LESSONS_SPEC["5e"];

const PERIODS_BASE = [
  {
    id: "p1",
    period: 1,
    title: "Période 1",
    level: "Fondations",
    objective: "Entrer dans les premières formes et routines du latin scolaire.",
  },
  {
    id: "p2",
    period: 2,
    title: "Période 2",
    level: "Consolidation",
    objective: "Stabiliser les repères morphologiques et syntaxiques simples.",
  },
  {
    id: "p3",
    period: 3,
    title: "Période 3",
    level: "Structuration",
    objective: "Préparer la production guidée plus autonome.",
  },
];

const LESSONS_5E_BASE = [
  ...lessons5eP1,
  ...lessons5eP2,
  ...lessons5eP3,
];

const LESSONS_4E_BASE = [
  ...lessons4eP1,
  ...lessons4eP2,
  ...lessons4eP3,
];

const LESSONS_3E_BASE = [
  ...lessons3eP1,
  ...lessons3eP2,
  ...lessons3eP3,
];

function getSpecForLevel(levelId) {
  return LEVEL_LESSONS_SPEC[levelId] || LEVEL_LESSONS_SPEC["5e"];
}

function extractLessonNumber(lessonId) {
  const match = String(lessonId || "").match(/-l(\d+)$/i);
  return match ? Number(match[1]) : null;
}

function normalizeLessonShape(lesson, levelId, lessonNumber) {
  const lessonPoint =
    lesson.lessonPoint ||
    lesson.lessonNote ||
    lesson.courseReminder ||
    lesson.objective ||
    "";

  const training = Array.isArray(lesson.training) ? lesson.training : [];
  const production = Array.isArray(lesson.production) ? lesson.production : [];

  return {
    ...lesson,
    level: levelId,
    levelId,
    lessonNumber,
    lessonNote: lessonPoint,
    lessonPoint,
    narrative: lesson.narrative || lesson.story || lesson.intrigue || "",
    exercises: [
      ...training.map((item) => ({ ...item, section: "training" })),
      ...production.map((item) => ({ ...item, section: "production" })),
    ],
    training,
    production,
  };
}

function buildNormalizedLevelLessons(levelId, sourceLessons) {
  const periodCounters = new Map();

  return sourceLessons.map((lesson) => {
    const period = Number(lesson.period);
    const periodIndex = (periodCounters.get(period) || 0) + 1;
    periodCounters.set(period, periodIndex);

    const extracted = extractLessonNumber(lesson.id);
    const lessonNumber = Number.isInteger(extracted) ? extracted : periodIndex;

    return normalizeLessonShape(lesson, levelId, lessonNumber);
  });
}

export const LEVELS_SPEC = [
  {
    id: "5e",
    classLabel: "5e",
    title: "ATRIUM I · Fondations",
    subtitle: "Latin débutant · cycle 4",
    ambition: "Entrer dans la langue et les micro-récits",
    description: "Découverte active, automatismes, repères culturels et linguistiques.",
    dashboardTitle: "Atrium I : Fondations",
    dashboardSubtitle:
      "Euroclassica : Vestibulum + · CECRL adapté – profil LCA : pré-A1 → A1 en réception et production guidées",
    referentielPdf: "assets/pdf/5e-referentiel.pdf",
    outilsPdf: "assets/pdf/5e-outils.pdf",
  },
  {
    id: "4e",
    classLabel: "4e",
    title: "ATRIUM II · Consolidation",
    subtitle: "Latin intermédiaire · cycle 4",
    ambition: "Renforcer grammaire, vocabulaire et compréhension suivie",
    description: "Approfondissement morphologique, syntaxe simple, lecture guidée de textes courts.",
    dashboardTitle: "Atrium II : Consolidation",
    dashboardSubtitle:
      "Euroclassica : Ianua + / pré-Vestibulum · CECRL adapté – profil LCA : A1 consolidé en lecture et version guidée",
    referentielPdf: "assets/pdf/4e-referentiel.pdf",
    outilsPdf: "assets/pdf/4e-outils.pdf",
  },
  {
    id: "3e",
    classLabel: "3e",
    title: "ATRIUM III · Maîtrise",
    subtitle: "Latin avancé collège · cycle 4",
    ambition: "Lire, traduire, relier langue et civilisation",
    description: "Consolidation, lecture accompagnée, version/thème simples.",
    dashboardTitle: "Atrium III : Maîtrise",
    dashboardSubtitle:
      "Euroclassica : Vestibulum + / pré-Ianua · CECRL adapté – profil LCA : A1+ / début A2 en réception écrite guidée",
    referentielPdf: "assets/pdf/3e-referentiel.pdf",
    outilsPdf: "assets/pdf/3e-outils.pdf",
  },
];

export const DEFAULT_LEVEL_ID = "5e";

function toLevelPeriodId(levelId, basePeriodId) {
  return basePeriodId?.startsWith(`${levelId}-`)
    ? basePeriodId
    : `${levelId}-${basePeriodId}`;
}

function toLevelLessonId(levelId, baseLessonId) {
  return baseLessonId?.startsWith(`${levelId}-`)
    ? baseLessonId
    : `${levelId}-${baseLessonId}`;
}

function namespaceExerciseItemId(nextLessonId, itemId) {
  const tail = String(itemId || "").split("-").slice(-1)[0] || "item";
  return `${nextLessonId}-${tail}`;
}

function namespaceLessonForLevel(levelId, lesson) {
  const baseLessonId = lesson.id;
  const nextLessonId = toLevelLessonId(levelId, baseLessonId);

  const mapItem = (item) => ({
    ...item,
    id: namespaceExerciseItemId(nextLessonId, item.id),
  });

  return {
    ...lesson,
    id: nextLessonId,
    periodId: toLevelPeriodId(levelId, lesson.periodId),
    levelId,
    training: Array.isArray(lesson.training) ? lesson.training.map(mapItem) : [],
    production: Array.isArray(lesson.production) ? lesson.production.map(mapItem) : [],
  };
}

function namespacePeriodsForLevel(levelId, basePeriods) {
  const spec = getSpecForLevel(levelId);

  return basePeriods.map((period) => ({
    ...period,
    id: toLevelPeriodId(levelId, period.id),
    levelId,
    maxScore: spec.periodMax,
  }));
}

function resolveAcceptedAnswers(item) {
  if (Array.isArray(item.acceptedAnswers) && item.acceptedAnswers.length > 0) {
    return item.acceptedAnswers;
  }

  const config = item.answerConfig || {};
  if (Array.isArray(config.accepted) && config.accepted.length > 0) {
    return config.accepted;
  }
  if (typeof config.expected === "string" && config.expected.trim()) {
    return [config.expected.trim()];
  }
  if (typeof item.expected === "string" && item.expected.trim()) {
    return [item.expected.trim()];
  }

  return [];
}

function enrichPeriod1To3ProductionAcceptedAnswers(lesson) {
  if (![1, 2, 3].includes(lesson?.period) || !Array.isArray(lesson.production)) {
    return lesson;
  }

  return {
    ...lesson,
    production: lesson.production.map((item) => {
      if (item?.type !== "textInput") return item;
      const acceptedAnswers = resolveAcceptedAnswers(item);
      return acceptedAnswers.length > 0 ? { ...item, acceptedAnswers } : item;
    }),
  };
}

function lessonHasPlaceholderStatus(lesson) {
  return lesson?.meta?.status === "placeholder" || lesson?.status === "placeholder";
}

function levelCanBeValidated(levelLessons) {
  return Array.isArray(levelLessons) && levelLessons.length > 0 && !levelLessons.some(lessonHasPlaceholderStatus);
}

export const periodsByLevel = {
  "5e": namespacePeriodsForLevel("5e", PERIODS_BASE),
  "4e": namespacePeriodsForLevel("4e", PERIODS_BASE),
  "3e": namespacePeriodsForLevel("3e", PERIODS_BASE),
};

export const lessonsByLevel = {
  "5e": buildNormalizedLevelLessons(
    "5e",
    LESSONS_5E_BASE
      .map((lesson) => enrichPeriod1To3ProductionAcceptedAnswers(lesson))
      .map((lesson) => namespaceLessonForLevel("5e", lesson)),
  ),
  "4e": buildNormalizedLevelLessons(
    "4e",
    LESSONS_4E_BASE.map((lesson) => namespaceLessonForLevel("4e", lesson)),
  ),
  "3e": buildNormalizedLevelLessons(
    "3e",
    LESSONS_3E_BASE.map((lesson) => namespaceLessonForLevel("3e", lesson)),
  ),
};

const shouldValidateLessons =
  typeof window === "undefined" ||
  ["localhost", "127.0.0.1"].includes(window?.location?.hostname);

if (shouldValidateLessons) {
  Object.entries(lessonsByLevel).forEach(([levelId, levelLessons]) => {
    if (!levelCanBeValidated(levelLessons)) return;
    validateLessons({ [levelId]: levelLessons }, getSpecForLevel(levelId));
  });
}

export const periods = periodsByLevel[DEFAULT_LEVEL_ID];
export const lessons = lessonsByLevel[DEFAULT_LEVEL_ID];

export const levels = LEVELS_SPEC.map((level) => ({
  ...level,
  periods: periodsByLevel[level.id] || [],
  lessons: lessonsByLevel[level.id] || [],
  spec: getSpecForLevel(level.id),
}));

function findLevel(levelId = DEFAULT_LEVEL_ID) {
  return levels.find((level) => level.id === levelId) || levels[0];
}

export function getLevelById(levelId = DEFAULT_LEVEL_ID) {
  return findLevel(levelId) || null;
}

export function getPeriodsByLevel(levelId = DEFAULT_LEVEL_ID) {
  return periodsByLevel[levelId] || [];
}

export function getLessonsByLevel(levelId = DEFAULT_LEVEL_ID) {
  return lessonsByLevel[levelId] || [];
}

export function getLessonsByPeriod(periodId, levelId = DEFAULT_LEVEL_ID) {
  const normalizedPeriodId = periodId?.startsWith(`${levelId}-`)
    ? periodId
    : toLevelPeriodId(levelId, periodId);

  return getLessonsByLevel(levelId).filter(
    (lesson) => lesson.periodId === normalizedPeriodId
  );
}

export function getLessonById(lessonId, levelId = DEFAULT_LEVEL_ID) {
  const normalizedLessonId = lessonId?.startsWith(`${levelId}-`)
    ? lessonId
    : toLevelLessonId(levelId, lessonId);

  return getLessonsByLevel(levelId).find(
    (lesson) => lesson.id === normalizedLessonId
  ) || null;
}

export function getLessonSpecForLevel(levelId = DEFAULT_LEVEL_ID) {
  return getSpecForLevel(levelId);
}
