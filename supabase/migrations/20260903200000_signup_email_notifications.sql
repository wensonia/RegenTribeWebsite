-- Sends signup emails by calling the send-signup-email Edge Function after a
-- row is inserted into either signup table.
--
-- The function URL and the shared webhook secret are read from Supabase Vault
-- at call time, so no credential is stored in this file. Set them once per
-- project (see ONBOARDING.md):
--
--   select vault.create_secret(
--     'https://<project-ref>.supabase.co/functions/v1/send-signup-email',
--     'signup_email_function_url', 'Edge Function endpoint for signup emails');
--   select vault.create_secret(
--     '<same value as SIGNUP_WEBHOOK_SECRET>',
--     'signup_email_webhook_secret', 'Shared secret for the signup email hook');

create extension if not exists pg_net with schema extensions;

create or replace function public.notify_signup_email()
returns trigger
language plpgsql
security definer
set search_path = public, extensions, vault
as $$
declare
  function_url text;
  webhook_secret text;
begin
  select decrypted_secret into function_url
    from vault.decrypted_secrets
   where name = 'signup_email_function_url';

  select decrypted_secret into webhook_secret
    from vault.decrypted_secrets
   where name = 'signup_email_webhook_secret';

  -- Not configured yet: capture the signup and stay quiet.
  if function_url is null or webhook_secret is null then
    return new;
  end if;

  perform net.http_post(
    url     := function_url,
    body    := jsonb_build_object(
                 'table',  tg_table_name,
                 'record', to_jsonb(new)
               ),
    headers := jsonb_build_object(
                 'Content-Type',             'application/json',
                 'x-signup-webhook-secret',  webhook_secret
               ),
    timeout_milliseconds := 5000
  );

  return new;
exception
  -- A signup must never be lost because email delivery had a bad day.
  when others then
    raise warning 'notify_signup_email failed: %', sqlerrm;
    return new;
end;
$$;

comment on function public.notify_signup_email is
  'Fires the send-signup-email Edge Function after a signup insert. Never blocks the insert.';

drop trigger if exists on_newsletter_signup_email on public.newsletter_signups;
create trigger on_newsletter_signup_email
  after insert on public.newsletter_signups
  for each row execute function public.notify_signup_email();

drop trigger if exists on_resource_holder_signup_email on public.resource_holder_signups;
create trigger on_resource_holder_signup_email
  after insert on public.resource_holder_signups
  for each row execute function public.notify_signup_email();
