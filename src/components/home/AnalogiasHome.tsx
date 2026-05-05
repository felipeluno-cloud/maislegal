import Link from "next/link";
import { ArrowRight, Sprout } from "lucide-react";

export function AnalogiasHome() {
  return (
    <section className="bg-stone-50">
      <div className="container-soma section-soma">
        <div className="mb-12 max-w-[860px]">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-3 py-1.5">
            <Sprout className="size-4 text-brand" strokeWidth={1.6} />
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-stone-700">
              Por que a <span className="normal-case">+legal_</span> existe
            </span>
          </div>
          <h2 className="h-soma mb-4">
            Contrato bom não fica parado. Cresce e se adapta, como os melhores relacionamentos.
          </h2>
          <p className="mb-3 text-lg leading-relaxed text-gray-700">
            Toda relação B2B passa por ceder, ajustar e refazer o combinado. A <span className="text-brand">+legal_</span> é onde isso acontece com proteção: cada favor fica registrado, cada concessão fica explicada, cada mudança fica ligada ao original. Você flexibiliza sem se colocar em uma furada.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            <strong className="font-semibold text-gray-900">Coração jurídico, alma comercial.</strong> O contrato serve ao relacionamento, e não o contrário.
          </p>
        </div>

        {/* Card editorial em destaque · linha de vida + texto leve */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1.1fr_1fr]">
          {/* Visual · screenshot da plataforma com timeline ativa */}
          <div className="flex items-center justify-center rounded-3xl bg-stone-100 p-6 md:p-8">
            <LinhaDeVidaContrato />
          </div>

          {/* Texto · frase âncora + bullets + CTA */}
          <div className="flex flex-col justify-center rounded-3xl border-2 border-brand bg-white p-8 md:p-10">
            <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
              O que defendemos
            </p>
            <p className="mb-8 font-title text-2xl font-bold leading-snug tracking-tight text-gray-900 md:text-3xl">
              O contrato vivo se molda ao relacionamento.
              <br />
              <span className="text-stone-400">
                O contrato engavetado prende o relacionamento.
              </span>
            </p>

            {/* Vivo */}
            <div className="mb-6">
              <p className="mb-3 text-[15px] font-semibold leading-snug text-brand">
                Vivo, ele guia o relacionamento a cada mudança do negócio:
              </p>
              <ul className="space-y-2">
                {[
                  "cada combinado fica registrado, e isso sustenta a confiança entre as partes",
                  "ajustes, favores e exceções ficam negociáveis, porque o combinado original está claro",
                  "a relação amadurece a cada movimento, em vez de travar na versão inicial"
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[14px] leading-snug text-gray-700"
                  >
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full"
                      style={{ background: "var(--brand)" }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Engavetado */}
            <div className="mb-7 border-t border-stone-200 pt-6">
              <p className="mb-3 text-[15px] font-semibold leading-snug text-stone-500">
                Engavetado, é papel de defesa, aberto só na hora do conflito:
              </p>
              <ul className="space-y-2">
                {[
                  "cada parte se prende ao que está escrito, e perde a margem de cooperação",
                  "o contrato vira evidência em um impasse, em vez de ferramenta para resolvê-lo",
                  "sem espaço para mediar, sobra ruptura ou prejuízo aceito em silêncio"
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[14px] leading-snug text-stone-600"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-stone-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/explainers#explainer-04"
              className="inline-flex items-center gap-2 self-start rounded-lg bg-brand px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-white transition-all hover:gap-3 hover:bg-brand-mid"
            >
              Ver o explainer completo <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Timeline do contrato · biografia vertical com tipos de movimento
function LinhaDeVidaContrato() {
  type Evento = {
    tempo: string;
    tipo: string;
    titulo: string;
    cor: string;
    destaque?: boolean;
    primeiro?: boolean;
  };

  const eventos: Evento[] = [
    {
      tempo: "Hoje",
      tipo: "Renovação",
      titulo: "Próxima renovação · 47 dias",
      cor: "var(--brand)",
      destaque: true
    },
    {
      tempo: "Há 3 dias",
      tipo: "Favor",
      titulo: "Prazo de entrega estendido em 15 dias",
      cor: "var(--brand)"
    },
    {
      tempo: "Há 1 semana",
      tipo: "Aditivo",
      titulo: "Aditivo 03 · novo escopo de serviços",
      cor: "var(--brand)"
    },
    {
      tempo: "Há 3 semanas",
      tipo: "Revisão",
      titulo: "Cláusula 5.1 reescrita após renegociação",
      cor: "var(--brand)"
    },
    {
      tempo: "Há 2 meses",
      tipo: "Concessão",
      titulo: "Reajuste suspenso por 90 dias",
      cor: "#a8a29e"
    },
    {
      tempo: "Há 1 ano",
      tipo: "Assinatura",
      titulo: "Versão 1 do MSA assinada",
      cor: "#d6d3d1",
      primeiro: true
    }
  ];

  const tabs = [
    { label: "Detalhes", active: false },
    { label: "Cláusulas", active: false },
    { label: "Timeline", active: true },
    { label: "Pessoas", active: false }
  ];

  return (
    <div className="w-full max-w-[480px] overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm">
      {/* App titlebar · macOS-style com breadcrumb */}
      <div className="flex items-center gap-3 border-b border-stone-200 bg-stone-50 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-stone-300" />
          <span className="size-2.5 rounded-full bg-stone-300" />
          <span className="size-2.5 rounded-full bg-stone-300" />
        </div>
        <p className="flex-1 truncate text-center font-mono text-[10.5px] font-medium text-stone-500">
          <span className="normal-case">+legal_</span> · Beta Serviços × Acme Corp
        </p>
        <span className="font-mono text-[10px] text-stone-400">⌘K</span>
      </div>

      {/* Tabs · Timeline ativo */}
      <div className="flex border-b border-stone-200 bg-white">
        {tabs.map((tab) => (
          <div
            key={tab.label}
            className={`relative px-4 py-2.5 text-[11px] font-medium ${
              tab.active ? "text-brand" : "text-stone-500"
            }`}
          >
            {tab.label}
            {tab.active && (
              <span
                className="absolute bottom-[-1px] left-0 right-0 h-0.5"
                style={{ background: "var(--brand)" }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Conteúdo do tab ativo */}
      <div className="p-5 md:p-6">
        {/* Header · identidade do contrato + sinal vivo */}
        <div className="mb-5 flex items-start justify-between gap-4 border-b border-stone-200 pb-4">
          <div className="min-w-0">
            <p className="mb-1 font-mono text-[11px] font-bold uppercase tracking-widest text-stone-500">
              MSA · Outsourcing TI
            </p>
            <p className="font-title text-[15px] font-bold text-gray-900">
              Versão 7 · ativo · 24 meses
            </p>
          </div>
          <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-700">
              Vivo
            </span>
          </span>
        </div>

        {/* Timeline · spine vertical + dots + tempos + títulos */}
        <div className="relative pl-7">
        {/* Spine */}
        <div className="absolute left-[9px] top-1 bottom-1 w-px bg-stone-200" />

        {eventos.map((e, idx) => {
          const isDestaque = e.destaque;
          const isPrimeiro = e.primeiro;
          return (
            <div
              key={idx}
              className={`relative ${idx === eventos.length - 1 ? "" : "mb-4"}`}
            >
              {/* Dot · sinal cronológico */}
              <span
                className="absolute -left-[22px] top-[3px] flex size-3 items-center justify-center"
                aria-hidden="true"
              >
                {isDestaque && (
                  <span
                    className="absolute inline-flex size-full animate-ping rounded-full opacity-50 motion-reduce:hidden"
                    style={{ background: e.cor }}
                  />
                )}
                <span
                  className="relative inline-flex size-3 rounded-full ring-4 ring-white"
                  style={{
                    background: isPrimeiro ? "white" : e.cor,
                    border: isPrimeiro ? `2px solid ${e.cor}` : "none"
                  }}
                />
              </span>

              {/* Tempo + tipo (categorização do movimento) */}
              <div className="flex items-baseline justify-between gap-3">
                <p
                  className={`font-mono text-[10px] font-bold uppercase tracking-widest ${
                    isDestaque ? "text-brand" : "text-stone-400"
                  }`}
                >
                  {e.tempo}
                </p>
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-stone-400">
                  {e.tipo}
                </p>
              </div>

              {/* Título do evento */}
              <p
                className={`mt-0.5 text-[13px] leading-snug ${
                  isDestaque
                    ? "font-bold text-gray-900"
                    : isPrimeiro
                    ? "font-medium text-stone-500"
                    : "font-medium text-gray-700"
                }`}
              >
                {e.titulo}
              </p>
            </div>
          );
        })}
      </div>

        {/* Footer · stats acumuladas */}
        <div className="mt-5 border-t border-stone-200 pt-4 text-center">
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">
            3 aditivos · 8 favores · 23 movimentos · em dia
          </p>
        </div>
      </div>
    </div>
  );
}
