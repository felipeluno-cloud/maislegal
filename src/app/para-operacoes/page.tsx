import {
  ArrowRight,
  Briefcase,
  Bell,
  History,
  Layers,
  Calendar,
  ShieldCheck,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/base/Button";
import { CtaDark } from "@/components/base/CtaDark";
import { HeroLogoBg } from "@/components/base/HeroLogoBg";

// 3 mudanças concretas no dia da Diretora de Operações
const MUDANCAS = [
  {
    icon: Layers,
    title: "O portfólio inteiro em uma tela só",
    body: [
      "Você abre a +legal_ pela manhã e vê os 80 contratos ativos com status visual, vencimentos próximos, obrigações pendentes e SLAs comprometidos.",
      "Sem precisar puxar três planilhas e cruzar com o e-mail."
    ],
    closer: "Portfólio em uma tela só.",
    visual: "portfolio"
  },
  {
    icon: Bell,
    title: "Alertas que chegam antes do problema",
    body: [
      "Cada cláusula vira um prazo no <strong class=\"font-semibold text-gray-900\">calendário do time</strong>, e os avisos chegam 90, 60 e 30 dias antes.",
      "Quando o time olha para a renovação, ainda há tempo para negociar, em vez de correr atrás."
    ],
    closer: "O prazo avisa antes.",
    visual: "alertas"
  },
  {
    icon: History,
    title: "Contexto que sobrevive a quem sai do time",
    body: [
      "Quando a pessoa que cuidava daquele fornecedor pede demissão, o histórico não vai com ela.",
      "Cada versão, comentário e aditivo fica registrado no ambiente, e quem assume a vaga começa com o <strong class=\"font-semibold text-gray-900\">caso entendido</strong>."
    ],
    closer: "Quem chega depois herda contexto, não dúvida.",
    visual: "historico"
  }
];

// Day 0 → 30 → 90 do onboarding
const RAMP = [
  {
    when: "Dia 0",
    title: "Importação acompanhada",
    body: "A equipe da +legal_ acompanha você pessoalmente na importação dos primeiros contratos críticos, configura o painel com seus campos, e treina o time em uma sessão de 1 hora."
  },
  {
    when: "Dia 30",
    title: "Operação rodando",
    body: "Os primeiros alertas chegam para o time. Os aditivos viram fluxo formal dentro do ambiente, e o histórico de versões já cobre tudo que mudou no mês."
  },
  {
    when: "Dia 90",
    title: "Confiança no painel",
    body: "Você abre o painel todo dia e confia no que vê. As planilhas paralelas saem da rotina, o jurídico externo entra no ambiente, e o portfólio inteiro vive em um lugar só."
  }
];

// 3 motivos específicos de Early Access para Operações
const PORQUE_AGORA = [
  {
    icon: ShieldCheck,
    title: "Importação personalizada dos seus contratos",
    body: "A equipe carrega os primeiros 10 a 20 contratos críticos com você, configura os campos do seu portfólio, e ajusta os alertas para os SLAs que importam mais."
  },
  {
    icon: Calendar,
    title: "Operador gratuito permanente",
    body: "O preço de lançamento fica garantido para os primeiros workspaces, mesmo depois do lançamento público. O primeiro operador continua <strong class=\"font-semibold text-gray-900\">gratuito permanente</strong>."
  },
  {
    icon: MessageSquare,
    title: "Canal direto com os fundadores",
    body: "Os primeiros workspaces <strong class=\"font-semibold text-gray-900\">moldam a +legal_</strong>. Seu feedback chega direto nos fundadores e orienta o que entra em produção nos próximos meses."
  }
];

export default function ParaOperacoesPage() {
  return (
    <>
      {/* HERO · fala diretamente com a Diretora */}
      <section className="relative overflow-hidden border-b border-stone-200 bg-white">
        <HeroLogoBg position="top-right" color="var(--brand)" opacity={0.07} width={560} />
        <div className="container-soma relative py-16 md:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-tint px-3 py-1.5">
                <Briefcase className="size-4 text-brand" strokeWidth={1.6} />
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                  Para você que monitora 80 contratos B2B.
                </span>
              </div>

              <h1 className="mb-6 font-title text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl lg:text-[56px] leading-[1.05]">
                Você gerencia 80 contratos.
                <br />
                <span className="text-brand">
                  Mas não sabe quais vencem amanhã.
                </span>
              </h1>

              <p className="mb-3 text-lg leading-relaxed text-gray-700 md:text-xl">
                A +legal_ é o ambiente onde o portfólio vive em uma tela só. Os alertas chegam antes de cada vencimento. O histórico fica, mesmo quando o time muda.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-gray-700 md:text-xl">
                <strong className="font-semibold text-gray-900">Antes do prazo virar problema.</strong>
              </p>

              <div className="flex flex-wrap gap-3">
                <Button href="/early-access" variant="primary" size="lg">
                  Entrar para o Early Access <ArrowRight className="size-4" />
                </Button>
                <Button
                  href="mailto:contato@maislegal.tech?subject=Conversa%20sobre%20Operações"
                  variant="secondary"
                  size="lg"
                >
                  Conversar com a equipe
                </Button>
              </div>

              <p className="mt-5 font-mono text-[11px] uppercase tracking-widest text-stone-500">
                Operador grátis · Sem cartão · Importação acompanhada
              </p>
            </div>

            {/* Visual · mockup do painel pelos olhos da Diretora */}
            <div className="hidden lg:block">
              <MockupPainelOperacoes />
            </div>
          </div>
        </div>
      </section>

      {/* O QUE MUDA NO SEU DIA · 3 mudanças concretas com mini-visuais */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mb-12 max-w-[860px]">
            <p className="eyebrow mb-4">O que muda no seu dia</p>
            <h2 className="h-soma mb-4">
              Três coisas mudam. Logo na primeira semana.
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              O portfólio inteiro passa a viver em uma tela só, sem caçar cláusula em pasta esquecida. Os prazos avisam antes da janela fechar, com margem para agir em vez de explicar atraso. E o contexto de cada contrato sobrevive a quem sai do time.
            </p>
          </div>

          <div className="space-y-12">
            {MUDANCAS.map((m, i) => {
              const reverse = i % 2 === 1;
              const Icon = m.icon;
              const Visual =
                m.visual === "portfolio"
                  ? VisualPortfolio
                  : m.visual === "alertas"
                    ? VisualAlertas
                    : VisualHistorico;
              return (
                <div
                  key={m.title}
                  className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
                    reverse ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={reverse ? "lg:col-start-2" : ""}>
                    <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-brand-tint">
                      <Icon className="size-6 text-brand" strokeWidth={1.6} />
                    </div>
                    <h3 className="mb-4 font-title text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
                      {m.title}
                    </h3>
                    <div className="space-y-3 text-base leading-relaxed text-gray-700 md:text-lg">
                      {(Array.isArray(m.body) ? m.body : [m.body]).map((line, j) => (
                        <p key={j} dangerouslySetInnerHTML={{ __html: line }} />
                      ))}
                    </div>
                    {m.closer && (
                      <p className="mt-3 text-base font-bold text-gray-900 md:text-lg">
                        {m.closer}
                      </p>
                    )}
                  </div>
                  <div
                    className={`overflow-hidden rounded-2xl border border-brand-light bg-brand-tint p-6 md:p-8 ${
                      reverse ? "lg:col-start-1" : ""
                    }`}
                  >
                    <Visual />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RAMP · Day 0, 30, 90 */}
      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mb-12 max-w-[820px]">
            <p className="eyebrow mb-4">Como começa</p>
            <h2 className="h-soma mb-4">
              Do primeiro contrato importado até o portfólio inteiro no calendário do time.
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Você não precisa virar especialista em mais uma ferramenta. A
              equipe da +legal_ acompanha os primeiros passos, e em 90 dias o
              ambiente já carrega o seu portfólio inteiro.
            </p>
          </div>

          <div className="relative grid grid-cols-1 gap-5 md:grid-cols-3">
            {/* Linha conectando os 3 marcos */}
            <div className="absolute left-0 right-0 top-12 hidden h-px bg-brand/25 md:block" />

            {RAMP.map((r, i) => (
              <div
                key={r.when}
                className="relative rounded-2xl border-2 border-stone-200 bg-white p-6 md:p-7"
              >
                {/* Marker no topo */}
                <div className="mb-5 inline-flex items-center gap-2">
                  <span className="flex size-9 items-center justify-center rounded-full bg-brand font-mono text-[10px] font-bold tracking-widest text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                    {r.when}
                  </span>
                </div>
                <h3 className="mb-3 font-title text-xl font-bold tracking-tight text-gray-900">
                  {r.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-gray-700">
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUE AGORA · Early Access focado em Operações */}
      <section className="bg-brand-tint">
        <div className="container-soma section-soma">
          <div className="mb-12 max-w-[860px]">
            <p className="eyebrow mb-4">Por que entrar agora</p>
            <h2 className="h-soma mb-4">
              Os primeiros workspaces moldam a +legal_.
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              O Early Access para operações é mais que acesso antecipado. Quem
              entra agora ganha importação acompanhada, preço travado e voz
              direta nas decisões de produto que vêm pela frente.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {PORQUE_AGORA.map(p => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="flex flex-col rounded-2xl border-2 border-brand bg-white p-6 md:p-7"
                >
                  <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-brand-tint">
                    <Icon className="size-6 text-brand" strokeWidth={1.6} />
                  </div>
                  <h3 className="mb-3 font-title text-lg font-bold tracking-tight text-gray-900">
                    {p.title}
                  </h3>
                  <p
                    className="text-[14px] leading-relaxed text-gray-700"
                    dangerouslySetInnerHTML={{ __html: p.body }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA FORTE · 2 caminhos */}
      <section className="bg-brand text-white">
        <div className="container-soma py-16 md:py-20">
          <div className="mx-auto max-w-[860px] text-center">
            <p className="eyebrow-light mb-5">Próximo passo</p>
            <h2 className="mb-6 font-title text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              Você ativa o portfólio agora. Ou conversa primeiro com a equipe.
            </h2>
            <p className="mx-auto mb-10 max-w-[620px] text-lg leading-relaxed text-white/80">
              O caminho rápido é entrar para o Early Access e começar a importar contratos com a equipe acompanhando. O cauteloso é uma conversa de 30 minutos antes de decidir.
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
                href="mailto:contato@maislegal.tech?subject=Conversa%20sobre%20Operações"
                variant="secondary"
                size="lg"
                className="!bg-transparent !border-white/40 !text-white hover:!bg-white/10 hover:!border-white"
              >
                Conversar com a equipe primeiro
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

/* ════════════════════════════════════════════════════════════════
   MOCKUPS · pelo ângulo da Diretora de Operações
   ──────────────────────────────────────────────────────────────── */

// Hero · painel completo da Diretora
function MockupPainelOperacoes() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-2xl"
        style={{ background: "var(--brand-tint)" }}
      />
      <svg
        viewBox="0 0 600 440"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full rounded-2xl border border-stone-200 bg-white shadow-xl"
        aria-hidden="true">
        {/* Toolbar */}
        <rect width="600" height="32" fill="var(--brand)" />
        <circle cx="14" cy="16" r="3" fill="white" opacity="0.4" />
        <circle cx="26" cy="16" r="3" fill="white" opacity="0.4" />
        <circle cx="38" cy="16" r="3" fill="white" opacity="0.4" />
        <text x="56" y="20" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="white" opacity="0.85">
          +legal_ · Acme Outsourcing · Painel
        </text>
        {/* Avatar do usuário */}
        <circle cx="582" cy="16" r="9" fill="var(--peach-dark)" />
        <text x="582" y="20" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="700" fill="white" textAnchor="middle">FT</text>

        {/* Sidebar */}
        <rect x="0" y="32" width="120" height="408" fill="#FAFAF8" />
        <line x1="120" y1="32" x2="120" y2="440" stroke="#E8E8E4" strokeWidth="1" />

        <rect x="10" y="50" width="100" height="22" rx="4" fill="var(--brand-tint)" />
        <text x="20" y="65" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="var(--brand)">
          Portfolio
        </text>

        {[
          { label: "Contratos", count: null },
          { label: "Obrigações", count: null },
          { label: "Aditivos", count: "3" },
          { label: "Histórico", count: null }
        ].map((item, i) => (
          <g key={item.label} transform={`translate(0 ${88 + i * 22})`}>
            <text x="20" y="0" fontFamily="Inter, sans-serif" fontSize="11" fill="#666">
              {item.label}
            </text>
            {item.count && (
              <g transform="translate(94 -4)">
                <circle r="7" fill="var(--peach-dark)" />
                <text y="3" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="700" fill="white" textAnchor="middle">
                  {item.count}
                </text>
              </g>
            )}
          </g>
        ))}

        {/* Header */}
        <text x="140" y="60" fontFamily="Barlow, sans-serif" fontSize="22" fontWeight="800" fill="#1A1A1A">
          Visão geral
        </text>
        <text x="140" y="78" fontFamily="Inter, sans-serif" fontSize="10.5" fill="#888">
          80 contratos · 32 fornecedores · atualizado às 09:14
        </text>

        {/* KPI Principal · 12 vencendo (dominante, com sparkline) */}
        <g transform="translate(140 96)">
          <rect width="240" height="84" rx="8" fill="#FFF8F4" stroke="var(--peach-dark)" strokeWidth="1.4" />
          <text x="14" y="20" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="var(--peach-dark)" letterSpacing="1">
            VENCEM EM 30 DIAS
          </text>
          <text x="14" y="62" fontFamily="Barlow, sans-serif" fontSize="40" fontWeight="800" fill="var(--peach-dark)">12</text>
          <text x="62" y="62" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#92400E">contratos</text>

          {/* Sparkline */}
          <g transform="translate(140 30)">
            <text x="0" y="0" fontFamily="JetBrains Mono, monospace" fontSize="6.5" fill="#999" letterSpacing="0.4">JAN</text>
            <text x="80" y="0" fontFamily="JetBrains Mono, monospace" fontSize="6.5" fill="#999" letterSpacing="0.4" textAnchor="end">ABR</text>
            <polyline points="0,28 16,24 32,22 48,18 64,20 80,12" fill="none" stroke="var(--peach-dark)" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
            <circle cx="80" cy="12" r="2.5" fill="var(--peach-dark)" />
            <text x="0" y="50" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="700" fill="var(--peach-dark)" letterSpacing="0.4">+38% VS Q1</text>
          </g>
        </g>

        {/* KPI 2 · Alertas SLA */}
        <g transform="translate(390 96)">
          <rect width="100" height="84" rx="8" fill="white" stroke="#FCA5A5" strokeWidth="1" />
          <text x="14" y="20" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="700" fill="#dc2626" letterSpacing="0.8">ALERTA SLA</text>
          <text x="14" y="50" fontFamily="Barlow, sans-serif" fontSize="26" fontWeight="800" fill="#dc2626">5</text>
          <text x="14" y="68" fontFamily="Inter, sans-serif" fontSize="9" fill="#7f1d1d">2 acima R$5 mil</text>
        </g>

        {/* KPI 3 · Em renegociação */}
        <g transform="translate(500 96)">
          <rect width="86" height="84" rx="8" fill="white" stroke="#E8E8E4" strokeWidth="1" />
          <text x="14" y="20" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="700" fill="var(--brand)" letterSpacing="0.8">RENEGOCIANDO</text>
          <text x="14" y="50" fontFamily="Barlow, sans-serif" fontSize="26" fontWeight="800" fill="var(--brand)">3</text>
          <text x="14" y="68" fontFamily="Inter, sans-serif" fontSize="9" fill="#666">SLA, preço, escopo</text>
        </g>

        {/* Alerta destacado */}
        <g transform="translate(140 196)">
          <rect width="446" height="46" rx="6" fill="#FEF3F2" stroke="#dc2626" strokeWidth="1" strokeOpacity="0.35" />
          <rect width="3" height="46" fill="#dc2626" />
          <circle cx="22" cy="23" r="8" fill="#dc2626" opacity="0.16" />
          <circle cx="22" cy="23" r="3.5" fill="#dc2626" />
          <text x="40" y="20" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="#7f1d1d">
            Renovação automática em 12 dias · Beta Serviços · R$ 8.500/mês
          </text>
          <text x="40" y="34" fontFamily="Inter, sans-serif" fontSize="9.5" fill="#7f1d1d" opacity="0.78">
            Cancelamento até 18 mai · sem revisão de preço desde 2024
          </text>
          <text x="430" y="28" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill="#dc2626" textAnchor="end" letterSpacing="0.5">
            D-12
          </text>
        </g>

        {/* Sub-header da lista */}
        <text x="140" y="266" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="#666" letterSpacing="1.2">
          CONTRATOS DESTA SEMANA
        </text>

        {/* Lista de contratos com avatares */}
        {[
          { initials: "BS", name: "Outsourcing TI · Beta Serviços", tag: "VENCE 12 JUN", color: "var(--peach-dark)" },
          { initials: "GI", name: "Limpeza · Gama Indústria", tag: "EM DIA · 3 ADITIVOS", color: "var(--brand)" },
          { initials: "DT", name: "Manutenção · Delta Tech", tag: "SLA DESCUMPRIDO · MULTA", color: "#dc2626" },
          { initials: "ES", name: "Segurança · Eta Seguros", tag: "RENEGOCIANDO · 60D", color: "var(--peach-dark)" }
        ].map((c, i) => (
          <g key={c.name} transform={`translate(140 ${278 + i * 38})`}>
            <line x1="0" y1="0" x2="446" y2="0" stroke="#F0F0EC" strokeWidth="1" />

            {/* Avatar circular */}
            <g transform="translate(14 18)">
              <circle r="11" fill={c.color} opacity="0.14" />
              <text x="0" y="3" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="700" fill={c.color} textAnchor="middle" letterSpacing="-0.3">
                {c.initials}
              </text>
            </g>

            <text x="34" y="14" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#1A1A1A">
              {c.name}
            </text>
            <text x="34" y="28" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fontWeight="700" fill={c.color} letterSpacing="0.5">
              {c.tag}
            </text>

            {/* Indicador de status */}
            <circle cx="436" cy="18" r="3.5" fill={c.color} />
          </g>
        ))}
      </svg>
    </div>
  );
}

// Mudança 1 · Portfólio com tile expandido e legenda com contadores
function VisualPortfolio() {
  const isCrit = (r: number, c: number) =>
    (r === 1 && c === 1) || (r === 2 && c === 5) || (r === 3 && c === 3);
  const isWarn = (r: number, c: number) =>
    (r === 0 && c === 2) ||
    (r === 1 && c === 6) ||
    (r === 2 && c === 0) ||
    (r === 2 && c === 7) ||
    (r === 3 && c === 1) ||
    (r === 3 && c === 6);
  const isFocus = (r: number, c: number) => r === 1 && c === 1;
  const isSkipped = (r: number, c: number) => r === 1 && c === 2;

  return (
    <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full"aria-hidden="true">
      {/* Header */}
      <text x="40" y="16" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="#999" letterSpacing="1.2">
        80 CONTRATOS · 32 FORNECEDORES · ABRIL
      </text>

      {/* Grid */}
      {Array.from({ length: 4 }).map((_, row) =>
        Array.from({ length: 8 }).map((_, col) => {
          if (isSkipped(row, col)) return null;
          const x = 40 + col * 50;
          const y = 30 + row * 42;
          const crit = isCrit(row, col);
          const warn = isWarn(row, col);
          const focus = isFocus(row, col);
          const w = focus ? 88 : 38;
          const fill = crit ? "#dc2626" : warn ? "var(--peach-dark)" : "var(--brand)";
          const opacity = crit ? 1 : warn ? 0.85 : 0.28;

          return (
            <g key={`${row}-${col}`}>
              <rect x={x} y={y} width={w} height="34" rx="3" fill={fill} opacity={opacity} />
              {focus && (
                <>
                  <text x={x + 8} y={y + 14} fontFamily="Inter, sans-serif" fontSize="9.5" fontWeight="700" fill="white">
                    Beta Serviços
                  </text>
                  <text x={x + 8} y={y + 26} fontFamily="JetBrains Mono, monospace" fontSize="7.5" fontWeight="600" fill="white" opacity="0.9" letterSpacing="0.3">
                    R$ 8.500 · VENCE D-12
                  </text>
                </>
              )}
            </g>
          );
        })
      )}

      {/* Legenda com contadores grandes */}
      <g transform="translate(40 218)">
        <rect width="130" height="46" rx="6" fill="white" stroke="#FCA5A5" strokeWidth="1" />
        <rect width="3" height="46" rx="1.5" fill="#dc2626" />
        <text x="14" y="22" fontFamily="Barlow, sans-serif" fontSize="22" fontWeight="800" fill="#dc2626">3</text>
        <text x="40" y="22" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" fill="#7f1d1d">críticos</text>
        <text x="14" y="38" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="500" fill="#999" letterSpacing="0.5">VENCEM EM 30D</text>
      </g>

      <g transform="translate(180 218)">
        <rect width="130" height="46" rx="6" fill="white" stroke="#FCD7B0" strokeWidth="1" />
        <rect width="3" height="46" rx="1.5" fill="var(--peach-dark)" />
        <text x="14" y="22" fontFamily="Barlow, sans-serif" fontSize="22" fontWeight="800" fill="var(--peach-dark)">6</text>
        <text x="40" y="22" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" fill="#92400E">em atenção</text>
        <text x="14" y="38" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="500" fill="#999" letterSpacing="0.5">PRÓXIMOS 60 DIAS</text>
      </g>

      <g transform="translate(320 218)">
        <rect width="130" height="46" rx="6" fill="white" stroke="#E8E8E4" strokeWidth="1" />
        <rect width="3" height="46" rx="1.5" fill="var(--brand)" opacity="0.5" />
        <text x="14" y="22" fontFamily="Barlow, sans-serif" fontSize="22" fontWeight="800" fill="var(--brand)">71</text>
        <text x="48" y="22" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" fill="#444">em dia</text>
        <text x="14" y="38" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="500" fill="#999" letterSpacing="0.5">MONITORADOS</text>
      </g>
    </svg>
  );
}

// Mudança 2 · Notificação real + timeline contextual
function VisualAlertas() {
  return (
    <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full"aria-hidden="true">
      {/* Card de notificação · primeiro plano */}
      <g transform="translate(30 24)">
        <rect width="420" height="92" rx="8" fill="white" stroke="#E8E8E4" strokeWidth="1" />
        <rect width="4" height="92" rx="2" fill="var(--peach-dark)" />

        {/* Ícone sino */}
        <g transform="translate(28 30)">
          <circle r="16" fill="#FFF1E5" />
          <path d="M -6 -2 a 6 6 0 0 1 12 0 v 5 l 2 4 h -16 l 2 -4 z" fill="var(--peach-dark)" />
          <path d="M -2 9 a 2 2 0 0 0 4 0" fill="var(--peach-dark)" />
        </g>

        {/* Badge de status */}
        <g transform="translate(56 14)">
          <rect width="84" height="14" rx="3" fill="var(--peach-dark)" />
          <text x="42" y="10" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="white" textAnchor="middle" letterSpacing="1">
            D-12 · ALERTA
          </text>
        </g>

        {/* Título */}
        <text x="56" y="46" fontFamily="Barlow, sans-serif" fontSize="14" fontWeight="800" fill="#1A1A1A">
          Renovação automática em 12 dias
        </text>
        <text x="56" y="62" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="500" fill="#444">
          Outsourcing TI · Beta Serviços
        </text>
        <text x="56" y="76" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">
          R$ 8.500/mês · sem revisão desde 2024
        </text>

        {/* Valor à direita */}
        <text x="406" y="46" fontFamily="Barlow, sans-serif" fontSize="14" fontWeight="800" fill="var(--peach-dark)" textAnchor="end">
          R$ 102 mil/ano
        </text>
        <text x="406" y="60" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="600" fill="#999" textAnchor="end" letterSpacing="0.6">
          VALOR ANUAL
        </text>
      </g>

      {/* Timeline contextual */}
      <g transform="translate(30 158)">
        <text x="0" y="0" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="#999" letterSpacing="1.2">
          JANELA DE NEGOCIAÇÃO
        </text>

        {/* Linhas */}
        <line x1="0" y1="22" x2="420" y2="22" stroke="#E8E8E4" strokeWidth="2" />
        <line x1="0" y1="22" x2="304" y2="22" stroke="var(--brand)" strokeWidth="2.4" />

        {/* Marcos */}
        {[
          { x: 0, label: "D-90", note: "Aviso inicial", state: "done" },
          { x: 105, label: "D-60", note: "Avaliação", state: "done" },
          { x: 210, label: "D-30", note: "Última janela", state: "done" },
          { x: 304, label: "Hoje", note: "D-12", state: "here" },
          { x: 420, label: "D-0", note: "Renovação", state: "future" }
        ].map((m) => (
          <g key={m.label} transform={`translate(${m.x} 22)`}>
            {m.state === "here" && (
              <circle r="14" fill="none" stroke="var(--peach-dark)" strokeWidth="1.4" opacity="0.35" />
            )}
            <circle
              r={m.state === "here" ? "8" : "5"}
              fill={
                m.state === "here"
                  ? "var(--peach-dark)"
                  : m.state === "done"
                    ? "var(--brand)"
                    : "white"
              }
              stroke={m.state === "future" ? "#BDBDB8" : "none"}
              strokeWidth="1.4"
            />
            <text
              x="0"
              y={m.state === "here" ? "32" : "30"}
              fontFamily="JetBrains Mono, monospace"
              fontSize={m.state === "here" ? "9" : "8"}
              fontWeight="700"
              fill={m.state === "here" ? "var(--peach-dark)" : "#666"}
              textAnchor="middle"
              letterSpacing="0.5"
            >
              {m.label}
            </text>
            <text
              x="0"
              y={m.state === "here" ? "44" : "42"}
              fontFamily="Inter, sans-serif"
              fontSize="8.5"
              fill={m.state === "here" ? "var(--peach-dark)" : "#999"}
              textAnchor="middle"
              fontWeight={m.state === "here" ? "600" : "400"}
            >
              {m.note}
            </text>
          </g>
        ))}
      </g>

      {/* Footer */}
      <text x="240" y="262" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill="#666" textAnchor="middle" letterSpacing="1.5">
        CADA CLÁUSULA VIRA AVISO. NINGUÉM PRECISA LEMBRAR
      </text>
    </svg>
  );
}

// Mudança 3 · Histórico vivo com avatares e timeline real
function VisualHistorico() {
  return (
    <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full"aria-hidden="true">
      {/* Header */}
      <text x="240" y="14" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="#999" textAnchor="middle" letterSpacing="1.2">
        TRANSIÇÃO · CONTA BETA SERVIÇOS
      </text>

      {/* Avatar saindo · esquerda */}
      <g transform="translate(48 100)">
        <circle r="24" fill="white" stroke="#999" strokeWidth="1.4" strokeDasharray="3 3" />
        <text x="0" y="5" fontFamily="Barlow, sans-serif" fontSize="14" fontWeight="800" fill="#999" textAnchor="middle">RM</text>
        <text x="0" y="44" fontFamily="Inter, sans-serif" fontSize="10.5" fontWeight="700" fill="#666" textAnchor="middle">Ricardo M.</text>
        <text x="0" y="58" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fontWeight="600" fill="#999" textAnchor="middle" letterSpacing="0.5">
          SAIU EM MAR
        </text>
      </g>

      {/* Centro · ambiente com itens */}
      <g transform="translate(132 30)">
        <rect width="216" height="200" rx="10" fill="white" stroke="var(--brand)" strokeWidth="1.4" />

        {/* Header do ambiente */}
        <path d="M 0 10 a 10 10 0 0 1 10 -10 h 196 a 10 10 0 0 1 10 10 v 18 h -216 z" fill="var(--brand-tint)" />
        <text x="108" y="18" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill="var(--brand)" textAnchor="middle" letterSpacing="1">
          AMBIENTE +legal_
        </text>

        {/* Sub-label */}
        <text x="14" y="44" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="600" fill="#999" letterSpacing="0.8">
          ÚLTIMAS MOVIMENTAÇÕES
        </text>

        {/* Itens */}
        {[
          { kind: "doc", text: "Aditivo 03 · revisão de SLA", date: "12 mar", who: "Ricardo M." },
          { kind: "msg", text: "Comentário · cláusula 8.2", date: "08 mar", who: "Ricardo M." },
          { kind: "ver", text: "Versão final assinada", date: "21 fev", who: "Beatriz L." },
          { kind: "doc", text: "Aditivo 02 · prorrogação", date: "14 fev", who: "Ricardo M." }
        ].map((item, i) => (
          <g key={i} transform={`translate(14 ${56 + i * 32})`}>
            <line x1="0" y1="-2" x2="188" y2="-2" stroke="#F0F0EC" strokeWidth="1" />

            {/* Ícone do tipo */}
            <g transform="translate(8 14)">
              <circle
                r="10"
                fill={item.kind === "msg" ? "var(--peach-dark)" : "var(--brand)"}
                opacity="0.12"
              />
              {item.kind === "doc" && (
                <g stroke="var(--brand)" strokeWidth="1" fill="none" strokeLinejoin="round">
                  <path d="M -3.5 -4.5 L 2.5 -4.5 L 4.5 -2.5 L 4.5 4.5 L -3.5 4.5 Z" />
                  <line x1="-1.5" y1="-1" x2="3" y2="-1" />
                  <line x1="-1.5" y1="1" x2="3" y2="1" />
                </g>
              )}
              {item.kind === "msg" && (
                <path d="M -4 -3 h 8 v 5 h -3 l -2 2 v -2 h -3 z" fill="var(--peach-dark)" />
              )}
              {item.kind === "ver" && (
                <path d="M -3.5 0 L -1 2.5 L 3.5 -2" stroke="var(--brand)" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </g>

            <text x="24" y="11" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#1A1A1A">
              {item.text}
            </text>
            <text x="24" y="22" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fontWeight="500" fill="#999" letterSpacing="0.3">
              {item.date.toUpperCase()} · {item.who}
            </text>
          </g>
        ))}

        {/* Footer dentro do ambiente */}
        <text x="108" y="190" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fontWeight="700" fill="var(--brand)" textAnchor="middle" letterSpacing="1">
          12 VERSÕES · 47 COMENTÁRIOS · 8 ADITIVOS
        </text>
      </g>

      {/* Avatar entrando · direita */}
      <g transform="translate(432 100)">
        <circle r="24" fill="white" stroke="var(--peach-dark)" strokeWidth="1.6" />
        <text x="0" y="5" fontFamily="Barlow, sans-serif" fontSize="14" fontWeight="800" fill="var(--peach-dark)" textAnchor="middle">JL</text>
        <text x="0" y="44" fontFamily="Inter, sans-serif" fontSize="10.5" fontWeight="700" fill="#1A1A1A" textAnchor="middle">Júlia L.</text>
        <text x="0" y="58" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fontWeight="600" fill="var(--peach-dark)" textAnchor="middle" letterSpacing="0.5">
          ENTROU EM ABR
        </text>
      </g>

      {/* Setas de fluxo */}
      <defs>
        <marker id="arrow-out" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#999" />
        </marker>
        <marker id="arrow-in" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--peach-dark)" />
        </marker>
      </defs>
      <line x1="76" y1="100" x2="124" y2="100" stroke="#999" strokeWidth="1.2" strokeDasharray="3 3" markerEnd="url(#arrow-out)" />
      <line x1="356" y1="100" x2="404" y2="100" stroke="var(--peach-dark)" strokeWidth="1.4" markerEnd="url(#arrow-in)" />

      {/* Footer */}
      <text x="240" y="262" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill="#666" textAnchor="middle" letterSpacing="1.5">
        QUEM ASSUME COMEÇA COM O CASO ENTENDIDO
      </text>
    </svg>
  );
}
