export function Explainer3() {
  return (
    <div className="rounded-2xl border-2 border-stone-200 bg-white p-8 md:p-12">
      {/* Header */}
      <div className="mb-8 max-w-[820px]">
        <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-widest text-soma">
          Explainer 03 · A câmara SOMA acoplada
        </p>
        <h2 className="mb-4 font-title text-3xl font-bold tracking-tighter text-gray-900 md:text-4xl">
          Como ter o pronto-socorro no mesmo prédio do hospital.
        </h2>
        <p className="text-base leading-relaxed text-gray-600 md:text-lg">
          Quando vira emergência, ninguém quer pegar uma ambulância para outra
          cidade. Quer o atendimento dali mesmo.
        </p>
      </div>

      {/* Visual · Before / After */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* SEM SOMA · prédios separados, longe */}
        <div className="rounded-xl border border-stone-200 bg-rose-50/40 p-7">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-red-700">
            <span className="size-1.5 rounded-full bg-red-600" />
            Outras ferramentas
          </div>

          <svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" className="mb-5 h-auto w-full">
            {/* Prédio 1 · ferramenta de gestão */}
            <g transform="translate(60 130)">
              <rect x="-32" y="-50" width="64" height="80" fill="white" stroke="#999990" strokeWidth="1.5" />
              {/* Janelas */}
              {[0, 1, 2, 3].map(row => (
                [0, 1].map(col => (
                  <rect
                    key={`${row}-${col}`}
                    x={-22 + col * 22}
                    y={-42 + row * 18}
                    width="14"
                    height="10"
                    fill="#999990"
                    opacity="0.3"
                  />
                ))
              ))}
              <text
                x="0"
                y="48"
                fontFamily="JetBrains Mono, monospace"
                fontSize="8"
                fontWeight="700"
                fill="#666660"
                textAnchor="middle"
                letterSpacing="1.5"
              >
                CONTRATO
              </text>
            </g>

            {/* Caminho longo · setas + km */}
            <g transform="translate(180 130)">
              <line
                x1="-72"
                y1="0"
                x2="72"
                y2="0"
                stroke="#dc2626"
                strokeWidth="2"
                strokeDasharray="6 4"
                opacity="0.7"
              />
              <path
                d="M 64 -5 L 72 0 L 64 5"
                fill="none"
                stroke="#dc2626"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <text
                x="0"
                y="-12"
                fontFamily="JetBrains Mono, monospace"
                fontSize="9"
                fontWeight="700"
                fill="#dc2626"
                textAnchor="middle"
                letterSpacing="2"
              >
                ANOS
              </text>
              <text
                x="0"
                y="18"
                fontFamily="JetBrains Mono, monospace"
                fontSize="7"
                fontWeight="700"
                fill="#dc2626"
                textAnchor="middle"
                letterSpacing="1"
                opacity="0.7"
              >
                + RECONSTRUÇÃO
              </text>
            </g>

            {/* Prédio 2 · judiciário (longe, grande, intimidador) */}
            <g transform="translate(300 130)">
              <rect x="-36" y="-60" width="72" height="90" fill="white" stroke="#999990" strokeWidth="1.5" />
              {/* Colunas */}
              {[0, 1, 2, 3].map(i => (
                <rect
                  key={i}
                  x={-30 + i * 18}
                  y={-50}
                  width="6"
                  height="60"
                  fill="#999990"
                  opacity="0.5"
                />
              ))}
              {/* Triângulo do telhado */}
              <path d="M -40 -60 L 0 -78 L 40 -60 z" fill="#999990" opacity="0.7" />
              <text
                x="0"
                y="48"
                fontFamily="JetBrains Mono, monospace"
                fontSize="8"
                fontWeight="700"
                fill="#666660"
                textAnchor="middle"
                letterSpacing="1.5"
              >
                JUDICIÁRIO
              </text>
            </g>
          </svg>

          <p className="text-sm leading-relaxed text-gray-700">
            O contrato vive em uma ferramenta. Quando vira disputa, vai para o
            judiciário, do outro lado da cidade. Reconstrução do histórico
            antes de qualquer estratégia. Anos de espera.
          </p>
        </div>

        {/* COM SOMA · prédio único */}
        <div className="rounded-xl border border-soma/30 bg-soma-bg/40 p-7">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-soma">
            <span className="size-1.5 rounded-full bg-soma" />
            Com a +legal_
          </div>

          <svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" className="mb-5 h-auto w-full">
            {/* Prédio único · +legal_ + SOMA acoplada */}
            <g transform="translate(180 140)">
              {/* Sombra */}
              <rect
                x="-100"
                y="-78"
                width="200"
                height="118"
                rx="6"
                fill="var(--soma-bg)"
                transform="translate(6 6)"
                opacity="0.6"
              />

              {/* Building principal +legal_ */}
              <rect x="-100" y="-78" width="140" height="118" fill="white" stroke="var(--brand)" strokeWidth="2" />
              {/* Janelas +legal_ */}
              {[0, 1, 2, 3, 4].map(row => (
                [0, 1, 2, 3].map(col => (
                  <rect
                    key={`l-${row}-${col}`}
                    x={-92 + col * 32}
                    y={-70 + row * 22}
                    width="24"
                    height="14"
                    fill="var(--brand)"
                    opacity="0.15"
                  />
                ))
              ))}
              <text
                x="-30"
                y="48"
                fontFamily="Barlow, sans-serif"
                fontSize="11"
                fontWeight="800"
                fill="var(--brand)"
                textAnchor="middle"
                letterSpacing="-0.3"
              >
                +legal_
              </text>

              {/* SOMA acoplada · ala separada mas conectada */}
              <rect x="40" y="-78" width="60" height="118" fill="var(--soma-bg)" stroke="var(--soma)" strokeWidth="2" />
              {/* Cruz médica grande */}
              <g transform="translate(70 -20)">
                <rect x="-3" y="-18" width="6" height="36" fill="var(--soma)" rx="1" />
                <rect x="-18" y="-3" width="36" height="6" fill="var(--soma)" rx="1" />
              </g>
              <text
                x="70"
                y="48"
                fontFamily="Barlow, sans-serif"
                fontSize="11"
                fontWeight="800"
                fill="var(--soma)"
                textAnchor="middle"
                letterSpacing="-0.3"
              >
                SOMA
              </text>

              {/* Linha de conexão entre os dois (porta interna) */}
              <line x1="40" y1="0" x2="40" y2="-12" stroke="white" strokeWidth="6" />

              {/* Setinha curta · 1 clique */}
              <g transform="translate(20 -30)">
                <text
                  x="0"
                  y="-26"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="8"
                  fontWeight="700"
                  fill="var(--soma)"
                  textAnchor="middle"
                  letterSpacing="1.5"
                >
                  1 CLIQUE
                </text>
                <text
                  x="0"
                  y="-14"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="7"
                  fontWeight="700"
                  fill="var(--soma)"
                  textAnchor="middle"
                  letterSpacing="1"
                  opacity="0.7"
                >
                  HISTÓRICO PRONTO
                </text>
              </g>

              {/* Status verde · operacional */}
              <g transform="translate(0 -94)">
                <rect x="-50" y="-9" width="100" height="18" rx="9" fill="white" stroke="var(--after, #2E8B57)" strokeWidth="1.2" />
                <circle cx="-36" cy="0" r="3" fill="var(--after, #2E8B57)" />
                <text
                  x="-22"
                  y="3"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="8"
                  fontWeight="700"
                  fill="var(--after, #2E8B57)"
                  letterSpacing="1"
                >
                  TUDO INTEGRADO
                </text>
              </g>
            </g>

            {/* Label embaixo */}
            <text
              x="180"
              y="220"
              fontFamily="JetBrains Mono, monospace"
              fontSize="9"
              fontWeight="700"
              fill="var(--soma)"
              textAnchor="middle"
              letterSpacing="2"
            >
              MESES · MESMO PRÉDIO
            </text>
          </svg>

          <p className="text-sm leading-relaxed text-gray-700">
            O contrato e a câmara SOMA dividem o mesmo ambiente. Quando vira
            disputa, é só atravessar a porta. O histórico já está lá.
            Resolução em meses, não anos.
          </p>
        </div>
      </div>

      {/* Mapa da analogia */}
      <div className="mb-6 rounded-xl border border-stone-200 bg-stone-50 p-6 md:p-7">
        <p className="mb-5 font-mono text-[10px] font-bold uppercase tracking-widest text-soma">
          Mapa da analogia
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-300">
                <th className="pb-3 pr-4 text-left font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">
                  No mundo do hospital
                </th>
                <th className="pb-3 pr-4 text-left font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">
                  No mundo dos contratos
                </th>
                <th className="pb-3 text-left font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">
                  Por que funciona
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {[
                {
                  ana: "O hospital",
                  real: "O ambiente da +legal_",
                  why: "É onde o contrato vive, é monitorado, é cuidado."
                },
                {
                  ana: "O pronto-socorro acoplado",
                  real: "A câmara SOMA integrada",
                  why: "Atendimento de emergência no mesmo prédio, sem deslocamento."
                },
                {
                  ana: "O prontuário do paciente",
                  real: "O histórico do contrato",
                  why: "Quando vira urgência, o médico já tem todas as informações."
                },
                {
                  ana: "Hospital sem pronto-socorro",
                  real: "Outras ferramentas de gestão",
                  why: "Quando vira emergência, ambulância para outro lugar. Anos de espera."
                }
              ].map(row => (
                <tr key={row.ana}>
                  <td className="py-3 pr-4 align-top text-gray-700">{row.ana}</td>
                  <td className="py-3 pr-4 align-top font-medium text-gray-900">
                    {row.real}
                  </td>
                  <td className="py-3 align-top text-gray-600">{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Como aparece na +legal_ */}
      <div className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-3">
        {[
          {
            num: "01",
            title: "Abertura com 1 clique",
            body: "Surgiu disputa, abre o procedimento direto do contrato. Sem peticionar em outro sistema."
          },
          {
            num: "02",
            title: "Histórico já no prontuário",
            body: "Árbitro e mediador veem todo o histórico do contrato. Cada versão, cada aditivo, cada decisão."
          },
          {
            num: "03",
            title: "Atendimento em meses",
            body: "Procedimento simplificado em até 6 meses. Padrão em até 1 ano. Não anos no judiciário."
          }
        ].map(b => (
          <div
            key={b.num}
            className="rounded-xl border border-soma/30 bg-soma-bg/40 p-5"
          >
            <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-widest text-soma">
              Como aparece · {b.num}
            </p>
            <p className="mb-1 font-title text-base font-bold text-gray-900">
              {b.title}
            </p>
            <p className="text-xs leading-relaxed text-gray-700">{b.body}</p>
          </div>
        ))}
      </div>

      {/* Key insight */}
      <div
        className="rounded-xl border-2 p-6 md:p-7"
        style={{ borderColor: "var(--soma)", background: "var(--soma-bg)" }}
      >
        <div className="flex items-start gap-4">
          <div
            className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg text-white font-mono text-sm font-bold"
            style={{ background: "var(--soma)" }}
          >
            ✓
          </div>
          <div>
            <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-widest text-soma">
              A ideia em uma frase
            </p>
            <p className="font-title text-xl font-bold leading-snug text-gray-900 md:text-2xl">
              Outras ferramentas terminam onde o problema começa. A +legal_
              continua, no mesmo lugar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
