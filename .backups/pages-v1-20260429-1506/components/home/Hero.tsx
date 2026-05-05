import { ArrowRight } from "lucide-react";
import { Button } from "@/components/base/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-stone-200 bg-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute h-[700px] w-[700px] rounded-full opacity-[0.04]"
          style={{ background: "var(--brand)", top: "-200px", right: "-150px" }}
        />
        <div
          className="absolute h-[300px] w-[300px] rounded-full opacity-[0.05]"
          style={{ background: "var(--peach-dark)", bottom: "-80px", left: "-60px" }}
        />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.025]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-brand"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-soma relative py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          {/* COLUNA ESQUERDA · narrativa */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-tint px-3 py-1.5">
              <span className="size-1.5 animate-pulse rounded-full bg-brand" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                Gestão de contratos +legal_
              </span>
            </div>

            {/* Headline com hierarquia melhor entre as 2 frases */}
            <h1 className="mb-8 font-title font-bold tracking-tighter">
              <span className="block text-2xl font-medium text-stone-400 md:text-3xl lg:text-[34px]">
                Fechar um bom contrato é legal.
              </span>
              <span className="mt-2 block text-[34px] leading-[1.05] text-gray-900 md:text-[44px] lg:text-[56px]">
                Ver o combinado funcionar é{" "}
                <span className="text-brand">+legal_</span>.
              </span>
            </h1>

            <p className="mb-8 max-w-[540px] text-lg leading-relaxed text-gray-600">
              Um ambiente colaborativo. Do rascunho à resolução. Com câmara de
              mediação e arbitragem acoplada.
            </p>

            <p className="mb-8 max-w-[540px] border-l-2 border-brand pl-4 font-mono text-xs uppercase tracking-widest text-stone-600">
              Para diretores de operações, sócios de PME e escritórios de
              advocacia.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button href="/early-access" variant="primary" size="lg">
                Entrar para o Early Access <ArrowRight className="size-4" />
              </Button>
              <Button href="/como-funciona" variant="secondary" size="lg">
                Ver como funciona
              </Button>
            </div>
          </div>

          {/* COLUNA DIREITA · ilustração marcante */}
          <div className="relative hidden lg:block">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

// Ilustração marcante: ciclo do contrato + câmara SOMA
// Conceito: contrato no centro, ciclo de vida orbitando ao redor,
// SOMA aparece como elemento integrado no ciclo
function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]">
      <svg
        viewBox="0 0 460 460"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        aria-hidden="true"
      >
        {/* Background subtle ring */}
        <circle
          cx="230"
          cy="230"
          r="200"
          fill="none"
          stroke="var(--brand)"
          strokeWidth="1"
          strokeDasharray="2 4"
          opacity="0.15"
        />
        <circle
          cx="230"
          cy="230"
          r="160"
          fill="none"
          stroke="var(--brand)"
          strokeWidth="1"
          strokeDasharray="2 4"
          opacity="0.1"
        />

        {/* Contrato central */}
        <g transform="translate(230 230)">
          {/* Sombra */}
          <rect
            x="-58"
            y="-72"
            width="116"
            height="144"
            rx="12"
            fill="var(--peach-bg)"
            transform="translate(6 6)"
            opacity="0.6"
          />
          {/* Documento */}
          <rect
            x="-58"
            y="-72"
            width="116"
            height="144"
            rx="12"
            fill="white"
            stroke="var(--brand)"
            strokeWidth="2"
          />
          {/* Header bar */}
          <rect x="-58" y="-72" width="116" height="22" rx="12" fill="var(--brand)" />
          <rect x="-58" y="-62" width="116" height="12" fill="var(--brand)" />
          <text
            x="0"
            y="-58"
            fontFamily="JetBrains Mono, monospace"
            fontSize="9"
            fontWeight="700"
            fill="white"
            textAnchor="middle"
            letterSpacing="1.5"
          >
            CONTRATO
          </text>

          {/* Linhas de texto */}
          <line x1="-46" y1="-36" x2="46" y2="-36" stroke="var(--brand)" strokeWidth="1.2" opacity="0.4" strokeLinecap="round" />
          <line x1="-46" y1="-26" x2="38" y2="-26" stroke="var(--brand)" strokeWidth="1.2" opacity="0.4" strokeLinecap="round" />
          <line x1="-46" y1="-16" x2="46" y2="-16" stroke="var(--brand)" strokeWidth="1.2" opacity="0.4" strokeLinecap="round" />
          <line x1="-46" y1="-6" x2="42" y2="-6" stroke="var(--brand)" strokeWidth="1.2" opacity="0.4" strokeLinecap="round" />
          <line x1="-46" y1="4" x2="46" y2="4" stroke="var(--brand)" strokeWidth="1.2" opacity="0.4" strokeLinecap="round" />
          <line x1="-46" y1="14" x2="36" y2="14" stroke="var(--brand)" strokeWidth="1.2" opacity="0.4" strokeLinecap="round" />

          {/* Status verde */}
          <g transform="translate(0 42)">
            <rect
              x="-40"
              y="-10"
              width="80"
              height="20"
              rx="10"
              fill="#F0F9F4"
              stroke="var(--after, #2E8B57)"
              strokeWidth="1.2"
            />
            <circle cx="-26" cy="0" r="3" fill="var(--after, #2E8B57)" />
            <text
              x="-12"
              y="3.5"
              fontFamily="JetBrains Mono, monospace"
              fontSize="8"
              fontWeight="700"
              fill="var(--after, #2E8B57)"
              letterSpacing="1"
            >
              EM ACORDO
            </text>
          </g>
        </g>

        {/* Estágios do ciclo orbitando · 5 pontos */}

        {/* 01 · Rascunho · top */}
        <g transform="translate(230 50)">
          <circle r="28" fill="white" stroke="var(--brand)" strokeWidth="1.5" />
          <svg x="-10" y="-10" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
              stroke="var(--brand)"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M14 2v6h6" stroke="var(--brand)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <text
            x="0"
            y="48"
            fontFamily="JetBrains Mono, monospace"
            fontSize="9"
            fontWeight="700"
            fill="var(--brand)"
            textAn