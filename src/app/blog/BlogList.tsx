"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Clock, User, Filter } from "lucide-react";
import type { Artigo } from "./artigos";

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

type Props = {
  artigos: Artigo[];
};

export function BlogList({ artigos }: Props) {
  const [categoria, setCategoria] = useState<string>("todas");

  const categorias = useMemo(() => {
    const cats = Array.from(new Set(artigos.map((a) => a.categoria)));
    return cats.sort();
  }, [artigos]);

  const filtrados = useMemo(() => {
    if (categoria === "todas") return artigos;
    return artigos.filter((a) => a.categoria === categoria);
  }, [artigos, categoria]);

  return (
    <>
      {/* FILTROS */}
      <section className="border-b border-stone-200 bg-white">
        <div className="container-soma py-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">
              <Filter className="size-3.5" strokeWidth={2} /> Filtrar por
            </span>
            <button
              onClick={() => setCategoria("todas")}
              className={`rounded-full px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-widest transition-colors ${
                categoria === "todas"
                  ? "bg-brand text-white"
                  : "border border-stone-300 bg-white text-stone-600 hover:bg-stone-50"
              }`}
            >
              Todas · {artigos.length}
            </button>
            {categorias.map((cat) => {
              const ativo = categoria === cat;
              const count = artigos.filter((a) => a.categoria === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setCategoria(cat)}
                  className={`rounded-full px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-widest transition-colors ${
                    ativo
                      ? "bg-brand text-white"
                      : "border border-stone-300 bg-white text-stone-600 hover:bg-stone-50"
                  }`}
                >
                  {cat} · {count}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtrados.map((a) => {
              const c = COLOR[a.color];
              return (
                <Link
                  key={a.slug}
                  href={`/blog/${a.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 border-l-4 bg-white transition-all hover:-translate-y-1 hover:shadow-lg"
                  style={{ borderLeftColor: c.border }}
                >
                  <div
                    className="flex items-center justify-center px-7 py-7"
                    style={{ background: c.pillBg }}
                  >
                    <div
                      className="flex size-14 items-center justify-center rounded-xl text-2xl font-extrabold text-white"
                      style={{ background: c.bg }}
                    >
                      {a.initial}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-3 p-6">
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

                    <p className="flex-1 text-[13.5px] leading-relaxed text-gray-700">
                      {a.summary}
                    </p>

                    <div className="flex items-center gap-2 border-t border-stone-200 pt-3">
                      <User className="size-3.5 text-stone-500" />
                      <span className="text-[12px] text-stone-600">
                        {a.autor} · {a.role}
                      </span>
                    </div>

                    <span
                      className="mt-1 flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5"
                      style={{ color: c.text }}
                    >
                      Ler artigo <ArrowRight className="size-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {filtrados.length === 0 && (
            <div className="rounded-2xl border-2 border-dashed border-stone-300 bg-white p-10 text-center">
              <p className="text-stone-600">
                Nenhum artigo nessa categoria ainda. Volta logo, a equipe está escrevendo.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
