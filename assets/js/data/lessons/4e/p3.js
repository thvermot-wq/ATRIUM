// p3.js — ATRIUM 4e P3 placeholders

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
      "p3",
      "4e"
    ]
  },
  meta: {
    status: "placeholder",
    tags: ["4e", `p${period}`, "placeholder"]
  }
});

export const lessons4eP3 = [
  makePlaceholderLesson(3, 1, "In templo fabula narratur"),
  makePlaceholderLesson(3, 2, "Romulus et Remus"),
  makePlaceholderLesson(3, 3, "Qui urbem condidit"),
  makePlaceholderLesson(3, 4, "Hercules monstrum vicit"),
  makePlaceholderLesson(3, 5, "Haec signa veteris urbis"),
  makePlaceholderLesson(3, 6, "Testis in foro stat"),
  makePlaceholderLesson(3, 7, "Id quod vidit narrat"),
  makePlaceholderLesson(3, 8, "Nomen in lapide legitur"),
  makePlaceholderLesson(3, 9, "Dativo credimus, ablativo utimur"),
  makePlaceholderLesson(3, 10, "Ubi, cum, postquam"),
  makePlaceholderLesson(3, 11, "Futurum et consilium"),
  makePlaceholderLesson(3, 12, "Fabula et historia"),
  makePlaceholderLesson(3, 13, "Instituta civitatis"),
  makePlaceholderLesson(3, 14, "Textus continuus"),
  makePlaceholderLesson(3, 15, "Historia, memoria, civitas")
];
