import {
  ArrowRight,
  ShieldCheck,
  MousePointerClick,
  Coins,
  Lock,
  Star,
  Scale
} from "lucide-react";
import { Button } from "@/components/base/Button";

const BENEFITS = [
  { icon: ShieldCheck, bold: "Histórico disponível", rest: "sem reconstrução manual" },
  { icon: MousePointerClick, bold: "Abertura com 1 clique", rest: "diretamente do contrato" },
  { icon: Coins, bold: "Crédito de mediação", rest: "honorários viram desconto na arbitragem" },
  { icon: Lock, bold: "Sigilo por padrão", rest: "nada da resolução é público" },
  { icon: Star, bold: "Plano Premium", rest: "20% de desconto nas taxas SOMA" }
];

export function BlocoSOMA() {
  return (
    <section className="relative overflow-hidden bg-soma-bg">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute h-[500px] w-[500px] rounded-full opacity-[0.08]"
          style={{ background: "var(--soma)", top: "-150px", right: "-150px" }}
        />
      </div>

      <div className="container-soma section-soma relative">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-soma/30 bg-white px-3 py-1.5">
              <Scale className="size-4 text-soma" strokeWidth={2} />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-soma">
                Resolução de Disputas
              </span>
            </div>

            <h2 className="mb-5 font-title text-3xl font-bold tracking-tighter text-gray-900 md:text-4xl lg:text-5xl">
              Conheça nossa câmara de mediação e arbitragem, SOMA.
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Quando o contrato vai a litígio, outras ferramentas param. A
              +legal_ continua. A SOMA é a câmara integrada à plataforma. O
              histórico do contrato já está disponível, sem reconstrução.
            </p>

            <p className="mb-8 text-base leading-relaxed text-gray-600">
              100% digital. Procedimentos padronizados. Especialistas por área.
              Procedimento simplificado em até 6 meses, padrão em até 1 ano.
            </p>

            {/* Ilustração de integração */}
            <div className="mb-8 hidden md:block">
              <IntegracaoVisual />
            </div>

            <Button href="/resolucao-de-disputas" variant="primary" size="lg" className="!bg-soma !border-soma hover:!bg-soma/90">
              Como a integração funciona <ArrowRight className="size-4" />
            </Button>
          </div>

          <div className="rounded-2xl border border-soma/20 bg-white p-7 shadow-sm">
            <p className="mb-2 font-mono text-[11px] font-bold uppercase tracking-widest text-soma">
              O que muda na prática
            </p>
            <p className="mb-6 text-sm text-gray-600">
              O que muda quando a câmara está integrada ao mesmo ambiente do
              contrato.
            </p>

            <ul className="divide-y divide-stone-200">
              {BENEFITS.map(b => {
                const Icon = b.icon;
                return (
                  <li key={b.bold} className="flex items-start gap-3 py-4">
                    <div className="flex size-8 flex-shrink-0 items-center justify-center rounded-lg bg-soma-bg">
                      <Icon className="size-4 text-soma" strokeWidth={1.8} />
                    </div>
                    <p className="pt-1 text-[14px] leading-snug text-gray-700">
                      <span className="font-semibold text-gray-900">
                        {b.bold},
                      </span>{" "}
                      {b.rest}.
                    </p>
                  </li>
                );
              })}
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
}

// Diagrama de integração: contrato → câmara
function IntegracaoVisual() {
  return (
    <svg viewBox="0 0 500 100" xmlns="http://www.w3.org/2000/svg" className="h-[100px] w-full max-w-[500px]">
      {/* +legal_ ambiente à esquerda */}
      <g transform="translate(60 50)">
        <rect x="-50" y="-32" width="100" height="64" rx="10" fill="white" stroke="var(--brand)" strokeWidth="1.5" />
        <text
          x="0"
          y="-10"
          fontFamily="JetBrains Mono, monospace"
          fontSize="9"
          fontWeight="700"
          fill="var(--brand)"
          textAnchor="middle"
          letterSpacing="1"
          opacity="0.7"
        >
          +legal_
        </text>
        <line x1="-32" y1="2" x2="32" y2="2" stroke="var(--brand)" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
        <line x1="-32" y1="10" x2="22" y2="10" stroke="var(--brand)" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
        <line x1="-32" y1="18" x2="28" y2="18" stroke="var(--brand)" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
        <text
          x="0"
          y="46"
          fontFamily="JetBrains Mono, monospace"
          fontSize="7"
          fontWeight="700"
          fill="#666660"
          textAnchor="middle"
          letterSpacing="1"
        >
          CONTRATO
        </text>
      </g>

      {/* Connecting flow */}
      <g>
        <line
          x1="120"
          y1="50"
          x2="190"
          y2="50"
          stroke="var(--soma)"
          strokeWidth="2"
          strokeDasharray="4 3"
          opacity="0.6"
        />
        <text
          x="155"
          y="42"
          fontFamily="JetBrains Mono, monospace"
          fontSize="8"
          fontWeight="700"
          fill="var(--soma)"
          textAnchor="middle"
          letterSpacing="1"
        >
          1 CLIQUE
        </text>
      </g>

      {/* Câmara SOMA central */}
      <g transform="translate(250 50)">
        <path
          d="M 0 -38 L 36 -22 v 18 c 0 18 -14 30 -36 38 c -22 -8 -36 -20 -36 -38 v -18 z"
          fill="var(--soma-bg)"
          stroke="var(--soma)"
          strokeWidth="1.8"
        />
        <text
          x="0"
          y="-2"
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
        </text>
      </g>

      {/* Connecting flow */}
      <g>
        <line
          x1="305"
          y1="50"
          x2="375"
          y2="50"
          stroke="var(--soma)"
          strokeWidth="2"
          strokeDasharray="4 3"
          opacity="0.6"
        />
        <text
          x="340"
          y="42"
          fontFamily="JetBrains Mono, monospace"
          fontSize="8"
          fontWeight="700"
          fill="var(--soma)"
          textAnchor="middle"
          letterSpacing="1"
        >
          MESES
        </text>
      </g>

      {/* Resolução à direita */}
      <g transform="translate(440 50)">
        <circle r="34" fill="white" stroke="var(--after, #2E8B57)" strokeWidth="1.8" />
        <path
          d="M -10 0 L -3 7 L 12 -8"
          fill="none"
          stroke="var(--after, #2E8B57)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          x="0"
          y="56"
          fontFamily="JetBrains Mono, monospace"
          fontSize="7"
          fontWeight="700"
          fill="#666660"
          textAnchor="middle"
          letterSpacing="1"
        >
          RESOLUÇÃO
        </text>
      </g>
    </svg>
  );
}
