import {
  ArrowRight,
  GitBranch,
  UserPlus,
  Shield,
  ShieldCheck,
  Calendar,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/base/Button";

// 3 mudanças concretas no dia da Sócia de PME
const MUDANCAS = [
  {
    icon: GitBranch,
    title: "Mesma versão pra você e pro cliente grande",
    body: "O cliente corporativo abre o mesmo contrato que você está editando. Comentários ficam onde a discussão acontece, e versão A contra versão B deixa de existir quando alguém precisa lembrar o que foi combinado.",
    visual: "versao"
  },
  {
    icon: UserPlus,
    title: "Advogado externo trabalha com você, não em paralelo",
    body: "Você convida o advogado externo direto pro contrato. Ele revisa dentro do ambiente, sem você precisar exportar PDF, anexar em e-mail e esperar resposta. O acesso de visitante é gratuito permanente.",
    visual: "advogado"
  },
  {
    icon: Shield,
    title: "Quando trava, resolve privado",
    body: "Se o contrato vira disputa, a câmara SOMA está acoplada. Mediação confidencial, sem expor a relação publicamente. Resolução privada, do mesmo ambiente, sem fila judicial e sem queimar o cliente.",
    visual: "soma"
  }
];

// Day 0 → 30 → 90 do onboarding pra PME
const RAMP = [
  {
    when: "Day 0",
    title: "Os 5 contratos críticos importados",
    body: "A equipe da +legal_ importa com você os contratos com clientes corporativos ativos, configura os campos, e cadastra seu advogado externo como visitante gratuito."
  },
  {
    when: "Day 30",
    title: "Próximo contrato nasce dentro",
    body: "O próximo contrato com cliente corporativo é negociado direto na +legal_. O cliente entra como editor, seu advogado revisa por dentro, e tudo fica registrado desde o rascunho."
  },
  {
    when: "Day 90",
    title: "Drive virou backup",
    body: "Os contratos vivos vivem na +legal_. O Drive ficou só como backup. Quando alguém pergunta o que foi combinado, a resposta está a um clique, não num e-mail de 2024."
  }
];

// 3 motivos específicos de Early Access para PMEs
const PORQUE_AGORA = [
  {
    icon: ShieldCheck,
    title: "Onboarding com a equipe",
    body: "A equipe da +legal_ importa os primeiros contratos com você, ajusta os campos do seu negócio, e cadastra seu advogado externo como visitante gratuito permanente."
  },
  {
    icon: Calendar,
    title: "Operador gratuito permanente",
    body: "Você como operador continua gratuito mesmo depois do produto entrar em fase comercial. O preço de lançamento dos próximos seats fica garantido para os primeiros workspaces."
  },
  {
    icon: MessageSquare,
    title: "Voz direta nos fundadores",
    body: "Os primeiros workspaces moldam o produto. Seu feedback vai direto para os fundadores e orienta o que entra em produção nos próximos meses."
  }
];

export default function ParaPmesPage() {
  return (
    <>
      {/* HERO · fala diretamente com a Sócia de PME */}
      <section className="relative overflow-hidden border-b border-stone-200 bg-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute h-[520px] w-[520px] rounded-full opacity-[0.06]"
            style={{ background: "var(--peach-dark)", top: "-160px", right: "-160px" }}
          />
        </div>

        <div className="container-soma relative py-16 md:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <div
                className="mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1.5"
                style={{ background: "var(--peach-bg)", borderColor: "rgba(212,148,90,0.4)" }}
              >
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-peach-dark">
                  Para PMEs sem time jurídico
                </span>
              </div>

              <h1 className="mb-6 font-title text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl lg:text-[52px] leading-[1.06]">
                Você fechou um contrato com uma empresa 50× maior que a sua. E agora?
              </h1>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 md:text-xl">
                A +legal_ é o ambiente onde você, o cliente corporativo, e seu
                advogado externo trabalham na mesma versão do contrato. Sem
                exportar PDF, sem perder o histórico no e-mail, sem pular para
                o jurídico cada vez que alguém precisa entender o que mudou.
                Quando o cliente assume sua importância, você precisa estar do
                outro lado da mesa em pé de igualdade.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  href="/early-access"
                  variant="primary"
                  size="lg"
                  className="!bg-peach-dark !border-peach-dark hover:!bg-peach-dark/90"
                >
                  Entrar para o Early Access <ArrowRight className="size-4" />
                </Button>
                <Button
                  href="mailto:contato@maislegal.tech?subject=Conversa%20sobre%20PME"
                  variant="secondary"
                  size="lg"
                  className="!border-stone-300"
                >
                  Conversar com a equipe
                </Button>
              </div>

              <p className="mt-5 font-mono text-[11px] uppercase tracking-widest text-gray-500">
                Operador grátis · sem cartão · advogado externo de cortesia
              </p>
            </div>

            <div className="hidden lg:block">
              <MockupContratoColaborativo />
            </div>
          </div>
        </div>
      </section>

      {/* O QUE MUDA NA PRÁTICA · 3 mudanças com mini-visuais */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mb-12 max-w-[820px]">
            <p className="eyebrow mb-3 text-peach-dark">O que muda no dia a dia</p>
            <h2 className="h-soma mb-4">
              Três coisas que param de pesar, na hora que entra.
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Não é uma promessa de transformação genérica. É o que aparece no
              navegador na primeira semana e fica visível em todo contrato dali
              pra frente.
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
                      style={{ background: "var(--peach-bg)" }}
                    >
                      <Icon className="size-5 text-peach-dark" strokeWidth={1.6} />
                    </div>
                    <h3 className="mb-3 font-title text-2xl font-bold leading-snug text-gray-900 md:text-3xl">
                      {m.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-gray-700 md:text-base">
                      {m.body}
                    </p>
                  </div>

                  <div className={reverse ? "lg:order-1" : ""}>
                    <div
                      className="rounded-2xl border p-5 shadow-sm"
                      style={{
                        background: "white",
                        borderColor: "rgba(212,148,90,0.25)"
                      }}
                    >
                      {m.visual === "versao" && <VisualVersao />}
                      {m.visual === "advogado" && <VisualAdvogado />}
                      {m.visual === "soma" && <VisualSoma />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMO COMEÇA · Day 0 / 30 / 90 */}
      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mb-12 max-w-[820px]">
            <p className="eyebrow mb-3 text-peach-dark">Como começa</p>
            <h2 className="h-soma mb-4">
              Do primeiro contrato importado até o Drive virar backup.
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Você não precisa virar especialista em mais uma ferramenta. A
              equipe da +legal_ acompanha os primeiros passos, e em 90 dias o
              ambiente já é onde a conversa de contrato acontece.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {RAMP.map((step, i) => (
              <div
                key={step.when}
                className="rounded-2xl border border-stone-200 bg-white p-7"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className="flex size-9 items-center justify-center rounded-full font-mono text-[10px] font-bold text-white"
                    style={{ background: "var(--peach-dark)" }}
                  >
                    0{i + 1}
                  </div>
                  <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-peach-dark">
                    {step.when}
                  </p>
                </div>
                <h3 className="mb-3 font-title text-lg font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-gray-700">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUE ENTRAR AGORA · razões Early Access */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mb-12 max-w-[820px]">
            <p className="eyebrow mb-3 text-peach-dark">Por que entrar agora</p>
            <h2 className="h-soma mb-4">
              Os primeiros workspaces moldam a +legal_.
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              O Early Access para PMEs é mais que acesso antecipado. Quem entra
              agora ganha onboarding personalizado, advogado externo gratuito
              permanente, e voz direta nas decisões de produto que vêm pela
              frente.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {PORQUE_AGORA.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  className="rounded-2xl border-2 bg-white p-7"
                  style={{ borderColor: "rgba(212,148,90,0.3)" }}
                >
                  <div
                    className="mb-5 flex size-11 items-center justify-center rounded-xl"
                    style={{ background: "var(--peach-bg)" }}
                  >
                    <Icon className="size-5 text-peach-dark" strokeWidth={1.6} />
                  </div>
                  <h3 className="mb-3 font-title text-lg font-bold text-gray-900">
                    {r.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-gray-700">
                    {r.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA forte · próximo passo */}
      <section className="bg-brand text-white">
        <div className="container-soma py-16 md:py-20">
          <div className="mx-auto max-w-[860px] text-center">
            <p className="eyebrow-light mb-5">Próximo passo</p>
            <h2 className="mb-6 font-title text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              Você fecha o próximo contrato dentro da +legal_, ou conversa
              primeiro com a equipe.
            </h2>
            <p className="mx-auto mb-10 max-w-[640px] text-lg leading-relaxed text-white/80">
              O caminho rápido é entrar para o Early Access e começar a
              importar com a equipe acompanhando. O caminho cauteloso é uma
              conversa de 30 minutos para entender se faz sentido para o seu
              negócio antes de decidir.
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
                href="mailto:contato@maislegal.tech?subject=Conversa%20sobre%20PME"
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
   MOCKUPS · pelo ângulo da Sócia de PME
   ──────────────────────────────────────────────────────────────── */

// Hero · contrato em revisão colaborativa
function MockupContratoColaborativo() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-2xl"
        style={{ background: "var(--peach-bg)" }}
      />
      <svg
        viewBox="0 0 600 440"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full rounded-2xl border border-stone-200 bg-white shadow-xl"
      >
        {/* Toolbar */}
        <rect width="600" height="32" fill="var(--peach-dark)" />
        <circle cx="14" cy="16" r="3" fill="white" opacity="0.4" />
        <circle cx="26" cy="16" r="3" fill="white" opacity="0.4" />
        <circle cx="38" cy="16" r="3" fill="white" opacity="0.4" />
        <text x="56" y="20" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="white" opacity="0.9">
          +legal_ · Beta Serviços · Contrato Master
        </text>
        <circle cx="582" cy="16" r="9" fill="white" opacity="0.95" />
        <text x="582" y="20" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="700" fill="var(--peach-dark)" textAnchor="middle">
          MR
        </text>

        {/* Header do contrato */}
        <rect x="0" y="32" width="600" height="64" fill="#FFFAF5" />
        <text x="24" y="58" fontFamily="Barlow, sans-serif" fontSize="18" fontWeight="800" fill="#1A1A1A">
          Contrato Master · Outsourcing TI
        </text>
        <text x="24" y="76" fontFamily="Inter, sans-serif" fontSize="11" fill="#666">
          Beta Serviços × Acme Corp · R$ 240.000/ano · 24 meses
        </text>

        {/* Status pill */}
        <g transform="translate(484 50)">
          <rect width="92" height="24" rx="12" fill="white" stroke="var(--peach-dark)" strokeWidth="1.4" />
          <circle cx="14" cy="12" r="3.5" fill="var(--peach-dark)" />
          <text x="24" y="16" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fontWeight="700" fill="var(--peach-dark)" letterSpacing="0.5">
            v3 · EM REVISÃO
          </text>
        </g>

        {/* Avatares dos envolvidos */}
        <g transform="translate(24 116)">
          <text x="0" y="0" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="#999" letterSpacing="1.2">
            QUEM ESTÁ NESTE CONTRATO
          </text>

          {/* Você (Sócia PME) */}
          <g transform="translate(0 14)">
            <circle cx="12" cy="12" r="11" fill="var(--peach-dark)" opacity="0.15" />
            <text x="12" y="15" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="700" fill="var(--peach-dark)" textAnchor="middle">MR</text>
            <text x="30" y="11" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="#1A1A1A">Mariana R.</text>
            <text x="30" y="22" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fontWeight="600" fill="#999" letterSpacing="0.3">VOCÊ · BETA SERVIÇOS</text>
          </g>

          {/* Cliente Acme */}
          <g transform="translate(170 14)">
            <circle cx="12" cy="12" r="11" fill="var(--brand)" opacity="0.15" />
            <text x="12" y="15" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="700" fill="var(--brand)" textAnchor="middle">PA</text>
            <text x="30" y="11" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="#1A1A1A">Pedro A.</text>
            <text x="30" y="22" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fontWeight="600" fill="#999" letterSpacing="0.3">CLIENTE · ACME CORP</text>
          </g>

          {/* Advogado externo */}
          <g transform="translate(336 14)">
            <circle cx="12" cy="12" r="11" fill="white" stroke="#999" strokeWidth="1.2" strokeDasharray="2 2" />
            <text x="12" y="15" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="700" fill="#666" textAnchor="middle">JS</text>
            <text x="30" y="11" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="#1A1A1A">Júlia S.</text>
            <text x="30" y="22" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fontWeight="600" fill="#666" letterSpacing="0.3">EXTERNO · GRATUITO</text>
          </g>
        </g>

        {/* Texto do contrato com cláusula em destaque */}
        <g transform="translate(24 180)">
          <text x="0" y="0" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="#999" letterSpacing="1.2">
            CLÁUSULA 4.2 · NÍVEL DE SERVIÇO
          </text>

          {/* Linhas de texto */}
          <rect x="0" y="14" width="430" height="6" rx="2" fill="#E8E8E4" />
          <rect x="0" y="26" width="380" height="6" rx="2" fill="#E8E8E4" />

          {/* Cláusula em destaque */}
          <rect x="0" y="40" width="430" height="36" rx="4" fill="#FFF8F0" stroke="var(--peach-dark)" strokeWidth="1.2" />
          <rect x="0" y="40" width="3" height="36" fill="var(--peach-dark)" />
          <rect x="14" y="50" width="380" height="6" rx="2" fill="var(--peach-dark)" opacity="0.45" />
          <rect x="14" y="62" width="320" height="6" rx="2" fill="var(--peach-dark)" opacity="0.45" />

          <rect x="0" y="84" width="410" height="6" rx="2" fill="#E8E8E4" />
          <rect x="0" y="96" width="350" height="6" rx="2" fill="#E8E8E4" />
        </g>

        {/* Comentário inline */}
        <g transform="translate(440 220)">
          <rect width="138" height="84" rx="6" fill="white" stroke="var(--peach-dark)" strokeWidth="1.2" />
          <rect width="3" height="84" fill="var(--peach-dark)" />
          <g transform="translate(12 14)">
            <circle r="6" fill="var(--brand)" opacity="0.18" />
            <text y="3" fontFamily="Inter, sans-serif" fontSize="7" fontWeight="700" fill="var(--brand)" textAnchor="middle">PA</text>
          </g>
          <text x="26" y="18" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="700" fill="#1A1A1A">Pedro · Acme</text>
          <text x="26" y="30" fontFamily="JetBrains Mono, monospace" fontSize="6.5" fill="#999" letterSpacing="0.3">HÁ 3 MIN</text>
          <text x="12" y="48" fontFamily="Inter, sans-serif" fontSize="9" fill="#444">SLA de 99,5% está</text>
          <text x="12" y="60" fontFamily="Inter, sans-serif" fontSize="9" fill="#444">acima do nosso padrão.</text>
          <text x="12" y="72" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="700" fill="var(--peach-dark)">Pode revisar?</text>
        </g>

        {/* Histórico de versões */}
        <g transform="translate(24 320)">
          <text x="0" y="0" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="#999" letterSpacing="1.2">
            HISTÓRICO
          </text>
          <line x1="0" y1="12" x2="552" y2="12" stroke="#F0F0EC" strokeWidth="1" />

          {[
            { v: "v3", who: "Júlia S. revisou cláusula 4.2", date: "agora", color: "var(--peach-dark)" },
            { v: "v2", who: "Pedro A. solicitou ajuste no SLA", date: "ontem", color: "var(--brand)" },
            { v: "v1", who: "Mariana R. enviou rascunho inicial", date: "há 4 dias", color: "var(--peach-dark)" }
          ].map((h, i) => (
            <g key={i} transform={`translate(0 ${24 + i * 22})`}>
              <text x="0" y="0" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill={h.color} letterSpacing="0.4">{h.v}</text>
              <text x="34" y="0" fontFamily="Inter, sans-serif" fontSize="10" fill="#444">{h.who}</text>
              <text x="552" y="0" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#999" letterSpacing="0.3" textAnchor="end">{h.date.toUpperCase()}</text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

// Mudança 1 · Mesma versão pra todos
function VisualVersao() {
  return (
    <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full">
      {/* Sem +legal_ · Drive caótico */}
      <g transform="translate(20 20)">
        <text x="0" y="0" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="#999" letterSpacing="1.2">SEM +LEGAL_</text>
        <rect x="0" y="10" width="200" height="120" rx="6" fill="#FAFAF8" stroke="#E8E8E4" />
        {[
          "Contrato_v1.pdf",
          "Contrato_v2_revisado.pdf",
          "Contrato_FINAL.pdf",
          "Contrato_FINAL_REAL.pdf",
          "Contrato_FINAL_REAL_v2.pdf"
        ].map((f, i) => (
          <g key={i} transform={`translate(12 ${24 + i * 18})`}>
            <rect width="10" height="12" rx="1" fill="#999" opacity="0.4" />
            <text x="18" y="10" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill="#666">{f}</text>
          </g>
        ))}
        <text x="100" y="158" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="#dc2626" textAnchor="middle" letterSpacing="0.5">
          QUAL É A VERSÃO VÁLIDA?
        </text>
      </g>

      {/* Com +legal_ · Ambiente único */}
      <g transform="translate(260 20)">
        <text x="0" y="0" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="var(--peach-dark)" letterSpacing="1.2">COM +LEGAL_</text>
        <rect x="0" y="10" width="200" height="120" rx="6" fill="white" stroke="var(--peach-dark)" strokeWidth="1.4" />

        {/* Documento único */}
        <rect x="14" y="24" width="172" height="44" rx="4" fill="#FFF8F0" stroke="var(--peach-dark)" strokeWidth="1" />
        <rect x="14" y="24" width="3" height="44" fill="var(--peach-dark)" />
        <text x="24" y="40" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" fill="#1A1A1A">Contrato Master</text>
        <text x="24" y="54" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fontWeight="700" fill="var(--peach-dark)" letterSpacing="0.4">v3 · ATUAL · EM REVISÃO</text>

        {/* Atividade dos 2 lados */}
        <g transform="translate(14 78)">
          <text x="0" y="0" fontFamily="JetBrains Mono, monospace" fontSize="6.5" fontWeight="600" fill="#999" letterSpacing="0.5">EDITANDO AGORA</text>
          <g transform="translate(0 14)">
            <circle cx="8" cy="8" r="7" fill="var(--peach-dark)" opacity="0.2" />
            <text x="8" y="11" fontFamily="Inter, sans-serif" fontSize="7" fontWeight="700" fill="var(--peach-dark)" textAnchor="middle">MR</text>
          </g>
          <g transform="translate(20 14)">
            <circle cx="8" cy="8" r="7" fill="var(--brand)" opacity="0.2" />
            <text x="8" y="11" fontFamily="Inter, sans-serif" fontSize="7" fontWeight="700" fill="var(--brand)" textAnchor="middle">PA</text>
          </g>
          <text x="40" y="12" fontFamily="Inter, sans-serif" fontSize="9" fill="#444">Você + Acme Corp</text>
        </g>

        <text x="100" y="158" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="var(--peach-dark)" textAnchor="middle" letterSpacing="0.5">
          UMA VERSÃO. DOIS LADOS.
        </text>
      </g>

      {/* Footer */}
      <text x="240" y="246" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill="#666" textAnchor="middle" letterSpacing="1.5">
        VERSÃO A CONTRA VERSÃO B DEIXA DE EXISTIR
      </text>
    </svg>
  );
}

// Mudança 2 · Advogado externo dentro
function VisualAdvogado() {
  return (
    <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full">
      {/* Header */}
      <text x="20" y="22" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="#999" letterSpacing="1.2">
        CONVIDADOS DESTE CONTRATO
      </text>

      {/* 3 cards de pessoas */}
      {[
        {
          x: 20,
          name: "Mariana R.",
          role: "Sócia · Beta Serviços",
          badge: "VOCÊ",
          badgeColor: "var(--peach-dark)",
          avatar: "MR",
          bg: "var(--peach-dark)"
        },
        {
          x: 170,
          name: "Pedro A.",
          role: "Cliente · Acme Corp",
          badge: "EDITOR",
          badgeColor: "var(--brand)",
          avatar: "PA",
          bg: "var(--brand)"
        },
        {
          x: 320,
          name: "Júlia S.",
          role: "Advogada externa",
          badge: "GRATUITO",
          badgeColor: "#666",
          avatar: "JS",
          bg: "#999",
          dashed: true
        }
      ].map((p, i) => (
        <g key={i} transform={`translate(${p.x} 36)`}>
          <rect
            width="140"
            height="120"
            rx="8"
            fill="white"
            stroke={p.dashed ? "#999" : p.badgeColor}
            strokeWidth={p.dashed ? "1.2" : "1.4"}
            strokeDasharray={p.dashed ? "3 3" : "0"}
          />
          {/* Avatar */}
          <g transform="translate(70 36)">
            <circle r="20" fill={p.bg} opacity={p.dashed ? 0.12 : 0.16} />
            <text y="6" fontFamily="Barlow, sans-serif" fontSize="14" fontWeight="800" fill={p.bg} textAnchor="middle">
              {p.avatar}
            </text>
          </g>
          {/* Nome */}
          <text x="70" y="78" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="#1A1A1A" textAnchor="middle">
            {p.name}
          </text>
          <text x="70" y="92" fontFamily="Inter, sans-serif" fontSize="8.5" fill="#666" textAnchor="middle">
            {p.role}
          </text>
          {/* Badge */}
          <g transform="translate(70 102)">
            <rect x="-32" y="0" width="64" height="14" rx="3" fill={p.badgeColor} opacity="0.14" />
            <text y="10" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fontWeight="700" fill={p.badgeColor} textAnchor="middle" letterSpacing="0.5">
              {p.badge}
            </text>
          </g>
        </g>
      ))}

      {/* Linhas de conexão */}
      <line x1="160" y1="96" x2="170" y2="96" stroke="#E8E8E4" strokeWidth="1.4" />
      <line x1="310" y1="96" x2="320" y2="96" stroke="#E8E8E4" strokeWidth="1.4" />

      {/* Footer */}
      <text x="240" y="190" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill="#666" textAnchor="middle" letterSpacing="1.5">
        ADVOGADO REVISA DENTRO. SEM EXPORT, SEM PDF DE VOLTA.
      </text>

      {/* Sub-info */}
      <g transform="translate(20 218)">
        <rect width="440" height="40" rx="6" fill="#FFFAF5" stroke="rgba(212,148,90,0.3)" strokeWidth="1" />
        <text x="14" y="16" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="var(--peach-dark)" letterSpacing="0.6">
          O QUE ELE VÊ
        </text>
        <text x="14" y="30" fontFamily="Inter, sans-serif" fontSize="9.5" fill="#444">
          Contrato atual · histórico de versões · comentários · obrigações registradas
        </text>
      </g>
    </svg>
  );
}

// Mudança 3 · SOMA acoplada
function VisualSoma() {
  return (
    <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full">
      {/* Painel +legal_ no topo */}
      <g transform="translate(20 20)">
        <rect width="440" height="80" rx="8" fill="white" stroke="#E8E8E4" strokeWidth="1" />
        <rect width="440" height="20" rx="8" fill="var(--peach-bg)" />
        <rect y="12" width="440" height="8" fill="var(--peach-bg)" />
        <text x="14" y="14" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="var(--peach-dark)" letterSpacing="1">
          AMBIENTE +LEGAL_ · CONTRATO BETA × ACME
        </text>

        <text x="14" y="40" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="#1A1A1A">
          Disputa sobre cláusula 4.2 (SLA)
        </text>
        <text x="14" y="56" fontFamily="Inter, sans-serif" fontSize="10" fill="#666">
          Beta entrega 99,2% · Acme exige 99,5% · valor da causa R$ 18 mil
        </text>

        {/* Botão fictício */}
        <g transform="translate(316 38)">
          <rect width="110" height="28" rx="4" fill="var(--soma)" />
          <text x="55" y="17" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" fill="white" textAnchor="middle">
            Escalar para SOMA
          </text>
        </g>
      </g>

      {/* Conexão */}
      <line x1="240" y1="100" x2="240" y2="118" stroke="var(--soma)" strokeWidth="2" />
      <polyline points="234,114 240,124 246,114" fill="none" stroke="var(--soma)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* Painel SOMA embaixo */}
      <g transform="translate(20 132)">
        <rect width="440" height="100" rx="8" fill="white" stroke="var(--soma)" strokeWidth="1.4" />
        <rect width="440" height="22" rx="8" fill="var(--soma)" />
        <rect y="14" width="440" height="8" fill="var(--soma)" />
        <text x="14" y="15" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="white" letterSpacing="1">
          SOMA · MEDIAÇÃO PRIVADA
        </text>

        <text x="14" y="42" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="#1A1A1A">
          Procedimento aberto · 3 mediadores propostos
        </text>

        {/* Lista de mediadores */}
        <g transform="translate(14 54)">
          {[
            { name: "Carla M.", spec: "TI · 12 anos" },
            { name: "Renato V.", spec: "Serviços · 8 anos" },
            { name: "Aline P.", spec: "TI · 15 anos" }
          ].map((m, i) => (
            <g key={i} transform={`translate(${i * 142} 0)`}>
              <rect width="130" height="34" rx="4" fill="var(--soma-bg)" stroke="rgba(184,97,78,0.25)" />
              <circle cx="14" cy="17" r="6" fill="var(--soma)" opacity="0.18" />
              <text x="14" y="20" fontFamily="Inter, sans-serif" fontSize="7.5" fontWeight="700" fill="var(--soma)" textAnchor="middle">{m.name.split(" ")[0][0]}{m.name.split(" ")[1][0]}</text>
              <text x="26" y="14" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="700" fill="#1A1A1A">{m.name}</text>
              <text x="26" y="26" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="#666" letterSpacing="0.3">{m.spec.toUpperCase()}</text>
            </g>
          ))}
        </g>
      </g>

      {/* Footer */}
      <text x="240" y="262" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill="#666" textAnchor="middle" letterSpacing="1.5">
        RESOLUÇÃO PRIVADA · SEM FILA JUDICIAL · SEM QUEIMAR O CLIENTE
      </text>
    </svg>
  );
}
