import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const admin = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

function json(status: number, payload: Record<string, unknown>) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders },
  });
}

function technicalEmail(role: "teacher" | "student", loginId: string) {
  return `${role}+${String(loginId).trim().toLowerCase()}@atrium.local`;
}

async function getActorFromJwt(req: Request) {
  const jwt = req.headers.get("Authorization")?.replace("Bearer ", "") || "";
  if (!jwt) return null;

  const caller = createClient(supabaseUrl, Deno.env.get("SUPABASE_ANON_KEY") || "", {
    global: { headers: { Authorization: `Bearer ${jwt}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data: userData } = await caller.auth.getUser();
  if (!userData.user) return null;

  const { data: profile } = await admin
    .from("user_profiles")
    .select("user_id,role,class_id")
    .eq("user_id", userData.user.id)
    .maybeSingle();

  return profile || null;
}

async function findStudentAccountByStudentId(studentId: string) {
  return admin
    .from("student_accounts")
    .select("user_id,student_id,pin_failed_attempts,locked_until")
    .eq("student_id", studentId)
    .maybeSingle();
}

async function attemptStudentAuth(studentId: string, pin: string) {
  const email = technicalEmail("student", studentId);

  const response = await fetch(`${supabaseUrl}/auth/v1/token?grant_type=password`, {
    method: "POST",
    headers: {
      apikey: Deno.env.get("SUPABASE_ANON_KEY") || "",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password: pin,
    }),
  });

  if (response.ok) return { ok: true };
  return { ok: false };
}

async function studentLoginAttempt(body: Record<string, unknown>) {
  const studentId = String(body.student_id || "").trim();
  const pin = String(body.pin || "").trim();
  if (!studentId || !/^\d{6}$/.test(pin)) {
    return json(400, { ok: false, error: "Payload invalide." });
  }

  const { data: account } = await findStudentAccountByStudentId(studentId);
  if (!account) return json(404, { ok: false, error: "Student ID introuvable." });

  const lockTime = account.locked_until ? new Date(account.locked_until).getTime() : 0;
  if (lockTime > Date.now()) {
    return json(200, {
      ok: true,
      authenticated: false,
      locked: true,
      locked_until: account.locked_until,
      failed_attempts: Number(account.pin_failed_attempts || 0),
      remaining_failed_attempts: Math.max(0, 5 - Number(account.pin_failed_attempts || 0)),
    });
  }

  const authResult = await attemptStudentAuth(studentId, pin);

  if (!authResult.ok) {
    const nextFailed = Number(account.pin_failed_attempts || 0) + 1;
    let lockedUntil: string | null = null;

    if (nextFailed >= 5) {
      lockedUntil = new Date(Date.now() + 15 * 60_000).toISOString();
    }

    await admin
      .from("student_accounts")
      .update({
        pin_failed_attempts: nextFailed,
        locked_until: lockedUntil,
      })
      .eq("user_id", account.user_id);

    return json(200, {
      ok: true,
      authenticated: false,
      locked: Boolean(lockedUntil),
      locked_until: lockedUntil,
      failed_attempts: nextFailed,
      remaining_failed_attempts: Math.max(0, 5 - nextFailed),
    });
  }

  await admin
    .from("student_accounts")
    .update({
      pin_failed_attempts: 0,
      locked_until: null,
    })
    .eq("user_id", account.user_id);

  return json(200, {
    ok: true,
    authenticated: true,
    locked: false,
    failed_attempts: 0,
    remaining_failed_attempts: 5,
  });
}

async function studentSelfRegister(body: Record<string, unknown>) {
  const displayName = String(body.display_name || "").trim();
  const studentId = String(body.student_id || "").trim();
  const classCode = String(body.class_code || "").trim();
  const pin = String(body.pin || "").trim();

  if (!displayName || !studentId || !classCode || !/^\d{6}$/.test(pin)) {
    return json(400, { ok: false, error: "Payload invalide." });
  }

  const { data: existingStudent } = await admin
    .from("student_accounts")
    .select("user_id")
    .eq("student_id", studentId)
    .maybeSingle();

  if (existingStudent) {
    return json(409, { ok: false, error: "Student ID déjà utilisé." });
  }

  const { data: classRow } = await admin
    .from("classes")
    .select("id")
    .eq("class_code", classCode)
    .maybeSingle();

  if (!classRow) {
    return json(404, { ok: false, error: "Code classe introuvable." });
  }

  const email = technicalEmail("student", studentId);

  const { data: created, error: createErr } = await admin.auth.admin.createUser({
    email,
    password: pin,
    email_confirm: true,
    user_metadata: {
      role: "student",
      login_id: studentId,
      display_name: displayName,
    },
  });

  if (createErr || !created.user) {
    return json(400, { ok: false, error: createErr?.message || "Création Auth impossible." });
  }

  const userId = created.user.id;

  const { error: profileError } = await admin.from("user_profiles").insert({
    user_id: userId,
    role: "student",
    login_id: studentId,
    display_name: displayName,
    class_id: classRow.id,
    is_active: true,
  });

  if (profileError) {
    await admin.auth.admin.deleteUser(userId);
    return json(400, { ok: false, error: profileError.message || "Création profil impossible." });
  }

  const { error: accountError } = await admin.from("student_accounts").insert({
    user_id: userId,
    student_id: studentId,
    pin_failed_attempts: 0,
    locked_until: null,
    pin_reset_required: false,
  });

  if (accountError) {
    await admin.from("user_profiles").delete().eq("user_id", userId);
    await admin.auth.admin.deleteUser(userId);
    return json(400, { ok: false, error: accountError.message || "Création compte élève impossible." });
  }

  return json(200, { ok: true, user_id: userId, class_id: classRow.id });
}

async function teacherSelfRegister(body: Record<string, unknown>) {
  const displayName = String(body.display_name || "").trim();
  const teacherId = String(body.teacher_id || "").trim();
  const password = String(body.password || "");
  const activationCode = String(body.activation_code || "").trim().toUpperCase();

  if (!displayName || !teacherId || !password || !activationCode) {
    return json(400, { ok: false, error: "Payload invalide." });
  }

  const { data: activation } = await admin
    .from("teacher_activation_codes")
    .select("code,used_at")
    .eq("code", activationCode)
    .maybeSingle();

  if (!activation) return json(404, { ok: false, error: "Code d'activation introuvable." });
  if (activation.used_at) return json(409, { ok: false, error: "Code d'activation déjà utilisé." });

  const { data: existingTeacher } = await admin
    .from("teacher_accounts")
    .select("user_id")
    .eq("teacher_id", teacherId)
    .maybeSingle();

  if (existingTeacher) return json(409, { ok: false, error: "Teacher ID déjà utilisé." });

  const email = technicalEmail("teacher", teacherId);
  const { data: created, error: createErr } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: {
      role: "teacher",
      login_id: teacherId,
      display_name: displayName,
    },
  });

  if (createErr || !created.user) {
    return json(400, { ok: false, error: createErr?.message || "Création Auth impossible." });
  }

  const userId = created.user.id;

  const { error: profileError } = await admin.from("user_profiles").insert({
    user_id: userId,
    role: "teacher",
    login_id: teacherId,
    display_name: displayName,
    class_id: null,
    is_active: true,
  });

  if (profileError) {
    await admin.auth.admin.deleteUser(userId);
    return json(400, { ok: false, error: profileError.message || "Création profil impossible." });
  }

  const { error: teacherAccountError } = await admin.from("teacher_accounts").insert({
    user_id: userId,
    teacher_id: teacherId,
  });

  if (teacherAccountError) {
    await admin.from("user_profiles").delete().eq("user_id", userId);
    await admin.auth.admin.deleteUser(userId);
    return json(400, { ok: false, error: teacherAccountError.message || "Création compte enseignant impossible." });
  }

  const { error: activationUpdateError } = await admin
    .from("teacher_activation_codes")
    .update({
      used_by_user_id: userId,
      used_teacher_id: teacherId,
      used_at: new Date().toISOString(),
    })
    .eq("code", activationCode)
    .is("used_at", null);

  if (activationUpdateError) {
    await admin.from("teacher_accounts").delete().eq("user_id", userId);
    await admin.from("user_profiles").delete().eq("user_id", userId);
    await admin.auth.admin.deleteUser(userId);
    return json(400, { ok: false, error: "Impossible de valider le code d'activation." });
  }

  return json(200, { ok: true, user_id: userId });
}

async function provisionAccount(body: Record<string, unknown>, actor: { user_id: string; role: string; class_id?: string | null }) {
  const actorTeacherId = String(body.actor_teacher_id || "").trim();
  if (actorTeacherId && actorTeacherId !== actor.user_id) return json(403, { ok: false, error: "actor_teacher_id invalide." });

  if (actor.role !== "teacher") return json(403, { ok: false, error: "Seul un enseignant peut provisionner." });

  const role = String(body.role || "");
  const loginId = String(body.login_id || "").trim();
  const displayName = String(body.display_name || "").trim();
  const classId = body.class_id ? String(body.class_id) : null;
  const secret = String(body.secret || "");

  if (!loginId || !displayName || !secret) return json(400, { ok: false, error: "Données manquantes." });
  if (!["student", "teacher"].includes(role)) return json(400, { ok: false, error: "Rôle invalide." });
  if (role === "student" && !/^\d{6}$/.test(secret)) return json(400, { ok: false, error: "PIN invalide." });

  if (role === "teacher") {
    if (Deno.env.get("ALLOW_TEACHER_PROVISIONING") !== "true") {
      return json(403, { ok: false, error: "Création de compte enseignant non autorisée." });
    }
  }

  if (role === "student") {
    if (!classId) return json(400, { ok: false, error: "class_id requis pour un élève." });

    const { data: classRow } = await admin
      .from("classes")
      .select("id")
      .eq("id", classId)
      .eq("teacher_user_id", actor.user_id)
      .maybeSingle();

    if (!classRow) {
      return json(403, { ok: false, error: "Classe non autorisée pour cet enseignant." });
    }
  }

  const email = technicalEmail(role as "student" | "teacher", loginId);

  const { data: created, error: createErr } = await admin.auth.admin.createUser({
    email,
    password: secret,
    email_confirm: true,
    user_metadata: {
      role,
      login_id: loginId,
      display_name: displayName,
    },
  });

  if (createErr || !created.user) return json(400, { ok: false, error: createErr?.message || "Création Auth impossible." });

  const userId = created.user.id;

  await admin.from("user_profiles").insert({
    user_id: userId,
    role,
    login_id: loginId,
    display_name: displayName,
    class_id: role === "student" ? classId : null,
    is_active: true,
  });

  if (role === "teacher") {
    await admin.from("teacher_accounts").insert({ user_id: userId, teacher_id: loginId });
  } else {
    await admin.from("student_accounts").insert({
      user_id: userId,
      student_id: loginId,
      pin_failed_attempts: 0,
      locked_until: null,
      pin_reset_required: false,
    });
  }

  return json(200, { ok: true, user_id: userId });
}

async function teacherCreateClass(body: Record<string, unknown>, actor: { user_id: string; role: string }) {
  if (actor.role !== "teacher") return json(403, { ok: false, error: "Seul un enseignant peut créer une classe." });

  const name = String(body.name || "").trim();
  const levelLabel = String(body.level_label || "").trim();
  const subject = String(body.subject || "").trim() || "latin";
  const classCode = String(body.class_code || "").trim().toUpperCase();

  if (!name || !levelLabel || !classCode) {
    return json(400, { ok: false, error: "Données manquantes." });
  }

  const { data: existing } = await admin
    .from("classes")
    .select("id")
    .eq("class_code", classCode)
    .maybeSingle();

  if (existing) return json(409, { ok: false, error: "Code classe déjà utilisé." });

  const { data: inserted, error } = await admin
    .from("classes")
    .insert({
      teacher_user_id: actor.user_id,
      name,
      subject,
      level_label: levelLabel,
      class_code: classCode,
    })
    .select("id,name,subject,level_label,class_code,teacher_user_id")
    .maybeSingle();

  if (error || !inserted) {
    return json(400, { ok: false, error: error?.message || "Création classe impossible." });
  }

  await admin.from("auth_admin_audit").insert({
    actor_user_id: actor.user_id,
    action: "teacher_create_class",
    target_user_id: actor.user_id,
    meta: { class_id: inserted.id, class_code: inserted.class_code },
  });

  return json(200, { ok: true, class: inserted });
}

async function resetStudentPin(body: Record<string, unknown>, actor: { user_id: string; role: string }) {
  const actorTeacherId = String(body.actor_teacher_id || "").trim();
  if (actorTeacherId && actorTeacherId !== actor.user_id) return json(403, { ok: false, error: "actor_teacher_id invalide." });
  if (actor.role !== "teacher") return json(403, { ok: false, error: "Interdit." });

  const studentUserId = String(body.student_user_id || "").trim();
  const newPin = String(body.new_pin || "").trim();
  if (!studentUserId || !/^\d{6}$/.test(newPin)) {
    return json(400, { ok: false, error: "Payload invalide." });
  }

  const { data: teacherClasses } = await admin
    .from("classes")
    .select("id")
    .eq("teacher_user_id", actor.user_id);

  const classIds = (teacherClasses || []).map((c) => c.id);
  const { data: studentProfile } = await admin
    .from("user_profiles")
    .select("class_id")
    .eq("user_id", studentUserId)
    .maybeSingle();

  if (!studentProfile || !classIds.includes(studentProfile.class_id)) {
    return json(403, { ok: false, error: "Élève hors périmètre enseignant." });
  }

  const { data: studentAccount } = await admin
    .from("student_accounts")
    .select("student_id")
    .eq("user_id", studentUserId)
    .maybeSingle();

  if (!studentAccount) return json(404, { ok: false, error: "Compte élève introuvable." });

  const email = technicalEmail("student", studentAccount.student_id);
  const { data: usersData } = await admin.auth.admin.listUsers();
  const target = usersData.users.find((u) => u.email?.toLowerCase() === email.toLowerCase());
  if (!target) return json(404, { ok: false, error: "Compte Auth introuvable." });

  const { error: updateAuthError } = await admin.auth.admin.updateUserById(target.id, {
    password: newPin,
    user_metadata: {
      ...(target.user_metadata || {}),
      pin_reset_required: true,
      pin_reset_at: new Date().toISOString(),
    },
  });

  if (updateAuthError) return json(400, { ok: false, error: updateAuthError.message });

  await admin.from("student_accounts").update({
    pin_failed_attempts: 0,
    locked_until: null,
    pin_reset_required: true,
  }).eq("user_id", studentUserId);

  await admin.from("auth_admin_audit").insert({
    actor_user_id: actor.user_id,
    action: "reset_student_pin",
    target_user_id: studentUserId,
    meta: { method: "supabase_admin_update_user" },
  });

  return json(200, { ok: true });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") return json(405, { ok: false, error: "Method Not Allowed" });
  if (!supabaseUrl || !serviceRoleKey) return json(500, { ok: false, error: "Config service role absente." });

  const body = await req.json().catch(() => ({}));
  const action = String(body.action || "");

  if (action === "student_login_attempt") return studentLoginAttempt(body);
  if (action === "student_self_register") return studentSelfRegister(body);
  if (action === "teacher_self_register") return teacherSelfRegister(body);

  const actor = await getActorFromJwt(req);
  if (!actor) return json(401, { ok: false, error: "JWT invalide." });

  if (action === "provision_account") return provisionAccount(body, actor);
  if (action === "teacher_create_class") return teacherCreateClass(body, actor);
  if (action === "reset_student_pin") return resetStudentPin(body, actor);

  return json(400, { ok: false, error: "Action inconnue." });
});
