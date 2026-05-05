"use client";

import { ShieldAlert } from "lucide-react";

/**
 * Versão LAB do RiscosSilenciosos.
 *
 * Diferenças vs versão de produção:
 * - Risco 03 (Reputação queimada) usa peach (era terracotta SOMA)
 * - Aplica regra estrita: terracotta SOMA só onde a câmara é mencionada como produto
 * - Risco 03 não cita SOMA, então perde a terracotta
 */

const RISCOS = [
  {
    eixo: "Relacionamentos que rompem",
    personaTag: "Pesa para PMEs sem time jurídico",
    title: "O cliente não disse nada. Só não voltou.",
    body1:
      "Cliente grande percebe quando você não tem estrutura no contrato. Ele não reclama, mas também não renova. Pior: também não indica.",
    body2: "A rede dele já soube como foi a transição.",
    custoLabel: "Custo total",
    custoValue: "LTV + INDICAÇÕES + REDE",
    custoSub: "ticket anual × tempo de relação × multiplicador",
    tese: "Um cliente referência paga a +legal_",
    teseStrong: "por mais de 50 anos.",
    visual: "relacionamento",
    accent: "var(--peach-dark)"
  },
  {
    eixo: "Dados expostos",
    personaTag: "Pesa para Diretoras de Operações",
    title: "A cláusula de confidencialidade ninguém leu.",
    body1:
      "Você assina o NDA junto com o contrato. Ele tem uma lista do que pode e do que não pode sair, mas essa lista nunca vira rotina, e ninguém no time sabe exatamente o que está protegido.",
    body2: "Quando algum dado escorrega, a multa LGPD chega antes da explicação.",
    custoLabel: "Multa LGPD",
    custoValue: "ATÉ 2% DO FATURAMENTO",
    custoSub: "limite de R$ 50 milhões por infração",
    tese: "+legal_ custa R$ 6 mil/ano por seat extra.",
    teseStrong: "Uma multa LGPD passa de R$ 500 mil.",
    visual: "dados",
    accent: "var(--brand)"
  },
  {
    eixo: "Reputação queimada",
    personaTag: "Pesa para escritórios de advocacia",
    title: "Sua disputa virou consulta pública.",
    body1:
      "Quando a disputa contratual entra na fila judicial, o processo é público. Qualquer concorrente, prospect ou jornalista que pesquisar o nome da empresa encontra na primeira página.",
    body2: "Você gastou anos construindo confiança. Um processo público corrói em meses.",
    custoLabel: "Custo nominal",
    custoValue: "CONTRATOS PERDIDOS",
    custoSub: "na diligência do próximo cliente",
    // LAB · era var(--soma), agora peach (regra estrita)
    tese: "A câmara SOMA está acoplada à +legal_,",
    teseStrong: "sigilosa por padrão.",
    visual: "reputacao",
    accent: "var(--peach-dark)"
  }
] as const;

export function RiscosSilenciososLab() {
  return (
    <section className="relative bg-stone-50">
      <div className="container-soma section-soma">
        <div className="mb-12 max-w-[860px]">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1.5"
            style={{
              background: "var(--peach-bg)",
              borderColor: "rgba(30,41,59,0.4)"
            }}
          >
            <ShieldAlert className="size-4 text-peach-dark" strokeWidth={1.6} />
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-peach-dark">
              O que ninguém vê chegando
            </span>
          </div>

          <h2 className="h-soma mb-5">
            Os danos invisíveis pesam ordens de magnitude mais que a plataforma.
          </h2>

          <p className="mb-3 text-lg leading-relaxed text-gray-700">
            Existem três tipos de risco que aparecem sem alarme. Cada um custa muito mais que qualquer assinatura mensal.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Dados expostos. Reputação queimada. Relacionamentos que se rompem por dentro.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {RISCOS.map((r, i) => (
            <div
              key={r.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border-2 bg-white"
              style={{ borderColor: "rgba(30,41,59,0.18)" }}
            >
              <div
                className="border-b border-stone-200 px-7 py-4"
                style={{ background: `${r.accent}14` }}
              >
                <div className="mb-1 flex items-center justify-between">
                  <span
                    className="font-mono text-[10px] font-bold uppercase tracking-widest"
                    style={{ color: r.accent }}
                  >
                    Risco 0{i + 1} · {r.eixo}
                  </span>
                  <span
                    className="size-2 rounded-full"
                    style={{ background: r.accent }}
                  />
                </div>
                <p
                  className="font-mono text-[9px] font-medium uppercase tracking-widest"
                  style={{ color: r.accent, opacity: 0.7 }}
                >
                  {r.personaTag}
                </p>
              </div>

              <div className="border-b border-stone-100 bg-stone-50/50 px-5 py-5">
                <RiscoVisual variant={r.visual} accent={r.accent} />
              </div>

              <div className="flex flex-1 flex-col px-7 py-6">
                <h3 className="mb-4 font-title text-xl font-bold leading-snug text-gray-900">
                  {r.title}
                </h3>

                <p className="mb-3 text-[14.5px] leading-relaxed text-gray-700">
                  {r.body1}
                </p>
                <p className="mb-6 text-[14.5px] leading-relaxed text-gray-700">
                  {r.body2}
                </p>

                <div className="mt-auto rounded-xl border border-stone-200 bg-stone-50 p-4">
                  <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">
                    {r.custoLabel}
                  </p>
                  <p
                    className="mb-1 font-title text-base font-extrabold tracking-tight"
                    style={{ color: r.accent }}
                  >
                    {r.custoValue}
                  </p>
                  <p className="text-xs leading-relaxed text-stone-500">
                    {r.custoSub}
                  </p>
                </div>
              </div>

              <div
                className="border-t-2 px-7 py-4"
                style={{
                  borderColor: r.accent,
                  background: `${r.accent}08`
                }}
              >
                <p className="text-[13px] leading-relaxed text-gray-700">
                  {r.tese}{" "}
                  <span className="font-bold" style={{ color: r.accent }}>
                    {r.teseStrong}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-stone-200 bg-white p-7 md:p-8">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[auto_1fr_auto]">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">
                A conta que ninguém faz
              </p>
              <p className="mt-1 font-title text-2xl font-bold text-gray-900 md:text-3xl">
                Custo da plataforma vs dano de um caso.
              </p>
            </div>

            <div className="hidden lg:block">
              <div className="h-px bg-stone-200" />
            </div>

            <div className="flex items-center gap-4 lg:justify-end">
              <div className="text-right">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">
                  <span className="normal-case">+legal_</span>
                </p>
                <p className="font-title text-2xl font-extrabold text-gray-900">
                  R$ 6 mil/ano
                </p>
                <p className="text-xs text-stone-500">por seat extra</p>
              </div>

              <span className="font-mono text-2xl font-bold text-stone-300">×</span>

              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">
                  Um caso
                </p>
                <p
                  className="font-title text-2xl font-extrabold"
                  style={{ color: "var(--peach-dark)" }}
                >
                  R$ 500 mil+
                </p>
                <p className="text-xs text-stone-500">multa, churn, reputação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RiscoVisual({ variant, accent }: { variant: string; accent: string }) {
  if (variant === "dados") {
    return (
      <svg viewBox="0 0 360 130" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full" aria-hidden="true">
        <g transform="translate(20 18)">
          <rect width="120" height="100" rx="6" fill="white" stroke={accent} strokeWidth="1.4" />
          <rect width="120" height="20" rx="6" fill={accent} opacity="0.12" />
          <rect y="14" width="120" height="6" fill={accent} opacity="0.12" />
          <text x="10" y="14" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill={accent} letterSpacing="1">NDA · CLÁUSULA 7.3</text>
          {[28, 38, 48, 58, 68, 80, 88].map((y, idx) => (
            <line key={y} x1="10" y1={y} x2={idx === 4 ? 100 : idx % 2 === 0 ? 90 : 105} y2={y} stroke="#999" strokeWidth="1" opacity="0.3" />
          ))}
          <rect x="8" y="62" width="104" height="14" rx="2" fill={accent} opacity="0.16" />
          <line x1="10" y1="68" x2="100" y2="68" stroke={accent} strokeWidth="1" opacity="0.5" />
          <line x1="10" y1="72" x2="92" y2="72" stroke={accent} strokeWidth="1" opacity="0.5" />
        </g>
        <g transform="translate(150 60)">
          <path d="M 0 8 L 30 8" stroke="#dc2626" strokeWidth="1.6" strokeDasharray="3 3" />
          <path d="M 26 4 L 32 8 L 26 12" stroke="#dc2626" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <text x="16" y="-2" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="700" fill="#dc2626" textAnchor="middle" letterSpacing="0.5">VAZA</text>
        </g>
        <g transform="translate(200 32)">
          <rect width="140" height="72" rx="6" fill="#fef2f2" stroke="#dc2626" strokeWidth="1.4" strokeDasharray="4 3" />
          <text x="70" y="22" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="#dc2626" textAnchor="middle" letterSpacing="1">QUEM RECEBEU?</text>
          <circle cx="70" cy="44" r="13" fill="white" stroke="#dc2626" strokeWidth="1.4" strokeDasharray="3 3" />
          <text x="70" y="48" fontFamily="Barlow, sans-serif" fontSize="14" fontWeight="800" fill="#dc2626" textAnchor="middle">?</text>
          <g transform="translate(70 64)">
            <rect x="-22" y="-4" width="44" height="12" rx="2" fill="#dc2626" />
            <text y="4" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="700" fill="white" textAnchor="middle" letterSpacing="0.8">LGPD</text>
          </g>
        </g>
      </svg>
    );
  }

  if (variant === "reputacao") {
    return (
      <svg viewBox="0 0 360 130" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full" aria-hidden="true">
        <g transform="translate(20 18)">
          <rect width="320" height="28" rx="14" fill="white" stroke={accent} strokeWidth="1.4" />
          <g transform="translate(14 14)">
            <circle r="6" fill="none" stroke={accent} strokeWidth="1.4" />
            <line x1="4" y1="4" x2="8" y2="8" stroke={accent} strokeWidth="1.4" strokeLinecap="round" />
          </g>
          <text x="30" y="18" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#1A1A1A">Beta Serviços</text>
          <text x="106" y="18" fontFamily="Inter, sans-serif" fontSize="9" fill="#999">· processos judiciais</text>
          <g transform="translate(294 14)">
            <rect x="-16" y="-7" width="22" height="14" rx="2" fill={accent} opacity="0.15" />
            <text y="3" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="700" fill={accent} textAnchor="middle" letterSpacing="0.4">4</text>
          </g>
        </g>
        {[
          { y: 56, t: "Beta x Acme · cobrança · 2024" },
          { y: 76, t: "Beta x Delta · SLA · 2023" },
          { y: 96, t: "Beta x Gama · multa · 2023" }
        ].map((r) => (
          <g key={r.y} transform={`translate(20 ${r.y})`}>
            <rect width="320" height="14" rx="3" fill="#fff7ed" stroke={accent} strokeWidth="0.8" strokeOpacity="0.4" />
            <circle cx="10" cy="7" r="2" fill={accent} />
            <text x="20" y="10" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="600" fill="#1A1A1A">{r.t}</text>
            <text x="304" y="10" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="700" fill={accent} textAnchor="end" letterSpacing="0.4">PÚBLICO</text>
          </g>
        ))}
        <text x="180" y="125" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fontWeight="700" fill="#888" textAnchor="middle" letterSpacing="1">ENCONTRÁVEL EM 0,4 SEGUNDOS</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 360 130" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full" aria-hidden="true">
      <g transform="translate(20 22)">
        <rect width="160" height="86" rx="8" fill="white" stroke={accent} strokeWidth="1.4" />
        <text x="14" y="20" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill={accent} letterSpacing="1">CLIENTE · ACME CORP</text>
        <g transform="translate(28 44)">
          <circle r="14" fill={accent} opacity="0.12" />
          <text y="4" fontFamily="Barlow, sans-serif" fontSize="13" fontWeight="800" fill={accent} textAnchor="middle">PA</text>
        </g>
        <text x="50" y="42" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="#1A1A1A">Pedro A.</text>
        <text x="50" y="54" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fontWeight="600" fill="#999" letterSpacing="0.4">5 ANOS DE RELAÇÃO</text>
        <line x1="14" y1="66" x2="146" y2="66" stroke="#F0F0EC" />
        <text x="14" y="80" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="#dc2626" letterSpacing="0.6">NÃO RENOVOU</text>
      </g>
      <g transform="translate(186 65)">
        <path d="M 0 0 L 28 0" stroke="#999" strokeWidth="1.2" strokeDasharray="3 3" />
        <text x="14" y="-6" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="700" fill="#999" textAnchor="middle" letterSpacing="0.5">NEM AVISOU</text>
      </g>
      <g transform="translate(222 22)">
        <text x="0" y="10" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="700" fill="#999" letterSpacing="0.6">A REDE DELE</text>
        {[0, 1, 2].map((idx) => (
          <g key={idx} transform={`translate(0 ${22 + idx * 24})`}>
            <circle cx="10" cy="10" r="9" fill="white" stroke="#999" strokeWidth="1.2" strokeDasharray="2 2" />
            <text x="10" y="13" fontFamily="Barlow, sans-serif" fontSize="9" fontWeight="800" fill="#999" textAnchor="middle">?</text>
            <text x="26" y="9" fontFamily="Inter, sans-serif" fontSize="8.5" fontWeight="600" fill="#666">Sem indicação</text>
            <text x="26" y="18" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="500" fill="#999" opacity="0.8" letterSpacing="0.3">
              {idx === 0 ? "CFO · grupo Y" : idx === 1 ? "CEO · empresa Z" : "Diretor · cliente W"}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}
