import { LESSONS_SPEC, getLessonById, getPeriodsByLevel, getLessonsByPeriod } from "../lessons.js";
import { markLessonVisited, buildLessonHash } from "../storage.js";
import { createFeedbackBox } from "../components/feedbackBox.js";
import { createTrainingItemCard } from "../components/trainingItemCard.js";
import { createProductionItemCard } from "../components/productionItemCard.js";
import { evaluateTrainingItem, computeTrainingProgress } from "../trainingEngine.js";
import { evaluateProductionItem, computeProductionProgress } from "../productionEngine.js";

function isLessonPlayable(lesson) {
  return (
    Boolean(lesson) &&
    Array.isArray(lesson.training) &&
    lesson.training.length > 0 &&
    Array.isArray(lesson.production) &&
    lesson.production.length > 0
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

function getLessonIntroText(lesson) {
  const candidates = [
    lesson?.intro,
    lesson?.introduction,
    lesson?.ambiance,
    lesson?.narrative,
    lesson?.subtitle,
    lesson?.story,
    lesson?.lessonPoint,
    lesson?.objective,
  ];

  return candidates.find((value) => typeof value === "string" && value.trim().length > 0) || "";
}

function ensureLessonIntroStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("lesson-intro-overlay-styles")) return;

  const style = document.createElement("style");
  style.id = "lesson-intro-overlay-styles";
  style.textContent = `
    .lesson-view {
      position: relative;
      isolation: isolate;
    }

    .lesson-intro-overlay {
      position: fixed;
      inset: 0;
      z-index: 1400;
      display: grid;
      place-items: center;
      padding: 1rem;
      opacity: 0;
      pointer-events: none;
      transition: opacity 360ms ease;
    }

    .lesson-intro-overlay.is-visible {
      opacity: 1;
      pointer-events: auto;
    }

    .lesson-intro-overlay.is-leaving {
      opacity: 0;
      pointer-events: none;
    }

    .lesson-intro-overlay__veil {
      position: absolute;
      inset: 0;
      background:
        radial-gradient(circle at 16% 20%, rgba(255, 205, 135, 0.08), transparent 24%),
        radial-gradient(circle at 79% 28%, rgba(255, 239, 210, 0.05), transparent 22%),
        radial-gradient(circle at 52% 78%, rgba(166, 112, 70, 0.07), transparent 26%),
        linear-gradient(180deg, rgba(15, 12, 10, 0.34), rgba(15, 12, 10, 0.68));
      backdrop-filter: blur(20px) saturate(0.82);
      -webkit-backdrop-filter: blur(20px) saturate(0.82);
    }

    .lesson-intro-overlay__bubble {
      position: relative;
      width: min(760px, calc(100vw - 2rem));
      padding: clamp(1.1rem, 1.2rem + 1vw, 1.8rem);
      border-radius: 26px;
      border: 1px solid rgba(255, 236, 210, 0.14);
      background:
        radial-gradient(circle at 12% 10%, rgba(255, 209, 138, 0.09), transparent 34%),
        linear-gradient(180deg, rgba(55, 41, 33, 0.94), rgba(27, 21, 18, 0.97));
      color: #f8f1e7;
      box-shadow:
        0 28px 90px rgba(0, 0, 0, 0.44),
        0 10px 28px rgba(0, 0, 0, 0.22),
        inset 0 1px 0 rgba(255, 255, 255, 0.05);
      transform: translateY(10px) scale(0.985);
      transition: transform 320ms ease;
      overflow: hidden;
    }

    .lesson-intro-overlay.is-visible .lesson-intro-overlay__bubble {
      transform: translateY(0) scale(1);
    }

    .lesson-intro-overlay__bubble::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background:
        linear-gradient(135deg, rgba(255, 255, 255, 0.024), transparent 36%),
        repeating-linear-gradient(
          90deg,
          rgba(255, 255, 255, 0.01) 0px,
          rgba(255, 255, 255, 0.01) 1px,
          transparent 1px,
          transparent 3px
        );
      opacity: 0.28;
      pointer-events: none;
    }

    .lesson-intro-overlay__bubble::after {
      content: "";
      position: absolute;
      top: 16px;
      left: 24px;
      width: 58px;
      height: 2px;
      border-radius: 999px;
      background: linear-gradient(90deg, rgba(255, 214, 153, 0.72), rgba(255, 214, 153, 0));
      pointer-events: none;
    }

    .lesson-intro-overlay__eyebrow {
      margin: 0 0 0.72rem;

      font-size: 0.74rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: rgba(255, 223, 180, 0.76);
    }

    .lesson-intro-overlay__text {
      margin: 0;
      max-width: 34ch;
      min-height: 4.8lh;
      font-size: clamp(1.05rem, 0.98rem + 0.45vw, 1.24rem);
      line-height: 1.72;
      letter-spacing: 0.01em;
      color: #fff9f1;
      text-wrap: pretty;
    }

    .lesson-intro-overlay__text::after {
      content: "";
      display: inline-block;
      width: 0.62ch;
      height: 1em;
      margin-left: 0.14rem;
      vertical-align: -0.08em;
      border-right: 2px solid rgba(255, 231, 198, 0.78);
      animation: lessonIntroCaret 0.9s steps(1) infinite;
    }

    .lesson-intro-overlay.is-complete .lesson-intro-overlay__text::after {
      opacity: 0.28;
    }

    .lesson-intro-overlay__skip {
      margin-top: 1rem;
      padding: 0.46rem 0.82rem;
      border: 1px solid rgba(255, 239, 220, 0.12);
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.045);
      color: rgba(255, 244, 231, 0.82);
      font-size: 0.9rem;
      letter-spacing: 0.01em;
      cursor: pointer;
      transition:
        background 180ms ease,
        border-color 180ms ease,
        color 180ms ease,
        transform 180ms ease;
    }

    .lesson-intro-overlay__skip:hover {
      background: rgba(255, 255, 255, 0.085);
      border-color: rgba(255, 240, 220, 0.2);
      color: rgba(255, 249, 241, 0.94);
      transform: translateY(-1px);
    }

    @keyframes lessonIntroCaret {
      0%, 49% { opacity: 1; }
      50%, 100% { opacity: 0; }
    }

    @media (max-width: 740px) {
      .lesson-intro-overlay {
        padding: 0.8rem;
      }

      .lesson-intro-overlay__bubble {
        width: min(100%, calc(100vw - 1rem));
        border-radius: 20px;
        padding: 1rem 1rem 1.05rem;
      }

      .lesson-intro-overlay__bubble::after {
        top: 14px;
        left: 18px;
        width: 44px;
      }

      .lesson-intro-overlay__text {
        max-width: 30ch;
        min-height: 5.4lh;
        font-size: 1rem;
        line-height: 1.6;
      }

      .lesson-intro-overlay__skip {
        margin-top: 0.9rem;
        font-size: 0.88rem;
      }
    }
  `;

  document.head.appendChild(style);
}

function mountLessonIntroOverlay(wrapper, lesson) {
  const introText = getLessonIntroText(lesson);
  if (!wrapper || !introText || typeof document === "undefined") return;

  ensureLessonIntroStyles();

  const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  const overlay = document.createElement("div");
  overlay.className = "lesson-intro-overlay";
  overlay.innerHTML = `
    <div class="lesson-intro-overlay__veil"></div>
    <div class="lesson-intro-overlay__bubble" role="dialog" aria-modal="true" aria-label="Introduction de la leçon">
      <p class="lesson-intro-overlay__eyebrow">Entrée dans la leçon</p>
      <p class="lesson-intro-overlay__text" data-role="typewriter" aria-live="polite"></p>
      <button type="button" class="lesson-intro-overlay__skip" data-role="skip">Passer</button>
    </div>
  `;

  const textNode = overlay.querySelector('[data-role="typewriter"]');
  const skipButton = overlay.querySelector('[data-role="skip"]');

  let closed = false;
  let typingTimer = null;
  let closingTimer = null;

  const clearTimers = () => {
    if (typingTimer) window.clearTimeout(typingTimer);
    if (closingTimer) window.clearTimeout(closingTimer);
  };

  const handleEscape = (event) => {
    if (event.key === "Escape") {
      closeOverlay();
    }
  };

  const closeOverlay = () => {
    if (closed) return;
    closed = true;
    clearTimers();
    window.removeEventListener("keydown", handleEscape);
    overlay.classList.remove("is-visible");
    overlay.classList.add("is-leaving");
    window.setTimeout(() => overlay.remove(), 420);
  };

  const scheduleClose = (delay = 1800) => {
  closingTimer = window.setTimeout(closeOverlay, delay);
};

const typeText = () => {
  let index = 0;

  const tick = () => {
    if (closed) return;
    index += 1;
    textNode.textContent = introText.slice(0, index);

    if (index < introText.length) {
      const char = introText[index - 1];
      const delay =
        /[.!?]/.test(char) ? 90 :
        /[,:;]/.test(char) ? 60 :
        char === " " ? 18 :
        34;

      typingTimer = window.setTimeout(tick, delay);
      return;
    }

    overlay.classList.add("is-complete");
    scheduleClose();
  };

  tick();
};

  overlay.addEventListener("click", (event) => {
    if (event.target.closest(".lesson-intro-overlay__bubble")) return;
    closeOverlay();
  });

  skipButton?.addEventListener("click", closeOverlay);
  window.addEventListener("keydown", handleEscape);

  wrapper.appendChild(overlay);

  window.requestAnimationFrame(() => {
    overlay.classList.add("is-visible");

    if (prefersReducedMotion) {
      if (textNode) textNode.textContent = introText;
      overlay.classList.add("is-complete");
      scheduleClose(900);
      return;
    }

    typingTimer = window.setTimeout(typeText, 280);
  });
}

function renderConjugationTables() {
  return `
    <div class="reference-panel-grid">
      <article class="reference-card">
        <h4>narro</h4>
        <div class="table-wrap">
          <table class="reference-table reference-table--compact">
            <thead>
              <tr>
                <th>Personne</th>
                <th>Présent</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>je raconte</td><td>narro</td></tr>
              <tr><td>tu racontes</td><td>narras</td></tr>
              <tr><td>il/elle raconte</td><td>narrat</td></tr>
              <tr><td>nous racontons</td><td>narramus</td></tr>
              <tr><td>vous racontez</td><td>narratis</td></tr>
              <tr><td>ils/elles racontent</td><td>narrant</td></tr>
            </tbody>
          </table>
        </div>
      </article>

      <article class="reference-card">
        <h4>video</h4>
        <div class="table-wrap">
          <table class="reference-table reference-table--compact">
            <thead>
              <tr>
                <th>Personne</th>
                <th>Présent</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>je vois</td><td>video</td></tr>
              <tr><td>tu vois</td><td>vides</td></tr>
              <tr><td>il/elle voit</td><td>videt</td></tr>
              <tr><td>nous voyons</td><td>videmus</td></tr>
              <tr><td>vous voyez</td><td>videtis</td></tr>
              <tr><td>ils/elles voient</td><td>vident</td></tr>
            </tbody>
          </table>
        </div>
      </article>

      <article class="reference-card">
        <h4>audio</h4>
        <div class="table-wrap">
          <table class="reference-table reference-table--compact">
            <thead>
              <tr>
                <th>Personne</th>
                <th>Présent</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>j'entends</td><td>audio</td></tr>
              <tr><td>tu entends</td><td>audis</td></tr>
              <tr><td>il/elle entend</td><td>audit</td></tr>
              <tr><td>nous entendons</td><td>audimus</td></tr>
              <tr><td>vous entendez</td><td>auditis</td></tr>
              <tr><td>ils/elles entendent</td><td>audiunt</td></tr>
            </tbody>
          </table>
        </div>
      </article>
    </div>
  `;
}

function renderDeclensionTables() {
  return `
    <div class="reference-panel-stack">
      <article class="reference-card">
        <h4>Fonctions → cas</h4>
        <div class="table-wrap table-wrap--flat">
          <table class="reference-table reference-table--declension">
            <thead>
              <tr>
                <th>Fonction</th>
                <th>Cas</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Sujet</td><td>Nominatif</td></tr>
              <tr><td>COD</td><td>Accusatif</td></tr>
              <tr><td>C. du nom</td><td>Génitif</td></tr>
              <tr><td>COI</td><td>Datif</td></tr>
              <tr><td>CC</td><td>Ablatif</td></tr>
            </tbody>
          </table>
        </div>
      </article>

      <article class="reference-card">
        <h4>1re décl. · puella</h4>
        <div class="table-wrap table-wrap--flat">
          <table class="reference-table reference-table--declension">
            <thead>
              <tr>
                <th>Cas</th>
                <th>Sg.</th>
                <th>Pl.</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Nom. (sujet)</td><td>-a</td><td>-ae</td></tr>
              <tr><td>Voc. (appel)</td><td>-a</td><td>-ae</td></tr>
              <tr><td>Acc. (COD)</td><td>-am</td><td>-as</td></tr>
              <tr><td>Gén. (CdN)</td><td>-ae</td><td>-arum</td></tr>
              <tr><td>Dat. (COI)</td><td>-ae</td><td>-is</td></tr>
              <tr><td>Abl. (CC)</td><td>-a</td><td>-is</td></tr>
            </tbody>
          </table>
        </div>
      </article>

      <article class="reference-card">
        <h4>2e décl. · type 'dominus' (masc.) / type 'templum' (neutre)</h4>
        <div class="table-wrap table-wrap--flat">
          <table class="reference-table reference-table--declension">
            <thead>
              <tr>
                <th>Cas</th>
                <th>Dominus</th>
                <th>Templum</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Nom. (sujet)</td><td>-us / -i</td><td>-um / -a</td></tr>
              <tr><td>Voc. (appel)</td><td>-e / -i</td><td>-um / -a</td></tr>
              <tr><td>Acc. (COD)</td><td>-um / -os</td><td>-um / -a</td></tr>
              <tr><td>Gén. (CdN)</td><td>-i / -orum</td><td>-i / -orum</td></tr>
              <tr><td>Dat. (COI)</td><td>-o / -is</td><td>-o / -is</td></tr>
              <tr><td>Abl. (CC)</td><td>-o / -is</td><td>-o / -is</td></tr>
            </tbody>
          </table>
        </div>
      </article>
    </div>
  `;
}

function createLessonToolbar({ lesson, onBackDashboard, totalSteps = LESSONS_SPEC.lessonMax }) {
  const shell = document.createElement("div");
  shell.className = "lesson-toolbar-shell";

  const title = `P${lesson.period} · ${lesson.title}`;
  const hasLexicon = Array.isArray(lesson.lexicon) && lesson.lexicon.length > 0;
  const reminderText = lesson.lessonPoint || lesson.objective || "";
  const initialAnswered = 0;
  const initialProgressPercent = totalSteps > 0 ? Math.round((initialAnswered / totalSteps) * 100) : 0;

  shell.innerHTML = `
    <div class="lesson-toolbar">
      <div class="lesson-toolbar__inner">
        <div class="lesson-toolbar__left">
          <button type="button" class="lesson-toolbar__btn lesson-toolbar__btn--back" data-action="back">← Dashboard</button>
          <div class="lesson-toolbar__title-group">
            <p class="lesson-toolbar__kicker">Leçon</p>
            <div class="lesson-toolbar__title" title="${escapeHtml(title)}">${escapeHtml(title)}</div>
          </div>
        </div>
        <div class="lesson-toolbar__right">
          <div class="lesson-toolbar__progress-meta">
            <span class="lesson-toolbar__progress-pill" data-role="step-pill">Étape 1 / ${totalSteps}</span>
            <span class="lesson-toolbar__progress-pill" data-role="answered-pill">0 / ${totalSteps} enregistrés</span>
          </div>
          <div class="lesson-toolbar__progress-track" aria-hidden="true">
            <span class="lesson-toolbar__progress-fill" data-role="progress-fill" style="width: ${initialProgressPercent}%"></span>
          </div>
          <div class="lesson-toolbar__actions">
  <button type="button" class="lesson-toolbar__btn" data-panel="reminder" aria-expanded="false">Rappel</button>
  ${hasLexicon ? `<button type="button" class="lesson-toolbar__btn" data-panel="lexicon" aria-expanded="false">Lexique</button>` : ""}
  <button type="button" class="lesson-toolbar__btn" data-panel="conjugations" aria-expanded="false">Conjugaisons</button>
  <button type="button" class="lesson-toolbar__btn" data-panel="declensions" aria-expanded="false">Déclinaisons</button>
</div>
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
  const progressFill = shell.querySelector('[data-role="progress-fill"]');

  const stepPill = shell.querySelector('[data-role="step-pill"]');
  const answeredPill = shell.querySelector('[data-role="answered-pill"]');

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
  conjugations: `
    <p class="lesson-toolbar__panel-title">Conjugaisons</p>
    ${renderConjugationTables()}
  `,
  declensions: `
    <p class="lesson-toolbar__panel-title">Déclinaisons</p>
    ${renderDeclensionTables()}
  `,
};

  const syncLayout = () => {
    const toolbarHeight = toolbar.offsetHeight || 56;
    panel.style.top = `${toolbarHeight}px`;
    const panelHeight = panel.hidden ? 0 : (panel.offsetHeight || panel.scrollHeight || 0);
    spacer.style.height = `${toolbarHeight + panelHeight + 8}px`;
  };

  const updateProgress = ({ activeIndex = 0, answeredCount = 0, totalCount = totalSteps } = {}) => {
    const safeTotal = Math.max(1, totalCount || totalSteps || 1);
    const safeIndex = Math.max(0, Math.min(activeIndex, safeTotal - 1));
    const percent = Math.max(0, Math.min(100, (answeredCount / safeTotal) * 100));

    if (progressFill) progressFill.style.width = `${percent}%`;
    if (stepPill) stepPill.textContent = `Étape ${safeIndex + 1} / ${safeTotal}`;
    if (answeredPill) answeredPill.textContent = `${answeredCount} / ${safeTotal} enregistrés`;
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
  updateProgress({ activeIndex: 0, answeredCount: 0, totalCount: totalSteps });
  shell.updateProgress = updateProgress;

  return shell;
}

function getOrderedLessons(levelId) {
  return getPeriodsByLevel(levelId).flatMap((period) => getLessonsByPeriod(period.id, levelId));
}

function getAdjacentLesson(levelId, lessonId, offset = 1) {
  const ordered = getOrderedLessons(levelId);
  const index = ordered.findIndex((entry) => entry.id === lessonId);
  if (index < 0) return null;
  const next = ordered[index + offset];
  if (!next) return null;
  return {
    lesson: next,
    path: buildLessonHash({ levelId, lessonId: next.id }),
  };
}

export function renderLessonView({ level, lessonId, progress, onSaveLessonScore, onBackDashboard, onOpenResults, onRestartLesson }) {
  const lesson = getLessonById(lessonId, level?.id);
  const wrapper = document.createElement("section");
  wrapper.className = "stack lesson-view";

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

  const levelId = level?.id || "5e";
  markLessonVisited({
    levelId,
    lessonId: lesson.id,
    periodId: lesson.periodId,
    lessonTitle: lesson.title,
    path: buildLessonHash({ levelId, lessonId: lesson.id }),
  });

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
  const stepEntries = [];
  const stepSections = [];

  let activeStepIndex = 0;
  let lessonPhase = "in_progress";
  let lastAnsweredCount = 0;
  let lastTotalItems = LESSONS_SPEC.lessonMax;

  const lessonToolbar = createLessonToolbar({ lesson, onBackDashboard, totalSteps: LESSONS_SPEC.lessonMax });

  const hero = document.createElement("article");
  hero.className = "card lesson-hero";
  const lessonLexiconPreview = Array.isArray(lesson.lexicon) && lesson.lexicon.length
    ? `
      <div class="lesson-hero__lexicon">
        <p class="lesson-hero__label">Lexique utile</p>
        ${renderLexiconChips(lesson.lexicon)}
      </div>
    `
    : "";
  hero.innerHTML = `
    <div class="lesson-hero__head">
      <div class="lesson-hero__title-block">
        <p class="lesson-hero__eyebrow">${escapeHtml(levelId.toUpperCase())} · Période ${lesson.period}</p>
        <h2>${lesson.title}</h2>
        ${subtitleHtml}
      </div>
      <div class="lesson-hero__scorebox">
        <p class="lesson-hero__label">Validation visée</p>
        <p class="lesson-hero__scoreline">8 / 10 minimum</p>
        <p class="lesson-hero__scoremeta muted">Courant ${savedCurrent}/10 · meilleur ${savedBest}/10</p>
      </div>
    </div>
    <div class="lesson-hero__grid">
      <div class="lesson-hero__panel">
        <p class="lesson-hero__label">Objectif</p>
        <p>${lesson.objective}</p>
      </div>
      <div class="lesson-hero__panel">
        <p class="lesson-hero__label">Point de leçon</p>
        <p>${lesson.lessonPoint || lesson.objective}</p>
      </div>
    </div>
    ${lessonLexiconPreview}
  `;

  const focusBoard = document.createElement("div");
  focusBoard.className = "lesson-focus-board";

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
  finalSummary.className = "card lesson-summary-card";
  finalSummary.hidden = true;

  const getAnsweredCountForStep = (entry) => {
    if (entry.kind === "training") return trainingResults[entry.item.id] ? 1 : 0;
    return productionResults[entry.item.id] ? 1 : 0;
  };

    const updateToolbarProgress = () => {
    lessonToolbar.updateProgress?.({
      activeIndex: 0,
      answeredCount: lastAnsweredCount,
      totalCount: lastTotalItems || stepEntries.length,
    });
  };

    const syncStates = () => {
    const training = computeTrainingProgress(lesson.training, trainingResults);
    const production = computeProductionProgress(lesson.production, productionResults);
    const answeredCount = training.answeredCount + production.answeredCount;
    const totalItems = training.totalItems + production.totalItems;

    if (lessonPhase !== "finished_with_summary") {
      lessonPhase = answeredCount === totalItems ? "ready_to_finish" : "in_progress";
    }

    lastAnsweredCount = answeredCount;
    lastTotalItems = totalItems;

    finishButton.disabled = lessonPhase !== "ready_to_finish";
    resultsButton.disabled = lessonPhase !== "finished_with_summary";
    updateToolbarProgress();

    return { training, production, answeredCount, totalItems };
  };

    const createStepSection = (entry, index, cardNode) => {
    const section = document.createElement("section");
    section.className = "lesson-step is-active";
    section.innerHTML = `
      <div class="lesson-step__meta">
        <span class="lesson-step__badge">${entry.kind === "training" ? "Entraînement" : "Production"}</span>
        <span class="lesson-step__caption">Étape ${index + 1} / ${LESSONS_SPEC.lessonMax}</span>
      </div>
    `;
    section.appendChild(cardNode);
    return section;
  };

  lesson.training.forEach((item) => {
    const entry = { kind: "training", item };
    stepEntries.push(entry);

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
    const section = createStepSection(entry, stepEntries.length - 1, card);
    stepSections.push(section);
    focusBoard.appendChild(section);
  });

  lesson.production.forEach((item) => {
    const entry = { kind: "production", item };
    stepEntries.push(entry);

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
    const section = createStepSection(entry, stepEntries.length - 1, card);
    stepSections.push(section);
    focusBoard.appendChild(section);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const latestTraining = computeTrainingProgress(lesson.training, trainingResults);
    const latestProduction = computeProductionProgress(lesson.production, productionResults);

    if (latestTraining.answeredCount + latestProduction.answeredCount !== latestTraining.totalItems + latestProduction.totalItems) {
      return;
    }

    const saved = onSaveLessonScore({
      levelId,
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
    const nextLessonTarget = getAdjacentLesson(levelId, lesson.id, 1);

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
      <div class="actions-row lesson-summary-actions">
        ${nextLessonTarget ? `<button type="button" class="btn btn-primary" data-action="next-lesson">Leçon suivante → ${nextLessonTarget.lesson.title}</button>` : `<button type="button" class="btn btn-primary" data-action="results">Clore le niveau par les résultats</button>`}
        <button type="button" class="btn btn-secondary" data-action="restart">Rejouer la leçon</button>
        <button type="button" class="btn btn-secondary" data-action="dashboard">Retour dashboard</button>
      </div>
    `;

    if (nextLessonTarget) {
      finalSummary.querySelector('[data-action="next-lesson"]').addEventListener("click", () => {
        window.location.hash = nextLessonTarget.path;
      });
    } else {
      finalSummary.querySelector('[data-action="results"]').addEventListener("click", onOpenResults);
    }

    finalSummary.querySelector('[data-action="restart"]').addEventListener("click", () => {
      if (typeof onRestartLesson === "function") {
        onRestartLesson();
        return;
      }
      window.location.reload();
    });

    finalSummary.querySelector('[data-action="dashboard"]').addEventListener("click", onBackDashboard);

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
    focusBoard,
    form,
    finalSummary,
    feedback,
  );

  mountLessonIntroOverlay(wrapper, lesson);

  return wrapper;
}
