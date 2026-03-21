// p1.js — ATRIUM 4e P1 placeholders

const makePlaceholderLesson = (period, lessonNumber, title) => ({
  id: `4e-p${period}-l${lessonNumber}`,
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
      "4e"
    ]
  },
  meta: {
    status: "placeholder",
    tags: ["4e", `p${period}`, "placeholder"]
  }
});

export const lessons4eP1 = [
  makePlaceholderLesson(1, 1, "Subura ad forum fluit"),
  makePlaceholderLesson(1, 2, "Vox civium, nomen consulis"),
  makePlaceholderLesson(1, 3, "Ex Sicilia venit"),
  makePlaceholderLesson(1, 4, "Ad navem Ostiensim"),
  makePlaceholderLesson(1, 5, "Epistulae ex castris"),
  makePlaceholderLesson(1, 6, "Roma crescit"),
  makePlaceholderLesson(1, 7, "Hannibal appropinquat?"),
  makePlaceholderLesson(1, 8, "Colonia nova conditur"),
  makePlaceholderLesson(1, 9, "Amici separantur"),
  makePlaceholderLesson(1, 10, "Iterum conveniunt"),
  makePlaceholderLesson(1, 11, "Tempora in via"),
  makePlaceholderLesson(1, 12, "Hic rumor, illa littera"),
  makePlaceholderLesson(1, 13, "Civis, consul, colonia"),
  makePlaceholderLesson(1, 14, "Tabellae ex Sicilia"),
  makePlaceholderLesson(1, 15, "Roma, mare, metus")
];
