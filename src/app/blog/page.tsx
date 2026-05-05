import Link from "next/link";
import { ArrowRight, BookOpen, Clock, User } from "lucide-react";
import { CtaDark } from "@/components/base/CtaDark";
import { HeroLogoBg } from "@/components/base/HeroLogoBg";

const ARTIGOS = [
  {
    slug: "contrato-escrito-para-o-juiz",
    titulo: "O contrato foi escrito para o juiz. Ninguém o escreveu para o dia a dia.",
    autor: "Rafael Rossi",
    role: "Estratégia",
    initial: "R",
    summary:
      "Contratos mal monitorados criam três custos invisíveis: prazo (multas), reconstrução (semanas de jurídico) e relacionamento (litígio que poderia ter sido conversa).",
    categoria: "Gestão",
    color: "brand",
    leitura: "5 min"
  },
  {
    slug: "advogado-historico-organizado",
    titulo: "O que o seu advogado não consegue fazer sem histórico organizado.",
    autor: "Luis Fernando Hiar",
    role: "Contratos",
    initial: "L",
    summary:
      "Uma defesa sólida começa com informação completa. Sem histórico organizado, o advogado passa semanas reconstruindo fatos antes de começar a estratégia jurídica.",
    categoria: "Para Advogados",
    color: "peach",
    leitura: "6 min"
  },
  {
    slug: "combinar-pelo-whatsapp",
    titulo: "Combinar pelo WhatsApp é prático. É seguro?",
    autor: "Luis Fernando Hiar",
    role: "Contratos",
    initial: "L",
    summary:
      "Pequenas concessões informais se acumulam ao longo do tempo, e o WhatsApp não vale como evidência quando o conflito chega. Um aditivo formal feito no ambiente colaborativo leva menos de cinco minutos.",
    categoria: "Educação",
    color: "peach",
    leitura: "4 min"
  },
  {
    slug: "conflitos-contratuais-custam-mais",
    titulo: "Por que conflitos contratuais custam mais do que parecem.",
    autor: "Rafael Rossi",
    role: "Estratégia",
    initial: "R",
    summary:
      "O custo visível é o valor em disputa, mais honorários. Os custos invisíveis: tempo de gestão, relacionamento queimado, reputação na próxima diligência, e a chance de resolver cedo que ficou para trás.",
    categoria: "Disputas",
    color: "soma",
    leitura: "7 min"
  }
];

const COLOR: Record<string, { border: string; bg: string; text: string; pillBg: string }> = {
  brand: {
    border: "var(--brand)",
    bg: "var(--brand)",
    text: "var(--brand)",
    pillBg: "var(--brand-tint)"
  },
  peach: {
    border: "var(--peach-dark)",
    bg: "var(--peach-dark)",
    text: "var(--peach-dark)",
    pillBg: "var(--peach-bg)"
  },
  soma: {
    border: "var(--soma)",
    bg: "var(--soma)",
    text: "var(--soma)",
    pillBg: "var(--soma-bg)"
  }
};

export default function BlogPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-stone-200 bg-white">
        <HeroLogoBg position="top-right" color="var(--brand)" opacity={0.07} width={560} />
        <div className="container-soma relative py-16 md:py-24">
          <div className="max-w-[820px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-tint px-3 py-1.5">
              <BookOpen className="size-4 text-brand" strokeWidth={1.6} />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                Blog
              </span>
            </div>

            <h1 className="mb-6 font-title text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl lg:text-6xl">
              Conteúdo sobre contratos vivos,
              <br />
              <span className="text-brand">gestão e resolução</span>.
            </h1>

            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
              Os fundadores escrevem sobre o que veem na prática, com
              linguagem direta e sem promessas vagas. Cada texto começa em
              uma situação real, e termina em algo que dá para fazer
              diferente já amanhã.
            </p>
          </div>
        </div>
      </section>

      {/* ARTIGO EM DESTAQUE · primeiro */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <p className="eyebrow mb-6">Em destaque</p>

          {(() => {
            const a = ARTIGOS[0];
            const c = COLOR[a.color];
            return (
              <Link
                href={`/blog/${a.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 border-l-4 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:flex-row"
                style={{ borderLeftColor: c.border }}
              >
                {/* Lado esquerdo · ilustração colorida */}
                <div
                  className="flex items-center justify-center p-12 lg:w-[360px]"
                  style={{ background: c.pillBg }}
                >
                  <div className="text-center">
                    <div
                      className="mx-auto mb-4 flex size-20 items-center justify-center rounded-2xl text-4xl font-extrabold text-white shadow-lg"
                      style={{ background: c.bg }}
                    >
                      {a.initial}
                    </div>
                    <p
                      className="font-mono text-[10px] font-bold uppercase tracking-widest"
                      style={{ color: c.text }}
                    >
                      {a.autor}
                    </p>
                    <p className="mt-1 text-xs text-stone-600">{a.role}</p>
                  </div>
                </div>

                {/* Lado direito · conteúdo */}
                <div className="flex flex-1 flex-col gap-4 p-8 md:p-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className="rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest"
                      style={{ background: c.pillBg, color: c.text }}
                    >
                      {a.categoria}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-stone-500">
                      <Clock className="size-3" /> {a.leitura}
                    </span>
                  </div>

                  <h2 className="font-title text-2xl font-bold leading-snug text-gray-900 md:text-3xl">
                    {a.titulo}
                  </h2>

                  <p className="text-base leading-relaxed text-gray-700">
                    {a.summary}
                  </p>

                  <span
                    className="mt-2 flex items-center gap-1.5 font-semibold transition-all group-hover:gap-2.5"
                    style={{ color: c.text }}
                  >
                    Ler artigo completo <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            );
          })()}
        </div>
      </section>

      {/* RESTO DOS ARTIGOS · grid */}
      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mb-12 max-w-[820px]">
            <p className="eyebrow mb-4">Outros artigos</p>
            <h2 className="h-soma">Mais para ler.</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {ARTIGOS.slice(1).map(a => {
              const c = COLOR[a.color];
              return (
                <Link
                  key={a.slug}
                  href={`/blog/${a.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 border-l-4 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ borderLeftColor: c.border }}
                >
                  <div
                    className="flex items-center justify-center px-7 py-8"
                    style={{ background: c.pillBg }}
                  >
                    <div
                      className="flex size-14 items-center justify-center rounded-xl text-2xl font-extrabold text-white"
                      style={{ background: c.bg }}
                    >
                      {a.initial}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-3 p-7">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className="rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest"
                        style={{ background: c.pillBg, color: c.text }}
                      >
                        {a.categoria}
                      </span>
                      <span className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-stone-500">
                        <Clock className="size-3" /> {a.leitura}
                      </span>
                    </div>

                    <h3 className="font-title text-lg font-bold leading-snug text-gray-900">
                      {a.titulo}
                    </h3>

                    <p className="flex-1 text-sm leading-relaxed text-gray-700">
                      {a.summary}
                    </p>

                    <div className="flex items-center gap-2 border-t border-stone-200 pt-4">
                      <User className="size-3.5 text-stone-500" />
                      <span className="text-xs text-stone-600">
                        {a.autor} · {a.role}
                      </span>
                    </div>

                    <span
                      className="mt-2 flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5"
                      style={{ color: c.text }}
                    >
                      Ler artigo <ArrowRight className="size-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaDark
        title="Quer receber novos artigos no e-mail?"
        body="O boletim da +legal_ entra em breve. Por enquanto, entre para o Early Access e receba os artigos diretamente da equipe."
      />
    </>
  );
}
