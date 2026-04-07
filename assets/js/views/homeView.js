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
    referentielLabel: "Référentiel",
    referentielUrl: "assets/pdf/referentiel-5e.pdf",
    outilsLabel: "Outils",
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
      referentielLabel: "Référentiel",
    referentielUrl: "assets/pdf/referentiel-4e.pdf",
    outilsLabel: "Outils",
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
    referentielLabel: "Référentiel",
    referentielUrl: "assets/pdf/referentiel-3e.pdf",
    outilsLabel: "Outils",
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

function createTeacherAuthCard({ onLoginSubmit, onRegisterSubmit }) {
  let mode = "login";
  const card = document.createElement("article");
  card.className = "card home-login-card";
  card.innerHTML = `
    <h3>Connexion enseignant</h3>
    <form class="stack" data-role="form"></form>
    <p class="muted" data-role="message"></p>
  `;

  const form = card.querySelector('[data-role="form"]');
  const messageNode = card.querySelector('[data-role="message"]');

  function renderForm() {
    if (mode === "register") {
      form.innerHTML = `
        <label>Nom affiché
          <input required name="displayName" autocomplete="name" />
        </label>
        <label>Teacher ID
          <input required name="teacherId" autocomplete="username" />
        </label>
        <label>Mot de passe
          <input required name="password" type="password" autocomplete="new-password" />
        </label>
        <label>Confirmation mot de passe
          <input required name="passwordConfirm" type="password" autocomplete="new-password" />
        </label>
        <label>Code d’activation
          <input required name="activationCode" />
        </label>
        <div class="home-login-card__actions">
          <button class="btn btn-secondary" type="button" data-action="toggle">Retour connexion</button>
          <button class="btn btn-primary" type="submit">Créer un compte</button>
        </div>
      `;
      return;
    }

    form.innerHTML = `
      <label>Teacher ID
        <input required name="loginId" autocomplete="username" />
      </label>
      <label>Mot de passe
        <input required name="secret" type='password' autocomplete='current-password' />
      </label>
      <div class="home-login-card__actions">
        <button class="btn btn-secondary" type="button" data-action="toggle">Créer un compte</button>
        <button class="btn btn-primary" type="submit">Se connecter</button>
      </div>
    `;
  }

  form.addEventListener("click", (event) => {
    const target = event.target.closest('[data-action="toggle"]');
    if (!target) return;
    mode = mode === "login" ? "register" : "login";
    messageNode.textContent = "";
    renderForm();
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const fd = new FormData(form);

    if (mode === "register") {
      const result = await onRegisterSubmit({
        displayName: String(fd.get("displayName") || "").trim(),
        teacherId: String(fd.get("teacherId") || "").trim(),
        password: String(fd.get("password") || "").trim(),
        passwordConfirm: String(fd.get("passwordConfirm") || "").trim(),
        activationCode: String(fd.get("activationCode") || "").trim(),
      });
      messageNode.textContent = result?.message || "";
      return;
    }

    const loginId = String(fd.get("loginId") || "").trim();
    const secret = String(fd.get("secret") || "").trim();
    const result = await onLoginSubmit({ loginId, secret });
    messageNode.textContent = result?.message || "";
  });

  renderForm();
  card.__setMode = (nextMode) => {
    if (!["login", "register"].includes(nextMode)) return;
    mode = nextMode;
    messageNode.textContent = "";
    renderForm();
  };
  return card;
}

function createStudentAuthCard({ onLoginSubmit, onRegisterSubmit }) {
  let mode = "login";
  const card = document.createElement("article");
  card.className = "card home-login-card";
  card.innerHTML = `
    <h3>Connexion élève</h3>
    <form class="stack" data-role="form"></form>
    <p class="muted" data-role="message"></p>
  `;

  const form = card.querySelector('[data-role="form"]');
  const messageNode = card.querySelector('[data-role="message"]');

  function renderForm() {
    if (mode === "register") {
      form.innerHTML = `
        <label>Nom affiché
          <input required name="displayName" autocomplete="name" />
        </label>
        <label>Student ID
          <input required name="studentId" autocomplete="username" />
        </label>
        <label>Code classe
          <input required name="classCode" />
        </label>
        <label>PIN (6 chiffres)
          <input required name="pin" inputmode="numeric" pattern="\\d{6}" maxlength="6" />
        </label>
        <label>Confirmation PIN
          <input required name="pinConfirm" inputmode="numeric" pattern="\\d{6}" maxlength="6" />
        </label>
        <div class="home-login-card__actions">
          <button class="btn btn-secondary" type="button" data-action="toggle">Retour connexion</button>
          <button class="btn btn-primary" type="submit">Créer un compte</button>
        </div>
      `;
      return;
    }

    form.innerHTML = `
      <label>Student ID
        <input required name="studentId" autocomplete="username" />
      </label>
      <label>PIN (6 chiffres)
        <input required name="pin" inputmode="numeric" pattern="\\d{6}" maxlength="6" />
      </label>
      <div class="home-login-card__actions">
        <button class="btn btn-secondary" type="button" data-action="toggle">Créer un compte</button>
        <button class="btn btn-primary" type="submit">Se connecter</button>
      </div>
    `;
  }

  form.addEventListener("click", (event) => {
    const target = event.target.closest('[data-action="toggle"]');
    if (!target) return;
    mode = mode === "login" ? "register" : "login";
    messageNode.textContent = "";
    renderForm();
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const fd = new FormData(form);

    if (mode === "register") {
      const result = await onRegisterSubmit({
        displayName: String(fd.get("displayName") || "").trim(),
        studentId: String(fd.get("studentId") || "").trim(),
        classCode: String(fd.get("classCode") || "").trim(),
        pin: String(fd.get("pin") || "").trim(),
        pinConfirm: String(fd.get("pinConfirm") || "").trim(),
      });
      messageNode.textContent = result?.message || "";
      return;
    }

    const result = await onLoginSubmit({
      studentId: String(fd.get("studentId") || "").trim(),
      pin: String(fd.get("pin") || "").trim(),
    });
    messageNode.textContent = result?.message || "";
  });

  renderForm();
  card.__setMode = (nextMode) => {
    if (!["login", "register"].includes(nextMode)) return;
    mode = nextMode;
    messageNode.textContent = "";
    renderForm();
  };
  return card;
}

function createAuthPortalCard({ title, description, onOpen }) {
  const card = document.createElement("article");
  card.className = "card home-auth-entry";
  card.innerHTML = `
    <h3>${title}</h3>
    <p class="muted">${description}</p>
    <button type="button" class="btn btn-primary">Ouvrir</button>
  `;
  card.addEventListener("click", onOpen);
  card.querySelector("button").addEventListener("click", onOpen);
  return card;
}

function createAuthModal({ onClose }) {
  const overlay = document.createElement("section");
  overlay.className = "auth-modal-overlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", "Espace de connexion");
  overlay.innerHTML = `
    <div class="auth-modal-backdrop" data-action="close"></div>
    <article class="auth-modal card stack">
      <header class="auth-modal__header">
        <h3 data-role="title">Espace</h3>
        <button type="button" class="btn btn-link" data-action="close" aria-label="Fermer">✕</button>
      </header>
      <div class="auth-modal__switches">
        <button type="button" class="btn btn-secondary" data-action="register">Créer un compte</button>
        <button type="button" class="btn btn-secondary" data-action="login">Se connecter</button>
      </div>
      <div data-role="content"></div>
    </article>
  `;

  const titleNode = overlay.querySelector('[data-role="title"]');
  const contentNode = overlay.querySelector('[data-role="content"]');
  const registerBtn = overlay.querySelector('[data-action="register"]');
  const loginBtn = overlay.querySelector('[data-action="login"]');
  let currentSpace = null;
  let currentMode = null;
  let studentCard = null;
  let teacherCard = null;

  function setActiveSwitch(nextMode) {
    currentMode = nextMode;
    registerBtn.classList.toggle("active", nextMode === "register");
    loginBtn.classList.toggle("active", nextMode === "login");
  }

  function renderContent() {
    contentNode.innerHTML = "";
    if (!currentMode) return;
    if (currentSpace === "student") {
      if (!studentCard) return;
      studentCard.__setMode?.(currentMode);
      contentNode.appendChild(studentCard);
      return;
    }
    if (!teacherCard) return;
    teacherCard.__setMode?.(currentMode);
    contentNode.appendChild(teacherCard);
  }

  overlay.addEventListener("click", (event) => {
    const closeTrigger = event.target.closest('[data-action="close"]');
    if (!closeTrigger) return;
    onClose();
  });

  function onEscape(event) {
    if (event.key !== "Escape") return;
    onClose();
  }

  registerBtn.addEventListener("click", () => {
    setActiveSwitch("register");
    renderContent();
  });
  loginBtn.addEventListener("click", () => {
    setActiveSwitch("login");
    renderContent();
  });

  return {
    node: overlay,
    open({ space, studentAuthCard, teacherAuthCard }) {
      currentSpace = space;
      studentCard = studentAuthCard;
      teacherCard = teacherAuthCard;
      currentMode = null;
      titleNode.textContent = space === "student" ? "Espace élève" : "Espace enseignant";
      setActiveSwitch(null);
      renderContent();
      document.addEventListener("keydown", onEscape);
      window.setTimeout(() => {
        registerBtn.focus();
      }, 0);
    },
    close() {
      document.removeEventListener("keydown", onEscape);
    },
  };
}

export function renderHomeView({ levels, onOpenLevel, onOpenResults, onTeacherLogin, onTeacherRegister, onStudentLogin, onStudentRegister }) {
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
      Choisissez votre niveau puis entrez dans un parcours pensé comme un itinéraire continu : 3 périodes,
      une progression indépendante, des outils de cours et un fil narratif qui accompagne la langue.
    </p>

    <div class="home-hero__meta">
      <span class="meta-pill">3 niveaux collège</span>
      <span class="meta-pill">3 périodes par niveau</span>
      <span class="meta-pill">39 à 45 leçons progressives</span>
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

  const homeAuthPortals = document.createElement("section");
  homeAuthPortals.className = "home-auth-portals";

  const studentLoginCard = createStudentAuthCard({
    onLoginSubmit: ({ studentId, pin }) => onStudentLogin({ studentId, pin }),
    onRegisterSubmit: ({ displayName, studentId, classCode, pin, pinConfirm }) =>
      onStudentRegister({ displayName, studentId, classCode, pin, pinConfirm }),
  });

  const teacherLoginCard = createTeacherAuthCard({
    onLoginSubmit: ({ loginId, secret }) => onTeacherLogin({ teacherId: loginId, password: secret }),
    onRegisterSubmit: ({ displayName, teacherId, password, passwordConfirm, activationCode }) =>
      onTeacherRegister({ displayName, teacherId, password, passwordConfirm, activationCode }),
  });

  let authModal = null;
  function closeModal() {
    if (!authModal) return;
    authModal.close();
    authModal.node.remove();
    authModal = null;
  }
  function openModal(space) {
    closeModal();
    authModal = createAuthModal({ onClose: closeModal });
    section.appendChild(authModal.node);
    authModal.open({
      space,
      studentAuthCard: studentLoginCard,
      teacherAuthCard: teacherLoginCard,
    });
  }

  const studentPortal = createAuthPortalCard({
    title: "Espace élève",
    description: "Rejoins ta classe, reprends tes leçons et suis ta progression.",
    onOpen: () => openModal("student"),
  });

  const teacherPortal = createAuthPortalCard({
    title: "Espace enseignant",
    description: "Gère tes classes, les comptes et la progression des élèves.",
    onOpen: () => openModal("teacher"),
  });

  homeAuthPortals.append(studentPortal, teacherPortal);

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

  <div class="level-card__tools" aria-label="Ressources du niveau ${level.id}">
    <a
      class="btn btn-secondary level-card__tool"
      href="${meta.referentielUrl}"
      target="_blank"
      rel="noopener"
      download
    >
      <span class="level-card__tool-emoji" aria-hidden="true">📘</span>
      <span>${meta.referentielLabel}</span>
    </a>

    <a
      class="btn btn-secondary level-card__tool"
      href="${meta.outilsUrl}"
      target="_blank"
      rel="noopener"
      download
    >
      <span class="level-card__tool-emoji" aria-hidden="true">🛠️</span>
      <span>${meta.outilsLabel}</span>
    </a>
  </div>

  <button
    type="button"
    class="btn btn-primary level-card__cta"
    data-action="open-dashboard"
  >
    <span class="level-card__cta-emoji" aria-hidden="true">🛡️</span>
    <span>Entrer dans le parcours</span>
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
  section.append(intro, homeAuthPortals, cards, actions);

  return section;
}
