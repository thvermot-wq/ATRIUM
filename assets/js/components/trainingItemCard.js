function normalizeType(type = "") {
  const map = {
    mcq: "single-choice",
    singleChoice: "single-choice",
    multipleChoice: "multiple-choice",
    textInput: "text-input",
  };

  return map[type] || type;
}

function shuffleArray(values = []) {
  const copy = [...values];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function formatExpected(expected) {
  if (Array.isArray(expected)) return expected.join(" | ");
  if (expected && typeof expected === "object") {
    return Object.entries(expected)
      .map(([left, right]) => `${left} → ${right}`)
      .join(" ; ");
  }
  return String(expected ?? "");
}

function getRenderedOptions(item) {
  const baseOptions = Array.isArray(item.options) ? [...item.options] : [];
  if (item.shuffle === false || baseOptions.length <= 1) {
    return baseOptions;
  }
  return shuffleArray(baseOptions);
}

function createSingleChoiceFields(item) {
  const wrapper = document.createElement("div");
  wrapper.className = "field-stack";

  getRenderedOptions(item).forEach((option) => {
    const label = document.createElement("label");
    label.className = "choice-line";
    label.innerHTML = `
      <input type="radio" name="${item.id}" value="${option}" />
      <span>${option}</span>
    `;
    wrapper.appendChild(label);
  });

  return {
    node: wrapper,
    getResponse: () => {
      const checked = wrapper.querySelector(`input[name="${item.id}"]:checked`);
      return checked ? checked.value : "";
    },
    setDisabled: (disabled) => {
      wrapper.querySelectorAll("input").forEach((input) => {
        input.disabled = disabled;
      });
    },
    resetResponse: () => {
      wrapper.querySelectorAll("input").forEach((input) => {
        input.checked = false;
      });
    },
  };
}

function createMultipleChoiceFields(item) {
  const wrapper = document.createElement("div");
  wrapper.className = "field-stack";

  getRenderedOptions(item).forEach((option) => {
    const label = document.createElement("label");
    label.className = "choice-line";
    label.innerHTML = `
      <input type="checkbox" value="${option}" />
      <span>${option}</span>
    `;
    wrapper.appendChild(label);
  });

  return {
    node: wrapper,
    getResponse: () => Array.from(wrapper.querySelectorAll('input[type="checkbox"]:checked')).map((input) => input.value),
    setDisabled: (disabled) => {
      wrapper.querySelectorAll("input").forEach((input) => {
        input.disabled = disabled;
      });
    },
    resetResponse: () => {
      wrapper.querySelectorAll("input").forEach((input) => {
        input.checked = false;
      });
    },
  };
}

function createMatchingFields(item) {
  const wrapper = document.createElement("div");
  wrapper.className = "field-stack";

  const pairs = item.pairs || [];
  const rightOptions = item.rightOptions || pairs.map((pair) => pair.right);

  pairs.forEach((pair) => {
    const row = document.createElement("div");
    row.className = "matching-row";

    const label = document.createElement("span");
    label.textContent = pair.left;

    const select = document.createElement("select");
    select.setAttribute("data-left", pair.left);

    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Choisir";
    select.appendChild(placeholder);

    rightOptions.forEach((option) => {
      const optionNode = document.createElement("option");
      optionNode.value = option;
      optionNode.textContent = option;
      select.appendChild(optionNode);
    });

    row.append(label, select);
    wrapper.appendChild(row);
  });

  return {
    node: wrapper,
    getResponse: () => {
      const map = {};
      wrapper.querySelectorAll("select[data-left]").forEach((select) => {
        map[select.getAttribute("data-left")] = select.value;
      });
      return map;
    },
    setDisabled: (disabled) => {
      wrapper.querySelectorAll("select").forEach((select) => {
        select.disabled = disabled;
      });
    },
    resetResponse: () => {
      wrapper.querySelectorAll("select").forEach((select) => {
        select.value = "";
      });
    },
  };
}

function createOrderingFields(item) {
  const wrapper = document.createElement("div");
  wrapper.className = "field-stack";

  const options = item.options || item.expected || [];

  options.forEach((_, index) => {
    const row = document.createElement("div");
    row.className = "matching-row";

    const label = document.createElement("span");
    label.textContent = `Position ${index + 1}`;

    const select = document.createElement("select");
    select.setAttribute("data-order-index", String(index));

    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Choisir";
    select.appendChild(placeholder);

    options.forEach((option) => {
      const optionNode = document.createElement("option");
      optionNode.value = option;
      optionNode.textContent = option;
      select.appendChild(optionNode);
    });

    row.append(label, select);
    wrapper.appendChild(row);
  });

  return {
    node: wrapper,
    getResponse: () => Array.from(wrapper.querySelectorAll("select[data-order-index]"))
      .sort((a, b) => Number(a.getAttribute("data-order-index")) - Number(b.getAttribute("data-order-index")))
      .map((select) => select.value),
    setDisabled: (disabled) => {
      wrapper.querySelectorAll("select").forEach((select) => {
        select.disabled = disabled;
      });
    },
    resetResponse: () => {
      wrapper.querySelectorAll("select").forEach((select) => {
        select.value = "";
      });
    },
  };
}

function createTextInputFields(item) {
  const wrapper = document.createElement("div");
  wrapper.className = "field-stack";

  const input = document.createElement("input");
  input.type = "text";
  input.maxLength = 120;
  input.placeholder = item.placeholder || "Saisir une réponse";

  wrapper.appendChild(input);

  return {
    node: wrapper,
    getResponse: () => input.value,
    setDisabled: (disabled) => {
      input.disabled = disabled;
    },
    resetResponse: () => {
      input.value = "";
    },
  };
}

export function createTrainingItemCard({ item, onValidate, onReset, deferCorrection = false, canReset = () => true }) {
  const type = normalizeType(item.type || "single-choice");
  const card = document.createElement("article");
  card.className = "card training-item-card";
  card.dataset.itemState = "pristine";

  const title = document.createElement("h4");
  title.textContent = item.prompt;

  const badge = document.createElement("p");
  badge.className = "muted";
  badge.textContent = `Type: ${type} · ${item.points || 1} point`;

  let renderer;
  if (type === "single-choice") renderer = createSingleChoiceFields(item);
  else if (type === "multiple-choice") renderer = createMultipleChoiceFields(item);
  else if (type === "matching") renderer = createMatchingFields(item);
  else if (type === "ordering") renderer = createOrderingFields(item);
  else if (type === "text-input") renderer = createTextInputFields(item);
  else throw new Error(`Unsupported training item type in renderer: ${item.type}`);

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
  validateButton.textContent = deferCorrection ? "Enregistrer la réponse" : "Valider l'item";

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
      feedback.className = "feedback-inline ok";
      feedback.textContent = "Réponse correcte (corrigé final).";
      answer.hidden = true;
      answer.textContent = "";
    } else {
      feedback.className = "feedback-inline ko";
      feedback.textContent = "Réponse à corriger (corrigé final).";
      answer.hidden = false;
      answer.textContent = `Réponse attendue : ${formatExpected(item.expected)}`;
    }
    applyState();
  };

  card.closeAttempt = () => {
    attemptClosed = true;
    applyState();
  };

  validateButton.addEventListener("click", () => {
    if (isSubmitted || attemptClosed) return;

    const result = onValidate(renderer.getResponse());
    isSubmitted = true;
    card.dataset.itemState = "answered_locked";

    if (deferCorrection) {
      feedback.className = "feedback-inline muted";
      feedback.textContent = "Réponse enregistrée. Le corrigé complet apparaîtra en fin de leçon.";
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
      answer.textContent = `Correction : ${formatExpected(item.expected)}`;
    }

    applyState();
  });

  resetButton.addEventListener("click", () => {
    if (attemptClosed || !canReset()) return;

    renderer.resetResponse();
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
  card.append(title, badge, renderer.node, actions, feedback, answer);
  return card;
}
