import { toTechnicalEmail } from "../config/authConfig.js";

export function resolveStudentLogin(studentId) {
  const loginId = String(studentId || "").trim();
  return {
    loginId,
    role: "student",
    technicalEmail: toTechnicalEmail({ role: "student", loginId }),
  };
}

export function resolveTeacherLogin(teacherId) {
  const loginId = String(teacherId || "").trim();
  return {
    loginId,
    role: "teacher",
    technicalEmail: toTechnicalEmail({ role: "teacher", loginId }),
  };
}
