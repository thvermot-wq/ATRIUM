export function renderHomeView({ onOpenDashboard, onOpenResults }) {
  const section = document.createElement("section");
  section.className = "card";
  section.innerHTML = `
    <h2>Bienvenue dans ATRIUM</h2>
    <p>
      Plateforme progressive de latin : 3 périodes, 15 leçons, entraînement (/7) + production guidée (/3),
      validation de période à 80%.
    </p>
    <div class="actions-row">
      <button type="button" class="btn btn-primary" data-action="dashboard">Accéder au tableau de bord</button>
      <button type="button" class="btn btn-secondary" data-action="results">Voir les résultats (placeholder)</button>
    </div>
  `;

  section.querySelector('[data-action="dashboard"]').addEventListener("click", onOpenDashboard);
  section.querySelector('[data-action="results"]').addEventListener("click", onOpenResults);

  return section;
}
