export function createProgressBar({ value = 0, max = 100, label = "Progression" }) {
  const wrapper = document.createElement("div");
  wrapper.className = "progress-wrapper";

  const percent = max > 0 ? Math.max(0, Math.min(100, Math.round((value / max) * 100))) : 0;

  wrapper.innerHTML = `
    <p class="progress-label">${label} : ${value}/${max} (${percent}%)</p>
    <div class="progress-track" role="progressbar" aria-valuenow="${value}" aria-valuemin="0" aria-valuemax="${max}">
      <span class="progress-fill" style="width:${percent}%"></span>
    </div>
  `;

  return wrapper;
}
