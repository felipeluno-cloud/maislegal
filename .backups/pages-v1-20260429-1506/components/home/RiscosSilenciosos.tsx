import { ShieldAlert } from "lucide-react";

const RISCOS = [
  {
    name: "Renovação automática que ninguém viu",
    desc: "Cláusula de cancelamento com 90 dias de antecedência. Ninguém lembrou. O contrato renovou sem revisão de preço.",
    cost: "R$ 30K A R$ 200K",
    visual: "renewal"
  },
  {
    name: "SLA descumprido, multa nunca cobrada",
    desc: "Fornecedor entrega fora do prazo. A multa contratual existe, mas ninguém lembra que existe, ninguém sabe como cobrar.",
    cost: "2 A 5% DA FATURA ANUAL",
    visual: "sla"
  },
  {
    name: "Reajuste IGP-M nunca aplicado",
    desc: "A cláusula prevê reajuste anual. A operação esquece. Todo ano, o fornecedor deixa dinheiro na mesa.",
    cost: "4 A 8% AO ANO",
    visual: "igpm"
  },
  {
    name: "Cláusula de não-concorrência esquecida",
    desc: "Funcionário sai, monta concorrente. A cláusula existia, mas ninguém vai atrás. A empresa perde mercado, ninguém faz nada.",
    cost: "IMPACTO NO MERCADO",
    visual: "clause"
  },
  {
    name: "Garantia vencida, dinheiro parado",
    desc: "Caução ou retenção contratual. O prazo de devolução chegou, ninguém pediu. O dinheiro fica parado, ninguém devolve.",
    cost: "5 A 10% DO CONTRATO",
    visual: "warranty"
  },
  {
    name: "Aditivo verbal que vira disputa",
    desc: "Combinado por WhatsApp. Sem registro. Vira litígio meses depois, quando ninguém mais lembra dos detalhes.",
    cost: "TEMPO + RELACIONAMENTO",
    visual: "verbal"
  }
] as const;

export function RiscosSilenciosos() {
  return (
    <section className="relative bg-white">
      <div className="container-soma section-soma">
        <div className="mb-12 max-w-[820px]">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-200 bg-rose-50 px-3 py-1.5">
            <ShieldAlert className="size-4 text-red-600" strokeWidth={2} />
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-red-700">
              O problema
            </span>
          </div>
          <h2 className="h-soma mb-4">
            Não é falha de gestão. É o desenho do problema.
          </h2>
          <p className="mb-3 text-lg leading-relaxed text-gray-600">
            Contratos são feitos para serem assinados. Depois disso, viram
            responsabilidade de ninguém.
          </p>
          <p className="text-base leading-relaxed text-stone-500">
            Os custos que aparecem quando já é tarde. Seis cenários comuns.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {RISCOS.map(r => (
            <div
              key={r.name}
              className="group flex flex-col rounded-2xl border border-stone-200 border-l-4 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ borderLeftColor: "#dc2626" }}
            >
              <div className="mb-5 flex h-[72px] items-center">
                <RiscoVisual variant={r.visual} />
              </div>

              <div className="mb-4 inline-flex self-start items-center gap-2 rounded-lg bg-rose-50 px-3 py-1.5">
                <span className="size-1.5 rounded-full bg-red-600" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-red-700">
                  {r.cost}
                </span>
              </div>

              <h3 className="mb-3 font-title text-lg font-bold leading-snug text-gray-900">
                {r.name}
              </h3>

              <p className="text-sm leading-relaxed text-gray-600">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RiscoVisual({ variant }: { variant: string }) {
  const stroke = "var(--brand)";
  const sw = 1.4;

  if (variant === "renewal") {
    return (
      <svg viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg" className="h-full">
        <rect x="6" y="10" width="44" height="42" rx="4" fill="none" stroke={stroke} strokeWidth={sw} opacity="0.4" />
        <line x1="6" y1="20" x2="50" y2="20" stroke={stroke} strokeWidth={sw} opacity="0.4" />
        <line x1="16" y1="6" x2="16" y2="14" stroke={stroke} strokeWidth={sw} opacity="0.4" strokeLinecap="round" />
        <line x1="40" y1="6" x2="40" y2="14" stroke={stroke} strokeWidth={sw} opacity="0.4" strokeLinecap="round" />
        {[26, 35, 44].map(y =>
          [13, 21, 29, 37, 45].map(x => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="1.4" fill={stroke} opacity="0.25" />
          ))
        )}
        <circle cx="29" cy="35" r="3" fill="#dc2626" opacity="0.85" />
        <g transform="translate(60 28)">
          <path
            d="M 0 -10 A 10 10 0 1 1 -10 0 L -7 -3 M -10 0 L -13 -3"
            fill="none"
            stroke={stroke}
            strokeWidth={sw + 0.2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    );
  }

  if (variant === "sla") {
    return (
      <svg viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg" className="h-full">
        <circle cx="30" cy="30" r="22" fill="none" stroke={stroke} strokeWidth={sw} opacity="0.4" />
        {[0, 90, 180, 270].map(deg => {
          const rad = (deg * Math.PI) / 180;
          const x1 = 30 + Math.cos(rad) * 19;
          const y1 = 30 + Math.sin(rad) * 19;
          const x2 = 30 + Math.cos(rad) * 22;
          const y2 = 30 + Math.sin(rad) * 22;
          return (
            <line
              key={deg}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={stroke}
              strokeWidth={sw}
              opacity="0.5"
              strokeLinecap="round"
            />
          );
        })}
        <line x1="30" y1="30" x2="42" y2="20" stroke={stroke} strokeWidth={sw + 0.4} opacity="0.7" strokeLinecap="round" />
        <line x1="30" y1="30" x2="30" y2="14" stroke={stroke} strokeWidth={sw + 0.4} opacity="0.7" strokeLinecap="round" />
        <circle cx="30" cy="30" r="2" fill={stroke} />
        <g transform="translate(60 14)">
          <circle r="9" fill="#dc2626" opacity="0.95" />
          <line x1="-3.5" y1="-3.5" x2="3.5" y2="3.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="3.5" y1="-3.5" x2="-3.5" y2="3.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
        </g>
      </svg>
    );
  }

  if (variant === "igpm") {
    return (
      <svg viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg" className="h-full">
        <line x1="6" y1="50" x2="74" y2="50" stroke={stroke} strokeWidth={sw} opacity="0.3" />
        <line x1="6" y1="6" x2="6" y2="50" stroke={stroke} strokeWidth={sw} opacity="0.3" />
        <polyline
          points="10,42 22,38 34,30 46,22 58,14 70,8"
          fill="none"
          stroke="var(--peach-dark)"
          strokeWidth={sw + 0.4}
          strokeDasharray="3 2"
          strokeLinecap="round"
          opacity="0.85"
        />
        <polyline
          points="10,42 22,42 34,42 46,42 58,42 70,42"
          fill="none"
          stroke={stroke}
          strokeWidth={sw + 0.6}
          strokeLinecap="round"
          opacity="0.7"
        />
        <circle cx="70" cy="42" r="2.2" fill={stroke} />
        <circle cx="70" cy="8" r="2.2" fill="var(--peach-dark)" />
        <line
          x1="70"
          y1="40"
          x2="70"
          y2="11"
          stroke="#dc2626"
          strokeWidth="1"
          opacity="0.6"
          strokeDasharray="1.5 1.5"
        />
      </svg>
    );
  }

  if (variant === "clause") {
    return (
      <svg viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg" className="h-full">
        <rect x="20" y="6" width="40" height="48" rx="3" fill="none" stroke={stroke} strokeWidth={sw} opacity="0.4" />
        <line x1="25" y1="14" x2="55" y2="14" stroke={stroke} strokeWidth={sw} opacity="0.3" strokeLinecap="round" />
        <line x1="25" y1="20" x2="50" y2="20" stroke={stroke} strokeWidth={sw} opacity="0.3" strokeLinecap="round" />
        <line x1="25" y1="26" x2="55" y2="26" stroke={stroke} strokeWidth={sw} opacity="0.3" strokeLinecap="round" />
        <rect x="23" y="30" width="34" height="10" rx="1.5" fill="var(--peach)" opacity="0.5" />
        <line x1="25" y1="33" x2="53" y2="33" stroke={stroke} strokeWidth={sw + 0.2} opacity="0.85" strokeLinecap="round" />
        <line x1="25" y1="37" x2="48" y2="37" stroke={stroke} strokeWidth={sw + 0.2} opacity="0.85" strokeLinecap="round" />
        <line x1="25" y1="44" x2="55" y2="44" stroke={stroke} strokeWidth={sw} opacity="0.3" strokeLinecap="round" />
        <line x1="25" y1="50" x2="44" y2="50" stroke={stroke} strokeWidth={sw} opacity="0.3" strokeLinecap="round" />
        <g transform="translate(64 12)" opacity="0.85">
          <circle r="6" fill="white" stroke="#dc2626" strokeWidth="1.4" />
          <line x1="-4.2" y1="4.2" x2="4.2" y2="-4.2" stroke="#dc2626" strokeWidth="1.4" strokeLinecap="round" />
        </g>
      </svg>
    );
  }

  if (variant === "warranty") {
    return (
      <svg viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg" className="h-full">
        <rect x="20" y="22" width="34" height="28" rx="3" fill="none" stroke={stroke} strokeWidth={sw} opacity="0.5" />
        <path
          d="M 26 22 V 16 a 11 11 0 0 1 22 0 V 22"
          fill="none"
          stroke={stroke}
          strokeWidth={sw}
          opacity="0.5"
        />
        <text
          x="37"
          y="42"
          fontFamily="JetBrains Mono, monospace"
          fontSize="14"
          fontWeight="700"
          fill={stroke}
          textAnchor="middle"
          opacity="0.7"
        >
          R$
        </text>
        <g transform="translate(64 14)">
          <circle r="9" fill="#dc2626" opacity="0.95" />
          <path
            d="M -3.5 -3.5 L 3.5 -3.5 L -3.5 3.5 L 3.5 3.5 Z"
            fill="white"
            opacity="0.9"
          />
        </g>
      </svg>
    );
  }

  if (variant === "verbal") {
    return (
      <svg viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg" className="h-full">
        <path
          d="M 8 14 H 38 a 4 4 0 0 1 4 4 v 12 a 4 4 0 0 1 -4 4 H 18 l -6 6 v -6 H 8 a 4 4 0 0 1 -4 -4 V 18 a 4 4 0 0 1 4 -4 z"
          fill="white"
          stroke={stroke}
          strokeWidth={sw}
          opacity="0.5"
        />
        <line x1="11" y1="20" x2="34" y2="20" stroke={stroke} strokeWidth={sw} opacity="0.3" strokeLinecap="round" />
        <line x1="11" y1="26" x2="28" y2="26" stroke={stroke} strokeWidth={sw} opacity="0.3" strokeLinecap="round" />
        <path
          d="M 46 26 H 72 a 4 4 0 0 1 4 4 v 12 a 4 4 0 0 1 -4 4 H 56 l -4 5 v -5 H 46 a 4 4 0 0 1 -4 -4 V 30 a 4 4 0 0 1 4 -4 z"
          fill="white"
          stroke={stroke}
          strokeWidth={sw}
          opacity="0.5"
        />
        <text
          x="59"
          y="42"
          fontFamily="Barlow, sans-serif"
          fontSize="14"
          fontWeight="800"
          fill="#dc2626"
          textAnchor="middle"
        >
          ?
        </text>
      </svg>
    );
  }

  return null;
}
