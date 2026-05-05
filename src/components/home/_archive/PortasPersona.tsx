import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SITUACOES = [
  {
    num: "01",
    title: "Você cuida de dezenas de contratos e ninguém sabe o status de todos.",
    body: "Painel único do portfólio. Alertas antes do vencimento. Histórico que continua quando alguém sai da empresa.",
    href: "/para-operacoes",
    label: "Operações",
    color: "brand"
  },
  {
    num: "02",
    title: "Você vende para clientes que têm o jurídico inteiro do lado deles.",
    body: "Histórico que serve aos dois. Câmara de mediação acoplada quando o cliente pressiona. Resolução em meses, sem judiciário.",
    href: "/para-pmes",
    label: "PMEs",
    color: "peach"
  },
  {
    num: "03",
    title: "Você reconstrói o histórico do contrato toda vez que o caso chega.",
    body: "Acesso direto ao histórico do cliente. Log que serve como evidência. Preço diferenciado para escritórios.",
    href: "/para-advogados",
    label: "Advogados",
    color: "soma"
  }
] as const;

const COLOR: Record<string, { numColor: string; bg: string; linkColor: string }> = {
  brand: {
    numColor: "var(--brand)",
    bg: "var(--brand-tint)",
    linkColor: "var(--brand)"
  },
  peach: {
    numColor: "var(--peach-dark)",
    bg: "var(--peach-bg)",
    linkColor: "var(--peach-dark)"
  },
  soma: {
    numColor: "var(--soma)",
    bg: "var(--soma-bg)",
    linkColor: "var(--soma)"
  }
};

export function PortasPersona() {
  return (
    <section className="bg-white">
      <div className="container-soma section-soma">
        <div className="mb-14 max-w-[820px]">
          <p className="eyebrow mb-4">Para quem é</p>
          <h2 className="h-soma mb-4">
            Em qual destas situações você se reconhece?
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Cada uma tem uma página própria com cenários, custos e o que muda
            no dia a dia.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {SITUACOES.map(s => {
            const c = COLOR[s.color];
            return (
              <Link
                key={s.num}
                href={s.href}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Background sutil colorido no topo */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-[140px] opacity-50 transition-opacity duration-300 group-hover:opacity-80"
                  style={{
                    background: `linear-gradient(180deg, ${c.bg} 0%, transparent 100%)`
                  }}
                />

                {/* Number gigante decorativo */}
                <span
                  className="pointer-events-none absolute -right-3 -top-6 font-title text-[140px] font-extrabold leading-none tracking-tighter opacity-[0.12] transition-all duration-300 group-hover:opacity-25"
                  style={{ color: c.numColor }}
                >
                  {s.num}
                </span>

                {/* Conteúdo */}
                <div className="relative flex flex-1 flex-col">
                  <span
                    className="mb-6 font-mono text-[10px] font-bold uppercase tracking-widest"
                    style={{ color: c.numColor }}
                  >
                    Situação {s.num}
                  </span>

                  <h3 className="mb-5 font-title text-xl font-bold leading-snug text-gray-900 md:text-[22px]">
                    "{s.title}"
                  </h3>

                  <p className="mb-8 flex-1 text-[15px] leading-relaxed text-gray-700">
                    {s.body}
                  </p>

                  <div className="flex items-center justify-between border-t border-stone-200 pt-5">
                    <span
                      className="flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5"
                      style={{ color: c.linkColor }}
                    >
                      Ver a página completa <ArrowRight className="size-4" />
                    </span>
                    <span
                      className="font-mono text-[10px] font-bold uppercase tracking-widest text-stone-400"
                    >
                      {s.label}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
