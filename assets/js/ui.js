import { renderHomeView } from "./views/homeView.js";
import { renderDashboardView } from "./views/dashboardView.js";
import { renderLessonView } from "./views/lessonView.js";
import { renderResultsView } from "./views/resultsView.js";

function createTopNav({ navigate, currentRouteName }) {
  const nav = document.createElement("nav");
  nav.className = "top-nav";

  const links = [
    { label: "Accueil", path: "#/", name: "home" },
    { label: "Dashboard", path: "#/dashboard", name: "dashboard" },
    { label: "Résultats", path: "#/results", name: "results" },
  ];

  links.forEach((link) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `btn btn-link ${currentRouteName === link.name ? "active" : ""}`;
    button.textContent = link.label;
    button.addEventListener("click", () => navigate(link.path));
    nav.appendChild(button);
  });

  return nav;
}

function createAppLayout({ navigate, currentRouteName }) {
  const fragment = document.createDocumentFragment();

  const header = document.createElement("header");
  header.className = "shell app-header";
  header.innerHTML = `
    <h1>ATRIUM</h1>
    <p class="muted">Application statique LCA · architecture progressive</p>
  `;

  const nav = createTopNav({ navigate, currentRouteName });

  const main = document.createElement("main");
  main.id = "view-root";
  main.className = "shell";
  main.setAttribute("aria-live", "polite");

  fragment.append(header, nav, main);
  return { fragment, main };
}

function renderNotFoundView({ onOpenHome }) {
  const section = document.createElement("section");
  section.className = "card";
  section.innerHTML = `
    <h2>Page introuvable</h2>
    <p>La route demandée n'existe pas.</p>
    <button type="button" class="btn btn-primary">Retour accueil</button>
  `;
  section.querySelector("button").addEventListener("click", onOpenHome);
  return section;
}

export function renderApp(rootElement, { router, route }) {
  rootElement.innerHTML = "";

  const { fragment, main } = createAppLayout({ navigate: router.navigate, currentRouteName: route.name });
  rootElement.appendChild(fragment);

  const callbacks = {
    onOpenDashboard: () => router.navigate("#/dashboard"),
    onOpenResults: () => router.navigate("#/results"),
    onOpenLesson: (lessonId) => router.navigate(`#/lesson/${lessonId}`),
    onBackDashboard: () => router.navigate("#/dashboard"),
    onOpenHome: () => router.navigate("#/"),
  };

  let viewNode;

  if (route.name === "home") {
    viewNode = renderHomeView(callbacks);
  } else if (route.name === "dashboard") {
    viewNode = renderDashboardView(callbacks);
  } else if (route.name === "lesson") {
    viewNode = renderLessonView({ ...callbacks, lessonId: route.params.lessonId });
  } else if (route.name === "results") {
    viewNode = renderResultsView(callbacks);
  } else {
    viewNode = renderNotFoundView(callbacks);
  }

  main.appendChild(viewNode);
}
