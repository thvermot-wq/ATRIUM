create extension if not exists pgcrypto;

create table if not exists classes (
  id uuid primary key default gen_random_uuid(),
  teacher_user_id uuid not null,
  name text not null,
  subject text not null default 'latin',
  level_label text,
  class_code text unique,
  created_at timestamptz not null default now()
);

create table if not exists user_profiles (
  user_id uuid primary key,
  role text not null check (role in ('student','teacher')),
  login_id text not null unique,
  display_name text not null,
  class_id uuid references classes(id),
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists teacher_accounts (
  user_id uuid primary key,
  teacher_id text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists student_accounts (
  user_id uuid primary key,
  student_id text not null unique,
  pin_failed_attempts integer not null default 0,
  locked_until timestamptz,
  pin_reset_required boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists student_lesson_progress (
  id uuid primary key default gen_random_uuid(),
  student_user_id uuid not null,
  class_id uuid,
  subject text not null default 'latin',
  level text not null,
  period integer not null,
  lesson_id text not null,
  lesson_title text not null,
  status text not null check (status in ('not_started','in_progress','completed','validated')),
  first_score numeric,
  best_score numeric,
  attempts_count integer not null default 0,
  completed_at timestamptz,
  validated_at timestamptz,
  last_activity_at timestamptz,
  updated_at timestamptz not null default now(),
  unique (student_user_id, lesson_id)
);

create table if not exists auth_admin_audit (
  id bigserial primary key,
  actor_user_id uuid not null,
  action text not null,
  target_user_id uuid,
  meta jsonb,
  created_at timestamptz not null default now()
);

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
