import type { Metadata } from "next";
import "./globals.css";

import { AuthTokenType, verifyAuthToken } from "@/lib/auth-token";
import { Nunito } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import Provider from "./provider";
import { ThemeProvider } from "./theme-provider";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Unitip",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let session: AuthTokenType | undefined = undefined;
  try {
    session = await verifyAuthToken();
  } catch (e) {
    console.log("error: unauthorized");
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.className} antialiased`}>
        <ThemeProvider defaultTheme="system" attribute="class">
          <Provider session={session}>
            <NextTopLoader />
            {children}
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
