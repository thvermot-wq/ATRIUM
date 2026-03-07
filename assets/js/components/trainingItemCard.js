function normalizeType(type = "") {
  return type === "mcq" ? "single-choice" : type;
}

function createSingleChoiceFields(item) {
  const wrapper = document.createElement("div");
  wrapper.className = "field-stack";

  (item.options || []).forEach((option) => {
    const label = document.createElement("label");
    label.className = "choice-line touch-choice";
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
  };
}

function createMultipleChoiceFields(item) {
  const wrapper = document.createElement("div");
  wrapper.className = "field-stack";

  (item.options || []).forEach((option) => {
    const label = document.createElement("label");
    label.className = "choice-line touch-choice";
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
  };
}

export function createTrainingItemCard({ item, index, onValidate }) {
  const type = normalizeType(item.type || "single-choice");
  const card = document.createElement("article");
  card.className = "card training-item-card";

  const title = document.createElement("h4");
  title.textContent = item.prompt;

  const badge = document.createElement("p");
  badge.className = "muted";
  badge.textContent = `Item ${index || "?"}/7 · type: ${type} · ${item.points || 1} point`;

  let renderer;
  if (type === "single-choice") {
    renderer = createSingleChoiceFields(item);
  } else if (type === "multiple-choice") {
    renderer = createMultipleChoiceFields(item);
  } else if (type === "matching") {
    renderer = createMatchingFields(item);
  } else if (type === "ordering") {
    renderer = createOrderingFields(item);
  } else {
    throw new Error(`Unsupported training item type in renderer: ${item.type}`);
  }

  const feedback = document.createElement("p");
  feedback.className = "feedback-inline muted";
  feedback.textContent = "En attente de validation.";

  const button = document.createElement("button");
  button.type = "button";
  button.className = "btn btn-primary";
  button.textContent = "Valider";

  button.addEventListener("click", () => {
    const result = onValidate(renderer.getResponse());
    feedback.textContent = result.isCorrect ? "✅ Correct" : "❌ Incorrect";
    feedback.className = `feedback-inline ${result.isCorrect ? "ok" : "ko"}`;
  });

  card.append(title, badge, renderer.node, button, feedback);
  return card;
}
