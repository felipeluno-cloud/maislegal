import {
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Coins,
  Lock,
  Monitor,
  Users,
  Clock,
  Scale
} from "lucide-react";
import { Button } from "@/components/base/Button";
import { HeroLogoBg } from "@/components/base/HeroLogoBg";

const TERRA = "var(--soma)";

// 3 mudanças quando a câmara está acoplada ao contrato
const MUDANCAS = [
  {
    icon: ShieldCheck,
    title: "Histórico íntegro chega na câmara",
    body: "Quando o procedimento abre, o histórico inteiro do contrato já está disponível. Versões, comentários, aditivos, obrigações cumpridas e descumpridas, tudo registrado <strong class=\"font-semibold text-gray-900\">dentro do mesmo ambiente</strong>.",
    extra: "Você não passa três semanas reconstruindo. Passa direto para a estratégia.",
    visual: "handoff"
  },
  {
    icon: Coins,
    title: "Mediação primeiro, com crédito financeiro",
    body: "A mediação vem antes da arbitragem, com <strong class=\"font-semibold text-gray-900\">incentivo financeiro</strong>. Se ela não resolve, os honorários viram desconto direto na arbitragem.",
    extra: "Você começa pela conversa estruturada, e só escala quando precisa.",
    visual: "credito"
  },
  {
    icon: Lock,
    title: "Sigilo por padrão",
    body: "Nada da resolução é público, nem o fato de ter ocorrido. Concorrente, prospect, jornalista. Quem pesquisar o nome da empresa não encontra.",
    extra: "Você resolve a disputa em ambiente fechado, sem virar consulta pública na próxima diligência.",
    visual: "sigilo"
  }
];

// 4 passos do caminho da resolução
const FLUXO = [
  {
    num: "01",
    label: "Contrato em curso",
    body: "Acompanhamento pela +legal_, com histórico, alertas e obrigações monitoradas."
  },
  {
    num: "02",
    label: "Divergência",
    body: "Surge um desacordo entre as partes sobre cumprimento ou interpretação de uma cláusula."
  },
  {
    num: "03",
    label: "Câmara SOMA acoplada",
    body: "O procedimento abre com um clique e o histórico do contrato já está disponível para a câmara.",
    destaque: true
  },
  {
    num: "04",
    label: "Resolução em meses",
    body: "Mediação primeiro, com incentivo financeiro. Arbitragem entra só se a mediação não resolver."
  }
];

// 4 características da SOMA
const CARACTERISTICAS = [
  {
    icon: Monitor,
    title: "100% digital",
    body: "Sem deslocamento, sem papel, sem necessidade de contratar advogados locais para representação."
  },
  {
    icon: Users,
    title: "Especialistas por área",
    body: "Árbitros e mediadores selecionados conforme a matéria do conflito."
  },
  {
    icon: Clock,
    title: "Procedimento simplificado",
    body: "Para causas menores, com até 6 meses de duração e custos publicados na tabela pública da câmara."
  },
  {
    icon: Scale,
    title: "Procedimento padrão",
    body: "Para disputas mais complexas, com até 1 ano de duração e mais fases de produção de prova."
  }
];

export default function ResolucaoPage() {
  return (
    <>
      {/* HERO · fala diretamente com o decisor em conflito */}
      <section className="relative overflow-hidden border-b border-stone-200 bg-white">
        <HeroLogoBg position="top-right" color="var(--soma)" opacity={0.07} width={560} />
        <div className="container-soma relative py-16 md:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <div
                className="mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1.5"
                style={{ background: "var(--soma-bg)", borderColor: "rgba(184,97,78,0.4)" }}
              >
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-soma">
                  Câmara SOMA · resolução de disputas
                </span>
              </div>

              <h1 className="mb-6 font-title text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl lg:text-[52px] leading-[1.06]">
                Quando o contrato vira disputa, você quer resolver sem queimar o cliente. Sem virar processo público.
              </h1>

              <p className="mb-3 text-lg leading-relaxed text-gray-600 md:text-xl">
                A SOMA é uma câmara de mediação e arbitragem <strong className="font-semibold text-gray-900">100% digital</strong>, acoplada à +legal_. Quando o caso chega, o histórico do contrato já está disponível para a câmara, sem exportar, sem reconstruir.
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 md:text-xl">
                A resolução é sigilosa, acontece em meses, e dispensa a via judicial.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  href="https://somalegal.tech"
                  variant="primary"
                  size="lg"
                  external
                  className="!bg-soma !border-soma hover:!bg-soma/90"
                >
                  Conhecer a câmara <ExternalLink className="size-4" />
                </Button>
                <Button
                  href="/early-access"
                  variant="secondary"
                  size="lg"
                  className="!border-stone-300"
                >
                  Entrar para o Early Access
                </Button>
              </div>

              <p className="mt-5 font-mono text-[11px] uppercase tracking-widest text-gray-500">
                Premium <span className="normal-case">+legal_</span> · 20% de desconto nas taxas SOMA · operador sempre grátis
              </p>
            </div>

            <div className="hidden lg:block">
              <MockupCamaraAcoplada />
            </div>
          </div>
        </div>
      </section>

      {/* CONTEXTO BRASIL · 83 milhões */}
      <section className="border-b border-stone-200 bg-stone-50">
        <div className="container-soma section-soma">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
            <div>
              <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-widest text-soma">
                Contexto Brasil
              </p>
              <p
                className="font-title font-extrabold leading-none tracking-tighter text-brand"
                style={{ fontSize: "clamp(72px, 9vw, 128px)" }}
              >
                83 mi
              </p>
              <p className="mt-3 font-title text-lg font-bold leading-snug text-gray-900 md:text-xl">
                de processos em curso no Brasil hoje.
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-stone-500">
                Fonte · CNJ · Justiça em Números 2024
              </p>
            </div>

            <div className="rounded-2xl border-2 border-soma bg-soma-bg p-8 md:p-10">
              <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-widest text-soma">
                A leitura
              </p>

              <p className="mb-3 font-title text-2xl font-bold leading-snug tracking-tight text-gray-900 md:text-3xl">
                A judicialização não é mais solução. É fila.
              </p>
              <p className="mb-5 font-title text-2xl font-bold leading-snug tracking-tight text-soma md:text-3xl">
                Resolução privada deixa de ser luxo, vira necessidade.
              </p>

              <p className="text-base leading-relaxed text-gray-700">
                Empresas com contratos B2B não podem esperar anos por decisão judicial. Nem queimar o relacionamento comercial em processos públicos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE MUDA · 3 mudanças com mini-visuais SVG */}
      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mb-12 max-w-[820px]">
            <p className="eyebrow mb-3 text-soma">O que muda quando a câmara está acoplada</p>
            <h2 className="h-soma mb-4">
              Três coisas mudam quando a disputa abre.
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Histórico íntegro chega na câmara. Mediação primeiro, com crédito financeiro. Sigilo por padrão.
            </p>
          </div>

          <div className="space-y-12">
            {MUDANCAS.map((m, i) => {
              const Icon = m.icon;
              const reverse = i % 2 === 1;
              return (
                <div
                  key={m.title}
                  className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2"
                >
                  <div className={reverse ? "lg:order-2" : ""}>
                    <div
                      className="mb-5 flex size-11 items-center justify-center rounded-xl"
                      style={{ background: "var(--soma-bg)" }}
                    >
                      <Icon className="size-5 text-soma" strokeWidth={1.6} />
                    </div>
                    <h3 className="mb-3 font-title text-2xl font-bold leading-snug text-gray-900 md:text-3xl">
                      {m.title}
                    </h3>
                    <p
                      className="mb-3 text-[15px] leading-relaxed text-gray-700 md:text-base"
                      dangerouslySetInnerHTML={{ __html: m.body }}
                    />
                    <p className="text-[15px] leading-relaxed text-gray-700 md:text-base">
                      {m.extra}
                    </p>
                  </div>

                  <div className={reverse ? "lg:order-1" : ""}>
                    <div
                      className="rounded-2xl border p-5 shadow-sm"
                      style={{
                        background: "white",
                        borderColor: "rgba(184,97,78,0.25)"
                      }}
                    >
                      {m.visual === "handoff" && <VisualHandoff />}
                      {m.visual === "credito" && <VisualCredito />}
                      {m.visual === "sigilo" && <VisualSigilo />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA · 4 passos */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mb-12 max-w-[820px]">
            <p className="eyebrow mb-3 text-soma">O caminho da resolução</p>
            <h2 className="h-soma mb-4">
              Da divergência à resolução, sem sair do ambiente.
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Você abre o procedimento na câmara com um clique, e o histórico inteiro do contrato chega junto. Em meses, com sigilo, sem audiência presencial.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {FLUXO.map((f) => (
              <div
                key={f.num}
                className={`rounded-2xl border-2 bg-white p-6 ${
                  f.destaque ? "shadow-lg" : ""
                }`}
                style={{
                  borderColor: f.destaque ? "var(--soma)" : "rgba(184,97,78,0.2)",
                  background: f.destaque ? "var(--soma-bg)" : "white"
                }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div
                    className="flex size-10 items-center justify-center rounded-xl font-mono text-sm font-bold text-white"
                    style={{ background: f.destaque ? "var(--soma)" : "var(--peach-dark)" }}
                  >
                    {f.num}
                  </div>
                  {f.destaque && (
                    <span className="rounded-full bg-white px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-soma">
                      Acoplada
                    </span>
                  )}
                </div>
                <h3
                  className="mb-3 font-title text-base font-bold leading-tight"
                  style={{ color: f.destaque ? "var(--soma)" : "var(--peach-dark)" }}
                >
                  {f.label}
                </h3>
                <p className="text-[13px] leading-relaxed text-gray-700">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE A CÂMARA · 4 características */}
      <section className="relative overflow-hidden bg-white">
        <div className="container-soma section-soma">
          <div className="mb-12 max-w-[820px]">
            <p className="eyebrow mb-3 text-soma">Sobre a câmara</p>
            <h2 className="h-soma mb-4">
              Conheça a SOMA, nossa câmara de mediação e arbitragem.
            </h2>
            <p className="mb-3 text-lg leading-relaxed text-gray-700">
              Uma câmara 100% digital, com procedimentos padronizados e especialistas selecionados por área de conflito.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              O procedimento simplificado roda em até 6 meses. O padrão em até 1 ano, conforme a complexidade do caso.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {CARACTERISTICAS.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="rounded-2xl border bg-white p-6"
                  style={{ borderColor: "rgba(184,97,78,0.25)" }}
                >
                  <div
                    className="mb-4 flex size-11 items-center justify-center rounded-xl"
                    style={{ background: "var(--soma-bg)" }}
                  >
                    <Icon className="size-5 text-soma" strokeWidth={1.6} />
                  </div>
                  <h3 className="mb-2 font-title text-base font-bold text-gray-900">
                    {c.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-gray-700">
                    {c.body}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <Button
              href="https://somalegal.tech"
              variant="primary"
              size="lg"
              external
              className="!bg-soma !border-soma hover:!bg-soma/90"
            >
              Ver o site da SOMA <ExternalLink className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* NOTA DE INDEPENDÊNCIA */}
      <section className="bg-stone-50">
        <div className="container-soma py-12">
          <div className="mx-auto max-w-[820px] rounded-2xl border-2 border-stone-200 bg-white p-8 md:p-10">
            <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-widest text-stone-500">
              Nota de independência
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              +legal_ e SOMA são entidades separadas. A integração existe porque faz sentido para o cliente, não porque há favorecimento entre plataforma e câmara.
            </p>
          </div>
        </div>
      </section>

      {/* CTA forte · próximo passo */}
      <section className="bg-brand text-white">
        <div className="container-soma py-16 md:py-20">
          <div className="mx-auto max-w-[860px] text-center">
            <p className="eyebrow-light mb-5">Próximo passo</p>
            <h2 className="mb-6 font-title text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              Você abre a câmara quando precisar. Ou conhece o site da SOMA primeiro.
            </h2>
            <p className="mx-auto mb-10 max-w-[640px] text-lg leading-relaxed text-white/80">
              O caminho rápido é entrar para o Early Access da +legal_ e ter a câmara acoplada quando precisar. O cauteloso é conhecer a SOMA primeiro e voltar quando fizer sentido.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Button
                href="https://somalegal.tech"
                variant="primary"
                size="lg"
                external
                className="!bg-white !text-brand hover:!bg-stone-100"
              >
                Conhecer a câmara <ExternalLink className="size-4" />
              </Button>
              <Button
                href="/early-access"
                variant="secondary"
                size="lg"
                className="!bg-transparent !border-white/40 !text-white hover:!bg-white/10 hover:!border-white"
              >
                Entrar para o Early Access
              </Button>
            </div>

            <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-white/60">
              Premium <span className="normal-case">+legal_</span> · 20% de desconto nas taxas SOMA
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

/* ════════════════════════════════════════════════════════════════
   MOCKUPS · pelo ângulo da resolução
   ──────────────────────────────────────────────────────────────── */

// Hero · ambiente +legal_ com câmara SOMA acoplada
function MockupCamaraAcoplada() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-2xl"
        style={{ background: "var(--soma-bg)" }}
      />
      <svg
        viewBox="0 0 600 460"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="h-auto w-full rounded-2xl border border-stone-200 bg-white shadow-xl"
      >
        {/* Toolbar */}
        <rect width="600" height="32" fill="var(--soma)" />
        <circle cx="14" cy="16" r="3" fill="white" opacity="0.4" />
        <circle cx="26" cy="16" r="3" fill="white" opacity="0.4" />
        <circle cx="38" cy="16" r="3" fill="white" opacity="0.4" />
        <text x="56" y="20" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="white" opacity="0.9">
          +legal_ · Beta Serviços × Acme Corp · Disputa
        </text>

        {/* Painel +legal_ no topo */}
        <g transform="translate(20 50)">
          <rect width="560" height="120" rx="10" fill="white" stroke="rgba(184,97,78,0.25)" strokeWidth="1.4" />
          <rect width="560" height="22" rx="10" fill="var(--peach-bg)" />
          <rect y="14" width="560" height="8" fill="var(--peach-bg)" />
          <text x="14" y="15" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="var(--peach-dark)" letterSpacing="1">
            AMBIENTE +legal_ · CONTRATO MASTER OUTSOURCING TI
          </text>

          <text x="14" y="48" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="#1A1A1A">
            Disputa sobre cláusula 4.2 (SLA)
          </text>
          <text x="14" y="64" fontFamily="Inter, sans-serif" fontSize="10" fill="#666">
            Beta entrega 99,2% · Acme exige 99,5% · valor da causa R$ 18 mil
          </text>

          {/* Histórico resumido */}
          <g transform="translate(14 78)">
            <text x="0" y="0" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fontWeight="700" fill="#999" letterSpacing="0.6">
              HISTÓRICO QUE VAI PARA CÂMARA
            </text>
            <text x="0" y="14" fontFamily="Inter, sans-serif" fontSize="9" fill="#444">
              32 versões · 84 comentários · 11 aditivos · 8 obrigações registradas
            </text>
            <text x="0" y="28" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="#999" letterSpacing="0.4">
              ASSINADO 18 JAN 2025 · ÚLTIMA REVISÃO 12 MAR
            </text>
          </g>

          {/* Botão fictício */}
          <g transform="translate(440 84)">
            <rect width="108" height="28" rx="4" fill="var(--soma)" />
            <text x="54" y="17" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" fill="white" textAnchor="middle">
              Abrir na SOMA
            </text>
          </g>
        </g>

        {/* Seta de transição */}
        <g transform="translate(300 184)">
          <line x1="0" y1="0" x2="0" y2="22" stroke="var(--soma)" strokeWidth="2" />
          <polyline points="-6,18 0,28 6,18" fill="none" stroke="var(--soma)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <text x="14" y="18" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="var(--soma)" letterSpacing="0.6">
            HISTÓRICO ÍNTEGRO
          </text>
        </g>

        {/* Painel SOMA embaixo */}
        <g transform="translate(20 220)">
          <rect width="560" height="220" rx="10" fill="white" stroke="var(--soma)" strokeWidth="1.6" />
          <rect width="560" height="22" rx="10" fill="var(--soma)" />
          <rect y="14" width="560" height="8" fill="var(--soma)" />
          <text x="14" y="15" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="white" letterSpacing="1">
            SOMA · MEDIAÇÃO PRIVADA · PROCEDIMENTO SIMPLIFICADO
          </text>

          {/* Status */}
          <text x="14" y="44" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="#1A1A1A">
            Procedimento aberto · 3 mediadores propostos
          </text>
          <text x="14" y="58" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fontWeight="600" fill="var(--soma)" letterSpacing="0.5">
            ABRIU 14 ABR · PRAZO 14 OUT · SIGILO POR PADRÃO
          </text>

          {/* 3 mediadores */}
          <g transform="translate(14 70)">
            {[
              { name: "Carla M.", spec: "TI · 12 anos OAB" },
              { name: "Renato V.", spec: "Serviços · 8 anos" },
              { name: "Aline P.", spec: "TI · 15 anos OAB" }
            ].map((m, i) => (
              <g key={i} transform={`translate(${i * 180} 0)`}>
                <rect width="170" height="44" rx="6" fill="var(--soma-bg)" stroke="rgba(184,97,78,0.3)" />
                <circle cx="22" cy="22" r="11" fill="var(--soma)" opacity="0.18" />
                <text x="22" y="26" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="700" fill="var(--soma)" textAnchor="middle">
                  {m.name.split(" ")[0][0]}{m.name.split(" ")[1][0]}
                </text>
                <text x="40" y="20" fontFamily="Inter, sans-serif" fontSize="10.5" fontWeight="700" fill="#1A1A1A">{m.name}</text>
                <text x="40" y="32" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="#666" letterSpacing="0.3">{m.spec.toUpperCase()}</text>
              </g>
            ))}
          </g>

          {/* Custos previsíveis */}
          <g transform="translate(14 130)">
            <text x="0" y="0" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fontWeight="700" fill="#999" letterSpacing="0.6">
              CUSTOS PUBLICADOS · TABELA SOMA
            </text>
            <line x1="0" y1="6" x2="532" y2="6" stroke="#F0F0EC" strokeWidth="1" />

            {[
              { label: "Taxa de abertura", value: "R$ 500" },
              { label: "Administração", value: "R$ 2 mil + 3,5%" },
              { label: "Honorários (1 árbitro)", value: "R$ 1,5 mil + 2%" },
              { label: "Premium +legal_", value: "−20% taxas" }
            ].map((c, i) => (
              <g key={i} transform={`translate(${i * 134} 14)`}>
                <text x="0" y="10" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="600" fill="#666">{c.label}</text>
                <text x="0" y="26" fontFamily="Barlow, sans-serif" fontSize="13" fontWeight="800" fill="var(--soma)">{c.value}</text>
              </g>
            ))}
          </g>

          {/* Footer */}
          <text x="280" y="200" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="var(--soma)" textAnchor="middle" letterSpacing="1.2">
            RESOLUÇÃO PRIVADA · SEM FILA JUDICIAL · EM ATÉ 6 MESES
          </text>
        </g>
      </svg>
    </div>
  );
}

// Mudança 1 · Handoff +legal_ → SOMA
function VisualHandoff() {
  return (
    <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full" aria-hidden="true">
      {/* Painel +legal_ esquerda */}
      <g transform="translate(20 30)">
        <rect width="180" height="180" rx="8" fill="white" stroke="var(--peach-dark)" strokeWidth="1.4" />
        <rect width="180" height="22" rx="8" fill="var(--peach-bg)" />
        <rect y="14" width="180" height="8" fill="var(--peach-bg)" />
        <text x="90" y="15" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="var(--peach-dark)" textAnchor="middle" letterSpacing="0.8">
          +legal_ · CONTRATO
        </text>

        <g transform="translate(14 38)">
          <text x="0" y="0" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="700" fill="#999" letterSpacing="0.6">
            HISTÓRICO REGISTRADO
          </text>
          {[
            { y: 18, label: "32 versões", date: "JAN 2025 → MAR 2026" },
            { y: 38, label: "84 comentários", date: "TODOS COM AUTORIA" },
            { y: 58, label: "11 aditivos formais", date: "ASSINADOS DIGITALMENTE" },
            { y: 78, label: "8 obrigações", date: "5 CUMPRIDAS · 3 EM CURSO" },
            { y: 98, label: "1 disputa em curso", date: "CLÁUSULA 4.2 SLA" }
          ].map((item, i) => (
            <g key={i} transform={`translate(0 ${item.y})`}>
              <circle cx="3" cy="6" r="2" fill="var(--peach-dark)" />
              <text x="12" y="9" fontFamily="Inter, sans-serif" fontSize="9.5" fontWeight="600" fill="#1A1A1A">
                {item.label}
              </text>
              <text x="12" y="18" fontFamily="JetBrains Mono, monospace" fontSize="6.5" fill="#999" letterSpacing="0.3">
                {item.date}
              </text>
            </g>
          ))}
        </g>
      </g>

      {/* Seta */}
      <g transform="translate(200 110)">
        <path d="M 0 10 L 60 10" stroke="var(--soma)" strokeWidth="2" strokeLinecap="round" />
        <polyline points="54,4 64,10 54,16" fill="none" stroke="var(--soma)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="32" y="0" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fontWeight="700" fill="var(--soma)" textAnchor="middle" letterSpacing="0.5">
          1 CLIQUE
        </text>
        <text x="32" y="28" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="500" fill="#999" textAnchor="middle" letterSpacing="0.3">
          sem export · sem PDF
        </text>
      </g>

      {/* Painel SOMA direita */}
      <g transform="translate(280 30)">
        <rect width="180" height="180" rx="8" fill="white" stroke="var(--soma)" strokeWidth="1.6" />
        <rect width="180" height="22" rx="8" fill="var(--soma)" />
        <rect y="14" width="180" height="8" fill="var(--soma)" />
        <text x="90" y="15" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="white" textAnchor="middle" letterSpacing="0.8">
          SOMA · CÂMARA
        </text>

        <g transform="translate(14 38)">
          <text x="0" y="0" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="700" fill="var(--soma)" letterSpacing="0.6">
            DOSSIÊ COMPLETO RECEBIDO
          </text>

          {/* Check mark grande indicando "tudo aqui" */}
          <g transform="translate(70 50)">
            <circle r="32" fill="var(--soma-bg)" stroke="var(--soma)" strokeWidth="1.4" />
            <path d="M -10 0 L -2 8 L 12 -6" stroke="var(--soma)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          <text x="76" y="100" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fontWeight="700" fill="var(--soma)" textAnchor="middle" letterSpacing="0.6">
            HISTÓRICO ÍNTEGRO
          </text>
          <text x="76" y="116" fontFamily="Inter, sans-serif" fontSize="8.5" fontWeight="500" fill="#666" textAnchor="middle">
            sem reconstrução manual
          </text>
        </g>
      </g>

      {/* Footer */}
      <text x="240" y="262" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill="#666" textAnchor="middle" letterSpacing="1.5">
        TRÊS SEMANAS DE RECONSTRUÇÃO ELIMINADAS POR CASO
      </text>
    </svg>
  );
}

// Mudança 2 · Crédito de mediação
function VisualCredito() {
  return (
    <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full" aria-hidden="true">
      {/* Caminho 1 · resolveu na mediação */}
      <g transform="translate(20 32)">
        <rect width="200" height="100" rx="8" fill="var(--soma-bg)" stroke="var(--soma)" strokeWidth="1.4" />
        <text x="14" y="18" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fontWeight="700" fill="var(--soma)" letterSpacing="0.6">
          CAMINHO A · MEDIAÇÃO RESOLVE
        </text>

        <g transform="translate(14 30)">
          <circle cx="10" cy="10" r="9" fill="var(--soma)" />
          <path d="M 6 10 L 9 13 L 14 7" stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <text x="26" y="13" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="#1A1A1A">
            Acordo entre as partes
          </text>
        </g>

        <g transform="translate(14 60)">
          <text x="0" y="0" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="600" fill="#999" letterSpacing="0.5">
            CUSTO TOTAL
          </text>
          <text x="0" y="20" fontFamily="Barlow, sans-serif" fontSize="20" fontWeight="800" fill="var(--soma)">
            R$ 1,5 mil
          </text>
          <text x="78" y="20" fontFamily="Inter, sans-serif" fontSize="9" fill="#666">
            só mediação
          </text>
        </g>
      </g>

      {/* Caminho 2 · escala para arbitragem com desconto */}
      <g transform="translate(260 32)">
        <rect width="200" height="100" rx="8" fill="white" stroke="var(--soma)" strokeWidth="1.4" />
        <text x="14" y="18" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fontWeight="700" fill="var(--soma)" letterSpacing="0.6">
          CAMINHO B · ESCALA · ARBITRAGEM
        </text>

        <g transform="translate(14 30)">
          <circle cx="10" cy="10" r="9" fill="white" stroke="var(--soma)" strokeWidth="1.4" />
          <text x="10" y="13" fontFamily="Barlow, sans-serif" fontSize="9" fontWeight="800" fill="var(--soma)" textAnchor="middle">→</text>
          <text x="26" y="13" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="#1A1A1A">
            Honorários viram crédito
          </text>
        </g>

        <g transform="translate(14 60)">
          <text x="0" y="0" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="600" fill="#999" letterSpacing="0.5">
            CUSTO ARBITRAGEM
          </text>
          <text x="0" y="20" fontFamily="Barlow, sans-serif" fontSize="14" fontWeight="700" fill="#999" textDecoration="line-through">
            R$ 4,5 mil
          </text>
          <text x="56" y="20" fontFamily="Barlow, sans-serif" fontSize="20" fontWeight="800" fill="var(--soma)">
            R$ 3 mil
          </text>
          <text x="116" y="20" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="700" fill="var(--soma)" letterSpacing="0.5">
            COM CRÉDITO
          </text>
        </g>
      </g>

      {/* Linha conectando · "se A não resolve, B com desconto" */}
      <g transform="translate(220 80)">
        <path d="M 0 4 L 40 4" stroke="#999" strokeWidth="1.2" strokeDasharray="3 3" />
        <polyline points="34,0 42,4 34,8" fill="none" stroke="#999" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="20" y="-4" fontFamily="JetBrains Mono, monospace" fontSize="6.5" fontWeight="600" fill="#999" textAnchor="middle" letterSpacing="0.4">
          se não resolve
        </text>
      </g>

      {/* Tese embaixo */}
      <g transform="translate(20 168)">
        <rect width="440" height="64" rx="8" fill="var(--soma-bg)" stroke="rgba(184,97,78,0.3)" strokeWidth="1" />
        <text x="14" y="20" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="var(--soma)" letterSpacing="0.6">
          O QUE ISSO INCENTIVA
        </text>
        <text x="14" y="36" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#1A1A1A">
          Você começa pela conversa estruturada,
        </text>
        <text x="14" y="50" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#1A1A1A">
          e só escala se a mediação não resolver.
        </text>
      </g>

      {/* Footer */}
      <text x="240" y="262" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill="#666" textAnchor="middle" letterSpacing="1.5">
        MEDIAÇÃO PRIMEIRO. ARBITRAGEM SE PRECISAR
      </text>
    </svg>
  );
}

// Mudança 3 · Sigilo por padrão
function VisualSigilo() {
  return (
    <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full" aria-hidden="true">
      {/* Sem +legal_/SOMA · processo público */}
      <g transform="translate(20 22)">
        <text x="0" y="0" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="#999" letterSpacing="1.2">
          VIA JUDICIAL
        </text>

        <g transform="translate(0 12)">
          <rect width="200" height="32" rx="16" fill="white" stroke="#999" strokeWidth="1.2" />
          <g transform="translate(14 16)">
            <circle r="6" fill="none" stroke="#999" strokeWidth="1.4" />
            <line x1="4" y1="4" x2="8" y2="8" stroke="#999" strokeWidth="1.4" strokeLinecap="round" />
          </g>
          <text x="30" y="20" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#666">
            Beta Serviços
          </text>
        </g>

        {[
          { y: 56, t: "Beta x Acme · cobrança", year: "2024" },
          { y: 76, t: "Beta x Delta · SLA", year: "2023" }
        ].map((r) => (
          <g key={r.y} transform={`translate(0 ${r.y})`}>
            <rect width="200" height="14" rx="3" fill="#FFF1F0" stroke="#dc2626" strokeWidth="0.6" strokeOpacity="0.4" />
            <circle cx="10" cy="7" r="2" fill="#dc2626" />
            <text x="20" y="10" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fontWeight="600" fill="#1A1A1A">
              {r.t}
            </text>
            <text x="186" y="10" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="700" fill="#dc2626" textAnchor="end" letterSpacing="0.3">
              PÚBLICO
            </text>
          </g>
        ))}
        <text x="100" y="110" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="700" fill="#dc2626" textAnchor="middle" letterSpacing="0.5">
          ENCONTRÁVEL EM 0,4 SEGUNDOS
        </text>
      </g>

      {/* Com SOMA · sigiloso */}
      <g transform="translate(260 22)">
        <text x="0" y="0" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="var(--soma)" letterSpacing="1.2">
          VIA SOMA
        </text>

        <g transform="translate(0 12)">
          <rect width="200" height="32" rx="16" fill="white" stroke="var(--soma)" strokeWidth="1.4" />
          <g transform="translate(14 16)">
            <circle r="6" fill="none" stroke="var(--soma)" strokeWidth="1.4" />
            <line x1="4" y1="4" x2="8" y2="8" stroke="var(--soma)" strokeWidth="1.4" strokeLinecap="round" />
          </g>
          <text x="30" y="20" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#666">
            Beta Serviços
          </text>
        </g>

        {/* Cadeado grande no centro · sem resultados */}
        <g transform="translate(100 80)">
          <circle r="32" fill="var(--soma-bg)" stroke="var(--soma)" strokeWidth="1.4" />
          <g transform="translate(0 -2)">
            <rect x="-10" y="-2" width="20" height="14" rx="2" fill="var(--soma)" />
            <path d="M -7 -2 L -7 -8 a 7 7 0 0 1 14 0 L 7 -2" stroke="var(--soma)" strokeWidth="2" fill="none" />
          </g>
        </g>

        <text x="100" y="138" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fontWeight="700" fill="var(--soma)" textAnchor="middle" letterSpacing="0.6">
          NENHUM RESULTADO ENCONTRADO
        </text>
        <text x="100" y="150" fontFamily="Inter, sans-serif" fontSize="8" fill="#666" textAnchor="middle">
          nem o fato de ter ocorrido
        </text>
      </g>

      {/* Tese embaixo */}
      <g transform="translate(20 196)">
        <rect width="440" height="44" rx="8" fill="var(--soma-bg)" stroke="rgba(184,97,78,0.3)" strokeWidth="1" />
        <text x="14" y="18" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="var(--soma)" letterSpacing="0.6">
          O QUE ISSO PRESERVA
        </text>
        <text x="14" y="34" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#1A1A1A">
          Reputação intacta. Relacionamento intacto. Sem virar processo público.
        </text>
      </g>

      {/* Footer */}
      <text x="240" y="262" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill="#666" textAnchor="middle" letterSpacing="1.5">
        SIGILO POR PADRÃO · NEM O FATO DE TER OCORRIDO É PÚBLICO
      </text>
    </svg>
  );
}
