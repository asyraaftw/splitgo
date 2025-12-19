"use client";

import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import { ReactNode } from "react";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <CssVarsProvider defaultMode="system">
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
}
