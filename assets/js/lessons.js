export const LESSONS_SPEC = {
  periods: 3,
  lessonsPerPeriod: 12,
  lessonsTotal: 36,
  lessonMax: 10,
  trainingMax: 7,
  productionMax: 3,
  periodMax: 120,
  validationPercent: 80,
};

export const periods = [
  {
    id: "p1",
    period: 1,
    title: "Période 1",
    level: "Acclimatation progressive",
    objective: "Entrer progressivement dans le latin avec sujet, verbe, complément et premières formes.",
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

export const period1Config = {
  period: 1,
  title: "Période 1 — Acclimatation progressive au latin",
  lessonCount: 12,
  maxScore: 120,
  validationThresholdPercent: 80,
  validationThresholdScore: 96,
  lessons: [
    { id: "p1-l1", period: 1, index: 1, title: "Les mots cousins du français", objective: "Entrer dans le latin par les mots transparents et les familles lexicales." },
    { id: "p1-l2", period: 1, index: 2, title: "Saluer, répondre, comprendre", objective: "Comprendre quelques formules latines d'usage simple." },
    { id: "p1-l3", period: 1, index: 3, title: "Les noms latins du monde simple", objective: "Stabiliser un premier stock de noms latins fréquents." },
    { id: "p1-l4", period: 1, index: 4, title: "Le verbe au présent : qui fait l'action ?", objective: "Repérer le verbe et le sujet dans une phrase très simple." },
    { id: "p1-l5", period: 1, index: 5, title: "Le sujet en latin", objective: "Stabiliser les formes du sujet au singulier." },
    { id: "p1-l6", period: 1, index: 6, title: "La phrase minimale : sujet + verbe", objective: "Lire et produire des phrases très courtes avec sujet et verbe." },
    { id: "p1-l7", period: 1, index: 7, title: "Le complément : qui ou quoi reçoit l'action ?", objective: "Introduire le complément et ses formes les plus simples." },
    { id: "p1-l8", period: 1, index: 8, title: "1re et 2e déclinaisons : les formes les plus fréquentes", objective: "Stabiliser les oppositions sujet / complément au singulier." },
    { id: "p1-l9", period: 1, index: 9, title: "Lire des phrases simples avec sujet, verbe, complément", objective: "Consolider la lecture de petites phrases complètes au présent." },
    { id: "p1-l10", period: 1, index: 10, title: "L'ordre des mots peut varier", objective: "Comprendre que les formes aident à lire le latin même quand l'ordre change." },
    { id: "p1-l11", period: 1, index: 11, title: "Premiers pluriels simples", objective: "Introduire quelques formes simples du pluriel." },
    { id: "p1-l12", period: 1, index: 12, title: "Grande synthèse de la période 1", objective: "Réinvestir lexique, formes, présent, sujet, verbe, complément, singulier et pluriel." },
  ],
};

function trainingBundle(seed) {
  return [
    {
      id: `${seed}-t1`,
      type: "matching",
      prompt: "Associe chaque mot latin à sa traduction française.",
      leftItems: ["puella", "servus", "dominus"],
      rightItems: ["jeune fille", "esclave", "maître"],
      answers: { puella: "jeune fille", servus: "esclave", dominus: "maître" },
      points: 1,
    },
    {
      id: `${seed}-t2`,
      type: "multipleChoice",
      prompt: "Coche les formes qui désignent des personnes.",
      choices: ["puella", "templum", "amicus", "aqua"],
      answers: ["puella", "amicus"],
      points: 1,
    },
    {
      id: `${seed}-t3`,
      type: "singleChoice",
      prompt: "Choisis la meilleure traduction de amicus.",
      choices: ["ami", "route", "temple"],
      answer: "ami",
      points: 1,
    },
    {
      id: `${seed}-t4`,
      type: "singleChoice",
      prompt: "Dans la phrase « Puella amat. », repère le verbe.",
      choices: ["Puella", "amat"],
      answer: "amat",
      points: 1,
    },
    {
      id: `${seed}-t5`,
      type: "ordering",
      prompt: "Remets les éléments dans l'ordre d'une phrase française minimale.",
      tokens: ["le complément", "le sujet", "le verbe"],
      answer: ["le sujet", "le verbe", "le complément"],
      points: 1,
    },
    {
      id: `${seed}-t6`,
      type: "singleChoice",
      prompt: "Choisis la phrase latine correcte.",
      choices: ["puella rosam portat", "puellam rosa portat", "puella rosa portat"],
      answer: "puella rosam portat",
      points: 1,
    },
    {
      id: `${seed}-t7`,
      type: "singleChoice",
      prompt: "Dans « Dominus servum vocat. », quel mot est le complément ?",
      choices: ["Dominus", "servum", "vocat"],
      answer: "servum",
      points: 1,
    },
  ];
}

function productionBundle(seed) {
  return [
    {
      id: `${seed}-p1`,
      type: "textInput",
      prompt: "Traduis en français : Puella amat.",
      acceptedAnswers: ["la jeune fille aime", "la fille aime"],
      points: 1,
    },
    {
      id: `${seed}-p2`,
      type: "textInput",
      prompt: "Traduis en latin : « le maître appelle l'ami ».",
      acceptedAnswers: ["dominus amicum vocat", "amicum dominus vocat"],
      points: 1,
    },
    {
      id: `${seed}-p3`,
      type: "textInput",
      prompt: "Traduis en latin : « les esclaves portent l'eau ».",
      acceptedAnswers: ["servi aquam portant", "aquam servi portant"],
      points: 1,
    },
  ];
}

const period1Lessons = period1Config.lessons.map((lesson) => ({
  id: lesson.id,
  period: lesson.period,
  periodId: "p1",
  title: lesson.title,
  objective: lesson.objective,
  maxScore: LESSONS_SPEC.lessonMax,
  training: trainingBundle(lesson.id),
  production: productionBundle(lesson.id),
  meta: {
    status: "ready",
    tags: ["period1", "latin", "progressif"],
  },
}));

function createPlaceholderLesson({ id, period, title }) {
  return {
    id,
    period,
    periodId: `p${period}`,
    title,
    objective: "Leçon de consolidation à compléter dans une PR dédiée.",
    maxScore: LESSONS_SPEC.lessonMax,
    training: trainingBundle(id),
    production: productionBundle(id),
    meta: {
      status: "draft",
      tags: ["placeholder"],
    },
  };
}

const period2Lessons = Array.from({ length: LESSONS_SPEC.lessonsPerPeriod }, (_, i) =>
  createPlaceholderLesson({
    id: `p2-l${13 + i}`,
    period: 2,
    title: `P2 · Leçon ${i + 1}`,
  }),
);

const period3Lessons = Array.from({ length: LESSONS_SPEC.lessonsPerPeriod }, (_, i) =>
  createPlaceholderLesson({
    id: `p3-l${25 + i}`,
    period: 3,
    title: `P3 · Leçon ${i + 1}`,
  }),
);

export const lessons = [...period1Lessons, ...period2Lessons, ...period3Lessons];

export function getLessonsByPeriod(periodId) {
  return lessons.filter((lesson) => lesson.periodId === periodId);
}

export function getLessonById(lessonId) {
  return lessons.find((lesson) => lesson.id === lessonId) || null;
}
