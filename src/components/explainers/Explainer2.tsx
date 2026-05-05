export function Explainer2() {
  return (
    <div className="rounded-2xl border-2 border-stone-200 bg-white p-8 md:p-12">
      {/* Header */}
      <div className="mb-8 max-w-[820px]">
        <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-widest text-peach-dark">
          Explainer 02 · Por que <span className="normal-case">+legal_</span>
        </p>
        <h2 className="mb-4 font-title text-3xl font-bold tracking-tighter text-gray-900 md:text-4xl">
          Os 3 pilares funcionam como um tripé.
        </h2>
        <p className="text-base leading-relaxed text-gray-600 md:text-lg">
          Cada perna sozinha existe em outras ferramentas. Mas tira uma e a
          câmera cai. Os três juntos é que sustentam.
        </p>
      </div>

      {/* Visual · Tripé com 3 pernas */}
      <div className="mb-8 rounded-xl border border-stone-200 bg-stone-50 p-8 md:p-12">
        <svg
          viewBox="0 0 600 480"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-auto w-full max-w-[640px]"
        >
          {/* +legal_ no topo · "câmera" do tripé */}
          <g transform="translate(300 80)">
            {/* Câmera body */}
            <rect
              x="-90"
              y="-32"
              width="180"
              height="64"
              rx="12"
              fill="white"
              stroke="#1a1a1a"
              strokeWidth="2"
            />
            {/* Lens */}
            <circle r="20" fill="white" stroke="#1a1a1a" strokeWidth="2" />
            <circle r="14" fill="var(--brand-tint)" stroke="var(--brand)" strokeWidth="1.5" />
            <circle r="6" fill="var(--brand)" />

            {/* Wordmark */}
            <text
              x="-65"
              y="-8"
              fontFamily="Barlow, sans-serif"
              fontSize="16"
              fontWeight="800"
              fill="#1a1a1a"
              letterSpacing="-0.5"
            >
              +legal_
            </text>
            <text
              x="-65"
              y="6"
              fontFamily="JetBrains Mono, monospace"
              fontSize="8"
              fontWeight="700"
              fill="#666660"
              letterSpacing="1.5"
            >
              ESTÁVEL · VIVO
            </text>

            {/* Top label */}
            <text
              x="0"
              y="-50"
              fontFamily="JetBrains Mono, monospace"
              fontSize="10"
              fontWeight="700"
              fill="#1a1a1a"
              textAnchor="middle"
              letterSpacing="2.5"
            >
              A PLATAFORMA
            </text>
          </g>

          {/* 3 pernas do tripé */}

          {/* Perna esquerda · Ambiente colaborativo · BRAND */}
          <g>
            <line
              x1="240"
              y1="120"
              x2="100"
              y2="380"
              stroke="var(--brand)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            {/* Pé */}
            <ellipse cx="100" cy="385" rx="22" ry="6" fill="var(--brand)" />

            {/* Label da perna */}
            <g transform="translate(100 420)">
              <rect
                x="-90"
                y="-15"
                width="180"
                height="36"
                rx="6"
                fill="var(--brand)"
              />
              <text
                x="0"
                y="-2"
                fontFamily="JetBrains Mono, monospace"
                fontSize="9"
                fontWeight="700"
                fill="white"
                textAnchor="middle"
                letterSpacing="1.5"
              >
                PILAR 01
              </text>
              <text
                x="0"
                y="13"
                fontFamily="Barlow, sans-serif"
                fontSize="13"
                fontWeight="800"
                fill="white"
                textAnchor="middle"
                letterSpacing="-0.3"
              >
                AMBIENTE COMPARTILHADO
              </text>
            </g>
          </g>

          {/* Perna central · Ciclo completo · PEACH */}
          <g>
            <line
              x1="300"
              y1="120"
              x2="300"
              y2="380"
              stroke="var(--peach-dark)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <ellipse cx="300" cy="385" rx="22" ry="6" fill="var(--peach-dark)" />

            <g transform="translate(300 420)">
              <rect
                x="-80"
                y="-15"
                width="160"
                height="36"
                rx="6"
                fill="var(--peach-dark)"
              />
              <text
                x="0"
                y="-2"
                fontFamily="JetBrains Mono, monospace"
                fontSize="9"
                fontWeight="700"
                fill="white"
                textAnchor="middle"
                letterSpacing="1.5"
              >
                PILAR 02
              </text>
              <text
                x="0"
                y="13"
                fontFamily="Barlow, sans-serif"
                fontSize="13"
                fontWeight="800"
                fill="white"
                textAnchor="middle"
                letterSpacing="-0.3"
              >
                CICLO COMPLETO
              </text>
            </g>
          </g>

          {/* Perna direita · Câmara SOMA · SOMA */}
          <g>
            <line
              x1="360"
              y1="120"
              x2="500"
              y2="380"
              stroke="var(--soma)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <ellipse cx="500" cy="385" rx="22" ry="6" fill="var(--soma)" />

            <g transform="translate(500 420)">
              <rect
                x="-90"
                y="-15"
                width="180"
                height="36"
                rx="6"
                fill="var(--soma)"
              />
              <text
                x="0"
                y="-2"
                fontFamily="JetBrains Mono, monospace"
                fontSize="9"
                fontWeight="700"
                fill="white"
                textAnchor="middle"
                letterSpacing="1.5"
              >
                PILAR 03
              </text>
              <text
                x="0"
                y="13"
                fontFamily="Barlow, sans-serif"
                fontSize="13"
                fontWeight="800"
                fill="white"
                textAnchor="middle"
                letterSpacing="-0.3"
              >
                CÂMARA SOMA INTEGRADA
              </text>
            </g>
          </g>

          {/* Linha do chão sutil */}
          <line
            x1="60"
            y1="385"
            x2="540"
            y2="385"
            stroke="#999990"
            strokeWidth="0.8"
            strokeDasharray="3 4"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Mapa da analogia */}
      <div className="mb-8 grid grid-cols-1 gap-3 md:grid-cols-3">
        {[
          {
            color: "brand",
            real: "Ambiente colaborativo",
            ana: "Perna esquerda",
            note: "Sem ela, a câmera tomba para um lado. As partes não enxergam o mesmo."
          },
          {
            color: "peach-dark",
            real: "Ciclo completo",
            ana: "Perna do meio",
            note: "Sem ela, a câmera fica torta. Você cobre só um pedaço do contrato."
          },
          {
            color: "soma",
            real: "Câmara SOMA acoplada",
            ana: "Perna direita",
            note: "Sem ela, a câmera não fica em pé quando vira disputa. Cai no judiciário."
          }
        ].map(p => (
          <div
            key={p.real}
            className="rounded-xl border border-stone-200 bg-stone-50 p-5"
          >
            <p
              className="mb-2 font-mono text-[10px] font-bold uppercase tracking-widest"
              style={{ color: `var(--${p.color})` }}
            >
              {p.ana}
            </p>
            <p className="mb-2 font-title text-base font-bold text-gray-900">
              {p.real}
            </p>
            <p className="text-xs leading-relaxed text-gray-600">{p.note}</p>
          </div>
        ))}
      </div>

      {/* O que acontece sem cada perna */}
      <div className="mb-6 rounded-xl border border-stone-200 bg-stone-50 p-6 md:p-7">
        <p className="mb-5 font-mono text-[10px] font-bold uppercase tracking-widest text-peach-dark">
          O que acontece se tira uma perna
        </p>
        <div className="space-y-4">
          {[
            {
              missing: "Sem ambiente colaborativo",
              what: "Você ganha gestão de contratos, mas só para um lado. A outra parte recebe PDF por e-mail e segue na própria planilha, então a fragmentação continua existindo.",
              color: "var(--brand)"
            },
            {
              missing: "Sem ciclo completo",
              what: "Você cria e assina bem, mas perde o controle depois. Renovação automática passa, SLA não é cobrado, garantia caduca. O contrato vira documento morto.",
              color: "var(--peach-dark)"
            },
            {
              missing: "Sem câmara acoplada",
              what: "Você acompanha o contrato bem, mas quando vira disputa cai no judiciário. Anos de espera, reconstrução de histórico, custo alto. O ciclo termina mal.",
              color: "var(--soma)"
            }
          ].map(item => (
            <div
              key={item.missing}
              className="flex items-start gap-4 rounded-lg bg-white p-4"
            >
              <div
                className="mt-1.5 size-3 flex-shrink-0 rounded-full"
                style={{ background: item.color }}
              />
              <div>
                <p
                  className="mb-1 font-mono text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: item.color }}
                >
                  {item.missing}
                </p>
                <p className="text-sm leading-relaxed text-gray-700">
                  {item.what}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* No mercado · quem tem cada perna */}
      <div className="mb-6 rounded-xl border border-stone-200 bg-stone-50 p-6 md:p-7">
        <p className="mb-5 font-mono text-[10px] font-bold uppercase tracking-widest text-peach-dark">
          No mercado hoje
        </p>
        <div className="space-y-3">
          {[
            { perna: "Apenas perna 01 (ambiente colaborativo)", quem: "Algumas plataformas de assinatura digital tentam isso, mas só para colaborar antes da assinatura." },
            { perna: "Apenas perna 02 (ciclo completo)", quem: "Os CLMs internos cobrem boa parte do ciclo, mas para uma das partes só. A outra recebe PDF." },
            { perna: "Apenas perna 03 (câmara)", quem: "Câmaras de mediação e arbitragem existem, mas operam separadas, sem acesso ao histórico do contrato." },
            { perna: "As três pernas juntas", quem: "Apenas a +legal_." }
          ].map((item, i) => (
            <div
              key={item.perna}
              className={`flex items-start gap-3 rounded-lg p-3 ${
                i === 3 ? "bg-peach-bg border border-peach-dark/30" : "bg-white"
              }`}
            >
              <span
                className={`font-mono text-xs font-bold ${
                  i === 3 ? "text-peach-dark" : "text-stone-500"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <p className={`mb-1 text-sm font-bold ${i === 3 ? "text-peach-dark" : "text-gray-900"}`}>
                  {item.perna}
                </p>
                <p className="text-xs text-gray-600">{item.quem}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key insight */}
      <div className="rounded-xl border border-brand-light bg-brand-tint p-6 md:p-7">
        <div className="flex items-start gap-4">
          <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg bg-peach-dark text-white font-mono text-sm font-bold">
            ✓
          </div>
          <div>
            <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-widest text-peach-dark">
              A ideia em uma frase
            </p>
            <p className="font-title text-xl font-bold leading-snug text-gray-900 md:text-2xl">
              Cada pilar existe em algum lugar. Os três juntos, só na +legal_.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
