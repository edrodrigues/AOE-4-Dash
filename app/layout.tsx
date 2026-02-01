import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AOE4 Ranking | A Era dos Reis",
  description: "Acompanhe o histórico de partidas de Age of Empires 4 e descubra quem é o verdadeiro rei.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${inter.variable} antialiased bg-stone-950 text-stone-100 font-sans`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
