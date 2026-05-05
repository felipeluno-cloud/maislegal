import { ArrowRight, Sparkles, Lock, Building2 } from "lucide-react";
import { Button } from "@/components/base/Button";
import { CtaDark } from "@/components/base/CtaDark";

const DORES = [
  "Disputas de escopo com clientes que têm mais recursos jurídicos",
  "Sem registro claro do que foi combinado e do que mudou",
  "Custo e desgaste do contencioso judicial para uma PME",
  "Medo de litigar e perder o cliente, mesmo tendo razão",
  "Contrato assinado, salvo no Drive, e nunca mais olhado"
];

const GATILHOS = [
  "Perde prazo e recebe notificação extrajudicial de multa contratual",
  "Cliente corporativo exige um contrato mais estruturado",
  "Disputa de escopo sem registro do que foi acordado",
  "Renova automaticamente uma ferramenta que queria cancelar"
];

const OBJECOES = [
  {
    q: "Meu cliente não vai usar.",
    a: "A parte convidada acessa como visitante, sem criar conta, sem custo. O onboarding da outra parte leva minutos."
  },
  {
    q: "É caro para o meu tamanho.",
    a: "O primeiro operador é gratuito permanente. A partir do segundo, R$500/mês. Quanto custou a última disputa?"
  },
  {
    q: "Tenho Drive com tudo.",
    a: "Drive guarda arquivo. A +legal_ guarda contexto, histórico e obrigações. E a outra parte vê a mesma coisa."
  }
];

export default function ParaPmesPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="container-soma py-16 md:py-24">
          <div className="max-w-[820px]">
            <p className="eyebrow mb-6">Para PMEs e Sócias-fundadoras</p>
            <h1 className="h-soma-lg mb-6">
              Cláusula esquecida.<br />
              Prazo vencido.<br />
              Multa de R$4.000.
            </h1>
            <p className="mb-10 text-lg leading-relaxed text-gray-600 md:text-xl">
              Sócia-fundadora de PME de serviços. Contrata com clientes
              corporativos que têm o jurídico inteiro do lado deles. Sem time
              jurídico interno, mas com os mesmos riscos contratuais.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/early-access" variant="primary" size="lg">
                Comece agora, sem cartão <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mb-10 max-w-[780px]">
            <p className="eyebrow mb-4">Cenário antes / depois</p>
            <h2 className="h-soma mb-4">Multa de R$4.000 evitada por alerta automático.</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-l-4 border-stone-200 bg-rose-50 p-7" style={{ borderLeftColor: "#dc2626" }}>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-red-700">
                Sem +legal_
              </p>
              <h3 className="mb-4 font-title text-xl font-bold text-gray-900">
                Contrato assinado, salvo no Drive, nunca mais aberto.
              </h3>
              <ul className="space-y-2 text-[15px] leading-relaxed text-gray-700">
                <li>• Cláusula de entrega parcial em 45 dias não estava no calendário</li>
                <li>• No dia 50, cliente envia notificação formal de multa</li>
                <li>• 5% do valor do contrato (R$4.000)</li>
                <li>• Relacionamento afetado por percepção de desorganização</li>
              </ul>
              <p className="mt-5 border-t border-red-200 pt-4 font-bold text-red-700">
                Custo: multa + tempo + relacionamento.
              </p>
            </div>

            <div className="rounded-xl border border-l-4 border-stone-200 bg-emerald-50 p-7" style={{ borderLeftColor: "#059669" }}>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-emerald-700">
                Com +legal_
              </p>
              <h3 className="mb-4 font-title text-xl font-bold text-gray-900">
                Tecnologia extrai a obrigação ao carregar o contrato.
              </h3>
              <ul className="space-y-2 text-[15px] leading-relaxed text-gray-700">
                <li>• Alerta automático 15 dias antes do prazo</li>
                <li>• As duas partes notificadas: o cliente vê o monitoramento</li>
                <li>• Tempo hábil para negociar com o pedido registrado</li>
                <li>• Conversa de ajuste antes da multa, não depois</li>
              </ul>
              <p className="mt-5 border-t border-emerald-200 pt-4 font-bold text-emerald-700">
                Resultado: multa evitada. Relacionamento preservado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow mb-4">As 5 dores principais</p>
              <h2 className="h-soma mb-8">O que pesa para a PME que contrata grande.</h2>
              <ul className="space-y-3">
                {DORES.map(d => (
                  <li
                    key={d}
                    className="flex items-start gap-3 border-b border-stone-200 pb-3 last:border-b-0"
                  >
                    <span className="mt-1.5 size-1.5 flex-shrink-0 rounded-full bg-brand" />
                    <span className="text-base text-gray-700">{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow mb-4">O que muda com +legal_</p>
              <h2 className="h-soma mb-8">Resolução confidencial sem litígio.</h2>
              <div className="space-y-4">
                {[
                  { icon: Sparkles, title: "Histórico único e bilateral", body: "PME e cliente corporativo veem o mesmo histórico. Sem versão A vs versão B." },
                  { icon: Lock, title: "Mediação SOMA confidencial", body: "Resolução privada que preserva o relacionamento comercial." },
                  { icon: Building2, title: "Mesmo acesso que o cliente grande", body: "O ambiente trata as duas partes em condições iguais." }
                ].map(b => {
                  const Icon = b.icon;
                  return (
                    <div key={b.title} className="card-soma flex items-start gap-4">
                      <Icon className="size-6 flex-shrink-0 text-brand" strokeWidth={1.5} />
                      <div>
                        <h3 className="mb-1 font-title text-lg font-bold text-gray-900">
                          {b.title}
                        </h3>
                        <p className="text-sm text-gray-700">{b.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-tint">
        <div className="container-soma section-soma">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-5">Compromisso permanente</p>
            <p className="mb-4 font-title text-3xl font-bold leading-tight text-brand md:text-4xl">
              "Começa de graça. Cresce quando faz sentido."
            </p>
            <p className="text-lg text-gray-700">
              Operador grátis para sempre. Sem cartão. Sem expiração.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mb-12 max-w-[780px]">
            <p className="eyebrow mb-4">4 gatilhos de adoção</p>
            <h2 className="h-soma">Quando a PME procura uma solução.</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {GATILHOS.map((g, i) => (
              <div key={g} className="card-soma flex items-start gap-4">
                <span className="font-mono text-sm font-bold text-brand">
                  0{i + 1}
                </span>
                <p className="text-base text-gray-700">{g}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mb-12 max-w-[780px]">
            <p className="eyebrow mb-4">3 objeções típicas</p>
            <h2 className="h-soma">As perguntas que sempre aparecem.</h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {OBJECOES.map(o => (
              <div key={o.q} className="card-soma">
                <h3 className="mb-3 font-title text-base font-bold text-gray-900">
                  "{o.q}"
                </h3>
                <p className="text-sm leading-relaxed text-gray-700">{o.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaDark
        eyebrow="Comece agora"
        title="Todos os envolvidos no contrato, no mesmo ambiente."
        body="Operador grátis para sempre. Sem cartão. Sem compromisso."
      />
    </>
  );
}
