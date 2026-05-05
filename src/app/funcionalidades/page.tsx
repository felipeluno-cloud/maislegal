import {
  Users,
  Bell,
  FilePlus,
  History,
  Cog,
  Scale,
  X,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/base/Button";
import { HeroLogoBg } from "@/components/base/HeroLogoBg";

const BLOCOS = [
  {
    icon: Users,
    num: "01",
    title: "Ambiente colaborativo",
    body: "Você, o cliente e o seu advogado externo trabalham no mesmo contrato, <strong class=\"font-semibold text-gray-900\">no mesmo lugar</strong>. Não é sistema do fornecedor nem do cliente, ninguém ganha favorecimento.",
    color: "brand"
  },
  {
    icon: Bell,
    num: "02",
    title: "Monitoramento e alertas",
    body: "Cada cláusula do contrato vira prazo no calendário do seu time. Os avisos chegam 90, 60 e 30 dias antes, para o time se preparar, <strong class=\"font-semibold text-gray-900\">não correr atrás</strong>.",
    color: "brand"
  },
  {
    icon: FilePlus,
    num: "03",
    title: "Aditivos formalizados",
    body: "O 'pode mudar X?' que veio por WhatsApp vira <strong class=\"font-semibold text-gray-900\">aditivo formal</strong>, com aprovação dos dois lados. O combinado verbal não some na próxima conversa.",
    color: "brand"
  },
  {
    icon: History,
    num: "04",
    title: "Histórico que sobrevive",
    body: "Cada versão, comentário e aditivo do contrato fica registrado com autoria, data e responsável. Quando você precisar reconstruir o que aconteceu, <strong class=\"font-semibold text-gray-900\">está tudo pronto</strong>.",
    color: "brand"
  },
  {
    icon: Cog,
    num: "05",
    title: "Tecnologia que extrai obrigações",
    body: "Cada cláusula do contrato vira obrigação rastreável e evento no calendário. Você decide o que fazer com cada alerta. <strong class=\"font-semibold text-gray-900\">A tecnologia organiza, as pessoas decidem.</strong>",
    color: "brand"
  },
  {
    icon: Scale,
    num: "06",
    title: "Resolução SOMA integrada",
    body: "Quando vira disputa, você não precisa reconstruir nada. A SOMA, nossa câmara de mediação e arbitragem, recebe o histórico do contrato com <strong class=\"font-semibold text-gray-900\">um clique</strong>.",
    color: "soma"
  }
];

const NAO_FAZ = [
  {
    title: "Não substitui advogados",
    body: "Eles são parceiros importantes, e nada substitui um profissional especializado."
  },
  {
    title: "Não é só assinatura digital",
    body: "Integra com o que você já usa (DocuSign, ClickSign, ZapSign), mas vai além: cria um ambiente único, colaborativo entre as partes."
  },
  {
    title: "Não decide com IA",
    body: "A tecnologia organiza o processo, mas as pessoas tomam as decisões. Sem IA julgando ou aprovando no seu lugar."
  },
  {
    title: "Não é Drive ou repositório genérico",
    body: "Não é uma pasta partilhada com versionamento. É um ambiente que orquestra contrato, partes envolvidas e ciclo de vida."
  },
  {
    title: "Não obriga uso da câmara SOMA",
    body: "A SOMA está acoplada para a +legal_ cobrir o ciclo inteiro. Mas você decide se usa."
  }
];

const COLOR: Record<string, { border: string; bg: string; iconBg: string; iconText: string; numBg: string; pillBg: string; pillText: string }> = {
  brand: {
    border: "var(--brand)",
    bg: "var(--brand-tint)",
    iconBg: "var(--brand-tint)",
    iconText: "var(--brand)",
    numBg: "var(--brand)",
    pillBg: "var(--brand-tint)",
    pillText: "var(--brand)"
  },
  peach: {
    border: "var(--peach-dark)",
    bg: "var(--peach-bg)",
    iconBg: "var(--peach-bg)",
    iconText: "var(--peach-dark)",
    numBg: "var(--peach-dark)",
    pillBg: "var(--peach-bg)",
    pillText: "var(--peach-dark)"
  },
  soma: {
    border: "var(--soma)",
    bg: "var(--soma-bg)",
    iconBg: "var(--soma-bg)",
    iconText: "var(--soma)",
    numBg: "var(--soma)",
    pillBg: "var(--soma-bg)",
    pillText: "var(--soma)"
  }
};

export default function FuncionalidadesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-stone-200 bg-white">
        <HeroLogoBg position="top-right" color="var(--brand)" opacity={0.07} width={560} />
        <HeroLogoBg position="bottom-left" color="var(--peach-dark)" opacity={0.05} width={320} />
        <div className="container-soma relative py-16 md:py-24">
          <div className="max-w-[820px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-tint px-3 py-1.5">
              <span className="size-1.5 animate-pulse rounded-full bg-brand motion-reduce:animate-none" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                Funcionalidades
              </span>
            </div>

            <h1 className="mb-6 font-title text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl lg:text-[60px] leading-[1.06]">
              Para você saber exatamente o que a <span className="text-brand">+legal_</span> faz.
            </h1>

            <p className="mb-3 text-lg leading-relaxed text-gray-600 md:text-xl">
              Contrato e assinatura, todo o mercado tem. Câmaras de arbitragem também. Mas só a +legal_ cobre todo o ciclo de vida do contrato, até em caso de impasse.
            </p>
            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
              A +legal_ é o seu <strong className="font-semibold text-gray-900">co-piloto</strong>. Alerta para o que importa, para você sair do reativo e entrar no proativo.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mb-12 max-w-[820px]">
            <p className="eyebrow mb-4">Os 6 blocos</p>
            <h2 className="h-soma mb-4">
              Seis blocos para você focar no negócio.
            </h2>
            <p className="mb-3 text-lg leading-relaxed text-gray-600">
              A +legal_ é formada por seis blocos, criados para você e o seu time focarem no negócio, em vez de procurar arquivo em pasta ou em e-mail.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Você ganha tempo e confiança nas relações com os seus parceiros comerciais.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {BLOCOS.map(b => {
              const c = COLOR[b.color];
              const Icon = b.icon;
              return (
                <div
                  key={b.num}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-stone-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Number watermark gigante no fundo */}
                  <span
                    className="pointer-events-none absolute -right-2 -top-3 select-none font-title text-[110px] font-extrabold leading-none tracking-tighter opacity-[0.07]"
                    style={{ color: c.border }}
                    aria-hidden="true"
                  >
                    {b.num}
                  </span>

                  {/* Icon box com tratamento mais forte */}
                  <div
                    className="relative mb-6 flex size-14 items-center justify-center rounded-xl border-2"
                    style={{
                      borderColor: c.border,
                      background: c.iconBg
                    }}
                  >
                    <Icon
                      className="size-7"
                      style={{ color: c.iconText }}
                      strokeWidth={1.6}
                    />
                  </div>

                  <h3 className="relative mb-3 font-title text-xl font-bold leading-snug text-gray-900">
                    {b.title}
                  </h3>
                  <p
                    className="relative text-sm leading-relaxed text-gray-700"
                    dangerouslySetInnerHTML={{ __html: b.body }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-stone-300 bg-stone-100 px-3 py-1.5">
                <X className="size-4 text-stone-600" strokeWidth={2.5} />
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-stone-700">
                  Filtro
                </span>
              </div>
              <h2 className="h-soma mb-4">O que a +legal_ não faz.</h2>
              <p className="text-lg leading-relaxed text-gray-600">
                Honestidade radical sobre o escopo, antes que você assuma o que não é.
              </p>
            </div>

            <div className="space-y-3">
              {NAO_FAZ.map(n => (
                <div
                  key={n.title}
                  className="flex items-start gap-4 rounded-xl border border-stone-200 bg-stone-50 p-5"
                >
                  <div className="flex size-9 flex-shrink-0 items-center justify-center rounded-lg bg-stone-200">
                    <X className="size-4 text-stone-600" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <p className="mb-1 font-title text-base font-bold text-gray-900">
                      {n.title}
                    </p>
                    <p className="text-[14px] leading-relaxed text-gray-700">
                      {n.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA forte · próximo passo */}
      <section className="bg-brand text-white">
        <div className="container-soma py-16 md:py-20">
          <div className="mx-auto max-w-[860px] text-center">
            <p className="eyebrow-light mb-5">Próximo passo</p>
            <h2 className="mb-6 font-title text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              Você abre o primeiro contrato hoje, ou conversa com a equipe primeiro.
            </h2>
            <p className="mx-auto mb-10 max-w-[640px] text-lg leading-relaxed text-white/80">
              O caminho rápido é entrar para o Early Access e começar com 1 operador grátis. O cauteloso é uma conversa de 30 minutos antes de decidir.
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
                href="mailto:contato@maislegal.tech?subject=Conversa%20sobre%20funcionalidades"
                variant="secondary"
                size="lg"
                className="!bg-transparent !border-white/40 !text-white hover:!bg-white/10 hover:!border-white"
              >
                Conversar com a equipe primeiro
              </Button>
            </div>

            <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-white/60">
              Operador grátis · sem cartão · sem fidelidade
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

