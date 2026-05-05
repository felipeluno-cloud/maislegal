import { X, Check, Filter } from "lucide-react";

const NEGACOES = [
  {
    nao: "Plataforma de assinatura digital",
    sim: "Integramos com as principais opções do mercado. A assinatura é apenas uma etapa."
  },
  {
    nao: "Substituto de advogados",
    sim: "Ferramenta para que você e seus advogados trabalhem com mais informação e controle."
  },
  {
    nao: "Inteligência artificial tomando decisões",
    sim: "A tecnologia cuida do processo. As pessoas cuidam das decisões que importam."
  },
  {
    nao: "Drive com nome jurídico",
    sim: "Ambiente com propósito: monitoramento, alertas, inteligência contratual e resolução."
  },
  {
    nao: "A câmara SOMA",
    sim: "Entidades separadas, integradas. Você pode usar a +legal_ sem usar a SOMA, e vice-versa."
  }
];

export function OQueNaoE() {
  return (
    <section className="bg-white">
      <div className="container-soma section-soma">
        <div className="mb-12 max-w-[820px]">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-stone-300 bg-stone-50 px-3 py-1.5">
            <Filter className="size-4 text-stone-600" strokeWidth={2} />
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-stone-700">
              Filtro · o que não somos
            </span>
          </div>
          <h2 className="h-soma">O que a +legal_ não é.</h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
          {/* Header */}
          <div className="grid grid-cols-1 border-b border-stone-200 md:grid-cols-[1fr_2fr]">
            <div className="border-b border-stone-200 bg-rose-50 px-6 py-4 md:border-b-0 md:border-r">
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-red-700">
                Não é
              </p>
            </div>
            <div className="bg-emerald-50 px-6 py-4">
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-700">
                É
              </p>
            </div>
          </div>

          {/* Rows */}
          {NEGACOES.map((n, i) => (
            <div
              key={n.nao}
              className={`grid grid-cols-1 md:grid-cols-[1fr_2fr] ${
                i < NEGACOES.length - 1 ? "border-b border-stone-200" : ""
              }`}
            >
              <div className="flex items-start gap-3 border-b border-stone-200 px-6 py-5 md:border-b-0 md:border-r">
                <div className="flex size-7 flex-shrink-0 items-center justify-center rounded-full bg-rose-100">
                  <X className="size-4 text-red-600" strokeWidth={2.5} />
                </div>
                <p className="pt-0.5 font-title text-base font-bold text-gray-900">
                  {n.nao}
                </p>
              </div>
              <div className="flex items-start gap-3 px-6 py-5">
                <div className="flex size-7 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                  <Check className="size-4 text-emerald-700" strokeWidth={2.5} />
                </div>
                <p className="pt-0.5 text-[15px] leading-relaxed text-gray-700">
                  {n.sim}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
