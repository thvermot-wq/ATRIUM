// Validation légère des données de leçons (sans dépendance externe).

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function validateExercise(exercise, lesson, index) {
  const base = `[lessons] ${lesson.id} · exercise#${index + 1}`;
  assert(exercise && typeof exercise === "object", `${base}: exercise must be an object.`);
  assert(isNonEmptyString(exercise.type), `${base}: missing required field "type".`);
  assert(isNonEmptyString(exercise.id), `${base}: missing required field "id".`);
  assert(isNonEmptyString(exercise.prompt), `${base}: missing required field "prompt".`);

  if (exercise.section === "training") {
    assert(typeof exercise.points === "number", `${base}: training exercise must define numeric "points".`);
  }

  switch (exercise.type) {
    case "singleChoice":
    case "mcq":
      assert(Array.isArray(exercise.options) && exercise.options.length > 1, `${base}: singleChoice/mcq requires "options" with at least 2 entries.`);
      assert(isNonEmptyString(exercise.expected), `${base}: singleChoice/mcq requires string "expected".`);
      break;
    case "multipleChoice":
      assert(Array.isArray(exercise.options) && exercise.options.length > 1, `${base}: multipleChoice requires "options".`);
      assert(Array.isArray(exercise.expected), `${base}: multipleChoice requires array "expected".`);
      break;
    case "matching":
      assert(Array.isArray(exercise.pairs) && exercise.pairs.length > 0, `${base}: matching requires "pairs".`);
      assert(exercise.expected && typeof exercise.expected === "object", `${base}: matching requires object "expected".`);
      break;
    case "ordering":
      assert(Array.isArray(exercise.options) && exercise.options.length > 0, `${base}: ordering requires "options".`);
      assert(Array.isArray(exercise.expected) && exercise.expected.length > 0, `${base}: ordering requires array "expected".`);
      break;
    case "textInput":
    case "short-text":
      assert(
        isNonEmptyString(exercise.expected) || (Array.isArray(exercise.acceptedAnswers) && exercise.acceptedAnswers.length > 0),
        `${base}: textInput/short-text requires "expected" or non-empty "acceptedAnswers".`,
      );
      break;
    default:
      // Les moteurs gèrent la compatibilité type ; on évite un couplage trop strict ici.
      break;
  }
}

export function validateLessons(lessonsByLevel, spec) {
  const seenIds = new Set();

  Object.entries(lessonsByLevel).forEach(([levelId, lessons]) => {
    assert(Array.isArray(lessons), `[lessons] level ${levelId}: lessons must be an array.`);

    lessons.forEach((lesson, index) => {
      const base = `[lessons] ${levelId} · lesson#${index + 1}`;
      assert(isNonEmptyString(lesson.id), `${base}: missing required field "id".`);
      assert(!seenIds.has(lesson.id), `${base}: duplicate lesson id "${lesson.id}".`);
      seenIds.add(lesson.id);

      assert(isNonEmptyString(lesson.level), `${base}: missing required field "level".`);
      assert(typeof lesson.period === "number", `${base}: missing required numeric field "period".`);
      assert(typeof lesson.lessonNumber === "number", `${base}: missing required numeric field "lessonNumber".`);
      assert(Array.isArray(lesson.exercises), `${base}: missing required array field "exercises".`);

      assert(Array.isArray(lesson.training), `${base}: missing required array field "training".`);
      assert(Array.isArray(lesson.production), `${base}: missing required array field "production".`);
      if (lesson?.meta?.status === "ready") {
        assert(
          lesson.training.length === spec.trainingMax,
          `${base}: expected ${spec.trainingMax} training items, got ${lesson.training.length}.`,
        );
        assert(
          lesson.production.length === spec.productionMax,
          `${base}: expected ${spec.productionMax} production items, got ${lesson.production.length}.`,
        );
      }

      lesson.exercises.forEach((exercise, exerciseIndex) => validateExercise(exercise, lesson, exerciseIndex));
    });
  });
}
