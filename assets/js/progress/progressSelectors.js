import { getLessonsByLevel, levels } from "../lessons.js";

function average(values) {
  if (!values.length) return null;
  return Math.round((values.reduce((a, b) => a + b, 0) / values.length) * 100) / 100;
}

function computeRegularity(records) {
  const weeks = new Set();
  records.forEach((row) => {
    if (!row.last_activity_at) return;
    const d = new Date(row.last_activity_at);
    const year = d.getUTCFullYear();
    const firstJan = new Date(Date.UTC(year, 0, 1));
    const week = Math.floor((d - firstJan) / 604800000);
    weeks.add(`${year}-${week}`);
  });
  return weeks.size;
}

function computeCurrentLesson(orderedLessons, recordsMap) {
  const firstNonValidated = orderedLessons.find((lesson) => recordsMap[lesson.id]?.status !== "validated");
  if (!firstNonValidated) return { current_period: "Terminé", current_lesson_id: "Toutes validées" };
  return {
    current_period: `P${firstNonValidated.period}`,
    current_lesson_id: firstNonValidated.id,
  };
}

export function buildTeacherSnapshotRows({ students = [], progressRows = [] }) {
  const byStudent = progressRows.reduce((acc, row) => {
    const key = row.student_user_id;
    if (!acc[key]) acc[key] = [];
    acc[key].push(row);
    return acc;
  }, {});

  return students.map((student) => {
    const rows = byStudent[student.user_id] || [];
    const map = rows.reduce((acc, row) => ({ ...acc, [row.lesson_id]: row }), {});
    const levelId = student.level || levels[0]?.id || "5e";
    const orderedLessons = getLessonsByLevel(levelId);
    const current = computeCurrentLesson(orderedLessons, map);

    const lessonsStarted = rows.filter((x) => x.status !== "not_started").length;
    const lessonsCompleted = rows.filter((x) => ["completed", "validated"].includes(x.status)).length;
    const lessonsValidated = rows.filter((x) => x.status === "validated").length;
    const totalRetries = rows.reduce((sum, x) => sum + Math.max((x.attempts_count || 0) - 1, 0), 0);
    const now = Date.now();
    const activeDays = new Set(
      rows
        .filter((x) => x.last_activity_at)
        .filter((x) => (now - new Date(x.last_activity_at).getTime()) <= 14 * 86400000)
        .map((x) => String(x.last_activity_at).slice(0, 10))
    );

    const lastActivityAt = rows
      .map((x) => x.last_activity_at)
      .filter(Boolean)
      .sort()
      .slice(-1)[0] || null;

    return {
      student_user_id: student.user_id,
      class_id: student.class_id,
      display_name: student.display_name,
      student_id: student.login_id,
      subject: "latin",
      level: levelId,
      ...current,
      lessons_started: lessonsStarted,
      lessons_completed: lessonsCompleted,
      lessons_validated: lessonsValidated,
      average_score: average(rows.map((x) => x.best_score).filter((x) => Number.isFinite(x))),
      average_first_score: average(rows.map((x) => x.first_score).filter((x) => Number.isFinite(x))),
      total_retries: totalRetries,
      work_rhythm_score: activeDays.size,
      regularity_score: computeRegularity(rows),
      last_activity_at: lastActivityAt,
    };
  });
}
