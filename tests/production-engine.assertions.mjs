import assert from "node:assert/strict";
import { evaluateProductionItem, computeProductionProgress } from "../assets/js/productionEngine.js";

function run() {
  const latinItem = {
    id: "p1",
    type: "image-to-word",
    expected: "rosa",
    points: 1,
  };
  const latinResult = evaluateProductionItem(latinItem, " Rosa.");
  assert.equal(latinResult.isCorrect, true);
  assert.equal(latinResult.awardedPoints, 1);

  const frItem = {
    id: "p2",
    type: "short-text",
    expected: "l'esclave salue",
    points: 1,
  };
  const frResult = evaluateProductionItem(frItem, "l’esclave salue");
  assert.equal(frResult.isCorrect, true);

  const oneOfItem = {
    id: "p4",
    type: "one-of",
    expected: "aquatique",
    accepted: ["aquatique", "aquarium", "aqueux"],
    language: "fr",
    points: 1,
  };
  const oneOfResult = evaluateProductionItem(oneOfItem, "Aquarium");
  assert.equal(oneOfResult.isCorrect, true);

  const segmentItem = {
    id: "p5",
    type: "translation-segment",
    expected: "la fille marche",
    accepted: ["la fille marche", "une fille marche"],
    language: "fr",
    points: 1,
  };
  const segmentResult = evaluateProductionItem(segmentItem, "Une fille marche.");
  assert.equal(segmentResult.isCorrect, true);

  const textInputItem = {
    id: "p6",
    type: "textInput",
    expected: "rosa floret",
    answerConfig: {
      type: "latin-expression",
      language: "latin",
      expected: "rosa floret",
    },
    points: 1,
  };
  const textInputResult = evaluateProductionItem(textInputItem, "Rosa floret.");
  assert.equal(textInputResult.isCorrect, true);

  const acceptedAnswersItem = {
    id: "p7",
    type: "textInput",
    expected: "la lettre est dans la caisse",
    acceptedAnswers: ["la lettre est dans la caisse", "la lettre est dans la boite"],
    language: "fr",
    tolerateArticles: true,
    points: 1,
  };
  const acceptedAnswersResult = evaluateProductionItem(acceptedAnswersItem, "lettre est dans la boîte");
  assert.equal(acceptedAnswersResult.isCorrect, true);

  // Cas release-blocker : acceptedAnswers ne doit plus être écrasé par answerConfig.accepted.
  const divergentAcceptedItem = {
    id: "divergent",
    type: "textInput",
    expected: "le voisin entend",
    acceptedAnswers: ["le voisin entend", "un voisin écoute"],
    answerConfig: {
      type: "translation-segment",
      language: "fr",
      accepted: ["le voisin entend"],
      tolerateArticles: true,
    },
    points: 1,
  };
  const divergentAcceptedResult = evaluateProductionItem(divergentAcceptedItem, "un voisin écoute");
  assert.equal(divergentAcceptedResult.isCorrect, true);

  // Cas P3 typique : séparateurs internes variables.
  const separatorItem = {
    id: "p3-l6-p3-test",
    type: "textInput",
    expected: "video ; negas ; intrat",
    acceptedAnswers: [
      "video ; negas ; intrat",
      "video, negas, intrat",
      "video / negas / intrat",
      "video negas intrat",
    ],
    answerConfig: {
      type: "one-of",
      language: "latin",
      accepted: [
        "video ; negas ; intrat",
        "video, negas, intrat",
        "video / negas / intrat",
        "video negas intrat",
      ],
    },
    normalization: {
      trim: true,
      collapseSpaces: true,
      ignoreCase: true,
      ignorePunctuation: true,
      normalizeApostrophes: true,
      ignoreDiacritics: true,
    },
    points: 1,
  };

  assert.equal(
    evaluateProductionItem(separatorItem, "video; negas; intrat").isCorrect,
    true,
  );

  assert.equal(
    evaluateProductionItem(separatorItem, "video / negas / intrat").isCorrect,
    true,
  );

  assert.equal(
    evaluateProductionItem(separatorItem, "video negas intrat").isCorrect,
    true,
  );

  assert.equal(
    evaluateProductionItem(separatorItem, "video negat intrat").isCorrect,
    false,
  );

  const wrongItem = {
    id: "p3",
    type: "find-verb",
    expected: "portat",
    points: 1,
  };
  const wrongResult = evaluateProductionItem(wrongItem, "servus");
  assert.equal(wrongResult.isCorrect, false);
  assert.equal(wrongResult.awardedPoints, 0);

  const progress = computeProductionProgress(
    [latinItem, frItem, wrongItem],
    {
      p1: { ...latinResult, userAnswer: "rosa" },
      p2: { ...frResult, userAnswer: "l'esclave salue" },
      p3: { ...wrongResult, userAnswer: "servus" },
    },
  );

  assert.equal(progress.answeredCount, 3);
  assert.equal(progress.totalItems, 3);
  assert.equal(progress.score, 2);
  assert.equal(progress.maxScore, 3);

  console.log("production-engine assertions passed");
}

run();
