// 3e/p1.js — ATRIUM 3e P1 placeholders

const makePlaceholderLesson = (levelId, period, lessonNumber, title) => ({
  id: `${levelId}-p${period}-l${lessonNumber}`,
  levelId,
  period,
  periodId: `p${period}`,
  title,
  subtitle: "Placeholder narratif à rédiger.",
  objective: "Placeholder objectif.",
  lessonPoint: "Placeholder lessonPoint.",
  canDo: [
    "Placeholder canDo 1.",
    "Placeholder canDo 2.",
    "Placeholder canDo 3."
  ],
  lexicon: [
    "mot1 = sens1",
    "mot2 = sens2",
    "mot3 = sens3",
    "mot4 = sens4",
    "mot5 = sens5",
    "mot6 = sens6",
    "mot7 = sens7",
    "mot8 = sens8",
    "mot9 = sens9",
    "mot10 = sens10",
    "mot11 = sens11",
    "mot12 = sens12"
  ],
  maxScore: 10,
  training: [],
  production: [],
  summary: {
    retains: [
      "Placeholder retain 1.",
      "Placeholder retain 2."
    ],
    cahier: [
      "Placeholder cahier 1",
      "Placeholder cahier 2"
    ],
    keywords: [
      "placeholder",
      "p1",
      "3e"
    ]
  },
  meta: {
    status: "placeholder",
    tags: ["3e", `p${period}`, "placeholder"]
  }
});

export const lessons3eP1 = [
  makePlaceholderLesson("3e", 1, 1, "Res publica in discrimine"),
  makePlaceholderLesson("3e", 1, 2, "Nuntii ex provinciis"),
  makePlaceholderLesson("3e", 1, 3, "Senatus audit"),
  makePlaceholderLesson("3e", 1, 4, "Urbs et imperium"),
  makePlaceholderLesson("3e", 1, 5, "Milites in itinere"),
  makePlaceholderLesson("3e", 1, 6, "Epistulae et rumores"),
  makePlaceholderLesson("3e", 1, 7, "Hostis appropinquat"),
  makePlaceholderLesson("3e", 1, 8, "Dux et exercitus"),
  makePlaceholderLesson("3e", 1, 9, "Populus timet"),
  makePlaceholderLesson("3e", 1, 10, "Consilia capiuntur"),
  makePlaceholderLesson("3e", 1, 11, "Tempora miscentur"),
  makePlaceholderLesson("3e", 1, 12, "Voces contrariae"),
  makePlaceholderLesson("3e", 1, 13, "Instituta civitatis"),
  makePlaceholderLesson("3e", 1, 14, "Textus continuus"),
  makePlaceholderLesson("3e", 1, 15, "Urbs, bellum, memoria")
];
