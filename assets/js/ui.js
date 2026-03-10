import { levels } from "./lessons.js";
import { renderHomeView } from "./views/homeView.js";
import { renderDashboardView } from "./views/dashboardView.js";
import { renderLessonView } from "./views/lessonView.js";
import { renderResultsView } from "./views/resultsView.js";
import { getThemeState, toggleTheme } from "./theme.js";

function createTopNav({ navigate, currentRouteName, levelId }) {
  const nav = document.createElement("nav");
  nav.className = "top-nav";
  nav.setAttribute("aria-label", "Navigation principale");

  const levelPath = `#/${levelId || "5e"}`;
  const links = [
    { label: "Accueil", path: "#/", name: "home" },
    { label: "Dashboard", path: levelPath, name: "dashboard" },
    { label: "Résultats", path: `${levelPath}/results`, name: "results" },
  ];

  links.forEach((link) => {
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("aria-current", currentRouteName === link.name ? "page" : "false");
    button.className = `btn btn-link ${currentRouteName === link.name ? "active" : ""}`;
    button.textContent = link.label;
    button.addEventListener("click", () => navigate(link.path));
    nav.appendChild(button);
  });

  return nav;
}

function createAppLayout({ navigate, currentRouteName, levelId }) {
  const fragment = document.createDocumentFragment();

  const header = document.createElement("header");
  header.className = "shell app-header";

  const { theme } = getThemeState();
  const isDark = theme === "dark";

  header.innerHTML = `
    <div class="header-row">
      <div>
        <h1>ATRIUM</h1>
        <p class="muted">Application statique LCA · architecture progressive</p>
      </div>
      <button type="button" class="btn btn-theme-toggle" aria-pressed="${isDark}" aria-label="Basculer le thème">
        ${isDark ? "🌙 Mode sombre" : "☀️ Mode clair"}
      </button>
    </div>
  `;

  const themeButton = header.querySelector('.btn-theme-toggle');
  themeButton.addEventListener('click', () => {
    const nextTheme = toggleTheme();
    const dark = nextTheme === 'dark';
    themeButton.setAttribute('aria-pressed', String(dark));
    themeButton.textContent = dark ? '🌙 Mode sombre' : '☀️ Mode clair';
  });

  const nav = createTopNav({ navigate, currentRouteName, levelId });

  const main = document.createElement("main");
  main.id = "view-root";
  main.className = "shell";
  main.tabIndex = -1;
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

export function renderApp(rootElement, { router, route, level, progress, onSaveLessonScore }) {
  rootElement.innerHTML = "";

  const { fragment, main } = createAppLayout({ navigate: router.navigate, currentRouteName: route.name, levelId: level?.id });
  rootElement.appendChild(fragment);

  const levelId = level?.id || "5e";

  const callbacks = {
    onOpenLevel: (nextLevelId) => router.navigate(`#/${nextLevelId}`),
    onOpenDashboard: () => router.navigate(`#/${levelId}`),
    onOpenResults: () => router.navigate(`#/${levelId}/results`),
    onOpenLesson: (lessonId) => router.navigate(`#/${levelId}/lesson/${lessonId}`),
    onBackDashboard: () => router.navigate(`#/${levelId}`),
    onOpenHome: () => router.navigate("#/"),
    onSaveLessonScore,
    onRestartLesson: () => {
      const lessonId = route?.params?.lessonId;
      if (!lessonId) return;
      router.navigate("#/");
      setTimeout(() => {
        router.navigate(`#/${levelId}/lesson/${lessonId}`);
      }, 0);
    },
  };

  let viewNode;

  if (route.name === "home") {
    viewNode = renderHomeView({ ...callbacks, levels });
  } else if (route.name === "dashboard") {
    viewNode = renderDashboardView({ ...callbacks, level, progress });
  } else if (route.name === "lesson") {
    viewNode = renderLessonView({ ...callbacks, level, lessonId: route.params.lessonId, progress });
  } else if (route.name === "results") {
    viewNode = renderResultsView({ ...callbacks, level, progress });
  } else {
    viewNode = renderNotFoundView(callbacks);
  }

  main.appendChild(viewNode);
  main.focus();
}
