create table public.resource_holder_signups (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null,
  interests text[] not null default '{}'
);

alter table public.resource_holder_signups enable row level security;

create policy "anyone can submit"
  on public.resource_holder_signups
  for insert
  to anon, authenticated
  with check (true);
