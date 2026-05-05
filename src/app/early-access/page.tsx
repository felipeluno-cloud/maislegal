import {
  Gift,
  Zap,
  MessageSquare,
  ShieldCheck,
  Compass,
  Lock,
  Sparkles,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/base/Button";
import { HeroLogoBg } from "@/components/base/HeroLogoBg";

const BENEFITS = [
  {
    icon: Gift,
    title: "Sempre grátis, de verdade",
    body: "O primeiro operador do seu workspace fica grátis para sempre. Sem prazo de expiração, sem mudança de regra no futuro.",
    color: "brand"
  },
  {
    icon: Zap,
    title: "Acesso prioritário a novidades",
    body: "Você recebe as funcionalidades novas antes do lançamento público para o resto do mercado. A entrega é gradual, e os primeiros workspaces sempre vêm primeiro.",
    color: "brand"
  },
  {
    icon: MessageSquare,
    title: "Acesso direto aos fundadores",
    body: "Feedback ouvido por quem decide. Conversas regulares com Rafael, Paula, Luis e Raul orientam a evolução do produto.",
    color: "peach"
  },
  {
    icon: ShieldCheck,
    title: "20% de desconto na câmara SOMA",
    body: "Você ganha 20% de desconto nas taxas da câmara SOMA quando uma disputa precisar resolver, no plano Premium.",
    color: "soma"
  },
  {
    icon: Compass,
    title: "Onboarding com a equipe",
    body: "Você importa os primeiros contratos com apoio direto da equipe. Configuração inicial em horas, do zero ao primeiro alerta funcional.",
    color: "peach"
  },
  {
    icon: Lock,
    title: "Preço de lançamento garantido",
    body: "Os primeiros workspaces preservam o preço de lançamento. Sem reajustes futuros, mesmo depois do lançamento público.",
    color: "brand"
  }
];

const FAQ = [
  {
    q: "É realmente gratuito?",
    a: "Sim. O primeiro operador do seu workspace é grátis para sempre, sem cartão e sem trial. A partir do segundo, são R$ 550 no plano mensal ou R$ 500 no anual."
  },
  {
    q: "Quanto tempo dura o Early Access?",
    a: "Não há prazo fixo. O Early Access fecha quando a gente atingir o número de workspaces que conseguimos acompanhar com qualidade, e os benefícios permanecem para quem já entrou."
  },
  {
    q: "Posso convidar a outra parte do contrato?",
    a: "Sim. Você manda o convite por email e a outra parte entra como visitante (acesso somente leitura), sem cobrança nem limite."
  },
  {
    q: "Como funciona o cancelamento?",
    a: "Sem multa, sem fidelidade. Você cancela quando quiser, e continua podendo exportar os contratos em formato aberto."
  }
];

const COLOR: Record<string, { border: string; bg: string; iconBg: string; iconColor: string }> = {
  brand: {
    border: "var(--brand)",
    bg: "var(--brand-tint)",
    iconBg: "var(--brand)",
    iconColor: "white"
  },
  peach: {
    border: "var(--peach-dark)",
    bg: "var(--peach-bg)",
    iconBg: "var(--peach-dark)",
    iconColor: "white"
  },
  soma: {
    border: "var(--soma)",
    bg: "var(--soma-bg)",
    iconBg: "var(--soma)",
    iconColor: "white"
  }
};

export default function EarlyAccessPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-stone-200 bg-white">
        <HeroLogoBg position="top-right" color="var(--brand)" opacity={0.07} width={560} />
      <HeroLogoBg position="bottom-left" color="var(--peach-dark)" opacity={0.05} width={320} />
        <div className="container-soma relative py-16 md:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-tint px-3 py-1.5">
                <span className="size-1.5 animate-pulse rounded-full bg-brand motion-reduce:animate-none" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                  Early Access · primeiros workspaces
                </span>
              </div>

              <h1 className="mb-6 font-title text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl lg:text-[52px] leading-[1.06]">
                Você entra agora e ajuda a definir como a <span className="text-brand">+legal_</span> evolui.
              </h1>

              <p className="mb-3 text-lg leading-relaxed text-gray-600 md:text-xl">
                Não é fila de espera passiva, é curadoria ativa. Quem entra agora chega antes nas funcionalidades e fala direto com os fundadores.
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 md:text-xl">
                Os primeiros workspaces moldam a <span className="text-brand">+legal_</span>. Suas decisões orientam o que entra em produção nos próximos meses.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button href="#cadastro" variant="primary" size="lg">
                  Fazer meu cadastro
                </Button>
                <Button
                  href="mailto:contato@maislegal.tech?subject=Conversa%20sobre%20Early%20Access"
                  variant="secondary"
                  size="lg"
                  className="!border-stone-300"
                >
                  Conversar com a equipe
                </Button>
              </div>

              <p className="mt-5 font-mono text-[11px] uppercase tracking-widest text-gray-500">
                Operador grátis permanente · sem cartão · sem compromisso
              </p>
            </div>

            <div className="hidden lg:block">
              <MockupCertificadoEarlyAccess />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS · 6 cards */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mb-12 max-w-[820px]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-tint px-3 py-1.5">
              <Sparkles className="size-4 text-brand" strokeWidth={1.6} />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                Benefícios
              </span>
            </div>
            <h2 className="h-soma mb-4">
              Seis razões para entrar agora, e não depois.
            </h2>
            <p className="mb-3 text-lg leading-relaxed text-gray-600">
              Quem está no Early Access ganha mais do que acesso antecipado.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              Os benefícios continuam mesmo depois do lançamento público.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b, i) => {
              const c = COLOR[b.color];
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="flex flex-col rounded-2xl border border-stone-200 border-l-4 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ borderLeftColor: c.border }}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div
                      className="flex size-12 items-center justify-center rounded-xl"
                      style={{ background: c.iconBg }}
                    >
                      <Icon
                        className="size-6"
                        style={{ color: c.iconColor }}
                        strokeWidth={1.6}
                      />
                    </div>
                    <span
                      className="rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold tracking-widest"
                      style={{ background: c.bg, color: c.border }}
                    >
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mb-3 font-title text-lg font-bold leading-snug text-gray-900">
                    {b.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-700">
                    {b.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CADASTRO · formulário */}
      <section id="cadastro" className="bg-white">
        <div className="container-soma section-soma">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="eyebrow mb-4">Cadastro</p>
              <h2 className="h-soma mb-6">
                Diga quem você é. A gente responde em 3 dias úteis.
              </h2>
              <p className="mb-3 text-lg leading-relaxed text-gray-600">
                A gente entra em contato para alinhar expectativas e entender o seu portfólio de contratos.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                Depois acompanha você na importação inicial dos primeiros contratos críticos, na configuração do painel, e no treinamento do time.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 rounded-xl bg-brand-tint p-4">
                  <div className="flex size-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand text-white">
                    <Gift className="size-4" strokeWidth={2} />
                  </div>
                  <p className="pt-1.5 text-sm font-medium text-gray-900">
                    Sem cartão. Sem cobrança. Sem compromisso.
                  </p>
                </div>
                <div className="flex items-start gap-3 rounded-xl bg-brand-tint p-4">
                  <div className="flex size-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand text-white">
                    <MessageSquare className="size-4" strokeWidth={2} />
                  </div>
                  <p className="pt-1.5 text-sm font-medium text-gray-900">
                    Conversa direta com a equipe que está construindo.
                  </p>
                </div>
              </div>
            </div>

            <form className="flex flex-col gap-5 rounded-2xl border-2 border-brand bg-white p-8 shadow-lg">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Nome
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    E-mail
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Empresa
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    Cargo
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Quantos contratos ativos?
                </label>
                <select className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20">
                  <option>Até 10</option>
                  <option>10 a 50</option>
                  <option>50 a 200</option>
                  <option>Mais de 200</option>
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Vertical
                </label>
                <select className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20">
                  <option>Serviços especializados</option>
                  <option>Outsourcing B2B</option>
                  <option>Societário</option>
                  <option>Locação comercial</option>
                  <option>Escritório de advocacia</option>
                  <option>Outro</option>
                </select>
              </div>
              <Button type="submit" variant="primary" size="lg" className="mt-2 w-full">
                Enviar cadastro
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mb-12 max-w-[820px]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-tint px-3 py-1.5">
              <HelpCircle className="size-4 text-brand" strokeWidth={1.6} />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                Perguntas frequentes
              </span>
            </div>
            <h2 className="h-soma">Quatro dúvidas comuns sobre o Early Access.</h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {FAQ.map((f, i) => (
              <div
                key={f.q}
                className="rounded-2xl border border-stone-200 bg-white p-7 transition-all duration-300 hover:shadow-md"
              >
                <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                  Q{String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-3 font-title text-lg font-bold leading-snug text-gray-900">
                  {f.q}
                </h3>
                <p className="text-sm leading-relaxed text-gray-700">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ════════════════════════════════════════════════════════════════
   MOCKUP · certificado de Early Access
   ──────────────────────────────────────────────────────────────── */

function MockupCertificadoEarlyAccess() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-2xl"
        style={{ background: "var(--brand-tint)" }}
      />
      <svg
        viewBox="0 0 600 460"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full rounded-2xl border border-stone-200 bg-white shadow-xl"
        aria-hidden="true"
      >
        {/* Toolbar */}
        <rect width="600" height="32" fill="var(--brand)" />
        <circle cx="14" cy="16" r="3" fill="white" opacity="0.4" />
        <circle cx="26" cy="16" r="3" fill="white" opacity="0.4" />
        <circle cx="38" cy="16" r="3" fill="white" opacity="0.4" />
        <text x="56" y="20" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="white" opacity="0.9">
          +legal_ · Workspace Beta Serviços · Painel Early Access
        </text>

        {/* Header · workspace + posição */}
        <g transform="translate(20 50)">
          <rect width="560" height="80" rx="10" fill="#FFF8F4" stroke="var(--peach-dark)" strokeWidth="1.4" />
          <rect width="3" height="80" rx="1.5" fill="var(--peach-dark)" />

          <text x="20" y="22" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="var(--peach-dark)" letterSpacing="1">
            EARLY ACCESS · ATIVO
          </text>
          <text x="20" y="46" fontFamily="Barlow, sans-serif" fontSize="20" fontWeight="800" fill="#1A1A1A">
            Workspace #014 · Beta Serviços
          </text>
          <text x="20" y="64" fontFamily="Inter, sans-serif" fontSize="11" fill="#666">
            entrou em 14 mai 2025 · 5º operador adicionado · 1º cliente convidado
          </text>

          {/* Stat à direita · vagas restantes */}
          <g transform="translate(420 16)">
            <text x="0" y="0" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="600" fill="#999" letterSpacing="0.5">
              POSIÇÃO
            </text>
            <text x="0" y="22" fontFamily="Barlow, sans-serif" fontSize="22" fontWeight="800" fill="var(--peach-dark)">
              14 / 50
            </text>
            <text x="0" y="36" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="500" fill="#999" letterSpacing="0.4">
              workspaces no programa
            </text>

            {/* Barra de progresso */}
            <rect x="0" y="46" width="124" height="6" rx="3" fill="#E5E5E5" />
            <rect x="0" y="46" width="35" height="6" rx="3" fill="var(--peach-dark)" />
          </g>
        </g>

        {/* Benefícios garantidos · 3 pilastras */}
        <g transform="translate(20 150)">
          <text x="0" y="0" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="#999" letterSpacing="1.2">
            BENEFÍCIOS GARANTIDOS · NÃO EXPIRAM
          </text>

          {[
            {
              x: 0,
              icon: "free",
              label: "Operador 1 grátis",
              sub: "permanente · sem cartão",
              color: "var(--peach-dark)"
            },
            {
              x: 188,
              icon: "voice",
              label: "Voz nos fundadores",
              sub: "5 sugestões implementadas",
              color: "var(--brand)"
            },
            {
              x: 376,
              icon: "shield",
              label: "Desconto SOMA",
              sub: "premium · 20% desc. taxas",
              color: "var(--soma)"
            }
          ].map((b, i) => (
            <g key={i} transform={`translate(${b.x} 14)`}>
              <rect width="180" height="80" rx="8" fill="white" stroke={b.color} strokeWidth="1.4" strokeOpacity="0.4" />

              {/* Ícone */}
              <g transform="translate(20 24)">
                <circle r="14" fill={b.color} opacity="0.14" />
                {b.icon === "free" && (
                  <text y="4" fontFamily="Barlow, sans-serif" fontSize="13" fontWeight="800" fill={b.color} textAnchor="middle">∞</text>
                )}
                {b.icon === "voice" && (
                  <path d="M -6 -3 h 12 v 8 h -4 l -3 3 v -3 h -5 z" fill={b.color} />
                )}
                {b.icon === "shield" && (
                  <path d="M 0 -8 L 7 -5 V 2 L 0 8 L -7 2 V -5 Z M -3 0 L -1 2 L 4 -3" stroke={b.color} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                )}
              </g>

              <text x="46" y="22" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="#1A1A1A">
                {b.label}
              </text>
              <text x="46" y="36" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="500" fill="#999" letterSpacing="0.3">
                {b.sub.toUpperCase()}
              </text>

              {/* Status checkmark */}
              <g transform="translate(160 16)">
                <circle r="8" fill={b.color} />
                <path d="M -3 0 L -1 2 L 3 -2" stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </g>

              {/* Linha separadora */}
              <line x1="14" y1="50" x2="166" y2="50" stroke="#F0F0EC" strokeWidth="1" />

              {/* Mini-texto extra */}
              <text x="14" y="64" fontFamily="Inter, sans-serif" fontSize="8.5" fill="#666">
                {b.icon === "free" && "Op 2+: a partir de R$ 500/mês"}
                {b.icon === "voice" && "Sessão mensal com Rafael"}
                {b.icon === "shield" && "R$ 18 mil disputa = R$ 14,4 mil"}
              </text>
            </g>
          ))}
        </g>

        {/* Próxima sessão com fundadores */}
        <g transform="translate(20 268)">
          <rect width="560" height="80" rx="10" fill="var(--brand)" />
          <text x="20" y="22" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="white" opacity="0.7" letterSpacing="1">
            PRÓXIMA SESSÃO COM FUNDADORES
          </text>
          <text x="20" y="46" fontFamily="Barlow, sans-serif" fontSize="18" fontWeight="800" fill="white">
            14 mai 2026 · 16h00
          </text>
          <text x="20" y="64" fontFamily="Inter, sans-serif" fontSize="10.5" fill="white" opacity="0.85">
            Conversa com Rafael Rossi sobre roadmap Q2
          </text>

          {/* Botão fictício */}
          <g transform="translate(440 26)">
            <rect width="100" height="28" rx="4" fill="white" />
            <text x="50" y="17" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" fill="var(--brand)" textAnchor="middle">
              Confirmar
            </text>
          </g>
        </g>

        {/* Footer · histórico de feedback implementado */}
        <g transform="translate(20 368)">
          <text x="0" y="0" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="#999" letterSpacing="1.2">
            FEEDBACK QUE VIROU PRODUTO · ÚLTIMOS 90 DIAS
          </text>
          <line x1="0" y1="8" x2="560" y2="8" stroke="#F0F0EC" strokeWidth="1" />

          {[
            { date: "12 ABR", what: "Alertas configuráveis por contrato", status: "AO VIVO" },
            { date: "28 MAR", what: "Exportação direta para SOMA", status: "AO VIVO" },
            { date: "14 MAR", what: "Convite múltiplo de visitantes", status: "AO VIVO" }
          ].map((h, i) => (
            <g key={i} transform={`translate(0 ${20 + i * 18})`}>
              <text x="0" y="10" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="var(--peach-dark)" letterSpacing="0.4">
                {h.date}
              </text>
              <text x="60" y="10" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="500" fill="#444">
                {h.what}
              </text>
              <g transform="translate(540 0)">
                <rect x="-50" y="-2" width="50" height="14" rx="3" fill="var(--peach-bg)" />
                <text x="-25" y="8" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="700" fill="var(--peach-dark)" textAnchor="middle" letterSpacing="0.4">
                  {h.status}
                </text>
              </g>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
