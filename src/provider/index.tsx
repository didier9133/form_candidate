"use client";

import theme from "@/theme";
import { ThemeProvider } from "@mui/material";
import { StreamVideoClientProvider } from "./StreamVideoProvider";

interface ProviderProps {
  children: React.ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <StreamVideoClientProvider>{children}</StreamVideoClientProvider>
    </ThemeProvider>
  );
};
