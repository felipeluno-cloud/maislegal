import Link from "next/link";
import { FileText, Activity, Scale, ArrowUpRight } from "lucide-react";

const PILARES_RAPIDOS = [
  {
    icon: FileText,
    label: "Ambiente colaborativo",
    sub: "as duas partes editam, comentam e aprovam na mesma versão",
    color: "var(--peach-dark)",
    href: "/funcionalidades",
    destaque: false
  },
  {
    icon: Activity,
    label: "Monitoramento ativo",
    sub: "prazos, obrigações e aditivos, antes do problema chegar",
    color: "var(--brand)",
    href: "/funcionalidades",
    destaque: false
  },
  {
    icon: Scale,
    label: "Câmara acoplada",
    sub: "mediação SOMA quando o combinado trava",
    color: "var(--soma)",
    href: "/resolucao-de-disputas",
    destaque: true
  }
];

export function EmUmaFrase() {
  return (
    <section className="relative bg-white">
      <div className="container-soma py-16 md:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          {/* Esquerda · resposta direta */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-tint px-3.5 py-2">
              <span className="size-1.5 rounded-full bg-brand" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                <span className="normal-case">+legal_</span> em uma frase
              </span>
            </div>

            <h2 className="mb-6 font-title text-3xl font-bold leading-[1.12] tracking-tight text-gray-900 md:text-[40px] lg:text-[44px]">
              Co-piloto dos contratos, do combinado à resolução.
            </h2>

            <p className="mb-3 text-lg leading-relaxed text-gray-700">
              Sem perder versão, sem perder histórico, sem virar processo público. A <span className="text-brand">+legal_</span> é o ambiente onde versão, histórico e relacionamento ficam em um lugar só.
            </p>

            <p className="mb-3 text-lg leading-relaxed text-gray-700">
              Avisa o que vence e o que precisa de decisão. Você decide antes do prazo virar problema.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Eles chegam no calendário, no e-mail, no Slack, onde seu time já trabalha.
            </p>
          </div>

          {/* Direita · 3 colunas que a +legal_ combina */}
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 md:p-7">
            <p className="mb-5 font-mono text-[11px] font-bold uppercase tracking-widest text-stone-500">
              O que ela combina
            </p>

            <div className="space-y-4">
              {PILARES_RAPIDOS.map((p) => {
                const Icon = p.icon;
                const isDestaque = p.destaque;
                return (
                  <Link
                    key={p.label}
                    href={p.href}
                    className={`group relative flex items-start gap-4 rounded-xl bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-sm ${
                      isDestaque
                        ? "border-2"
                        : "border border-stone-200 hover:border-stone-300"
                    }`}
                    style={isDestaque ? { borderColor: p.color } : undefined}
                  >
                    {isDestaque && (
                      <span
                        className="absolute -top-2 right-3 rounded-full px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-white"
                        style={{ background: p.color }}
                      >
                        Único na <span className="normal-case">+legal_</span>
                      </span>
                    )}
                    <div
                      className="flex size-10 shrink-0 items-center justify-center rounded-lg"
                      style={{ background: `${p.color}14` }}
                    >
                      <Icon className="size-5" strokeWidth={1.6} style={{ color: p.color }} />
                    </div>
                    <div className="flex-1">
                      <p className="font-title text-[15px] font-bold leading-tight text-gray-900">
                        {p.label}
                      </p>
                      <p className="mt-0.5 text-[13px] leading-snug text-gray-600">
                        {p.sub}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="size-4 shrink-0 text-stone-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-stone-600"
                      strokeWidth={1.6}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
