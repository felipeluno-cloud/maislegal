import { TriangleAlert, Monitor, Bell, History, Users } from "lucide-react";

const ANNOTATIONS = [
  {
    icon: Monitor,
    label: "Visão de portfólio",
    body: "Todos os contratos ativos, status visual."
  },
  {
    icon: Bell,
    label: "Alertas automáticos",
    body: "Vencimentos, renovações e SLAs antes do prazo."
  },
  {
    icon: History,
    label: "Histórico imutável",
    body: "Cada versão, cada aditivo, registrado com autoria."
  },
  {
    icon: Users,
    label: "Todos veem o mesmo",
    body: "Visitantes acessam sem custo. Quem participa do contrato vê a mesma versão, ao mesmo tempo."
  }
];

export function MockupPlataforma() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute h-[500px] w-[500px] rounded-full opacity-[0.04]"
          style={{ background: "var(--brand)", top: "-100px", left: "-150px" }}
        />
      </div>

      <div className="container-soma section-soma relative">
        <div className="mb-12 max-w-[820px]">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-tint px-3 py-1.5">
            <Monitor className="size-4 text-brand" strokeWidth={2} />
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
              A plataforma
            </span>
          </div>
          <h2 className="h-soma mb-4">O portfólio inteiro num lugar só.</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Status visual de cada contrato, alertas de renovação, obrigações
            pendentes. Tudo visível para todos os envolvidos, em condições
            iguais.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2.2fr_1fr]">
          {/* Mockup */}
          <div className="relative">
            {/* Background frame com sombra peach atrás */}
            <div
              className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-2xl"
              style={{ background: "var(--peach-bg)" }}
            />
            <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-xl">
              {/* Toolbar */}
              <div className="flex items-center gap-2 bg-brand px-5 py-3">
                <span className="size-2.5 rounded-full bg-white/25" />
                <span className="size-2.5 rounded-full bg-white/25" />
                <span className="size-2.5 rounded-full bg-white/25" />
                <span className="ml-3 font-mono text-[11px] text-white/80">
                  +legal_ · Workspace · Acme Consultoria
                </span>
              </div>

              <div className="flex flex-col md:flex-row">
                {/* Sidebar */}
                <aside className="border-b border-stone-200 p-4 md:w-[200px] md:border-b-0 md:border-r">
                  {[
                    { label: "Portfolio", active: true },
                    { label: "Contratos" },
                    { label: "Obrigações" },
                    { label: "Aditivos" },
                    { label: "Histórico" },
                    { label: "Resolução SOMA", soma: true }
                  ].map(item => (
                    <div
                      key={item.label}
                      className={`mb-1 rounded-lg px-3 py-2 text-[13px] font-medium ${
                        item.active
                          ? "bg-brand-tint font-semibold text-brand"
                          : item.soma
                          ? "text-soma"
                          : "text-gray-500"
                      }`}
                    >
                      {item.label}
                    </div>
                  ))}
                </aside>

                {/* Main */}
                <div className="flex-1 p-6 md:p-7">
                  <h4 className="mb-5 font-title text-lg font-bold text-gray-900">
                    Visão geral · 47 contratos ativos
                  </h4>

                  <div className="mb-5 grid grid-cols-3 gap-3">
                    {[
                      { label: "Vencem em 30d", val: "8" },
                      { label: "Aguardam aprovação", val: "3" },
                      { label: "Em renegociação", val: "2" }
                    ].map(s => (
                      <div key={s.label} className="rounded-lg bg-stone-50 p-3.5">
                        <p className="mb-2 font-mono text-[9px] uppercase tracking-wide text-stone-500">
                          {s.label}
                        </p>
                        <p className="font-title text-2xl font-extrabold text-brand">
                          {s.val}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mb-4 flex items-start gap-3 rounded-r-lg border-l-4 border-red-600 bg-rose-50 px-4 py-3">
                    <TriangleAlert className="size-5 flex-shrink-0 text-red-600" />
                    <p className="text-[13px] leading-snug text-gray-900">
                      <strong>Renovação automática em 12 dias</strong> ·
                      Contrato Fornecedor X · R$ 8.500/mês · Cancelamento até
                      18 Mai
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    {[
                      {
                        bar: "warn",
                        name: "Contrato de Outsourcing · Beta Servicos",
                        meta: "VENCE 12 JUN · OBRIGAÇÃO PENDENTE"
                      },
                      {
                        bar: "ok",
                        name: "Acordo Master · Gama Indústria",
                        meta: "EM DIA · 2 ADITIVOS"
                      },
                      {
                        bar: "crit",
                        name: "Contrato de Manutenção · Delta Tech",
                        meta: "SLA DESCUMPRIDO · MULTA NÃO COBRADA · R$ 4.200"
                      }
                    ].map(c => (
                      <div
                        key={c.name}
                        className="flex items-center gap-3 rounded-lg bg-stone-50 px-4 py-3"
                      >
                        <span
                          className={`w-1 self-stretch rounded ${
                            c.bar === "ok"
                              ? "bg-brand"
                              : c.bar === "warn"
                              ? "bg-peach-dark"
                              : "bg-red-600"
                          }`}
                          style={{ minHeight: 30 }}
                        />
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-[13px] font-semibold text-gray-900">
                            {c.name}
                          </p>
                          <p className="mt-1 font-mono text-[10px] tracking-wide text-stone-500">
                            {c.meta}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-5 text-center font-mono text-[11px] italic text-stone-500">
              Visualização conceitual da plataforma. Não é a interface final
              do produto.
            </p>
          </div>

          {/* Annotations à direita */}
          <div className="flex flex-col gap-4">
            {ANNOTATIONS.map(a => {
              const Icon = a.icon;
              return (
                <div
                  key={a.label}
                  className="flex items-start gap-4 rounded-xl border border-stone-200 bg-stone-50 p-5"
                >
                  <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-tint">
                    <Icon className="size-5 text-brand" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="mb-1 font-title text-base font-bold text-gray-900">
                      {a.label}
                    </p>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {a.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
