import {
  ArrowRight,
  FileSearch,
  Layers,
  Send,
  ShieldCheck,
  Calendar,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/base/Button";
import { HeroLogoBg } from "@/components/base/HeroLogoBg";

// 3 mudanças concretas no dia da sócia/sócio de escritório
const MUDANCAS = [
  {
    icon: FileSearch,
    title: "Histórico íntegro, não reconstruído",
    body: [
      "Você abre o caso e o histórico já está pronto. Cada versão do contrato, cada comentário trocado, cada aditivo, <strong class=\"font-semibold text-gray-900\">registrado e auditável</strong>.",
      "Em vez de gastar 3 semanas reconstruindo o que aconteceu, você lê o que aconteceu."
    ],
    closer: "Histórico íntegro. Sem reconstrução.",
    visual: "historico"
  },
  {
    icon: Layers,
    title: "Vista única dos clientes ativos",
    body: [
      "Em vez de pular entre sistemas diferentes para cada cliente, todos os contratos dos clientes que você atende ficam em <strong class=\"font-semibold text-gray-900\">uma só tela</strong>, com status, prazos e obrigações visíveis.",
      "O cliente entra como visitante, gratuito."
    ],
    closer: "Vista única do escritório.",
    visual: "vista"
  },
  {
    icon: Send,
    title: "Dossiê pronto para câmara",
    body: [
      "Quando o caso vira arbitragem ou mediação, o dossiê do contrato exporta direto para SOMA em <strong class=\"font-semibold text-gray-900\">formato aceito pela câmara</strong>.",
      "As 11 versões em drives diferentes que você gastaria semanas montando já estão consolidadas."
    ],
    closer: "Dossiê pronto antes da câmara abrir.",
    visual: "dossie"
  }
];

// Day 0 → 30 → 90 do onboarding para escritório
const RAMP = [
  {
    when: "Dia 0",
    title: "Onboarding com curadoria",
    body: "A equipe da +legal_ configura o workspace do escritório, importa os contratos dos primeiros clientes, e cadastra os advogados externos como visitantes gratuitos."
  },
  {
    when: "Dia 30",
    title: "Próximo cliente entra como editor convidado",
    body: "O próximo cliente que você atende abre conta como editor convidado. Os contratos passam a viver no ambiente desde o rascunho, com histórico íntegro registrado em tempo real."
  },
  {
    when: "Dia 90",
    title: "Estratégia, não investigação.",
    body: "Quando o caso chega, o histórico está pronto. Você abre o cliente, vê os contratos ativos, identifica a cláusula em discussão, e vai direto para a estratégia, em vez de investigar primeiro."
  }
];

// 3 motivos específicos de Early Access para escritórios
const PORQUE_AGORA = [
  {
    icon: ShieldCheck,
    title: "Preço diferenciado por relacionamentos ativos",
    body: "R$ 250 por operador. O modelo considera <strong class=\"font-semibold text-gray-900\">relacionamentos ativos</strong> e credenciais externas como especialização em arbitragem e registros na OAB."
  },
  {
    icon: Calendar,
    title: "Cliente entra gratuito",
    body: "O cliente que você atende entra como editor convidado, sem custo adicional. Cada workspace que você cria vira porta de entrada para o próximo cliente do seu cliente."
  },
  {
    icon: MessageSquare,
    title: "Canal direto com os fundadores",
    body: "Os primeiros escritórios <strong class=\"font-semibold text-gray-900\">moldam a +legal_</strong>. Funcionalidades de contencioso e consultivo vêm pela frente, e seu feedback chega direto nos fundadores."
  }
];

export default function ParaAdvogadosPage() {
  return (
    <>
      {/* HERO · fala diretamente com a sócia/sócio de escritório */}
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
                  Para você que conduz disputas contratuais.
                </span>
              </div>

              <h1 className="mb-6 font-title text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl lg:text-[52px] leading-[1.06]">
                Você abre o caso e o histórico está pronto. Não reconstrói por 3 semanas.
              </h1>

              <p className="mb-3 text-lg leading-relaxed text-gray-700 md:text-xl">
                A +legal_ é o ambiente onde os contratos dos seus clientes vivem desde o rascunho, com cada versão, comentário e aditivo registrado e auditável.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-gray-700 md:text-xl">
                <strong className="font-semibold text-gray-900">Estratégia, não investigação.</strong>
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  href="mailto:contato@maislegal.tech?subject=Conversa%20com%20escrit%C3%B3rio"
                  variant="primary"
                  size="lg"
                  className="!bg-soma !border-soma hover:!bg-soma/90"
                >
                  Falar com a equipe <ArrowRight className="size-4" />
                </Button>
                <Button
                  href="/early-access"
                  variant="secondary"
                  size="lg"
                  className="!border-stone-300"
                >
                  Early Access individual
                </Button>
              </div>

              <p className="mt-5 font-mono text-[11px] uppercase tracking-widest text-gray-500">
                Preço diferenciado · cliente gratuito · onboarding com curadoria
              </p>
            </div>

            <div className="hidden lg:block">
              <MockupVistaEscritorio />
            </div>
          </div>
        </div>
      </section>

      {/* O QUE MUDA NA PRÁTICA · 3 mudanças com mini-visuais */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mb-12 max-w-[820px]">
            <p className="eyebrow mb-3 text-soma">O que muda no escritório</p>
            <h2 className="h-soma mb-4">
              Três semanas de reconstrução saem. Histórico íntegro entra.
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Histórico íntegro de cada cliente. Vista única do escritório. Dossiê pronto antes da câmara abrir.
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
                    <div className="space-y-3 text-[15px] leading-relaxed text-gray-700 md:text-base">
                      {(Array.isArray(m.body) ? m.body : [m.body]).map((line, j) => (
                        <p key={j} dangerouslySetInnerHTML={{ __html: line }} />
                      ))}
                    </div>
                    {m.closer && (
                      <p className="mt-3 text-[15px] font-bold text-gray-900 md:text-base">
                        {m.closer}
                      </p>
                    )}
                  </div>

                  <div className={reverse ? "lg:order-1" : ""}>
                    <div
                      className="rounded-2xl border p-5 shadow-sm"
                      style={{
                        background: "white",
                        borderColor: "rgba(184,97,78,0.25)"
                      }}
                    >
                      {m.visual === "historico" && <VisualHistoricoIntegro />}
                      {m.visual === "vista" && <VisualVistaCliente />}
                      {m.visual === "dossie" && <VisualDossieSoma />}
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
            <p className="eyebrow mb-3 text-soma">Como começa</p>
            <h2 className="h-soma mb-4">
              Do primeiro cliente importado até o caso novo chegar com histórico íntegro.
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              O escritório não vira beta-tester. A equipe da +legal_ acompanha
              o setup, importa os contratos dos primeiros clientes, e em 90 dias
              o ambiente já é onde a documentação acontece.
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
                    style={{ background: "var(--soma)" }}
                  >
                    0{i + 1}
                  </div>
                  <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-soma">
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
            <p className="eyebrow mb-3 text-soma">Por que entrar agora</p>
            <h2 className="h-soma mb-4">
              Os primeiros escritórios moldam a +legal_.
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              O Early Access para escritórios é mais que acesso antecipado. Quem entra agora ganha preço diferenciado por relacionamentos ativos, cliente gratuito permanente, e canal direto com os fundadores.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {PORQUE_AGORA.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  className="rounded-2xl border-2 bg-white p-7"
                  style={{ borderColor: "rgba(184,97,78,0.3)" }}
                >
                  <div
                    className="mb-5 flex size-11 items-center justify-center rounded-xl"
                    style={{ background: "var(--soma-bg)" }}
                  >
                    <Icon className="size-5 text-soma" strokeWidth={1.6} />
                  </div>
                  <h3 className="mb-3 font-title text-lg font-bold text-gray-900">
                    {r.title}
                  </h3>
                  <p
                    className="text-[14px] leading-relaxed text-gray-700"
                    dangerouslySetInnerHTML={{ __html: r.body }}
                  />
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
              Você abre o caso com histórico íntegro. Ou conversa primeiro com a equipe.
            </h2>
            <p className="mx-auto mb-10 max-w-[640px] text-lg leading-relaxed text-white/80">
              O caminho rápido é uma conversa de 30 minutos para entender o modelo do escritório, preço diferenciado e onboarding com curadoria. O cauteloso é entrar como Early Access individual e testar com um cliente piloto.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Button
                href="mailto:contato@maislegal.tech?subject=Conversa%20com%20escrit%C3%B3rio"
                variant="primary"
                size="lg"
                className="!bg-white !text-brand hover:!bg-stone-100"
              >
                Falar com a equipe <ArrowRight className="size-4" />
              </Button>
              <Button
                href="/early-access"
                variant="secondary"
                size="lg"
                className="!bg-transparent !border-white/40 !text-white hover:!bg-white/10 hover:!border-white"
              >
                Early Access individual
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
   MOCKUPS · pelo ângulo da sócia/sócio de escritório
   ──────────────────────────────────────────────────────────────── */

// Hero · vista de escritório com múltiplos clientes
function MockupVistaEscritorio() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-2xl"
        style={{ background: "var(--soma-bg)" }}
      />
      <svg
        viewBox="0 0 600 440"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full rounded-2xl border border-stone-200 bg-white shadow-xl"
        aria-hidden="true">
        {/* Toolbar */}
        <rect width="600" height="32" fill="var(--soma)" />
        <circle cx="14" cy="16" r="3" fill="white" opacity="0.4" />
        <circle cx="26" cy="16" r="3" fill="white" opacity="0.4" />
        <circle cx="38" cy="16" r="3" fill="white" opacity="0.4" />
        <text x="56" y="20" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="white" opacity="0.9">
          +legal_ · Sznifer & Associados · Vista do escritório
        </text>
        <circle cx="582" cy="16" r="9" fill="white" opacity="0.95" />
        <text x="582" y="20" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="700" fill="var(--soma)" textAnchor="middle">
          AS
        </text>

        {/* Sidebar com clientes */}
        <rect x="0" y="32" width="200" height="408" fill="#FAFAF8" />
        <line x1="200" y1="32" x2="200" y2="440" stroke="#E8E8E4" strokeWidth="1" />

        <text x="14" y="56" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="#999" letterSpacing="1">
          12 CLIENTES · 47 CONTRATOS
        </text>

        {[
          { name: "Beta Serviços", contracts: 3, status: "atenção", color: "var(--peach-dark)", focus: true },
          { name: "Gamma Indústria", contracts: 5, status: "em dia", color: "var(--brand)" },
          { name: "Delta Tech", contracts: 2, status: "disputa", color: "var(--soma)" },
          { name: "Eta Seguros", contracts: 4, status: "em dia", color: "var(--brand)" },
          { name: "Theta Agência", contracts: 2, status: "em dia", color: "var(--brand)" },
          { name: "Kappa Logística", contracts: 1, status: "em dia", color: "var(--brand)" }
        ].map((c, i) => (
          <g key={c.name} transform={`translate(0 ${72 + i * 42})`}>
            {c.focus && <rect x="6" y="0" width="188" height="36" rx="4" fill="white" stroke="var(--soma)" strokeWidth="1.4" />}
            <rect x="14" y="6" width="3" height="24" rx="1.5" fill={c.color} />
            <text x="24" y="14" fontFamily="Inter, sans-serif" fontSize="11" fontWeight={c.focus ? "700" : "600"} fill="#1A1A1A">
              {c.name}
            </text>
            <text x="24" y="28" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fontWeight="600" fill="#999" letterSpacing="0.3">
              {c.contracts} CONTRATOS · {c.status.toUpperCase()}
            </text>
          </g>
        ))}

        {/* Header da vista */}
        <text x="220" y="60" fontFamily="Barlow, sans-serif" fontSize="20" fontWeight="800" fill="#1A1A1A">
          Beta Serviços
        </text>
        <text x="220" y="78" fontFamily="Inter, sans-serif" fontSize="10.5" fill="#888">
          3 contratos ativos · 1 em renovação · próximo prazo D-12
        </text>

        {/* Busca semântica ativa */}
        <g transform="translate(220 96)">
          <rect width="362" height="32" rx="6" fill="white" stroke="var(--soma)" strokeWidth="1.4" />
          <g transform="translate(12 16)">
            <circle r="6" fill="none" stroke="var(--soma)" strokeWidth="1.4" />
            <line x1="4" y1="4" x2="8" y2="8" stroke="var(--soma)" strokeWidth="1.4" />
          </g>
          <text x="28" y="20" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#1A1A1A">
            cláusula 4.2 SLA
          </text>
          <g transform="translate(316 8)">
            <rect width="36" height="16" rx="3" fill="var(--soma)" opacity="0.14" />
            <text x="18" y="11" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="var(--soma)" textAnchor="middle" letterSpacing="0.4">
              3 HITS
            </text>
          </g>
        </g>

        {/* Resultados */}
        <text x="220" y="148" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="#999" letterSpacing="1">
          ENCONTRADO EM
        </text>

        {[
          { name: "Master Outsourcing TI", date: "v3 · 12 mar", note: "SLA 99,5% (em discussão)", color: "var(--peach-dark)" },
          { name: "Manutenção Software", date: "v2 · 03 fev", note: "SLA 98% (vigente)", color: "var(--brand)" },
          { name: "Consultoria SLA Add", date: "v1 · 18 jan", note: "SLA 99% (vigente)", color: "var(--brand)" }
        ].map((r, i) => (
          <g key={i} transform={`translate(220 ${164 + i * 50})`}>
            <rect width="362" height="42" rx="6" fill="white" stroke="#E8E8E4" />
            <rect width="3" height="42" rx="1.5" fill={r.color} />
            <text x="14" y="14" fontFamily="Inter, sans-serif" fontSize="10.5" fontWeight="700" fill="#1A1A1A">
              {r.name}
            </text>
            <text x="14" y="26" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fontWeight="600" fill="#999" letterSpacing="0.3">
              {r.date.toUpperCase()}
            </text>
            <text x="14" y="38" fontFamily="Inter, sans-serif" fontSize="9" fill="#666">
              {r.note}
            </text>
            <text x="348" y="24" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill={r.color} textAnchor="end" letterSpacing="0.4">
              CL. 4.2
            </text>
          </g>
        ))}

        {/* Footer · resumo */}
        <g transform="translate(220 320)">
          <line x1="0" y1="0" x2="362" y2="0" stroke="#F0F0EC" strokeWidth="1" />
          <text x="0" y="18" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="#999" letterSpacing="1">
            HISTÓRICO COMPLETO DESTE CLIENTE
          </text>
          <text x="0" y="38" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#1A1A1A">
            32 versões · 84 comentários · 11 aditivos · 3 obrigações em curso
          </text>
        </g>
      </svg>
    </div>
  );
}

// Mudança 1 · Histórico íntegro
function VisualHistoricoIntegro() {
  return (
    <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full"aria-hidden="true">
      {/* Header */}
      <text x="20" y="20" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="#999" letterSpacing="1.2">
        HISTÓRICO DO CONTRATO · BETA × ACME
      </text>

      {/* Timeline vertical */}
      <line x1="56" y1="40" x2="56" y2="222" stroke="#E8E8E4" strokeWidth="2" />

      {[
        { y: 40, kind: "v", label: "v1 · rascunho enviado", who: "Mariana R.", date: "08 jan", color: "var(--soma)" },
        { y: 76, kind: "msg", label: "Comentário · cláusula 8.2", who: "Pedro A.", date: "12 jan", color: "var(--brand)" },
        { y: 112, kind: "v", label: "v2 · ajustes incorporados", who: "Mariana R.", date: "15 jan", color: "var(--soma)" },
        { y: 148, kind: "sig", label: "Assinatura digital · ICP-Brasil", who: "Ambas as partes", date: "18 jan", color: "#10b981" },
        { y: 184, kind: "add", label: "Aditivo 01 · prorrogação 90d", who: "Júlia S. (advogada externa)", date: "14 fev", color: "var(--soma)" },
        { y: 220, kind: "msg", label: "Comentário · cláusula 4.2 (SLA)", who: "Pedro A.", date: "21 fev", color: "var(--brand)" }
      ].map((item, i) => (
        <g key={i} transform={`translate(0 ${item.y})`}>
          {/* Ponto */}
          <circle cx="56" cy="0" r="7" fill="white" stroke={item.color} strokeWidth="1.6" />
          {item.kind === "sig" && <circle cx="56" cy="0" r="3.5" fill={item.color} />}

          {/* Conteúdo */}
          <text x="76" y="-2" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="#1A1A1A">
            {item.label}
          </text>
          <text x="76" y="12" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fontWeight="600" fill="#999" letterSpacing="0.3">
            {item.date.toUpperCase()} · {item.who}
          </text>
        </g>
      ))}

      {/* Footer */}
      <text x="240" y="262" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill="#666" textAnchor="middle" letterSpacing="1.5">
        VOCÊ LÊ O QUE ACONTECEU. NÃO RECONSTRÓI.
      </text>
    </svg>
  );
}

// Mudança 2 · Vista do cliente
function VisualVistaCliente() {
  return (
    <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full"aria-hidden="true">
      {/* Card principal · cliente */}
      <g transform="translate(20 20)">
        <rect width="440" height="64" rx="8" fill="white" stroke="var(--soma)" strokeWidth="1.4" />
        <rect width="3" height="64" rx="1.5" fill="var(--soma)" />

        <text x="20" y="22" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="#999" letterSpacing="1">
          CLIENTE · CONSULTIVO + CONTENCIOSO
        </text>
        <text x="20" y="42" fontFamily="Barlow, sans-serif" fontSize="16" fontWeight="800" fill="#1A1A1A">
          Beta Serviços
        </text>
        <text x="20" y="56" fontFamily="Inter, sans-serif" fontSize="10" fill="#666">
          desde jan 2024 · 3 contratos ativos · 1 em renovação
        </text>

        {/* Contadores à direita */}
        <g transform="translate(280 18)">
          <text x="0" y="0" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="600" fill="#999" letterSpacing="0.5">VERSÕES</text>
          <text x="0" y="20" fontFamily="Barlow, sans-serif" fontSize="18" fontWeight="800" fill="var(--soma)">32</text>
        </g>
        <g transform="translate(330 18)">
          <text x="0" y="0" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="600" fill="#999" letterSpacing="0.5">ADITIVOS</text>
          <text x="0" y="20" fontFamily="Barlow, sans-serif" fontSize="18" fontWeight="800" fill="var(--soma)">11</text>
        </g>
        <g transform="translate(390 18)">
          <text x="0" y="0" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="600" fill="#999" letterSpacing="0.5">OBRIGAÇÕES</text>
          <text x="0" y="20" fontFamily="Barlow, sans-serif" fontSize="18" fontWeight="800" fill="var(--soma)">8</text>
        </g>
      </g>

      {/* Sub-cards · contratos ativos */}
      {[
        {
          name: "Master Outsourcing TI",
          status: "ATENÇÃO · D-12",
          value: "R$ 240 mil/ano",
          color: "var(--peach-dark)",
          x: 20
        },
        {
          name: "Manutenção Software",
          status: "EM DIA",
          value: "R$ 96 mil/ano",
          color: "var(--brand)",
          x: 168
        },
        {
          name: "Consultoria SLA",
          status: "EM DIA",
          value: "R$ 48 mil/ano",
          color: "var(--brand)",
          x: 316
        }
      ].map((c, i) => (
        <g key={i} transform={`translate(${c.x} 100)`}>
          <rect width="140" height="84" rx="8" fill="#FFFAF7" stroke="rgba(184,97,78,0.25)" strokeWidth="1" />
          <rect width="3" height="84" fill={c.color} />
          <text x="14" y="22" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fontWeight="700" fill={c.color} letterSpacing="0.5">
            {c.status}
          </text>
          <text x="14" y="44" fontFamily="Inter, sans-serif" fontSize="10.5" fontWeight="700" fill="#1A1A1A">
            {c.name}
          </text>
          <text x="14" y="64" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="600" fill="#999" letterSpacing="0.4">
            VALOR ANUAL
          </text>
          <text x="14" y="76" fontFamily="Barlow, sans-serif" fontSize="11" fontWeight="800" fill="#1A1A1A">
            {c.value}
          </text>
        </g>
      ))}

      {/* Sub-info */}
      <g transform="translate(20 204)">
        <rect width="440" height="42" rx="6" fill="var(--soma-bg)" stroke="rgba(184,97,78,0.25)" strokeWidth="1" />
        <text x="14" y="18" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="var(--soma)" letterSpacing="0.6">
          O QUE O CLIENTE VÊ
        </text>
        <text x="14" y="32" fontFamily="Inter, sans-serif" fontSize="9.5" fill="#444">
          O mesmo painel que você. Entra como editor convidado, gratuito permanente.
        </text>
      </g>

      {/* Footer */}
      <text x="240" y="266" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill="#666" textAnchor="middle" letterSpacing="1.5">
        ABRA O CLIENTE. VEJA TUDO.
      </text>
    </svg>
  );
}

// Mudança 3 · Dossiê pronto para SOMA
function VisualDossieSoma() {
  return (
    <svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full"aria-hidden="true">
      {/* Card · dossiê pronto */}
      <g transform="translate(20 20)">
        <rect width="440" height="160" rx="8" fill="white" stroke="var(--soma)" strokeWidth="1.4" />
        <rect width="440" height="22" rx="8" fill="var(--soma)" />
        <rect y="14" width="440" height="8" fill="var(--soma)" />
        <text x="14" y="15" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="white" letterSpacing="1">
          DOSSIÊ · CONTRATO BETA × ACME · DISPUTA SLA
        </text>

        {/* Contadores */}
        <g transform="translate(20 38)">
          {[
            { label: "VERSÕES", value: "32" },
            { label: "COMENTÁRIOS", value: "84" },
            { label: "ADITIVOS", value: "11" },
            { label: "DESCUMPRIMENTOS", value: "3" }
          ].map((s, i) => (
            <g key={i} transform={`translate(${i * 100} 0)`}>
              <text x="0" y="0" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="600" fill="#999" letterSpacing="0.5">
                {s.label}
              </text>
              <text x="0" y="22" fontFamily="Barlow, sans-serif" fontSize="22" fontWeight="800" fill="var(--soma)">
                {s.value}
              </text>
            </g>
          ))}
        </g>

        {/* Linha separadora */}
        <line x1="20" y1="92" x2="420" y2="92" stroke="#F0F0EC" strokeWidth="1" />

        {/* Conteúdo do dossiê */}
        <g transform="translate(20 104)">
          <text x="0" y="0" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="700" fill="#999" letterSpacing="0.6">
            CONTEÚDO PRONTO PARA EXPORTAÇÃO
          </text>
          <g transform="translate(0 14)">
            {[
              "Linha do tempo completa do contrato",
              "Identificação da versão final assinada",
              "Cada proposta, contraproposta e aprovação",
              "Registro de obrigações cumpridas e descumpridas"
            ].map((item, i) => (
              <g key={i} transform={`translate(${(i % 2) * 220} ${Math.floor(i / 2) * 16})`}>
                <circle cx="4" cy="6" r="1.5" fill="var(--soma)" />
                <text x="12" y="9" fontFamily="Inter, sans-serif" fontSize="9" fill="#444">
                  {item}
                </text>
              </g>
            ))}
          </g>
        </g>
      </g>

      {/* Botão de exportação */}
      <g transform="translate(20 196)">
        <rect width="440" height="42" rx="6" fill="var(--soma)" />
        <g transform="translate(14 14)">
          <path d="M 0 4 L 5 9 L 14 0" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <text x="40" y="20" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="white">
          Exportar dossiê para SOMA
        </text>
        <text x="40" y="32" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fontWeight="600" fill="white" opacity="0.85" letterSpacing="0.4">
          FORMATO ACEITO PELA CÂMARA · 1 CLIQUE
        </text>
      </g>

      {/* Footer */}
      <text x="240" y="262" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill="#666" textAnchor="middle" letterSpacing="1.5">
        TRÊS SEMANAS DE RECONSTRUÇÃO ELIMINADAS POR CASO
      </text>
    </svg>
  );
}
