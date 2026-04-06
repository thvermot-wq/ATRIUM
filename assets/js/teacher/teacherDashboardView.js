import { buildTeacherSnapshotRows } from "../progress/progressSelectors.js";

function formatNumber(value) {
  return Number.isFinite(value) ? String(value) : "—";
}

export function renderTeacherDashboardView({ students, progressRows, onResetPin, onBackHome }) {
  const rows = buildTeacherSnapshotRows({ students, progressRows });
  const wrapper = document.createElement("section");
  wrapper.className = "stack";

  const controls = document.createElement("article");
  controls.className = "card";
  controls.innerHTML = `
    <h2>Dashboard enseignant</h2>
    <p class="muted">Synthèse de progression par élève.</p>
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
            <td>${row.level || "—"}</td>
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

  let activeRows = [...rows];
  renderTable(activeRows);

  controls.querySelector('[data-action="home"]').addEventListener("click", onBackHome);
  controls.querySelector('[data-sort="name"]').addEventListener("click", () => {
    activeRows.sort((a, b) => String(a.display_name).localeCompare(String(b.display_name), "fr"));
    renderTable(activeRows);
  });
  controls.querySelector('[data-sort="activity"]').addEventListener("click", () => {
    activeRows.sort((a, b) => String(b.last_activity_at || "").localeCompare(String(a.last_activity_at || "")));
    renderTable(activeRows);
  });
  controls.querySelector('[data-sort="progress"]').addEventListener("click", () => {
    activeRows.sort((a, b) => (b.lessons_validated || 0) - (a.lessons_validated || 0));
    renderTable(activeRows);
  });
  controls.querySelector('[data-sort="average"]').addEventListener("click", () => {
    activeRows.sort((a, b) => (b.average_score || 0) - (a.average_score || 0));
    renderTable(activeRows);
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
