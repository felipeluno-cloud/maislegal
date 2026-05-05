import { FileText, Bell, Scale, ArrowRight } from "lucide-react";
import { Button } from "@/components/base/Button";
import { CtaDark } from "@/components/base/CtaDark";

const PASSOS = [
  {
    num: "01",
    icon: FileText,
    title: "Organize",
    body: "Faça upload de um contrato existente ou crie usando templates. A tecnologia da +legal_ extrai automaticamente as obrigações, prazos e partes envolvidas. Convide a outra parte para o ambiente. Ela acessa gratuitamente como visitante."
  },
  {
    num: "02",
    icon: Bell,
    title: "Monitore",
    body: "Receba alertas automáticos antes que prazos e obrigações cheguem. Formalize aditivos dentro da plataforma, com registro e aprovação das duas partes. Acompanhe o portfólio completo no dashboard: o que está em dia, o que precisa de atenção, o que vence nos próximos 90 dias."
  },
  {
    num: "03",
    icon: Scale,
    title: "Resolva",
    body: "Se surgir uma disputa, abra um procedimento na nossa câmara de mediação e arbitragem, SOMA, com um clique. O histórico completo já está disponível, sem reconstrução, sem perda de contexto. Mediação primeiro, com incentivo financeiro. Arbitragem se necessário. Resolução confidencial em meses, não anos."
  }
];

const CICLO = [
  { num: "01", label: "Criação", state: "dim" },
  { num: "02", label: "Assinatura", state: "dim" },
  { num: "03", label: "Pós-assinatura", state: "active" },
  { num: "04", label: "Monitoramento", state: "active" },
  { num: "05", label: "Aditivos", state: "active" },
  { num: "06", label: "Resolução", state: "soma" }
];

export default function ComoFuncionaPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="container-soma py-16 md:py-24">
          <div className="max-w-[820px]">
            <p className="eyebrow mb-6">Como funciona</p>
            <h1 className="h-soma-lg mb-6">
              Do acordo à resolução. Sem sair do ambiente.
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
              Três passos cobrem o ciclo completo do contrato. A +legal_ não
              substitui sua ferramenta de assinatura nem o seu jurídico. Cobre
              o que vem antes e o que vem depois.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <p className="eyebrow mb-4">Os 3 passos</p>
          <h2 className="h-soma mb-12 max-w-[780px]">
            Três etapas. Mesmo ambiente. Todos os envolvidos.
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {PASSOS.map(p => {
              const Icon = p.icon;
              return (
                <div
                  key={p.num}
                  className="card-soma flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="size-7 text-brand" strokeWidth={1.5} />
                    <span className="font-mono text-xs uppercase tracking-widest text-stone-500">
                      Passo {p.num}
                    </span>
                  </div>
                  <h3 className="font-title text-2xl font-extrabold tracking-tight text-gray-900">
                    {p.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-gray-700">
                    {p.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mb-12 max-w-[780px]">
            <p className="eyebrow mb-4">Ciclo de vida do contrato</p>
            <h2 className="h-soma mb-4">As seis etapas que cobrimos.</h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Em cinza, as etapas em que as ferramentas de gestão de contratos
              encerram a cobertura. Em azul, as etapas exclusivas da +legal_.
              Em peach, nossa câmara de mediação e arbitragem, SOMA.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
            {CICLO.map(s => (
              <div
                key={s.num}
                className={`rounded-xl p-5 ${
                  s.state === "dim"
                    ? "bg-stone-100 text-stone-500"
                    : s.state === "active"
                    ? "bg-brand text-white"
                    : "border-2 border-soma/40 bg-soma-bg text-soma"
                }`}
              >
                <p className="mb-2 font-mono text-[10px] uppercase tracking-widest opacity-60">
                  {s.num}
                </p>
                <p className="font-title text-base font-bold leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-tint">
        <div className="container-soma section-soma">
          <div className="mb-10 max-w-[780px]">
            <p className="eyebrow mb-4">Antes / depois</p>
            <h2 className="h-soma">Do contrato fragmentado ao ambiente único.</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-l-4 border-stone-200 bg-rose-50 p-7" style={{ borderLeftColor: "#dc2626" }}>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-red-700">
                Antes
              </p>
              <h3 className="mb-4 font-title text-2xl font-bold text-gray-900">
                23 dias por contrato
              </h3>
              <p className="text-[15px] leading-relaxed text-gray-700">
                E-mails cruzados, anexos versão 7, comparações manuais. Ninguém
                sabe qual é a versão final até a assinatura. O histórico se
                perde quando o gestor sai.
              </p>
              <p className="mt-4 font-mono text-[10px] italic text-stone-500">
                Estimativa de uso ilustrativo
              </p>
            </div>

            <div className="rounded-xl border border-l-4 border-stone-200 bg-emerald-50 p-7" style={{ borderLeftColor: "#059669" }}>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-emerald-700">
                Depois
              </p>
              <h3 className="mb-4 font-title text-2xl font-bold text-gray-900">
                6 dias por contrato
              </h3>
              <p className="text-[15px] leading-relaxed text-gray-700">
                As duas partes editam no mesmo ambiente. Versões com histórico
                de autoria. Comentários vinculados à cláusula. O contexto
                pertence ao contrato, não às pessoas.
              </p>
              <p className="mt-4 font-mono text-[10px] italic text-stone-500">
                Estimativa de uso ilustrativo
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaDark
        eyebrow="Quer ver com um contrato seu?"
        title="Entre para o Early Access. Operador grátis, sem cartão."
        body="A equipe da +legal_ acompanha a importação dos primeiros contratos."
      />
    </>
  );
}
