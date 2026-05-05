import { ArrowRight } from "lucide-react";

const PASSOS = [
  {
    num: "01",
    label: "ORGANIZE",
    title: "Organize",
    body: "Suba um contrato existente ou crie a partir de templates. Convide a outra parte como visitante, sem custo. O contrato fica num ambiente que todos os envolvidos usam.",
    visual: "organize"
  },
  {
    num: "02",
    label: "MONITORE",
    title: "Monitore",
    body: "Alertas automáticos antes de prazos e obrigações. Aditivos formalizados com aprovação documentada. Painel completo do portfólio.",
    visual: "monitor"
  },
  {
    num: "03",
    label: "RESOLVA",
    title: "Resolva",
    body: "A disputa abre na SOMA, nossa câmara de mediação e arbitragem, com um clique. O histórico já está lá. Mediação primeiro, arbitragem se necessário.",
    visual: "resolve"
  }
] as const;

export function TresPassos() {
  return (
    <section className="relative bg-stone-50">
      <div className="container-soma section-soma">
        <div className="mb-14 max-w-[820px]">
          <p className="eyebrow mb-4">Como funciona</p>
          <h2 className="h-soma mb-4">
            Três passos. Do acordo à resolução.
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Os mesmos passos, dentro do mesmo ambiente.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-5">
          {/* Conectores horizontais entre os passos (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-[88px] hidden lg:flex">
            <div className="flex w-full items-center justify-center">
              <div className="mx-[16.66%] flex w-full items-center gap-2">
                <div className="h-px flex-1 bg-stone-300" />
                <ArrowRight className="size-4 text-stone-400" strokeWidth={1.5} />
                <div className="h-px flex-1 bg-stone-300" />
                <ArrowRight className="size-4 text-stone-400" strokeWidth={1.5} />
                <div className="h-px flex-1 bg-stone-300" />
              </div>
            </div>
          </div>

          {PASSOS.map(p => (
            <div
              key={p.num}
              className="group relative flex flex-col rounded-2xl border border-stone-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-lg"
            >
              {/* Step indicator circle */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-full border-2 border-brand bg-white font-mono text-sm font-bold text-brand shadow-sm">
                  {p.num}
                </div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">
                  {p.label}
                </span>
              </div>

              {/* Mini ilustração */}
              <div className="mb-6 flex h-[120px] items-center justify-center rounded-xl bg-brand-tint">
                <PassoVisual variant={p.visual} />
              </div>

              <h3 className="mb-3 font-title text-2xl font-extrabold tracking-tight text-gray-900">
                {p.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-gray-700">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PassoVisual({ variant }: { variant: string }) {
  const stroke = "var(--brand)";
  const sw = 1.4;

  // ORGANIZE: documento + outra parte sendo convidada
  if (variant === "organize") {
    return (
      <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" className="h-full">
        {/* Document central */}
        <g transform="translate(100 50)">
          <rect x="-30" y="-32" width="60" height="64" rx="5" fill="white" stroke={stroke} strokeWidth={sw + 0.2} />
          <line x1="-22" y1="-20" x2="22" y2="-20" stroke={stroke} strokeWidth={sw} opacity="0.4" strokeLinecap="round" />
          <line x1="-22" y1="-12" x2="18" y2="-12" stroke={stroke} strokeWidth={sw} opacity="0.4" strokeLinecap="round" />
          <line x1="-22" y1="-4" x2="22" y2="-4" stroke={stroke} strokeWidth={sw} opacity="0.4" strokeLinecap="round" />
          <line x1="-22" y1="4" x2="14" y2="4" stroke={stroke} strokeWidth={sw} opacity="0.4" strokeLinecap="round" />
        </g>
        {/* Person A */}
        <g transform="translate(40 50)">
          <circle r="14" fill="white" stroke={stroke} strokeWidth={sw + 0.2} />
          <circle cx="0" cy="-3" r="4" fill={stroke} opacity="0.7" />
          <path d="M -7 7 a 7 5 0 0 1 14 0" fill={stroke} opacity="0.7" />
        </g>
        {/* Person B */}
        <g transform="translate(160 50)">
          <circle r="14" fill="white" stroke="var(--peach-dark)" strokeWidth={sw + 0.2} />
          <circle cx="0" cy="-3" r="4" fill="var(--peach-dark)" opacity="0.7" />
          <path d="M -7 7 a 7 5 0 0 1 14 0" fill="var(--peach-dark)" opacity="0.7" />
        </g>
        {/* Connection lines dashed */}
        <line x1="55" y1="50" x2="68" y2="50" stroke={stroke} strokeWidth={sw} strokeDasharray="2 2" opacity="0.4" />
        <line x1="132" y1="50" x2="145" y2="50" stroke="var(--peach-dark)" strokeWidth={sw} strokeDasharray="2 2" opacity="0.4" />
      </svg>
    );
  }

  // MONITOR: dashboard com alertas
  if (variant === "monitor") {
    return (
      <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" className="h-full">
        {/* Dashboard frame */}
        <rect x="40" y="14" width="120" height="72" rx="6" fill="white" stroke={stroke} strokeWidth={sw + 0.2} />
        {/* Top bar */}
        <rect x="40" y="14" width="120" height="14" rx="6" fill={stroke} opacity="0.85" />
        {/* Stats cards inside */}
        <rect x="48" y="34" width="30" height="20" rx="3" fill={stroke} opacity="0.1" />
        <rect x="82" y="34" width="30" height="20" rx="3" fill={stroke} opacity="0.1" />
        <rect x="116" y="34" width="36" height="20" rx="3" fill={stroke} opacity="0.1" />
        <text x="63" y="48" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill={stroke} textAnchor="middle">8</text>
        <text x="97" y="48" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill={stroke} textAnchor="middle">3</text>
        <text x="134" y="48" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill={stroke} textAnchor="middle">12</text>
        {/* Alert bar */}
        <rect x="48" y="60" width="104" height="18" rx="3" fill="#FEF3F2" stroke="#dc2626" strokeWidth="1" strokeOpacity="0.5" />
        <circle cx="56" cy="69" r="3" fill="#dc2626" />
        <line x1="64" y1="66" x2="92" y2="66" stroke="#dc2626" strokeWidth={sw} opacity="0.6" strokeLinecap="round" />
        <line x1="64" y1="72" x2="84" y2="72" stroke="#dc2626" strokeWidth={sw} opacity="0.4" strokeLinecap="round" />
        {/* Bell icon top right */}
        <g transform="translate(150 21)">
          <path
            d="M 0 -4 a 5 5 0 0 1 10 0 v 4 l 1.5 2 h -13 l 1.5 -2 z M 4 4 a 1 1 0 0 0 2 0"
            fill="white"
            stroke="white"
            strokeWidth={sw}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    );
  }

  // RESOLVE: contrato + câmara SOMA
  if (variant === "resolve") {
    return (
      <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" className="h-full">
        {/* Document à esquerda */}
        <g transform="translate(50 50)">
          <rect x="-22" y="-26" width="44" height="52" rx="4" fill="white" stroke={stroke} strokeWidth={sw + 0.2} />
          <line x1="-15" y1="-14" x2="15" y2="-14" stroke={stroke} strokeWidth={sw} opacity="0.3" strokeLinecap="round" />
          <line x1="-15" y1="-6" x2="13" y2="-6" stroke={stroke} strokeWidth={sw} opacity="0.3" strokeLinecap="round" />
          <line x1="-15" y1="2" x2="15" y2="2" stroke={stroke} strokeWidth={sw} opacity="0.3" strokeLinecap="round" />
          <text x="0" y="20" fontFamily="JetBrains Mono, monospace" fontSize="6" fontWeight="700" fill={stroke} textAnchor="middle" opacity="0.6">CONTRATO</text>
        </g>
        {/* Arrow with click cursor */}
        <g transform="translate(100 50)">
          <line x1="-20" y1="0" x2="20" y2="0" stroke={stroke} strokeWidth={sw + 0.2} strokeLinecap="round" />
          <path d="M 14 -5 L 20 0 L 14 5" fill="none" stroke={stroke} strokeWidth={sw + 0.2} strokeLinecap="round" strokeLinejoin="round" />
          <text x="0" y="-8" fontFamily="JetBrains Mono, monospace" fontSize="6" fontWeight="700" fill={stroke} textAnchor="middle" opacity="0.7">1 CLIQUE</text>
        </g>
        {/* SOMA shield à direita */}
        <g transform="translate(155 50)">
          <path
            d="M 0 -28 L 22 -18 v 14 c 0 14 -10 22 -22 26 c -12 -4 -22 -12 -22 -26 v -14 z"
            fill="var(--soma-bg)"
            stroke="var(--soma)"
            strokeWidth={sw + 0.4}
          />
          <text
            x="0"
            y="2"
            fontFamily="Barlow, sans-serif"
            fontSize="11"
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
            fontSize="5"
            fill="var(--soma)"
            textAnchor="middle"
            opacity="0.7"
          >
            CÂMARA
          </text>
        </g>
      </svg>
    );
  }

  return null;
}
