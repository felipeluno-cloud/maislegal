import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";

const PERSONAS = [
  {
    tag: "Operações",
    initial: "D",
    role: "Diretora de Operações",
    industry: "Outsourcing B2B · 50-300 contratos",
    title: "Você tem dezenas de contratos. Sabe o status de todos?",
    body: "Painel centralizado, alertas automáticos, histórico que não some quando alguém sai da empresa.",
    href: "/para-operacoes",
    color: "brand"
  },
  {
    tag: "PMEs",
    initial: "S",
    role: "Sócia-fundadora de PME",
    industry: "Serviços · 8-12 colaboradores",
    title: "Seu cliente corporativo tem o jurídico inteiro do lado dele.",
    body: "Histórico único, alertas, evidências organizadas. E uma câmara para resolver em meses, não anos.",
    href: "/para-pmes",
    color: "peach"
  },
  {
    tag: "Advogados",
    initial: "A",
    role: "Advogado Contencioso ou Consultivo",
    industry: "Escritório de médio porte",
    title: "Quanto tempo você gasta reconstruindo contratos antes de cada arbitragem?",
    body: "Acesso como advogado externo. Histórico que não pode ser apagado. Preço diferenciado por relacionamentos ativos.",
    href: "/para-advogados",
    color: "soma"
  }
] as const;

const COLOR_STYLES: Record<string, { border: string; iconBg: string; iconText: string; pillBg: string; pillText: string; arrowText: string }> = {
  brand: {
    border: "var(--brand)",
    iconBg: "var(--brand-tint)",
    iconText: "var(--brand)",
    pillBg: "var(--brand-tint)",
    pillText: "var(--brand)",
    arrowText: "text-brand"
  },
  peach: {
    border: "var(--peach-dark)",
    iconBg: "var(--peach-bg)",
    iconText: "var(--peach-dark)",
    pillBg: "var(--peach-bg)",
    pillText: "var(--peach-dark)",
    arrowText: "text-peach-dark"
  },
  soma: {
    border: "var(--soma)",
    iconBg: "var(--soma-bg)",
    iconText: "var(--soma)",
    pillBg: "var(--soma-bg)",
    pillText: "var(--soma)",
    arrowText: "text-soma"
  }
};

export function PortasPersona() {
  return (
    <section className="bg-white">
      <div className="container-soma section-soma">
        <div className="mb-12 max-w-[820px]">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-tint px-3 py-1.5">
            <Users className="size-4 text-brand" strokeWidth={2} />
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
              Para quem é
            </span>
          </div>
          <h2 className="h-soma mb-4">Três perfis. Três caminhos diferentes.</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Cada perfil chega à +legal_ com uma necessidade diferente.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {PERSONAS.map(p => {
            const c = COLOR_STYLES[p.color];
            return (
              <Link
                key={p.tag}
                href={p.href}
                className="group flex flex-col rounded-2xl border border-stone-200 border-l-4 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ borderLeftColor: c.border }}
              >
                {/* Persona icon estilo deck (square colorido) */}
                <div className="mb-5 flex items-center gap-4">
                  <div
                    className="flex size-14 items-center justify-center rounded-xl font-title text-2xl font-extrabold"
                    style={{ background: c.iconBg, color: c.iconText }}
                  >
                    {p.initial}
                  </div>
                  <div>
                    <span
                      className="inline-block rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest"
                      style={{ background: c.pillBg, color: c.pillText }}
                    >
                      {p.tag}
                    </span>
                    <p className="mt-1 text-xs text-stone-500">{p.industry}</p>
                  </div>
                </div>

                {/* Role */}
                <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-stone-500">
                  {p.role}
                </p>

                {/* Title quote */}
                <h3 className="mb-4 font-title text-lg font-bold leading-snug text-gray-900">
                  "{p.title}"
                </h3>

                {/* Body */}
                <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-700">
                  {p.body}
                </p>

                {/* CTA */}
                <span
                  className={`flex items-center gap-1.5 text-sm font-semibold ${c.arrowText} transition-all group-hover:gap-2.5`}
                >
                  Ver página completa <ArrowRight className="size-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
