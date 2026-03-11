const HOME_LEVEL_META = {
  "5e": {
    dashboardLabel: "🏛️ LCA 5e",
    latinGrade: "🌿 Initiatus",
    euroclassica: "Vestibulum (niveau 1)",
    cecrl: "pré-A1 → A1",
    summary:
      "Acclimatation à la langue, premiers automatismes, premières lectures guidées.",
    vademecumLabel: "Télécharger le vademecum 5e",
    vademecumUrl: "assets/docs/vademecum-5e.pdf",
  },
  "4e": {
    dashboardLabel: "🏛️ LCA 4e",
    latinGrade: "🧭 Explorator",
    euroclassica: "Vestibulum acquis / pré-Ianua",
    cecrl: "A1 consolidé",
    summary:
      "Consolidation morphologique et syntaxique, lecture suivie plus sûre, thème guidé.",
    vademecumLabel: "Télécharger le vademecum 4e",
    vademecumUrl: "assets/docs/vademecum-4e.pdf",
  },
  "3e": {
    dashboardLabel: "🏛️ LCA 3e",
    latinGrade: "🦉 Eruditus",
    euroclassica: "Ianua amorcé (niveau 2)",
    cecrl: "A1+ → début A2",
    summary:
      "Lecture, version guidée, thème simple, liens plus autonomes entre langue et civilisation.",
    vademecumLabel: "Télécharger le vademecum 3e",
    vademecumUrl: "assets/docs/vademecum-3e.pdf",
  },
};

export function renderHomeView({ levels, onOpenLevel, onOpenResults }) {
  const section = document.createElement("section");
  section.className = "stack";

  const intro = document.createElement("article");
  intro.className = "card";
  intro.innerHTML = `
    <h2>Bienvenue dans ATRIUM</h2>
    <p>
      Choisissez votre dashboard LCA. Chaque niveau conserve ses 3 périodes,
      ses 36 leçons et sa progression indépendante.
    </p>
    <p>
      <strong>Repère affiché :</strong> les niveaux CECRL ci-dessous sont des équivalences
      pédagogiques adaptées aux LCA.
    </p>
    <p>
      Chaque niveau propose aussi un <strong>vademecum synthétique téléchargeable</strong>
      pour réviser, imprimer ou consulter hors ligne.
    </p>
  `;

  const cards = document.createElement("div");
  cards.className = "level-grid";

  levels.forEach((level) => {
    const meta = HOME_LEVEL_META[level.id] || {
      dashboardLabel: `LCA ${level.classLabel || level.id || ""}`.trim(),
      latinGrade: level.title || "Niveau",
      euroclassica: "Repère à définir",
      cecrl: "Repère à définir",
      summary: level.description || "",
      vademecumLabel: `Télécharger le vademecum ${level.classLabel || level.id || ""}`.trim(),
      vademecumUrl: `assets/docs/vademecum-${level.id}.pdf`,
    };

    const card = document.createElement("article");
    card.className = "card level-card";

    const description = level.description || meta.summary || "";
    const ambition = level.ambition || "";
    const dashboardButtonLabel = `Ouvrir le dashboard ${meta.dashboardLabel}`;

    card.innerHTML = `
      <p><strong>${meta.dashboardLabel}</strong></p>
      <h3>${meta.latinGrade}</h3>
      <p>${meta.summary || description}</p>
      <p><strong>Ambition :</strong> ${ambition}</p>
      <p><strong>Euroclassica :</strong> ${meta.euroclassica}</p>
      <p><strong>CECRL adapté :</strong> ${meta.cecrl}</p>

      <div class="actions-row">
        <button type="button" class="btn btn-primary" data-action="open-dashboard">
          ${dashboardButtonLabel}
        </button>
        <a
          class="btn"
          href="${meta.vademecumUrl}"
          download
          target="_blank"
          rel="noopener noreferrer"
          data-action="open-vademecum"
        >
          📘 ${meta.vademecumLabel}
        </a>
      </div>
    `;

    card
      .querySelector('[data-action="open-dashboard"]')
      .addEventListener("click", () => {
        onOpenLevel(level.id);
      });

    cards.appendChild(card);
  });

  const actions = document.createElement("div");
  actions.className = "actions-row";

  const resultsButton = document.createElement("button");
  resultsButton.type = "button";
  resultsButton.className = "btn";
  resultsButton.dataset.action = "results";
  resultsButton.textContent = "Voir les résultats (niveau 5e)";
  resultsButton.addEventListener("click", onOpenResults);

  actions.appendChild(resultsButton);
  section.append(intro, cards, actions);

  return section;
}
