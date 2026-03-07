import { LESSONS_SPEC } from "./lessons.js";
import { getScoringContract } from "./scoring.js";
import { initRouter } from "./router.js";
import { renderApp } from "./ui.js";

function boot() {
  const root = document.getElementById("app");
  if (!root) return;

  const router = initRouter();
  const scoring = getScoringContract();

  // Exposition temporaire pour debug initial (phase d'initialisation seulement).
  window.ATRIUM_BOOT = { router, scoring, LESSONS_SPEC };

  renderApp(root);
}

boot();
