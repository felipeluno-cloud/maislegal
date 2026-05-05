"use client";

import { Bell, FileText, Scale, AlertTriangle } from "lucide-react";

export function HeroIllustration2() {
  return (
    <div className="relative mx-auto w-full max-w-[480px]">
      <style>{`
        @keyframes pulseDot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.6; }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes ring {
          0%, 100% { box-shadow: 0 0 0 0 rgba(184,97,78,0); }
          50% { box-shadow: 0 0 0 8px rgba(184,97,78,0.15); }
        }
        .pulse-dot { animation: pulseDot 2s ease-in-out infinite; }
        .alert-card { animation: slideInRight 0.6s ease-out 0.4s backwards; }
        .stat-card { animation: slideInLeft 0.5s ease-out backwards; }
        .stat-card:nth-child(1) { animation-delay: 0.1s; }
        .stat-card:nth-child(2) { animation-delay: 0.2s; }
        .stat-card:nth-child(3) { animation-delay: 0.3s; }
        .soma-ring { animation: ring 2.5s ease-in-out infinite; }
      `}</style>

      {/* Card principal · simula o workspace */}
      <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-2xl">
        {/* Top bar */}
        <div className="flex items-center justify-between bg-brand px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-white/20" />
            <span className="size-2.5 rounded-full bg-white/20" />
            <span className="size-2.5 rounded-full bg-white/20" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/70">
            +legal_ workspace
          </span>
          <div className="size-5" />
        </div>

        {/* Body */}
        <div className="p-6">
          {/* Header */}
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-stone-500">
                Visão geral
              </p>
              <p className="mt-1 font-title text-base font-bold text-gray-900">
                47 contratos ativos
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="pulse-dot size-2 rounded-full bg-emerald-500" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-700">
                Ao vivo
              </span>
            </div>
          </div>

          {/* Stats row */}
          <div className="mb-5 grid grid-cols-3 gap-2">
            {[
              { label: "Vencem 30d", val: "8", color: "var(--brand)" },
              { label: "Aditivos", val: "3", color: "var(--peach-dark)" },
              { label: "Em SOMA", val: "2", color: "var(--soma)" }
            ].map((s, i) => (
              <div
                key={s.label}
                className="stat-card rounded-lg border border-stone-200 bg-stone-50 p-3"
              >
                <p className="mb-1 font-mono text-[8px] font-bold uppercase tracking-widest text-stone-500">
                  {s.label}
                </p>
                <p className="font-title text-2xl font-extrabold" style={{ color: s.color }}>
                  {s.val}
                </p>
              </div>
            ))}
          </div>

          {/* Alert card · animado */}
          <div className="alert-card mb-5 flex items-start gap-3 rounded-lg border-l-4 border-red-600 bg-rose-50 p-3">
            <AlertTriangle className="mt-0.5 size-4 flex-shrink-0 text-red-600" />
            <div>
              <p className="text-[12px] font-bold text-gray-900">
                Renovação automática em 12 dias
              </p>
              <p className="text-[10px] text-gray-600">
                Contrato Fornecedor X · R$ 8.500/mês
              </p>
            </div>
          </div>

          {/* Lista contratos */}
          <div className="space-y-2">
            {[
              { name: "Outsourcing · Beta Servicos", status: "EM DIA", color: "var(--brand)" },
              { name: "Acordo Master · Gama", status: "+ 2 ADITIVOS", color: "var(--peach-dark)" },
              { name: "Manutenção · Delta Tech", status: "EM DISPUTA · SOMA", color: "var(--soma)", isSoma: true }
            ].map(c => (
              <div
                key={c.name}
                className={`flex items-center gap-3 rounded-lg border bg-white px-3 py-2.5 ${
                  c.isSoma ? "soma-ring border-soma" : "border-stone-200"
                }`}
              >
                <span
                  className="w-1 self-stretch rounded"
                  style={{ background: c.color, minHeight: 28 }}
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[11px] font-semibold text-gray-900">
                    {c.name}
                  </p>
                  <p className="font-mono text-[8px] uppercase tracking-widest" style={{ color: c.color }}>
                    {c.status}
                  </p>
                </div>
                {c.isSoma && (
                  <span className="rounded-full bg-soma px-2 py-0.5 font-mono text-[8px] font-bold uppercase tracking-widest text-white">
                    SOMA
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating badge SOMA · destaque */}
      <div
        className="absolute -bottom-3 -right-3 flex items-center gap-2 rounded-full border-2 border-soma bg-white px-4 py-2 shadow-lg"
        style={{ animation: "pulseDot 3s ease-in-out infinite" }}
      >
        <Scale className="size-4 text-soma" strokeWidth={2} />
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-soma">
          Câmara acoplada
        </span>
      </div>

      <p className="mt-5 text-center font-mono text-[10px] uppercase tracking-widest text-stone-500">
        Visualização da plataforma
      </p>
    </div>
  );
}
