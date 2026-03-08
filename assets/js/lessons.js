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

const period1LessonOverrides = {
  "p1-l5": {
    training: [
      {
        id: "p1-l5-t1",
        type: "matching",
        prompt: "Associe chaque sujet français à sa forme latine.",
        leftItems: ["la jeune fille", "le maître", "l'ami", "le temple"],
        rightItems: ["puella", "dominus", "amicus", "templum"],
        answers: {
          "la jeune fille": "puella",
          "le maître": "dominus",
          "l'ami": "amicus",
          "le temple": "templum",
        },
        points: 1,
      },
      {
        id: "p1-l5-t2",
        type: "singleChoice",
        prompt: "Choisis la forme qui peut servir de sujet :",
        choices: ["puella", "puellam", "servum"],
        answer: "puella",
        points: 1,
      },
      {
        id: "p1-l5-t3",
        type: "singleChoice",
        prompt: "Complète la phrase avec le bon sujet : « ___ amat. »",
        choices: ["puella", "puellam", "servum"],
        answer: "puella",
        points: 1,
      },
      {
        id: "p1-l5-t4",
        type: "singleChoice",
        prompt: "Choisis la phrase qui traduit correctement « le maître a ».",
        choices: ["dominus habet", "dominum habet", "dominus habent"],
        answer: "dominus habet",
        points: 1,
      },
      {
        id: "p1-l5-t5",
        type: "matching",
        prompt: "Associe chaque mot latin à sa terminaison.",
        leftItems: ["puella", "servus", "templum", "amicus"],
        rightItems: ["-a", "-us", "-um", "-us"],
        answers: {
          puella: "-a",
          servus: "-us",
          templum: "-um",
          amicus: "-us",
        },
        points: 1,
      },
      {
        id: "p1-l5-t6",
        type: "singleChoice",
        prompt: "Dans la phrase « Amicus habet. », quel mot est le sujet ?",
        choices: ["Amicus", "habet"],
        answer: "Amicus",
        points: 1,
      },
      {
        id: "p1-l5-t7",
        type: "multipleChoice",
        prompt: "Coche toutes les formes qui peuvent servir de sujet singulier dans une phrase simple.",
        choices: ["puella", "servus", "liber", "puellam", "servum"],
        answers: ["puella", "servus", "liber"],
        points: 1,
      },
    ],
    production: [
      {
        id: "p1-l5-p1",
        type: "textInput",
        prompt: "Traduis en latin : « la jeune fille ».",
        acceptedAnswers: ["puella"],
        points: 1,
      },
      {
        id: "p1-l5-p2",
        type: "textInput",
        prompt: "Traduis en latin : « le maître ».",
        acceptedAnswers: ["dominus"],
        points: 1,
      },
      {
        id: "p1-l5-p3",
        type: "textInput",
        prompt: "Traduis en latin : « le livre ».",
        acceptedAnswers: ["liber"],
        points: 1,
      },
    ],
  },
  "p1-l6": {
    training: [
      {
        id: "p1-l6-t1",
        type: "singleChoice",
        prompt: "Choisis la meilleure traduction de « Dominus videt. »",
        choices: ["le maître voit", "le maître appelle", "l'ami voit"],
        answer: "le maître voit",
        points: 1,
      },
      {
        id: "p1-l6-t2",
        type: "ordering",
        prompt: "Remets dans l'ordre la traduction française de « Puella habet. »",
        tokens: ["a", "la jeune fille"],
        answer: ["la jeune fille", "a"],
        points: 1,
      },
      {
        id: "p1-l6-t3",
        type: "singleChoice",
        prompt: "Complète la phrase : « Puella ___. »",
        choices: ["amat", "puella", "servus"],
        answer: "amat",
        points: 1,
      },
      {
        id: "p1-l6-t4",
        type: "singleChoice",
        prompt: "Choisis la phrase latine qui traduit « l'ami voit ».",
        choices: ["amicus videt", "amicum videt", "amicus vocat"],
        answer: "amicus videt",
        points: 1,
      },
      {
        id: "p1-l6-t5",
        type: "matching",
        prompt: "Associe chaque phrase latine à sa traduction française.",
        leftItems: ["Servus portat.", "Dominus habet.", "Puella laudat."],
        rightItems: ["l'esclave porte", "le maître a", "la jeune fille loue"],
        answers: {
          "Servus portat.": "l'esclave porte",
          "Dominus habet.": "le maître a",
          "Puella laudat.": "la jeune fille loue",
        },
        points: 1,
      },
      {
        id: "p1-l6-t6",
        type: "singleChoice",
        prompt: "Dans « Servus portat. », quel mot est le sujet ?",
        choices: ["Servus", "portat"],
        answer: "Servus",
        points: 1,
      },
      {
        id: "p1-l6-t7",
        type: "singleChoice",
        prompt: "Dans « Amicus laudat. », quel mot est le verbe ?",
        choices: ["Amicus", "laudat"],
        answer: "laudat",
        points: 1,
      },
    ],
    production: [
      {
        id: "p1-l6-p1",
        type: "textInput",
        prompt: "Traduis en français : Dominus videt.",
        acceptedAnswers: ["le maître voit", "maître voit"],
        points: 1,
      },
      {
        id: "p1-l6-p2",
        type: "textInput",
        prompt: "Traduis en français : Puella habet.",
        acceptedAnswers: ["la jeune fille a", "la fille a"],
        points: 1,
      },
      {
        id: "p1-l6-p3",
        type: "textInput",
        prompt: "Traduis en latin : « l'esclave porte ».",
        acceptedAnswers: ["servus portat", "portat servus"],
        points: 1,
      },
    ],
  },
  "p1-l7": {
    training: [
      {
        id: "p1-l7-t1",
        type: "singleChoice",
        prompt: "Pour traduire « la jeune fille » comme complément, choisis la bonne forme.",
        choices: ["puella", "puellam"],
        answer: "puellam",
        points: 1,
      },
      {
        id: "p1-l7-t2",
        type: "singleChoice",
        prompt: "Dans la phrase « Puella rosam portat. », choisis le complément.",
        choices: ["Puella", "rosam", "portat"],
        answer: "rosam",
        points: 1,
      },
      {
        id: "p1-l7-t3",
        type: "singleChoice",
        prompt: "Choisis la meilleure traduction de « Puella aquam portat. »",
        choices: ["la jeune fille porte l'eau", "l'eau porte la jeune fille", "la jeune fille appelle l'eau"],
        answer: "la jeune fille porte l'eau",
        points: 1,
      },
      {
        id: "p1-l7-t4",
        type: "singleChoice",
        prompt: "Complète la phrase : « Puella ___ portat. »",
        choices: ["aqua", "aquam"],
        answer: "aquam",
        points: 1,
      },
      {
        id: "p1-l7-t5",
        type: "matching",
        prompt: "Associe chaque complément français à sa forme latine.",
        leftItems: ["la rose", "l'eau", "le livre", "l'ami"],
        rightItems: ["rosam", "aquam", "librum", "amicum"],
        answers: {
          "la rose": "rosam",
          "l'eau": "aquam",
          "le livre": "librum",
          "l'ami": "amicum",
        },
        points: 1,
      },
      {
        id: "p1-l7-t6",
        type: "matching",
        prompt: "Associe chaque mot de la phrase à sa fonction : sujet, verbe ou complément.",
        leftItems: ["Puella", "portat", "rosam"],
        rightItems: ["sujet", "verbe", "complément"],
        answers: {
          Puella: "sujet",
          portat: "verbe",
          rosam: "complément",
        },
        points: 1,
      },
      {
        id: "p1-l7-t7",
        type: "singleChoice",
        prompt: "Choisis la phrase latine qui traduit correctement « la jeune fille porte l'eau ».",
        choices: ["puella aquam portat", "puellam aqua portat", "puella aqua portat"],
        answer: "puella aquam portat",
        points: 1,
      },
    ],
    production: [
      {
        id: "p1-l7-p1",
        type: "textInput",
        prompt: "Traduis en français : Puella rosam portat.",
        acceptedAnswers: ["la jeune fille porte la rose", "la fille porte la rose"],
        points: 1,
      },
      {
        id: "p1-l7-p2",
        type: "textInput",
        prompt: "Traduis en français : Servus librum habet.",
        acceptedAnswers: ["l'esclave a le livre", "esclave a le livre"],
        points: 1,
      },
      {
        id: "p1-l7-p3",
        type: "textInput",
        prompt: "Traduis en latin : « le maître appelle l'ami ».",
        acceptedAnswers: ["dominus amicum vocat", "amicum dominus vocat"],
        points: 1,
      },
    ],
  },
  "p1-l8": {
    training: [
      {
        id: "p1-l8-t1",
        type: "matching",
        prompt: "Associe chaque forme latine à sa fonction la plus probable.",
        leftItems: ["puella", "puellam", "servus", "servum", "rosa", "rosam"],
        rightItems: ["sujet", "complément", "sujet", "complément", "sujet", "complément"],
        answers: {
          puella: "sujet",
          puellam: "complément",
          servus: "sujet",
          servum: "complément",
          rosa: "sujet",
          rosam: "complément",
        },
        points: 1,
      },
      {
        id: "p1-l8-t2",
        type: "singleChoice",
        prompt: "Pour traduire « la jeune fille » comme sujet, choisis la bonne forme.",
        choices: ["puella", "puellam"],
        answer: "puella",
        points: 1,
      },
      {
        id: "p1-l8-t3",
        type: "singleChoice",
        prompt: "Pour traduire « l'ami » comme complément, choisis la bonne forme.",
        choices: ["amicus", "amicum"],
        answer: "amicum",
        points: 1,
      },
      {
        id: "p1-l8-t4",
        type: "singleChoice",
        prompt: "Complète correctement la phrase : « ___ amicum vocat. »",
        choices: ["puella", "puellam"],
        answer: "puella",
        points: 1,
      },
      {
        id: "p1-l8-t5",
        type: "singleChoice",
        prompt: "Choisis la phrase la mieux formée pour dire « la jeune fille appelle l'ami ».",
        choices: ["puella amicum vocat", "puellam amicus vocat", "puella amicus vocat"],
        answer: "puella amicum vocat",
        points: 1,
      },
      {
        id: "p1-l8-t6",
        type: "matching",
        prompt: "Associe chaque terminaison à un exemple.",
        leftItems: ["-a", "-am", "-us", "-um"],
        rightItems: ["puella", "puellam", "servus", "servum"],
        answers: {
          "-a": "puella",
          "-am": "puellam",
          "-us": "servus",
          "-um": "servum",
        },
        points: 1,
      },
      {
        id: "p1-l8-t7",
        type: "singleChoice",
        prompt: "Choisis la phrase latine correcte pour traduire « l'esclave porte la rose ».",
        choices: ["servus rosam portat", "servum rosa portat", "servus rosa portat"],
        answer: "servus rosam portat",
        points: 1,
      },
    ],
    production: [
      {
        id: "p1-l8-p1",
        type: "textInput",
        prompt: "Traduis en latin : « la jeune fille ».",
        acceptedAnswers: ["puella"],
        points: 1,
      },
      {
        id: "p1-l8-p2",
        type: "textInput",
        prompt: "Traduis en latin : « la jeune fille » comme complément.",
        acceptedAnswers: ["puellam"],
        points: 1,
      },
      {
        id: "p1-l8-p3",
        type: "textInput",
        prompt: "Traduis en latin : « l'ami » comme complément.",
        acceptedAnswers: ["amicum"],
        points: 1,
      },
    ],
  },
};

const period1Lessons = period1Config.lessons.map((lesson) => ({
  id: lesson.id,
  period: lesson.period,
  periodId: "p1",
  title: lesson.title,
  objective: lesson.objective,
  maxScore: LESSONS_SPEC.lessonMax,
  training: period1LessonOverrides[lesson.id]?.training || trainingBundle(lesson.id),
  production: period1LessonOverrides[lesson.id]?.production || productionBundle(lesson.id),
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
