(function applyAtriumRuntimeConfig() {
  if (typeof window === "undefined") return;

  // GitHub Pages compatible runtime wiring:
  // Replace these placeholders during deployment (or commit with recipe values).
  const config = {
    supabaseUrl: "https://qthuczahzgbzttgyxncm.supabase.co",
    supabaseAnonKey: "sb_publishable_LWwJLmztBf8DQU3E6eFoYA_Hv0LM4fa",
  };

  const hasUrl = typeof config.supabaseUrl === "string" && config.supabaseUrl.startsWith("http");
  const hasAnon =
    typeof config.supabaseAnonKey === "string" &&
    config.supabaseAnonKey.length > 24 &&
    !config.supabaseAnonKey.includes("__ATRIUM_SUPABASE_ANON_KEY__");

  if (hasUrl) {
    window.ATRIUM_SUPABASE_URL = config.supabaseUrl;
  }

  if (hasAnon) {
    window.ATRIUM_SUPABASE_ANON_KEY = config.supabaseAnonKey;
  }
})();
