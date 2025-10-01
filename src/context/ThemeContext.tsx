// src/context/ThemeContext.tsx
"use client";

import React, { createContext, useCallback, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggle: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const KEY = "site:theme";

export function ThemeProviderClient({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [ready, setReady] = useState(false);

  // set theme to doc <html> class
  const applyTheme = useCallback((t: Theme) => {
    const root = document.documentElement;
    root.classList.toggle("dark", t === "dark");
    // also set color-scheme meta style for browsers (optional)
    root.style.colorScheme = t === "dark" ? "dark" : "light";
  }, []);

  useEffect(() => {
    // only run on client: read saved theme or system
    const saved = (localStorage.getItem(KEY) as Theme | null);
    if (saved === "dark" || saved === "light") {
      setThemeState(saved);
      applyTheme(saved);
    } else {
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial = prefersDark ? "dark" : "light";
      setThemeState(initial);
      applyTheme(initial);
    }
    setReady(true);
  }, [applyTheme]);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    try { localStorage.setItem(KEY, t); } catch { /* ignore */ }
    applyTheme(t);
  }, [applyTheme]);

  const toggle = useCallback(() => setTheme(theme === "dark" ? "light" : "dark"), [theme, setTheme]);

  // While not ready, render children anyway — it's fine because we only mutate DOM in useEffect.
  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
