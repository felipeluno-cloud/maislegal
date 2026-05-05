import { Filter } from "lucide-react";

const NEGACOES = [
  {
    nao: "Plataforma de assinatura digital",
    sim: "A assinatura é uma etapa. Integramos com DocuSign, ClickSign, ZapSign.",
    icon: "signature"
  },
  {
    nao: "Substituto de advogados",
    sim: "Ferramenta para você e seus advogados trabalharem com mais informação.",
    icon: "lawyer"
  },
  {
    nao: "Inteligência artificial tomando decisões",
    sim: "Tecnologia cuida do processo. Pessoas cuidam das decisões que importam.",
    icon: "ai"
  },
  {
    nao: "Drive com nome jurídico",
    sim: "Ambiente com propósito: monitoramento, alertas, inteligência contratual.",
    icon: "drive"
  },
  {
    nao: "A câmara SOMA",
    sim: "Entidades separadas, integradas. Use uma sem a outra, ou as duas juntas.",
    icon: "chamber"
  }
];

export function OQueNaoE() {
  return (
    <section className="bg-white">
      <div className="container-soma section-soma">
        <div className="mb-12 max-w-[820px]">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-stone-300 bg-stone-50 px-3 py-1.5">
            <Filter className="size-4 text-stone-600" strokeWidth={1.6} />
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-stone-700">
              Filtro
            </span>
          </div>

          <h2 className="h-soma mb-4">
            A +legal_ está perto de coisas que você já conhece. Não é nenhuma delas.
          </h2>

          <p className="text-lg leading-relaxed text-gray-700">
            Cinco ferramentas próximas, com sobreposição parcial. Saber o que a +legal_ não é ajuda a entender o que ela é.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_1fr]">
          {/* 5 cards · ferramentas próximas, mas não iguais */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {NEGACOES.map((n, i) => (
              <div
                key={n.nao}
                className="relative overflow-hidden rounded-2xl border border-stone-200 bg-white p-5"
              >
                {/* Mini-ícone */}
                <div className="mb-4 flex h-12 items-center">
                  <NaoIcon variant={n.icon} />
                </div>

                {/* Nome com riscado */}
                <div className="mb-3">
                  <p className="relative inline-block font-title text-[15px] font-bold text-gray-900">
                    {n.nao}
                    <span
                      aria-hidden="true"
                      className="absolute left-0 right-0 top-1/2 h-px"
                      style={{
                        background: "#dc2626",
                        opacity: 0.7
                      }}
                    />
                  </p>
                </div>

                {/* Correção */}
                <p className="text-[13px] leading-relaxed text-gray-600">
                  {n.sim}
                </p>

                {/* Numeração discreta */}
                <span
                  className="pointer-events-none absolute right-3 top-3 font-mono text-[10px] font-bold tracking-widest text-stone-400"
                  aria-hidden="true"
                >
                  0{i + 1}
                </span>
              </div>
            ))}

            {/* Sexto slot · seta de convergência */}
            <div className="hidden items-center justify-center sm:flex">
              <div className="flex items-center gap-3 text-stone-400">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest">
                  A <span className="normal-case">+legal_</span> está aqui
                </span>
                <svg width="36" height="14" viewBox="0 0 36 14" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <line x1="0" y1="7" x2="30" y2="7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  <path d="M 26 3 L 32 7 L 26 11" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card grande · +legal_ é */}
          <div
            className="relative flex flex-col overflow-hidden rounded-2xl border-2 p-7 md:p-8"
            style={{
              borderColor: "var(--brand)",
              background: "var(--brand)"
            }}
          >
            <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-widest text-white/70">
              A <span className="normal-case">+legal_</span> é
            </p>

            <h3 className="mb-5 font-title text-2xl font-bold leading-tight text-white md:text-3xl">
              A camada que atravessa as cinco.
            </h3>

            <p className="mb-3 text-[15px] leading-relaxed text-white/85">
              Combina ambiente compartilhado, monitoramento ativo, e câmara acoplada em um só lugar.
            </p>

            <p className="mb-7 text-[15px] leading-relaxed text-white/85">
              Sem substituir as ferramentas ao lado. Sem virar mais uma delas.
            </p>

            {/* Mini-mockup conceitual · 3 elementos que a +legal_ combina */}
            <div className="mt-auto rounded-xl border border-white/15 bg-white/5 p-4">
              <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-widest text-white/60">
                O que ela combina
              </p>
              <div className="space-y-2.5">
                {[
                  { label: "Ambiente compartilhado", sub: "as duas partes na mesma versão" },
                  { label: "Monitoramento ativo", sub: "alertas, obrigações, aditivos" },
                  { label: "Câmara acoplada", sub: "mediação SOMA quando trava" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 flex size-1.5 shrink-0 rounded-full bg-peach-dark"
                    />
                    <div>
                      <p className="text-[13px] font-bold leading-tight text-white">
                        {item.label}
                      </p>
                      <p className="text-[11.5px] leading-snug text-white/70">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NaoIcon({ variant }: { variant: string }) {
  const stroke = "#666";
  const sw = 1.4;

  if (variant === "signature") {
    return (
      <svg viewBox="0 0 56 32" xmlns="http://www.w3.org/2000/svg" className="h-full" aria-hidden="true">
        <path
          d="M 4 22 Q 10 6 18 22 T 34 22 T 50 12"
          fill="none"
          stroke={stroke}
          strokeWidth={sw + 0.4}
          strokeLinecap="round"
          opacity="0.8"
        />
        <line x1="2" y1="28" x2="54" y2="28" stroke={stroke} strokeWidth={sw} opacity="0.4" strokeLinecap="round" />
      </svg>
    );
  }

  if (variant === "lawyer") {
    return (
      <svg viewBox="0 0 56 32" xmlns="http://www.w3.org/2000/svg" className="h-full" aria-hidden="true">
        {/* Balança da justiça */}
        <line x1="28" y1="6" x2="28" y2="28" stroke={stroke} strokeWidth={sw} opacity="0.6" />
        <circle cx="28" cy="6" r="2" fill={stroke} opacity="0.7" />
        <line x1="14" y1="10" x2="42" y2="10" stroke={stroke} strokeWidth={sw} opacity="0.6" />
        <path d="M 14 10 L 10 18 L 18 18 Z" fill="none" stroke={stroke} strokeWidth={sw} opacity="0.6" />
        <path d="M 42 10 L 38 18 L 46 18 Z" fill="none" stroke={stroke} strokeWidth={sw} opacity="0.6" />
        <line x1="22" y1="28" x2="34" y2="28" stroke={stroke} strokeWidth={sw} opacity="0.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (variant === "ai") {
    return (
      <svg viewBox="0 0 56 32" xmlns="http://www.w3.org/2000/svg" className="h-full" aria-hidden="true">
        {/* Chip AI */}
        <rect x="14" y="6" width="28" height="20" rx="3" fill="none" stroke={stroke} strokeWidth={sw} opacity="0.6" />
        <text x="28" y="20" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill={stroke} textAnchor="middle" opacity="0.8">
          AI
        </text>
        {[10, 18, 26].map((y) => (
          <g key={y}>
            <line x1="6" y1={y} x2="14" y2={y} stroke={stroke} strokeWidth={sw - 0.2} opacity="0.4" />
            <line x1="42" y1={y} x2="50" y2={y} stroke={stroke} strokeWidth={sw - 0.2} opacity="0.4" />
          </g>
        ))}
      </svg>
    );
  }

  if (variant === "drive") {
    return (
      <svg viewBox="0 0 56 32" xmlns="http://www.w3.org/2000/svg" className="h-full" aria-hidden="true">
        {/* Pasta */}
        <path
          d="M 6 10 L 6 26 a 2 2 0 0 0 2 2 L 48 28 a 2 2 0 0 0 2 -2 L 50 12 a 2 2 0 0 0 -2 -2 L 28 10 L 24 6 L 8 6 a 2 2 0 0 0 -2 2 z"
          fill="none"
          stroke={stroke}
          strokeWidth={sw}
          opacity="0.6"
        />
        {/* Pilha de docs dentro */}
        <line x1="14" y1="18" x2="42" y2="18" stroke={stroke} strokeWidth={sw - 0.2} opacity="0.3" />
        <line x1="14" y1="22" x2="38" y2="22" stroke={stroke} strokeWidth={sw - 0.2} opacity="0.3" />
      </svg>
    );
  }

  // chamber
  return (
    <svg viewBox="0 0 56 32" xmlns="http://www.w3.org/2000/svg" className="h-full" aria-hidden="true">
      {/* Prédio com colunas */}
      <path d="M 8 28 L 8 14 L 28 4 L 48 14 L 48 28 Z" fill="none" stroke={stroke} strokeWidth={sw} opacity="0.6" />
      <line x1="8" y1="28" x2="48" y2="28" stroke={stroke} strokeWidth={sw + 0.2} opacity="0.6" strokeLinecap="round" />
      {[16, 22, 28, 34, 40].map((x) => (
        <line key={x} x1={x} y1="14" x2={x} y2="28" stroke={stroke} strokeWidth={sw - 0.2} opacity="0.3" />
      ))}
    </svg>
  );
}
