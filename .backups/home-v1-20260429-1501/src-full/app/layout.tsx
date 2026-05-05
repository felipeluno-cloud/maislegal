import type { Metadata } from "next";
import { Barlow, Work_Sans, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/base/Header";
import { Footer } from "@/components/base/Footer";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
  display: "swap"
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap"
});

export const metadata: Metadata = {
  title: "+legal_ · Gestão de contratos com câmara de resolução acoplada",
  description:
    "Um ambiente colaborativo para gerir contratos do começo ao fim. Da elaboração ao monitoramento, dos aditivos à resolução. Com a câmara SOMA acoplada para mediação e arbitragem.",
  metadataBase: new URL("https://maislegal.tech"),
  openGraph: {
    title: "+legal_",
    description:
      "Fechar um bom contrato é legal. Ver o combinado funcionar é +legal_.",
    locale: "pt_BR",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${barlow.variable} ${workSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-white text-gray-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
