import { getLastVisitedLesson, buildLessonHash } from "../storage.js";

const HOME_LEVEL_META = {
  "5e": {
    dashboardLabel: "🏛️ LCA 5e",
    latinGrade: "🌿 Initiatus",
    euroclassica: "Vestibulum (niveau 1)",
    cecrl: "pré-A1 → A1",
    summary:
      "Acclimatation à la langue, premiers automatismes, premières lectures guidées.",
    ambience:
      "On entre dans Subure par les portes du quotidien : saluer, repérer, lire une piste simple, comprendre qui agit et où l’action se joue.",
    referentielLabel: "📘 Référentiel",
    referentielUrl: "assets/pdf/referentiel-5e.pdf",
    outilsLabel: "🛠️ Outils",
    outilsUrl: "assets/pdf/outils-5e.pdf",
  },
  "4e": {
    dashboardLabel: "🏛️ LCA 4e",
    latinGrade: "🧭 Explorator",
    euroclassica: "Vestibulum acquis / pré-Ianua",
    cecrl: "A1 consolidé",
    summary:
      "Consolidation morphologique et syntaxique, lecture suivie plus sûre, thème guidé.",
    ambience:
      "Le décor s’élargit : le latin devient plus structuré, les textes s’allongent, et les liens entre langue, cité, politique et récit deviennent plus clairs.",
      referentielLabel: "📘 Référentiel",
    referentielUrl: "assets/pdf/referentiel-4e.pdf",
    outilsLabel: "🛠️ Outils",
    outilsUrl: "assets/pdf/outils-4e.pdf",
  },
  "3e": {
    dashboardLabel: "🏛️ LCA 3e",
    latinGrade: "🦉 Eruditus",
    euroclassica: "Ianua amorcé (niveau 2)",
    cecrl: "A1+ → début A2",
    summary:
      "Lecture, version guidée, thème simple, liens plus autonomes entre langue et civilisation.",
    ambience:
      "On vise une lecture plus sûre et un regard plus vaste : texte, culture, héritage, et réemploi des notions se répondent à hauteur de fin de cycle.",
    referentielLabel: "📘 Référentiel",
    referentielUrl: "assets/pdf/referentiel-3e.pdf",
    outilsLabel: "🛠️ Outils",
    outilsUrl: "assets/pdf/outils-3e.pdf",
  },
};

function getLevelMeta(level) {
  return HOME_LEVEL_META[level.id] || {
    dashboardLabel: `LCA ${level.classLabel || level.id || ""}`.trim(),
    latinGrade: level.title || "Niveau",
    euroclassica: "Repère à définir",
    cecrl: "Repère à définir",
    summary: level.description || "",
    ambience: level.ambition || "",
    referentielLabel: "Référentiel",
    referentielUrl: `assets/pdf/referentiel-${level.id}.pdf`,
    outilsLabel: "Outils",
    outilsUrl: `assets/pdf/outils-${level.id}.pdf`,
  };
}

function createMetric(label, value) {
  return `
    <div class="level-metric">
      <span class="level-metric__label">${label}</span>
      <span class="level-metric__value">${value}</span>
    </div>
  `;
}

function createResumeLabel(target, levels) {
  const level = levels.find((entry) => entry.id === target.levelId);
  const levelLabel = level?.label || target.levelId || "5e";
  const lessonTitle = target.lessonTitle || target.lessonId;
  return `${levelLabel} · ${lessonTitle}`;
}

export function renderHomeView({ levels, onOpenLevel, onOpenResults }) {
  const section = document.createElement("section");
  section.className = "stack home-view";

  const resumeTarget = getLastVisitedLesson();

  const intro = document.createElement("article");
  intro.className = "card home-hero";
    intro.innerHTML = `
    <p class="home-hero__eyebrow">Plateforme de langues et cultures de l’Antiquité</p>

    <h1 class="home-hero__brand">
      ATRIUM
      <span>Langues anciennes</span>
    </h1>

    <p class="home-hero__headline">
      Un parcours unique du bain de langue à la lecture guidée.
    </p>

    <p class="home-hero__lead">
      Choisissez votre niveau puis entrez dans un dashboard pensé comme un itinéraire continu : 3 périodes,
      36 leçons, une progression indépendante, des outils de cours et un fil narratif qui accompagne la langue.
    </p>

    <div class="home-hero__meta">
      <span class="meta-pill">3 niveaux collège</span>
      <span class="meta-pill">3 périodes par niveau</span>
      <span class="meta-pill">36 leçons progressives</span>
      <span class="meta-pill">Repères CECRL et Euroclassica</span>
    </div>

    <div class="home-hero__actions"></div>
  `;

  const heroActions = intro.querySelector(".home-hero__actions");

  if (resumeTarget?.lessonId) {
    const resumeButton = document.createElement("button");
    resumeButton.type = "button";
    resumeButton.className = "btn btn-primary";
    resumeButton.textContent = `Reprendre · ${createResumeLabel(resumeTarget, levels)}`;
    resumeButton.addEventListener("click", () => {
      window.location.hash = resumeTarget.path || buildLessonHash(resumeTarget);
    });
    heroActions.appendChild(resumeButton);
  }

  const cards = document.createElement("div");
  cards.className = "level-grid";

levels.forEach((level) => {
  const meta = getLevelMeta(level);
  const card = document.createElement("article");
  card.className = "card level-card";
  card.dataset.level = level.id;

  const description = level.description || meta.summary || "";
  const ambition = level.ambition || "";

  card.innerHTML = `
    <p class="eyebrow">${meta.dashboardLabel}</p>
    <h3>${meta.latinGrade}</h3>

    <p>${meta.summary || description}</p>
    <p class="muted">${meta.ambience || ambition || description}</p>

    <div class="metrics">
      ${createMetric("Euroclassica", meta.euroclassica)}
      ${createMetric("CECRL adapté", meta.cecrl)}
    </div>

    <div class="actions-row">
      <a
        class="btn btn-secondary"
        href="${meta.referentielUrl}"
        target="_blank"
        rel="noopener"
        download
      >
        ${meta.referentielLabel}
      </a>

      <a
        class="btn btn-secondary"
        href="${meta.outilsUrl}"
        target="_blank"
        rel="noopener"
        download
      >
        ${meta.outilsLabel}
      </a>
    </div>

    <button type="button" class="btn btn-primary" data-action="open-dashboard">
      🚩 Ouvrir le dashboard
    </button>
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
  resultsButton.className = "btn btn-secondary";
  resultsButton.dataset.action = "results";
  resultsButton.textContent = "Voir les résultats (niveau 5e)";
  resultsButton.addEventListener("click", onOpenResults);

  actions.appendChild(resultsButton);
  section.append(intro, cards, actions);

  return section;
}
