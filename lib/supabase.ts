import { createClient, type SupabaseClient } from '@supabase/supabase-js'

// The client is created lazily. Building at module scope would run during
// static prerendering, which crashes the export on machines without a
// .env.local — the forms themselves only ever run in the browser.
let client: SupabaseClient | null = null

function getClient(): SupabaseClient {
  if (client) return client

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !anonKey) {
    throw new Error(
      'Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and ' +
        'NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local (see ONBOARDING.md).'
    )
  }

  client = createClient(url, anonKey)
  return client
}

export const supabase = new Proxy({} as SupabaseClient, {
  get: (_target, prop, receiver) => Reflect.get(getClient(), prop, receiver),
})
