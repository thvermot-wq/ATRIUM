const ATTEMPT_STATE = {
  PRISTINE: "pristine",
  SUBMITTED_CORRECT: "submitted_correct",
  SUBMITTED_INCORRECT: "submitted_incorrect",
  CORRECTION_VIEWED: "correction_viewed",
  RESET_REQUIRED: "reset_required",
};

export function createProductionItemCard({ item, onEvaluate, onReset }) {
  const card = document.createElement("article");
  card.className = "card production-item-card";

  const title = document.createElement("h4");
  title.textContent = item.prompt || "Production guidée";

  const hint = document.createElement("p");
  hint.className = "muted";
  hint.textContent = `${item.points || 1} point · réponse courte`;

  const input = document.createElement("input");
  input.type = "text";
  input.name = item.id;
  input.maxLength = 120;
  input.placeholder = "Écrire une réponse courte";

  const feedback = document.createElement("p");
  feedback.className = "feedback-inline muted";
  feedback.textContent = "En attente de correction.";

  const answer = document.createElement("p");
  answer.className = "muted answer-reveal";
  answer.hidden = true;

  const actions = document.createElement("div");
  actions.className = "actions-row";

  const validateButton = document.createElement("button");
  validateButton.type = "button";
  validateButton.className = "btn btn-primary";
  validateButton.textContent = "Corriger cette production";

  const correctionButton = document.createElement("button");
  correctionButton.type = "button";
  correctionButton.className = "btn btn-secondary";
  correctionButton.textContent = "Voir la correction";
  correctionButton.hidden = true;

  const resetButton = document.createElement("button");
  resetButton.type = "button";
  resetButton.className = "btn btn-secondary";
  resetButton.textContent = "Réinitialiser l'exercice";

  actions.append(validateButton, correctionButton, resetButton);

  // Verrouille la tentative après soumission pour empêcher la copie du corrigé puis validation immédiate.
  let attemptState = ATTEMPT_STATE.PRISTINE;

  function applyState() {
    const isLocked = attemptState !== ATTEMPT_STATE.PRISTINE;
    input.disabled = isLocked;

    validateButton.disabled = attemptState !== ATTEMPT_STATE.PRISTINE;
    correctionButton.hidden = ![
      ATTEMPT_STATE.SUBMITTED_INCORRECT,
      ATTEMPT_STATE.CORRECTION_VIEWED,
      ATTEMPT_STATE.RESET_REQUIRED,
    ].includes(attemptState);
    correctionButton.disabled = attemptState !== ATTEMPT_STATE.SUBMITTED_INCORRECT;

    if (attemptState === ATTEMPT_STATE.CORRECTION_VIEWED || attemptState === ATTEMPT_STATE.RESET_REQUIRED) {
      feedback.textContent = "Correction consultée. Pour valider cet exercice, réinitialisez-le puis recommencez.";
      feedback.className = "feedback-inline ko";
      answer.hidden = false;
      answer.textContent = `Réponse attendue : ${item.expected}`;
    }
  }

  validateButton.addEventListener("click", () => {
    if (attemptState !== ATTEMPT_STATE.PRISTINE) {
      return;
    }

    const result = onEvaluate(input.value);

    if (result.isCorrect) {
      attemptState = ATTEMPT_STATE.SUBMITTED_CORRECT;
      feedback.textContent = "✅ Correct";
      feedback.className = "feedback-inline ok";
      answer.hidden = true;
      answer.textContent = "";
    } else {
      attemptState = ATTEMPT_STATE.SUBMITTED_INCORRECT;
      feedback.textContent = "❌ Incorrect";
      feedback.className = "feedback-inline ko";
      answer.hidden = true;
      answer.textContent = "";
    }

    applyState();
  });

  correctionButton.addEventListener("click", () => {
    if (attemptState !== ATTEMPT_STATE.SUBMITTED_INCORRECT) {
      return;
    }

    attemptState = ATTEMPT_STATE.CORRECTION_VIEWED;
    applyState();
    attemptState = ATTEMPT_STATE.RESET_REQUIRED;
    applyState();
  });

  resetButton.addEventListener("click", () => {
    input.value = "";
    answer.hidden = true;
    answer.textContent = "";
    feedback.className = "feedback-inline muted";
    feedback.textContent = "Exercice réinitialisé. Nouvelle tentative prête.";
    attemptState = ATTEMPT_STATE.PRISTINE;
    if (typeof onReset === "function") {
      onReset();
    }
    applyState();
  });

  applyState();
  card.append(title, hint, input, actions, feedback, answer);
  return card;
}
