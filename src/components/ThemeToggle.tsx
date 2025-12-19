"use client";

import { useColorScheme } from "@mui/joy/styles";
import { IconButton } from "@mui/joy";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <IconButton variant="outlined" sx={{ width: 40, height: 40 }} />;
  }

  return (
    <IconButton
      variant="outlined"
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
      sx={{ position: "fixed", top: 16, right: 16 }}
    >
      {mode === "light" ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
}
