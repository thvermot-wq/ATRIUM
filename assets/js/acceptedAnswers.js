import { normalizeInput } from "./normalize.js";

const FRENCH_SYNONYMS = {
  "je suis present": ["present", "je suis présente", "présente"],
  "la fille porte le livre": ["une fille porte le livre"],
  "la rose fleurit": ["une rose fleurit"],
  "la maitresse felicite le garcon": ["une maitresse felicite le garcon"],
  "l'esclave porte de l'eau": ["lesclave porte de leau", "l esclave porte de l eau"],
};

function normalizeFr(value) {
  return normalizeInput(value, {
    toLowerCase: true,
    trim: true,
    collapseSpaces: true,
    stripTrailingPunctuation: true,
    normalizeApostrophe: true,
    ignoreDiacritics: true,
  });
}

function stripLeadingArticle(value) {
  return value.replace(/^(l'|l |le |la |les |un |une |des )/u, "").trim();
}

export function buildAcceptedFrenchAnswers(accepted = [], { tolerateArticles = true, synonyms = [] } = {}) {
  const set = new Set();

  [...accepted, ...synonyms].forEach((candidate) => {
    const normalized = normalizeFr(candidate);
    if (!normalized) return;

    set.add(normalized);

    if (tolerateArticles) {
      set.add(stripLeadingArticle(normalized));
    }

    const lexicalSynonyms = FRENCH_SYNONYMS[normalized] || [];
    lexicalSynonyms.forEach((alt) => {
      const altNormalized = normalizeFr(alt);
      if (!altNormalized) return;
      set.add(altNormalized);
      if (tolerateArticles) {
        set.add(stripLeadingArticle(altNormalized));
      }
    });
  });

  return Array.from(set).filter(Boolean);
}

export function normalizeFrenchAnswer(value, { tolerateArticles = true } = {}) {
  const normalized = normalizeFr(value);
  if (!tolerateArticles) return normalized;
  return stripLeadingArticle(normalized);
}
