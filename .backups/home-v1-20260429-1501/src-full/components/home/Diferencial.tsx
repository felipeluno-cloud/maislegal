import { Sparkles } from "lucide-react";

const PILARES = [
  {
    num: "01",
    label: "AMBIENTE COLABORATIVO",
    title: "Não é o sistema do fornecedor nem do cliente. É de todos.",
    body: "Um ambiente que todos os envolvidos no contrato usam. Mesmo histórico, mesma versão, mesmo acesso. Sem ferramenta interna de uma das partes.",
    color: "brand"
  },
  {
    num: "02",
    label: "CICLO COMPLETO",
    title: "Da elaboração à resolução.",
    body: "Acompanhe a vida do contrato depois da assinatura. Monitoramento, alertas, aditivos formalizados. Tudo o que vem depois do aperto de mão.",
    color: "peach"
  },
  {
    num: "03",
    label: "CÂMARA INTEGRADA",
    title: "Se houver disputa, ela é resolvida sem sair do sistema.",
    body: "A SOMA, nossa câmara de mediação e arbitragem, fica integrada ao mesmo ambiente. Resolução sigilosa e rápida, com o histórico do contrato já pronto.",
    color: "soma"
  }
] as const;

const COLOR_STYLES: Record<string, {
  border: string;
  bg: string;
  numBg: string;
  pillBg: string;
  pillText: string;
  iconBg: string;
  iconColor: string;
}> = {
  brand: {
    border: "var(--brand)",
    bg: "var(--brand-tint)",
    numBg: "var(--brand)",
    pillBg: "white",
    pillText: "var(--brand)",
    iconBg: "var(--brand)",
    iconColor: "white"
  },
  peach: {
    border: "var(--peach-dark)",
    bg: "var(--peach-bg)",
    numBg: "var(--peach-dark)",
    pillBg: "white",
    pillText: "var(--peach-dark)",
    iconBg: "var(--peach-dark)",
    iconColor: "white"
  },
  soma: {
    border: "var(--soma)",
    bg: "var(--soma-bg)",
    numBg: "var(--soma)",
    pillBg: "white",
    pillText: "var(--soma)",
    iconBg: "var(--soma)",
    iconColor: "white"
  }
};

export function Diferencial() {
  return (
    <section className="relative bg-white">
      <div className="container-soma section-soma">
        <div className="mb-14 max-w-[820px]">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-tint px-3 py-1.5">
            <Sparkles className="size-4 text-brand" strokeWidth={2} />
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
              Por que +legal_
            </span>
          </div>
          <h2 className="h-soma mb-4">
            Três coisas que mudam como contratos vivem.
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Cada uma sozinha já existe em algum lugar. Juntas, no mesmo
            ambiente, mudam o problema.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PILARES.map(p => {
            const c = COLOR_STYLES[p.color];
            return (
              <div
                key={p.num}
                className="relative flex flex-col overflow-hidden rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: c.border }}
              >
                {/* Header colorido */}
                <div
                  className="px-7 pb-6 pt-7"
                  style={{ background: c.bg }}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div
                      className="flex size-14 items-center justify-center rounded-xl font-title text-2xl font-extrabold text-white shadow-md"
                      style={{ background: c.numBg }}
                    >
                      {p.num}
                    </div>
                    <span
                      className="rounded-full px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest"
                      style={{ background: c.pillBg, color: c.pillText }}
                    >
                      {p.label}
                    </span>
                  </div>

                  <h3
                    className="font-title text-xl font-extrabold leading-snug"
                    style={{ color: c.iconBg }}
                  >
                    {p.title}
                  </h3>
                </div>

                {/* Body */}
                <div className="flex-1 bg-white px-7 py-6">
                  <p className="text-[15px] leading-relaxed text-gray-700">
                    {p.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
