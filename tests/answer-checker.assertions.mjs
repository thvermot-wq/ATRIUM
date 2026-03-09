import assert from "node:assert/strict";
import { normalizeInput } from "../assets/js/normalize.js";
import { isCorrect, isCorrectAny } from "../assets/js/answerChecker.js";

function run() {
  // Casse + espaces + ponctuation finale
  assert.equal(normalizeInput(" Salve. "), "salve");

  // Apostrophes courbes/droites
  const frConfig = {
    type: "translation-segment",
    language: "fr",
    accepted: ["l'esclave salue"],
  };
  assert.equal(isCorrect("l’esclave salue", frConfig), true);

  // Exact latin (orthographe unique)
  assert.equal(isCorrect("aqua", { type: "exact", language: "latin", expected: "aqua" }), true);
  assert.equal(isCorrect("aquae", { type: "exact", language: "latin", expected: "aqua" }), false);

  // Liste fermée autorisée
  const familyConfig = {
    type: "one-of",
    language: "fr",
    accepted: ["aquatique", "aquarium", "aqueux"],
  };
  assert.equal(isCorrect("Aquarium", familyConfig), true);
  assert.equal(isCorrect("eau", familyConfig), false);

  // Expression latine multi-mots courte
  assert.equal(
    isCorrect(" Servus aquam portat. ", {
      type: "latin-expression",
      language: "latin",
      expected: "servus aquam portat",
    }),
    true,
  );

  // Helper multi-config
  assert.equal(
    isCorrectAny("valete", [
      { type: "exact", expected: "salve", language: "latin" },
      { type: "exact", expected: "valete", language: "latin" },
    ]),
    true,
  );

  console.log("answer-checker assertions passed");
}

run();
