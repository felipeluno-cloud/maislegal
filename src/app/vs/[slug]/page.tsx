import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, X, Layers } from "lucide-react";
import { Button } from "@/components/base/Button";
import { HeroLogoBg } from "@/components/base/HeroLogoBg";

type Linha = {
  criterio: string;
  ele: string;
  legal: string;
  vantagem: "ele" | "legal" | "ambos";
};

type Comparacao = {
  slug: string;
  concorrente: string;
  categoria: string;
  short: string;
  hookConcorrente: string;
  hookLegal: string;
  contexto: string[];
  linhas: Linha[];
  quandoEle: string[];
  quandoLegal: string[];
  conclusao: string;
};

const COMPARACOES: Comparacao[] = [
  {
    slug: "docusign",
    concorrente: "DocuSign",
    categoria: "Assinatura digital",
    short:
      "DocuSign é a referência global em assinatura digital. A +legal_ não substitui, integra. Cobre o que vem antes da assinatura e tudo o que vem depois.",
    hookConcorrente:
      "DocuSign resolve assinatura digital com solidez global. Onde está o gap, é no que acontece com o contrato depois que ele é assinado.",
    hookLegal:
      "A +legal_ é o ambiente onde os contratos vivem. Do rascunho à resolução. Combina ambiente colaborativo, monitoramento ativo de obrigações, e câmara de mediação acoplada.",
    contexto: [
      "DocuSign cobre 5 a 10 minutos do ciclo de um contrato que vai durar 12 a 36 meses. É etapa, não produto inteiro.",
      "Toda semana surge a pergunta: vocês concorrem? Não. A +legal_ integra com DocuSign. A pergunta certa é: o que acontece com o contrato depois da assinatura?"
    ],
    linhas: [
      { criterio: "Assinatura digital", ele: "Foco principal", legal: "Integra com DocuSign, ClickSign, ZapSign", vantagem: "ele" },
      { criterio: "Negociação pré-assinatura", ele: "Edição básica", legal: "Ambiente colaborativo entre partes", vantagem: "legal" },
      { criterio: "Monitoramento de obrigações", ele: "Não cobre", legal: "Alertas automáticos D-90/60/30", vantagem: "legal" },
      { criterio: "Aditivos formalizados", ele: "Novo envelope a cada vez", legal: "Aditivo registrado no mesmo ambiente", vantagem: "legal" },
      { criterio: "Histórico auditável", ele: "Só logs de assinatura", legal: "Cada versão, comentário, decisão", vantagem: "legal" },
      { criterio: "Resolução de disputas", ele: "Não cobre", legal: "Câmara SOMA acoplada", vantagem: "legal" },
      { criterio: "Maturidade global", ele: "Padrão de mercado", legal: "Pré-lançamento Brasil", vantagem: "ele" },
      { criterio: "Preço", ele: "Por envelope assinado", legal: "Por operador, primeiro grátis", vantagem: "ambos" }
    ],
    quandoEle: [
      "Volume alto de assinaturas pontuais sem ciclo de gestão depois.",
      "Empresa global que precisa de produto com presença internacional consolidada.",
      "Caso de uso predominantemente jurídico-formal, sem necessidade de acompanhamento operacional."
    ],
    quandoLegal: [
      "Empresa B2B com contratos recorrentes que duram 12 a 36 meses.",
      "Time precisa monitorar obrigações, alertas de prazo, e aditivos formais.",
      "Disputa contratual é risco real, e mediação privada faz sentido."
    ],
    conclusao:
      "DocuSign continua sendo sua plataforma de assinatura. A +legal_ entra antes da assinatura (negociação) e depois dela (monitoramento, aditivos, resolução). Os dois trabalham juntos."
  },
  {
    slug: "clicksign",
    concorrente: "ClickSign",
    categoria: "Assinatura digital",
    short:
      "ClickSign é a referência brasileira em assinatura digital, com integração nativa ao mercado nacional. A +legal_ se integra e cobre o que vem antes e depois.",
    hookConcorrente:
      "ClickSign resolve assinatura digital com solidez no contexto brasileiro. Onde está o gap, é no que acontece com o contrato depois que ele é assinado.",
    hookLegal:
      "A +legal_ é o ambiente onde os contratos vivem do rascunho à resolução, com câmara de mediação acoplada por design.",
    contexto: [
      "ClickSign tem boa cobertura no Brasil, especialmente em PMEs que querem assinatura simples e local. A +legal_ integra com ClickSign nativamente.",
      "Mas assinar é etapa, não produto. O que acontece nos 12 a 36 meses seguintes do contrato é onde estão os custos e os ganhos invisíveis."
    ],
    linhas: [
      { criterio: "Assinatura digital", ele: "Foco principal", legal: "Integra com ClickSign", vantagem: "ele" },
      { criterio: "Validade jurídica BR", ele: "ICP-Brasil + eletrônica", legal: "Herda da plataforma de assinatura integrada", vantagem: "ele" },
      { criterio: "Negociação colaborativa", ele: "Edição básica", legal: "Ambiente colaborativo entre partes", vantagem: "legal" },
      { criterio: "Monitoramento pós-assinatura", ele: "Não cobre", legal: "Alertas, obrigações, aditivos", vantagem: "legal" },
      { criterio: "Histórico auditável", ele: "Só assinatura", legal: "Histórico inteiro do contrato", vantagem: "legal" },
      { criterio: "Resolução de disputas", ele: "Não cobre", legal: "Câmara SOMA acoplada", vantagem: "legal" },
      { criterio: "Preço", ele: "Por envelope ou plano mensal", legal: "Operador 1 grátis, R$500 a partir do 2º", vantagem: "ambos" }
    ],
    quandoEle: [
      "Empresa que precisa só de assinatura digital, sem ciclo de gestão.",
      "Volume alto de contratos curtos ou pontuais.",
      "Foco operacional 100% em fechar o documento, sem acompanhamento."
    ],
    quandoLegal: [
      "Empresa B2B com contratos recorrentes que duram meses ou anos.",
      "Time gerencia portfólio de 50+ contratos com obrigações em curso.",
      "Risco de disputa existe e mediação privada interessa."
    ],
    conclusao:
      "ClickSign continua sendo sua plataforma de assinatura. A +legal_ cobre o ciclo do contrato antes e depois. Você não troca, integra."
  },
  {
    slug: "projuris",
    concorrente: "Projuris",
    categoria: "Software jurídico",
    short:
      "Projuris é uma suíte ampla de software jurídico, com produtos para escritórios e departamentos. A +legal_ tem foco diferente: ambiente colaborativo de contrato com câmara acoplada, não suíte interna.",
    hookConcorrente:
      "Projuris é forte em software jurídico interno (escritório ou departamento), com cobertura ampla de processos, prazos e gestão de demandas.",
    hookLegal:
      "A +legal_ é um ambiente colaborativo entre partes do contrato, focado no ciclo do contrato B2B vivo, com câmara de mediação acoplada.",
    contexto: [
      "Projuris cobre múltiplos verticais (advocacia contenciosa, departamento jurídico, contratos). É uma suíte interna que vive dentro do sistema de uma das partes.",
      "A +legal_ tem hipótese diferente: o contrato precisa de um ambiente colaborativo entre as partes, não de um software interno do jurídico de uma delas. O que muda é a arquitetura, não só funcionalidade."
    ],
    linhas: [
      { criterio: "Cobertura de produto", ele: "Suíte ampla (contencioso, departamento, contratos)", legal: "Foco em ciclo do contrato B2B", vantagem: "ele" },
      { criterio: "Arquitetura", ele: "Sistema interno de uma parte", legal: "Ambiente colaborativo entre partes", vantagem: "legal" },
      { criterio: "Acesso da contraparte", ele: "Convidado externo limitado", legal: "Visitante grátis com acesso completo", vantagem: "legal" },
      { criterio: "Monitoramento de obrigações", ele: "Cobre via módulo", legal: "Nativo, com alertas automáticos", vantagem: "ambos" },
      { criterio: "Histórico auditável", ele: "Cobre via módulo", legal: "Nativo, imutável", vantagem: "ambos" },
      { criterio: "Resolução de disputas", ele: "Não cobre estruturalmente", legal: "Câmara SOMA acoplada", vantagem: "legal" },
      { criterio: "Foco institucional", ele: "Escritórios e jurídicos internos", legal: "Empresas B2B com contratos recorrentes", vantagem: "ambos" },
      { criterio: "Maturidade", ele: "Produto consolidado, anos de mercado", legal: "Pré-lançamento, Early Access", vantagem: "ele" }
    ],
    quandoEle: [
      "Escritório de advocacia que precisa de suíte interna ampla.",
      "Departamento jurídico que gerencia centenas de processos contenciosos.",
      "Empresa que quer tudo dentro de um software só, controlado por uma parte."
    ],
    quandoLegal: [
      "Empresa B2B que opera contratos recorrentes com clientes ou fornecedores.",
      "Você quer ambiente colaborativo, com a outra parte vendo a mesma versão.",
      "Mediação privada via câmara acoplada faz sentido para o seu setor."
    ],
    conclusao:
      "Projuris e +legal_ resolvem coisas diferentes. Projuris cobre operação jurídica interna. +legal_ cobre o contrato como ponto de encontro entre duas partes, com câmara acoplada quando precisa. Em alguns casos, ambos coexistem."
  }
];

export function generateStaticParams() {
  return COMPARACOES.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export default async function VsPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = COMPARACOES.find((x) => x.slug === slug);
  if (!c) notFound();

  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="container-soma py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-widest text-stone-600 hover:text-brand"
          >
            <ArrowLeft className="size-3.5" strokeWidth={2.5} />
            Voltar para início
          </Link>
        </div>
      </section>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-stone-200 bg-white">
        <HeroLogoBg position="top-right" color="var(--brand)" opacity={0.06} />
        <div className="container-soma relative py-12 md:py-16">
          <div className="max-w-[820px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-tint px-3 py-1.5">
              <Layers className="size-4 text-brand" strokeWidth={1.6} />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                <span className="normal-case">+legal_</span> vs {c.concorrente} · {c.categoria}
              </span>
            </div>

            <h1 className="mb-4 font-title text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl lg:text-[52px] leading-[1.05]">
              <span className="text-brand">+legal_</span> vs {c.concorrente}.
            </h1>

            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">{c.short}</p>
          </div>
        </div>
      </section>

      {/* CONTEXTO · 2 colunas honestas */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mb-10 max-w-[820px]">
            <p className="eyebrow mb-3 text-brand">Antes da tabela</p>
            <h2 className="h-soma mb-4">Cada um faz uma coisa diferente.</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-white p-7">
              <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-widest text-stone-600">
                {c.concorrente}
              </p>
              <p className="text-[15px] leading-relaxed text-gray-700">{c.hookConcorrente}</p>
            </div>
            <div className="rounded-2xl border-2 border-brand bg-white p-7">
              <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                <span className="normal-case">+legal_</span>
              </p>
              <p className="text-[15px] leading-relaxed text-gray-700">{c.hookLegal}</p>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            {c.contexto.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-gray-700">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* TABELA COMPARATIVA */}
      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mb-10 max-w-[820px]">
            <p className="eyebrow mb-3 text-brand">Comparação direta</p>
            <h2 className="h-soma mb-4">{c.linhas.length} critérios, lado a lado.</h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
            <div className="hidden grid-cols-[1.5fr_1fr_1fr] border-b border-stone-200 bg-stone-50 md:grid">
              <div className="px-5 py-4">
                <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-stone-600">
                  Critério
                </p>
              </div>
              <div className="px-5 py-4 border-l border-stone-200">
                <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-stone-600">
                  {c.concorrente}
                </p>
              </div>
              <div className="px-5 py-4 border-l border-stone-200">
                <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                  <span className="normal-case">+legal_</span>
                </p>
              </div>
            </div>

            {c.linhas.map((l, i) => (
              <div
                key={i}
                className="grid grid-cols-1 border-b border-stone-200 last:border-b-0 md:grid-cols-[1.5fr_1fr_1fr]"
              >
                <div className="bg-stone-50 px-5 py-4 md:bg-white">
                  <p className="font-title text-[14px] font-bold text-gray-900">
                    {l.criterio}
                  </p>
                </div>
                <div className="px-5 py-4 md:border-l md:border-stone-200">
                  <div className="flex items-start gap-2">
                    {l.vantagem === "ele" ? (
                      <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" strokeWidth={2.5} />
                    ) : l.vantagem === "ambos" ? (
                      <Check className="mt-0.5 size-4 shrink-0 text-stone-400" strokeWidth={2.5} />
                    ) : (
                      <X className="mt-0.5 size-4 shrink-0 text-stone-400" strokeWidth={2.5} />
                    )}
                    <p className="text-[13.5px] leading-snug text-gray-700">{l.ele}</p>
                  </div>
                </div>
                <div className="px-5 py-4 md:border-l md:border-stone-200">
                  <div className="flex items-start gap-2">
                    {l.vantagem === "legal" ? (
                      <Check className="mt-0.5 size-4 shrink-0 text-brand" strokeWidth={2.5} />
                    ) : l.vantagem === "ambos" ? (
                      <Check className="mt-0.5 size-4 shrink-0 text-stone-400" strokeWidth={2.5} />
                    ) : (
                      <X className="mt-0.5 size-4 shrink-0 text-stone-400" strokeWidth={2.5} />
                    )}
                    <p className="text-[13.5px] leading-snug text-gray-700">{l.legal}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUANDO USAR CADA */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-white p-7">
              <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-widest text-stone-700">
                Use {c.concorrente} quando
              </p>
              <ul className="space-y-3">
                {c.quandoEle.map((q, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] leading-snug text-gray-700">
                    <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" strokeWidth={2.5} />
                    {q}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-brand bg-white p-7">
              <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                Use a <span className="normal-case">+legal_</span> quando
              </p>
              <ul className="space-y-3">
                {c.quandoLegal.map((q, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] leading-snug text-gray-700">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand" strokeWidth={2.5} />
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONCLUSÃO */}
      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mx-auto max-w-[820px] rounded-2xl border border-brand-light bg-brand-tint p-8 md:p-10">
            <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
              Resumo honesto
            </p>
            <p className="text-lg leading-relaxed text-gray-900">{c.conclusao}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand text-white">
        <div className="container-soma py-14 md:py-16">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="eyebrow-light mb-4">Próximo passo</p>
            <h2 className="mb-5 font-title text-2xl font-bold tracking-tighter md:text-3xl">
              Quer entender se a +legal_ faz sentido para o seu cenário?
            </h2>
            <p className="mx-auto mb-8 max-w-[560px] text-[15px] leading-relaxed text-white/85">
              Conversa de 30 minutos com a equipe, sem demo de slide. Você sai sabendo se faz sentido, ou que outra ferramenta cobre melhor o seu caso.
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
    </>
  );
}
