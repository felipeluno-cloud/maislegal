import Link from "next/link";
import { ArrowRight, Calculator, HelpCircle } from "lucide-react";

type Props = {
  /** Cor da persona da página atual: "brand" (Operações), "peach" (PME), "soma" (Escritório). */
  cor?: "brand" | "peach" | "soma";
};

const COR_MAP = {
  brand: { var: "var(--brand)", bg: "var(--brand-tint)" },
  peach: { var: "var(--peach-dark)", bg: "var(--peach-bg)" },
  soma: { var: "var(--soma)", bg: "var(--soma-bg)" }
};

export function NavegacaoCruzada({ cor = "brand" }: Props) {
  const c = COR_MAP[cor];
  return (
    <section className="bg-white">
      <div className="container-soma py-12 md:py-14">
        <div className="mb-8 max-w-[760px]">
          <p
            className="mb-3 font-mono text-[11px] font-bold uppercase tracking-widest"
            style={{ color: c.var }}
          >
            Antes de falar com a gente
          </p>
          <h2 className="font-title text-2xl font-bold tracking-tighter text-gray-900 md:text-3xl">
            Calcula o que escapa, ou tira as dúvidas que costumam aparecer.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Link
            href="/calculadora"
            className="group flex items-start gap-4 rounded-2xl border-2 bg-white p-6 transition-all hover:-translate-y-0.5"
            style={{ borderColor: `${c.var}33`, background: c.bg }}
          >
            <div
              className="flex size-11 shrink-0 items-center justify-center rounded-xl"
              style={{ background: c.var }}
            >
              <Calculator className="size-5 text-white" strokeWidth={1.6} />
            </div>
            <div className="flex-1">
              <p
                className="mb-1 font-mono text-[10px] font-bold uppercase tracking-widest"
                style={{ color: c.var }}
              >
                Calculadora de ROI
              </p>
              <p className="mb-3 font-title text-[17px] font-bold leading-snug text-gray-900">
                Quanto seu portfólio custa quando ninguém olha para ele.
              </p>
              <span
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold transition-all group-hover:gap-2.5"
                style={{ color: c.var }}
              >
                Calcular agora <ArrowRight className="size-3.5" />
              </span>
            </div>
          </Link>

          <Link
            href="/faq"
            className="group flex items-start gap-4 rounded-2xl border-2 border-stone-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-stone-400"
          >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-stone-900">
              <HelpCircle className="size-5 text-white" strokeWidth={1.6} />
            </div>
            <div className="flex-1">
              <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-widest text-stone-700">
                Perguntas frequentes
              </p>
              <p className="mb-3 font-title text-[17px] font-bold leading-snug text-gray-900">
                Respostas para as dúvidas que costumam aparecer.
              </p>
              <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-gray-900 transition-all group-hover:gap-2.5">
                Ver perguntas <ArrowRight className="size-3.5" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
