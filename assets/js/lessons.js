// Données pédagogiques (préparation data-driven).
// Cette PR expose uniquement l'ossature de navigation, pas le moteur de correction.

export const LESSONS_SPEC = {
  periods: 3,
  lessonsPerPeriod: 5,
  lessonsTotal: 15,
  lessonMax: 10,
  trainingMax: 7,
  productionMax: 3,
  periodMax: 50,
  validationPercent: 80,
};

export const periods = [
  { id: "p1", index: 1, title: "Période 1", level: "Entrée dans les bases" },
  { id: "p2", index: 2, title: "Période 2", level: "Consolidation" },
  { id: "p3", index: 3, title: "Période 3", level: "Structuration" },
];

export const lessons = periods.flatMap((period) => {
  return Array.from({ length: LESSONS_SPEC.lessonsPerPeriod }, (_, idx) => {
    const lessonIndex = idx + 1;
    return {
      id: `${period.id}-l${lessonIndex}`,
      periodId: period.id,
      periodIndex: period.index,
      lessonIndex,
      title: `Leçon ${lessonIndex}`,
      trainingMax: LESSONS_SPEC.trainingMax,
      productionMax: LESSONS_SPEC.productionMax,
      lessonMax: LESSONS_SPEC.lessonMax,
      status: "À démarrer",
    };
  });
});

export function getLessonsByPeriod(periodId) {
  return lessons.filter((lesson) => lesson.periodId === periodId);
}

export function getLessonById(lessonId) {
  return lessons.find((lesson) => lesson.id === lessonId) || null;
}
