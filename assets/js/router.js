const DEFAULT_ROUTE = "#/";
const LEVEL_IDS = new Set(["5e", "4e", "3e"]);

function isLevelId(value) {
  return LEVEL_IDS.has(value);
}

function scrollToTopImmediate() {
  if (typeof window === "undefined") return;

  const scrollingElement = document.scrollingElement || document.documentElement;
  if (scrollingElement && typeof scrollingElement.scrollTo === "function") {
    scrollingElement.scrollTo({ top: 0, left: 0, behavior: "auto" });
    return;
  }

  window.scrollTo(0, 0);
}

function parseHashRoute() {
  const rawHash = window.location.hash || DEFAULT_ROUTE;
  const normalized = rawHash.startsWith("#/") ? rawHash : DEFAULT_ROUTE;
  const path = normalized.slice(1);
  const segments = path.split("/").filter(Boolean);

  if (segments.length === 0) {
    return { name: "home", path, params: {} };
  }

  if (segments[0] === "results") {
    return { name: "results", path, params: {} };
  }

  if (segments[0] === "dashboard") {
    return { name: "dashboard", path, params: { levelId: "5e" } };
  }

  if (segments[0] === "teacher-dashboard") {
    return { name: "teacherDashboard", path, params: {} };
  }

  if (segments[0] === "login" && (segments[1] === "student" || segments[1] === "teacher")) {
    return { name: "login", path, params: { role: segments[1] } };
  }

  if (segments[0] === "lesson" && segments[1]) {
    return { name: "lesson", path, params: { levelId: "5e", lessonId: segments[1] } };
  }

  if (!isLevelId(segments[0])) {
    return { name: "notFound", path, params: {} };
  }

  const levelId = segments[0];

  if (segments.length === 1) {
    return { name: "dashboard", path, params: { levelId } };
  }

  if (segments.length === 2 && segments[1] === "results") {
    return { name: "results", path, params: { levelId } };
  }

  if (segments.length === 3 && segments[1] === "lesson") {
    return { name: "lesson", path, params: { levelId, lessonId: segments[2] } };
  }

  if (segments.length === 3 && /^p[1-3]$/.test(segments[1])) {
    return { name: "lesson", path, params: { levelId, periodId: segments[1], lessonId: segments[2] } };
  }

  return { name: "notFound", path, params: {} };
}

export function initRouter({ onRouteChange }) {
  function handleRouteChange() {
    scrollToTopImmediate();
    onRouteChange(parseHashRoute());
  }

  window.addEventListener("hashchange", handleRouteChange);

  if (!window.location.hash) {
    window.location.hash = DEFAULT_ROUTE;
  }

  handleRouteChange();

  return {
    navigate(to) {
      scrollToTopImmediate();
      window.location.hash = to;
    },
    destroy() {
      window.removeEventListener("hashchange", handleRouteChange);
    },
  };
}
