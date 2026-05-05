import {
  ArrowRight,
  ShieldCheck,
  MousePointerClick,
  Coins,
  Lock,
  Star,
  Scale,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/base/Button";

const BENEFITS = [
  { icon: ShieldCheck, title: "Histórico disponível", body: "Sem reconstrução manual." },
  { icon: MousePointerClick, title: "Abertura com 1 clique", body: "Diretamente do contrato." },
  { icon: Coins, title: "Crédito de mediação", body: "Honorários viram desconto na arbitragem." },
  { icon: Lock, title: "Sigilo por padrão", body: "Nada da resolução é público." },
  { icon: Star, title: "Plano Premium", body: "20% de desconto nas taxas SOMA." }
];

export function BlocoSOMA() {
  return (
    <section className="relative overflow-hidden bg-soma-bg">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute h-[700px] w-[700px] rounded-full opacity-[0.08]"
          style={{ background: "var(--soma)", top: "-200px", right: "-200px" }}
        />
        <div
          className="absolute h-[400px] w-[400px] rounded-full opacity-[0.06]"
          style={{ background: "var(--peach-dark)", bottom: "-150px", left: "-100px" }}
        />
      </div>

      <div className="container-soma section-soma relative">
        {/* Header em largura total · centralizado · momento marcante */}
        <div className="mx-auto mb-14 max-w-[900px] text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-soma bg-white px-4 py-2">
            <Scale className="size-4 text-soma" strokeWidth={2} />
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-soma">
              O grande diferencial
            </span>
          </div>

          <h2 className="mb-6 font-title text-[40px] font-extrabold leading-[1.05] tracking-tighter text-gray-900 md:text-[56px] lg:text-[68px]">
            Outras ferramentas terminam onde
            <br />
            <span className="text-soma">o problema começa</span>.
          </h2>

          <p className="mx-auto max-w-[680px] text-lg leading-relaxed text-gray-700 md:text-xl">
            A SOMA, nossa câmara de mediação e arbitragem, está acoplada à
            +legal_. Quando vira disputa, o histórico do contrato já está
            disponível. Resolução sigilosa, em meses, sem ir ao judiciário.
          </p>
        </div>

        {/* Diagrama em largura total */}
        <div className="mb-14">
          <FluxoSOMA />
        </div>

        {/* 5 benefícios em grid horizontal */}
        <div className="mb-12">
          <p className="mb-6 text-center font-mono text-[11px] font-bold uppercase tracking-widest text-soma">
            O que muda na prática
          </p>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-5">
            {BENEFITS.map(b => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="rounded-xl border border-soma/20 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-soma-bg">
                    <Icon className="size-5 text-soma" strokeWidth={1.6} />
                  </div>
                  <p className="mb-1.5 font-title text-[15px] font-bold text-gray-900">
                    {b.title}
                  </p>
                  <p className="text-[13px] leading-snug text-gray-600">
                    {b.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            href="/resolucao-de-disputas"
            variant="primary"
            size="lg"
            className="!bg-soma !border-soma hover:!bg-soma/90"
          >
            Como a integração funciona <ArrowRight className="size-4" />
          </Button>
          <Button
            href="https://somalegal.tech"
            variant="secondary"
            size="lg"
            external
            className="!border-soma/30 !text-soma hover:!bg-white"
          >
            Conhecer a câmara <ExternalLink className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

// Diagrama horizontal: Contrato → Disputa → Câmara → Resolução
function FluxoSOMA() {
  return (
    <div className="mx-auto max-w-[1100px]">
      <svg
        viewBox="0 0 1100 220"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
        aria-hidden="true"
      >
        {/* Linha de fundo conectando tudo */}
        <line
          x1="100"
          y1="110"
          x2="1000"
          y2="110"
          stroke="var(--soma)"
          strokeWidth="2"
          strokeDasharray="6 4"
          opacity="0.35"
        />

        {/* Etapa 01 · Contrato em curso */}
        <g transform="translate(100 110)">
          <circle r="60" fill="white" stroke="var(--brand)" strokeWidth="2" />
          <rect x="-22" y="-26" width="44" height="52" rx="4" fill="none" stroke="var(--brand)" strokeWidth="1.4" />
          <line x1="-15" y1="-14" x2="15" y2="-14" stroke="var(--brand)" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
          <line x1="-15" y1="-6" x2="13" y2="-6" stroke="var(--brand)" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
          <line x1="-15" y1="2" x2="15" y2="2" stroke="var(--brand)" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
          <line x1="-15" y1="10" x2="11" y2="10" stroke="var(--brand)" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
          <text
            x="0"
            y="90"
            fontFamily="JetBrains Mono, monospace"
            fontSize="11"
            fontWeight="700"
            fill="var(--brand)"
            textAnchor="middle"
            letterSpacing="1.5"
          >
            CONTRATO ATIVO
          </text>
          <text
            x="0"
            y="-80"
            fontFamily="JetBrains Mono, monospace"
            fontSize="10"
            fontWeight="700"
            fill="var(--brand)"
            textAnchor="middle"
            letterSpacing="1.5"
            opacity="0.5"
          >
            01
          </text>
        </g>

        {/* Seta + label */}
        <g transform="translate(310 110)">
          <text
            x="0"
            y="-22"
            fontFamily="JetBrains Mono, monospace"
            fontSize="10"
            fontWeight="700"
            fill="var(--soma)"
            textAnchor="middle"
            letterSpacing="1.5"
          >
            DIVERGÊNCIA
          </text>
          <path d="M -8 0 L 8 0 M 4 -4 L 8 0 L 4 4" stroke="var(--soma)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Etapa 02 · Câmara SOMA acoplada */}
        <g transform="translate(450 110)">
          <circle r="62" fill="white" stroke="var(--soma)" strokeWidth="2.5" />
          <path
            d="M 0 -32 L 28 -18 v 14 c 0 14 -10 22 -28 30 c -18 -8 -28 -16 -28 -30 v -14 z"
            fill="var(--soma-bg)"
            stroke="var(--soma)"
            strokeWidth="1.8"
          />
          <text
            x="0"
            y="2"
            fontFamily="Barlow, sans-serif"
            fontSize="14"
            fontWeight="800"
            fill="var(--soma)"
            textAnchor="middle"
            letterSpacing="1"
          >
            SOMA
          </text>
          <text
            x="0"
            y="14"
            fontFamily="JetBrains Mono, monospace"
            fontSize="6"
            fontWeight="700"
            fill="var(--soma)"
            textAnchor="middle"
            letterSpacing="1"
            opacity="0.7"
          >
            CÂMARA
     