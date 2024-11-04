import { Providers } from "@/components/providers";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "EcoQuest - Twórz lepszy świat, jeden krok na raz",
  description:
    "Dołącz do EcoQuest i zacznij swoją przygodę z ekologicznym stylem życia!",
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
        <body className="relative flex min-h-[calc(100vh-1px)] flex-1 flex-col bg-gray-50 font-sans antialiased">
          {children}
        </body>
      </html>
    </Providers>
  );
}
