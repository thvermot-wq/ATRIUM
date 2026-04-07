create table if not exists teacher_activation_codes (
  code text primary key,
  created_at timestamptz not null default now(),
  used_at timestamptz,
  used_by_user_id uuid,
  used_teacher_id text
);

create index if not exists idx_teacher_activation_codes_used_at
  on teacher_activation_codes(used_at);
