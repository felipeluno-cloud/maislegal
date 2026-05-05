import {
  Signature,
  Calendar,
  Sparkles,
  Plug,
  HelpCircle,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/base/Button";
import { HeroLogoBg } from "@/components/base/HeroLogoBg";

const CATEGORIAS = [
  {
    icon: Signature,
    label: "Categoria 01",
    title: "Parceiros de assinatura",
    body: "Conexão com as principais plataformas brasileiras de assinatura eletrônica, para que o contrato seja assinado dentro do fluxo que você já usa. A assinatura acontece lá, mas a vida do contrato acontece aqui.",
    quote: "A assinatura é etapa, não produto inteiro.",
    status: "Disponível",
    color: "brand"
  },
  {
    icon: Calendar,
    label: "Categoria 02",
    title: "Calendário, CRM e comunicação",
    body: "Conexão com Slack, Google Calendar, HubSpot e Pipedrive, para que as obrigações do contrato sincronizem com o ritmo da operação e cheguem onde o time já está olhando.",
    quote: "Para que o contrato siga o pipeline.",
    status: "Em construção · Q3 2026",
    color: "peach"
  },
  {
    icon: Sparkles,
    label: "Categoria 03",
    title: "Add-ons planejados",
    body: "Consulta JUCESP, conexão com especialistas SOMA e digitalização de portfólio legado, pensados para quando a operação cresce e novos serviços fazem sentido.",
    quote: "Não anunciado como disponível.",
    status: "Futuro",
    color: "soma"
  }
];

const OBJECOES = [
  {
    q: "Já tenho ferramenta de assinatura.",
    a: "A assinatura é apenas uma etapa do contrato. A +legal_ gerencia tudo o que vem depois dela, com integração nativa às principais plataformas do mercado. Você não troca o que já funciona."
  },
  {
    q: "Tenho Drive ou pasta organizada.",
    a: "Drive guarda arquivo, mas a +legal_ guarda contexto, histórico e obrigações, e garante que quem está no contrato veja a mesma versão ao mesmo tempo."
  },
  {
    q: "Uso planilha para acompanhar.",
    a: "A planilha não acompanha o contrato sozinha, então a obrigação acaba esquecida porque depende de alguém lembrar de atualizar. Na +legal_, você não precisa lembrar."
  }
];

const COLOR: Record<string, { border: string; bg: string; iconBg: string; iconText: string; pillBg: string; pillText: string }> = {
  brand: {
    border: "var(--brand)",
    bg: "var(--brand-tint)",
    iconBg: "var(--brand-tint)",
    iconText: "var(--brand)",
    pillBg: "white",
    pillText: "var(--brand)"
  },
  peach: {
    border: "var(--peach-dark)",
    bg: "var(--peach-bg)",
    iconBg: "var(--peach-bg)",
    iconText: "var(--peach-dark)",
    pillBg: "white",
    pillText: "var(--peach-dark)"
  },
  soma: {
    border: "var(--soma)",
    bg: "var(--soma-bg)",
    iconBg: "var(--soma-bg)",
    iconText: "var(--soma)",
    pillBg: "white",
    pillText: "var(--soma)"
  }
};

export default function IntegracoesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-stone-200 bg-white">
        <HeroLogoBg position="top-right" color="var(--brand)" opacity={0.07} width={560} />
        <div className="container-soma relative py-16 md:py-24">
          <div className="max-w-[820px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-tint px-3 py-1.5">
              <Plug className="size-4 text-brand" strokeWidth={1.6} />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                Integrações
              </span>
            </div>

            <h1 className="mb-6 font-title text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl lg:text-[60px] leading-[1.06]">
              Você não troca as ferramentas que já usa. A +legal_ se conecta com elas.
            </h1>

            <p className="mb-3 text-lg leading-relaxed text-gray-600 md:text-xl">
              A +legal_ complementa o que você já tem. Ela não substitui sua plataforma de assinatura, seu Drive, ou seu CRM.
            </p>
            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
              Ela cobre o espaço que existe entre todos esses sistemas, onde o contrato vive de verdade.
            </p>
          </div>
        </div>
      </section>

      {/* DIAGRAMA · onde a +legal_ se encaixa */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mb-12 max-w-[820px]">
            <p className="eyebrow mb-4">Onde se encaixa</p>
            <h2 className="h-soma mb-4">
              A vida do contrato fica aqui. A assinatura, lá.
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border-2 border-brand bg-white p-8 md:p-12">
            <DiagramaIntegracao />
          </div>
        </div>
      </section>

      {/* 3 CATEGORIAS */}
      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mb-12 max-w-[820px]">
            <p className="eyebrow mb-4">Três categorias</p>
            <h2 className="h-soma mb-4">Disponível agora, em construção, e em estudo.</h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {CATEGORIAS.map(cat => {
              const c = COLOR[cat.color];
              const Icon = cat.icon;
              return (
                <div
                  key={cat.label}
                  className="flex flex-col overflow-hidden rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ borderColor: c.border }}
                >
                  <div className="px-7 pb-6 pt-7" style={{ background: c.bg }}>
                    <div className="mb-5 flex items-center justify-between">
                      <div
                        className="flex size-12 items-center justify-center rounded-xl bg-white shadow-sm"
                      >
                        <Icon
                          className="size-6"
                          style={{ color: c.iconText }}
                          strokeWidth={1.5}
                        />
                      </div>
                      <span
                        className="rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest"
                        style={{ background: c.pillBg, color: c.pillText }}
                      >
                        {cat.label}
                      </span>
                    </div>
                    <h3
                      className="font-title text-xl font-bold leading-snug"
                      style={{ color: c.iconText }}
                    >
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-1 flex-col gap-4 bg-white p-7">
                    <p className="text-sm leading-relaxed text-gray-700">
                      {cat.body}
                    </p>
                    <p className="border-t border-stone-200 pt-4 text-sm text-gray-600">
                      "{cat.quote}"
                    </p>
                    <div
                      className="inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest"
                      style={{ background: c.bg, color: c.iconText }}
                    >
                      <span
                        className="size-1.5 rounded-full"
                        style={{ background: c.iconText }}
                      />
                      {cat.status}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TIRA DE OBJEÇÕES */}
      <section className="bg-brand-tint">
        <div className="container-soma section-soma">
          <div className="mb-12 max-w-[820px]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-white px-3 py-1.5">
              <HelpCircle className="size-4 text-brand" strokeWidth={1.6} />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                "Já uso..."
              </span>
            </div>
            <h2 className="h-soma">As três objeções que sempre aparecem.</h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {OBJECOES.map(o => (
              <div
                key={o.q}
                className="rounded-2xl border-2 border-brand-light bg-white p-7"
              >
                <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-tint px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-brand">
                  Objeção
                </p>
                <h3 className="mb-4 font-title text-lg font-bold text-gray-900">
                  "{o.q}"
                </h3>
                <p className="border-t border-stone-200 pt-4 text-sm leading-relaxed text-gray-700">
                  {o.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA forte · próximo passo */}
      <section className="bg-brand text-white">
        <div className="container-soma py-16 md:py-20">
          <div className="mx-auto max-w-[860px] text-center">
            <p className="eyebrow-light mb-5">Próximo passo</p>
            <h2 className="mb-6 font-title text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              Você começa com um contrato, ou pede uma integração específica primeiro.
            </h2>
            <p className="mx-auto mb-10 max-w-[640px] text-lg leading-relaxed text-white/80">
              O caminho rápido é entrar para o Early Access e usar as integrações disponíveis. O caminho cauteloso é nos contar qual integração faz diferença para o seu time, e a equipe avalia o roadmap a partir do seu pedido.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Button
                href="/early-access"
                variant="primary"
                size="lg"
                className="!bg-white !text-brand hover:!bg-stone-100"
              >
                Entrar para o Early Access <ArrowRight className="size-4" />
              </Button>
              <Button
                href="mailto:contato@maislegal.tech?subject=Pedido%20de%20integra%C3%A7%C3%A3o"
                variant="secondary"
                size="lg"
                className="!bg-transparent !border-white/40 !text-white hover:!bg-white/10 hover:!border-white"
              >
                Pedir uma integração
              </Button>
            </div>

            <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-white/60">
              Resposta da equipe em 1 dia útil
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

// Diagrama mostrando onde a +legal_ se encaixa
function DiagramaIntegracao() {
  return (
    <svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full" aria-hidden="true">
      <line x1="100" y1="110" x2="900" y2="110" stroke="var(--brand)" strokeWidth="2" strokeDasharray="6 4" opacity="0.3" />

      {/* Assinatura */}
      <g transform="translate(100 110)">
        <circle r="50" fill="white" stroke="var(--brand)" strokeWidth="1.8" opacity="0.5" />
        <svg x="-15" y="-15" width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path d="M3 17.5l2 2 5-5M14 4l3 3-9 9H5v-3z" stroke="var(--brand)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
        </svg>
        <text x="0" y="80" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="700" fill="var(--brand)" textAnchor="middle" letterSpacing="1.5">ASSINATURA</text>
      </g>

      {/* +legal_ no centro */}
      <g transform="translate(500 110)">
        <circle r="80" fill="var(--brand)" />
        <text x="0" y="0" fontFamily="Barlow, sans-serif" fontSize="22" fontWeight="800" fill="white" textAnchor="middle" letterSpacing="-0.5">+legal_</text>
        <text x="0" y="20" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill="white" textAnchor="middle" letterSpacing="1.5" opacity="0.7">A CAMADA</text>
        <text x="0" y="32" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill="white" textAnchor="middle" letterSpacing="1.5" opacity="0.7">QUE CONECTA</text>
      </g>

      {/* CRM / Calendário */}
      <g transform="translate(900 110)">
        <circle r="50" fill="white" stroke="var(--peach-dark)" strokeWidth="1.8" opacity="0.7" />
        <svg x="-15" y="-15" width="30" height="30" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="18" rx="2" stroke="var(--peach-dark)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
          <line x1="16" y1="2" x2="16" y2="6" stroke="var(--peach-dark)" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="8" y1="2" x2="8" y2="6" stroke="var(--peach-dark)" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="3" y1="10" x2="21" y2="10" stroke="var(--peach-dark)" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <text x="0" y="80" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="700" fill="var(--peach-dark)" textAnchor="middle" letterSpacing="1.5">CRM · CALENDÁRIO</text>
      </g>
    </svg>
  );
}
