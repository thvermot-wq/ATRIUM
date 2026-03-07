const DEFAULT_ROUTE = "#/";

function parseHashRoute() {
  const rawHash = window.location.hash || DEFAULT_ROUTE;
  const normalized = rawHash.startsWith("#/") ? rawHash : DEFAULT_ROUTE;
  const path = normalized.slice(1); // retire '#'

  if (path === "/") {
    return { name: "home", path, params: {} };
  }

  if (path === "/dashboard") {
    return { name: "dashboard", path, params: {} };
  }

  if (path === "/results") {
    return { name: "results", path, params: {} };
  }

  if (path.startsWith("/lesson/")) {
    const lessonId = path.replace("/lesson/", "");
    return { name: "lesson", path, params: { lessonId } };
  }

  return { name: "notFound", path, params: {} };
}

export function initRouter({ onRouteChange }) {
  function handleRouteChange() {
    onRouteChange(parseHashRoute());
  }

  window.addEventListener("hashchange", handleRouteChange);

  if (!window.location.hash) {
    window.location.hash = DEFAULT_ROUTE;
  }

  handleRouteChange();

  return {
    navigate(to) {
      window.location.hash = to;
    },
    destroy() {
      window.removeEventListener("hashchange", handleRouteChange);
    },
  };
}
