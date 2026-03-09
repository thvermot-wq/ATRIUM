import { LESSONS_SPEC } from "./lessons.js";

export function getLessonStatus(lessonProgress, { lessonMax = LESSONS_SPEC.lessonMax } = {}) {
  if (!lessonProgress?.playedAt) {
    return {
      code: "not_started",
      label: "Non commencée",
      icon: "⚪",
      className: "lesson-status-neutral",
    };
  }

  const currentScore = Number(lessonProgress?.current?.totalScore || 0);
  const bestScore = Number(lessonProgress?.best?.totalScore || 0);

  if (bestScore >= lessonMax) {
    return {
      code: "validated",
      label: "Validée",
      icon: "🟢",
      className: "lesson-status-ok",
    };
  }

  if (currentScore < lessonMax * 0.5 && bestScore < lessonMax * 0.5) {
    return {
      code: "to_retry",
      label: "À reprendre",
      icon: "🔴",
      className: "lesson-status-ko",
    };
  }

  return {
    code: "in_progress",
    label: "En cours",
    icon: "🟠",
    className: "lesson-status-warn",
  };
}
