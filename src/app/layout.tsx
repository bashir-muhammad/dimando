import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AppProvider } from "@/context/app-context";
import { AppConfig } from "@/types/config";
import { sansation, ibmPlexSerif } from "@/styles/fonts";
import "@/styles/tokens.css";
import "@/styles/globals.css";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";

export const metadata: Metadata = {
  title: "Dimando Quesionnare",
  description: "Developed by Muhammad Bashir",
};

async function getAppData(): Promise<AppConfig> {
  const result = await fetch("https://test-config.free.beeceptor.com/", {
    cache: "no-store",
  });
  return result.json();
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const config = await getAppData();
  return (
    <html lang="en">
      <body className={`${sansation.variable} ${ibmPlexSerif.variable}`}>
        <div className="container">
          <AppProvider config={config}>
            <Header />
            {children}
            <Footer />
          </AppProvider>
        </div>
      </body>
    </html>
  );
}
