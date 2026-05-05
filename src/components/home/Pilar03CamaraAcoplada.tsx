import { ArrowRight, Scale, Check } from "lucide-react";
import { Button } from "@/components/base/Button";

// Terracota SOMA · permitido aqui pela regra de co-presença (pilar é SOMA)
const TERRA = "#B8614E";
const TERRA_BG = "#F7EFED";
const TERRA_LIGHT = "rgba(184, 97, 78, 0.22)";

const O_QUE_MUDA = [
  "Histórico completo do contrato disponível na hora, sem reconstrução manual.",
  "Abertura de procedimento na câmara SOMA com um clique.",
  "Mediação primeiro, com crédito do honorário se virar arbitragem.",
  "Resolução confidencial. Sem desgaste público."
];

export function Pilar03CamaraAcoplada() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Decorativo de fundo · sutil */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute h-[600px] w-[600px] rounded-full opacity-[0.04]"
          style={{ background: TERRA, top: "-180px", right: "-200px" }}
        />
        <div
          className="absolute h-[400px] w-[400px] rounded-full opacity-[0.05]"
          style={{ background: "var(--soma)", bottom: "-160px", left: "-160px" }}
        />
      </div>

      <div className="container-soma section-soma relative">
        {/* Header do pilar */}
        <div className="mb-12 max-w-[920px]">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5"
            style={{ borderColor: TERRA_LIGHT }}
          >
            <span
              className="font-mono text-[11px] font-bold uppercase tracking-widest"
              style={{ color: TERRA }}
            >
              Pilar 03
            </span>
            <span
              className="h-3 w-px"
              style={{ background: TERRA_LIGHT }}
            />
            <Scale className="size-4" strokeWidth={1.6} style={{ color: TERRA }} />
            <span
              className="font-mono text-[11px] font-bold uppercase tracking-widest"
              style={{ color: TERRA }}
            >
              Escritórios
            </span>
          </div>

          <h2 className="h-soma mb-4">
            Você abre o caso e o histórico está pronto. Não passa semanas investigando contratos antigos.
          </h2>

          <p className="mb-3 text-lg leading-relaxed text-gray-700">
            A <span className="text-brand">+legal_</span> é o único ambiente de contratos com câmara de mediação e arbitragem acoplada. Quando a disputa chega, ela já está dentro do mesmo lugar onde o contrato viveu, na câmara <span style={{ color: "var(--soma)" }}>SOMA</span>.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            O histórico inteiro do contrato, versões, aditivos, concessões, comunicações, fica documentado e conectado. Quando vira disputa, você abre o caso com tudo pronto. A resolução é privada, acontece em meses, e dispensa a ida ao judiciário.
          </p>
        </div>

        {/* Painel da disputa · mockup do produto */}
        <div className="mb-14">
          <PainelDisputa />
        </div>

        {/* Layout cenário + lista */}
        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Cenário típico */}
          <div
            className="rounded-2xl border p-6 md:p-7"
            style={{ borderColor: "rgba(184, 97, 78, 0.3)", background: TERRA_BG }}
          >
            <p
              className="mb-3 font-mono text-[11px] font-bold uppercase tracking-widest"
              style={{ color: TERRA }}
            >
              Cenário típico
            </p>

            <p className="mb-3 font-title text-lg font-bold leading-snug text-gray-900 md:text-xl">
              Um cliente novo chega com uma disputa em curso. Quanto tempo até você entender o caso?
            </p>
            <p className="font-title text-base leading-relaxed text-gray-900 md:text-lg">
              O contrato foi assinado há <strong className="font-extrabold">mais de um ano</strong>. Houve um aditivo verbal em uma reunião que não ficou registrado. Cada parte tem uma versão diferente do contrato, e ninguém explica de onde vieram as diferenças.
            </p>
            <p className="mt-3 font-title text-base leading-relaxed text-gray-900 md:text-lg">
              Antes de pensar em estratégia para a arbitragem, você precisa de <strong className="font-extrabold">semanas</strong> só para reconstruir o histórico do caso.
            </p>
            <p className="mt-4 font-mono text-[11px] font-bold uppercase tracking-widest text-soma">
              Quando trava, resolve no privado.
            </p>
          </div>

          {/* O que muda na prática */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-7">
            <p
              className="mb-4 font-mono text-[11px] font-bold uppercase tracking-widest"
              style={{ color: TERRA }}
            >
              O que muda na prática
            </p>
            <ul className="flex flex-col gap-3">
              {O_QUE_MUDA.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full"
                    style={{ background: TERRA_BG }}
                  >
                    <Check
                      className="size-3"
                      strokeWidth={3}
                      style={{ color: TERRA }}
                    />
                  </span>
                  <span className="text-[15px] leading-snug text-gray-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA único · continuidade dentro do site */}
        <div className="flex justify-center">
          <Button
            href="/resolucao-de-disputas"
            variant="primary"
            size="lg"
            className="!border-soma !bg-soma hover:!bg-soma/90"
          >
            Como a integração funciona <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

// Painel da disputa · mockup do produto com câmara SOMA acoplada
function PainelDisputa() {
  const tabs = [
    { label: "Caso", active: true },
    { label: "Histórico", active: false },
    { label: "Documentos", active: false },
    { label: "Câmara SOMA", active: false, badge: "ativa" }
  ];

  const historicoItems = [
    "2 versões do contrato assinadas",
    "4 aditivos formalizados",
    "8 favores documentados",
    "23 movimentos registrados"
  ];

  return (
    <div className="mx-auto w-full max-w-[760px] overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
      {/* App titlebar · macOS-style */}
      <div className="flex items-center gap-3 border-b border-stone-200 bg-stone-50 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-stone-300" />
          <span className="size-2.5 rounded-full bg-stone-300" />
          <span className="size-2.5 rounded-full bg-stone-300" />
        </div>
        <p className="flex-1 truncate text-center font-mono text-[10.5px] font-medium text-stone-500">
          <span className="normal-case">+legal_</span> · Disputa 2024-103
        </p>
        <span className="font-mono text-[10px] text-stone-400">⌘K</span>
      </div>

      {/* Tabs · Caso ativo, Câmara SOMA com badge */}
      <div className="flex border-b border-stone-200 bg-white">
        {tabs.map((tab) => (
          <div
            key={tab.label}
            className={`relative flex items-center gap-1.5 px-4 py-2.5 text-[11px] font-medium ${
              tab.active ? "text-brand" : "text-stone-500"
            }`}
          >
            {tab.label}
            {tab.badge && (
              <span
                className="rounded-full px-1.5 py-0.5 font-mono text-[8.5px] font-bold uppercase tracking-widest text-white"
                style={{ background: TERRA }}
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

      {/* Conteúdo · header do caso + histórico + câmara SOMA */}
      <div className="bg-stone-50/50 p-5 md:p-6">
        {/* Header do caso */}
        <div className="mb-4 rounded-xl border border-stone-200 bg-white p-4 md:p-5">
          <div className="mb-1 flex items-center gap-2">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">
              Caso 2024-103
            </span>
            <span className="h-3 w-px bg-stone-200" />
            <span
              className="flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-widest"
              style={{ color: TERRA }}
            >
              <span
                className="relative flex size-1.5"
                aria-hidden="true"
              >
                <span
                  className="absolute inline-flex size-full animate-ping rounded-full opacity-75 motion-reduce:hidden"
                  style={{ background: TERRA }}
                />
                <span
                  className="relative inline-flex size-1.5 rounded-full"
                  style={{ background: TERRA }}
                />
              </span>
              Em mediação
            </span>
          </div>
          <p className="mb-0.5 font-title text-[15.5px] font-bold leading-snug text-gray-900">
            Disputa contratual · Outsourcing TI
          </p>
          <p className="text-[12.5px] text-stone-600">
            Beta Serviços × Acme Corp · iniciada há 18 dias
          </p>
        </div>

        {/* Bloco 1 · Histórico pronto */}
        <div className="mb-3 rounded-xl border border-stone-200 bg-white p-4 md:p-5">
          <div className="mb-3 flex items-baseline justify-between">
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand">
              Histórico pronto para uso
            </p>
            <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-stone-400">
              Disponível agora
            </span>
          </div>
          <ul className="space-y-2">
            {historicoItems.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-[12.5px] text-gray-700">
                <Check
                  className="size-3.5 shrink-0"
                  strokeWidth={3}
                  style={{ color: "var(--brand)" }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Bloco 2 · Câmara SOMA ativa · com logo */}
        <div
          className="rounded-xl border p-4 md:p-5"
          style={{
            borderColor: "rgba(184, 97, 78, 0.3)",
            background: TERRA_BG
          }}
        >
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <img
                src="/logos/soma-logo.svg"
                alt="SOMA"
                width={56}
                height={20}
                className="h-5 w-auto"
              />
              <span className="h-3 w-px" style={{ background: "rgba(184, 97, 78, 0.4)" }} />
              <span
                className="font-mono text-[10px] font-bold uppercase tracking-widest"
                style={{ color: TERRA }}
              >
                Em mediação
              </span>
            </div>
          </div>

          {/* Detalhes da mediação */}
          <div className="space-y-2.5">
            <div className="flex items-baseline justify-between gap-3 text-[12.5px]">
              <span className="text-stone-600">Mediadora</span>
              <span className="font-semibold text-gray-900">Helena Vasconcelos · PhD USP</span>
            </div>
            <div className="flex items-baseline justify-between gap-3 text-[12.5px]">
              <span className="text-stone-600">Próxima sessão</span>
              <span className="font-semibold text-gray-900">12 mai · 14h00</span>
            </div>
            <div className="flex items-baseline justify-between gap-3 text-[12.5px]">
              <span className="text-stone-600">Sessões realizadas</span>
              <span className="font-semibold text-gray-900">2 de 3 previstas</span>
            </div>
          </div>
        </div>

        {/* Footer · stat de eficácia */}
        <div className="mt-5 flex items-center justify-center gap-2 border-t border-stone-200 pt-4">
          <span
            className="size-1.5 rounded-full"
            style={{ background: TERRA }}
          />
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">
            47% das disputas resolvem na mediação · sem ir para arbitragem
          </p>
        </div>
      </div>
    </div>
  );
}

