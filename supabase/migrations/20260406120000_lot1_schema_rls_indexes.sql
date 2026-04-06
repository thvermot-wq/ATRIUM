-- LOT 1 (incrémental) : durcissement schéma/RLS + indexes pour auth minimale et suivi enseignant.
-- Aucun changement pédagogique.

begin;

-- =========================
-- INDEXES utiles (auth + RLS + dashboard + sync)
-- =========================

-- classes: filtrage principal par enseignant
create index if not exists idx_classes_teacher_user_id
  on classes(teacher_user_id);

-- user_profiles: jointures/filtrages enseignant -> élèves de classe
create index if not exists idx_user_profiles_class_role
  on user_profiles(class_id, role);

create index if not exists idx_user_profiles_login_id
  on user_profiles(login_id);

-- student_accounts: lookup login élève, lock window
create index if not exists idx_student_accounts_locked_until
  on student_accounts(locked_until);

create index if not exists idx_student_accounts_student_id
  on student_accounts(student_id);

-- student_lesson_progress: dashboard enseignant + sync/activité
create index if not exists idx_student_lesson_progress_class_id
  on student_lesson_progress(class_id);

create index if not exists idx_student_lesson_progress_student_user_id
  on student_lesson_progress(student_user_id);

create index if not exists idx_student_lesson_progress_last_activity_at
  on student_lesson_progress(last_activity_at desc);

create index if not exists idx_student_lesson_progress_status
  on student_lesson_progress(status);

-- auth_admin_audit: traçabilité par acteur et chronologie
create index if not exists idx_auth_admin_audit_actor_created_at
  on auth_admin_audit(actor_user_id, created_at desc);


-- =========================
-- RLS explicites (réaffirmation des policies cibles)
-- =========================

alter table classes enable row level security;
alter table user_profiles enable row level security;
alter table teacher_accounts enable row level security;
alter table student_accounts enable row level security;
alter table student_lesson_progress enable row level security;
alter table auth_admin_audit enable row level security;

-- classes
 drop policy if exists "classes_teacher_select" on classes;
create policy "classes_teacher_select" on classes
for select using (teacher_user_id = auth.uid());

-- user_profiles
 drop policy if exists "profiles_self_select" on user_profiles;
create policy "profiles_self_select" on user_profiles
for select using (user_id = auth.uid());

 drop policy if exists "profiles_teacher_select_students" on user_profiles;
create policy "profiles_teacher_select_students" on user_profiles
for select using (
  role = 'student'
  and exists (
    select 1
    from classes c
    where c.id = user_profiles.class_id
      and c.teacher_user_id = auth.uid()
  )
);

-- teacher_accounts
 drop policy if exists "teacher_accounts_self_select" on teacher_accounts;
create policy "teacher_accounts_self_select" on teacher_accounts
for select using (user_id = auth.uid());

-- student_accounts
 drop policy if exists "student_accounts_self_select" on student_accounts;
create policy "student_accounts_self_select" on student_accounts
for select using (user_id = auth.uid());

 drop policy if exists "student_accounts_teacher_select" on student_accounts;
create policy "student_accounts_teacher_select" on student_accounts
for select using (
  exists (
    select 1
    from user_profiles up
    join classes c on c.id = up.class_id
    where up.user_id = student_accounts.user_id
      and c.teacher_user_id = auth.uid()
  )
);

 drop policy if exists "student_accounts_self_update" on student_accounts;
create policy "student_accounts_self_update" on student_accounts
for update using (user_id = auth.uid())
with check (user_id = auth.uid());

-- student_lesson_progress
 drop policy if exists "student_progress_self_select" on student_lesson_progress;
create policy "student_progress_self_select" on student_lesson_progress
for select using (student_user_id = auth.uid());

 drop policy if exists "student_progress_self_insert" on student_lesson_progress;
create policy "student_progress_self_insert" on student_lesson_progress
for insert with check (student_user_id = auth.uid());

 drop policy if exists "student_progress_self_update" on student_lesson_progress;
create policy "student_progress_self_update" on student_lesson_progress
for update using (student_user_id = auth.uid())
with check (student_user_id = auth.uid());

 drop policy if exists "student_progress_teacher_select" on student_lesson_progress;
create policy "student_progress_teacher_select" on student_lesson_progress
for select using (
  exists (
    select 1
    from classes c
    where c.id = student_lesson_progress.class_id
      and c.teacher_user_id = auth.uid()
  )
);

-- auth_admin_audit
 drop policy if exists "auth_admin_audit_actor_only_select" on auth_admin_audit;
create policy "auth_admin_audit_actor_only_select" on auth_admin_audit
for select using (actor_user_id = auth.uid());

commit;
