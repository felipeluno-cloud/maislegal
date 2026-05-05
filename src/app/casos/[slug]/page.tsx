import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Building2
} from "lucide-react";
import { Button } from "@/components/base/Button";

export const dynamicParams = false;

type Vertical = {
  slug: string;
  nome: string;
  short: string;
  contextoBody: string[];
  cenario: { titulo: string; valor: string; volume: string; equipe: string };
  doresAntes: string[];
  comOQueMuda: string[];
  contaConcreta: { label: string; valor: string; sub: string }[];
  porQueImporta: string;
  exemplos: string[];
  vizinhos: string[];
  cor: string;
};

const VERTICAIS: Vertical[] = [
  {
    slug: "outsourcing-ti",
    nome: "Outsourcing de TI",
    short: "Provedores de serviços de TI que vendem outsourcing, manutenção e SLA para clientes corporativos. Recorrência alta, SLAs apertados, dados sensíveis em jogo.",
    contextoBody: [
      "Outsourcing de TI vive de SLA. Cláusula de disponibilidade descumprida vira multa, descumprimento sistemático vira disputa, e cada nova proposta de cliente entra com NDA detalhado sobre dado sensível.",
      "O contrato fica grande, denso, e muda a cada ciclo de renovação. Sem ambiente colaborativo, cada parte tem versão própria, e o histórico de aditivos e concessões verbais se perde."
    ],
    cenario: {
      titulo: "Provedor médio de outsourcing TI",
      valor: "R$ 240 mil/ano · contrato master",
      volume: "80 contratos ativos · 32 fornecedores",
      equipe: "4 pessoas operando · 1 advogado externo"
    },
    doresAntes: [
      "SLA descumprido é registrado em planilha que ninguém atualiza. Multa contratual prevista nunca é cobrada.",
      "NDA tem lista do que pode e não pode sair. Lista nunca vira rotina, time não sabe exatamente o que está protegido.",
      "Renovação automática de 12 meses, com cancelamento exigindo aviso de 90 dias. Cliente esquece o prazo, renova com mesmo preço de antes.",
      "Cada aditivo verbal de escopo vira disputa de versão depois. Quem lembra como, ninguém sabe."
    ],
    comOQueMuda: [
      "Cada SLA vira obrigação rastreada. Descumprimento é registrado e a multa é calculada automaticamente com base no contrato.",
      "Cláusulas de NDA viram alertas: o time é avisado quando uma cláusula de confidencialidade está em risco, antes do dado escorregar.",
      "Renovações têm aviso 90, 60 e 30 dias antes. Você tem janela para negociar, em vez de correr atrás.",
      "Aditivos viram fluxo formal dentro do ambiente, com aprovação documentada de todas as partes."
    ],
    contaConcreta: [
      { label: "Multa LGPD potencial", valor: "R$ 500 mil+", sub: "1 dado sensível escorregado" },
      { label: "SLA não cobrado", valor: "2 a 5%", sub: "da fatura anual perdida" },
      { label: "Renovação não negociada", valor: "R$ 30 a 200 mil", sub: "de upside deixado na mesa" }
    ],
    porQueImporta: "Outsourcing TI tem ticket alto, recorrência longa, e contratos densos. Cada 1% de upside negociado vira meses de margem. Cada NDA vazado vira anos de dor.",
    exemplos: [
      "Beta Serviços TI · 80 contratos B2B",
      "Provedores de cloud e infraestrutura",
      "Consultorias de implementação SAP/Oracle",
      "Fábricas de software com manutenção contínua"
    ],
    vizinhos: ["franquias", "agencias-marketing", "locacao-comercial"],
    cor: "var(--brand)"
  },
  {
    slug: "franquias",
    nome: "Franquias",
    short: "Franqueadoras com rede de franqueados ativos, ou redes em expansão. Contrato master + COF + renovações sucessivas + auditoria de royalty.",
    contextoBody: [
      "Franquia é contrato em massa. A franqueadora desenha o contrato master uma vez, mas precisa replicar com cada franqueado, com pequenas variações por região, perfil ou momento de mercado.",
      "Quando o contrato vira disputa, normalmente é sobre royalty não pago, descumprimento de padrão, ou rescisão antecipada. O histórico de comunicação com aquele franqueado específico vira evidência crítica."
    ],
    cenario: {
      titulo: "Rede de franquias média",
      valor: "R$ 36 mil/ano por franqueado · 80 franqueados",
      volume: "80 contratos ativos · 12 estados",
      equipe: "Diretor de Expansão · 2 pessoas no jurídico"
    },
    doresAntes: [
      "Cada franqueado tem versão do contrato com pequenas variações. Quando alguém pergunta qual vale para cada um, é difícil responder.",
      "Royalty atrasado é cobrado por planilha. Histórico de inadimplência fica em e-mails espalhados.",
      "Padrão da rede é descumprido por franqueado, mas sem registro estruturado, fica difícil sustentar rescisão.",
      "Quando rescisão acontece, advogado externo passa semanas reconstruindo o histórico daquele franqueado específico."
    ],
    comOQueMuda: [
      "Contrato master + variações ficam em um único ambiente, com versão clara por franqueado.",
      "Pagamentos de royalty viram obrigações monitoradas. Inadimplência é detectada cedo, e o histórico fica registrado.",
      "Descumprimento de padrão (auditoria, comunicação visual, processos) vira evidência registrada com data e responsável.",
      "Rescisão chega com histórico íntegro para câmara, sem 3 semanas de reconstrução."
    ],
    contaConcreta: [
      { label: "Royalty inadimplente", valor: "8 a 15%", sub: "do pipeline anual perdido" },
      { label: "Rescisão judicial", valor: "R$ 50 mil+", sub: "advogado · tempo · reputação" },
      { label: "Padrão descumprido", valor: "perda de marca", sub: "incalculável a longo prazo" }
    ],
    porQueImporta: "Franquia escala via contrato. Sem ambiente unificado, a rede vira gestão de exceção, e a marca vai sendo corroída por descumprimento que ninguém registra.",
    exemplos: [
      "Redes de alimentação e bebidas",
      "Redes de educação e cursos",
      "Redes de serviços (fitness, beleza, manutenção)",
      "Redes de varejo especializado"
    ],
    vizinhos: ["outsourcing-ti", "agencias-marketing", "locacao-comercial"],
    cor: "var(--peach-dark)"
  },
  {
    slug: "locacao-comercial",
    nome: "Locação Comercial",
    short: "Imobiliárias, administradoras e locadores diretos. Contratos longos, garantias variadas, reajustes anuais e sucessão de inquilinos.",
    contextoBody: [
      "Locação comercial é contrato de longo prazo com muito ponto de atrito: reajuste anual indexado, garantia (fiança, seguro, caução), benfeitorias, manutenção, multa rescisória.",
      "Aviso de não renovação tem prazo legal específico, e perdê-lo significa renovação automática com inflação acumulada que ninguém negociou."
    ],
    cenario: {
      titulo: "Administradora de comercial",
      valor: "R$ 15 mil a 80 mil/mês · contratos típicos",
      volume: "120 contratos ativos · 60 prédios",
      equipe: "3 pessoas · 1 advogado externo · 1 contador"
    },
    doresAntes: [
      "Aviso de 90 dias para não renovação esquecido. Contrato renova com IGP-M acumulado de 3 anos.",
      "Reajuste anual aplicado errado por engano humano. Inquilino reclama, gera disputa.",
      "Inquilino sai sem comunicar formalmente. Garantia executada errada, vira processo.",
      "Benfeitoria autorizada por e-mail, depois inquilino pede indenização. Sem registro estruturado, vira disputa."
    ],
    comOQueMuda: [
      "Cada janela de aviso vira alerta, 90, 60 e 30 dias antes. Você nunca perde a janela legal.",
      "Reajuste é calculado pelo sistema com base no índice contratual, sem erro humano.",
      "Comunicação formal de saída fica registrada. Garantia é executada com base em obrigação rastreada.",
      "Benfeitoria autorizada vira aditivo formal, com aprovação documentada das partes."
    ],
    contaConcreta: [
      { label: "Janela de aviso perdida", valor: "12 meses", sub: "de aluguel sem renegociar" },
      { label: "Reajuste errado", valor: "R$ 5 a 30 mil", sub: "por contrato em disputa" },
      { label: "Disputa judicial típica", valor: "18 meses", sub: "média de tramitação" }
    ],
    porQueImporta: "Locação comercial é um dos contratos com mais janelas de prazo legal. Cada janela perdida é dinheiro deixado na mesa. Cada disputa vai para o judiciário, lento e público.",
    exemplos: [
      "Imobiliárias de comercial",
      "Administradoras de prédios e shoppings",
      "Locadores diretos com portfólio próprio",
      "Built-to-suit e operações coorporativas"
    ],
    vizinhos: ["franquias", "outsourcing-ti", "agencias-marketing"],
    cor: "var(--soma)"
  },
  {
    slug: "agencias-marketing",
    nome: "Agências de Marketing",
    short: "Agências de marketing, comunicação e branding com clientes corporativos. Contratos por projeto + retainer + escopo evoluindo a cada semana.",
    contextoBody: [
      "Agência fecha o contrato master, mas o trabalho real vive em sucessão de aditivos: novo escopo, mais entregas, mudança de prazo, ajuste de KPI. Cada combinado verbal por reunião vira aditivo informal que pode virar disputa depois.",
      "Cliente corporativo grande tem departamento jurídico estruturado. A agência, normalmente, não tem advogado interno e depende de externo pontual. A diferença de estrutura aparece quando algo dá errado."
    ],
    cenario: {
      titulo: "Agência média de marketing B2B",
      valor: "R$ 80 mil/ano · cliente corporativo",
      volume: "12 a 20 contratos ativos · clientes recorrentes",
      equipe: "12 pessoas · 1 sócio cuidando do jurídico · advogado externo"
    },
    doresAntes: [
      "Combinado verbal em reunião sobre escopo extra. Meses depois, vira disputa de quem prometeu o quê.",
      "KPI mensal previsto em contrato. Mês ruim, cliente pede ajuste. Sem registro formal, vira tensão recorrente.",
      "Cláusula de propriedade intelectual sobre material criativo. Cliente quer reuso fora do escopo, agência cobra a parte, vira atrito.",
      "Renovação de retainer com janela de 30 dias. Esquecimento vira renovação automática, ou pior, cliente escapa sem aviso."
    ],
    comOQueMuda: [
      "Aditivos verbais viram aditivos formais dentro do ambiente. Aprovação registrada com data e autoria.",
      "KPIs do contrato viram obrigações rastreáveis. Cumprimento ou descumprimento é evidência registrada, não memória.",
      "Cláusula de IP fica visível e versionada. Cada solicitação de reuso tem registro de aprovação ou negativa.",
      "Renovação tem alerta. Cliente que quer escapar é notificado da janela. Você tem chance de renegociar."
    ],
    contaConcreta: [
      { label: "Disputa de escopo", valor: "R$ 20 a 80 mil", sub: "por projeto típico" },
      { label: "Cliente que sai sem avisar", valor: "LTV perdido", sub: "ticket × tempo × indicações" },
      { label: "Propriedade intelectual em disputa", valor: "R$ 50 a 300 mil", sub: "depende do reuso do material" }
    ],
    porQueImporta: "Agência vive de cliente recorrente. Disputa vira ruptura, e cliente grande perdido leva indicações junto. O contrato bem registrado é a primeira linha de defesa.",
    exemplos: [
      "Agências de comunicação e branding",
      "Estúdios de design",
      "Agências de performance e mídia",
      "Consultorias de marketing B2B"
    ],
    vizinhos: ["outsourcing-ti", "franquias", "locacao-comercial"],
    cor: "var(--brand)"
  }
];

export function generateStaticParams() {
  return VERTICAIS.map((v) => ({ slug: v.slug }));
}

export default async function CasoVerticalPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const v = VERTICAIS.find((x) => x.slug === slug);
  if (!v) notFound();

  const vizinhosResolvidos = v.vizinhos
    .map((s) => VERTICAIS.find((x) => x.slug === s))
    .filter(Boolean) as Vertical[];

  return (
    <>
      {/* Volta · breadcrumb */}
      <section className="border-b border-stone-200 bg-white">
        <div className="container-soma py-4">
          <Link
            href="/casos"
            className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-widest text-stone-600 hover:text-brand"
          >
            <ArrowLeft className="size-3.5" strokeWidth={2.5} />
            Voltar para casos por vertical
          </Link>
        </div>
      </section>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-stone-200 bg-white">
        <div className="container-soma py-12 md:py-16">
          <div className="max-w-[820px]">
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1.5"
              style={{ borderColor: `${v.cor}33`, background: `${v.cor}0F` }}
            >
              <Building2 className="size-4" style={{ color: v.cor }} strokeWidth={1.6} />
              <span
                className="font-mono text-[11px] font-bold uppercase tracking-widest"
                style={{ color: v.cor }}
              >
                Caso por vertical · {v.nome}
              </span>
            </div>

            <h1 className="mb-6 font-title text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl lg:text-[52px] leading-[1.05]">
              Como a +legal_ funciona para {v.nome.toLowerCase()}.
            </h1>

            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">{v.short}</p>
          </div>
        </div>
      </section>

      {/* CONTEXTO · prosa */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mx-auto max-w-[820px]">
            <p className="eyebrow mb-3" style={{ color: v.cor }}>
              Contexto
            </p>
            <h2 className="h-soma mb-6">Como o contrato pesa nessa vertical.</h2>

            <div className="space-y-4">
              {v.contextoBody.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-gray-700">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CENÁRIO · stat box */}
      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mx-auto max-w-[820px]">
            <div
              className="rounded-2xl border-2 p-7 md:p-8"
              style={{ borderColor: v.cor, background: `${v.cor}08` }}
            >
              <p
                className="mb-3 font-mono text-[11px] font-bold uppercase tracking-widest"
                style={{ color: v.cor }}
              >
                Cenário típico
              </p>
              <h3 className="mb-6 font-title text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
                {v.cenario.titulo}
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {[
                  { label: "Valor médio", val: v.cenario.valor },
                  { label: "Volume", val: v.cenario.volume },
                  { label: "Equipe", val: v.cenario.equipe }
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-stone-200 bg-white p-4"
                  >
                    <p
                      className="mb-1 font-mono text-[11px] font-bold uppercase tracking-widest"
                      style={{ color: v.cor }}
                    >
                      {s.label}
                    </p>
                    <p className="font-title text-base font-bold leading-snug text-gray-900">
                      {s.val}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DORES vs MUDANÇAS · 2 colunas */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border-2 border-l-4 bg-white p-7" style={{ borderColor: "rgba(220,38,38,0.3)", borderLeftColor: "#dc2626" }}>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-rose-50">
                  <AlertTriangle className="size-5 text-red-600" strokeWidth={1.6} />
                </div>
                <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-red-700">
                  Sem <span className="normal-case">+legal_</span>
                </p>
              </div>
              <h3 className="mb-5 font-title text-xl font-bold leading-snug text-gray-900">
                Onde a desorganização cobra preço
              </h3>
              <ul className="space-y-3">
                {v.doresAntes.map((d, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] leading-snug text-gray-700">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-red-500" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl border-2 border-l-4 bg-white p-7"
              style={{ borderColor: `${v.cor}55`, borderLeftColor: v.cor }}
            >
              <div className="mb-5 flex items-center gap-3">
                <div
                  className="flex size-10 items-center justify-center rounded-xl"
                  style={{ background: `${v.cor}14` }}
                >
                  <CheckCircle2 className="size-5" strokeWidth={1.6} style={{ color: v.cor }} />
                </div>
                <p
                  className="font-mono text-[11px] font-bold uppercase tracking-widest"
                  style={{ color: v.cor }}
                >
                  Com <span className="normal-case">+legal_</span>
                </p>
              </div>
              <h3 className="mb-5 font-title text-xl font-bold leading-snug text-gray-900">
                O que muda no dia a dia
              </h3>
              <ul className="space-y-3">
                {v.comOQueMuda.map((d, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] leading-snug text-gray-700">
                    <span
                      className="mt-1.5 size-1.5 shrink-0 rounded-full"
                      style={{ background: v.cor }}
                    />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTA CONCRETA · 3 valores */}
      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mb-10 max-w-[820px]">
            <p className="eyebrow mb-3" style={{ color: v.cor }}>
              A conta concreta
            </p>
            <h2 className="h-soma mb-4">
              O que o contrato mal monitorado custa nessa vertical.
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">{v.porQueImporta}</p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {v.contaConcreta.map((c) => (
              <div
                key={c.label}
                className="rounded-2xl border border-stone-200 bg-white p-7"
              >
                <p className="mb-2 font-mono text-[11px] font-bold uppercase tracking-widest text-stone-500">
                  {c.label}
                </p>
                <p
                  className="mb-1 font-title text-3xl font-extrabold tracking-tight"
                  style={{ color: v.cor }}
                >
                  {c.valor}
                </p>
                <p className="text-[12px] leading-snug text-stone-500">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXEMPLOS · quem se encaixa */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mx-auto max-w-[820px]">
            <p className="eyebrow mb-3" style={{ color: v.cor }}>
              Quem se encaixa nessa vertical
            </p>
            <h2 className="h-soma mb-6">Exemplos de empresas onde isso bate.</h2>

            <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {v.exemplos.map((e) => (
                <li
                  key={e}
                  className="rounded-xl border border-stone-200 bg-white p-4 text-[14px] leading-snug text-gray-700"
                >
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA forte */}
      <section className="bg-brand text-white">
        <div className="container-soma py-16 md:py-20">
          <div className="mx-auto max-w-[860px] text-center">
            <p className="eyebrow-light mb-5">Próximo passo</p>
            <h2 className="mb-6 font-title text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              Você entra com o seu portfólio importado, ou conversa primeiro com a equipe.
            </h2>
            <p className="mx-auto mb-10 max-w-[640px] text-lg leading-relaxed text-white/80">
              Se você opera em {v.nome.toLowerCase()}, a equipe da +legal_ pode importar os primeiros contratos críticos com você, configurar os campos do seu portfólio, e ajustar os alertas para os prazos que importam.
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
                href="/agendar"
                variant="secondary"
                size="lg"
                className="!bg-transparent !border-white/40 !text-white hover:!bg-white/10 hover:!border-white"
              >
                Agendar conversa
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* OUTROS CASOS · navegação */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mb-10 max-w-[820px]">
            <p className="eyebrow mb-3 text-brand">Outras verticais</p>
            <h2 className="h-soma mb-4">Casos similares que talvez interessem.</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {vizinhosResolvidos.map((x) => (
              <Link
                key={x.slug}
                href={`/casos/${x.slug}`}
                className="group flex flex-col rounded-2xl border border-stone-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <p
                  className="mb-2 font-mono text-[11px] font-bold uppercase tracking-widest"
                  style={{ color: x.cor }}
                >
                  {x.nome}
                </p>
                <p className="mb-4 flex-1 text-[13px] leading-snug text-gray-700">
                  {x.short}
                </p>
                <span
                  className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-widest"
                  style={{ color: x.cor }}
                >
                  Ver vertical <ArrowRight className="size-3.5" strokeWidth={2.5} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
