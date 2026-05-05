"use client";

import { FileText, PenTool, Bell, Plus, Scale } from "lucide-react";

const STAGES = [
  { num: "01", icon: FileText, label: "Rascunho", desc: "Crie ou suba o contrato.", color: "var(--brand)" },
  { num: "02", icon: PenTool, label: "Assinatura", desc: "Integração com plataformas que você já usa.", color: "var(--brand)" },
  { num: "03", icon: Bell, label: "Monitorar", desc: "Alertas antes de cada prazo.", color: "var(--peach-dark)" },
  { num: "04", icon: Plus, label: "Aditivos", desc: "Mudanças com aprovação registrada.", color: "var(--peach-dark)" },
  { num: "05", icon: Scale, label: "Resolução · SOMA", desc: "Câmara acoplada, sem ir ao judiciário.", color: "var(--soma)", isSoma: true }
];

export function HeroIllustration1() {
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseDot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
        }
        @keyframes drawLine {
          from { stroke-dashoffset: 100%; }
          to { stroke-dashoffset: 0; }
        }
        .stage-row { animation: fadeInUp 0.6s ease-out backwards; }
        .stage-row:nth-child(1) { animation-delay: 0.1s; }
        .stage-row:nth-child(2) { animation-delay: 0.3s; }
        .stage-row:nth-child(3) { animation-delay: 0.5s; }
        .stage-row:nth-child(4) { animation-delay: 0.7s; }
        .stage-row:nth-child(5) { animation-delay: 0.9s; }
        .pulse-dot { animation: pulseDot 2.5s ease-in-out infinite; }
        .soma-glow { animation: pulseDot 3s ease-in-out infinite; }
      `}</style>

      <div className="rounded-2xl border border-stone-200 bg-white p-7 shadow-lg">
        {/* Header */}
        <div className="mb-7 flex items-center justify-between border-b border-stone-200 pb-5">
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">
              Timeline do contrato
            </p>
            <p className="mt-1 font-title text-base font-bold text-gray-900">
              Contrato vivo · 5 etapas
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1">
            <span className="pulse-dot size-2 rounded-full bg-emerald-600" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-700">
              Em curso
            </span>
          </div>
        </div>

        {/* Timeline vertical */}
        <div className="relative">
          {/* Linha vertical conectora */}
          <div
            className="absolute left-[19px] top-2 bottom-2 w-px"
            style={{ background: "linear-gradient(180deg, var(--brand) 0%, var(--peach-dark) 50%, var(--soma) 100%)", opacity: 0.25 }}
          />

          <div className="flex flex-col gap-5">
            {STAGES.map(s => {
              const Icon = s.icon;
              return (
                <div key={s.num} className="stage-row relative flex items-start gap-4">
                  {/* Number badge / shield */}
                  <div
                    className={`relative flex size-10 flex-shrink-0 items-center justify-center rounded-full ${
                      s.isSoma ? "soma-glow" : ""
                    }`}
                    style={{
                      background: s.color,
                      boxShadow: s.isSoma ? "0 0 0 4px rgba(184,97,78,0.15)" : "none"
                    }}
                  >
                    <Icon className="size-4 text-white" strokeWidth={1.6} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="mb-1 flex items-center gap-2">
                      <span
                        className="font-mono text-[10px] font-bold tracking-widest"
                        style={{ color: s.color }}
                      >
                        {s.num}
                      </span>
                      <span className="font-title text-sm font-bold text-gray-900">
                        {s.label}
                      </span>
                      {s.isSoma && (
                        <span className="rounded-full bg-soma px-2 py-0.5 font-mono text-[8px] font-bold uppercase tracking-widest text-white">
                          O diferencial
                        </span>
                      )}
                    </div>
                    <p className="text-xs leading-relaxed text-gray-600">
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-7 border-t border-stone-200 pt-5">
          <p className="text-center font-mono text-[10px] uppercase tracking-widest text-stone-500">
            Tudo dentro do mesmo ambiente
          </p>
        </div>
      </div>
    </div>
  );
}
