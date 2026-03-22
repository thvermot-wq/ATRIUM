// p2.js — ATRIUM 4e P2 placeholders

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
      "4e"
    ]
  },
  meta: {
    status: "placeholder",
    tags: ["4e", `p${period}`, "placeholder"]
  }
});

export const lessons4eP2 = [
  makePlaceholderLesson(2, 1, "Cras proficiscemur?"),
  makePlaceholderLesson(2, 2, "Ad portum ibimus"),
  makePlaceholderLesson(2, 3, "Duc, porta, mane"),
  makePlaceholderLesson(2, 4, "Magister iubet laborare"),
  makePlaceholderLesson(2, 5, "Amico donum datur"),
  makePlaceholderLesson(2, 6, "Servus domino aquam portat"),
  makePlaceholderLesson(2, 7, "Cum amicis in via"),
  makePlaceholderLesson(2, 8, "Gladio, lucerna, nave"),
  makePlaceholderLesson(2, 9, "Hic, ille, is"),
  makePlaceholderLesson(2, 10, "Qui tabellam portat?"),
  makePlaceholderLesson(2, 11, "Ubi castra sunt"),
  makePlaceholderLesson(2, 12, "Mandata et consilia"),
  makePlaceholderLesson(2, 13, "Sum, possum, eo"),
  makePlaceholderLesson(2, 14, "Iter et mandata"),
  makePlaceholderLesson(2, 15, "Ventus, via, consilium")
];
