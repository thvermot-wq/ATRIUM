const STORAGE_KEY = "atrium-theme";

function safeLocalStorage() {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      return window.localStorage;
    }
  } catch {
    return null;
  }

  return null;
}

function getSystemTheme() {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

let activeTheme = "light";
let currentSource = "system";

export function applyTheme(theme, { source = "system", persist = false } = {}) {
  activeTheme = theme === "dark" ? "dark" : "light";
  currentSource = source;

  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("data-theme", activeTheme);
    document.documentElement.style.colorScheme = activeTheme;
    export function applyTheme(theme, { source = "system", persist = false } = {}) {
  activeTheme = theme === "dark" ? "dark" : "light";
  currentSource = source;

  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("data-theme", activeTheme);
    document.documentElement.style.colorScheme = activeTheme;

    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
      themeColor.setAttribute("content", activeTheme === "dark" ? "#151923" : "#24326f");
    }
  }

  if (persist && typeof window !== "undefined") {
    window.localStorage.setItem(THEME_STORAGE_KEY, activeTheme);
    window.localStorage.setItem(THEME_SOURCE_STORAGE_KEY, source);
  }
}
  }

  if (persist) {
    const storage = safeLocalStorage();
    if (storage) {
      storage.setItem(STORAGE_KEY, activeTheme);
    }
  }
}

export function initTheme() {
  const storage = safeLocalStorage();
  const saved = storage?.getItem(STORAGE_KEY);

  if (saved === "light" || saved === "dark") {
    applyTheme(saved, { source: "user", persist: false });
  } else {
    applyTheme(getSystemTheme(), { source: "system", persist: false });
  }

  if (typeof window !== "undefined" && typeof window.matchMedia === "function") {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (currentSource === "system") {
        applyTheme(media.matches ? "dark" : "light", { source: "system", persist: false });
      }
    };

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", onChange);
    } else if (typeof media.addListener === "function") {
      media.addListener(onChange);
    }
  }
}

export function toggleTheme() {
  const next = activeTheme === "dark" ? "light" : "dark";
  applyTheme(next, { source: "user", persist: true });
  return activeTheme;
}

export function getThemeState() {
  return {
    theme: activeTheme,
    source: currentSource,
  };
}
