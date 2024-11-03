import { cn } from "@/utils";
import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";

import { Providers } from "@/components/providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Hackheroes APP",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="pl" className={cn(inter.variable, eb_garamond.variable)}>
        <body className="flex min-h-[calc(100vh-1px)] flex-col bg-brand-50 font-sans text-brand-950 antialiased">
          <main className="relative flex flex-1 flex-col">
            <Providers>{children}</Providers>
          </main>
        </body>
      </html>
    </Providers>
  );
}