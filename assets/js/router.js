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

  if (path.startsWith("/diploma/")) {
    const periodId = path.replace("/diploma/", "");
    return { name: "diploma", path, params: { periodId } };
  }

  return { name: "notFound", path, params: {} };
}

function resetScrollTop() {
  const appRoot = document.getElementById("app");
  const targets = [window, document.documentElement, document.body, appRoot, appRoot?.querySelector?.(".app-main")].filter(Boolean);

  targets.forEach((target) => {
    if (target === window) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    if (typeof target.scrollTo === "function") {
      target.scrollTo({ top: 0, left: 0, behavior: "auto" });
    } else if ("scrollTop" in target) {
      target.scrollTop = 0;
      target.scrollLeft = 0;
    }
  });
}

export function initRouter({ onRouteChange }) {
  function handleRouteChange() {
    resetScrollTop();
    onRouteChange(parseHashRoute());
    requestAnimationFrame(resetScrollTop);
    window.setTimeout(resetScrollTop, 0);
  }

  function start() {
    window.addEventListener("hashchange", handleRouteChange);

    if (!window.location.hash) {
      window.location.hash = DEFAULT_ROUTE;
    }

    handleRouteChange();
  }

  function navigate(to) {
    window.location.hash = to;
  }

  function destroy() {
    window.removeEventListener("hashchange", handleRouteChange);
  }

  return {
    start,
    navigate,
    destroy,
  };
}
