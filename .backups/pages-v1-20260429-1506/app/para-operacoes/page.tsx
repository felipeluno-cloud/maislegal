import { ArrowRight, Briefcase, TrendingUp, FileSearch } from "lucide-react";
import { Button } from "@/components/base/Button";
import { CtaDark } from "@/components/base/CtaDark";

const DORES = [
  "SLAs perdidos em planilhas desatualizadas",
  "Renovações que passam da data sem aviso",
  "Fornecedores mudam prazos e você só descobre depois",
  "Multas e penalidades que poderiam ter sido evitadas",
  "Histórico que some quando o gestor responsável sai"
];

const GATILHOS = [
  "Renovação automática indesejada que gera custo ou conflito",
  "Colaborador responsável pelos contratos pede demissão",
  "Disputa com fornecedor exige reconstrução de histórico inexistente",
  "Auditoria interna ou externa questiona o estado dos contratos"
];

const OBJECOES = [
  {
    q: "Já temos um processo.",
    a: "Qual é o processo para saber o que vence nos próximos 60 dias? Na maioria dos casos, não há resposta clara."
  },
  {
    q: "Mais uma ferramenta na stack.",
    a: "O primeiro operador é gratuito. Comece com um contrato e avalie o valor antes de migrar tudo."
  },
  {
    q: "Jurídico precisa aprovar.",
    a: "Oferecemos acesso gratuito para o jurídico como visitante. Vê o produto antes de decidir."
  }
];

export default function ParaOperacoesPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="container-soma py-16 md:py-24">
          <div className="max-w-[820px]">
            <p className="eyebrow mb-6">Para Operações</p>
            <h1 className="h-soma-lg mb-6">
              Três contratos renovaram sem você saber.
            </h1>
            <p className="mb-10 text-lg leading-relaxed text-gray-600 md:text-xl">
              Diretora de Operações em outsourcing B2B. 50 a 300 contratos ativos.
              SLAs, obrigações, renovações. Quando algo falha, o cliente reclama
              antes de você saber.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/early-access" variant="primary" size="lg">
                Ver o portfólio pelos seus olhos <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mb-10 max-w-[780px]">
            <p className="eyebrow mb-4">Cenário antes / depois</p>
            <h2 className="h-soma mb-4">Renovação automática R$102k evitada.</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-l-4 border-stone-200 bg-rose-50 p-7" style={{ borderLeftColor: "#dc2626" }}>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-red-700">
                Sem +legal_
              </p>
              <h3 className="mb-4 font-title text-xl font-bold text-gray-900">
                Cláusula de renovação enterrada na cláusula 12.
              </h3>
              <ul className="space-y-2 text-[15px] leading-relaxed text-gray-700">
                <li>• Prazo de 90 dias para cancelamento que ninguém leu</li>
                <li>• Único aviso era e-mail antigo do fornecedor</li>
                <li>• Renovou automaticamente por mais 12 meses</li>
                <li>• Empresa continuou pagando serviço que não queria</li>
              </ul>
              <p className="mt-5 border-t border-red-200 pt-4 font-bold text-red-700">
                Custo: R$102.000 comprometidos involuntariamente.
              </p>
            </div>

            <div className="rounded-xl border border-l-4 border-stone-200 bg-emerald-50 p-7" style={{ borderLeftColor: "#059669" }}>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-emerald-700">
                Com +legal_
              </p>
              <h3 className="mb-4 font-title text-xl font-bold text-gray-900">
                Sistema lê o contrato e agenda alertas automáticos.
              </h3>
              <ul className="space-y-2 text-[15px] leading-relaxed text-gray-700">
                <li>• Alerta 90 dias antes do prazo de cancelamento</li>
                <li>• Alerta 30 dias antes da renovação automática</li>
                <li>• Cancelamento via plataforma com timestamp</li>
                <li>• Outra parte confirma recebimento dentro do ambiente</li>
              </ul>
              <p className="mt-5 border-t border-emerald-200 pt-4 font-bold text-emerald-700">
                Resultado: R$102.000 evitados. Decisão tomada no momento certo.
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
              <h2 className="h-soma mb-8">O que tira o sono da operação.</h2>
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
              <h2 className="h-soma mb-8">Visibilidade e previsibilidade operacional.</h2>
              <div className="space-y-4">
                {[
                  { icon: Briefcase, title: "Dashboard centralizado", body: "Todos os contratos ativos num só lugar, com status visual." },
                  { icon: TrendingUp, title: "Alertas automáticos", body: "D-30, D-60, D-90. Nenhum vencimento como surpresa." },
                  { icon: FileSearch, title: "Histórico que não some", body: "O contexto pertence ao contrato, não ao colaborador." }
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
            <p className="eyebrow mb-5">Punchline</p>
            <p className="font-title text-3xl font-bold leading-tight text-brand md:text-4xl">
              "O CEO vê resultado.<br />
              A diretora vê o que gera o resultado."
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mb-12 max-w-[780px]">
            <p className="eyebrow mb-4">4 gatilhos de adoção</p>
            <h2 className="h-soma">Quando a +legal_ entra na conversa.</h2>
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
        title="Ver o portfólio pelos seus olhos."
        body="Alertas antes do problema. Histórico quando o problema chega."
      />
    </>
  );
}
