function normalizeType(type = "") {
  const map = {
    mcq: "single-choice",
    singleChoice: "single-choice",
    multipleChoice: "multiple-choice",
    textInput: "text-input",
  };

  return map[type] || type;
}

const ATTEMPT_STATE = {
  PRISTINE: "pristine",
  SUBMITTED_CORRECT: "submitted_correct",
  SUBMITTED_INCORRECT: "submitted_incorrect",
  CORRECTION_VIEWED: "correction_viewed",
  RESET_REQUIRED: "reset_required",
};

function formatExpected(expected) {
  if (Array.isArray(expected)) {
    return expected.join(" | ");
  }
  if (expected && typeof expected === "object") {
    return Object.entries(expected)
      .map(([left, right]) => `${left} → ${right}`)
      .join(" ; ");
  }
  return String(expected ?? "");
}

function createSingleChoiceFields(item) {
  const wrapper = document.createElement("div");
  wrapper.className = "field-stack";

  (item.options || []).forEach((option) => {
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

  (item.options || []).forEach((option) => {
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
    getResponse: () => {
      return Array.from(wrapper.querySelectorAll('input[type="checkbox"]:checked')).map((input) => input.value);
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
    getResponse: () => {
      return Array.from(wrapper.querySelectorAll("select[data-order-index]"))
        .sort((a, b) => Number(a.getAttribute("data-order-index")) - Number(b.getAttribute("data-order-index")))
        .map((select) => select.value);
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

export function createTrainingItemCard({ item, onValidate, onReset }) {
  const type = normalizeType(item.type || "single-choice");
  const card = document.createElement("article");
  card.className = "card training-item-card";

  const title = document.createElement("h4");
  title.textContent = item.prompt;

  const badge = document.createElement("p");
  badge.className = "muted";
  badge.textContent = `Type: ${type} · ${item.points || 1} point`;

  let renderer;
  if (type === "single-choice") {
    renderer = createSingleChoiceFields(item);
  } else if (type === "multiple-choice") {
    renderer = createMultipleChoiceFields(item);
  } else if (type === "matching") {
    renderer = createMatchingFields(item);
  } else if (type === "ordering") {
    renderer = createOrderingFields(item);
  } else if (type === "text-input") {
    renderer = createTextInputFields(item);
  } else {
    throw new Error(`Unsupported training item type in renderer: ${item.type}`);
  }

  const feedback = document.createElement("p");
  feedback.className = "feedback-inline muted";
  feedback.textContent = "En attente de validation.";

  const answer = document.createElement("p");
  answer.className = "muted answer-reveal";
  answer.hidden = true;

  const actions = document.createElement("div");
  actions.className = "actions-row";

  const validateButton = document.createElement("button");
  validateButton.type = "button";
  validateButton.className = "btn btn-primary";
  validateButton.textContent = "Valider l'item";

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

  // Machine d'état de tentative pour empêcher la validation après consultation du corrigé.
  let attemptState = ATTEMPT_STATE.PRISTINE;

  function applyState() {
    const isLocked = attemptState !== ATTEMPT_STATE.PRISTINE;
    renderer.setDisabled(isLocked);

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
      answer.textContent = `Correction : ${formatExpected(item.expected)}`;
    }
  }

  validateButton.addEventListener("click", () => {
    if (attemptState !== ATTEMPT_STATE.PRISTINE) {
      return;
    }

    const result = onValidate(renderer.getResponse());
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
    renderer.resetResponse();
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
  card.append(title, badge, renderer.node, actions, feedback, answer);
  return card;
}
