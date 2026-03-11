import { lessons5eP1 } from "./data/lessons/5e/p1.js";
import { lessons5eP2 } from "./data/lessons/5e/p2.js";
import { lessons5eP3 } from "./data/lessons/5e/p3.js";
import { lessons4eP1 } from "./data/lessons/4e/p1.js";
import { lessons4eP2 } from "./data/lessons/4e/p2.js";
import { lessons4eP3 } from "./data/lessons/4e/p3.js";
import { lessons3eP1 } from "./data/lessons/3e/p1.js";
import { lessons3eP2 } from "./data/lessons/3e/p2.js";
import { lessons3eP3 } from "./data/lessons/3e/p3.js";

export const LESSONS_SPEC = {
  periods: 3,
  lessonsPerPeriod: 12,
  lessonsTotal: 36,
  lessonMax: 10,
  trainingMax: 7,
  productionMax: 3,
  periodMax: 120,
  validationPercent: 80,
  validationMinScore: 96,
};

const PERIODS_5E_BASE = [
  {
    id: "p1",
    period: 1,
    title: "Période 1",
    level: "Fondations",
    objective: "Entrer dans les premières formes et routines du latin scolaire.",
    maxScore: LESSONS_SPEC.periodMax,
  },
  {
    id: "p2",
    period: 2,
    title: "Période 2",
    level: "Consolidation",
    objective: "Stabiliser les repères morphologiques et syntaxiques simples.",
    maxScore: LESSONS_SPEC.periodMax,
  },
  {
    id: "p3",
    period: 3,
    title: "Période 3",
    level: "Structuration",
    objective: "Préparer la production guidée plus autonome.",
    maxScore: LESSONS_SPEC.periodMax,
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
  },
];

export const DEFAULT_LEVEL_ID = "5e";

function toLevelPeriodId(levelId, basePeriodId) {
  return `${levelId}-${basePeriodId}`;
}

function toLevelLessonId(levelId, baseLessonId) {
  return `${levelId}-${baseLessonId}`;
}

function namespaceLessonForLevel(levelId, lesson) {
  const baseLessonId = lesson.id;
  const nextLessonId = toLevelLessonId(levelId, baseLessonId);

  const mapItem = (item) => ({
    ...item,
    id: `${nextLessonId}-${String(item.id || "").split("-").slice(-1)[0] || "item"}`,
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
  return basePeriods.map((period) => ({
    ...period,
    id: toLevelPeriodId(levelId, period.id),
    levelId,
  }));
}

function resolveAcceptedAnswers(item) {
  if (Array.isArray(item.acceptedAnswers) && item.acceptedAnswers.length > 0) return item.acceptedAnswers;

  const config = item.answerConfig || {};
  if (Array.isArray(config.accepted) && config.accepted.length > 0) return config.accepted;
  if (typeof config.expected === "string" && config.expected.trim()) return [config.expected.trim()];
  if (typeof item.expected === "string" && item.expected.trim()) return [item.expected.trim()];

  return [];
}

function enrichPeriod1To3ProductionAcceptedAnswers(lesson) {
  if (![1, 2, 3].includes(lesson?.period) || !Array.isArray(lesson.production)) return lesson;

  return {
    ...lesson,
    production: lesson.production.map((item) => {
      if (item?.type !== "textInput") return item;
      const acceptedAnswers = resolveAcceptedAnswers(item);
      return acceptedAnswers.length > 0 ? { ...item, acceptedAnswers } : item;
    }),
  };
}

export const periodsByLevel = {
  "5e": namespacePeriodsForLevel("5e", PERIODS_5E_BASE),
  "4e": namespacePeriodsForLevel("4e", PERIODS_5E_BASE),
  "3e": namespacePeriodsForLevel("3e", PERIODS_5E_BASE),
};

export const lessonsByLevel = {
  "5e": LESSONS_5E_BASE
    .map((lesson) => enrichPeriod1To3ProductionAcceptedAnswers(lesson))
    .map((lesson) => namespaceLessonForLevel("5e", lesson)),
  // 4e/3e sont déjà portées sous forme finale et namespacée dans leurs fichiers data.
  "4e": LESSONS_4E_BASE,
  "3e": LESSONS_3E_BASE,
};

export const periods = periodsByLevel[DEFAULT_LEVEL_ID];
export const lessons = lessonsByLevel[DEFAULT_LEVEL_ID];

export const levels = LEVELS_SPEC.map((level) => ({
  ...level,
  periods: periodsByLevel[level.id] || [],
  lessons: lessonsByLevel[level.id] || [],
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
  const normalizedPeriodId = periodId?.startsWith(`${levelId}-`) ? periodId : toLevelPeriodId(levelId, periodId);
  return getLessonsByLevel(levelId).filter((lesson) => lesson.periodId === normalizedPeriodId);
}

export function getLessonById(lessonId, levelId = DEFAULT_LEVEL_ID) {
  const normalizedLessonId = lessonId?.startsWith(`${levelId}-`) ? lessonId : toLevelLessonId(levelId, lessonId);
  return getLessonsByLevel(levelId).find((lesson) => lesson.id === normalizedLessonId) || null;
}
