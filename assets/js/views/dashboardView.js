import { periods, getLessonsByPeriod } from "../lessons.js";
import { createPeriodCard } from "../components/periodCard.js";

export function renderDashboardView({ onOpenLesson }) {
  const wrapper = document.createElement("section");
  wrapper.className = "stack";

  const headerCard = document.createElement("article");
  headerCard.className = "card";
  headerCard.innerHTML = `
    <h2>Tableau de bord</h2>
    <p class="muted">Vue structurée des 3 périodes et accès direct aux leçons.</p>
  `;

  const grid = document.createElement("div");
  grid.className = "period-grid";

  periods.forEach((period) => {
    const periodLessons = getLessonsByPeriod(period.id);
    grid.appendChild(createPeriodCard({ period, lessons: periodLessons, onOpenLesson }));
  });

  wrapper.append(headerCard, grid);
  return wrapper;
}
