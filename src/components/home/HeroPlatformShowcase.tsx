"use client";

import { useEffect, useState } from "react";

const TOTAL = 5;

const TITULOS = [
  "Portfólio",
  "Linha do tempo",
  "Aditivo registrado",
  "Câmara SOMA",
  "Integrações"
];

const TEMPOS = [4000, 5000, 5000, 4000, 4000];

function TopBar({ idx }: { idx: number }) {
  return (
    <div className="flex items-center justify-between border-b border-stone-200 bg-stone-50 px-4 py-3">
      <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
        +legal_
      </span>
      <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-stone-500">
        Tela {String(idx + 1).padStart(2, "0")}/{String(TOTAL).padStart(2, "0")} · {TITULOS[idx]}
      </span>
    </div>
  );
}

function ProgressBar({ idx, paused }: { idx: number; paused: boolean }) {
  return (
    <div className="flex h-[2px] gap-0.5 bg-stone-100">
      {Array.from({ length: TOTAL }, (_, i) => (
        <div key={i} className="relative flex-1 overflow-hidden bg-stone-200">
          {i < idx && <div className="absolute inset-0 bg-brand" />}
          {i === idx && (
            <div
              className="absolute inset-0 origin-left bg-brand"
              style={{
                animation: paused
                  ? "none"
                  : `growBar ${TEMPOS[idx]}ms linear forwards`
              }}
            />
          )}
        </div>
      ))}
      <style>{`
        @keyframes growBar { from { transform: scaleX(0); } to { transform: scaleX(1); } }
      `}</style>
    </div>
  );
}

function Footnote({ children }: { children: React.ReactNode }) {
  return (
    <p className="border-t border-stone-200 bg-white px-5 py-3 text-center font-mono text-[11px] font-bold uppercase tracking-widest text-stone-500">
      {children}
    </p>
  );
}

function Tela01Portfolio() {
  const linhas = [
    { cliente: "Acme Tech Ltda", valor: "R$ 84 mil", status: "ATIVO", statusColor: "var(--brand)", statusBg: "var(--brand-tint)", data: "22/Mar" },
    { cliente: "Beta Consultoria", valor: "R$ 12 mil", status: "RENOVA EM 30D", statusColor: "var(--peach-dark)", statusBg: "var(--peach-bg)", data: "15/Abr" },
    { cliente: "Gamma Marketing", valor: "R$ 56 mil", status: "ADITIVO", statusColor: "var(--soma)", statusBg: "var(--soma-bg)", data: "02/Mai" },
    { cliente: "Delta Studios", valor: "R$ 38 mil", status: "ATIVO", statusColor: "var(--brand)", statusBg: "var(--brand-tint)", data: "10/Mai" }
  ];
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 bg-brand-tint/40 px-5 py-5">
        <div className="mb-4 flex items-baseline justify-between">
          <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">Meus contratos</p>
          <span className="font-title text-2xl font-extrabold text-brand">80<span className="ml-1 font-mono text-[11px] font-bold uppercase tracking-widest text-stone-500">ativos</span></span>
        </div>
        <div className="space-y-2.5">
          {linhas.map((l) => (
            <div key={l.cliente} className="flex items-center justify-between gap-2 rounded-lg border border-stone-200 bg-white px-3 py-2.5">
              <div className="min-w-0 flex-1">
                <p className="truncate font-title text-[13px] font-bold text-gray-900">{l.cliente}</p>
                <p className="font-mono text-[11px] text-stone-500">{l.valor} · {l.data}</p>
              </div>
              <span
                className="shrink-0 rounded-full px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider"
                style={{ background: l.statusBg, color: l.statusColor }}
              >
                {l.status}
              </span>
            </div>
          ))}
        </div>
      </div>
      <Footnote>Todas as partes, mesma versão</Footnote>
    </div>
  );
}

function Tela02Timeline() {
  const eventos = [
    { label: "Assinatura", data: "22/Mar", color: "var(--brand)", state: "done" },
    { label: "Aditivo 01", data: "14/Abr", color: "var(--brand)", state: "done" },
    { label: "Aditivo 02", data: "02/Mai", color: "var(--brand)", state: "done" },
    { label: "Renovação", data: "Em 23 dias", color: "var(--peach-dark)", state: "alert" }
  ];
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 px-5 py-5" style={{ background: "color-mix(in srgb, var(--peach-bg) 50%, white)" }}>
        <div className="mb-4 flex items-baseline justify-between">
          <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-peach-dark">Acme Tech · histórico</p>
          <span className="font-title text-2xl font-extrabold text-brand">23<span className="ml-1 font-mono text-[11px] font-bold uppercase tracking-widest text-peach-dark">dias</span></span>
        </div>
        <div className="space-y-2.5">
          {eventos.map((e) => (
            <div
              key={e.label}
              className={`flex items-center justify-between gap-2 rounded-lg border border-stone-200 bg-white px-3 py-2.5 ${
                e.state === "alert" ? "border-l-4" : ""
              }`}
              style={e.state === "alert" ? { borderLeftColor: e.color } : undefined}
            >
              <div className="flex items-center gap-3">
                <span
                  className="size-2.5 rounded-full"
                  style={{
                    background: e.state === "alert" ? e.color : e.color,
                    boxShadow: e.state === "alert" ? `0 0 0 4px ${e.color}33` : undefined
                  }}
                />
                <p className="font-title text-[13px] font-bold text-gray-900">{e.label}</p>
              </div>
              <p className="font-mono text-[11px] text-stone-500">{e.data}</p>
            </div>
          ))}
          <div className="rounded-lg px-3 py-2.5 text-center" style={{ background: "var(--peach-bg)" }}>
            <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-peach-dark">Negociar reajuste · pauta a abrir</p>
          </div>
        </div>
      </div>
      <Footnote>Alertas, obrigações, aditivos</Footnote>
    </div>
  );
}

function Tela03Aditivo() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 bg-brand-tint/40 px-5 py-5">
        <div className="mb-4 flex items-baseline justify-between">
          <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">Aditivo 03</p>
          <span className="rounded-full bg-brand px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white">Registrado</span>
        </div>

        <div className="mb-4 space-y-2.5">
          <div className="flex items-center justify-between rounded-lg border border-stone-200 bg-white px-3 py-2.5">
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-stone-500">Escopo</span>
            <span className="font-mono text-[12px] text-stone-700">100h<span className="px-1.5 text-stone-400">→</span><span className="font-bold text-brand">130h</span></span>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-stone-200 bg-white px-3 py-2.5">
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-stone-500">Valor</span>
            <span className="font-mono text-[12px] text-stone-700">R$ 15 mil<span className="px-1.5 text-stone-400">→</span><span className="font-bold text-brand">R$ 19,5 mil</span></span>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-stone-200 bg-white px-3 py-2.5">
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-stone-500">Vigência</span>
            <span className="font-mono text-[12px] font-bold text-brand">01/Jun</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between rounded-lg bg-emerald-50 px-3 py-2.5">
            <div className="flex items-center gap-2.5">
              <span className="flex size-7 items-center justify-center rounded-full bg-brand text-[11px] font-bold text-white">C</span>
              <p className="font-title text-[12px] text-gray-900">Camila · Cliente</p>
            </div>
            <p className="font-mono text-[11px] font-bold text-emerald-700">14:32 ✓</p>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-emerald-50 px-3 py-2.5">
            <div className="flex items-center gap-2.5">
              <span className="flex size-7 items-center justify-center rounded-full text-[11px] font-bold text-white" style={{ background: "var(--peach-dark)" }}>B</span>
              <p className="font-title text-[12px] text-gray-900">Bruno · Fornecedor</p>
            </div>
            <p className="font-mono text-[11px] font-bold text-emerald-700">14:48 ✓</p>
          </div>
        </div>
      </div>
      <Footnote>Aditivo registrado, escopo atualizado</Footnote>
    </div>
  );
}

function Tela04Camara() {
  const fases = [
    { label: "Mediação SOMA", status: "EM CURSO", data: "Sessão 14/Mai · 16:00", color: "var(--soma)", bg: "var(--soma-bg)", current: true },
    { label: "Acordo registrado", status: "PRÓXIMO PASSO", data: "Aprovado pelas partes", color: "#999", bg: "#fafaf9", current: false },
    { label: "Arbitragem", status: "ESCALAÇÃO", data: "Caso o acordo não fechar", color: "#999", bg: "#fafaf9", current: false }
  ];
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 px-5 py-5" style={{ background: "color-mix(in srgb, var(--soma-bg) 50%, white)" }}>
        <div className="mb-4 flex items-baseline justify-between">
          <p className="font-mono text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--soma)" }}>Resolução · Beta Consultoria</p>
          <span className="rounded-full px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white" style={{ background: "var(--soma)" }}>Em curso</span>
        </div>
        <div className="space-y-2.5">
          {fases.map((f) => (
            <div
              key={f.label}
              className="rounded-lg border bg-white px-3 py-2.5"
              style={{
                borderColor: f.current ? f.color : "var(--stone-200, #e7e5e4)",
                borderWidth: f.current ? "2px" : "1px",
                background: f.current ? f.bg : "white"
              }}
            >
              <div className="mb-1 flex items-center justify-between">
                <p className="font-title text-[13px] font-bold text-gray-900">{f.label}</p>
                <span
                  className="font-mono text-[10px] font-bold uppercase tracking-wider"
                  style={{ color: f.color }}
                >
                  {f.status}
                </span>
              </div>
              <p className="font-mono text-[11px] text-stone-500">{f.data}</p>
            </div>
          ))}
        </div>
      </div>
      <Footnote>Mediação acoplada, sem trocar de ferramenta</Footnote>
    </div>
  );
}

function Tela05Integracoes() {
  const ints = [
    { nome: "Slack", role: "Notificações de prazos e aprovações", state: "Conectado" },
    { nome: "Google Calendar", role: "Renovações e datas críticas", state: "Conectado" },
    { nome: "HubSpot", role: "Status de cliente e pipeline comercial", state: "Conectado" },
    { nome: "DocuSign", role: "Assinatura digital, sem sair do ambiente", state: "Conectado" }
  ];
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 bg-brand-tint/40 px-5 py-5">
        <div className="mb-4 flex items-baseline justify-between">
          <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">Conexões ativas</p>
          <span className="font-title text-2xl font-extrabold text-brand">4<span className="ml-1 font-mono text-[11px] font-bold uppercase tracking-widest text-stone-500">ativas</span></span>
        </div>
        <div className="space-y-2.5">
          {ints.map((i) => (
            <div key={i.nome} className="flex items-center justify-between gap-3 rounded-lg border border-stone-200 bg-white px-3 py-2.5">
              <div className="min-w-0 flex-1">
                <p className="truncate font-title text-[13px] font-bold text-gray-900">{i.nome}</p>
                <p className="truncate font-mono text-[11px] text-stone-500">{i.role}</p>
              </div>
              <span className="shrink-0 rounded-full bg-emerald-50 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                ✓ {i.state}
              </span>
            </div>
          ))}
        </div>
      </div>
      <Footnote>Conversa com o que você já usa</Footnote>
    </div>
  );
}

const TELAS = [Tela01Portfolio, Tela02Timeline, Tela03Aditivo, Tela04Camara, Tela05Integracoes];

export function HeroPlatformShowcase() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || paused) return;
    const t = setTimeout(() => setIdx((i) => (i + 1) % TOTAL), TEMPOS[idx]);
    return () => clearTimeout(t);
  }, [paused, idx]);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Demonstração da plataforma +legal_"
      className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <TopBar idx={idx} />
      <ProgressBar idx={idx} paused={paused} />

      <div className="relative h-[calc(100%-50px)] w-full">
        {TELAS.map((Tela, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === idx ? 1 : 0, pointerEvents: i === idx ? "auto" : "none" }}
            aria-hidden={i !== idx}
          >
            <Tela />
          </div>
        ))}
      </div>
    </div>
  );
}
