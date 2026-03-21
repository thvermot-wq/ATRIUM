// 3e/p3.js — ATRIUM 3e P3 placeholders

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
      "p3",
      "3e"
    ]
  },
  meta: {
    status: "placeholder",
    tags: ["3e", `p${period}`, "placeholder"]
  }
});

export const lessons3eP3 = [
  makePlaceholderLesson("3e", 3, 1, "In templo historia narratur"),
  makePlaceholderLesson("3e", 3, 2, "Origines urbis"),
  makePlaceholderLesson("3e", 3, 3, "Qui rem publicam mutavit"),
  makePlaceholderLesson("3e", 3, 4, "Bella et victoriae"),
  makePlaceholderLesson("3e", 3, 5, "Signa veteris urbis"),
  makePlaceholderLesson("3e", 3, 6, "Testes et memoria"),
  makePlaceholderLesson("3e", 3, 7, "Id quod narratur"),
  makePlaceholderLesson("3e", 3, 8, "Nomen in lapide scriptum"),
  makePlaceholderLesson("3e", 3, 9, "Casus et fonctions"),
  makePlaceholderLesson("3e", 3, 10, "Ubi, cum, postquam"),
  makePlaceholderLesson("3e", 3, 11, "Futurum et exemplum"),
  makePlaceholderLesson("3e", 3, 12, "Fabula et historia"),
  makePlaceholderLesson("3e", 3, 13, "Hereditas Latina"),
  makePlaceholderLesson("3e", 3, 14, "Textus longior"),
  makePlaceholderLesson("3e", 3, 15, "Historia, civitas, posteritas")
];
