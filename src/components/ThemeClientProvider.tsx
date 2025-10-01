// src/components/ThemeClientProvider.tsx
"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Inferimos las props directamente del componente importado.
 * De esta manera estamos siempre alineados con lo que exporta next-themes.
 */
type Props = React.ComponentProps<typeof NextThemesProvider>;

export default function ThemeClientProvider({ children, ...props }: Props & { children: React.ReactNode }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
