import { Signature, Calendar, Sparkles } from "lucide-react";
import { CtaDark } from "@/components/base/CtaDark";

const CATEGORIAS = [
  {
    icon: Signature,
    label: "Assinatura digital",
    title: "Integramos. Não substituímos.",
    body: "As principais plataformas brasileiras de assinatura eletrónica. O contrato é assinado lá. A vida do contrato acontece aqui.",
    quote: "A assinatura é etapa, não produto inteiro.",
    status: "Disponível"
  },
  {
    icon: Calendar,
    label: "Calendário, CRM e comunicação",
    title: "Conecta com o que você já usa.",
    body: "Slack, Google Calendar, HubSpot, Pipedrive. As obrigações do contrato sincronizam com o ritmo da operação.",
    quote: "Para que o contrato siga o pipeline.",
    status: "Em construção, Q3 2026"
  },
  {
    icon: Sparkles,
    label: "Add-ons planejados",
    title: "Serviços complementares.",
    body: "Consulta JUCESP, conexão com especialistas SOMA, digitalização de portfólio legado. Para quando a operação cresce.",
    quote: "Não anunciado como disponível.",
    status: "Futuro"
  }
];

const OBJECOES = [
  {
    q: "Já tenho ferramenta de assinatura?",
    a: "A assinatura é etapa. A +legal_ gerencia o que acontece depois. Integração nativa com as principais plataformas do mercado."
  },
  {
    q: "Tenho Drive ou pasta organizada?",
    a: "Drive guarda arquivo. A +legal_ guarda contexto, histórico e obrigações. E a outra parte do contrato vê a mesma coisa, ao mesmo tempo."
  },
  {
    q: "Uso planilha para acompanhar?",
    a: "A planilha não acompanha o contrato. A obrigação fica esquecida porque depende de alguém atualizar. Aqui, o sistema atualiza."
  }
];

export default function IntegracoesPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="container-soma py-16 md:py-24">
          <div className="max-w-[820px]">
            <p className="eyebrow mb-6">Integrações</p>
            <h1 className="h-soma-lg mb-6">
              A assinatura é etapa, não produto inteiro.
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
              A +legal_ complementa as ferramentas que você já tem. Não
              substitui assinatura digital, não substitui Drive, não substitui
              CRM. Cobre o espaço entre eles.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <p className="eyebrow mb-4">Três categorias</p>
          <h2 className="h-soma mb-12 max-w-[780px]">
            Parceiros, roadmap e add-ons.
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {CATEGORIAS.map(c => {
              const Icon = c.icon;
              return (
                <div key={c.label} className="card-soma flex flex-col gap-4">
                  <Icon className="size-7 text-brand" strokeWidth={1.5} />
                  <p className="font-mono text-xs uppercase tracking-widest text-stone-500">
                    {c.label}
                  </p>
                  <h3 className="font-title text-xl font-bold text-gray-900">
                    {c.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-gray-700">
                    {c.body}
                  </p>
                  <p className="border-t border-stone-200 pt-4 text-sm italic text-gray-600">
                    "{c.quote}"
                  </p>
                  <span className="pill self-start">{c.status}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mb-12 max-w-[780px]">
            <p className="eyebrow mb-4">Tira de objeções</p>
            <h2 className="h-soma">"Já uso..." Três respostas curtas.</h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {OBJECOES.map(o => (
              <div key={o.q} className="card-highlight">
                <h3 className="mb-3 font-title text-lg font-bold text-brand">
                  "{o.q}"
                </h3>
                <p className="text-sm leading-relaxed text-gray-700">{o.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaDark
        title="Comece com um contrato. Cresça quando quiser."
        body="Operador grátis para sempre. Visitantes (acesso somente leitura) sem cobrança."
      />
    </>
  );
}
