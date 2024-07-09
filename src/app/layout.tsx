import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Navbar } from "@/components";
import { Provider } from "@/provider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "stream-chat-react/css/v2/index.css";
import "@stream-io/video-react-sdk/dist/css/styles.css";
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
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <AppRouterCacheProvider>
            <Provider>
              <Navbar />
              <main
                className="flex max-w-5xl  flex-col items-center justify-center my-0 mx-auto md:p-22"
                style={{ minHeight: "calc(100vh - 3.5rem)" }}>
                {children}
              </main>
            </Provider>
          </AppRouterCacheProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
