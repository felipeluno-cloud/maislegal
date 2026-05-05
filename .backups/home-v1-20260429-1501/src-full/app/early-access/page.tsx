import {
  Gift,
  Zap,
  MessageSquare,
  ShieldCheck,
  Compass,
  Lock
} from "lucide-react";
import { Button } from "@/components/base/Button";
import { CtaDark } from "@/components/base/CtaDark";

const BENEFITS = [
  {
    icon: Gift,
    title: "Operador gratuito para sempre",
    body: "Cadastrou no Early Access? O primeiro operador é gratuito. Sem expiração. Compromisso de longo prazo."
  },
  {
    icon: Zap,
    title: "Acesso prioritário a novas funcionalidades",
    body: "Entrega gradual. As funcionalidades chegam primeiro a quem está no Early Access, antes do lançamento público."
  },
  {
    icon: MessageSquare,
    title: "Acesso direto aos fundadores",
    body: "Feedback ouvido por quem decide. Conversas regulares com Rafael, Paula, Luis e Raul orientam a evolução do produto."
  },
  {
    icon: ShieldCheck,
    title: "20% de desconto na câmara SOMA",
    body: "Quando precisar resolver uma disputa, taxas da câmara SOMA com 20% de desconto para usuários Premium."
  },
  {
    icon: Compass,
    title: "Onboarding assistido",
    body: "Importação dos primeiros contratos com apoio direto da equipe. Configuração inicial em horas, do zero ao primeiro alerta funcional."
  },
  {
    icon: Lock,
    title: "Preço de lançamento garantido",
    body: "Os primeiros workspaces preservam o preço de lançamento. Sem reajustes futuros, mesmo após a +legal_ consolidar tração de mercado."
  }
];

const FAQ = [
  {
    q: "É realmente gratuito?",
    a: "Sim. O primeiro operador de cada workspace é gratuito permanentemente. Sem cartão de crédito, sem trial limitado. A partir do segundo operador, R$500/mês."
  },
  {
    q: "Quanto tempo dura o Early Access?",
    a: "Não há prazo fixo. O Early Access fecha quando atingirmos o número de workspaces que conseguimos acompanhar com qualidade. Os benefícios permanecem para quem entrou."
  },
  {
    q: "Posso convidar a outra parte do contrato?",
    a: "Sim. Visitantes (acesso somente leitura) não geram cobrança. A outra parte do contrato acessa gratuitamente como visitante."
  },
  {
    q: "Como funciona o cancelamento?",
    a: "Sem multa, sem fidelidade. Você cancela quando quiser. Os contratos exportáveis em formato aberto."
  }
];

export default function EarlyAccessPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="container-soma py-16 md:py-24">
          <div className="max-w-[820px]">
            <p className="eyebrow mb-6">Early Access</p>
            <h1 className="h-soma-lg mb-6">
              Os primeiros workspaces moldam a +legal_.
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
              Não é fila de espera passiva. Trata-se de uma curadoria ativa:
              quem ingressa agora obtém acesso prioritário, voz no
              desenvolvimento do produto e operador gratuito permanente.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <p className="eyebrow mb-4">Benefícios do Early Access</p>
          <h2 className="h-soma mb-12 max-w-[780px]">
            Seis razões para entrar agora, e não depois.
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map(b => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="card-soma flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-lg"
                >
                  <Icon className="size-7 text-brand" strokeWidth={1.5} />
                  <h3 className="font-title text-lg font-bold leading-snug text-gray-900">
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

      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow mb-4">Cadastro</p>
              <h2 className="h-soma mb-6">Diga quem você é. A gente responde em 3 dias úteis.</h2>
              <p className="text-lg leading-relaxed text-gray-600">
                A equipe da +legal_ entra em contato para alinhar expectativas,
                entender seu portfólio de contratos e acompanhar a importação
                inicial.
              </p>
            </div>

            <form className="card-soma flex flex-col gap-5">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Nome completo
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  E-mail corporativo
                </label>
                <input
                  type="email"
                  required
                  className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
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
              <Button type="submit" variant="primary" size="lg" className="mt-2">
                Enviar cadastro
              </Button>
              <p className="text-center text-xs text-stone-500">
                A gente responde em até 3 dias úteis.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mb-12 max-w-[780px]">
            <p className="eyebrow mb-4">Perguntas frequentes</p>
            <h2 className="h-soma">Quatro dúvidas comuns sobre o Early Access.</h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {FAQ.map(f => (
              <div key={f.q} className="card-soma">
                <h3 className="mb-3 font-title text-lg font-bold text-gray-900">
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
