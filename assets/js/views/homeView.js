const HOME_LEVEL_META = {
  "5e": {
    dashboardLabel: "🏛️ LCA 5e",
    latinGrade: "🌿 Initiatus",
    euroclassica: "Vestibulum (niveau 1)",
    cecrl: "pré-A1 → A1",
    summary:
      "Acclimatation à la langue, premiers automatismes, premières lectures guidées.",
    referentielLabel: "Référentiel",
    referentielUrl: "assets/docs/referentiel-5e.pdf",
    outilsLabel: "Outils",
    outilsUrl: "assets/docs/outils-5e.pdf",
  },
  "4e": {
    dashboardLabel: "🏛️ LCA 4e",
    latinGrade: "🧭 Explorator",
    euroclassica: "Vestibulum acquis / pré-Ianua",
    cecrl: "A1 consolidé",
    summary:
      "Consolidation morphologique et syntaxique, lecture suivie plus sûre, thème guidé.",
    referentielLabel: "Référentiel",
    referentielUrl: "assets/docs/referentiel-4e.pdf",
    outilsLabel: "Outils",
    outilsUrl: "assets/docs/outils-4e.pdf",
  },
  "3e": {
    dashboardLabel: "🏛️ LCA 3e",
    latinGrade: "🦉 Eruditus",
    euroclassica: "Ianua amorcé (niveau 2)",
    cecrl: "A1+ → début A2",
    summary:
      "Lecture, version guidée, thème simple, liens plus autonomes entre langue et civilisation.",
    referentielLabel: "Référentiel",
    referentielUrl: "assets/docs/referentiel-3e.pdf",
    outilsLabel: "Outils",
    outilsUrl: "assets/docs/outils-3e.pdf",
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
      Chaque niveau propose aussi deux documents téléchargeables : un <strong>référentiel</strong>
      et des <strong>outils</strong>, à consulter en ligne ou hors ligne.
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
      referentielLabel: "Référentiel",
      referentielUrl: `assets/docs/referentiel-${level.id}.pdf`,
      outilsLabel: "Outils",
      outilsUrl: `assets/docs/outils-${level.id}.pdf`,
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
          href="${meta.referentielUrl}"
          download
          target="_blank"
          rel="noopener noreferrer"
          data-action="open-referentiel"
          aria-label="${meta.referentielLabel} ${level.classLabel || level.id || ""}"
          style="
            display:inline-flex;
            align-items:center;
            justify-content:center;
            gap:0.5rem;
            padding:0.85rem 1rem;
            border-radius:12px;
            border:1px solid rgba(0,0,0,0.12);
            background:#f7f3e8;
            color:#2f2a1f;
            font-weight:600;
            text-decoration:none;
            line-height:1.2;
            box-shadow:0 2px 6px rgba(0,0,0,0.08);
            cursor:pointer;
          "
        >
          <span aria-hidden="true">📘</span>
          <span>${meta.referentielLabel}</span>
        </a>

        <a
          href="${meta.outilsUrl}"
          download
          target="_blank"
          rel="noopener noreferrer"
          data-action="open-outils"
          aria-label="${meta.outilsLabel} ${level.classLabel || level.id || ""}"
          style="
            display:inline-flex;
            align-items:center;
            justify-content:center;
            gap:0.5rem;
            padding:0.85rem 1rem;
            border-radius:12px;
            border:1px solid rgba(0,0,0,0.12);
            background:#f7f3e8;
            color:#2f2a1f;
            font-weight:600;
            text-decoration:none;
            line-height:1.2;
            box-shadow:0 2px 6px rgba(0,0,0,0.08);
            cursor:pointer;
          "
        >
          <span aria-hidden="true">🧰</span>
          <span>${meta.outilsLabel}</span>
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
