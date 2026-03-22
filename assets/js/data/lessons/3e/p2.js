// 3e/p2.js — ATRIUM 3e P2 placeholders

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
  maxScore: 13,
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
      "p2",
      "3e"
    ]
  },
  meta: {
    status: "placeholder",
    tags: ["3e", `p${period}`, "placeholder"]
  }
});

export const lessons3eP2 = [
  makePlaceholderLesson("3e", 2, 1, "Imperium et provincias"),
  makePlaceholderLesson("3e", 2, 2, "Legati et mandata"),
  makePlaceholderLesson("3e", 2, 3, "Dux iubet"),
  makePlaceholderLesson("3e", 2, 4, "Milites parant"),
  makePlaceholderLesson("3e", 2, 5, "Cives resistunt"),
  makePlaceholderLesson("3e", 2, 6, "Ad urbem contendunt"),
  makePlaceholderLesson("3e", 2, 7, "Navibus et equis"),
  makePlaceholderLesson("3e", 2, 8, "Consilia occultantur"),
  makePlaceholderLesson("3e", 2, 9, "Hic, ille, ipse"),
  makePlaceholderLesson("3e", 2, 10, "Qui nuntium tulit?"),
  makePlaceholderLesson("3e", 2, 11, "Ubi bellum geritur"),
  makePlaceholderLesson("3e", 2, 12, "Causa et consilium"),
  makePlaceholderLesson("3e", 2, 13, "Sum, possum, eo"),
  makePlaceholderLesson("3e", 2, 14, "Textus argumentativus"),
  makePlaceholderLesson("3e", 2, 15, "Ordo, potestas, via")
];
