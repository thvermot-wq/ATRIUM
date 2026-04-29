import { normalizeInput } from "./normalize.js";

const FRENCH_SYNONYMS = {
  "je suis present": ["present", "je suis présente", "présente"],
  "la fille porte le livre": ["une fille porte le livre"],
  "la rose fleurit": ["une rose fleurit"],
  "la maitresse felicite le garcon": ["une maitresse felicite le garcon"],
  "l'esclave porte de l'eau": ["lesclave porte de leau", "l esclave porte de l eau"],
};

function normalizeFr(value, normalize = {}) {
  return normalizeInput(value, {
    toLowerCase: true,
    trim: true,
    collapseSpaces: true,
    stripTrailingPunctuation: true,
    normalizeApostrophe: true,
    ignoreDiacritics: true,
    ...normalize,
  });
}

function stripFrenchArticles(value) {
  return String(value ?? "")
    .replace(/(^|\s)(l'|l’)/giu, " ")
    .replace(/\bde la\b/giu, " ")
    .replace(/(^|\s)de (l'|l’)/giu, " ")
    .replace(/(^|\s)(d'|d’)/giu, " ")
    .replace(/\b(du|au|aux)\b/giu, " ")
    .replace(/\b(le|la|les|un|une|des)\b/giu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function unique(values = []) {
  return [...new Set(values)].filter(Boolean);
}

export function buildAcceptedFrenchAnswers(
  accepted = [],
  { tolerateArticles = true, synonyms = [], normalize = {} } = {},
) {
  const set = new Set();

  [...accepted, ...synonyms].forEach((candidate) => {
    const normalized = normalizeFr(candidate, normalize);
    if (!normalized) return;

    set.add(normalized);

    if (tolerateArticles) {
      set.add(stripFrenchArticles(normalized));
    }

    const lexicalSynonyms = FRENCH_SYNONYMS[normalized] || [];

    lexicalSynonyms.forEach((alt) => {
      const altNormalized = normalizeFr(alt, normalize);
      if (!altNormalized) return;

      set.add(altNormalized);

      if (tolerateArticles) {
        set.add(stripFrenchArticles(altNormalized));
      }
    });
  });

  return unique(Array.from(set));
}

export function normalizeFrenchAnswer(
  value,
  { tolerateArticles = true, normalize = {} } = {},
) {
  const normalized = normalizeFr(value, normalize);
  if (!tolerateArticles) return normalized;
  return stripFrenchArticles(normalized);
}
