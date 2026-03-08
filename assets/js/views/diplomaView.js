import { applyFrenchTypography } from "../typography.js";
import { buildDiplomaData } from "../diploma.js";

function formatDiplomaDate(value) {
  const date = new Date(value || Date.now());
  return date.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function createIneligibleView({ diplomaData, onBackDashboard }) {
  const card = document.createElement("article");
  card.className = "card diploma-unavailable";
  card.innerHTML = `
    <h2>Diplôme indisponible pour le moment</h2>
    <p class="muted">Le diplôme est généré uniquement quand toutes les leçons de la période sont terminées et que le meilleur score atteint au moins ${diplomaData.diplomaThreshold}/${diplomaData.maxPeriodScore}.</p>
    <p><strong>Période :</strong> ${applyFrenchTypography(`${diplomaData.period.title} · ${diplomaData.period.level}`)}</p>
    <p><strong>Leçons terminées :</strong> ${diplomaData.allLessonsCompleted ? "oui" : "non"}</p>
    <p><strong>Meilleur score de période :</strong> ${diplomaData.bestPeriodScore}/${diplomaData.maxPeriodScore}</p>
    <div class="actions-row">
      <button type="button" class="btn btn-primary" data-action="dashboard">Retour au dashboard</button>
    </div>
  `;

  card.querySelector('[data-action="dashboard"]').addEventListener("click", onBackDashboard);
  return card;
}

function createDiplomaCertificate({ diplomaData, onBackDashboard }) {
  const wrapper = document.createElement("section");
  wrapper.className = "stack diploma-view";

  const actions = document.createElement("article");
  actions.className = "card diploma-actions";
  actions.innerHTML = `
    <h2>Diplôme de période</h2>
    <p class="muted">Document imprimable : utilisez “Imprimer / Enregistrer en PDF”.</p>
    <div class="actions-row">
      <button type="button" class="btn btn-primary" data-action="print">Imprimer / Enregistrer en PDF</button>
      <button type="button" class="btn btn-secondary" data-action="dashboard">Retour au dashboard</button>
    </div>
  `;

  actions.querySelector('[data-action="print"]').addEventListener("click", () => window.print());
  actions.querySelector('[data-action="dashboard"]').addEventListener("click", onBackDashboard);

  const certificate = document.createElement("article");
  certificate.className = "diploma-certificate";
  certificate.innerHTML = `
    <div class="diploma-ornament" aria-hidden="true"></div>
    <p class="diploma-brand">ATRIUM</p>
    <h3 class="diploma-title">Diplôme de progression</h3>
    <p class="diploma-student">${applyFrenchTypography(diplomaData.studentName)}</p>
    ${diplomaData.className ? `<p class="diploma-class">Classe : ${applyFrenchTypography(diplomaData.className)}</p>` : ""}

    <p class="diploma-text">Ce diplôme certifie que <strong>${applyFrenchTypography(diplomaData.studentName)}</strong><br />a validé la ${applyFrenchTypography(`${diplomaData.period.title} – ${diplomaData.period.level}`)}<br />avec un score de <strong>${diplomaData.bestPeriodScore} / ${diplomaData.maxPeriodScore}</strong>.</p>

    <div class="diploma-grid">
      <p><strong>${applyFrenchTypography(diplomaData.schoolCertification)}</strong></p>
      <p><strong>Référencement CECRL adapté – profil LCA : ${applyFrenchTypography(diplomaData.lcaCefrProfile)}</strong></p>
    </div>

    <div class="diploma-footer">
      <p>Date du diplôme : ${formatDiplomaDate(diplomaData.issuedAt)}</p>
      <p>Responsable : Thibault Vermot</p>
    </div>

    <p class="diploma-copy">© 2026 Thibault Vermot. Tous droits réservés.</p>
  `;

  wrapper.append(actions, certificate);
  return wrapper;
}

export function renderDiplomaView({ periodId, progress, saveStatus, onBackDashboard }) {
  const wrapper = document.createElement("section");
  wrapper.className = "stack diploma-wrapper";

  const diplomaData = buildDiplomaData(periodId, progress, saveStatus);

  if (!diplomaData) {
    const missing = document.createElement("article");
    missing.className = "card";
    missing.innerHTML = `
      <h2>Période introuvable</h2>
      <p>Le diplôme demandé ne correspond à aucune période.</p>
      <button type="button" class="btn btn-primary" data-action="dashboard">Retour au dashboard</button>
    `;
    missing.querySelector('[data-action="dashboard"]').addEventListener("click", onBackDashboard);
    wrapper.appendChild(missing);
    return wrapper;
  }

  if (!diplomaData.eligible) {
    wrapper.appendChild(createIneligibleView({ diplomaData, onBackDashboard }));
    return wrapper;
  }

  wrapper.appendChild(createDiplomaCertificate({ diplomaData, onBackDashboard }));
  return wrapper;
}
