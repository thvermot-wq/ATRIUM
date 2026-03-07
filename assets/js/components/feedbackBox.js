export function createFeedbackBox({ title = "Information", text }) {
  const box = document.createElement("aside");
  box.className = "card feedback-box";
  box.innerHTML = `
    <h3>${title}</h3>
    <p>${text}</p>
  `;
  return box;
}
