export function createProductionItemCard({ item, onEvaluate, onReset, deferCorrection = false, canReset = () => true }) {
  const card = document.createElement("article");
  card.className = "card production-item-card";
  card.dataset.itemState = "pristine";

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
  feedback.textContent = "En attente d'enregistrement.";

  const answer = document.createElement("p");
  answer.className = "muted answer-reveal";
  answer.hidden = true;

  const actions = document.createElement("div");
  actions.className = "actions-row";

  const validateButton = document.createElement("button");
  validateButton.type = "button";
  validateButton.className = "btn btn-primary";
  validateButton.textContent = deferCorrection ? "Enregistrer la réponse" : "Corriger cette production";

  const resetButton = document.createElement("button");
  resetButton.type = "button";
  resetButton.className = "btn btn-secondary";
  resetButton.textContent = "Réinitialiser l'exercice";

  actions.append(validateButton, resetButton);

  let isSubmitted = false;
  let attemptClosed = false;

  function applyState() {
    input.disabled = isSubmitted || attemptClosed;
    validateButton.disabled = isSubmitted || attemptClosed;
    resetButton.disabled = attemptClosed || !canReset();
  }

  card.setFinalReveal = (result) => {
    card.dataset.itemState = "revealed_in_final_summary";
    isSubmitted = true;
    attemptClosed = true;

    if (result?.isCorrect) {
      feedback.textContent = "Réponse correcte (corrigé final).";
      feedback.className = "feedback-inline ok";
      answer.hidden = true;
      answer.textContent = "";
    } else {
      feedback.textContent = "Réponse à corriger (corrigé final).";
      feedback.className = "feedback-inline ko";
      answer.hidden = false;
      answer.textContent = `Réponse attendue : ${item.expected}`;
    }

    applyState();
  };

  card.closeAttempt = () => {
    attemptClosed = true;
    applyState();
  };

  validateButton.addEventListener("click", () => {
    if (isSubmitted || attemptClosed) return;

    const result = onEvaluate(input.value);
    isSubmitted = true;
    card.dataset.itemState = "answered_locked";

    if (deferCorrection) {
      feedback.textContent = "Réponse enregistrée. Le corrigé complet apparaîtra en fin de leçon.";
      feedback.className = "feedback-inline muted";
      answer.hidden = true;
      answer.textContent = "";
    } else if (result.isCorrect) {
      feedback.textContent = "✅ Correct";
      feedback.className = "feedback-inline ok";
      answer.hidden = true;
      answer.textContent = "";
    } else {
      feedback.textContent = "❌ Incorrect";
      feedback.className = "feedback-inline ko";
      answer.hidden = false;
      answer.textContent = `Réponse attendue : ${item.expected}`;
    }

    applyState();
  });

  resetButton.addEventListener("click", () => {
    if (attemptClosed || !canReset()) return;

    input.value = "";
    answer.hidden = true;
    answer.textContent = "";
    feedback.className = "feedback-inline muted";
    feedback.textContent = "Exercice réinitialisé. Nouvelle tentative prête.";
    isSubmitted = false;
    card.dataset.itemState = "pristine";
    if (typeof onReset === "function") onReset();
    applyState();
  });

  applyState();
  card.append(title, hint, input, actions, feedback, answer);
  return card;
}
