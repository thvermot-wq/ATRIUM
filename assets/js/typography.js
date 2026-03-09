const NBSP = "\u00A0";
const NNBSP = "\u202F";

export function applyFrenchTypography(value) {
  if (typeof value !== "string" || value.length === 0) return value;

  return value
    .replace(/\s*:/g, `${NBSP}:`)
    .replace(/\s*;/g, `${NNBSP};`)
    .replace(/\s*!/g, `${NNBSP}!`)
    .replace(/\s*\?/g, `${NNBSP}?`);
}
