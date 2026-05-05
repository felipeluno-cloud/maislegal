import Link from "next/link";
import { ArrowRight, Lightbulb } from "lucide-react";

const ANALOGIAS = [
  {
    num: "01",
    icone: "📞",
    titulo: "Telefone sem fio",
    insight: "Uma versão. Todos os envolvidos. O mesmo histórico.",
    explica: "Como funcionam contratos hoje vs com a +legal_.",
    color: "brand",
    href: "/explainers#explainer-01"
  },
  {
    num: "02",
    icone: "📷",
    titulo: "Tripé fotográfico",
    insight: "Cada pilar existe em algum lugar. Os três juntos, só na +legal_.",
    explica: "Por que os 3 pilares precisam estar juntos.",
    color: "peach",
    href: "/explainers#explainer-02"
  },
  {
    num: "03",
    icone: "🏥",
    titulo: "Pronto-socorro acoplado",
    insight: "Outras ferramentas terminam onde o problema começa.",
    explica: "Por que ter a câmara SOMA dentro muda o jogo.",
    color: "soma",
    href: "/explainers#explainer-03"
  },
  {
    num: "04",
    icone: "🏠",
    titulo: "Casa, não documento",
    insight: "Da planta à manutenção, no mesmo ambiente.",
    explica: "Por que o contrato precisa de cuidado contínuo.",
    color: "brand",
    href: "/explainers#explainer-04"
  }
];

const COLOR: Record<string, { border: string; bg: string; text: string }> = {
  brand: { border: "var(--brand)", bg: "var(--brand-tint)", text: "var(--brand)" },
  peach: { border: "var(--peach-dark)", bg: "var(--peach-bg)", text: "var(--peach-dark)" },
  soma: { border: "var(--soma)", bg: "var(--soma-bg)", text: "var(--soma)" }
};

export function AnalogiasHome() {
  return (
    <section className="bg-stone-50">
      <div className="container-soma section-soma">
        <div className="mb-12 max-w-[820px]">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-3 py-1.5">
            <Lightbulb className="size-4 text-brand" strokeWidth={2} />
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-stone-700">
              A +legal_ em 4 analogias
            </span>
          </div>
          <h2 className="h-soma mb-4">
            Quatro jeitos simples de explicar a +legal_.
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Pra quando alguém pergunta "mas o que é isso, na prática?". Cada
            analogia clica em segundos.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {ANALOGIAS.map(a => {
            const c = COLOR[a.color];
            return (
              <Link
                key={a.num}
                href={a.href}
                className="group flex flex-col rounded-2xl border border-stone-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ borderColor: "transparent", borderTopColor: c.border, borderTopWidth: "3px" }}
              >
                {/* Icon emoji + number */}
                <div className="mb-5 flex items-center justify-between">
                  <div
                    className="flex size-14 items-center justify-center rounded-xl text-3xl"
                    style={{ background: c.bg }}
                  >
                    {a.icone}
                  </div>
                  <span
                    className="font-mono text-[10px] font-bold tracking-widest"
                    style={{ color: c.text }}
                  >
                    {a.num}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-3 font-title text-lg font-bold leading-snug text-gray-900">
                  {a.titulo}
                </h3>

                {/* Explica */}
                <p className="mb-5 text-sm leading-relaxed text-gray-600">
                  {a.explica}
                </p>

                {/* Insight curto · destaque */}
                <p
                  className="mb-5 border-l-2 pl-3 text-sm italic leading-snug"
                  style={{ borderLeftColor: c.border, color: c.text }}
                >
                  "{a.insight}"
                </p>

                {/* CTA */}
                <span
                  className="mt-auto flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5"
                  style={{ color: c.text }}
                >
                  Ver explainer <ArrowRight className="size-4" />
                </span>
              </Link>
            );
          })}
        </div>

        {/* CTA · ver todos */}
        <div className="rounded-2xl border-2 border-brand bg-brand-tint p-6 md:p-7">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-widest text-brand">
                Hub de explainers
              </p>
              <p className="font-title text-lg font-bold text-gray-900 md:text-xl">
                Veja as 4 analogias em detalhe, com mapa e aplicação.
              </p>
            </div>
            <Link
              href="/explainers"
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-mid"
            >
              Ver explainers completos <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
