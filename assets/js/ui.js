import { renderHomeView } from "./views/homeView.js";

export function renderApp(rootElement) {
  rootElement.innerHTML = "";
  rootElement.appendChild(renderHomeView());
}
