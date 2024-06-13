import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "@/provider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Formulario de contacto",
  description: "Formulario de contacto para postular a una oferta de trabajo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <Provider>{children}</Provider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
