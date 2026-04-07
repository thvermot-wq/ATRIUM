import { levels } from "./lessons.js";
import { renderHomeView } from "./views/homeView.js";
import { renderDashboardView } from "./views/dashboardView.js";
import { renderLessonView } from "./views/lessonView.js";
import { renderResultsView } from "./views/resultsView.js";
import { renderLoginView } from "./views/loginView.js";
import { renderTeacherDashboardView } from "./teacher/teacherDashboardView.js";

let backToTopInstalled = false;
let backToTopButton = null;
let backToTopScrollListener = null;

function getScrollContainer() {
  const candidates = [
    document.getElementById("app"),
    document.getElementById("view-root"),
    document.scrollingElement,
    document.documentElement,
    document.body,
  ].filter(Boolean);

  for (const candidate of candidates) {
    if (!(candidate instanceof HTMLElement)) continue;

    const style = window.getComputedStyle(candidate);
    const overflowY = style.overflowY;
    const isScrollableY = ["auto", "scroll", "overlay"].includes(overflowY);
    if (isScrollableY && candidate.scrollHeight > candidate.clientHeight + 8) {
      return candidate;
    }
  }

  return document.scrollingElement || document.documentElement;
}

function getCurrentScrollTop() {
  const container = getScrollContainer();
  if (container instanceof HTMLElement) return container.scrollTop;
  return window.scrollY || 0;
}

function scrollToTopImmediate() {
  const container = getScrollContainer();
  if (container instanceof HTMLElement && typeof container.scrollTo === "function") {
    container.scrollTo({ top: 0, left: 0, behavior: "auto" });
    return;
  }

  window.scrollTo(0, 0);
}

function installBackToTopControl() {
  if (backToTopInstalled) return;

  backToTopButton = document.createElement("button");
  backToTopButton.type = "button";
  backToTopButton.className = "btn btn-primary back-to-top-btn";
  backToTopButton.setAttribute("aria-label", "Revenir en haut de la page");
  backToTopButton.textContent = "↑ Haut";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  backToTopButton.addEventListener("click", () => {
    const container = getScrollContainer();
    const behavior = prefersReducedMotion ? "auto" : "smooth";

    if (container instanceof HTMLElement && typeof container.scrollTo === "function") {
      container.scrollTo({ top: 0, left: 0, behavior });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior });
  });

  backToTopScrollListener = () => {
    const show = getCurrentScrollTop() > 280;
    backToTopButton.classList.toggle("is-visible", show);
    backToTopButton.setAttribute("aria-hidden", show ? "false" : "true");
    backToTopButton.tabIndex = show ? 0 : -1;
  };

  window.addEventListener("scroll", backToTopScrollListener, { passive: true });
  document.body.appendChild(backToTopButton);
  backToTopScrollListener();

  backToTopInstalled = true;
}

function createTopNav({ navigate, currentRouteName, levelId }) {
  const nav = document.createElement("nav");
  nav.className = "top-nav";
  nav.setAttribute("aria-label", "Navigation principale");

  const levelPath = `#/${levelId || "5e"}`;
  const links = [
    { label: "Accueil", path: "#/", name: "home" },
    { label: "Dashboard", path: levelPath, name: "dashboard" },
    { label: "Résultats", path: `${levelPath}/results`, name: "results" },
    { label: "Login élève", path: "#/login/student", name: "login" },
    { label: "Login enseignant", path: "#/login/teacher", name: "login" },
    { label: "Vue enseignant", path: "#/teacher-dashboard", name: "teacherDashboard" },
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

  header.innerHTML = `
    <div class="app-header__brand">
      <h1>ATRIUM</h1>
      <p>Application statique LCA · architecture progressive</p>
    </div>
  `;

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

export function renderApp(rootElement, { router, route, level, progress, onSaveLessonScore, authContext, onTeacherLogin, onStudentLogin, onStudentRegister, teacherDashboardData, onTeacherPinReset, onRecordLessonOpen, onRecordLessonSubmission }) {
  installBackToTopControl();
  scrollToTopImmediate();

  rootElement.innerHTML = "";
  rootElement.dataset.route = route.name;

  const { fragment, main } = createAppLayout({
    navigate: router.navigate,
    currentRouteName: route.name,
    levelId: level?.id,
  });
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
    onRecordLessonOpen,
    onRecordLessonSubmission,
  };

  let viewNode;

  if (route.name === "home") {
    viewNode = renderHomeView({
      ...callbacks,
      levels,
      onTeacherLogin,
      onStudentLogin,
      onStudentRegister,
    });
  } else if (route.name === "dashboard") {
    viewNode = renderDashboardView({ ...callbacks, level, progress });
  } else if (route.name === "lesson") {
    viewNode = renderLessonView({
      ...callbacks,
      level,
      lessonId: route.params.lessonId,
      progress,
    });
  } else if (route.name === "login") {
    viewNode = renderLoginView({
      role: route.params?.role || "student",
      onBackHome: callbacks.onOpenHome,
      onSubmit: ({ loginId, secret }) => {
        if ((route.params?.role || "student") === "teacher") {
          return onTeacherLogin({ teacherId: loginId, password: secret });
        }
        return onStudentLogin({ studentId: loginId, pin: secret });
      },
    });
  } else if (route.name === "teacherDashboard") {
    viewNode = renderTeacherDashboardView({
      classes: teacherDashboardData?.classes || [],
      students: teacherDashboardData?.students || [],
      progressRows: teacherDashboardData?.progressRows || [],
      onBackHome: callbacks.onOpenHome,
      onResetPin: onTeacherPinReset,
    });
  } else if (route.name === "results") {
    viewNode = renderResultsView({ ...callbacks, level, progress });
  } else {
    viewNode = renderNotFoundView(callbacks);
  }

  main.appendChild(viewNode);
  main.focus();
}
