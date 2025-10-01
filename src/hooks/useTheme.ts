// src/hooks/useTheme.ts
"use client";

import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProviderClient");
  return ctx;
}
