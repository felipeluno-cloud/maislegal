import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CtaDark } from "@/components/base/CtaDark";

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <>
      <article className="bg-white">
        <div className="container-soma py-16 md:py-24">
          <Link
            href="/blog"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
          >
            <ArrowLeft className="size-4" /> Voltar ao blog
          </Link>

          <div className="max-w-[720px]">
            <p className="eyebrow mb-4">Artigo</p>
            <h1 className="mb-6 font-title text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl">
              Artigo: {params.slug.replace(/-/g, " ")}
            </h1>
            <p className="font-mono text-xs uppercase tracking-widest text-stone-500 mb-12">
              Conteúdo do artigo a ser migrado dos Knowledge MDs
            </p>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Este é um stub de artigo individual. O conteúdo completo dos
                quatro artigos publicados está disponível em{" "}
                <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">
                  Knowledge/ml-gtm.md
                </code>{" "}
                e em{" "}
                <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">
                  +legal_/Sources/Hub de Referência/maislegal-blog-articles-v1.docx
                </code>
                .
              </p>
              <p>
                A migração final do copy de cada artigo deve ser feita por
                Felipe ou pela equipe da +legal_, com rotulação e categorização
                conforme o ml-gtm.md.
              </p>
            </div>
          </div>
        </div>
      </article>

      <CtaDark
        title="Quer continuar a conversa?"
        body="Entre para o Early Access. Os fundadores respondem directo."
      />
    </>
  );
}
