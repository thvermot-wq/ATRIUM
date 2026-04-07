import { AUTH_LOCK_MAX_FAILURES, isValidStudentPin } from "../config/authConfig.js";
import { getSupabaseClient } from "../supabase/client.js";
import { resolveStudentLogin, resolveTeacherLogin } from "./loginResolver.js";

async function fetchSingle(table, column, value) {
  const supabase = getSupabaseClient();
  if (!supabase) return { data: null, error: new Error("Supabase non configuré") };
  return supabase.from(table).select("*").eq(column, value).maybeSingle();
}

async function loadProfileByUserId(userId) {
  const supabase = getSupabaseClient();
  if (!supabase) return null;
  const { data } = await supabase.from("user_profiles").select("*").eq("user_id", userId).maybeSingle();
  return data || null;
}

export async function getCurrentAuthContext() {
  const supabase = getSupabaseClient();
  if (!supabase) return { session: null, profile: null, error: new Error("Supabase non configuré") };
  const { data: { session } } = await supabase.auth.getSession();
  const profile = session?.user?.id ? await loadProfileByUserId(session.user.id) : null;
  return { session: session || null, profile };
}

export async function signOut() {
  const supabase = getSupabaseClient();
  if (!supabase) return;
  await supabase.auth.signOut();
}

export async function loginTeacher({ teacherId, password }) {
  const supabase = getSupabaseClient();
  if (!supabase) return { ok: false, message: "Supabase non configuré." };

  const login = resolveTeacherLogin(teacherId);
  const accountResp = await fetchSingle("teacher_accounts", "teacher_id", login.loginId);
  if (!accountResp.data) return { ok: false, message: "Identifiant enseignant introuvable." };

  const { error } = await supabase.auth.signInWithPassword({
    email: login.technicalEmail,
    password,
  });

  if (error) return { ok: false, message: "Connexion enseignant refusée." };
  const profile = await loadProfileByUserId(accountResp.data.user_id);
  return { ok: true, profile };
}

export async function teacherSelfRegister({ displayName, teacherId, password, passwordConfirm, activationCode }) {
  const supabase = getSupabaseClient();
  if (!supabase) return { ok: false, message: "Supabase non configuré." };

  const cleanDisplayName = String(displayName || "").trim();
  const cleanTeacherId = String(teacherId || "").trim();
  const cleanActivationCode = String(activationCode || "").trim();

  if (!cleanDisplayName || !cleanTeacherId || !password || !cleanActivationCode) {
    return { ok: false, message: "Tous les champs sont obligatoires." };
  }

  if (String(password) !== String(passwordConfirm || "")) {
    return { ok: false, message: "La confirmation mot de passe ne correspond pas." };
  }

  const { data, error } = await supabase.functions.invoke("auth-admin", {
    body: {
      action: "teacher_self_register",
      display_name: cleanDisplayName,
      teacher_id: cleanTeacherId,
      password,
      activation_code: cleanActivationCode,
    },
  });

  if (error || !data?.ok) {
    return { ok: false, message: data?.error || "Création de compte enseignant impossible." };
  }

  const login = resolveTeacherLogin(cleanTeacherId);
  const { error: signInError } = await supabase.auth.signInWithPassword({
    email: login.technicalEmail,
    password,
  });

  if (signInError) {
    return { ok: true, message: "Compte créé. Connectez-vous avec vos identifiants." };
  }

  const { data: account } = await fetchSingle("teacher_accounts", "teacher_id", login.loginId);
  const profile = account?.user_id ? await loadProfileByUserId(account.user_id) : null;
  return { ok: true, profile, message: "Compte enseignant créé et connexion réussie." };
}

export async function loginStudent({ studentId, pin }) {
  const supabase = getSupabaseClient();
  if (!supabase) return { ok: false, message: "Supabase non configuré." };
  if (!isValidStudentPin(pin)) return { ok: false, message: "PIN invalide (6 chiffres)." };

  const login = resolveStudentLogin(studentId);

  const { data: attemptData, error: attemptError } = await supabase.functions.invoke("auth-admin", {
    body: {
      action: "student_login_attempt",
      student_id: login.loginId,
      pin,
    },
  });

  if (attemptError || !attemptData?.ok) {
    return { ok: false, message: attemptData?.error || "Service de login indisponible." };
  }

  if (attemptData.locked) {
    return { ok: false, message: "Compte temporairement verrouillé. Réessayez plus tard." };
  }

  if (!attemptData.authenticated) {
    const failedCount = Number(attemptData?.failed_attempts || 1);
    return { ok: false, message: `Connexion élève refusée (${failedCount}/${AUTH_LOCK_MAX_FAILURES}).` };
  }

  const { error } = await supabase.auth.signInWithPassword({
    email: login.technicalEmail,
    password: pin,
  });

  if (error) {
    return { ok: false, message: "Échec de création de session élève après authentification." };
  }

  const { data: account } = await fetchSingle("student_accounts", "student_id", login.loginId);
  const profile = account?.user_id ? await loadProfileByUserId(account.user_id) : null;
  return { ok: true, profile };
}

export async function studentSelfRegister({ displayName, studentId, classCode, pin, pinConfirm }) {
  const supabase = getSupabaseClient();
  if (!supabase) return { ok: false, message: "Supabase non configuré." };

  const cleanDisplayName = String(displayName || "").trim();
  const cleanStudentId = String(studentId || "").trim();
  const cleanClassCode = String(classCode || "").trim();

  if (!cleanDisplayName || !cleanStudentId || !cleanClassCode) {
    return { ok: false, message: "Tous les champs sont obligatoires." };
  }

  if (!isValidStudentPin(pin)) {
    return { ok: false, message: "PIN invalide (6 chiffres)." };
  }

  if (String(pin || "") !== String(pinConfirm || "")) {
    return { ok: false, message: "La confirmation PIN ne correspond pas." };
  }

  const { data, error } = await supabase.functions.invoke("auth-admin", {
    body: {
      action: "student_self_register",
      display_name: cleanDisplayName,
      student_id: cleanStudentId,
      class_code: cleanClassCode,
      pin,
    },
  });

  if (error || !data?.ok) {
    return { ok: false, message: data?.error || "Création de compte impossible." };
  }

  const login = resolveStudentLogin(cleanStudentId);
  const { error: signInError } = await supabase.auth.signInWithPassword({
    email: login.technicalEmail,
    password: pin,
  });

  if (signInError) {
    return { ok: true, message: "Compte créé. Connectez-vous avec vos identifiants." };
  }

  const { data: account } = await fetchSingle("student_accounts", "student_id", login.loginId);
  const profile = account?.user_id ? await loadProfileByUserId(account.user_id) : null;
  return { ok: true, profile, message: "Compte créé et connexion réussie." };
}

export async function provisionTechnicalAccount({ actorTeacherId, role, loginId, displayName, classId = null, secret }) {
  const supabase = getSupabaseClient();
  if (!supabase) return { ok: false, message: "Supabase non configuré." };

  if (role === "student" && !isValidStudentPin(secret)) {
    return { ok: false, message: "PIN élève invalide (6 chiffres)." };
  }

  const { data, error } = await supabase.functions.invoke("auth-admin", {
    body: {
      action: "provision_account",
      actor_teacher_id: actorTeacherId,
      role,
      login_id: loginId,
      display_name: displayName,
      class_id: classId,
      secret,
    },
  });

  if (error || !data?.ok) {
    return { ok: false, message: data?.error || "Provisioning refusé." };
  }

  return { ok: true, userId: data.user_id };
}

export async function resetStudentPin({ studentUserId, teacherUserId, provisionalPin }) {
  const supabase = getSupabaseClient();
  if (!supabase) return { ok: false, message: "Supabase non configuré." };
  if (!isValidStudentPin(provisionalPin)) {
    return { ok: false, message: "PIN provisoire invalide." };
  }

  const { data, error } = await supabase.functions.invoke("auth-admin", {
    body: {
      action: "reset_student_pin",
      actor_teacher_id: teacherUserId,
      student_user_id: studentUserId,
      new_pin: provisionalPin,
    },
  });

  if (error || !data?.ok) {
    return { ok: false, message: data?.error || "Échec du reset PIN." };
  }

  return { ok: true };
}
