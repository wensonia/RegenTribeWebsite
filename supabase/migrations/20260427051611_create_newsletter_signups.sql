create table public.newsletter_signups (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null,
  name text,
  interests text[] not null default '{}'
);

alter table public.newsletter_signups enable row level security;

create policy "anyone can subscribe"
  on public.newsletter_signups
  for insert
  to anon, authenticated
  with check (true);
