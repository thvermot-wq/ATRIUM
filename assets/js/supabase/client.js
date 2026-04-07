import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

let cachedClient = null;

export function getSupabaseClient() {
  if (cachedClient) return cachedClient;

  const url = window.ATRIUM_SUPABASE_URL || window.localStorage.getItem("atrium:supabase:url");
  const anonKey = window.ATRIUM_SUPABASE_ANON_KEY || window.localStorage.getItem("atrium:supabase:anon-key");

  if (!url || !anonKey) {
    return null;
  }

  cachedClient = createClient(url, anonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  });

  return cachedClient;
}
