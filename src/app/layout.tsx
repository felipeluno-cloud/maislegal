import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
        <div className="border-b border-stone-200 bg-stone-900 text-white">
          <div className="container-soma flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2 text-center text-[12px] md:text-[13px]">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/60">
              Acoplada à <span className="normal-case">+legal_</span>
            </span>
            <span className="hidden text-white/30 md:inline">·</span>
            <span className="text-white/85">
              Câmara SOMA, para mediação e arbitragem digitais quando o contrato precisa virar resolução.
            </span>
            <Link
              href="/resolucao-de-disputas"
              className="inline-flex items-center gap-1 font-semibold text-white underline-offset-2 hover:underline"
            >
              Conhecer a câmara <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
