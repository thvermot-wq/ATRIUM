function getErrorDetails(error) {
  if (!error) return "Erreur inconnue.";
  if (typeof error === "string") return error;
  if (error instanceof Error) return error.message;
  return String(error);
}

function renderBootError(message) {
  const root = document.getElementById("app");
  if (!root) return;

  root.innerHTML = `
    <section class="card boot-error" role="alert" aria-live="assertive">
      <h2>ATRIUM — erreur de chargement</h2>
      <p>Impossible de démarrer l'application.</p>
      <p class="muted">${message}</p>
      <p class="muted">Vérifiez le chargement des fichiers JavaScript/CSS puis rechargez la page.</p>
    </section>
  `;
}

window.addEventListener("error", (event) => {
  renderBootError(getErrorDetails(event.error || event.message));
});

window.addEventListener("unhandledrejection", (event) => {
  renderBootError(getErrorDetails(event.reason));
});

import("./app.js")
  .then((module) => module.boot())
  .catch((error) => {
    renderBootError(getErrorDetails(error));
  });
