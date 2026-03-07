// Normalisation minimale des réponses libres (stub).
export function normalizeAnswer(value = "") {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/gi, " ")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}
