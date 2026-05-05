import {
  ArrowRight,
  Briefcase,
  Building2,
  FileSearch,
  Heart,
  Gift,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/base/Button";
import { CtaDark } from "@/components/base/CtaDark";
import { Accordion } from "@/components/base/Accordion";
import { HeroLogoBg } from "@/components/base/HeroLogoBg";
import { PainelMockup } from "@/components/como-funciona/PainelMockup";

// 5 problemas canônicos do ciclo de vida (sessões maio 2026)
const PROBLEMAS = [
  {
    num: "01",
    fase: "Pré-assinatura",
    titulo: "Drafts e redlines voando por email.",
    cenario: "Múltiplas versões em pastas separadas. Cada lado com a sua. Quando alguém pergunta &ldquo;qual é a oficial?&rdquo;, cada um abre uma diferente.",
    solucao: "Os dois lados editam a <strong class=\"font-semibold text-gray-900\">mesma versão</strong>, no mesmo ambiente. Cada mudança e comentário registrado. Acabou &ldquo;minha versão&rdquo; e &ldquo;versão deles&rdquo;.",
    visual: "negociacao",
    color: "peach"
  },
  {
    num: "02",
    fase: "Assinatura",
    titulo: "A ordem de assinatura desaparece.",
    cenario: "Quem assina, com qual documento, em qual ordem, em qual prazo. Validação de poderes se perde no e-mail. Quem chega depois reconstrói tudo.",
    solucao: "A +legal_ orquestra a assinatura: cada signatário recebe a sua ordem, no momento certo. <strong class=\"font-semibold text-gray-900\">Histórico assinado</strong> fica registrado, com autoria.",
    visual: "assinatura",
    color: "brand"
  },
  {
    num: "03",
    fase: "Vigência ativa",
    titulo: "Obrigações combinadas. Ninguém olhando.",
    cenario: "Renovações no piloto automático. SLAs descumpridos sem multa cobrada. Aniversário do contrato chega e ninguém lembrou de revisar nada.",
    solucao: "Cada cláusula vira um prazo no <strong class=\"font-semibold text-gray-900\">calendário do time</strong>. O aviso chega antes do vencimento, antes da renovação, antes do problema.",
    visual: "calendario",
    color: "peach"
  },
  {
    num: "04",
    fase: "Ajustes",
    titulo: "Combinado por WhatsApp não vira contrato.",
    cenario: [
      "Side-letters, gestos comerciais, mudanças em reunião. A realidade comercial anda em paralelo, sem rastro no contrato.",
      "Seis meses depois, cada lado tem uma versão diferente do que foi combinado."
    ],
    solucao: "O ajuste combinado por WhatsApp ou na reunião vira <strong class=\"font-semibold text-gray-900\">aditivo formal</strong> em minutos, com aprovação dos dois lados. O contrato segue refletindo o que foi acordado de verdade.",
    visual: "fora",
    color: "peach"
  },
  {
    num: "05",
    fase: "Conflito",
    titulo: "Judiciário lento. Câmara tradicional cara.",
    cenario: "Quando uma divergência precisa virar disputa formal, o judiciário leva anos. Câmara tradicional pesa demais para causa cotidiana. Sem o histórico das fases anteriores, a disputa começa do zero.",
    solucao: [
      "A <strong class=\"font-semibold text-gray-900\">câmara SOMA</strong> está acoplada à +legal_. Histórico inteiro vai junto, sem reconstrução.",
      "Mediação primeiro, com crédito do honorário se virar arbitragem. Resolução em meses, no privado."
    ],
    visual: "resolucao",
    color: "soma"
  }
];

const SINAIS_FIT = [
  {
    icon: Briefcase,
    body: "Você gerencia 50 ou mais contratos B2B ativos, com SLAs, prazos e obrigações que viram dor de cabeça operacional.",
    persona: "Para Operações",
    href: "/para-operacoes"
  },
  {
    icon: FileSearch,
    body: "Você passa semanas reconstruindo histórico de contratos antes de cada arbitragem ou consulta jurídica.",
    persona: "Para Advogados",
    href: "/para-advogados"
  },
  {
    icon: Building2,
    body: "Você fecha contratos com clientes corporativos que têm jurídico interno e processo formal, e o contrato precisa morar no mesmo lugar para os dois.",
    persona: "Para PMEs",
    href: "/para-pmes"
  }
];

const EARLY_EXPECTATIVAS = [
  {
    icon: Heart,
    title: "Onboarding com a equipe",
    body: "A equipe da +legal_ acompanha pessoalmente a importação dos primeiros contratos, ajuda na configuração inicial, e fica disponível pelos primeiros meses para ajustes e dúvidas."
  },
  {
    icon: Gift,
    title: "Operador gratuito permanente",
    body: "O preço de lançamento fica garantido para os primeiros workspaces, e o primeiro operador continua gratuito de forma permanente, mesmo depois do lançamento público."
  },
  {
    icon: Sparkles,
    title: "Voz no produto",
    body: "O feedback dos primeiros usuários é ouvido pelos fundadores diretamente, e orienta a evolução do produto. As funcionalidades que vêm depois são moldadas por quem está usando agora."
  }
];

const PROBLEMA_COLOR: Record<string, { accent: string; bg: string }> = {
  brand: { accent: "var(--brand)", bg: "var(--brand-tint)" },
  peach: { accent: "var(--peach-dark)", bg: "var(--peach-bg)" },
  soma: { accent: "var(--soma)", bg: "var(--soma-bg)" }
};

export default function ComoFuncionaPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-stone-200 bg-white">
        <HeroLogoBg position="top-right" color="var(--brand)" opacity={0.07} width={560} />
        <div className="container-soma relative py-16 md:py-24">
          <div className="max-w-[860px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-tint px-3 py-1.5">
              <span className="size-1.5 rounded-full bg-brand" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                Como funciona
              </span>
            </div>

            <h1 className="mb-6 font-title text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl lg:text-6xl">
              Do combinado à resolução.
              <br />
              <span className="text-brand">No mesmo ambiente.</span>
            </h1>

            <p className="mb-3 text-lg leading-relaxed text-gray-600 md:text-xl">
              Quando alguém pergunta &ldquo;em qual versão estamos?&rdquo;, a resposta é a mesma para os dois lados. Os comentários ficam ligados à cláusula que discutem, não em e-mails que ninguém acha depois.
            </p>
            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
              Suas ferramentas atuais (assinatura, drive, calendário) ficam onde estão. A <span className="text-brand">+legal_</span> é a camada que conecta tudo isso ao histórico do contrato, e avisa o time antes do próximo vencimento, aditivo ou renovação.
            </p>
          </div>
        </div>
      </section>

      {/* PAINEL MOCKUP · interativo */}
      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mx-auto max-w-[920px]">
            <p className="eyebrow mb-3">Como aparece no navegador</p>
            <h2 className="h-soma mb-4">
              O portfólio inteiro em uma tela só.
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Tudo num só painel: do portfólio ao histórico, com a câmara SOMA acoplada. Os dois lados veem a mesma versão, ao mesmo tempo.
            </p>
            <PainelMockup />
          </div>
        </div>
      </section>

      {/* OS 5 PROBLEMAS · estrutura canônica */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mb-16 max-w-[820px]">
            <p className="eyebrow mb-4">Os 5 problemas que a +legal_ resolve</p>
            <h2 className="h-soma mb-4">
              Cinco fases. Cinco lugares onde o contrato escapa.
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              A <span className="text-brand">+legal_</span> está em cada um. Nos quatro primeiros, como ambiente colaborativo entre as partes. No quinto, com a câmara SOMA acoplada.
            </p>
          </div>

          <div className="space-y-20 md:space-y-24">
            {PROBLEMAS.map((p, i) => {
              const reverse = i % 2 === 1;
              const c = PROBLEMA_COLOR[p.color];
              const Visual =
                p.visual === "negociacao"
                  ? VisualNegociacao
                  : p.visual === "assinatura"
                    ? VisualAssinatura
                    : p.visual === "calendario"
                      ? VisualCalendario
                      : p.visual === "fora"
                        ? VisualFora
                        : VisualResolucao;

              return (
                <div key={p.num}>
                  <div
                    className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16 ${
                      reverse ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    {/* Texto */}
                    <div className={reverse ? "lg:col-start-2" : ""}>
                      <div className="mb-5 flex items-baseline gap-4">
                        <span
                          className="font-title text-[64px] font-extrabold leading-none tracking-tighter md:text-[88px]"
                          style={{ color: c.accent, opacity: 0.18 }}
                        >
                          {p.num}
                        </span>
                        <div>
                          <p
                            className="font-mono text-[11px] font-bold uppercase tracking-widest"
                            style={{ color: c.accent }}
                          >
                            Problema {p.num}
                          </p>
                          <p
                            className="mt-0.5 font-mono text-[10px] uppercase tracking-widest"
                            style={{ color: c.accent, opacity: 0.65 }}
                          >
                            {p.fase}
                          </p>
                        </div>
                      </div>

                      <h3
                        className="mb-5 font-title text-2xl font-bold leading-snug tracking-tight md:text-3xl"
                        style={{ color: c.accent }}
                      >
                        {p.titulo}
                      </h3>

                      <div className="mb-6 space-y-3 text-base leading-relaxed text-gray-700 md:text-lg">
                        {(Array.isArray(p.cenario) ? p.cenario : [p.cenario]).map(
                          (line, i) => (
                            <p
                              key={i}
                              dangerouslySetInnerHTML={{ __html: line }}
                            />
                          )
                        )}
                      </div>

                      <div
                        className="rounded-xl border-l-[3px] p-5"
                        style={{
                          borderColor: c.accent,
                          background: c.bg
                        }}
                      >
                        <p
                          className="mb-2 font-mono text-[10px] font-bold uppercase tracking-widest"
                          style={{ color: c.accent }}
                        >
                          Como a <span className="normal-case">+legal_</span> resolve
                        </p>
                        <div className="space-y-2.5 text-[15px] leading-relaxed text-gray-800">
                          {(Array.isArray(p.solucao) ? p.solucao : [p.solucao]).map(
                            (line, i) => (
                              <p
                                key={i}
                                dangerouslySetInnerHTML={{ __html: line }}
                              />
                            )
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Visual */}
                    <div
                      className={`flex items-center justify-center rounded-2xl border border-stone-200 bg-white p-6 md:p-8 ${
                        reverse ? "lg:col-start-1" : ""
                      }`}
                    >
                      <Visual />
                    </div>
                  </div>

                  {i < PROBLEMAS.length - 1 && (
                    <div className="mt-20 hidden h-px bg-stone-200 md:mt-24 md:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ANTES DE COMEÇAR · accordion */}
      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mb-10 max-w-[820px]">
            <p className="eyebrow mb-4">Antes de começar</p>
            <h2 className="h-soma mb-4">
              Cinco perguntas que vêm antes do Early Access.
            </h2>
            <p className="mb-3 text-lg leading-relaxed text-gray-600">
              Quem está avaliando entrar quer entender três coisas: se faz sentido começar agora, o que mais a <span className="text-brand">+legal_</span> cobre, e como a relação com a equipe funciona nos primeiros meses.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Aqui estão as respostas. Abre só o que interessa.
            </p>
          </div>

          <div className="mx-auto max-w-[920px]">
            <Accordion
              items={[
                {
                  id: "fit",
                  question: "Para quem faz sentido começar agora?",
                  answer: (
                    <div className="space-y-4">
                      <p className="text-[15px] leading-relaxed text-gray-700">
                        A +legal_ não é para todo tipo de empresa, nem para todo tamanho de operação. Faz sentido começar agora se você reconhece um dos sinais abaixo. Cada sinal aponta para uma página específica.
                      </p>
                      <ul className="flex flex-col gap-3 pt-2">
                        {SINAIS_FIT.map((s, i) => {
                          const Icon = s.icon;
                          return (
                            <li
                              key={i}
                              className="flex gap-3 rounded-xl border border-stone-200 bg-white p-4"
                            >
                              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-tint">
                                <Icon
                                  className="size-4 text-brand"
                                  strokeWidth={1.6}
                                />
                              </div>
                              <div className="flex-1">
                                <p className="mb-2 text-[14px] leading-snug text-gray-700">
                                  {s.body}
                                </p>
                                <Link
                                  href={s.href}
                                  className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-brand hover:gap-2.5"
                                >
                                  {s.persona}{" "}
                                  <ArrowRight className="size-3" />
                                </Link>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )
                },
                {
                  id: "funcionalidades",
                  question: "Quero ver o detalhe das funcionalidades.",
                  answer: (
                    <div className="space-y-3">
                      <p className="text-[15px] leading-relaxed text-gray-700">
                        A página de Funcionalidades abre os seis blocos do produto, com mais detalhe sobre o que cada um faz e o que entrega.
                      </p>
                      <p className="mb-4 text-[15px] leading-relaxed text-gray-700">
                        Inclui ambiente colaborativo, monitoramento e alertas, aditivos formalizados, histórico que sobrevive, tecnologia que extrai obrigações, e a câmara SOMA integrada.
                      </p>
                      <Link
                        href="/funcionalidades"
                        className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-brand-mid"
                      >
                        Ver as funcionalidades{" "}
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  )
                },
                {
                  id: "integracoes",
                  question: "Com que ferramentas a +legal_ se conecta?",
                  answer: (
                    <div>
                      <p className="mb-4 text-[15px] leading-relaxed text-gray-700">
                        A +legal_ encaixa entre as ferramentas que você já usa, sem pedir para trocar nenhuma delas. Conecta com plataformas de assinatura digital (DocuSign, ClickSign, ZapSign), com Slack e Google Calendar para alertas, e com CRMs como HubSpot e Pipedrive para o ritmo da operação.
                      </p>
                      <Link
                        href="/integracoes"
                        className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-brand-mid"
                      >
                        Ver as integrações{" "}
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  )
                },
                {
                  id: "early-access",
                  question: "O que muda quando entro no Early Access?",
                  answer: (
                    <div className="space-y-4">
                      <p className="text-[15px] leading-relaxed text-gray-700">
                        Entrar no Early Access vai além de receber acesso antecipado. É um relacionamento próximo com a equipe, com benefícios que se mantêm depois do lançamento público.
                      </p>
                      <ul className="flex flex-col gap-3 pt-2">
                        {EARLY_EXPECTATIVAS.map(e => {
                          const Icon = e.icon;
                          return (
                            <li
                              key={e.title}
                              className="flex gap-3 rounded-xl border border-stone-200 bg-white p-4"
                            >
                              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-tint">
                                <Icon
                                  className="size-4 text-brand"
                                  strokeWidth={1.6}
                                />
                              </div>
                              <div className="flex-1">
                                <p className="mb-1 font-title text-[15px] font-bold text-gray-900">
                                  {e.title}
                                </p>
                                <p className="text-[13px] leading-snug text-gray-700">
                                  {e.body}
                                </p>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )
                },
                {
                  id: "preco",
                  question: "E o preço, quanto fica?",
                  answer: (
                    <div className="space-y-3">
                      <p className="text-[15px] leading-relaxed text-gray-700">
                        O primeiro operador de cada workspace é gratuito de forma permanente, sem cartão e sem prazo limitado.
                      </p>
                      <p className="text-[15px] leading-relaxed text-gray-700">
                        A partir do segundo operador, o valor é R$ 550 no plano mensal ou R$ 500 no anual. Para escritórios de advocacia, há um modelo diferenciado por relacionamentos ativos.
                      </p>
                      <p className="mb-4 text-[15px] leading-relaxed text-gray-700">
                        A página de Preços tem o detalhe completo, sem cláusula escondida.
                      </p>
                      <Link
                        href="/precos"
                        className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-brand-mid"
                      >
                        Ver preços completos{" "}
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  )
                }
              ]}
            />
          </div>
        </div>
      </section>

      <CtaDark
        eyebrow="Quer ver com um contrato seu?"
        title="Primeiro operador sempre gratuito. Sem cartão. Sem compromisso."
        body={
          <>
            <p>
              O Early Access é mais que acesso antecipado. Quem entra agora ajuda a definir como o produto evolui, com canal direto com os fundadores.
            </p>
            <p>E mantém o acesso depois do lançamento público.</p>
          </>
        }
      />
    </>
  );
}

/* ════════════════════════════════════════════════════════════════
   ILUSTRAÇÕES · 5 problemas canônicos
   Vocabulário: outline, dashed para disperso, mono labels, brand colors
   ──────────────────────────────────────────────────────────────── */

// P1 · Negociação dispersa · 4 docs flutuando, "qual é a oficial?"
function VisualNegociacao() {
  const PEACH = "var(--peach-dark)";
  return (
    <svg viewBox="0 0 480 300" className="h-auto w-full max-w-[440px]" aria-hidden="true">
      {/* Doc v1 */}
      <g transform="translate(85 75) rotate(-6)">
        <rect x="-30" y="-40" width="60" height="80" rx="3" fill="white" stroke={PEACH} strokeWidth="1.5" />
        <line x1="-22" y1="-26" x2="22" y2="-26" stroke={PEACH} strokeOpacity="0.35" strokeWidth="1" />
        <line x1="-22" y1="-18" x2="18" y2="-18" stroke={PEACH} strokeOpacity="0.35" strokeWidth="1" />
        <line x1="-22" y1="-10" x2="22" y2="-10" stroke={PEACH} strokeOpacity="0.35" strokeWidth="1" />
        <line x1="-22" y1="-2" x2="14" y2="-2" stroke={PEACH} strokeOpacity="0.35" strokeWidth="1" />
        <line x1="-22" y1="6" x2="22" y2="6" stroke={PEACH} strokeOpacity="0.35" strokeWidth="1" />
        <text x="0" y="32" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="700" fill={PEACH} textAnchor="middle" letterSpacing="0.5">v1</text>
      </g>

      {/* Doc v2 */}
      <g transform="translate(245 65) rotate(8)">
        <rect x="-30" y="-40" width="60" height="80" rx="3" fill="white" stroke={PEACH} strokeWidth="1.5" />
        <line x1="-22" y1="-26" x2="22" y2="-26" stroke={PEACH} strokeOpacity="0.35" strokeWidth="1" />
        <line x1="-22" y1="-18" x2="20" y2="-18" stroke={PEACH} strokeOpacity="0.35" strokeWidth="1" />
        <line x1="-22" y1="-10" x2="22" y2="-10" stroke={PEACH} strokeOpacity="0.35" strokeWidth="1" />
        <line x1="-22" y1="-2" x2="16" y2="-2" stroke={PEACH} strokeOpacity="0.35" strokeWidth="1" />
        <text x="0" y="32" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="700" fill={PEACH} textAnchor="middle" letterSpacing="0.5">v2</text>
      </g>

      {/* Doc v3 */}
      <g transform="translate(120 215) rotate(-9)">
        <rect x="-30" y="-40" width="60" height="80" rx="3" fill="white" stroke={PEACH} strokeWidth="1.5" />
        <line x1="-22" y1="-26" x2="22" y2="-26" stroke={PEACH} strokeOpacity="0.35" strokeWidth="1" />
        <line x1="-22" y1="-18" x2="14" y2="-18" stroke={PEACH} strokeOpacity="0.35" strokeWidth="1" />
        <line x1="-22" y1="-10" x2="22" y2="-10" stroke={PEACH} strokeOpacity="0.35" strokeWidth="1" />
        <line x1="-22" y1="-2" x2="20" y2="-2" stroke={PEACH} strokeOpacity="0.35" strokeWidth="1" />
        <text x="0" y="32" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="700" fill={PEACH} textAnchor="middle" letterSpacing="0.5">v3</text>
      </g>

      {/* Doc v? */}
      <g transform="translate(360 215) rotate(6)">
        <rect x="-30" y="-40" width="60" height="80" rx="3" fill="white" stroke={PEACH} strokeWidth="2" />
        <line x1="-22" y1="-26" x2="22" y2="-26" stroke={PEACH} strokeOpacity="0.35" strokeWidth="1" />
        <line x1="-22" y1="-18" x2="18" y2="-18" stroke={PEACH} strokeOpacity="0.35" strokeWidth="1" />
        <line x1="-22" y1="-10" x2="22" y2="-10" stroke={PEACH} strokeOpacity="0.35" strokeWidth="1" />
        <text x="0" y="14" fontFamily="Barlow, sans-serif" fontSize="22" fontWeight="800" fill={PEACH} textAnchor="middle">?</text>
      </g>

      {/* Connecting dashed lines */}
      <path d="M 115 90 Q 175 75 215 70" stroke={PEACH} strokeDasharray="3 3" strokeOpacity="0.4" fill="none" />
      <path d="M 100 110 Q 110 165 120 195" stroke={PEACH} strokeDasharray="3 3" strokeOpacity="0.4" fill="none" />
      <path d="M 240 100 Q 290 160 340 200" stroke={PEACH} strokeDasharray="3 3" strokeOpacity="0.4" fill="none" />
      <path d="M 150 220 Q 240 240 330 220" stroke={PEACH} strokeDasharray="3 3" strokeOpacity="0.4" fill="none" />

      {/* Center label */}
      <text x="240" y="160" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="700" fill={PEACH} textAnchor="middle" letterSpacing="2" opacity="0.8">QUAL É A OFICIAL?</text>
    </svg>
  );
}

// P2 · Quem assina o quê e quando · 3 signatários, ordem confusa
function VisualAssinatura() {
  const BRAND = "var(--brand)";
  return (
    <svg viewBox="0 0 480 300" className="h-auto w-full max-w-[440px]" aria-hidden="true">
      {/* Documento central */}
      <g transform="translate(240 150)">
        <rect x="-40" y="-55" width="80" height="110" rx="4" fill="white" stroke={BRAND} strokeWidth="1.8" />
        <line x1="-30" y1="-38" x2="30" y2="-38" stroke={BRAND} strokeOpacity="0.4" strokeWidth="1" />
        <line x1="-30" y1="-28" x2="20" y2="-28" stroke={BRAND} strokeOpacity="0.4" strokeWidth="1" />
        <line x1="-30" y1="-18" x2="30" y2="-18" stroke={BRAND} strokeOpacity="0.4" strokeWidth="1" />
        <line x1="-30" y1="-8" x2="24" y2="-8" stroke={BRAND} strokeOpacity="0.4" strokeWidth="1" />
        <line x1="-30" y1="2" x2="30" y2="2" stroke={BRAND} strokeOpacity="0.4" strokeWidth="1" />
        {/* assinatura placeholder */}
        <line x1="-26" y1="32" x2="6" y2="32" stroke={BRAND} strokeWidth="1.4" />
        <line x1="10" y1="32" x2="28" y2="32" stroke={BRAND} strokeOpacity="0.3" strokeWidth="1.4" />
      </g>

      {/* Signatário 1 */}
      <g transform="translate(80 80)">
        <circle r="22" fill="white" stroke={BRAND} strokeWidth="1.6" />
        <text x="0" y="-30" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill={BRAND} textAnchor="middle" letterSpacing="1">1?</text>
        <circle r="6" fill={BRAND} opacity="0.4" />
      </g>

      {/* Signatário 2 */}
      <g transform="translate(400 100)">
        <circle r="22" fill="white" stroke={BRAND} strokeWidth="1.6" />
        <text x="0" y="-30" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill={BRAND} textAnchor="middle" letterSpacing="1">2?</text>
        <circle r="6" fill={BRAND} opacity="0.4" />
      </g>

      {/* Signatário 3 */}
      <g transform="translate(140 240)">
        <circle r="22" fill="white" stroke={BRAND} strokeWidth="1.6" />
        <text x="0" y="-30" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill={BRAND} textAnchor="middle" letterSpacing="1">3?</text>
        <circle r="6" fill={BRAND} opacity="0.4" />
      </g>

      {/* Setas confusas tracejadas (ordem desconhecida) */}
      <path d="M 100 90 Q 160 110 198 130" stroke={BRAND} strokeDasharray="3 3" strokeOpacity="0.4" strokeWidth="1.4" fill="none" />
      <path d="M 380 110 Q 320 130 282 145" stroke={BRAND} strokeDasharray="3 3" strokeOpacity="0.4" strokeWidth="1.4" fill="none" />
      <path d="M 158 230 Q 195 200 220 180" stroke={BRAND} strokeDasharray="3 3" strokeOpacity="0.4" strokeWidth="1.4" fill="none" />

      {/* Cross arrows confusing order */}
      <path d="M 105 100 Q 240 200 380 110" stroke={BRAND} strokeDasharray="2 4" strokeOpacity="0.25" strokeWidth="1" fill="none" />
      <path d="M 380 100 Q 240 50 110 90" stroke={BRAND} strokeDasharray="2 4" strokeOpacity="0.25" strokeWidth="1" fill="none" />

      {/* Bottom label */}
      <text x="240" y="285" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="700" fill={BRAND} textAnchor="middle" letterSpacing="2" opacity="0.7">QUEM ASSINA QUANDO?</text>
    </svg>
  );
}

// P3 · Calendário esquecido · grid com datas escondidas e 1 acesa
function VisualCalendario() {
  const PEACH = "var(--peach-dark)";
  const GREY = "#a8a29e";

  // 7x4 = 28 cells
  const cells: { highlight?: "missed" | "alert" | "ok" }[] = [
    {}, {}, {}, {}, {}, { highlight: "ok" }, {},
    {}, { highlight: "missed" }, {}, {}, {}, {}, {},
    {}, {}, {}, {}, { highlight: "alert" }, {}, {},
    {}, {}, {}, { highlight: "missed" }, {}, {}, {}
  ];

  return (
    <svg viewBox="0 0 480 300" className="h-auto w-full max-w-[440px]" aria-hidden="true">
      {/* Header dos dias da semana */}
      {["S", "T", "Q", "Q", "S", "S", "D"].map((d, i) => (
        <text key={i} x={70 + i * 50} y="50" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill={GREY} textAnchor="middle" letterSpacing="0.5">{d}</text>
      ))}

      {/* Grid 7x4 */}
      {cells.map((cell, i) => {
        const row = Math.floor(i / 7);
        const col = i % 7;
        const x = 70 + col * 50;
        const y = 80 + row * 45;
        const stroke = cell.highlight === "missed" ? "#dc2626" : cell.highlight === "alert" ? PEACH : cell.highlight === "ok" ? PEACH : GREY;
        const opacity = cell.highlight ? 1 : 0.3;
        const fill = cell.highlight === "missed" ? "rgba(220,38,38,0.08)" : cell.highlight === "alert" ? "rgba(30,41,59,0.12)" : "white";

        return (
          <g key={i}>
            <rect x={x - 18} y={y - 14} width="36" height="32" rx="3" fill={fill} stroke={stroke} strokeWidth={cell.highlight ? 1.6 : 0.8} opacity={opacity} />
            <text x={x} y={y + 5} fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight={cell.highlight ? "700" : "500"} fill={cell.highlight ? stroke : GREY} textAnchor="middle" opacity={opacity}>{i + 1}</text>
            {cell.highlight === "missed" && (
              <text x={x + 13} y={y - 6} fontFamily="Barlow, sans-serif" fontSize="14" fontWeight="800" fill="#dc2626" textAnchor="middle">×</text>
            )}
            {cell.highlight === "alert" && (
              <circle cx={x + 13} cy={y - 6} r="4" fill={PEACH}>
                <animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite" />
              </circle>
            )}
          </g>
        );
      })}

      {/* Bottom label */}
      <text x="240" y="285" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="700" fill={PEACH} textAnchor="middle" letterSpacing="2">PRAZO PASSOU. NINGUÉM AVISOU.</text>
    </svg>
  );
}

// P4 · Combinado por fora · doc + 4 satélites desconectados
function VisualFora() {
  const PEACH = "var(--peach-dark)";
  return (
    <svg viewBox="0 0 480 300" className="h-auto w-full max-w-[440px]" aria-hidden="true">
      {/* Contrato central (sólido) */}
      <g transform="translate(240 150)">
        <rect x="-42" y="-55" width="84" height="110" rx="4" fill="white" stroke={PEACH} strokeWidth="2" />
        <line x1="-32" y1="-38" x2="32" y2="-38" stroke={PEACH} strokeOpacity="0.4" strokeWidth="1" />
        <line x1="-32" y1="-28" x2="22" y2="-28" stroke={PEACH} strokeOpacity="0.4" strokeWidth="1" />
        <line x1="-32" y1="-18" x2="32" y2="-18" stroke={PEACH} strokeOpacity="0.4" strokeWidth="1" />
        <line x1="-32" y1="-8" x2="26" y2="-8" stroke={PEACH} strokeOpacity="0.4" strokeWidth="1" />
        <line x1="-32" y1="2" x2="32" y2="2" stroke={PEACH} strokeOpacity="0.4" strokeWidth="1" />
        <line x1="-32" y1="12" x2="20" y2="12" stroke={PEACH} strokeOpacity="0.4" strokeWidth="1" />
        <text x="0" y="36" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill={PEACH} textAnchor="middle" letterSpacing="1.5">CONTRATO</text>
      </g>

      {/* WhatsApp bubble (top-left) */}
      <g transform="translate(80 70)">
        <path d="M -22 -10 Q -22 -22 -10 -22 L 10 -22 Q 22 -22 22 -10 L 22 4 Q 22 16 10 16 L 0 16 L -8 22 L -8 16 L -10 16 Q -22 16 -22 4 Z" fill="white" stroke={PEACH} strokeWidth="1.4" />
        <line x1="-12" y1="-8" x2="12" y2="-8" stroke={PEACH} strokeOpacity="0.5" strokeWidth="1" />
        <line x1="-12" y1="0" x2="8" y2="0" stroke={PEACH} strokeOpacity="0.5" strokeWidth="1" />
        <text x="0" y="40" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill={PEACH} textAnchor="middle" letterSpacing="1" opacity="0.7">WHATSAPP</text>
      </g>

      {/* Email envelope (bottom-left) */}
      <g transform="translate(80 240)">
        <rect x="-22" y="-13" width="44" height="26" rx="2" fill="white" stroke={PEACH} strokeWidth="1.4" />
        <path d="M -22 -13 L 0 5 L 22 -13" fill="none" stroke={PEACH} strokeWidth="1.4" />
        <text x="0" y="32" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill={PEACH} textAnchor="middle" letterSpacing="1" opacity="0.7">E-MAIL</text>
      </g>

      {/* Post-it (top-right) */}
      <g transform="translate(400 70)">
        <rect x="-22" y="-22" width="44" height="44" rx="2" fill="white" stroke={PEACH} strokeWidth="1.4" />
        <line x1="-14" y1="-12" x2="14" y2="-12" stroke={PEACH} strokeOpacity="0.5" strokeWidth="1" />
        <line x1="-14" y1="-4" x2="10" y2="-4" stroke={PEACH} strokeOpacity="0.5" strokeWidth="1" />
        <line x1="-14" y1="4" x2="14" y2="4" stroke={PEACH} strokeOpacity="0.5" strokeWidth="1" />
        <text x="0" y="38" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill={PEACH} textAnchor="middle" letterSpacing="1" opacity="0.7">REUNIÃO</text>
      </g>

      {/* Phone (bottom-right) */}
      <g transform="translate(400 240)">
        <rect x="-12" y="-18" width="24" height="36" rx="3" fill="white" stroke={PEACH} strokeWidth="1.4" />
        <circle cx="0" cy="13" r="2" fill={PEACH} opacity="0.5" />
        <text x="0" y="32" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill={PEACH} textAnchor="middle" letterSpacing="1" opacity="0.7">VOZ</text>
      </g>

      {/* Linhas tracejadas que NÃO chegam ao contrato */}
      <line x1="110" y1="80" x2="170" y2="120" stroke={PEACH} strokeDasharray="3 4" strokeOpacity="0.4" strokeWidth="1.4" />
      <line x1="110" y1="240" x2="170" y2="190" stroke={PEACH} strokeDasharray="3 4" strokeOpacity="0.4" strokeWidth="1.4" />
      <line x1="370" y1="80" x2="310" y2="120" stroke={PEACH} strokeDasharray="3 4" strokeOpacity="0.4" strokeWidth="1.4" />
      <line x1="370" y1="240" x2="310" y2="190" stroke={PEACH} strokeDasharray="3 4" strokeOpacity="0.4" strokeWidth="1.4" />

      {/* Cross marks indicating gap */}
      <line x1="174" y1="116" x2="180" y2="124" stroke={PEACH} strokeWidth="1.4" opacity="0.7" />
      <line x1="180" y1="116" x2="174" y2="124" stroke={PEACH} strokeWidth="1.4" opacity="0.7" />

      <line x1="174" y1="186" x2="180" y2="194" stroke={PEACH} strokeWidth="1.4" opacity="0.7" />
      <line x1="180" y1="186" x2="174" y2="194" stroke={PEACH} strokeWidth="1.4" opacity="0.7" />

      <line x1="306" y1="116" x2="300" y2="124" stroke={PEACH} strokeWidth="1.4" opacity="0.7" />
      <line x1="300" y1="116" x2="306" y2="124" stroke={PEACH} strokeWidth="1.4" opacity="0.7" />

      <line x1="306" y1="186" x2="300" y2="194" stroke={PEACH} strokeWidth="1.4" opacity="0.7" />
      <line x1="300" y1="186" x2="306" y2="194" stroke={PEACH} strokeWidth="1.4" opacity="0.7" />
    </svg>
  );
}

// P5 · Resolução · 2 caminhos: judicial longo / SOMA curto
function VisualResolucao() {
  const SOMA = "var(--soma)";
  const GREY = "#a8a29e";
  const BRAND = "var(--brand)";

  return (
    <svg viewBox="0 0 480 300" className="h-auto w-full max-w-[440px]" aria-hidden="true">
      {/* Contrato origem */}
      <g transform="translate(60 150)">
        <rect x="-22" y="-32" width="44" height="64" rx="3" fill="white" stroke={BRAND} strokeWidth="1.6" />
        <line x1="-15" y1="-20" x2="15" y2="-20" stroke={BRAND} strokeOpacity="0.4" strokeWidth="1" />
        <line x1="-15" y1="-12" x2="11" y2="-12" stroke={BRAND} strokeOpacity="0.4" strokeWidth="1" />
        <line x1="-15" y1="-4" x2="15" y2="-4" stroke={BRAND} strokeOpacity="0.4" strokeWidth="1" />
        <line x1="-15" y1="4" x2="13" y2="4" stroke={BRAND} strokeOpacity="0.4" strokeWidth="1" />
        <text x="0" y="48" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill={BRAND} textAnchor="middle" letterSpacing="1.5" opacity="0.7">CONTRATO</text>
      </g>

      {/* Ponto de divergência */}
      <g transform="translate(140 150)">
        <line x1="-10" y1="-10" x2="10" y2="10" stroke={SOMA} strokeWidth="2" />
        <line x1="-10" y1="10" x2="10" y2="-10" stroke={SOMA} strokeWidth="2" />
        <text x="0" y="-22" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill={SOMA} textAnchor="middle" letterSpacing="1">DISPUTA</text>
      </g>

      {/* Caminho 1 · Judicial (longo, cinza) */}
      <g>
        <path d="M 156 144 Q 220 110 290 95 Q 380 75 430 70" stroke={GREY} strokeWidth="1.6" strokeDasharray="4 4" fill="none" opacity="0.7" />
        <text x="295" y="55" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill={GREY} textAnchor="middle" letterSpacing="1.5">VIA JUDICIAL</text>
        <text x="295" y="75" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill={GREY} textAnchor="middle" letterSpacing="2">ANOS</text>
        {/* Endpoint */}
        <circle cx="430" cy="70" r="6" fill="white" stroke={GREY} strokeWidth="1.6" />
      </g>

      {/* Caminho 2 · SOMA (curto, terra) */}
      <g>
        <path d="M 156 156 Q 200 175 250 195" stroke={SOMA} strokeWidth="2" fill="none" />
        {/* Endpoint SOMA */}
        <circle cx="270" cy="200" r="22" fill="white" stroke={SOMA} strokeWidth="2" />
        <text x="270" y="204" fontFamily="Barlow, sans-serif" fontSize="13" fontWeight="800" fill={SOMA} textAnchor="middle" letterSpacing="0.5">SOMA</text>
        <text x="270" y="240" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill={SOMA} textAnchor="middle" letterSpacing="1.5">EM MESES</text>
        {/* Resolved checkmark */}
        <g transform="translate(360 200)">
          <circle r="20" fill="white" stroke={SOMA} strokeWidth="2" />
          <path d="M -8 0 L -2 6 L 8 -6" fill="none" stroke={SOMA} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <line x1="293" y1="200" x2="338" y2="200" stroke={SOMA} strokeWidth="1.5" />
      </g>
    </svg>
  );
}
