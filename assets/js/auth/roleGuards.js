export function isTeacherProfile(profile) {
  return profile?.role === "teacher";
}

export function isStudentProfile(profile) {
  return profile?.role === "student";
}

export function canAccessTeacherDashboard(profile) {
  return isTeacherProfile(profile) && profile?.is_active !== false;
}
