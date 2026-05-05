import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/base/Button";
import { CtaDark } from "@/components/base/CtaDark";

const PLANOS = [
  {
    label: "Plano Gratuito",
    price: "R$ 0",
    period: "para sempre",
    desc: "1 operador por workspace, permanentemente. Visitantes (acesso somente leitura), sem limite, sem custo.",
    features: [
      "Repositório central",
      "Histórico de versões",
      "Alertas básicos",
      "Visitantes ilimitados",
      "Convite para a outra parte"
    ],
    audience: "Fundadores, profissionais autónomos, empresas testando a plataforma.",
    cta: { label: "Entrar para o Early Access", href: "/early-access" },
    highlight: false
  },
  {
    label: "Plano Time",
    price: "R$ 500",
    period: "por operador / mês",
    desc: "A partir do 2º operador. Todos os recursos da plataforma para times.",
    features: [
      "Tudo do plano Gratuito",
      "Dashboard de portfólio",
      "Integrações (Slack, Calendar, CRM)",
      "API",
      "Suporte prioritário"
    ],
    audience: "Equipes de operações, times jurídicos internos, empresas com portfólio de contratos.",
    cta: { label: "Entrar para o Early Access", href: "/early-access" },
    highlight: true
  },
  {
    label: "Escritórios",
    price: "R$ 250",
    period: "por operador / mês",
    desc: "Modelo diferenciado por relacionamentos ativos e credenciais externas. Estrutura exata pendente.",
    features: [
      "Tudo do plano Time",
      "Acesso como advogado externo",
      "Visibilidade do portfólio do cliente",
      "Exportação para câmara",
      "Preço por relacionamentos ativos"
    ],
    audience: "Bancas consultivas e contenciosas que adotam para portfólio de clientes.",
    cta: { label: "Falar com a equipe", href: "mailto:contato@maislegal.tech" },
    highlight: false
  }
];

const FAQ = [
  {
    q: "O que conta como 'operador'?",
    a: "Qualquer usuário que edita, assina ou aprova contratos. Visitantes (acesso somente leitura) não contam como operadores."
  },
  {
    q: "Como funciona o desconto SOMA do Premium?",
    a: "20% de desconto nas taxas de administração da câmara SOMA. Não se aplica aos honorários de árbitros ou mediadores."
  },
  {
    q: "O que muda no Premium?",
    a: "Add-on sobre o plano base. Inclui desconto no preço por operador, 20% desconto nas taxas SOMA e biblioteca expandida de templates."
  },
  {
    q: "Há trial limitado?",
    a: "O primeiro operador é gratuito permanentemente, não é trial. Você usa quanto tempo quiser, com um operador, sem custo."
  },
  {
    q: "Há contrato anual?",
    a: "Não. Pagamento mensal, sem fidelidade. Você cancela quando quiser."
  },
  {
    q: "Como cancelar?",
    a: "Pelo próprio dashboard, em poucos cliques. Os contratos ficam acessíveis para exportação em formato aberto por 90 dias após o cancelamento."
  }
];

export default function PrecosPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="container-soma py-16 md:py-24">
          <div className="max-w-[820px]">
            <p className="eyebrow mb-6">Preços</p>
            <h1 className="h-soma-lg mb-6">
              Operador grátis para sempre.<br />
              Os outros, R$500.
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
              Sem demo obrigatória. Sem pricing escondido. O que está escrito é
              o que você paga.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PLANOS.map(p => (
              <div
                key={p.label}
                className={`card-soma flex flex-col gap-5 ${
                  p.highlight ? "border-2 border-brand shadow-lg" : ""
                }`}
              >
                {p.highlight && (
                  <span className="self-start rounded-full bg-brand px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white">
                    Mais comum
                  </span>
                )}
                <div>
                  <p className="mb-2 font-mono text-xs uppercase tracking-widest text-stone-500">
                    {p.label}
                  </p>
                  <p className="font-title text-4xl font-extrabold text-brand">
                    {p.price}
                  </p>
                  <p className="text-sm text-gray-500">{p.period}</p>
                </div>

                <p className="text-sm leading-relaxed text-gray-700">{p.desc}</p>

                <ul className="space-y-2">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="mt-0.5 size-4 flex-shrink-0 text-brand" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <p className="border-t border-stone-200 pt-4 text-xs italic text-gray-600">
                  {p.audience}
                </p>

                <Button
                  href={p.cta.href}
                  variant={p.highlight ? "primary" : "secondary"}
                  size="md"
                  className="w-full"
                >
                  {p.cta.label}
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="card-highlight">
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-brand">
                Add-on Premium
              </p>
              <h3 className="mb-3 font-title text-xl font-bold text-gray-900">
                Premium é add-on, não tier.
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                Desconto no preço por operador. 20% de desconto nas taxas da
                câmara SOMA. Biblioteca expandida de templates de contrato. Não
                é um plano separado, soma sobre o plano base que você já tem.
              </p>
            </div>
            <div className="card-soma">
              <p className="mb-2 font-mono text-xs uppercase tracking-widest text-stone-500">
                Princípio de pricing
              </p>
              <h3 className="mb-3 font-title text-xl font-bold text-gray-900">
                Uma plataforma. Sem SKU escondido, sem upsell surpresa.
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                A +legal_ não fragmenta o produto em módulos vendidos
                separadamente. Você sabe o que tem, o que não tem, e o que
                custa cada operador a partir do segundo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mb-12 max-w-[780px]">
            <p className="eyebrow mb-4">Perguntas frequentes</p>
            <h2 className="h-soma">Seis dúvidas que sempre aparecem.</h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {FAQ.map(f => (
              <div key={f.q} className="card-soma">
                <h3 className="mb-3 font-title text-base font-bold text-gray-900">
                  {f.q}
                </h3>
                <p className="text-sm leading-relaxed text-gray-700">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaDark
        eyebrow="Comece sem custo"
        title="Operador grátis para sempre. Os outros, R$500."
        body="Sem cartão. Sem trial limitado. Sem fidelidade."
      />
    </>
  );
}
