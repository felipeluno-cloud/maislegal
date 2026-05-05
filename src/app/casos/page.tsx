import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";

const VERTICAIS = [
  {
    slug: "outsourcing-ti",
    nome: "Outsourcing de TI",
    short: "Provedores de outsourcing, manutenção e SLA. Recorrência alta, dados sensíveis, NDA detalhado em cada cliente.",
    pesos: ["SLA · multa contratual", "NDA · LGPD", "renovação automática"],
    cor: "var(--brand)"
  },
  {
    slug: "franquias",
    nome: "Franquias",
    short: "Franqueadoras com rede ativa. Contrato master + COF + auditoria de royalty + padrão da rede.",
    pesos: ["royalty · inadimplência", "padrão · auditoria", "rescisão estruturada"],
    cor: "var(--peach-dark)"
  },
  {
    slug: "locacao-comercial",
    nome: "Locação Comercial",
    short: "Imobiliárias e administradoras. Contratos longos, reajustes anuais, garantias variadas, sucessão de inquilinos.",
    pesos: ["aviso de não renovação", "reajuste por índice", "garantia · execução"],
    cor: "var(--soma)"
  },
  {
    slug: "agencias-marketing",
    nome: "Agências de Marketing",
    short: "Agências B2B com cliente corporativo. Retainer + projetos + escopo evoluindo + propriedade intelectual.",
    pesos: ["aditivos verbais", "KPI · entregas", "propriedade intelectual"],
    cor: "var(--brand)"
  }
];

export default function CasosPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="container-soma py-16 md:py-20">
          <div className="max-w-[820px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-tint px-3 py-1.5">
              <Building2 className="size-4 text-brand" strokeWidth={1.6} />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                Casos por vertical
              </span>
            </div>

            <h1 className="mb-4 font-title text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl lg:text-[52px] leading-[1.05]">
              Como a +legal_ se encaixa na sua vertical.
            </h1>

            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
              <strong className="font-semibold text-gray-900">Cada vertical tem suas próprias dores contratuais.</strong> Os detalhes que importam para outsourcing TI são diferentes dos que importam para franquia, locação ou agência. Aqui mostramos como a +legal_ se encaixa em cada uma delas, com <strong className="font-semibold text-gray-900">cenário concreto e contas na ponta do lápis</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {VERTICAIS.map((v) => (
              <Link
                key={v.slug}
                href={`/casos/${v.slug}`}
                className="group flex flex-col rounded-2xl border border-stone-200 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className="mb-5 flex size-12 items-center justify-center rounded-xl"
                  style={{ background: `${v.cor}14` }}
                >
                  <Building2 className="size-6" strokeWidth={1.5} style={{ color: v.cor }} />
                </div>

                <h2
                  className="mb-3 font-title text-2xl font-bold leading-snug text-gray-900 group-hover:underline"
                >
                  {v.nome}
                </h2>

                <p className="mb-5 flex-1 text-[14.5px] leading-relaxed text-gray-700">
                  {v.short}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {v.pesos.map((p) => (
                    <span
                      key={p}
                      className="rounded-full px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest"
                      style={{ background: `${v.cor}14`, color: v.cor }}
                    >
                      {p}
                    </span>
                  ))}
                </div>

                <span
                  className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-widest"
                  style={{ color: v.cor }}
                >
                  Ver caso completo <ArrowRight className="size-3.5" strokeWidth={2.5} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
