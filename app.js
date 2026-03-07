const STORAGE_KEY = "atrium-progress-v1";

const periods = [
  { id: 1, title: "Période 1", theme: "Formules de base" },
  { id: 2, title: "Période 2", theme: "Grammaire guidée" },
  { id: 3, title: "Période 3", theme: "Production contrôlée" },
];

const baseTraining = [
  {
    prompt: "Choisis la traduction de \"salve\"",
    choices: ["bonjour", "au revoir", "merci"],
    correct: "bonjour",
  },
  {
    prompt: "Choisis la traduction de \"vale\"",
    choices: ["bonjour", "au revoir", "s'il te plaît"],
    correct: "au revoir",
  },
  {
    prompt: "Complète: puella ___ legit.",
    choices: ["librum", "libri", "libro"],
    correct: "librum",
  },
  {
    prompt: "Choisis le pronom latin pour \"je\"",
    choices: ["ego", "tu", "nos"],
    correct: "ego",
  },
  {
    prompt: "Choisis la forme correcte: nos ___.",
    choices: ["sum", "estis", "sumus"],
    correct: "sumus",
  },
  {
    prompt: "Choisis la traduction de \"in schola\"",
    choices: ["dans l'école", "avec l'école", "vers l'école"],
    correct: "dans l'école",
  },
  {
    prompt: "Choisis le verbe correct: magister ___.",
    choices: ["docet", "docent", "doceo"],
    correct: "docet",
  },
];

const productionPrompts = [
  "Écris une salutation à un professeur : \"salve magister\".",
  "Écris une phrase courte : \"ego in schola sum\".",
  "Écris une clôture de dialogue : \"vale amice\".",
  "Écris une mini-description : \"puella librum legit\".",
  "Écris une réponse complète : \"nos in foro sumus\".",
];

const lessons = buildLessons();
let state = loadState();

const periodSummaryEl = document.getElementById("period-summary");
const lessonListEl = document.getElementById("lesson-list");
const lessonDetailEl = document.getElementById("lesson-detail");
const cardTemplate = document.getElementById("lesson-card-template");

render();

function buildLessons() {
  const allLessons = [];
  for (const period of periods) {
    for (let i = 1; i <= 5; i += 1) {
      const id = `p${period.id}-l${i}`;
      const productionIndex = i - 1;
      allLessons.push({
        id,
        periodId: period.id,
        title: `Leçon ${i}`,
        training: baseTraining,
        productionPrompt: productionPrompts[productionIndex],
        productionExpected: productionPrompts[productionIndex]
          .split('"')[1]
          .toLowerCase(),
      });
    }
  }
  return allLessons;
}

function createEmptyProgress() {
  return lessons.reduce((acc, lesson) => {
    acc[lesson.id] = { trainingAnswers: {}, productionAnswer: "", scoreTraining: 0, scoreProduction: 0, total: 0 };
    return acc;
  }, {});
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return { selectedLessonId: lessons[0].id, progress: createEmptyProgress() };
  }
  try {
    const parsed = JSON.parse(raw);
    return {
      selectedLessonId: parsed.selectedLessonId || lessons[0].id,
      progress: { ...createEmptyProgress(), ...(parsed.progress || {}) },
    };
  } catch {
    return { selectedLessonId: lessons[0].id, progress: createEmptyProgress() };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function normalizeAnswer(input) {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/gi, " ")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}

function computeLessonScore(lessonId) {
  const lesson = lessons.find((item) => item.id === lessonId);
  const progress = state.progress[lessonId];

  const trainingScore = lesson.training.reduce((score, item, index) => {
    const answer = progress.trainingAnswers[index];
    return answer === item.correct ? score + 1 : score;
  }, 0);

  const productionScore = normalizeAnswer(progress.productionAnswer) === normalizeAnswer(lesson.productionExpected) ? 3 : 0;

  progress.scoreTraining = trainingScore;
  progress.scoreProduction = productionScore;
  progress.total = trainingScore + productionScore;
}

function computePeriodScore(periodId) {
  const periodLessons = lessons.filter((item) => item.periodId === periodId);
  const score = periodLessons.reduce((sum, lesson) => sum + (state.progress[lesson.id]?.total || 0), 0);
  const percent = Math.round((score / 50) * 100);
  return { score, percent, validated: percent >= 80 };
}

function render() {
  for (const lesson of lessons) {
    computeLessonScore(lesson.id);
  }
  saveState();
  renderPeriods();
  renderLessonList();
  renderLessonDetail();
}

function renderPeriods() {
  periodSummaryEl.innerHTML = "";
  for (const period of periods) {
    const { score, percent, validated } = computePeriodScore(period.id);
    const box = document.createElement("article");
    box.className = "period-box";
    box.innerHTML = `
      <h2>${period.title}</h2>
      <p>${period.theme}</p>
      <p class="score-line">Score : ${score} / 50</p>
      <p>Pourcentage : ${percent}%</p>
      <p class="period-status ${validated ? "validated" : "not-validated"}">
        Statut : ${validated ? "Validée" : "Non validée"}
      </p>
    `;
    periodSummaryEl.appendChild(box);
  }
}

function renderLessonList() {
  lessonListEl.innerHTML = "";
  for (const lesson of lessons) {
    const node = cardTemplate.content.firstElementChild.cloneNode(true);
    node.querySelector("h3").textContent = `${periods[lesson.periodId - 1].title} · ${lesson.title}`;
    node.querySelector(".lesson-meta").textContent = "Entraînement /7 · Production /3 · Total /10";
    node.querySelector(".lesson-score").textContent = `Score : ${state.progress[lesson.id].total} / 10`;
    const button = node.querySelector("button");
    button.addEventListener("click", () => {
      state.selectedLessonId = lesson.id;
      renderLessonDetail();
      saveState();
    });
    lessonListEl.appendChild(node);
  }
}

function renderLessonDetail() {
  const lesson = lessons.find((item) => item.id === state.selectedLessonId);
  const progress = state.progress[lesson.id];

  const questionsHtml = lesson.training
    .map((item, index) => {
      const options = item.choices
        .map(
          (choice) => `
            <label class="radio-option">
              <input type="radio" name="q-${index}" value="${choice}" ${progress.trainingAnswers[index] === choice ? "checked" : ""} />
              ${choice}
            </label>
          `,
        )
        .join("");
      return `<fieldset><legend>${index + 1}. ${item.prompt}</legend>${options}</fieldset>`;
    })
    .join("");

  lessonDetailEl.innerHTML = `
    <h2>${periods[lesson.periodId - 1].title} · ${lesson.title}</h2>
    <p class="helper">Chaque leçon doit afficher entraînement /7, production /3, total /10.</p>
    <form id="lesson-form">
      ${questionsHtml}
      <fieldset>
        <legend>Production écrite guidée (/3)</legend>
        <p class="helper">${lesson.productionPrompt}</p>
        <input type="text" name="production" value="${escapeHtml(progress.productionAnswer)}" maxlength="80" required />
        <p class="helper">Réponse courte, contrainte et auto-corrigée (normalisation active).</p>
      </fieldset>
      <button type="submit">Corriger la leçon</button>
    </form>
    <p class="score-line">Entraînement : ${progress.scoreTraining} / 7 · Production : ${progress.scoreProduction} / 3 · Total : ${progress.total} / 10</p>
  `;

  const form = document.getElementById("lesson-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    lesson.training.forEach((_, index) => {
      progress.trainingAnswers[index] = formData.get(`q-${index}`) || "";
    });

    progress.productionAnswer = String(formData.get("production") || "");

    computeLessonScore(lesson.id);
    render();
  });
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
