import { LESSONS_SPEC, getLessonById } from "../lessons.js";
import { createFeedbackBox } from "../components/feedbackBox.js";
import { createTrainingItemCard } from "../components/trainingItemCard.js";
import { createProductionItemCard } from "../components/productionItemCard.js";
import { evaluateTrainingItem, computeTrainingProgress } from "../trainingEngine.js";
import { evaluateProductionItem, computeProductionProgress } from "../productionEngine.js";

function isLessonPlayable(lesson) {
  return (
    lesson?.meta?.status === "ready" &&
    Array.isArray(lesson.training) &&
    lesson.training.length === LESSONS_SPEC.trainingMax &&
    Array.isArray(lesson.production) &&
    lesson.production.length === LESSONS_SPEC.productionMax
  );
}

function getLessonSummary(lesson) {
  if (lesson?.summary && typeof lesson.summary === "object") {
    return {
      retains: Array.isArray(lesson.summary.retains) ? lesson.summary.retains : [lesson.objective],
      cahier: Array.isArray(lesson.summary.cahier) ? lesson.summary.cahier : [lesson.objective],
      keywords: Array.isArray(lesson.summary.keywords) ? lesson.summary.keywords : (lesson.meta?.tags || []),
    };
  }

  return {
    retains: [lesson.objective],
    cahier: [`Je reformule l'objectif : ${lesson.objective}`],
    keywords: Array.isArray(lesson.meta?.tags) ? lesson.meta.tags : [lesson.periodId, "latin"],
  };
}

function formatUserAnswer(value) {
  if (Array.isArray(value)) return value.join(", ");
  if (value && typeof value === "object") {
    return Object.entries(value)
      .map(([left, right]) => `${left} → ${right}`)
      .join(" ; ");
  }
  return String(value || "(vide)");
}

function formatExpected(expected) {
  if (Array.isArray(expected)) return expected.join(" | ");
  if (expected && typeof expected === "object") {
    return Object.entries(expected)
      .map(([left, right]) => `${left} → ${right}`)
      .join(" ; ");
  }
  return String(expected ?? "");
}

function formatReviewLine(item, entry) {
  const isCorrect = Boolean(entry?.isCorrect);
  const user = formatUserAnswer(entry?.userAnswer);
  const expected = formatExpected(item.expected);

  if (isCorrect) {
    return `<li><strong>✅ ${item.prompt}</strong><br/><span class="muted">Votre réponse : ${user}</span></li>`;
  }

  return `<li><strong>❌ ${item.prompt}</strong><br/><span class="muted">Votre réponse : ${user}</span><br/><span>Réponse attendue : ${expected}</span></li>`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function parseLexiconEntry(entry) {
  const raw = String(entry ?? "").trim();

  if (!raw) return { latin: "", french: "" };

  const equalMatch = raw.match(/^(.+?)\s*=\s*(.+)$/);
  if (equalMatch) {
    return {
      latin: equalMatch[1].trim(),
      french: equalMatch[2].trim(),
    };
  }

  return {
    latin: raw,
    french: "",
  };
}

function renderLexiconChips(lexicon) {
  if (!Array.isArray(lexicon) || lexicon.length === 0) return "";

  const chips = lexicon
    .map((entry) => {
      const { latin, french } = parseLexiconEntry(entry);

      if (!latin) return "";

      if (!french) {
        return `
          <span class="lexicon-chip">
            <span class="lexicon-chip__latin">${escapeHtml(latin)}</span>
          </span>
        `;
      }

      return `
        <span class="lexicon-chip">
          <span class="lexicon-chip__latin">${escapeHtml(latin)}</span>
          <span class="lexicon-chip__sep">=</span>
          <span class="lexicon-chip__fr">${escapeHtml(french)}</span>
        </span>
      `;
    })
    .join("");

  return `<div class="lesson-lexicon">${chips}</div>`;
}

function createLessonToolbar({ lesson, onBackDashboard }) {
  const shell = document.createElement("div");
  shell.className = "lesson-toolbar-shell";

  const title = `P${lesson.period} · ${lesson.title}`;
  const hasLexicon = Array.isArray(lesson.lexicon) && lesson.lexicon.length > 0;
  const reminderText = lesson.lessonPoint || lesson.objective || "";

  shell.innerHTML = `
    <div class="lesson-toolbar">
      <div class="lesson-toolbar__inner">
        <button type="button" class="lesson-toolbar__btn" data-action="back">← Dashboard</button>
        <div class="lesson-toolbar__title" title="${escapeHtml(title)}">${escapeHtml(title)}</div>
        <div class="lesson-toolbar__actions">
          <button type="button" class="lesson-toolbar__btn" data-panel="reminder" aria-expanded="false">Rappel</button>
          ${hasLexicon ? `<button type="button" class="lesson-toolbar__btn" data-panel="lexicon" aria-expanded="false">Lexique</button>` : ""}
        </div>
      </div>
    </div>
    <div class="lesson-toolbar__panel" hidden>
      <div class="lesson-toolbar__panel-inner"></div>
    </div>
    <div class="lesson-toolbar__spacer" aria-hidden="true"></div>
  `;

  const toolbar = shell.querySelector(".lesson-toolbar");
  const panel = shell.querySelector(".lesson-toolbar__panel");
  const panelInner = shell.querySelector(".lesson-toolbar__panel-inner");
  const spacer = shell.querySelector(".lesson-toolbar__spacer");
  const backButton = shell.querySelector('[data-action="back"]');
  const panelButtons = Array.from(shell.querySelectorAll("[data-panel]"));

  let activePanel = null;

  const panelMarkup = {
    reminder: `
      <p class="lesson-toolbar__panel-title">Rappel</p>
      <p class="lesson-toolbar__panel-text">${escapeHtml(reminderText)}</p>
    `,
    lexicon: `
      <p class="lesson-toolbar__panel-title">Lexique</p>
      ${renderLexiconChips(lesson.lexicon)}
    `,
  };

  const syncLayout = () => {
    const toolbarHeight = toolbar.offsetHeight || 56;
    panel.style.top = `${toolbarHeight}px`;
    const panelHeight = panel.hidden ? 0 : (panel.offsetHeight || panel.scrollHeight || 0);
    spacer.style.height = `${toolbarHeight + panelHeight + 8}px`;
  };

  const closePanel = () => {
    activePanel = null;
    panel.hidden = true;
    panelInner.innerHTML = "";
    panelButtons.forEach((button) => button.setAttribute("aria-expanded", "false"));
    syncLayout();
  };

  const openPanel = (key) => {
    activePanel = key;
    panelInner.innerHTML = panelMarkup[key] || "";
    panel.hidden = false;
    panelButtons.forEach((button) => {
      button.setAttribute("aria-expanded", button.dataset.panel === key ? "true" : "false");
    });
    requestAnimationFrame(syncLayout);
  };

  backButton.addEventListener("click", onBackDashboard);

  panelButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.panel;
      if (!key) return;

      if (activePanel === key) {
        closePanel();
        return;
      }

      openPanel(key);
    });
  });

  window.requestAnimationFrame(syncLayout);
  window.addEventListener("resize", syncLayout);

  return shell;
}

export function renderLessonView({ level, lessonId, progress, onSaveLessonScore, onBackDashboard, onOpenResults, onRestartLesson }) {
  const lesson = getLessonById(lessonId, level?.id);
  const wrapper = document.createElement("section");
  wrapper.className = "stack";

  if (!lesson) {
    const missing = document.createElement("article");
    missing.className = "card";
    missing.innerHTML = `
      <h2>Leçon introuvable</h2>
      <p>La leçon demandée n'existe pas dans le référentiel actuel.</p>
      <button type="button" class="btn btn-primary">Retour dashboard</button>
    `;
    missing.querySelector("button").addEventListener("click", onBackDashboard);
    wrapper.appendChild(missing);
    return wrapper;
  }

  const progressEntry = progress?.lessons?.[lesson.id];
  const savedCurrent = progressEntry?.current?.totalScore ?? 0;
  const savedBest = progressEntry?.best?.totalScore ?? 0;
  const subtitleHtml = lesson?.subtitle
    ? `<p class="lesson-subtitle"><em>${lesson.subtitle}</em></p>`
    : "";

  if (!isLessonPlayable(lesson)) {
    const pending = document.createElement("article");
    pending.className = "card lesson-hero";
    pending.innerHTML = `
      <h2>${lesson.title}</h2>
      ${subtitleHtml}
      <p class="muted">${lesson.id} · Période ${lesson.period}</p>
      <p><strong>Objectif :</strong> ${lesson.objective}</p>
      <p class="muted">Cette leçon n'est pas encore jouable de bout en bout dans cette version.</p>
      <p class="muted">Score enregistré : courant ${savedCurrent}/10 · meilleur ${savedBest}/10</p>
      <div class="actions-row">
        <button type="button" class="btn btn-secondary" data-action="back">Retour dashboard</button>
        <button type="button" class="btn btn-secondary" data-action="results">Voir résultats</button>
      </div>
    `;

    pending.querySelector('[data-action="back"]').addEventListener("click", onBackDashboard);
    pending.querySelector('[data-action="results"]').addEventListener("click", onOpenResults);
    wrapper.appendChild(pending);
    return wrapper;
  }

  const trainingResults = {};
  const productionResults = {};
  const trainingCards = {};
  const productionCards = {};

  let lessonPhase = "in_progress";

  const lessonToolbar = createLessonToolbar({ lesson, onBackDashboard });

  const hero = document.createElement("article");
  hero.className = "card lesson-hero";
  hero.innerHTML = `
    <h2>${lesson.title}</h2>
    ${subtitleHtml}
    <p class="muted">${lesson.id} · Période ${lesson.period}</p>
    <p><strong>Objectif :</strong> ${lesson.objective}</p>
    <p><strong>Point de leçon :</strong> ${lesson.lessonPoint || lesson.objective}</p>
    <p class="muted">Flow complet : répondez d'abord aux 10 exercices, puis consultez le corrigé global en fin de leçon.</p>
    <p class="muted">Validation visée : 8/10 (80 %) · Score enregistré : courant ${savedCurrent}/10 · meilleur ${savedBest}/10</p>
  `;

  const trainingBoard = document.createElement("div");
  trainingBoard.className = "training-board";

  const productionBoard = document.createElement("div");
  productionBoard.className = "production-board";

  const trainingState = document.createElement("p");
  trainingState.className = "muted";

  const productionState = document.createElement("p");
  productionState.className = "muted";

  const flowState = document.createElement("p");
  flowState.className = "muted";

  const form = document.createElement("form");
  form.className = "stack compact-form";
  form.id = "lesson-score-form";

  const finishButton = document.createElement("button");
  finishButton.type = "submit";
  finishButton.className = "btn btn-primary";
  finishButton.textContent = "Terminer la leçon (corrigé final)";

  const resetLessonButton = document.createElement("button");
  resetLessonButton.type = "button";
  resetLessonButton.className = "btn btn-secondary";
  resetLessonButton.textContent = "Réinitialiser toute la leçon";

  const backButton = document.createElement("button");
  backButton.type = "button";
  backButton.className = "btn btn-secondary";
  backButton.textContent = "Retour dashboard";

  const resultsButton = document.createElement("button");
  resultsButton.type = "button";
  resultsButton.className = "btn btn-secondary";
  resultsButton.textContent = "Voir résultats";

  const actions = document.createElement("div");
  actions.className = "actions-row";
  actions.append(finishButton, resetLessonButton, backButton, resultsButton);

  form.appendChild(actions);

  const finalSummary = document.createElement("article");
  finalSummary.className = "card";
  finalSummary.hidden = true;

  const syncStates = () => {
    const training = computeTrainingProgress(lesson.training, trainingResults);
    const production = computeProductionProgress(lesson.production, productionResults);
    const answeredCount = training.answeredCount + production.answeredCount;
    const totalItems = training.totalItems + production.totalItems;

    if (lessonPhase !== "finished_with_summary") {
      lessonPhase = answeredCount === totalItems ? "ready_to_finish" : "in_progress";
    }

    trainingState.textContent = `Entraînement : ${training.answeredCount}/${training.totalItems} réponses enregistrées.`;
    productionState.textContent = `Production guidée : ${production.answeredCount}/${production.totalItems} réponses enregistrées.`;

    if (lessonPhase === "finished_with_summary") {
      flowState.textContent = "Tentative terminée : corrigé final affiché. Pour rejouer, utilisez « Réinitialiser toute la leçon ».";
    } else {
      flowState.textContent = `Progression leçon : ${answeredCount}/${totalItems} exercices. Le score et le corrigé détaillé seront affichés uniquement en fin de leçon.`;
    }

    finishButton.disabled = lessonPhase !== "ready_to_finish";
    resultsButton.disabled = lessonPhase !== "finished_with_summary";

    return { training, production, answeredCount, totalItems };
  };

  lesson.training.forEach((item) => {
    const card = createTrainingItemCard({
      item,
      deferCorrection: true,
      canReset: () => lessonPhase !== "finished_with_summary",
      onValidate: (userResponse) => {
        const result = evaluateTrainingItem(item, userResponse);
        trainingResults[item.id] = {
          ...result,
          userAnswer: userResponse,
        };
        syncStates();
        return result;
      },
      onReset: () => {
        delete trainingResults[item.id];
        syncStates();
      },
    });

    trainingCards[item.id] = card;
    trainingBoard.appendChild(card);
  });

  lesson.production.forEach((item) => {
    const card = createProductionItemCard({
      item,
      deferCorrection: true,
      canReset: () => lessonPhase !== "finished_with_summary",
      onEvaluate: (userAnswer) => {
        const result = evaluateProductionItem(item, userAnswer);
        productionResults[item.id] = {
          ...result,
          userAnswer: String(userAnswer ?? ""),
        };
        syncStates();
        return result;
      },
      onReset: () => {
        delete productionResults[item.id];
        syncStates();
      },
    });

    productionCards[item.id] = card;
    productionBoard.appendChild(card);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const latestTraining = computeTrainingProgress(lesson.training, trainingResults);
    const latestProduction = computeProductionProgress(lesson.production, productionResults);

    if (latestTraining.answeredCount + latestProduction.answeredCount !== latestTraining.totalItems + latestProduction.totalItems) {
      return;
    }

    const saved = onSaveLessonScore({
      levelId: level?.id,
      lessonId: lesson.id,
      trainingScore: latestTraining.score,
      productionScore: latestProduction.score,
    });

    lessonPhase = "finished_with_summary";

    lesson.training.forEach((item) => {
      trainingCards[item.id]?.setFinalReveal?.(trainingResults[item.id]);
      trainingCards[item.id]?.closeAttempt?.();
    });

    lesson.production.forEach((item) => {
      productionCards[item.id]?.setFinalReveal?.(productionResults[item.id]);
      productionCards[item.id]?.closeAttempt?.();
    });

    const currentScore = saved?.lessonProgress?.current?.totalScore ?? latestTraining.score + latestProduction.score;
    const bestScore = saved?.lessonProgress?.best?.totalScore ?? currentScore;
    const summary = getLessonSummary(lesson);

    const trainingReview = lesson.training
      .map((item) => formatReviewLine(item, trainingResults[item.id]))
      .join("");
    const productionReview = lesson.production
      .map((item) => formatReviewLine(item, productionResults[item.id]))
      .join("");

    finalSummary.hidden = false;
    finalSummary.innerHTML = `
      <h3>Résultats finaux de la leçon</h3>
      <p><strong>Score :</strong> ${currentScore}/10 (entraînement ${latestTraining.score}/7 + production ${latestProduction.score}/3)</p>
      <p><strong>Statut :</strong> ${currentScore >= 8 ? "Leçon validée (≥ 8/10, soit 80 %)" : "Leçon à consolider (< 8/10)"}</p>
      <p class="muted">Meilleur score conservé : ${bestScore}/10</p>

      <h4>Correction / Revue globale</h4>
      <ul>${trainingReview}${productionReview}</ul>

      <h4>Je retiens</h4>
      <ul>${summary.retains.map((line) => `<li>${line}</li>`).join("")}</ul>

      <h4>Je recopie dans mon cahier</h4>
      <ul>${summary.cahier.map((line) => `<li>${line}</li>`).join("")}</ul>

      <h4>Mots-clés</h4>
      <p>${summary.keywords.join(" · ")}</p>
    `;

    syncStates();
  });

  resetLessonButton.addEventListener("click", () => {
    if (typeof onRestartLesson === "function") {
      onRestartLesson();
      return;
    }

    window.location.reload();
  });

  backButton.addEventListener("click", onBackDashboard);
  resultsButton.addEventListener("click", () => {
    if (lessonPhase !== "finished_with_summary") return;
    onOpenResults();
  });

  const feedback = createFeedbackBox({
    title: "Moteur de leçon complet",
    text: "ATRIUM conserve le contrat /7 + /3 = /10. Les corrections détaillées apparaissent uniquement sur l'écran final.",
  });

  syncStates();

  wrapper.append(
    lessonToolbar,
    hero,
    trainingState,
    trainingBoard,
    productionState,
    productionBoard,
    flowState,
    form,
    finalSummary,
    feedback,
  );
  return wrapper;
}
