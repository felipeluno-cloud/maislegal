import { ArrowRight } from "lucide-react";
import { Button } from "@/components/base/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-stone-200 bg-white">
      {/* Background decoration sutil */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute h-[700px] w-[700px] rounded-full opacity-[0.04]"
          style={{ background: "var(--brand)", top: "-200px", right: "-150px" }}
        />
        <div
          className="absolute h-[300px] w-[300px] rounded-full opacity-[0.05]"
          style={{ background: "var(--peach-dark)", bottom: "-80px", left: "-60px" }}
        />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.025]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-brand"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-soma relative py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
          {/* COLUNA ESQUERDA · narrativa */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-tint px-3 py-1.5">
              <span className="size-1.5 animate-pulse rounded-full bg-brand" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                Gestão de contratos +legal_
              </span>
            </div>

            {/* Headline com tagline em duas linhas */}
            <h1 className="mb-8 font-title font-bold tracking-tighter">
              <span className="block text-2xl text-stone-500 md:text-[28px] lg:text-[34px]">
                Fechar um bom contrato é legal.
              </span>
              <span className="mt-1 block text-3xl text-gray-900 md:text-[40px] lg:text-[52px] leading-[1.05]">
                Ver o combinado funcionar
                <br />
                é <span className="text-brand">+legal_</span>.
              </span>
            </h1>

            <p className="mb-8 max-w-[520px] text-lg leading-relaxed text-gray-600">
              Um ambiente colaborativo. Do rascunho à resolução. Com câmara de
              mediação e arbitragem acoplada.
            </p>

            {/* Linha de audiências */}
            <p className="mb-8 max-w-[560px] border-l-2 border-brand pl-4 font-mono text-xs uppercase tracking-widest text-stone-600">
              Para diretores de operações, sócios de PME e escritórios de
              advocacia.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button href="/early-access" variant="primary" size="lg">
                Entrar para o Early Access <ArrowRight className="size-4" />
              </Button>
              <Button href="/como-funciona" variant="secondary" size="lg">
                Ver como funciona
              </Button>
            </div>
          </div>

          {/* COLUNA DIREITA · 3 pilares como narrativa visual */}
          <div className="relative hidden lg:block">
            <PilaresVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

// 3 pilares visuais do "ver o combinado funcionar"
// Estilo: stacked verticalmente, cada pilar é um card numerado
// que evidencia visualmente o conceito
function PilaresVisual() {
  return (
    <div className="relative mx-auto max-w-[460px]">
      <div className="mb-5">
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">
          Por que +legal_
        </span>
      </div>

      <div className="space-y-3">
        {/* Pilar 1 · Ambiente colaborativo */}
        <div className="group flex items-start gap-4 rounded-2xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:border-brand">
          <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-tint">
            <svg viewBox="0 0 24 24" fill="none" className="size-6" stroke="var(--brand)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="12" r="4" />
              <circle cx="15" cy="12" r="4" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="mb-1 flex items-center gap-2">
              <span className="font-mono text-[10px] font-bold tracking-widest text-brand">
                01
              </span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand">
                Ambiente colaborativo
              </span>
            </div>
            <p className="text-[14px] leading-relaxed text-gray-700">
              Não é o sistema do fornecedor nem do cliente. É de todos.
            </p>
          </div>
        </div>

        {/* Pilar 2 · Ciclo completo */}
        <div className="group flex items-start gap-4 rounded-2xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:border-peach-dark">
          <div
            className="flex size-12 flex-shrink-0 items-center justify-center rounded-xl"
            style={{ background: "var(--peach-bg)" }}
          >
            <svg viewBox="0 0 24 24" fill="none" className="size-6" stroke="var(--peach-dark)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.88 6.71 2.36" />
              <path d="M21 3v6h-6" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="mb-1 flex items-center gap-2">
              <span className="font-mono text-[10px] font-bold tracking-widest" style={{ color: "var(--peach-dark)" }}>
                02
              </span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--peach-dark)" }}>
                Ciclo completo
              </span>
            </div>
            <p className="text-[14px] leading-relaxed text-gray-700">
              Da elaboração à resolução. Acompanhe a vida dos seus contratos
              para além da assinatura.
            </p>
          </div>
        </div>

        {/* Pilar 3 · Câmara integrada */}
        <div className="group flex items-start gap-4 rounded-2xl border border-stone-200 bg-white p-5 transition-all duration-300 hover:border-soma">
          <div
            className="flex size-12 flex-shrink-0 items-center justify-center rounded-xl"
            style={{ background: "var(--soma-bg)" }}
          >
            <svg viewBox="0 0 24 24" fill="none" className="size-6" stroke="var(--soma)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="mb-1 flex items-center gap-2">
              <span className="font-mono text-[10px] font-bold tracking-widest" style={{ color: "var(--soma)" }}>
                03
              </span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--soma)" }}>
                Câmara integrada
              </span>
            </div>
            <p className="text-[14px] leading-relaxed text-gray-700">
              Se houver disputa, é resolvida sem sair do sistema, de maneira
              sigilosa e eficiente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
