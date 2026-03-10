import { LESSONS_SPEC, periods, getLessonsByPeriod } from "./lessons.js";

const LCA_CEFR_LABELS = {
  p1: {
    lower: "Pré-A1 validé – profil LCA",
    upper: "Pré-A1+ validé – profil LCA",
  },
  p2: {
    lower: "Pré-A1+ validé – profil LCA",
    upper: "A1 émergent – profil LCA",
  },
  p3: {
    lower: "A1 émergent validé – profil LCA",
    upper: "A1 réception écrite guidée validé – profil LCA",
  },
};

const SCHOOL_CERTIFICATION = {
  p1: "Certification scolaire : Acclimatation progressive validée",
  p2: "Certification scolaire : Consolidation validée",
  p3: "Certification scolaire : Structuration validée",
};

const DIPLOMA_THRESHOLD = Math.round((LESSONS_SPEC.periodMax * LESSONS_SPEC.validationPercent) / 100);

function safeScore(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return 0;
  return Math.max(0, Math.min(LESSONS_SPEC.periodMax, Math.round(n)));
}

function parsePeriodRef(periodId = "p1") {
  const raw = String(periodId || "p1");
  const namespaced = raw.match(/^([^-]+)-(p[1-3])$/);
  if (namespaced) {
    return { levelId: namespaced[1], basePeriodId: namespaced[2], periodId: raw };
  }

  return { levelId: "5e", basePeriodId: raw, periodId: `5e-${raw}` };
}

export function getBestPeriodScore(periodId, progressState) {
  const ref = parsePeriodRef(periodId);
  return safeScore(progressState?.periods?.[ref.periodId]?.totalScore);
}

export function areAllLessonsCompleted(periodId, progressState) {
  const ref = parsePeriodRef(periodId);
  const periodLessons = getLessonsByPeriod(ref.periodId, ref.levelId);
  if (periodLessons.length === 0) return false;
  return periodLessons.every((lesson) => Boolean(progressState?.lessons?.[lesson.id]?.playedAt));
}

export function isPeriodDiplomaEligible(periodId, progressState) {
  const allLessonsCompleted = areAllLessonsCompleted(periodId, progressState);
  const bestPeriodScore = getBestPeriodScore(periodId, progressState);
  return allLessonsCompleted && bestPeriodScore >= DIPLOMA_THRESHOLD;
}

export function getSchoolCertificationLabel(periodId) {
  const ref = parsePeriodRef(periodId);
  return SCHOOL_CERTIFICATION[ref.basePeriodId] || "Certification scolaire : Validation ATRIUM";
}

export function getLcaCefrProfile(periodId, bestPeriodScore) {
  const ref = parsePeriodRef(periodId);
  const labels = LCA_CEFR_LABELS[ref.basePeriodId];
  if (!labels) return "Profil LCA non disponible";

  const score = safeScore(bestPeriodScore);
  if (score < DIPLOMA_THRESHOLD) return "Profil LCA en cours d'acquisition";
  return score <= 107 ? labels.lower : labels.upper;
}

export function buildDiplomaData(periodId, progressState, studentProfile = {}) {
  const ref = parsePeriodRef(periodId);
  const period = periods.find((entry) => entry.id === ref.periodId);
  if (!period) return null;

  const bestPeriodScore = getBestPeriodScore(ref.periodId, progressState);
  const allLessonsCompleted = areAllLessonsCompleted(ref.periodId, progressState);
  const eligible = allLessonsCompleted && bestPeriodScore >= DIPLOMA_THRESHOLD;

  return {
    periodId: ref.periodId,
    period,
    studentName: studentProfile.studentName?.trim() || "Élève ATRIUM",
    className: studentProfile.className?.trim() || "",
    bestPeriodScore,
    maxPeriodScore: LESSONS_SPEC.periodMax,
    allLessonsCompleted,
    eligible,
    diplomaThreshold: DIPLOMA_THRESHOLD,
    schoolCertification: getSchoolCertificationLabel(ref.periodId),
    lcaCefrProfile: getLcaCefrProfile(ref.periodId, bestPeriodScore),
    issuedAt: new Date().toISOString(),
  };
}
