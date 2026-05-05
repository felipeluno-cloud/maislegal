export function Explainer1() {
  return (
    <div className="rounded-2xl border-2 border-stone-200 bg-white p-8 md:p-12">
      {/* Header */}
      <div className="mb-8 max-w-[820px]">
        <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
          Explainer 01 · Hoje vs com a <span className="normal-case">+legal_</span>
        </p>
        <h2 className="mb-4 font-title text-3xl font-bold tracking-tighter text-gray-900 md:text-4xl">
          Contratos hoje funcionam como telefone sem fio.
        </h2>
        <p className="text-base leading-relaxed text-gray-600 md:text-lg">
          Cada parte com sua versão. A mensagem se distorce no caminho.
          Quando vira disputa, ninguém sabe o que foi combinado de verdade.
        </p>
      </div>

      {/* Visual · Split Panel */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* HOJE · telefone sem fio */}
        <div className="rounded-xl border border-stone-200 bg-rose-50/50 p-7">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-red-700">
            <span className="size-1.5 rounded-full bg-red-600" />
            Hoje
          </div>

          <svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" className="mb-5 h-auto w-full">
            {/* 4 pessoas em fila com versões diferentes do contrato */}
            {[0, 1, 2, 3].map(i => {
              const x = 50 + i * 90;
              const versions = ["v1", "v2", "v4", "v?"];
              const distortion = i * 0.15;
              return (
                <g key={i} transform={`translate(${x} 110)`}>
                  {/* Pessoa */}
                  <circle cx="0" cy="-40" r="14" fill="white" stroke="#999990" strokeWidth="1.5" />
                  <circle cx="0" cy="-43" r="4" fill="#999990" opacity="0.7" />
                  <path d="M -7 -32 a 7 5 0 0 1 14 0" fill="#999990" opacity="0.7" />

                  {/* Documento na mão */}
                  <g transform={`translate(0 5) rotate(${i * 4 - 6})`}>
                    <rect x="-18" y="-22" width="36" height="44" rx="3" fill="white" stroke="#999990" strokeWidth="1.2" opacity={1 - distortion} />
                    <line x1="-12" y1="-12" x2="12" y2="-12" stroke="#999990" strokeWidth="0.8" opacity={0.6 - distortion} strokeLinecap="round" />
                    <line x1="-12" y1="-6" x2="8" y2="-6" stroke="#999990" strokeWidth="0.8" opacity={0.5 - distortion} strokeLinecap="round" />
                    <line x1="-12" y1="0" x2="12" y2="0" stroke="#999990" strokeWidth="0.8" opacity={0.4 - distortion} strokeLinecap="round" />
                    <text
                      x="0"
                      y="14"
                      fontFamily="JetBrains Mono, monospace"
                      fontSize="7"
                      fontWeight="700"
                      fill={i === 3 ? "#dc2626" : "#999990"}
                      textAnchor="middle"
                    >
                      {versions[i]}
                    </text>
                  </g>

                  {/* Setinha indicando passagem */}
                  {i < 3 && (
                    <g transform="translate(50 0)">
                      <line x1="-12" y1="0" x2="12" y2="0" stroke="#999990" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
                      <path d="M 8 -3 L 12 0 L 8 3" stroke="#999990" strokeWidth="1" fill="none" strokeLinecap="round" />
                    </g>
                  )}
                </g>
              );
            })}

            {/* X vermelho no final */}
            <g transform="translate(330 70)">
              <circle r="14" fill="#FEF3F2" stroke="#dc2626" strokeWidth="1.5" />
              <line x1="-5" y1="-5" x2="5" y2="5" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
              <line x1="5" y1="-5" x2="-5" y2="5" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
            </g>

            {/* Label */}
            <text
              x="180"
              y="200"
              fontFamily="JetBrains Mono, monospace"
              fontSize="9"
              fontWeight="700"
              fill="#dc2626"
              textAnchor="middle"
              letterSpacing="2"
            >
              4 PESSOAS · 4 VERSÕES · 0 ACORDO
            </text>
          </svg>

          <p className="text-sm leading-relaxed text-gray-700">
            Cada parte recebe o documento, edita, manda adiante. O histórico
            fica espalhado. No fim, ninguém tem certeza de qual é a versão
            valendo.
          </p>
        </div>

        {/* COM +legal_ · documento único */}
        <div className="rounded-xl border border-brand-light bg-brand-tint/40 p-7">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-brand">
            <span className="size-1.5 rounded-full bg-brand" />
            Com a +legal_
          </div>

          <svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" className="mb-5 h-auto w-full">
            {/* Documento único central */}
            <g transform="translate(180 110)">
              {/* Glow background */}
              <circle r="80" fill="var(--brand)" opacity="0.04" />
              <circle r="60" fill="var(--brand)" opacity="0.06" />

              {/* Documento */}
              <rect x="-40" y="-50" width="80" height="100" rx="8" fill="white" stroke="var(--brand)" strokeWidth="2" />
              <rect x="-40" y="-50" width="80" height="18" rx="8" fill="var(--brand)" />
              <rect x="-40" y="-42" width="80" height="10" fill="var(--brand)" />
              <text
                x="0"
                y="-39"
                fontFamily="JetBrains Mono, monospace"
                fontSize="8"
                fontWeight="700"
                fill="white"
                textAnchor="middle"
                letterSpacing="1.5"
              >
                CONTRATO
              </text>
              <line x1="-30" y1="-22" x2="30" y2="-22" stroke="var(--brand)" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
              <line x1="-30" y1="-14" x2="22" y2="-14" stroke="var(--brand)" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
              <line x1="-30" y1="-6" x2="30" y2="-6" stroke="var(--brand)" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
              <line x1="-30" y1="2" x2="26" y2="2" stroke="var(--brand)" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
              <line x1="-30" y1="10" x2="30" y2="10" stroke="var(--brand)" strokeWidth="1" opacity="0.4" strokeLinecap="round" />

              {/* Status */}
              <rect x="-26" y="22" width="52" height="14" rx="7" fill="#F0F9F4" stroke="var(--after, #2E8B57)" strokeWidth="1" />
              <text
                x="0"
                y="32"
                fontFamily="JetBrains Mono, monospace"
                fontSize="6"
                fontWeight="700"
                fill="var(--after, #2E8B57)"
                textAnchor="middle"
                letterSpacing="0.8"
              >
                ÚNICA VERSÃO
              </text>
            </g>

            {/* 4 pessoas em torno · todas vendo o mesmo */}
            {[
              { x: 50, y: 60 },
              { x: 310, y: 60 },
              { x: 50, y: 170 },
              { x: 310, y: 170 }
            ].map((p, i) => (
              <g key={i} transform={`translate(${p.x} ${p.y})`}>
                <circle r="14" fill="white" stroke="var(--brand)" strokeWidth="1.5" />
                <circle cx="0" cy="-3" r="4" fill="var(--brand)" opacity="0.7" />
                <path d="M -7 7 a 7 5 0 0 1 14 0" fill="var(--brand)" opacity="0.7" />
                {/* Linha conectora para o centro */}
                <line
                  x1={p.x < 180 ? 14 : -14}
                  y1="0"
                  x2={p.x < 180 ? 180 - p.x - 14 : 180 - p.x + 14}
                  y2={110 - p.y}
                  stroke="var(--brand)"
                  strokeWidth="1"
                  strokeDasharray="2 3"
                  opacity="0.3"
                />
              </g>
            ))}

            {/* Label */}
            <text
              x="180"
              y="210"
              fontFamily="JetBrains Mono, monospace"
              fontSize="9"
              fontWeight="700"
              fill="var(--brand)"
              textAnchor="middle"
              letterSpacing="2"
            >
              4 ENVOLVIDOS · 1 VERSÃO · ACORDO
            </text>
          </svg>

          <p className="text-sm leading-relaxed text-gray-700">
            O contrato vive em um ambiente único. Todos os envolvidos veem
            o mesmo, ao mesmo tempo, com histórico de cada mudança.
          </p>
        </div>
      </div>

      {/* Mapa da analogia */}
      <div className="mb-6 rounded-xl border border-stone-200 bg-stone-50 p-6 md:p-7">
        <p className="mb-5 font-mono text-[10px] font-bold uppercase tracking-widest text-brand">
          Mapa da analogia
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-300">
                <th className="pb-3 pr-4 text-left font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">
                  No telefone sem fio
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
                  ana: "A mensagem original",
                  real: "O contrato assinado",
                  why: "É o ponto de partida acordado entre todos."
                },
                {
                  ana: "Cada pessoa na fila",
                  real: "Cada parte do contrato",
                  why: "Todos têm acesso, mas cada um interpreta do seu jeito."
                },
                {
                  ana: "A versão final distorcida",
                  real: "Versões divergentes em e-mails e drives",
                  why: "Sem fonte única, cada lado guarda a sua \"versão certa\"."
                },
                {
                  ana: "O riso no final",
                  real: "A disputa anos depois",
                  why: "Quando a confusão aparece, é tarde para reconstruir."
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
            title: "Versão única",
            body: "Há um documento só, no ambiente. Todos os envolvidos veem o mesmo, ao mesmo tempo."
          },
          {
            num: "02",
            title: "Histórico de mudanças",
            body: "Cada alteração registrada com autoria e timestamp. Se mudou, fica visível para todos."
          },
          {
            num: "03",
            title: "Aprovação documentada",
            body: "Aditivos e ajustes precisam de aprovação registrada. Sem combinado verbal que vira disputa."
          }
        ].map(b => (
          <div
            key={b.num}
            className="rounded-xl border border-brand-light bg-brand-tint/40 p-5"
          >
            <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-widest text-brand">
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
      <div className="rounded-xl border border-brand-light bg-brand-tint p-6 md:p-7">
        <div className="flex items-start gap-4">
          <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand text-white font-mono text-sm font-bold">
            ✓
          </div>
          <div>
            <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-widest text-brand">
              A ideia em uma frase
            </p>
            <p className="font-title text-xl font-bold leading-snug text-gray-900 md:text-2xl">
              Uma versão. Todos os envolvidos. O mesmo histórico.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
