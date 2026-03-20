import { evaluateTrainingItem } from "../trainingEngine.js";
import { evaluateProductionItem } from "../productionEngine.js";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function asNonEmptyStringArray(value) {
  if (Array.isArray(value)) {
    return value
      .map((item) => String(item ?? "").trim())
      .filter(Boolean);
  }
  if (isNonEmptyString(value)) {
    return [value.trim()];
  }
  return [];
}

function getExerciseSection(exercise, lesson) {
  if (exercise?.section === "training" || exercise?.section === "production") {
    return exercise.section;
  }

  if (Array.isArray(lesson?.training) && lesson.training.some((item) => item?.id === exercise?.id)) {
    return "training";
  }

  if (Array.isArray(lesson?.production) && lesson.production.some((item) => item?.id === exercise?.id)) {
    return "production";
  }

  return null;
}

function validateRuntimeTests(exercise, base, evaluator) {
  if (!Array.isArray(exercise.tests) || exercise.tests.length === 0) return;

  const hasValid = exercise.tests.some((test) => test?.isCorrect === true);
  const hasInvalid = exercise.tests.some((test) => test?.isCorrect === false);

  assert(
    hasValid && hasInvalid,
    `${base}: tests must contain at least one valid and one invalid case.`,
  );

  exercise.tests.forEach((test, testIndex) => {
    const testBase = `${base} · test#${testIndex + 1}`;
    assert(typeof test === "object" && test !== null, `${testBase}: test must be an object.`);
    assert(typeof test.isCorrect === "boolean", `${testBase}: missing boolean "isCorrect".`);

    const actual = evaluator(test.input);
    assert(
      actual === test.isCorrect,
      `${testBase}: expected isCorrect=${test.isCorrect}, got ${actual}.`,
    );
  });
}

function validateTrainingTextInput(exercise, lesson, base) {
  const expectedList = asNonEmptyStringArray(exercise.expected);

  assert(
    expectedList.length > 0,
    `${base}: training textInput must define "expected" as a non-empty string or array. ` +
      `"acceptedAnswers" alone is ignored by trainingEngine.`,
  );

  const runtimeExercise = {
    ...exercise,
    expected: Array.isArray(exercise.expected) ? exercise.expected : expectedList,
  };

  const evaluate = (input) => evaluateTrainingItem(runtimeExercise, input).isCorrect;

  if (Array.isArray(exercise.acceptedAnswers) && exercise.acceptedAnswers.length > 0) {
    const missingFromExpected = exercise.acceptedAnswers
      .map((item) => String(item ?? "").trim())
      .filter(Boolean)
      .filter((candidate) => !evaluate(candidate));

    assert(
      missingFromExpected.length === 0,
      `${base}: training textInput declares acceptedAnswers not covered by "expected". ` +
        `trainingEngine ignores acceptedAnswers. Offending values: ${missingFromExpected
          .slice(0, 5)
          .join(" | ")}`,
    );
  }

  if (exercise.answerConfig && typeof exercise.answerConfig === "object") {
    const documentedAccepted = asNonEmptyStringArray(
      exercise.answerConfig.accepted ?? exercise.answerConfig.acceptedAnswers,
    );

    if (documentedAccepted.length > 0) {
      const missingFromExpected = documentedAccepted.filter((candidate) => !evaluate(candidate));

      assert(
        missingFromExpected.length === 0,
        `${base}: training textInput declares answerConfig variants not covered by "expected". ` +
          `trainingEngine ignores answerConfig. Offending values: ${missingFromExpected
            .slice(0, 5)
            .join(" | ")}`,
      );
    }
  }

  validateRuntimeTests(exercise, base, evaluate);
}

function validateProductionTextInput(exercise, lesson, base) {
  assert(
    isNonEmptyString(exercise.canonicalAnswer),
    `${base}: missing required field "canonicalAnswer".`,
  );
  assert(
    Array.isArray(exercise.acceptedAnswers) && exercise.acceptedAnswers.length > 0,
    `${base}: missing non-empty "acceptedAnswers".`,
  );
  assert(
    exercise.normalization && typeof exercise.normalization === "object",
    `${base}: missing required field "normalization".`,
  );
  assert(
    isNonEmptyString(exercise.gradingFocus),
    `${base}: missing required field "gradingFocus".`,
  );
  assert(
    Array.isArray(exercise.rejectIf) && exercise.rejectIf.length > 0,
    `${base}: missing non-empty "rejectIf".`,
  );
  assert(
    Array.isArray(exercise.tests) && exercise.tests.length >= 2,
    `${base}: missing non-empty "tests" (need at least 2).`,
  );

  if (exercise.answerConfig && typeof exercise.answerConfig === "object") {
    const runtimeType = exercise.answerConfig.type || "exact";

    if (runtimeType === "one-of" || runtimeType === "translation-segment") {
      assert(
        Array.isArray(exercise.answerConfig.accepted) &&
          exercise.answerConfig.accepted.length > 0,
        `${base}: answerConfig.type="${runtimeType}" requires non-empty "answerConfig.accepted".`,
      );
    }
  }

  const evaluate = (input) => evaluateProductionItem(exercise, input).isCorrect;

  assert(
    evaluate(exercise.canonicalAnswer),
    `${base}: canonicalAnswer is not accepted by the real production runtime.`,
  );

  validateRuntimeTests(exercise, base, evaluate);
}

function validateExercise(exercise, lesson, index, levelId) {
  const base = `[lessons] ${lesson.id} · exercise#${index + 1}`;
  const section = getExerciseSection(exercise, lesson);

  assert(exercise && typeof exercise === "object", `${base}: exercise must be an object.`);
  assert(isNonEmptyString(exercise.type), `${base}: missing required field "type".`);
  assert(isNonEmptyString(exercise.id), `${base}: missing required field "id".`);
  assert(isNonEmptyString(exercise.prompt), `${base}: missing required field "prompt".`);

  if (section === "training") {
    assert(typeof exercise.points === "number", `${base}: training exercise must define numeric "points".`);
  }

  switch (exercise.type) {
    case "singleChoice":
    case "mcq":
      assert(
        Array.isArray(exercise.options) && exercise.options.length > 1,
        `${base}: singleChoice/mcq requires "options" with at least 2 entries.`,
      );
      assert(
        isNonEmptyString(exercise.expected),
        `${base}: singleChoice/mcq requires string "expected".`,
      );
      break;

    case "multipleChoice":
      assert(
        Array.isArray(exercise.options) && exercise.options.length > 1,
        `${base}: multipleChoice requires "options".`,
      );
      assert(
        Array.isArray(exercise.expected),
        `${base}: multipleChoice requires array "expected".`,
      );
      break;

    case "matching":
      assert(
        Array.isArray(exercise.pairs) && exercise.pairs.length > 0,
        `${base}: matching requires "pairs".`,
      );
      assert(
        exercise.expected && typeof exercise.expected === "object",
        `${base}: matching requires object "expected".`,
      );
      break;

    case "ordering":
      assert(
        Array.isArray(exercise.options) && exercise.options.length > 0,
        `${base}: ordering requires "options".`,
      );
      assert(
        Array.isArray(exercise.expected) && exercise.expected.length > 0,
        `${base}: ordering requires array "expected".`,
      );
      break;

    case "textInput":
    case "short-text": {
      const expectedList = asNonEmptyStringArray(exercise.expected);
      const acceptedList = asNonEmptyStringArray(exercise.acceptedAnswers);

      assert(
        expectedList.length > 0 || acceptedList.length > 0,
        `${base}: textInput/short-text requires "expected" or non-empty "acceptedAnswers".`,
      );

      if (section === "training") {
        validateTrainingTextInput(exercise, lesson, base);
      }

      if (section === "production" && lesson?.meta?.status === "ready") {
        validateProductionTextInput(exercise, lesson, base);
      }

      break;
    }

    default:
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
      assert(
        typeof lesson.lessonNumber === "number",
        `${base}: missing required numeric field "lessonNumber".`,
      );
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

      lesson.exercises.forEach((exercise, exerciseIndex) =>
        validateExercise(exercise, lesson, exerciseIndex, levelId),
      );
    });
  });
}
