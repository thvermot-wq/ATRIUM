import { applyFrenchTypography } from "../typography.js";

export function createFeedbackBox({ title = "Information", text }) {
  const box = document.createElement("aside");
  box.className = "card feedback-box";
  box.innerHTML = `
    <h3>${applyFrenchTypography(title)}</h3>
    <p>${applyFrenchTypography(text)}</p>
  `;
  return box;
}
