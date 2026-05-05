import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaDark } from "@/components/base/CtaDark";

const ARTIGOS = [
  {
    slug: "contrato-escrito-para-o-juiz",
    titulo: "O contrato foi escrito para o juiz. Ninguém o escreveu para o dia a dia.",
    autor: "Rafael Rossi",
    role: "Estratégia",
    summary:
      "Contratos mal monitorados criam três custos invisíveis: prazo (multas), reconstrução (semanas de jurídico) e relacionamento (litígio que poderia ter sido conversa).",
    categoria: "Gestão"
  },
  {
    slug: "advogado-historico-organizado",
    titulo: "O que o seu advogado não consegue fazer sem histórico organizado.",
    autor: "Luis Fernando Hiar",
    role: "Contratos",
    summary:
      "Uma defesa sólida começa com informação completa. Sem histórico organizado, o advogado passa semanas reconstruindo fatos antes de começar a estratégia jurídica.",
    categoria: "Para Advogados"
  },
  {
    slug: "combinar-pelo-whatsapp",
    titulo: "Combinar pelo WhatsApp é prático. É seguro?",
    autor: "Luis Fernando Hiar",
    role: "Contratos",
    summary:
      "Pequenas concessões informais se acumulam. WhatsApp é questionável como evidência. Um aditivo formal no ambiente compartilhado leva menos de cinco minutos.",
    categoria: "Educação"
  },
  {
    slug: "conflitos-contratuais-custam-mais",
    titulo: "Por que conflitos contratuais custam mais do que parecem.",
    autor: "Rafael Rossi",
    role: "Estratégia",
    summary:
      "O custo visível é o valor em disputa mais honorários. Os custos invisíveis: tempo de gestão, relacionamento queimado, reputação em due diligence, oportunidade de resolução precoce perdida.",
    categoria: "Disputas"
  }
];

export default function BlogPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="container-soma py-16 md:py-24">
          <div className="max-w-[820px]">
            <p className="eyebrow mb-6">Blog</p>
            <h1 className="h-soma-lg mb-6">
              Conteúdo sobre contratos vivos, gestão e resolução.
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
              Os fundadores escrevem sobre o que veem na prática. Sem
              ensaísmo, sem jargão, sem promessas vagas.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <p className="eyebrow mb-4">Artigos publicados</p>
          <h2 className="h-soma mb-12 max-w-[780px]">
            Quatro artigos. Mais a caminho.
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {ARTIGOS.map(a => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="card-soma group flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <span className="pill">{a.categoria}</span>
                  <span className="font-mono text-xs uppercase tracking-widest text-stone-500">
                    {a.autor} · {a.role}
                  </span>
                </div>
                <h3 className="font-title text-xl font-bold leading-snug text-gray-900 md:text-2xl">
                  {a.titulo}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-gray-700">
                  {a.summary}
                </p>
                <span className="flex items-center gap-1 text-sm font-semibold text-brand group-hover:underline">
                  Ler artigo <ArrowRight className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaDark
        title="Quer receber novos artigos no e-mail?"
        body="A newsletter da +legal_ entra em breve. Por enquanto, entre para o Early Access e receba os posts diretamente da equipe."
      />
    </>
  );
}
