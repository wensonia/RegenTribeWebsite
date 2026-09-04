-- Track where each signup came from, and create the missing Agent Program table.
--
-- The Agent Program form has been inserting into agent_program_signups, which
-- was never created — every submission on that page failed and was lost.

-- 1. The missing table, matching the shape of the other signup tables.
create table if not exists public.agent_program_signups (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null,
  name text,
  interests text[] not null default '{}'
);

alter table public.agent_program_signups enable row level security;

drop policy if exists "anyone can apply" on public.agent_program_signups;
create policy "anyone can apply"
  on public.agent_program_signups
  for insert
  to anon, authenticated
  with check (true);

-- 2. Provenance columns on every signup table.
--    source     — which form was submitted (stable identifier)
--    page_path  — the URL path the visitor submitted from
--    metadata   — anything form-specific, kept open-ended
alter table public.newsletter_signups
  add column if not exists source text,
  add column if not exists page_path text,
  add column if not exists metadata jsonb not null default '{}'::jsonb;

alter table public.resource_holder_signups
  add column if not exists source text,
  add column if not exists page_path text,
  add column if not exists archetype text,
  add column if not exists metadata jsonb not null default '{}'::jsonb;

alter table public.agent_program_signups
  add column if not exists source text,
  add column if not exists page_path text,
  add column if not exists metadata jsonb not null default '{}'::jsonb;

comment on column public.newsletter_signups.source is
  'Which form produced this row, e.g. newsletter-cta.';
comment on column public.resource_holder_signups.archetype is
  'The JOIN page archetype whose form was used, e.g. Vision Holder.';

-- 3. Email notifications for the new table, same trigger as the others.
drop trigger if exists on_agent_program_signup_email on public.agent_program_signups;
create trigger on_agent_program_signup_email
  after insert on public.agent_program_signups
  for each row execute function public.notify_signup_email();
