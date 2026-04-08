(function applyAtriumRuntimeConfig() {
  if (typeof window === "undefined") return;

  const config = {
    supabaseUrl: "https://qthuczahzgbzttgyxncm.supabase.co",
    supabaseAnonKey: "sb_publishable_LWwJLmztBf8DQU3E6eFoYA_Hv0LM4fa",
  };

  const hasUrl =
    typeof config.supabaseUrl === "string" &&
    config.supabaseUrl.startsWith("http");

  const hasAnon =
    typeof config.supabaseAnonKey === "string" &&
    config.supabaseAnonKey.length > 24;

  if (hasUrl) {
    window.ATRIUM_SUPABASE_URL = config.supabaseUrl;
  }

  if (hasAnon) {
    window.ATRIUM_SUPABASE_ANON_KEY = config.supabaseAnonKey;
  }
})();
