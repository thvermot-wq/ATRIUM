export function renderHomeView() {
  const section = document.createElement("section");
  section.className = "card";
  section.innerHTML = `
    <h2>ATRIUM initialisé</h2>
    <p>Structure modulaire en place. Logique métier à venir.</p>
  `;
  return section;
}
