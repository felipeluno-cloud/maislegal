import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Quote, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/base/Button";
import { HeroLogoBg } from "@/components/base/HeroLogoBg";

type Story = {
  slug: string;
  empresa: string;
  setor: string;
  porte: string;
  initial: string;
  color: string;
  short: string;
  capitulo1: { titulo: string; body: string[] };
  capitulo2: { titulo: string; body: string[] };
  capitulo3: { titulo: string; body: string[] };
  metricas: { label: string; antes: string; depois: string }[];
  citacao: { texto: string; autor: string; cargo: string };
  aviso: string;
};

const STORIES: Story[] = [
  {
    slug: "beta-servicos-ti-renovacao-automatica",
    empresa: "Beta Serviços",
    setor: "Outsourcing de TI · 80 contratos B2B",
    porte: "Médio · R$ 24M/ano",
    initial: "B",
    color: "var(--brand)",
    short:
      "Provedora de outsourcing TI com 80 contratos ativos, distribuídos por 32 fornecedores. Em 6 meses na +legal_, evitou 3 renovações automáticas indesejadas e cobrou R$ 84 mil em SLA descumprido.",
    capitulo1: {
      titulo: "O cenário antes",
      body: [
        "A Beta Serviços é uma provedora de outsourcing TI de porte médio, com 80 contratos B2B ativos, ticket médio de R$ 240 mil/ano, e 32 fornecedores diferentes envolvidos. O time de gestão tem 4 pessoas, mais um advogado externo pontual.",
        "O time gerenciava o portfólio com planilha do Drive, e-mails arquivados em pastas, e WhatsApp para combinados rápidos. Funcionava razoavelmente bem até a empresa passar de 50 contratos. Aí, a complexidade explodiu.",
        "Em 2025, a Beta perdeu R$ 180 mil em uma renovação automática de software que ninguém percebeu. O contrato exigia aviso de 90 dias para não renovar. Ninguém marcou no calendário. Renovou com mesmo preço, sem renegociação."
      ]
    },
    capitulo2: {
      titulo: "Como a +legal_ entrou",
      body: [
        "A Beta entrou no Early Access da +legal_ em janeiro de 2026. A equipe da +legal_ acompanhou a importação dos 20 contratos críticos na primeira semana, configurou os campos do portfólio (SLA, prazo, renovação, valor), e cadastrou o advogado externo como visitante gratuito.",
        "Em 30 dias, todos os 80 contratos estavam no ambiente, com obrigações rastreáveis e alertas configurados para 90, 60 e 30 dias antes de cada janela de renovação ou vencimento.",
        "O time de 4 pessoas manteve a mesma rotina, mas substituiu a planilha pelo painel da +legal_. O advogado externo passou a revisar aditivos dentro do ambiente, sem exportar para PDF, sem anexos perdidos em e-mail."
      ]
    },
    capitulo3: {
      titulo: "O que aconteceu nos 6 meses seguintes",
      body: [
        "Três renovações que estavam programadas para rodar automaticamente foram interceptadas pelo alerta de 90 dias. O time renegociou duas delas com desconto agregado de R$ 110 mil, e cancelou a terceira (fornecedor que não estava entregando o esperado).",
        "Um SLA de disponibilidade de 99,5% foi sistematicamente descumprido por um fornecedor de cloud, sem que ninguém estivesse cobrando a multa contratual. A +legal_ rastreou o histórico de incidentes, e o time apresentou cobrança formal de R$ 84 mil em multa acumulada nos 12 meses anteriores. Fornecedor pagou R$ 62 mil em acordo extrajudicial.",
        "Uma disputa começou a aparecer com um cliente sobre escopo de aditivo verbal em reunião. A +legal_ tinha registrado o aditivo como rascunho não aprovado, sem formalização da Diretora de Operações. A discussão se resolveu em 2 reuniões com base no histórico, sem virar disputa formal."
      ]
    },
    metricas: [
      { label: "SLA cobrado em 12 meses", antes: "R$ 0", depois: "R$ 62.000" },
      { label: "Renovações renegociadas", antes: "0 de 3", depois: "3 de 3" },
      { label: "Tempo de revisão de contrato com advogado externo", antes: "5 a 7 dias úteis", depois: "1 dia útil" },
      { label: "Disputas formais abertas no período", antes: "1 por trimestre (média)", depois: "0 no período" }
    ],
    citacao: {
      texto:
        "A diferença não é só financeira. É de tempo do meu time. A gente parou de operar reagindo, e passou a antecipar. Isso muda o tipo de conversa que a gente tem com fornecedor.",
      autor: "Diretora de Operações",
      cargo: "Beta Serviços"
    },
    aviso:
      "Caso ilustrativo composto a partir de cenários reais observados durante o desenvolvimento da +legal_. Empresa, valores e métricas representativos do perfil de cliente típico em outsourcing TI."
  },
  {
    slug: "marketing-agencia-cliente-corporativo",
    empresa: "Theta Agência",
    setor: "Agência de marketing B2B · 12 contratos ativos",
    porte: "PME · 12 pessoas, R$ 5M/ano",
    initial: "T",
    color: "var(--peach-dark)",
    short:
      "Agência de marketing com cliente corporativo grande passa a operar com a +legal_ depois de uma disputa de escopo. Em 4 meses, formaliza 100% dos aditivos e fecha o primeiro contrato anual com cláusula escalonada.",
    capitulo1: {
      titulo: "O cenário antes",
      body: [
        "A Theta Agência é uma PME de marketing B2B de São Paulo, 12 pessoas, com clientes corporativos médios e grandes. Ticket médio anual por cliente fica entre R$ 80 mil e R$ 240 mil. O sócio-fundador cuida do jurídico junto com um advogado externo pontual.",
        "A relação com clientes grandes sempre teve estruturas diferentes dos dois lados: do lado deles, departamento jurídico estruturado e processo formal. Do lado da Theta, o sócio + 1 advogado externo. Cada renegociação de escopo era uma novela: combinado verbal por reunião, depois disputa de versão por e-mail.",
        "Em 2025, a Theta entrou em disputa de R$ 80 mil com cliente corporativo sobre escopo de projeto. Ambos lados lembravam diferente do que tinha sido combinado em uma reunião 6 meses antes. O cliente pagou metade do valor reclamado, mas o relacionamento se desgastou e não houve renovação."
      ]
    },
    capitulo2: {
      titulo: "Como a +legal_ entrou",
      body: [
        "A Theta entrou no Early Access em fevereiro de 2026 com onboarding personalizado. A equipe da +legal_ ajudou na importação dos 12 contratos ativos, e cadastrou o advogado externo da agência como visitante gratuito.",
        "A configuração do ambiente priorizou 3 coisas: aditivos formais (toda concessão de escopo vira aditivo registrado), comentários por cláusula (comentário em e-mail vira comentário inline), e cláusula escalonada de mediação (mediação primeiro, arbitragem depois)."
      ]
    },
    capitulo3: {
      titulo: "O que aconteceu nos 4 meses seguintes",
      body: [
        "Em 100% dos novos contratos fechados depois de fevereiro, foi adicionada cláusula escalonada de resolução de disputas. Cliente corporativo aceitou em todos os casos, sem resistência.",
        "Aditivos verbais simplesmente deixaram de existir. Cada solicitação de escopo extra do cliente entrou no ambiente como rascunho de aditivo, com aprovação documentada antes de virar trabalho. Disputas potenciais foram interceptadas antes de virarem formais.",
        "A Theta fechou um contrato de R$ 320 mil/ano com um novo cliente Enterprise. Pela primeira vez, o sócio chegou na reunião de fechamento com ambiente colaborativo pronto e mesma versão dos termos para os dois lados. O cliente comentou na reunião: 'Vocês têm uma estrutura mais organizada que muita empresa do nosso porte.'"
      ]
    },
    metricas: [
      { label: "Aditivos verbais formalizados", antes: "10 a 30%", depois: "100%" },
      { label: "Disputas formais no período", antes: "1 por ano (média)", depois: "0 no período" },
      { label: "Renovação anual de clientes", antes: "60% renovavam", depois: "100% renovaram (4 de 4)" },
      { label: "Tempo médio de fechamento de contrato novo", antes: "5 a 6 semanas", depois: "2 a 3 semanas" }
    ],
    citacao: {
      texto:
        "Eu não imaginava que estrutura de contrato ia mudar a forma como o cliente grande me vê. Mudou. Sou tratada como par agora, não como fornecedora pequena que pode aceitar qualquer coisa.",
      autor: "Sócia-fundadora",
      cargo: "Theta Agência"
    },
    aviso:
      "Caso ilustrativo composto a partir de cenários reais observados durante o desenvolvimento da +legal_. Empresa, valores e métricas representativos do perfil de cliente típico em agências B2B."
  },
  {
    slug: "escritorio-arbitragem-historico-integro",
    empresa: "Sznifer & Associados",
    setor: "Escritório de advocacia · contencioso e consultivo",
    porte: "Banca · 8 advogados, 12 clientes corporativos ativos",
    initial: "S",
    color: "var(--soma)",
    short:
      "Banca consultiva e contenciosa entra na +legal_ para reduzir tempo de reconstrução de histórico em disputas. Em 8 meses, eliminou 3 semanas médias de investigação preliminar por caso e ganhou 2 novos clientes via indicação.",
    capitulo1: {
      titulo: "O cenário antes",
      body: [
        "Sznifer & Associados é uma banca de 8 advogados que atende 12 clientes corporativos no eixo SP-RJ-BH. A maioria dos clientes opera contratos B2B recorrentes (outsourcing TI, locação comercial, fornecimento), com tickets entre R$ 200 mil e R$ 2M.",
        "O modelo de trabalho típico em contencioso era: cliente liga em pânico depois de disputa formalizada, advogados passavam 2 a 4 semanas reconstruindo o histórico do contrato a partir de drives, e-mails, WhatsApp, antes de começar a estratégia jurídica.",
        "Em consultivo, o modelo era reativo: cliente perguntava sobre cláusula específica quando precisava decidir algo. Sem repositório central, o escritório dependia do que o cliente tinha organizado, que normalmente era pouco."
      ]
    },
    capitulo2: {
      titulo: "Como a +legal_ entrou",
      body: [
        "O escritório entrou na +legal_ no modelo Escritórios (R$ 250 por operador, com cliente entrando como visitante gratuito) em janeiro de 2026. Os 8 advogados foram cadastrados, e os 12 clientes ativos foram convidados como visitantes.",
        "A primeira meta foi importar contratos vivos dos clientes mais ativos (5 clientes prioritários). Em 3 semanas, esses 5 clientes tinham seus portfólios inteiros (40 contratos B2B somados) na +legal_, com histórico organizado, comentários inline, e versão única visível para todas as partes.",
        "O cliente corporativo passou a usar a +legal_ para acompanhar suas próprias obrigações em curso, e o escritório passou a ter visibilidade em tempo real do que estava acontecendo, sem depender de o cliente ligar."
      ]
    },
    capitulo3: {
      titulo: "O que aconteceu nos 8 meses seguintes",
      body: [
        "Tempo médio de reconstrução de histórico em casos novos caiu de 2 a 4 semanas para 0 (zero). Quando uma disputa surge, o histórico já está organizado dentro da +legal_, e o advogado parte direto para a estratégia jurídica.",
        "Três disputas foram interceptadas antes de virarem formais. O escritório identificou padrão de descumprimento contratual em tempo real (não meses depois), e mediou diretamente entre cliente e contraparte com base em histórico documentado. Duas das três disputas resolveram em 2 reuniões.",
        "Dois novos clientes foram captados por indicação dos clientes existentes. Os novos clientes começaram a relação com o escritório já dentro da +legal_, e a chegada se deu em horas, não dias."
      ]
    },
    metricas: [
      { label: "Tempo médio de reconstrução de histórico", antes: "2 a 4 semanas por caso", depois: "0 (já organizado)" },
      { label: "Disputas interceptadas antes da formalização", antes: "Raro", depois: "3 em 8 meses" },
      { label: "Novos clientes via indicação", antes: "1 por ano (média)", depois: "2 em 8 meses" },
      { label: "Tempo de onboarding de cliente novo", antes: "1 semana", depois: "Mesmo dia" }
    ],
    citacao: {
      texto:
        "Antes a gente cobrava do cliente o esforço de reconstruir o histórico. Era trabalho que não agregava valor. Agora cobramos pela estratégia, que é onde a gente faz diferença. O cliente percebe.",
      autor: "Sócio Sênior",
      cargo: "Sznifer & Associados"
    },
    aviso:
      "Caso ilustrativo composto a partir de cenários reais observados durante o desenvolvimento da +legal_. Escritório, valores e métricas representativos do perfil de cliente típico em advocacia consultiva e contenciosa de médio porte."
  }
];

export function generateStaticParams() {
  return STORIES.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export default async function StoryPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = STORIES.find((x) => x.slug === slug);
  if (!s) notFound();

  const outras = STORIES.filter((x) => x.slug !== s.slug);

  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="container-soma py-4">
          <Link
            href="/casos"
            className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-widest text-stone-600 hover:text-brand"
          >
            <ArrowLeft className="size-3.5" strokeWidth={2.5} />
            Voltar para casos
          </Link>
        </div>
      </section>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-stone-200 bg-white">
        <HeroLogoBg position="top-right" color={s.color} opacity={0.06} />
        <div className="container-soma relative py-12 md:py-16">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[auto_1fr]">
            <div
              className="flex size-24 shrink-0 items-center justify-center rounded-3xl text-4xl font-extrabold text-white md:size-28 md:text-5xl"
              style={{ background: s.color }}
            >
              {s.initial}
            </div>

            <div>
              <p
                className="mb-2 font-mono text-[11px] font-bold uppercase tracking-widest"
                style={{ color: s.color }}
              >
                Estudo de caso · {s.setor}
              </p>

              <h1 className="mb-4 font-title text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl lg:text-[48px] leading-[1.05]">
                {s.empresa}
              </h1>

              <p className="mb-3 font-mono text-[12px] uppercase tracking-widest text-stone-600">
                {s.porte}
              </p>

              <p className="text-lg leading-relaxed text-gray-600 md:text-xl">{s.short}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CAPÍTULO 1 · ANTES */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mx-auto max-w-[820px]">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-rose-50">
                <AlertTriangle className="size-5 text-red-600" strokeWidth={1.6} />
              </div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-red-700">
                Capítulo 1 · {s.capitulo1.titulo}
              </p>
            </div>

            <div className="space-y-4">
              {s.capitulo1.body.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-gray-700">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAPÍTULO 2 · COMO A +legal_ ENTROU */}
      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mx-auto max-w-[820px]">
            <div className="mb-5 flex items-center gap-3">
              <div
                className="flex size-10 items-center justify-center rounded-xl"
                style={{ background: `${s.color}14` }}
              >
                <ArrowRight className="size-5" strokeWidth={1.6} style={{ color: s.color }} />
              </div>
              <p
                className="font-mono text-[11px] font-bold uppercase tracking-widest"
                style={{ color: s.color }}
              >
                Capítulo 2 · {s.capitulo2.titulo}
              </p>
            </div>

            <div className="space-y-4">
              {s.capitulo2.body.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-gray-700">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAPÍTULO 3 · O QUE ACONTECEU */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mx-auto max-w-[820px]">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-50">
                <CheckCircle2 className="size-5 text-emerald-700" strokeWidth={1.6} />
              </div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-emerald-700">
                Capítulo 3 · {s.capitulo3.titulo}
              </p>
            </div>

            <div className="space-y-4">
              {s.capitulo3.body.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-gray-700">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MÉTRICAS · TABELA ANTES/DEPOIS */}
      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mx-auto max-w-[920px]">
            <p className="eyebrow mb-3" style={{ color: s.color }}>
              Métricas
            </p>
            <h2 className="h-soma mb-8">Antes e depois, na ponta do lápis.</h2>

            <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
              <div className="grid grid-cols-[2fr_1fr_1fr] border-b border-stone-200 bg-stone-50">
                <div className="px-5 py-4">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-stone-600">
                    Métrica
                  </p>
                </div>
                <div className="px-5 py-4 border-l border-stone-200">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-red-700">
                    Antes
                  </p>
                </div>
                <div className="px-5 py-4 border-l border-stone-200">
                  <p
                    className="font-mono text-[11px] font-bold uppercase tracking-widest"
                    style={{ color: s.color }}
                  >
                    Depois
                  </p>
                </div>
              </div>

              {s.metricas.map((m, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[2fr_1fr_1fr] border-b border-stone-200 last:border-b-0"
                >
                  <div className="px-5 py-4">
                    <p className="font-title text-[14px] font-bold text-gray-900">{m.label}</p>
                  </div>
                  <div className="px-5 py-4 border-l border-stone-200">
                    <p className="text-[14px] leading-snug text-gray-700">{m.antes}</p>
                  </div>
                  <div className="px-5 py-4 border-l border-stone-200">
                    <p
                      className="text-[14px] leading-snug font-bold"
                      style={{ color: s.color }}
                    >
                      {m.depois}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CITAÇÃO */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mx-auto max-w-[820px] text-center">
            <Quote
              className="mx-auto mb-5 size-10"
              style={{ color: s.color }}
              strokeWidth={1.5}
            />
            <p
              className="font-title text-2xl font-bold leading-snug tracking-tight md:text-3xl"
              style={{ color: s.color }}
            >
              "{s.citacao.texto}"
            </p>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-widest text-stone-500">
              {s.citacao.autor} · {s.citacao.cargo}
            </p>
          </div>
        </div>
      </section>

      {/* AVISO */}
      <section className="bg-white">
        <div className="container-soma py-10">
          <div className="mx-auto max-w-[820px] rounded-xl border border-stone-200 bg-stone-50 p-5">
            <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-stone-600 mb-2">
              Sobre este caso
            </p>
            <p className="text-[13px] leading-relaxed text-stone-700">{s.aviso}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand text-white">
        <div className="container-soma py-14 md:py-16">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="eyebrow-light mb-4">Próximo passo</p>
            <h2 className="mb-5 font-title text-2xl font-bold tracking-tighter md:text-3xl">
              Esse caso bate com o seu cenário?
            </h2>
            <p className="mx-auto mb-8 max-w-[560px] text-[15px] leading-relaxed text-white/85">
              Conversa de 30 minutos com a equipe para entender se faz sentido, ou entra direto pelo Early Access.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Button href="/agendar" variant="primary" size="lg" className="!bg-white !text-brand hover:!bg-stone-100">
                Agendar conversa <ArrowRight className="size-4" />
              </Button>
              <Button href="/early-access" variant="secondary" size="lg" className="!bg-transparent !border-white/40 !text-white hover:!bg-white/10 hover:!border-white">
                Entrar para o Early Access
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* OUTROS CASOS */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mb-8 max-w-[820px]">
            <p className="eyebrow mb-3 text-brand">Outras histórias</p>
            <h2 className="h-soma">Casos similares.</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {outras.map((o) => (
              <Link
                key={o.slug}
                href={`/casos/historias/${o.slug}`}
                className="group flex items-start gap-4 rounded-2xl border border-stone-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div
                  className="flex size-14 shrink-0 items-center justify-center rounded-xl text-2xl font-extrabold text-white"
                  style={{ background: o.color }}
                >
                  {o.initial}
                </div>
                <div className="flex-1">
                  <p
                    className="mb-1 font-mono text-[11px] font-bold uppercase tracking-widest"
                    style={{ color: o.color }}
                  >
                    {o.setor}
                  </p>
                  <p className="font-title text-base font-bold text-gray-900 group-hover:underline mb-2">
                    {o.empresa}
                  </p>
                  <p className="text-[13px] leading-snug text-gray-600">{o.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
