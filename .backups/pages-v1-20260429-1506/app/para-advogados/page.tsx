import { ArrowRight, Scale, Briefcase, Users, FileSearch } from "lucide-react";
import { Button } from "@/components/base/Button";
import { CtaDark } from "@/components/base/CtaDark";

const PERFIS = [
  {
    label: "Consultivo",
    title: "Pré-conflito: drafting, análise de risco, negociação.",
    body: "Cliente tem contratos espalhados, sem repositório central, alertas de vencimento manuais.",
    argument:
      "Você passa de reativo a proativo. Avisa o cliente do problema antes de ele chegar até você."
  },
  {
    label: "Contencioso",
    title: "Pós-conflito: defesa, arbitragem, reconstrução de histórico.",
    body: "Caso chega, você passa três semanas reconstruindo o que aconteceu antes de montar a estratégia.",
    argument:
      "O log imutável da +legal_ é a diferença entre um caso bem documentado e um mês perdido em e-mails."
  }
];

export default function ParaAdvogadosPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="container-soma py-16 md:py-24">
          <div className="max-w-[820px]">
            <p className="eyebrow mb-6">Para Advogados</p>
            <h1 className="h-soma-lg mb-6">
              Quanto tempo você gasta reconstruindo contratos antes de cada
              arbitragem?
            </h1>
            <p className="mb-10 text-lg leading-relaxed text-gray-600 md:text-xl">
              Para escritórios consultivos e contenciosos. Acesso como advogado
              externo. Preço diferenciado por relacionamentos ativos. A
              ferramenta que seus clientes deveriam usar desde o início.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="mailto:contato@maislegal.tech" variant="primary" size="lg">
                Falar com a equipe <ArrowRight className="size-4" />
              </Button>
              <Button href="/early-access" variant="secondary" size="lg">
                Early Access individual
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <p className="eyebrow mb-4">Dois perfis</p>
          <h2 className="h-soma mb-12 max-w-[780px]">
            Consultivo ou contencioso. Abordagem distinta para cada.
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {PERFIS.map(p => (
              <div key={p.label} className="card-soma flex flex-col gap-4">
                <p className="font-mono text-xs uppercase tracking-widest text-brand">
                  {p.label}
                </p>
                <h3 className="font-title text-2xl font-bold leading-snug text-gray-900">
                  {p.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-gray-700">
                  {p.body}
                </p>
                <p className="border-t border-stone-200 pt-4 text-base italic text-brand">
                  "{p.argument}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mb-10 max-w-[780px]">
            <p className="eyebrow mb-4">Cenário contencioso</p>
            <h2 className="h-soma mb-4">
              11 versões. 3 semanas reconstruindo. Resultado: assimetria.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-l-4 border-stone-200 bg-rose-50 p-7" style={{ borderLeftColor: "#dc2626" }}>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-red-700">
                Sem +legal_
              </p>
              <h3 className="mb-4 font-title text-xl font-bold text-gray-900">
                O que o advogado encontrou
              </h3>
              <ul className="space-y-2 text-[15px] leading-relaxed text-gray-700">
                <li>• 11 arquivos de contrato em drives diferentes</li>
                <li>• Histórico de negociação fragmentado em e-mails</li>
                <li>• Três semanas em investigação preliminar</li>
                <li>• Combinados verbais sobre SLA sem evidência</li>
              </ul>
              <p className="mt-5 border-t border-red-200 pt-4 font-bold text-red-700">
                O caso foi enfraquecido pela falta de documentação.
              </p>
            </div>

            <div className="rounded-xl border border-l-4 border-stone-200 bg-emerald-50 p-7" style={{ borderLeftColor: "#059669" }}>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-emerald-700">
                Com +legal_
              </p>
              <h3 className="mb-4 font-title text-xl font-bold text-gray-900">
                O que a outra parte apresentou
              </h3>
              <ul className="space-y-2 text-[15px] leading-relaxed text-gray-700">
                <li>• Log imutável com identificação da versão final</li>
                <li>• Cada proposta, contraproposta e aprovação registrada</li>
                <li>• Registro de obrigações cumpridas e descumpridas</li>
                <li>• Dossiê em formato aceito pela câmara</li>
              </ul>
              <p className="mt-5 border-t border-emerald-200 pt-4 font-bold text-emerald-700">
                3 semanas de reconstrução eliminadas por caso.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-tint">
        <div className="container-soma section-soma">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="eyebrow mb-4">Preço diferenciado</p>
              <h2 className="h-soma mb-6">R$250 por operador, modelo por relacionamentos ativos.</h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Modelo diferenciado para evitar custo desproporcional em
                escritórios pequenos com muitos advogados. O desconto considera
                volume de relacionamentos ativos e credenciais externas
                (especialização em arbitragem, OAB).
              </p>
              <Button href="mailto:contato@maislegal.tech" variant="primary" size="lg">
                Falar com a equipe sobre o pricing <ArrowRight className="size-4" />
              </Button>
            </div>

            <div className="card-soma flex flex-col justify-center bg-white text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-stone-500">
                Sweet spot
              </p>
              <p className="my-3 font-title text-4xl font-bold text-brand">
                R$200k - R$2M
              </p>
              <p className="text-sm text-gray-700">
                Faixa onde o custo de reconstrução é desproporcional ao valor
                da causa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mb-12 max-w-[780px]">
            <p className="eyebrow mb-4">Como o escritório usa</p>
            <h2 className="h-soma">Acesso completo ao histórico do cliente.</h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                icon: FileSearch,
                title: "Acesso como advogado externo",
                body: "Lê o contrato, vê o histórico, prepara o caso. Sem abrir 20 arquivos."
              },
              {
                icon: Briefcase,
                title: "Visibilidade do portfólio",
                body: "Visão consolidada do portfólio contratual de cada cliente."
              },
              {
                icon: Scale,
                title: "Exportação para a câmara",
                body: "Dossiê em formato aceito pela câmara SOMA. Sem reconstrução."
              }
            ].map(b => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="card-soma flex flex-col gap-4">
                  <Icon className="size-7 text-brand" strokeWidth={1.5} />
                  <h3 className="font-title text-lg font-bold text-gray-900">
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

      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-5">Vector de crescimento</p>
            <p className="mb-4 font-title text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
              "Cada contrato seu vira workspace.<br />
              Os clientes do seu cliente entram."
            </p>
            <p className="text-lg text-gray-700">
              Um escritório que adopta a +legal_ introduz a plataforma a
              dezenas de clientes corporativos. O retorno do escritório é
              multiplicado pela rede.
            </p>
          </div>
        </div>
      </section>

      <CtaDark
        eyebrow="Próximo passo"
        title="Falar com a equipe sobre o modelo para escritórios."
        body="Preço diferenciado, onboarding com curadoria, primeiros workspaces moldam o produto."
        ctaLabel="Falar com a equipe"
        ctaHref="mailto:contato@maislegal.tech"
        ctaSecondaryLabel="Early Access individual"
        ctaSecondaryHref="/early-access"
      />
    </>
  );
}
