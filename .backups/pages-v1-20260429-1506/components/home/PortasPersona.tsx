import Link from "next/link";
import { ArrowRight, Briefcase, Building2, Scale, Users } from "lucide-react";

const PERSONAS = [
  {
    icon: Briefcase,
    tag: "Operações",
    industry: "Outsourcing B2B · 50-300 contratos",
    role: "Diretora de Operações",
    title: "Você tem dezenas de contratos. Sabe o status de todos?",
    body: "Painel centralizado, alertas automáticos, histórico que não some quando alguém sai da empresa.",
    href: "/para-operacoes",
    color: "brand"
  },
  {
    icon: Building2,
    tag: "PMEs",
    industry: "Serviços · 8-12 colaboradores",
    role: "Sócia-fundadora de PME",
    title: "Seu cliente corporativo tem o jurídico inteiro do lado dele.",
    body: "Histórico único, alertas, evidências organizadas. E uma câmara para resolver em meses, não anos.",
    href: "/para-pmes",
    color: "peach"
  },
  {
    icon: Scale,
    tag: "Advogados",
    industry: "Escritório de médio porte",
    role: "Advogado Contencioso ou Consultivo",
    title: "Quanto tempo você gasta reconstruindo contratos antes de cada arbitragem?",
    body: "Acesso como advogado externo. Histórico que não pode ser apagado. Preço diferenciado por relacionamentos ativos.",
    href: "/para-advogados",
    color: "soma"
  }
] as const;

const COLOR_STYLES: Record<string, {
  border: string;
  iconBg: string;
  iconColor: string;
  pillBg: string;
  pillText: string;
  arrowText: string;
}> = {
  brand: {
    border: "var(--brand)",
    iconBg: "var(--brand-tint)",
    iconColor: "var(--brand)",
    pillBg: "var(--brand-tint)",
    pillText: "var(--brand)",
    arrowText: "text-brand"
  },
  peach: {
    border: "var(--peach-dark)",
    iconBg: "var(--peach-bg)",
    iconColor: "var(--peach-dark)",
    pillBg: "var(--peach-bg)",
    pillText: "var(--peach-dark)",
    arrowText: "text-peach-dark"
  },
  soma: {
    border: "var(--soma)",
    iconBg: "var(--soma-bg)",
    iconColor: "var(--soma)",
    pillBg: "var(--soma-bg)",
    pillText: "var(--soma)",
    arrowText: "text-soma"
  }
};

export function PortasPersona() {
  return (
    <section className="bg-stone-50">
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
            const Icon = p.icon;
            return (
              <Link
                key={p.tag}
                href={p.href}
                className="group flex flex-col rounded-2xl border border-stone-200 border-l-4 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ borderLeftColor: c.border }}
              >
                {/* Icon Lucide grande no topo */}
                <div
                  className="mb-5 flex size-14 items-center justify-center rounded-xl"
                  style={{ background: c.iconBg }}
                >
                  <Icon
                    className="size-7"
                    style={{ color: c.iconColor }}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Tag + industry */}
                <div className="mb-4">
                  <span
                    className="inline-block rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest"
                    style={{ background: c.pillBg, color: c.pillText }}
                  >
                    {p.tag}
                  </span>
                  <p className="mt-1.5 text-xs text-stone-500">{p.industry}</p>
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

                {/* CTA com peso de botão */}
                <span
                  className={`inline-flex items-center gap-1.5 self-start rounded-lg border px-3 py-1.5 text-[13px] font-semibold ${c.arrowText} transition-all group-hover:gap-2.5`}
                  style={{ borderColo