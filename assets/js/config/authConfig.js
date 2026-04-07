export const AUTH_LOCK_MAX_FAILURES = 5;
export const AUTH_LOCK_MINUTES = 15;

export function toTechnicalEmail({ role, loginId }) {
  const safe = String(loginId || "").trim().toLowerCase();
  return `${role}+${safe}@atrium.local`;
}

export function isValidStudentPin(pin) {
  return /^\d{6}$/.test(String(pin || ""));
}
