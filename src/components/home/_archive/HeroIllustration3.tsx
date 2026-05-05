"use client";

import { Bell, History, FilePlus, Scale } from "lucide-react";

export function HeroIllustration3() {
  return (
    <div className="relative mx-auto w-full max-w-[480px]">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        @keyframes breathe {
          0%, 100% { box-shadow: 0 0 0 0 rgba(30,58,95,0); }
          50% { box-shadow: 0 0 0 12px rgba(30,58,95,0.04); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(184,97,78,0.3); }
          50% { box-shadow: 0 0 0 16px rgba(184,97,78,0); }
        }
        .float-1 { animation: float 3s ease-in-out infinite; }
        .float-2 { animation: float 3.5s ease-in-out infinite 0.4s; }
        .float-3 { animation: float 3.2s ease-in-out infinite 0.8s; }
        .float-4 { animation: float 3.8s ease-in-out infinite 1.2s; }
        .pulse-dot { animation: pulse 2s ease-in-out infinite; }
        .doc-breathe { animation: breathe 3s ease-in-out infinite; }
        .soma-glow { animation: glow 2.5s ease-in-out infinite; }
      `}</style>

      <div className="relative">
        {/* Documento central */}
        <div className="doc-breathe relative mx-auto w-[260px] rounded-2xl border-2 border-brand bg-white p-6 shadow-xl">
          {/* Top bar */}
          <div className="-mx-6 -mt-6 mb-5 rounded-t-2xl bg-brand px-6 py-3">
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/80">
              Contrato · em curso
            </p>
            <p className="mt-1 font-title text-base font-bold text-white">
              Acme × Fornecedor X
            </p>
          </div>

          {/* Linhas de texto */}
          <div className="mb-4 space-y-2">
            <div className="h-1.5 w-full rounded-full bg-brand/15" />
            <div className="h-1.5 w-[85%] rounded-full bg-brand/15" />
            <div className="h-1.5 w-full rounded-full bg-brand/15" />
            <div className="h-1.5 w-[75%] rounded-full bg-brand/15" />
            <div className="h-1.5 w-[90%] rounded-full bg-brand/15" />
            <div className="h-1.5 w-[70%] rounded-full bg-brand/15" />
          </div>

          {/* Status pill */}
          <div className="mb-3 flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5">
            <span className="pulse-dot size-2 rounded-full bg-emerald-600" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-700">
              Em acordo · monitorado
            </span>
          </div>

          {/* Meta info */}
          <div className="grid grid-cols-2 gap-2 border-t border-stone-200 pt-3">
            <div>
              <p className="font-mono text-[8px] uppercase tracking-widest text-stone-500">
                Próximo prazo
              </p>
              <p className="font-mono text-[10px] font-bold text-brand">12 JUN</p>
            </div>
            <div>
              <p className="font-mono text-[8px] uppercase tracking-widest text-stone-500">
                Versões
              </p>
              <p className="font-mono text-[10px] font-bold text-brand">14</p>
            </div>
          </div>
        </div>

        {/* Badge superior · Alerta */}
        <div className="float-1 absolute -top-4 left-2 flex items-center gap-2 rounded-xl border border-stone-200 bg-white px-3 py-2 shadow-md">
          <div className="flex size-7 items-center justify-center rounded-lg bg-rose-50">
            <Bell className="size-3.5 text-red-600" strokeWidth={2} />
          </div>
          <div>
            <p className="font-mono text-[8px] font-bold uppercase tracking-widest text-stone-500">
              Alerta
            </p>
            <p className="text-[11px] font-bold text-gray-900">Vence em 12d</p>
          </div>
        </div>

        {/* Badge direito · Aditivo */}
        <div className="float-2 absolute -right-2 top-12 flex items-center gap-2 rounded-xl border border-stone-200 bg-white px-3 py-2 shadow-md">
          <div className="flex size-7 items-center justify-center rounded-lg bg-peach-bg">
            <FilePlus className="size-3.5 text-peach-dark" strokeWidth={2} />
          </div>
          <div>
            <p className="font-mono text-[8px] font-bold uppercase tracking-widest text-stone-500">
              Aditivo
            </p>
            <p className="text-[11px] font-bold text-gray-900">Aprovado</p>
          </div>
        </div>

        {/* Badge esquerdo · Histórico */}
        <div className="float-3 absolute -left-2 top-32 flex items-center gap-2 rounded-xl border border-stone-200 bg-white px-3 py-2 shadow-md">
          <div className="flex size-7 items-center justify-center rounded-lg bg-brand-tint">
            <History className="size-3.5 text-brand" strokeWidth={2} />
          </div>
          <div>
            <p className="font-mono text-[8px] font-bold uppercase tracking-widest text-stone-500">
              Histórico
            </p>
            <p className="text-[11px] font-bold text-gray-900">14 versões</p>
          </div>
        </div>

        {/* Badge inferior · SOMA · DESTACADO */}
        <div className="float-4 soma-glow absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-xl border-2 border-soma bg-white px-4 py-3 shadow-lg">
          <div className="flex size-10 items-center justify-center rounded-lg bg-soma">
            <Scale className="size-5 text-white" strokeWidth={2} />
          </div>
          <div>
            <p className="font-mono text-[8px] font-bold uppercase tracking-widest text-soma">
              O grande diferencial
            </p>
            <p className="font-title text-sm font-bold text-gray-900">
              Câmara SOMA acoplada
            </p>
          </div>
        </div>
      </div>

      <p className="mt-12 text-center font-mono text-[10px] uppercase tracking-widest text-stone-500">
        Contrato vivo, monitorado, com câmara à mão
      </p>
    </div>
  );
}
