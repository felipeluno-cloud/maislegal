import { Users, Check } from "lucide-react";

const O_QUE_MUDA = [
  "Mesma versão do contrato para a PME e o cliente, no mesmo ambiente.",
  "Histórico de negociação visível para todos os envolvidos, no mesmo lugar.",
  "Combinados informais ficam formalizados, com aprovação documentada.",
  "Quando algo é questionado, a evidência aparece na hora."
];

export function Pilar01Colaborativo() {
  return (
    <section className="relative bg-white">
      <div className="container-soma section-soma">
        {/* Header do pilar */}
        <div className="mb-12 max-w-[860px]">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1.5"
            style={{
              background: "var(--peach-bg)",
              borderColor: "rgba(30,41,59,0.25)"
            }}
          >
            <span
              className="font-mono text-[11px] font-bold uppercase tracking-widest"
              style={{ color: "var(--peach-dark)" }}
            >
              Pilar 01
            </span>
            <span className="h-3 w-px bg-peach-dark/40" />
            <Users className="size-4 text-peach-dark" strokeWidth={1.6} />
            <span
              className="font-mono text-[11px] font-bold uppercase tracking-widest"
              style={{ color: "var(--peach-dark)" }}
            >
              PMEs
            </span>
          </div>

          <h2 className="h-soma mb-4">
            O cliente abre o mesmo contrato que você está editando.
          </h2>

          <p className="mb-3 text-lg leading-relaxed text-gray-700">
            O cliente corporativo abre o mesmo contrato que você está editando. Comentários ficam onde a discussão acontece, não em um e-mail que ninguém acha depois.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Quando a versão é a mesma para os dois lados, deixa de existir &ldquo;minha versão&rdquo; e &ldquo;versão deles&rdquo;.
          </p>
        </div>

        {/* Visual full-width · ambiente compartilhado */}
        <div className="mb-12">
          <VisualAmbiente />
        </div>

        {/* Layout cenário + lista (2-col, mesmo padrão P2/P3) */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Cenário típico */}
          <div
            className="rounded-2xl border p-6 md:p-7"
            style={{
              borderColor: "var(--brand-light)",
              background: "var(--brand-tint)"
            }}
          >
            <p
              className="mb-3 font-mono text-[11px] font-bold uppercase tracking-widest"
              style={{ color: "var(--brand)" }}
            >
              Cenário típico
            </p>

            <p className="mb-3 font-title text-lg font-bold leading-snug text-gray-900 md:text-xl">
              Você fechou um negócio importante com cliente corporativo. E agora?
            </p>
            <p className="font-title text-base leading-relaxed text-gray-900 md:text-lg">
              Sua agência cresceu rápido. <strong className="font-extrabold">Uma dúzia de pessoas no time</strong>, e o último cliente pesa <strong className="font-extrabold">R$ 80 mil por ano</strong>, com cláusulas de confidencialidade, KPIs mensais e marcos de entrega exigentes. Do outro lado, <strong className="font-extrabold">jurídico interno e processo formal</strong>. O contrato precisa morar no mesmo lugar para os dois.
            </p>
          </div>

          {/* O que muda na prática */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-7">
            <p
              className="mb-4 font-mono text-[11px] font-bold uppercase tracking-widest"
              style={{ color: "var(--peach-dark)" }}
            >
              O que muda na prática
            </p>
            <ul className="flex flex-col gap-3">
              {O_QUE_MUDA.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "var(--peach-bg)" }}
                  >
                    <Check
                      className="size-3 text-peach-dark"
                      strokeWidth={3}
                    />
                  </span>
                  <span className="text-[15px] leading-snug text-gray-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Visual horizontal · 2 lados editando o mesmo contrato (PME peach + Cliente cinza)
function VisualAmbiente() {
  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-8 md:p-10">
      <p
        className="mb-6 text-center font-mono text-[11px] font-bold uppercase tracking-widest"
        style={{ color: "var(--peach-dark)" }}
      >
        Mesma versão para os dois lados
      </p>

      <svg
        viewBox="0 0 1100 240"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
        aria-hidden="true"
      >
        {/* PME · esquerda · peach (dominante) */}
        <g transform="translate(120 120)">
          <rect
            x="-78"
            y="-44"
            width="156"
            height="88"
            rx="10"
            fill="white"
            stroke="var(--peach-dark)"
            strokeWidth="2"
          />
          <text
            x="0"
            y="-12"
            fontFamily="JetBrains Mono, monospace"
            fontSize="11"
            fontWeight="700"
            fill="var(--peach-dark)"
            textAnchor="middle"
            letterSpacing="2.5"
            opacity="0.6"
          >
            PME
          </text>
          <text
            x="0"
            y="20"
            fontFamily="Barlow, sans-serif"
            fontSize="22"
            fontWeight="800"
            fill="var(--peach-dark)"
            textAnchor="middle"
          >
            Agência
          </text>
        </g>

        {/* Linha PME → contrato */}
        <path
          d="M 200 120 Q 290 120 380 120"
          stroke="var(--peach-dark)"
          strokeWidth="2"
          strokeDasharray="5 5"
          fill="none"
          opacity="0.5"
        />

        {/* CONTRATO · centro */}
        <g transform="translate(550 120)">
          <rect
            x="-110"
            y="-90"
            width="220"
            height="180"
            rx="12"
            fill="white"
            stroke="var(--peach-dark)"
            strokeWidth="2.5"
          />
          <rect
            x="-110"
            y="-90"
            width="220"
            height="22"
            rx="12"
            fill="#F5E0CD"
          />
          <rect
            x="-110"
            y="-78"
            width="220"
            height="10"
            fill="#F5E0CD"
          />
          <text
            x="0"
            y="-74"
            fontFamily="JetBrains Mono, monospace"
            fontSize="11"
            fontWeight="700"
            fill="#A86A33"
            textAnchor="middle"
            letterSpacing="2"
          >
            CONTRATO
          </text>

          {/* Linhas do documento */}
          <line x1="-90" y1="-50" x2="90" y2="-50" stroke="var(--peach-dark)" strokeWidth="2" opacity="0.3" />
          <line x1="-90" y1="-30" x2="70" y2="-30" stroke="var(--peach-dark)" strokeWidth="2" opacity="0.3" />
          <line x1="-90" y1="-10" x2="90" y2="-10" stroke="var(--peach-dark)" strokeWidth="2" opacity="0.3" />
          <line x1="-90" y1="10" x2="80" y2="10" stroke="var(--peach-dark)" strokeWidth="2" opacity="0.3" />
          <line x1="-90" y1="30" x2="90" y2="30" stroke="var(--peach-dark)" strokeWidth="2" opacity="0.3" />
          <line x1="-90" y1="50" x2="60" y2="50" stroke="var(--peach-dark)" strokeWidth="2" opacity="0.3" />
          <line x1="-90" y1="70" x2="90" y2="70" stroke="var(--peach-dark)" strokeWidth="2" opacity="0.3" />

          {/* Cursor PME (peach) */}
          <g transform="translate(20 -38)">
            <path
              d="M 0 0 L 0 18 L 6 14 L 9 21 L 13 19 L 8 12 L 14 12 Z"
              fill="var(--peach-dark)"
              stroke="white"
              strokeWidth="1"
            />
            <rect x="16" y="3" width="48" height="16" rx="3" fill="var(--peach-dark)" />
            <text
              x="40"
              y="14"
              fontFamily="JetBrains Mono, monospace"
              fontSize="10"
              fontWeight="700"
              fill="white"
              textAnchor="middle"
              letterSpacing="0.8"
            >
              PME
            </text>
          </g>

          {/* Cursor Cliente (cinza neutro) */}
          <g transform="translate(-20 22)">
            <path
              d="M 0 0 L 0 18 L 6 14 L 9 21 L 13 19 L 8 12 L 14 12 Z"
              fill="#6b7280"
              stroke="white"
              strokeWidth="1"
            />
            <rect x="16" y="3" width="62" height="16" rx="3" fill="#6b7280" />
            <text
              x="47"
              y="14"
              fontFamily="JetBrains Mono, monospace"
              fontSize="10"
              fontWeight="700"
              fill="white"
              textAnchor="middle"
              letterSpacing="0.8"
            >
              CLIENTE
            </text>
          </g>
        </g>

        {/* Linha contrato → Cliente */}
        <path
          d="M 720 120 Q 810 120 900 120"
          stroke="#6b7280"
          strokeWidth="2"
          strokeDasharray="5 5"
          fill="none"
          opacity="0.5"
        />

        {/* CLIENTE · direita · cinza neutro */}
        <g transform="translate(980 120)">
          <rect
            x="-78"
            y="-44"
            width="156"
            height="88"
            rx="10"
            fill="white"
            stroke="#6b7280"
            strokeWidth="2"
          />
          <text
            x="0"
            y="-12"
            fontFamily="JetBrains Mono, monospace"
            fontSize="11"
            fontWeight="700"
            fill="#6b7280"
            textAnchor="middle"
            letterSpacing="2.5"
            opacity="0.7"
          >
            CLIENTE
          </text>
          <text
            x="0"
            y="20"
            fontFamily="Barlow, sans-serif"
            fontSize="22"
            fontWeight="800"
            fill="#374151"
            textAnchor="middle"
          >
            Corporativo
          </text>
        </g>
      </svg>
    </div>
  );
}
