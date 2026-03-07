const STORAGE_KEY = "atrium-progress-v2";
const PERIOD_MAX_SCORE = 50;
const LESSONS_PER_PERIOD = 5;

const periods = [
  {
    id: 1,
    title: "Période 1 — Atrium Tiro",
    stageFr: "pré-A1 / A1- en production contrôlée",
    stageEn: "pre-A1 / A1- in controlled production",
  },
  {
    id: 2,
    title: "Période 2 — Atrium Discipulus",
    stageFr: "A1 solide en production contrôlée",
    stageEn: "solid A1 in controlled production",
  },
  {
    id: 3,
    title: "Période 3 — Atrium Scriba",
    stageFr: "A1+ / A2- en production contrôlée",
    stageEn: "A1+ / A2- in controlled production",
  },
];

const lessonBlueprints = [
  {
    periodId: 1,
    title: "Leçon 1 — Salutations",
    training: [
      q("Traduction de ‘salve’", ["bonjour", "adieu", "merci"], "bonjour"),
      q("Traduction de ‘vale’", ["bonjour", "au revoir", "pardon"], "au revoir"),
      q("Complète : amice, ___", ["salve", "vale", "amo"], "salve"),
      q("Choisis l'interpellation correcte", ["salve magister", "magister salvet", "salveo magister"], "salve magister"),
      q("‘amicus’ signifie", ["ami", "élève", "livre"], "ami"),
      q("Traduction de ‘et’", ["mais", "et", "ou"], "et"),
      q("Ordre latin attendu", ["salve amice", "amice salve", "amice valeo"], "salve amice"),
    ],
    productionPrompt: "Écris une salutation complète : \"salve magister\".",
    productionExpected: "salve magister",
  },
  {
    periodId: 1,
    title: "Leçon 2 — Verbe être (bases)",
    training: [
      q("‘ego ___’", ["sum", "es", "est"], "sum"),
      q("‘tu ___’", ["sum", "es", "estis"], "es"),
      q("‘nos ___’", ["sumus", "sum", "estis"], "sumus"),
      q("‘vos ___’", ["estis", "sum", "sunt"], "estis"),
      q("‘in schola sum’ =", ["je suis à l'école", "tu es à l'école", "nous sommes à l'école"], "je suis à l'école"),
      q("Choisis la forme correcte", ["ego est", "ego sum", "ego sumus"], "ego sum"),
      q("Choisis la phrase correcte", ["nos sum", "nos sumus", "nos est"], "nos sumus"),
    ],
    productionPrompt: "Écris une phrase minimale : \"ego in schola sum\".",
    productionExpected: "ego in schola sum",
  },
  {
    periodId: 1,
    title: "Leçon 3 — Nom + verbe",
    training: [
      q("‘puella’ signifie", ["fille", "garçon", "maison"], "fille"),
      q("‘librum’ renvoie à", ["livre (COD)", "livre (sujet)", "livres"], "livre (COD)"),
      q("Complète : puella librum ___", ["legit", "lego", "legunt"], "legit"),
      q("‘legit’ =", ["il/elle lit", "je lis", "ils lisent"], "il/elle lit"),
      q("Sujet de ‘puella librum legit’", ["puella", "librum", "legit"], "puella"),
      q("COD de ‘puella librum legit’", ["puella", "librum", "legit"], "librum"),
      q("Traduction correcte", ["la fille lit un livre", "la fille est un livre", "le livre lit la fille"], "la fille lit un livre"),
    ],
    productionPrompt: "Écris une mini-description : \"puella librum legit\".",
    productionExpected: "puella librum legit",
  },
  {
    periodId: 1,
    title: "Leçon 4 — Prépositions simples",
    training: [
      q("‘in foro’ signifie", ["dans le forum", "vers le forum", "sans forum"], "dans le forum"),
      q("‘cum amico’ signifie", ["avec un ami", "contre un ami", "sans ami"], "avec un ami"),
      q("Complète : ego ___ schola sum", ["in", "cum", "ad"], "in"),
      q("Préposition de l'accompagnement", ["cum", "in", "ad"], "cum"),
      q("‘ad villam’ indique", ["direction", "lieu statique", "négation"], "direction"),
      q("Traduction de ‘nos in foro sumus’", ["nous sommes dans le forum", "nous allons du forum", "nous étions forum"], "nous sommes dans le forum"),
      q("Phrase correcte", ["nos in foro sumus", "nos forum in sumus", "nos sumus foro in"], "nos in foro sumus"),
    ],
    productionPrompt: "Écris une phrase de lieu : \"nos in foro sumus\".",
    productionExpected: "nos in foro sumus",
  },
  {
    periodId: 1,
    title: "Leçon 5 — Accord simple",
    training: [
      q("‘bona puella’ =", ["bonne fille", "bon garçon", "bonnes filles"], "bonne fille"),
      q("‘bonus amicus’ =", ["bon ami", "bonne amie", "bons amis"], "bon ami"),
      q("Choisis l'accord attendu", ["bona puella", "bonus puella", "bonum puella"], "bona puella"),
      q("Choisis l'accord attendu", ["bonus amicus", "bona amicus", "boni amicus"], "bonus amicus"),
      q("‘magna villa’ =", ["grande maison", "petite maison", "grandes maisons"], "grande maison"),
      q("‘parvus liber’ =", ["petit livre", "petite fille", "petits livres"], "petit livre"),
      q("Traduction correcte", ["bona puella librum legit", "bonus puella librum legit", "bona puella librum legunt"], "bona puella librum legit"),
    ],
    productionPrompt: "Écris une phrase avec accord : \"bona puella librum legit\".",
    productionExpected: "bona puella librum legit",
  },
  {
    periodId: 2,
    title: "Leçon 1 — Nominatif et accusatif",
    training: [
      q("Fonction du nominatif", ["sujet", "COD", "COI"], "sujet"),
      q("Fonction de l'accusatif", ["COD", "sujet", "attribut"], "COD"),
      q("Dans ‘poeta rosam amat’, sujet", ["poeta", "rosam", "amat"], "poeta"),
      q("Dans ‘poeta rosam amat’, COD", ["poeta", "rosam", "amat"], "rosam"),
      q("Forme sujet de ‘rosa’", ["rosa", "rosam", "rosae"], "rosa"),
      q("Forme COD de ‘rosa’", ["rosa", "rosam", "rosae"], "rosam"),
      q("Traduction correcte", ["le poète aime la rose", "la rose aime le poète", "le poète est une rose"], "le poète aime la rose"),
    ],
    productionPrompt: "Écris : \"poeta rosam amat\".",
    productionExpected: "poeta rosam amat",
  },
  {
    periodId: 2,
    title: "Leçon 2 — 1re et 2e déclinaisons",
    training: [
      q("‘dominus’ est", ["2e déclinaison masc.", "1re déclinaison fém.", "verbe"], "2e déclinaison masc."),
      q("‘puella’ est", ["1re déclinaison fém.", "2e déclinaison masc.", "adverbe"], "1re déclinaison fém."),
      q("Pluriel de ‘puella’ (nom.)", ["puellae", "puellas", "puellam"], "puellae"),
      q("Pluriel de ‘dominus’ (nom.)", ["domini", "dominorum", "dominums"], "domini"),
      q("Accusatif singulier de ‘servus’", ["servum", "servus", "servi"], "servum"),
      q("‘puellae’ peut marquer", ["nom. pl. ou gén. sg.", "acc. sg. seulement", "verbe"], "nom. pl. ou gén. sg."),
      q("Phrase correcte", ["dominus servum vocat", "dominus servus vocat", "dominum servus vocat"], "dominus servum vocat"),
    ],
    productionPrompt: "Écris : \"dominus servum vocat\".",
    productionExpected: "dominus servum vocat",
  },
  {
    periodId: 2,
    title: "Leçon 3 — Fonctions et accords",
    training: [
      q("Dans ‘bona puella parvum librum legit’, adjectif du sujet", ["bona", "parvum", "legit"], "bona"),
      q("Adjectif du COD", ["bona", "parvum", "puella"], "parvum"),
      q("Le verbe s'accorde avec", ["le sujet", "le COD", "l'adjectif"], "le sujet"),
      q("Sujet de la phrase", ["puella", "librum", "legit"], "puella"),
      q("COD de la phrase", ["puella", "librum", "bona"], "librum"),
      q("Traduction de ‘parvum’", ["petit", "grand", "nouveau"], "petit"),
      q("Ordre latin acceptable", ["bona puella parvum librum legit", "parvum legit bona puella librum", "legit librum puella bona parvum"], "bona puella parvum librum legit"),
    ],
    productionPrompt: "Écris : \"bona puella parvum librum legit\".",
    productionExpected: "bona puella parvum librum legit",
  },
  {
    periodId: 2,
    title: "Leçon 4 — Verbes fréquents",
    training: [
      q("‘amat’ =", ["il/elle aime", "ils aiment", "j'aime"], "il/elle aime"),
      q("‘videt’ =", ["il/elle voit", "il/elle vient", "il/elle donne"], "il/elle voit"),
      q("‘portat’ =", ["il/elle porte", "il/elle ferme", "il/elle lit"], "il/elle porte"),
      q("Complète : agricola aquam ___", ["portat", "amat", "vides"], "portat"),
      q("Complète : poeta villam ___", ["videt", "sum", "sumus"], "videt"),
      q("Forme correcte avec ‘nos’", ["amamus", "amat", "amo"], "amamus"),
      q("Traduction correcte", ["nos villam videmus", "nous voyons la maison", "nous sommes la maison"], "nous voyons la maison"),
    ],
    productionPrompt: "Écris : \"nos villam videmus\".",
    productionExpected: "nos villam videmus",
  },
  {
    periodId: 2,
    title: "Leçon 5 — Thème guidé court",
    training: [
      q("Traduction de ‘la maîtresse appelle l'élève’ (noyau)", ["magistra discipulum vocat", "magistra discipulus vocat", "magistram discipulum vocat"], "magistra discipulum vocat"),
      q("‘discipulum’ est", ["accusatif singulier", "nominatif singulier", "ablatif"], "accusatif singulier"),
      q("‘magistra’ est ici", ["sujet", "COD", "complément"], "sujet"),
      q("Verbe correct", ["vocat", "vocant", "voco"], "vocat"),
      q("Accord sujet-verbe attendu", ["magistra vocat", "magistra vocant", "magistra vocamus"], "magistra vocat"),
      q("Choix lexical de ‘élève’", ["discipulus/discipulum", "amicus", "poeta"], "discipulus/discipulum"),
      q("Phrase correcte", ["magistra discipulum vocat", "discipulum magistra vocat", "les deux"], "les deux"),
    ],
    productionPrompt: "Écris : \"magistra discipulum vocat\".",
    productionExpected: "magistra discipulum vocat",
  },
  {
    periodId: 3,
    title: "Leçon 1 — 3e déclinaison (entrée)",
    training: [
      q("Nominatif singulier de ‘rex’", ["rex", "regem", "regis"], "rex"),
      q("Accusatif singulier de ‘rex’", ["regem", "rex", "regi"], "regem"),
      q("‘civis’ signifie", ["citoyen", "roi", "fille"], "citoyen"),
      q("Accusatif singulier de ‘civis’", ["civem", "civis", "civi"], "civem"),
      q("Dans ‘rex civem vocat’, sujet", ["rex", "civem", "vocat"], "rex"),
      q("Dans ‘rex civem vocat’, COD", ["rex", "civem", "vocat"], "civem"),
      q("Traduction correcte", ["le roi appelle le citoyen", "le citoyen appelle le roi", "le roi est citoyen"], "le roi appelle le citoyen"),
    ],
    productionPrompt: "Écris : \"rex civem vocat\".",
    productionExpected: "rex civem vocat",
  },
  {
    periodId: 3,
    title: "Leçon 2 — Temps fondamentaux (présent/imparfait)",
    training: [
      q("‘amat’ est au", ["présent", "imparfait", "futur"], "présent"),
      q("‘amabat’ est à", ["imparfait", "présent", "parfait"], "imparfait"),
      q("Traduction de ‘amabat’", ["il/elle aimait", "il/elle aime", "il/elle a aimé"], "il/elle aimait"),
      q("Complète : puella librum ___ (aimait)", ["amabat", "amat", "amavit"], "amabat"),
      q("‘videbat’ =", ["voyait", "voit", "verra"], "voyait"),
      q("Phrase au présent", ["poeta legit", "poeta legebat", "poeta legerat"], "poeta legit"),
      q("Phrase à l'imparfait", ["poeta legebat", "poeta legit", "poeta legat"], "poeta legebat"),
    ],
    productionPrompt: "Écris au présent : \"poeta librum legit\".",
    productionExpected: "poeta librum legit",
  },
  {
    periodId: 3,
    title: "Leçon 3 — Cas et fonctions mixtes",
    training: [
      q("Le génitif marque souvent", ["complément du nom", "sujet", "verbe"], "complément du nom"),
      q("Le datif marque souvent", ["COI", "sujet", "temps"], "COI"),
      q("Le datif de ‘puella’", ["puellae", "puellam", "puella"], "puellae"),
      q("Dans ‘poeta puellae rosam dat’, COI", ["puellae", "rosam", "poeta"], "puellae"),
      q("COD dans cette phrase", ["rosam", "puellae", "poeta"], "rosam"),
      q("Sujet dans cette phrase", ["poeta", "puellae", "rosam"], "poeta"),
      q("Traduction correcte", ["le poète donne une rose à la fille", "la fille donne au poète", "la rose donne la fille"], "le poète donne une rose à la fille"),
    ],
    productionPrompt: "Écris : \"poeta puellae rosam dat\".",
    productionExpected: "poeta puellae rosam dat",
  },
  {
    periodId: 3,
    title: "Leçon 4 — Thème guidé avec contraintes",
    training: [
      q("Traduction de ‘le maître voit les élèves’", ["magister discipulos videt", "magister discipuli videt", "magistrum discipulos videt"], "magister discipulos videt"),
      q("‘discipulos’ est", ["accusatif pluriel", "nominatif pluriel", "génitif pluriel"], "accusatif pluriel"),
      q("‘magister’ est", ["nominatif singulier", "accusatif singulier", "ablatif"], "nominatif singulier"),
      q("Verbe correct avec sujet singulier", ["videt", "vident", "video"], "videt"),
      q("Accord attendu", ["magister videt", "magister vident", "magister videmus"], "magister videt"),
      q("Traduction de ‘discipulos’", ["les élèves (COD)", "les élèves (sujet)", "de l'élève"], "les élèves (COD)"),
      q("Ordre latin acceptable", ["magister discipulos videt", "discipulos magister videt", "les deux"], "les deux"),
    ],
    productionPrompt: "Écris : \"magister discipulos videt\".",
    productionExpected: "magister discipulos videt",
  },
  {
    periodId: 3,
    title: "Leçon 5 — Synthèse Scriba",
    training: [
      q("Dans ‘boni cives urbem amant’, sujet", ["boni cives", "urbem", "amant"], "boni cives"),
      q("COD", ["urbem", "cives", "boni"], "urbem"),
      q("‘amant’ correspond à", ["ils aiment", "il aime", "nous aimons"], "ils aiment"),
      q("‘urbem’ vient de", ["urbs", "urba", "urbanus"], "urbs"),
      q("Accord adjectif + nom", ["boni cives", "bonus cives", "bonum cives"], "boni cives"),
      q("Traduction correcte", ["les bons citoyens aiment la ville", "la ville aime les citoyens", "les citoyens sont la ville"], "les bons citoyens aiment la ville"),
      q("Fonction de ‘urbem’", ["COD", "sujet", "COI"], "COD"),
    ],
    productionPrompt: "Écris : \"boni cives urbem amant\".",
    productionExpected: "boni cives urbem amant",
  },
];

const lessons = lessonBlueprints.map((lesson, index) => ({
  ...lesson,
  id: `p${lesson.periodId}-l${(index % LESSONS_PER_PERIOD) + 1}`,
}));

let state = loadState();

const periodSummaryEl = document.getElementById("period-summary");
const lessonListEl = document.getElementById("lesson-list");
const lessonDetailEl = document.getElementById("lesson-detail");
const cardTemplate = document.getElementById("lesson-card-template");

render();

function q(prompt, choices, correct) {
  return { prompt, choices, correct };
}

function createEmptyProgress() {
  return lessons.reduce((accumulator, lesson) => {
    accumulator[lesson.id] = {
      trainingAnswers: {},
      productionAnswer: "",
      scoreTraining: 0,
      scoreProduction: 0,
      total: 0,
    };
    return accumulator;
  }, {});
}

function loadState() {
  const rawState = localStorage.getItem(STORAGE_KEY);
  if (!rawState) {
    return { selectedLessonId: lessons[0].id, progress: createEmptyProgress() };
  }

  try {
    const parsedState = JSON.parse(rawState);
    return {
      selectedLessonId: parsedState.selectedLessonId || lessons[0].id,
      progress: { ...createEmptyProgress(), ...(parsedState.progress || {}) },
    };
  } catch {
    return { selectedLessonId: lessons[0].id, progress: createEmptyProgress() };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function normalizeAnswer(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/gi, " ")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}

function computeLessonScore(lesson) {
  const progress = state.progress[lesson.id];

  const scoreTraining = lesson.training.reduce((score, item, index) => {
    return progress.trainingAnswers[index] === item.correct ? score + 1 : score;
  }, 0);

  const scoreProduction =
    normalizeAnswer(progress.productionAnswer) === normalizeAnswer(lesson.productionExpected) ? 3 : 0;

  progress.scoreTraining = scoreTraining;
  progress.scoreProduction = scoreProduction;
  progress.total = scoreTraining + scoreProduction;
}

function computePeriodScore(periodId) {
  const periodLessons = lessons.filter((lesson) => lesson.periodId === periodId);
  const score = periodLessons.reduce((sum, lesson) => sum + state.progress[lesson.id].total, 0);
  const percent = Math.round((score / PERIOD_MAX_SCORE) * 100);
  return { score, percent, isValidated: percent >= 80 };
}

function render() {
  lessons.forEach((lesson) => computeLessonScore(lesson));
  saveState();
  renderPeriods();
  renderLessonList();
  renderLessonDetail();
}

function renderPeriods() {
  periodSummaryEl.innerHTML = "";

  periods.forEach((period) => {
    const periodScore = computePeriodScore(period.id);
    const box = document.createElement("article");
    box.className = "period-box";

    box.innerHTML = `
      <h2>${period.title}</h2>
      <p class="helper">FR : ${period.stageFr}</p>
      <p class="helper">EN : ${period.stageEn}</p>
      <p class="score-line">Score : ${periodScore.score} / 50</p>
      <p>Pourcentage : ${periodScore.percent}%</p>
      <p class="period-status ${periodScore.isValidated ? "validated" : "not-validated"}">
        Statut : ${periodScore.isValidated ? "Validée" : "Non validée"}
      </p>
    `;

    periodSummaryEl.appendChild(box);
  });
}

function renderLessonList() {
  lessonListEl.innerHTML = "";

  lessons.forEach((lesson) => {
    const card = cardTemplate.content.firstElementChild.cloneNode(true);
    card.querySelector("h3").textContent = `${periods[lesson.periodId - 1].title} · ${lesson.title}`;
    card.querySelector(".lesson-meta").textContent = "Entraînement /7 · Production /3 · Total /10";
    card.querySelector(".lesson-score").textContent = `Score : ${state.progress[lesson.id].total} / 10`;

    const button = card.querySelector("button");
    button.addEventListener("click", () => {
      state.selectedLessonId = lesson.id;
      renderLessonDetail();
      saveState();
    });

    lessonListEl.appendChild(card);
  });
}

function renderLessonDetail() {
  const lesson = lessons.find((item) => item.id === state.selectedLessonId);
  const progress = state.progress[lesson.id];

  const questionsHtml = lesson.training
    .map((item, index) => {
      const optionsHtml = item.choices
        .map((choice) => {
          const isChecked = progress.trainingAnswers[index] === choice ? "checked" : "";
          return `
            <label class="radio-option">
              <input type="radio" name="q-${index}" value="${escapeHtml(choice)}" ${isChecked} />
              ${choice}
            </label>
          `;
        })
        .join("");

      return `<fieldset><legend>${index + 1}. ${item.prompt}</legend>${optionsHtml}</fieldset>`;
    })
    .join("");

  lessonDetailEl.innerHTML = `
    <h2>${periods[lesson.periodId - 1].title} · ${lesson.title}</h2>
    <p class="helper">ATRIUM : morphologie, syntaxe et thème guidé (pas un simple quiz).</p>
    <form id="lesson-form">
      ${questionsHtml}
      <fieldset>
        <legend>Production écrite guidée (/3)</legend>
        <p class="helper">${lesson.productionPrompt}</p>
        <input type="text" name="production" value="${escapeHtml(progress.productionAnswer)}" maxlength="120" required />
        <p class="helper">Réponse courte, contrainte, auto-corrigée par normalisation.</p>
      </fieldset>
      <button type="submit">Corriger la leçon</button>
    </form>
    <p class="score-line">Entraînement : ${progress.scoreTraining} / 7 · Production : ${progress.scoreProduction} / 3 · Total : ${progress.total} / 10</p>
  `;

  document.getElementById("lesson-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    lesson.training.forEach((_, index) => {
      progress.trainingAnswers[index] = String(formData.get(`q-${index}`) || "");
    });

    progress.productionAnswer = String(formData.get("production") || "");

    computeLessonScore(lesson);
    render();
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
