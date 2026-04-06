import { getSupabaseClient } from "../supabase/client.js";
import { resetStudentPin, provisionTechnicalAccount } from "../auth/authService.js";

export async function fetchTeacherDashboardData(teacherUserId) {
  const supabase = getSupabaseClient();
  if (!supabase) return { students: [], progressRows: [] };

  const { data: classes } = await supabase
    .from("classes")
    .select("id")
    .eq("teacher_user_id", teacherUserId);

  const classIds = (classes || []).map((c) => c.id);
  if (!classIds.length) return { students: [], progressRows: [] };

  const { data: students } = await supabase
    .from("user_profiles")
    .select("user_id,class_id,display_name,login_id")
    .eq("role", "student")
    .in("class_id", classIds);

  const studentIds = (students || []).map((s) => s.user_id);
  const { data: progressRows } = studentIds.length
    ? await supabase
      .from("student_lesson_progress")
      .select("*")
      .in("student_user_id", studentIds)
    : { data: [] };

  return { students: students || [], progressRows: progressRows || [] };
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
