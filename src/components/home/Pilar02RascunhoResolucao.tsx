import { Activity, Bell, Check } from "lucide-react";

const O_QUE_MUDA = [
  "Painel com todos os contratos, status, prazos e SLAs em uma tela.",
  "Alertas automáticos 90, 60 e 30 dias antes de cada vencimento.",
  "Aditivos formalizados dentro da plataforma, com aprovação registrada.",
  "Quando alguém sai do time, o contexto fica."
];

export function Pilar02RascunhoResolucao() {
  return (
    <section
      className="relative"
      style={{ background: "var(--brand-tint)" }}
    >
      <div className="container-soma section-soma">
        {/* Header do pilar */}
        <div className="mb-12 max-w-[860px]">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-white px-3 py-1.5">
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
              Pilar 02
            </span>
            <span className="h-3 w-px bg-brand/30" />
            <Activity className="size-4 text-brand" strokeWidth={1.6} />
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
              Grandes empresas
            </span>
          </div>

          <h2 className="h-soma mb-4">
            Você cuida de centenas de contratos. Cada prazo avisa antes do vencimento.
          </h2>

          <p className="mb-3 text-lg leading-relaxed text-gray-700">
            O contrato não termina quando todo mundo assina. Isso é só o começo. Cada cláusula tem um prazo, cada obrigação tem um responsável, e cada renovação tem uma janela que não pode passar batida.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Você abre a +legal_ pela manhã. Vê o que vence na semana, o que está em risco, o que pede decisão sua. O time tem onde voltar em vez de carregar tudo na cabeça.
          </p>
        </div>

        {/* Visual · caixa de entrada de alertas (mockup do produto) */}
        <div className="mb-12">
          <PainelAlertas />
        </div>

        {/* Layout cenário + lista */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Cenário típico */}
          <div className="rounded-2xl border border-brand-light bg-brand-tint p-6 md:p-7">
            <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
              Cenário típico
            </p>

            <p className="mb-3 font-title text-lg font-bold leading-snug text-gray-900 md:text-xl">
              Hoje, os prazos chegam antes do vencimento?
            </p>
            <p className="font-title text-base leading-relaxed text-gray-900 md:text-lg">
              Sua operação cresceu, e hoje você cuida de <strong className="font-extrabold">dezenas de contratos ativos</strong> com um time pequeno. Fornecedores em vários estados, SLAs específicos para cada um, datas de renovação espalhadas pelo ano.
            </p>
            <p className="mt-3 font-title text-base leading-relaxed text-gray-900 md:text-lg">
              Existe uma planilha que tenta dar conta de tudo. Mas a planilha não avisa nada sozinha, alguém do time precisa lembrar de abrir.
            </p>
          </div>

          {/* O que muda na prática */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-7">
            <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
              O que muda na prática
            </p>
            <ul className="flex flex-col gap-3">
              {O_QUE_MUDA.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-tint">
                    <Check className="size-3 text-brand" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] leading-snug text-gray-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Visual · painel de alertas (mockup da plataforma)
function PainelAlertas() {
  const tabs = [
    { label: "Painel", active: false },
    { label: "Alertas", active: true, badge: 7 },
    { label: "Calendário", active: false }
  ];

  const alertasCompactos = [
    {
      d: "30",
      tipo: "SLA",
      titulo: "Manutenção · Cliente Norte",
      sub: "3 incidentes acima do limite no mês",
      valor: "R$ 8 mil multa"
    },
    {
      d: "45",
      tipo: "Aditivo",
      titulo: "Locação SP · escritório novo",
      sub: "Aguardando resposta do locador há 5 dias",
      valor: ""
    },
    {
      d: "90",
      tipo: "NDA",
      titulo: "Master Service Agreement · Acme",
      sub: "Cláusula de confidencialidade expirando",
      valor: ""
    }
  ];

  return (
    <div className="mx-auto w-full max-w-[680px] overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
      {/* App titlebar · macOS-style com breadcrumb */}
      <div className="flex items-center gap-3 border-b border-stone-200 bg-stone-50 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-stone-300" />
          <span className="size-2.5 rounded-full bg-stone-300" />
          <span className="size-2.5 rounded-full bg-stone-300" />
        </div>
        <p className="flex-1 truncate text-center font-mono text-[10.5px] font-medium text-stone-500">
          <span className="normal-case">+legal_</span> · Beta Serviços · 247 contratos ativos
        </p>
        <span className="font-mono text-[10px] text-stone-400">⌘K</span>
      </div>

      {/* Tabs · Alertas ativo */}
      <div className="flex border-b border-stone-200 bg-white">
        {tabs.map((tab) => (
          <div
            key={tab.label}
            className={`relative flex items-center gap-1.5 px-4 py-2.5 text-[11px] font-medium ${
              tab.active ? "text-brand" : "text-stone-500"
            }`}
          >
            {tab.label}
            {tab.badge !== undefined && (
              <span
                className="flex size-4 items-center justify-center rounded-full font-mono text-[9px] font-bold text-white"
                style={{ background: tab.active ? "var(--brand)" : "#a8a29e" }}
              >
                {tab.badge}
              </span>
            )}
            {tab.active && (
              <span
                className="absolute bottom-[-1px] left-0 right-0 h-0.5"
                style={{ background: "var(--brand)" }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Conteúdo do tab Alertas */}
      <div className="bg-stone-50/50 p-5 md:p-6">
        {/* Header da caixa de entrada */}
        <div className="mb-4 flex items-baseline justify-between gap-3">
          <p className="font-title text-[15px] font-bold text-gray-900">
            Caixa de entrada
          </p>
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">
            7 alertas · próximos 90 dias
          </p>
        </div>

        {/* Alerta destaque (com janela de negociação) */}
        <AlertaDestaque />

        {/* Alertas compactos */}
        <div className="mt-3 space-y-2">
          {alertasCompactos.map((a) => (
            <AlertaCompacto key={a.titulo} {...a} />
          ))}
        </div>

        {/* Footer · stat de eficácia */}
        <div className="mt-5 flex items-center justify-center gap-2 border-t border-stone-200 pt-4">
          <span
            className="size-1.5 rounded-full"
            style={{ background: "var(--brand)" }}
          />
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">
            47 de 47 acionados a tempo · últimos 12 meses
          </p>
        </div>
      </div>
    </div>
  );
}

// Alerta destacado com janela de negociação embedded
function AlertaDestaque() {
  return (
    <div className="rounded-xl border border-brand-light bg-white p-4 md:p-5 shadow-sm">
      {/* Header do alerta · badge + tipo + valor */}
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className="rounded-md px-2 py-0.5 font-mono text-[9.5px] font-bold uppercase tracking-widest text-white"
            style={{ background: "var(--brand)" }}
          >
            D-12 · Alerta
          </span>
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand">
            Renovação automática
          </span>
        </div>
        <div className="text-right">
          <p
            className="font-title text-[14px] font-extrabold leading-tight"
            style={{ color: "var(--brand)" }}
          >
            R$ 102 mil/ano
          </p>
          <p className="font-mono text-[8.5px] font-bold uppercase tracking-widest text-stone-400">
            Valor anual
          </p>
        </div>
      </div>

      {/* Título do contrato */}
      <p className="mb-1 font-title text-[15.5px] font-bold leading-snug text-gray-900">
        Outsourcing TI · Beta Serviços
      </p>
      <p className="mb-4 text-[12.5px] leading-snug text-stone-600">
        R$ 8.500/mês · sem revisão desde 2024
      </p>

      {/* Janela de negociação */}
      <div className="rounded-lg border border-stone-200 bg-stone-50/60 px-4 py-4">
        <div className="mb-3 flex items-center gap-2">
          <Bell className="size-3 text-stone-400" strokeWidth={1.8} />
          <p className="font-mono text-[9.5px] font-bold uppercase tracking-widest text-stone-500">
            Janela de negociação
          </p>
        </div>
        <JanelaTimeline />
      </div>
    </div>
  );
}

// Timeline horizontal · 5 marcos da janela de negociação
function JanelaTimeline() {
  const marcos = [
    { d: "D-90", note: "Aviso inicial", state: "done" as const },
    { d: "D-60", note: "Avaliação", state: "done" as const },
    { d: "D-30", note: "Última janela", state: "done" as const },
    { d: "Hoje", note: "D-12", state: "here" as const },
    { d: "D-0", note: "Renovação", state: "future" as const }
  ];

  return (
    <div className="relative">
      {/* Linha de fundo · cinza */}
      <div className="absolute left-[6%] right-[6%] top-[6px] h-px bg-stone-200" />
      {/* Linha preenchida · brand · do início até "Hoje" (75%) */}
      <div
        className="absolute left-[6%] top-[6px] h-px"
        style={{ width: "calc(69% - 0px)", background: "var(--brand)" }}
      />

      <div className="relative grid grid-cols-5 gap-1">
        {marcos.map((m) => {
          const isHere = m.state === "here";
          const isDone = m.state === "done";
          return (
            <div key={m.d} className="flex flex-col items-center text-center">
              {/* Dot */}
              <span
                className="relative z-10 flex size-3 items-center justify-center rounded-full"
                style={{
                  background: isHere
                    ? "var(--brand)"
                    : isDone
                      ? "var(--brand)"
                      : "white",
                  border: !isDone && !isHere ? "1.5px solid #d6d3d1" : "none",
                  boxShadow: isHere
                    ? "0 0 0 4px rgba(30, 58, 95, 0.18)"
                    : "none"
                }}
              />
              {/* Tempo */}
              <span
                className={`mt-2 font-mono text-[9px] font-bold uppercase tracking-wider ${
                  isHere ? "text-brand" : "text-stone-400"
                }`}
              >
                {m.d}
              </span>
              {/* Note */}
              <span
                className={`mt-0.5 text-[9px] leading-tight ${
                  isHere ? "font-semibold text-gray-700" : "text-stone-400"
                }`}
              >
                {m.note}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Alerta compacto · linha-by-linha na caixa de entrada
function AlertaCompacto({
  d,
  tipo,
  titulo,
  sub,
  valor
}: {
  d: string;
  tipo: string;
  titulo: string;
  sub: string;
  valor?: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-stone-200 bg-white p-3">
      <span className="shrink-0 rounded-md bg-stone-100 px-2 py-0.5 font-mono text-[9.5px] font-bold uppercase tracking-widest text-stone-600">
        D-{d} · {tipo}
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate font-title text-[12.5px] font-bold leading-tight text-gray-900">
          {titulo}
        </p>
        <p className="mt-0.5 truncate text-[11px] leading-tight text-stone-500">
          {sub}
        </p>
      </div>
      {valor && (
        <span
          className="shrink-0 font-mono text-[10.5px] font-bold"
          style={{ color: "var(--brand)" }}
        >
          {valor}
        </span>
      )}
    </div>
  );
}

