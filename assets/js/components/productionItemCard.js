export function createProductionItemCard({ item, onEvaluate }) {
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

  const button = document.createElement("button");
  button.type = "button";
  button.className = "btn btn-primary";
  button.textContent = "Corriger cette production";

  button.addEventListener("click", () => {
    const result = onEvaluate(input.value);

    feedback.textContent = result.isCorrect ? "✅ Correct" : "❌ Incorrect";
    feedback.className = `feedback-inline ${result.isCorrect ? "ok" : "ko"}`;

    if (!result.isCorrect) {
      answer.hidden = false;
      answer.textContent = `Réponse attendue : ${result.expected}`;
    } else {
      answer.hidden = true;
      answer.textContent = "";
    }
  });

  card.append(title, hint, input, button, feedback, answer);
  return card;
}
