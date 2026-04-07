import { getSupabaseClient } from "../supabase/client.js";
import { resetStudentPin, provisionTechnicalAccount } from "../auth/authService.js";

export async function fetchTeacherDashboardData(teacherUserId) {
  const supabase = getSupabaseClient();
  if (!supabase) return { students: [], progressRows: [] };

  const { data: classes } = await supabase
    .from("classes")
    .select("id,name,subject,level_label")
    .eq("teacher_user_id", teacherUserId);

  const classIds = (classes || []).map((c) => c.id);
  if (!classIds.length) return { classes: [], students: [], progressRows: [] };

  const { data: students } = await supabase
    .from("user_profiles")
    .select("user_id,class_id,display_name,login_id,level")
    .eq("role", "student")
    .in("class_id", classIds);

  const studentIds = (students || []).map((s) => s.user_id);
  const { data: progressRows } = studentIds.length
    ? await supabase
      .from("student_lesson_progress")
      .select("*")
      .in("student_user_id", studentIds)
    : { data: [] };

  return { classes: classes || [], students: students || [], progressRows: progressRows || [] };
}

export function generateTemporaryPin() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

export async function createStudentAccountByTeacher({
  teacherUserId,
  studentId,
  displayName,
  classId,
  initialPin,
}) {
  return provisionTechnicalAccount({
    actorTeacherId: teacherUserId,
    role: "student",
    loginId: studentId,
    displayName,
    classId,
    secret: initialPin,
  });
}

export async function createTeacherAccountByTeacher({
  teacherUserId,
  teacherId,
  displayName,
  password,
}) {
  return provisionTechnicalAccount({
    actorTeacherId: teacherUserId,
    role: "teacher",
    loginId: teacherId,
    displayName,
    classId: null,
    secret: password,
  });
}

export async function resetStudentPinByTeacher({ teacherUserId, studentUserId }) {
  const pin = generateTemporaryPin();
  const result = await resetStudentPin({
    teacherUserId,
    studentUserId,
    provisionalPin: pin,
  });

  return {
    ...result,
    provisionalPin: result.ok ? pin : null,
  };
}

export function buildSuggestedClassCode({ className, levelLabel }) {
  const base = `${String(className || "").trim()}-${String(levelLabel || "").trim()}`
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 20);
  const suffix = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `${base || "CLASSE"}-${suffix}`;
}

export async function createTeacherClass({ className, levelLabel, subject, classCode }) {
  const supabase = getSupabaseClient();
  if (!supabase) return { ok: false, message: "Supabase non configuré." };

  const payload = {
    action: "teacher_create_class",
    name: String(className || "").trim(),
    level_label: String(levelLabel || "").trim(),
    subject: String(subject || "").trim() || "latin",
    class_code: String(classCode || "").trim(),
  };

  const { data, error } = await supabase.functions.invoke("auth-admin", {
    body: payload,
  });

  if (error || !data?.ok) {
    return { ok: false, message: data?.error || "Création de classe impossible." };
  }

  return { ok: true, classRow: data.class };
}
