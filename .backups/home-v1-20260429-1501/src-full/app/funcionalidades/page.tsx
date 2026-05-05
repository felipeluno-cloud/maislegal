import {
  Users,
  Bell,
  FilePlus,
  History,
  Cog,
  Scale,
  X
} from "lucide-react";
import { CtaDark } from "@/components/base/CtaDark";

const BLOCOS = [
  {
    icon: Users,
    title: "Ambiente cooperativo",
    body: "Todos os envolvidos no contrato, em condições iguais. Não é o sistema do fornecedor nem do cliente. É de todos, sem favorecimento de quem comprou a ferramenta."
  },
  {
    icon: Bell,
    title: "Monitoramento e alertas",
    body: "Cumprimentos e ajustes acompanhados na plataforma. Alertas automáticos D-30, D-60 e D-90. Nada vence sem aviso."
  },
  {
    icon: FilePlus,
    title: "Aditivos formalizados",
    body: "Pequenas concessões deixam de ser apenas conversa. Cada ajuste vira aditivo registrado, com aprovação documentada das duas partes."
  },
  {
    icon: History,
    title: "Histórico imutável",
    body: "Log auditável. Versões com autoria, comentários vinculados à cláusula, registro de cada decisão. Pronto quando você precisar."
  },
  {
    icon: Cog,
    title: "Tecnologia que extrai o que você precisa monitorar",
    body: "Cláusulas viram obrigações rastreáveis e eventos de calendário. Você decide o que fazer com cada alerta. A tecnologia organiza, as pessoas decidem."
  },
  {
    icon: Scale,
    title: "Resolução SOMA integrada",
    body: "Quando vira disputa, tudo já está pronto. A nossa câmara de mediação e arbitragem, SOMA, recebe o histórico completo do contrato com um clique."
  }
];

const NEGACOES = [
  "Substituir advogados",
  "Assinatura digital (integramos)",
  "Inteligência artificial tomando decisões",
  "Drive ou repositório genérico",
  "Ser a câmara SOMA"
];

export default function FuncionalidadesPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="container-soma py-16 md:py-24">
          <div className="max-w-[820px]">
            <p className="eyebrow mb-6">Funcionalidades</p>
            <h1 className="h-soma-lg mb-6">
              O ciclo completo do contrato.<br />
              As etapas em execução que nenhuma outra ferramenta cobre.
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
              Criação e assinatura, todo o mercado tem. Renovação, todo o
              mercado tem. O dia a dia em execução, ninguém tem. É aí que a
              +legal_ vive.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <p className="eyebrow mb-4">Os 6 blocos</p>
          <h2 className="h-soma mb-12 max-w-[780px]">
            Seis funcionalidades que sustentam o ciclo completo.
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {BLOCOS.map(b => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="card-soma flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-lg"
                >
                  <Icon className="size-7 text-brand" strokeWidth={1.5} />
                  <h3 className="font-title text-xl font-bold leading-snug text-gray-900">
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
              <p className="eyebrow mb-4">Filtro</p>
              <h2 className="h-soma mb-6">O que a +legal_ não faz.</h2>
              <p className="text-lg leading-relaxed text-gray-600">
                Honestidade sobre limites. A +legal_ sabe exactamente o que faz.
                E sabe igualmente o que não faz.
              </p>
            </div>

            <ul className="card-soma flex flex-col gap-4">
              {NEGACOES.map(n => (
                <li key={n} className="flex items-start gap-3 border-b border-stone-200 pb-3 last:border-b-0 last:pb-0">
                  <X className="size-5 flex-shrink-0 text-stone-400" strokeWidth={2} />
                  <p className="text-base font-medium text-gray-900">{n}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaDark
        title="Operador grátis para sempre. Sem cartão."
        body="Os primeiros workspaces moldam a +legal_. Acesso prioritário, voz no desenvolvimento e preço de lançamento garantido."
      />
    </>
  );
}
