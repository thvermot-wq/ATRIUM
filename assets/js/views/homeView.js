export function renderHomeView({ levels, onOpenLevel, onOpenResults }) {
  const section = document.createElement("section");
  section.className = "stack";

  const intro = document.createElement("article");
  intro.className = "card";
  intro.innerHTML = `
    <h2>Bienvenue dans ATRIUM</h2>
    <p>
      Choisissez votre niveau pour accéder au dashboard dédié. Chaque niveau conserve ses 3 périodes,
      ses 36 leçons et sa progression indépendante.
    </p>
  `;

  const cards = document.createElement("div");
  cards.className = "level-grid";

  levels.forEach((level) => {
    const card = document.createElement("article");
    card.className = "card level-card";
    card.innerHTML = `
      <h3>${level.label}</h3>
      <p><strong>${level.masteryTitle}</strong></p>
      <p class="muted">${level.description}</p>
      <p class="muted">Ambition : ${level.ambition}</p>
      <button type="button" class="btn btn-primary">Ouvrir le dashboard ${level.label}</button>
    `;

    card.querySelector("button").addEventListener("click", () => onOpenLevel(level.id));
    cards.appendChild(card);
  });

  const actions = document.createElement("div");
  actions.className = "actions-row";
  actions.innerHTML = `<button type="button" class="btn btn-secondary" data-action="results">Voir les résultats (niveau 5e)</button>`;
  actions.querySelector('[data-action="results"]').addEventListener("click", onOpenResults);

  section.append(intro, cards, actions);
  return section;
}
