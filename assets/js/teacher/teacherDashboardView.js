import { buildTeacherSnapshotRows } from "../progress/progressSelectors.js";

function formatNumber(value) {
  return Number.isFinite(value) ? String(value) : "—";
}

function normalizeValue(value) {
  return String(value || "").trim();
}

export function renderTeacherDashboardView({ classes = [], students, progressRows, onResetPin, onBackHome }) {
  const rows = buildTeacherSnapshotRows({ students, progressRows });
  const classById = new Map((classes || []).map((entry) => [entry.id, entry]));

  const enrichedRows = rows.map((row) => {
    const classMeta = classById.get(row.class_id) || null;
    return {
      ...row,
      class_name: classMeta?.name || "",
      class_subject: classMeta?.subject || row.subject || "latin",
      class_level: classMeta?.level_label || row.level || "",
    };
  });

  const wrapper = document.createElement("section");
  wrapper.className = "stack";

  const controls = document.createElement("article");
  controls.className = "card";

  const classOptions = ["", ...new Set(enrichedRows.map((row) => normalizeValue(row.class_name)).filter(Boolean))];
  const subjectOptions = ["", ...new Set(enrichedRows.map((row) => normalizeValue(row.class_subject)).filter(Boolean))];
  const levelOptions = ["", ...new Set(enrichedRows.map((row) => normalizeValue(row.class_level)).filter(Boolean))];

  controls.innerHTML = `
    <h2>Dashboard enseignant</h2>
    <p class="muted">Synthèse de progression par élève.</p>

    <div class="actions-row" style="align-items:flex-end; flex-wrap:wrap; gap:0.75rem;">
      <label>Classe
        <select data-filter="class">
          ${classOptions.map((value) => `<option value="${value}">${value || "Toutes"}</option>`).join("")}
        </select>
      </label>
      <label>Matière
        <select data-filter="subject">
          ${subjectOptions.map((value) => `<option value="${value}">${value || "Toutes"}</option>`).join("")}
        </select>
      </label>
      <label>Niveau
        <select data-filter="level">
          ${levelOptions.map((value) => `<option value="${value}">${value || "Tous"}</option>`).join("")}
        </select>
      </label>
    </div>

    <div class="actions-row">
      <button class="btn btn-secondary" data-sort="name">Tri nom</button>
      <button class="btn btn-secondary" data-sort="activity">Tri dernière activité</button>
      <button class="btn btn-secondary" data-sort="progress">Tri progression</button>
      <button class="btn btn-secondary" data-sort="average">Tri moyenne</button>
      <button class="btn btn-link" data-action="home">← Retour</button>
    </div>
  `;

  const tableCard = document.createElement("article");
  tableCard.className = "card";
  const table = document.createElement("table");
  table.className = "teacher-table";

  const activeFilters = {
    class: "",
    subject: "",
    level: "",
  };

  let activeRows = [...enrichedRows];

  function applyFilters(inputRows) {
    return inputRows.filter((row) => {
      if (activeFilters.class && normalizeValue(row.class_name) !== activeFilters.class) return false;
      if (activeFilters.subject && normalizeValue(row.class_subject) !== activeFilters.subject) return false;
      if (activeFilters.level && normalizeValue(row.class_level) !== activeFilters.level) return false;
      return true;
    });
  }

  function renderTable(nextRows) {
    table.innerHTML = `
      <thead><tr>
        <th>Élève</th><th>Student ID</th><th>Niveau</th><th>Période</th><th>Leçon en cours</th>
        <th>Terminées</th><th>Validées</th><th>Moyenne</th><th>1er essai</th>
        <th>Reprises</th><th>Rythme</th><th>Régularité</th><th>Dernière activité</th><th>PIN</th>
      </tr></thead>
      <tbody>
        ${nextRows.map((row) => `
          <tr>
            <td>${row.display_name || "—"}</td>
            <td>${row.student_id || "—"}</td>
            <td>${row.class_level || row.level || "—"}</td>
            <td>${row.current_period || "—"}</td>
            <td>${row.current_lesson_id || "—"}</td>
            <td>${formatNumber(row.lessons_completed)}</td>
            <td>${formatNumber(row.lessons_validated)}</td>
            <td>${formatNumber(row.average_score)}</td>
            <td>${formatNumber(row.average_first_score)}</td>
            <td>${formatNumber(row.total_retries)}</td>
            <td>${formatNumber(row.work_rhythm_score)}</td>
            <td>${formatNumber(row.regularity_score)}</td>
            <td>${row.last_activity_at ? new Date(row.last_activity_at).toLocaleString("fr-FR") : "—"}</td>
            <td><button type="button" class="btn btn-link" data-reset-pin="${row.student_user_id}">Reset PIN</button></td>
          </tr>
        `).join("")}
      </tbody>
    `;
  }

  function refreshTable() {
    renderTable(applyFilters(activeRows));
  }

  refreshTable();

  controls.querySelector('[data-action="home"]').addEventListener("click", onBackHome);

  controls.querySelector('[data-filter="class"]').addEventListener("change", (event) => {
    activeFilters.class = normalizeValue(event.target.value);
    refreshTable();
  });

  controls.querySelector('[data-filter="subject"]').addEventListener("change", (event) => {
    activeFilters.subject = normalizeValue(event.target.value);
    refreshTable();
  });

  controls.querySelector('[data-filter="level"]').addEventListener("change", (event) => {
    activeFilters.level = normalizeValue(event.target.value);
    refreshTable();
  });

  controls.querySelector('[data-sort="name"]').addEventListener("click", () => {
    activeRows.sort((a, b) => String(a.display_name).localeCompare(String(b.display_name), "fr"));
    refreshTable();
  });

  controls.querySelector('[data-sort="activity"]').addEventListener("click", () => {
    activeRows.sort((a, b) => String(b.last_activity_at || "").localeCompare(String(a.last_activity_at || "")));
    refreshTable();
  });

  controls.querySelector('[data-sort="progress"]').addEventListener("click", () => {
    activeRows.sort((a, b) => (b.lessons_validated || 0) - (a.lessons_validated || 0));
    refreshTable();
  });

  controls.querySelector('[data-sort="average"]').addEventListener("click", () => {
    activeRows.sort((a, b) => (b.average_score || 0) - (a.average_score || 0));
    refreshTable();
  });

  table.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-reset-pin]");
    if (!button) return;
    const studentUserId = button.getAttribute("data-reset-pin");
    const pin = await onResetPin(studentUserId);
    if (pin) {
      alert(`PIN provisoire (affiché une seule fois) : ${pin}`);
    }
  });

  tableCard.appendChild(table);
  wrapper.append(controls, tableCard);
  return wrapper;
}
