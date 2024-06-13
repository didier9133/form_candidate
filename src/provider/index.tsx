"use client";

import theme from "@/theme";
import { ThemeProvider } from "@mui/material";

interface ProviderProps {
  children: React.ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
