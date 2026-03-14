export function createProductionItemCard({
  item,
  onEvaluate,
  onReset,
  deferCorrection = false,
  canReset = () => true,
}) {
  const card = document.createElement("article");
  card.className = "card production-item-card";
  card.dataset.itemState = "pristine";

  const title = document.createElement("h4");
  title.textContent = item.prompt || "Production guidée";

  const hint = document.createElement("p");
  hint.className = "muted";

  const isChipsCompletion = item?.uiVariant === "chipsCompletion" && Array.isArray(item?.chips) && item.chips.length > 0;
  hint.textContent = isChipsCompletion
    ? `${item.points || 1} point · cartouches à compléter`
    : `${item.points || 1} point · réponse courte`;

  function createShortTextInput() {
    const input = document.createElement("input");
    input.type = "text";
    input.name = item.id;
    input.maxLength = 120;
    input.placeholder = item.placeholder || "Écrire une réponse courte";

    return {
      node: input,
      getResponse: () => input.value,
      setDisabled: (disabled) => {
        input.disabled = disabled;
      },
      resetResponse: () => {
        input.value = "";
      },
    };
  }

  function createChipsCompletion() {
    const wrapper = document.createElement("div");
    wrapper.className = "field-stack";
    wrapper.style.display = "flex";
    wrapper.style.flexWrap = "wrap";
    wrapper.style.gap = "0.45rem";

    const inputs = [];

    item.chips.forEach((chip, index) => {
      const segment = document.createElement("label");
      segment.className = "chip-completion";
      segment.style.display = "inline-flex";
      segment.style.alignItems = "center";
      segment.style.gap = "0.35rem";
      segment.style.padding = "0.35rem 0.55rem";
      segment.style.border = "1px solid var(--line, #d9dfea)";
      segment.style.borderRadius = "999px";
      segment.style.background = "#f8faff";
      segment.style.whiteSpace = "nowrap";

      const text = document.createElement("span");
      text.textContent = String(chip?.label || `forme ${index + 1} /`);
      text.style.fontWeight = "700";
      text.style.color = "var(--primary, #263c7a)";

      const input = document.createElement("input");
      input.type = "text";
      input.inputMode = "text";
      input.autocomplete = "off";
      input.spellcheck = false;
      input.maxLength = Number(chip?.maxLength || 16);
      input.placeholder = "…";
      input.style.width = `${Math.max(4, String(chip?.expected || "").length + 1)}ch`;
      input.style.border = "none";
      input.style.outline = "none";
      input.style.background = "transparent";
      input.style.padding = "0";
      input.style.margin = "0";
      input.style.font = "inherit";
      input.style.minWidth = "4ch";

      inputs.push(input);
      segment.append(text, input);
      wrapper.appendChild(segment);
    });

    return {
      node: wrapper,
      getResponse: () => inputs.map((input) => input.value.trim()).join(" ").trim(),
      setDisabled: (disabled) => {
        inputs.forEach((input) => {
          input.disabled = disabled;
        });
      },
      resetResponse: () => {
        inputs.forEach((input) => {
          input.value = "";
        });
      },
    };
  }

  const renderer = isChipsCompletion ? createChipsCompletion() : createShortTextInput();

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
    renderer.setDisabled(isSubmitted || attemptClosed);
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

    const result = onEvaluate(renderer.getResponse());
    isSubmitted = true;
    card.dataset.itemState = "answered_locked";

    if (deferCorrection) {
      feedback.textContent = "Réponse enregistrée.\nLe corrigé complet apparaîtra en fin de leçon.";
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

    renderer.resetResponse();
    answer.hidden = true;
    answer.textContent = "";
    feedback.className = "feedback-inline muted";
    feedback.textContent = "Exercice réinitialisé.\nNouvelle tentative prête.";
    isSubmitted = false;
    card.dataset.itemState = "pristine";

    if (typeof onReset === "function") onReset();
    applyState();
  });

  applyState();
  card.append(title, hint, renderer.node, actions, feedback, answer);
  return card;
}
