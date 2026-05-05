import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/base/Button";
import { ARTIGOS } from "../artigos";

const COLOR: Record<string, { border: string; bg: string; text: string; pillBg: string }> = {
  brand: { border: "var(--brand)", bg: "var(--brand)", text: "var(--brand)", pillBg: "var(--brand-tint)" },
  peach: { border: "var(--peach-dark)", bg: "var(--peach-dark)", text: "var(--peach-dark)", pillBg: "var(--peach-bg)" },
  soma: { border: "var(--soma)", bg: "var(--soma)", text: "var(--soma)", pillBg: "var(--soma-bg)" }
};

export function generateStaticParams() {
  return ARTIGOS.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = ARTIGOS.find((x) => x.slug === slug);
  if (!a) notFound();
  const c = COLOR[a.color];
  const idx = ARTIGOS.findIndex((x) => x.slug === slug);
  const proximo = ARTIGOS[idx + 1] ?? ARTIGOS[0];

  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="container-soma py-4">
          <Link href="/blog" className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-widest text-stone-600 hover:text-brand">
            <ArrowLeft className="size-3.5" strokeWidth={2.5} /> Voltar para o blog
          </Link>
        </div>
      </section>
      <section className="border-b border-stone-200 bg-white">
        <div className="container-soma py-12 md:py-16">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest" style={{ background: c.pillBg, color: c.text }}>{a.categoria}</span>
            <span className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-stone-500"><Clock className="size-3" /> {a.leitura}</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-stone-500">{a.publicado}</span>
          </div>
          <h1 className="mb-5 font-title text-3xl font-bold tracking-tighter text-gray-900 md:text-5xl leading-[1.05]">{a.titulo}</h1>
          <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl max-w-[760px]">{a.summary}</p>
          <div className="flex items-center gap-3 border-t border-stone-200 pt-6">
            <div className="flex size-10 items-center justify-center rounded-xl font-bold text-white" style={{ background: c.bg }}>{a.initial}</div>
            <div>
              <p className="font-title text-sm font-bold text-gray-900">{a.autor}</p>
              <p className="text-xs text-stone-600">{a.role}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-stone-50">
        <div className="container-soma py-12">
          <div className="mx-auto max-w-[760px] rounded-2xl border border-stone-200 bg-white p-7">
            <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">Próximo artigo</p>
            <h3 className="mb-4 font-title text-xl font-bold text-gray-900">{proximo.titulo}</h3>
            <Button href={`/blog/${proximo.slug}`} variant="ghost" size="md">Continuar lendo <ArrowRight className="size-4" /></Button>
          </div>
        </div>
      </section>
    </>
  );
}
