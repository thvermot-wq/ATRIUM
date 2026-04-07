export function renderLoginView({ role, onSubmit, onBackHome, message = "" }) {
  const isTeacher = role === "teacher";
  const wrapper = document.createElement("section");
  wrapper.className = "stack";

  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <h2>${isTeacher ? "Connexion enseignant" : "Connexion élève"}</h2>
    <form class="stack" data-role="form">
      <label>${isTeacher ? "Teacher ID" : "Student ID"}
        <input required name="loginId" autocomplete="username" />
      </label>
      <label>${isTeacher ? "Mot de passe" : "PIN (6 chiffres)"}
        <input required name="secret" ${isTeacher ? "type='password' autocomplete='current-password'" : "inputmode='numeric' pattern='\\d{6}' maxlength='6'"} />
      </label>
      <div class="actions-row">
        <button class="btn btn-primary" type="submit">Se connecter</button>
        <button class="btn btn-link" type="button" data-action="back">← Retour</button>
      </div>
      <p class="muted" data-role="message">${message || ""}</p>
    </form>
  `;

  const form = card.querySelector('[data-role="form"]');
  const messageNode = card.querySelector('[data-role="message"]');

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const fd = new FormData(form);
    const loginId = String(fd.get("loginId") || "").trim();
    const secret = String(fd.get("secret") || "").trim();
    const result = await onSubmit({ loginId, secret });
    if (result?.message) messageNode.textContent = result.message;
  });

  card.querySelector('[data-action="back"]').addEventListener("click", onBackHome);
  wrapper.appendChild(card);
  return wrapper;
}
