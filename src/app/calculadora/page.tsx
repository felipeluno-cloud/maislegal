"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import {
  ArrowRight,
  Calculator,
  Building2,
  AlertTriangle,
  ShieldCheck,
  Users,
  Scale
} from "lucide-react";
import { HeroLogoBg } from "@/components/base/HeroLogoBg";

function formatBRL(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0
  }).format(value);
}

type Perfil = "geral" | "pme" | "operacoes" | "escritorio";

type FontePerda = {
  label: string;
  sub: string;
  weight?: number;
  absolute?: (c: number, t: number, op: number) => number;
};

type PerfilConfig = {
  rotulo: string;
  eyebrow: string;
  intro: string;
  icon: typeof Building2;
  cor: string;
  corBg: string;
  defaults: { contratos: number; ticket: number; operadores: number };
  fontes: FontePerda[];
};

const PERFIS: Record<Perfil, PerfilConfig> = {
  geral: {
    rotulo: "Genérico",
    eyebrow: "Cálculo flexível",
    intro:
      "Configure os 3 valores manualmente. Útil quando você quer simular um cenário específico ou está entre perfis.",
    icon: Calculator,
    cor: "var(--brand)",
    corBg: "var(--brand-tint)",
    defaults: { contratos: 80, ticket: 50000, operadores: 4 },
    fontes: [
      { label: "SLAs não cobrados", weight: 0.025, sub: "2,5% do portfólio anual" },
      { label: "Renovações sem renegociar", weight: 0.015, sub: "1,5% sem aviso prévio" },
      { label: "Reconstrução em disputas", absolute: (c) => (c / 80) * 50000, sub: "advogado externo + tempo do time" },
      { label: "Churn evitável", weight: 0.03, sub: "3% que sai por descuido contratual" }
    ]
  },
  pme: {
    rotulo: "PME · 1 a 2 sócios",
    eyebrow: "Para o sócio que cuida dos contratos junto",
    intro:
      "Você assina contrato com cliente grande, fornecedor recorrente, e o controle vive na sua cabeça. A perda invisível aqui não é volume, é o contrato que pesa demais.",
    icon: Building2,
    cor: "var(--peach-dark)",
    corBg: "var(--peach-bg)",
    defaults: { contratos: 10, ticket: 80000, operadores: 1 },
    fontes: [
      { label: "SLAs não cobrados", weight: 0.03, sub: "3% · cobrança que escapa quando o cliente não cumpre" },
      { label: "Risco de perder o cliente grande", weight: 0.04, sub: "4% · descumprimento sem aviso vira motivo de saída" },
      { label: "Reconstrução se virar disputa", absolute: (c) => Math.max(15000, (c / 10) * 30000), sub: "advogado externo cobra caro para reconstruir histórico" },
      { label: "Renovações automáticas mal vistas", weight: 0.02, sub: "2% · preço errado por mais 12 meses" }
    ]
  },
  operacoes: {
    rotulo: "Operações · time interno",
    eyebrow: "Para quem coordena renovação, SLA, e cobrança",
    intro:
      "Volume alto, ticket médio, time pequeno cuidando de muito contrato ao mesmo tempo. A perda invisível aqui é estrutural, não eventual.",
    icon: Users,
    cor: "var(--brand)",
    corBg: "var(--brand-tint)",
    defaults: { contratos: 80, ticket: 50000, operadores: 4 },
    fontes: [
      { label: "SLAs não cobrados", weight: 0.035, sub: "3,5% · multa contratual que ninguém aciona" },
      { label: "Renovações sem renegociar", weight: 0.025, sub: "2,5% · preço congelado por inércia" },
      { label: "Churn evitável por descuido", weight: 0.035, sub: "3,5% · cliente sai por SLA estourado sem resposta" },
      { label: "Reconstrução em disputas", absolute: (c) => (c / 80) * 60000, sub: "tempo do time + advogado externo por caso" }
    ]
  },
  escritorio: {
    rotulo: "Escritório · contencioso e consultivo",
    eyebrow: "Para quem reconstrói histórico de cliente",
    intro:
      "Você herda um portfólio bagunçado a cada novo cliente. A perda invisível aqui é o tempo perdido em busca de documentos e a versão errada que vai para a mesa.",
    icon: Scale,
    cor: "var(--soma)",
    corBg: "var(--soma-bg)",
    defaults: { contratos: 200, ticket: 80000, operadores: 8 },
    fontes: [
      { label: "Horas perdidas reconstruindo histórico", absolute: (c, _t, op) => c * 1.5 * 250 + op * 80 * 250, sub: "1,5h por contrato + 80h/operador/ano em buscas" },
      { label: "Erro por trabalhar com versão antiga", weight: 0.02, sub: "2% · cláusula desatualizada que custa caro" },
      { label: "Reconstrução em disputas", absolute: (c) => (c / 200) * 180000, sub: "casos onde você tem que provar o que foi acordado" },
      { label: "Cliente perdido por má gestão de portfólio", weight: 0.025, sub: "2,5% · escritório não dá conta, cliente troca" }
    ]
  }
};

const PERFIS_LISTA: Perfil[] = ["pme", "operacoes", "escritorio", "geral"];

export default function CalculadoraPage() {
  const [perfilId, setPerfilId] = useState<Perfil>("operacoes");
  const perfil = PERFIS[perfilId];

  const [contratos, setContratos] = useState(perfil.defaults.contratos);
  const [ticket, setTicket] = useState(perfil.defaults.ticket);
  const [operadores, setOperadores] = useState(perfil.defaults.operadores);

  function trocarPerfil(novo: Perfil) {
    const cfg = PERFIS[novo];
    setPerfilId(novo);
    setContratos(cfg.defaults.contratos);
    setTicket(cfg.defaults.ticket);
    setOperadores(cfg.defaults.operadores);
  }

  const calc = useMemo(() => {
    const portfolioAnual = contratos * ticket;
    const fontesCalc = perfil.fontes.map((f) => {
      const valor = f.absolute
        ? f.absolute(contratos, ticket, operadores)
        : portfolioAnual * (f.weight ?? 0);
      return { ...f, valor };
    });
    const economiaTotal = fontesCalc.reduce((acc, f) => acc + f.valor, 0);
    const custoLegal = (operadores - 1) * 550 * 12;
    const custoLegalAnual = (operadores - 1) * 500 * 12;
    const ratio = custoLegal > 0 ? economiaTotal / custoLegal : 0;
    return { portfolioAnual, fontesCalc, economiaTotal, custoLegal, custoLegalAnual, ratio };
  }, [contratos, ticket, operadores, perfil]);

  return (
    <>
      <section className="relative overflow-hidden border-b border-stone-200 bg-white">
        <HeroLogoBg position="top-right" color={perfil.cor} opacity={0.06} />
        <div className="container-soma relative py-12 md:py-16">
          <div className="max-w-[820px]">
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1.5"
              style={{ borderColor: `${perfil.cor}33`, background: perfil.corBg }}
            >
              <Calculator className="size-4" strokeWidth={1.6} style={{ color: perfil.cor }} />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest" style={{ color: perfil.cor }}>
                Calculadora de ROI
              </span>
            </div>
            <h1 className="mb-4 font-title text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl lg:text-[52px] leading-[1.05]">
              Quanto seu portfólio de contratos custa quando ninguém olha para ele.
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
              A conta varia conforme o perfil. Escolha o seu para ver as 4 fontes de perda invisível que pesam no seu caso. Estimativa{" "}
              <strong className="font-semibold text-gray-900">conservadora</strong>, baseada em referências de mercado.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="container-soma py-12 md:py-16">
          <div className="mx-auto max-w-[920px]">
            <p className="eyebrow mb-5" style={{ color: perfil.cor }}>O custo de não fazer nada</p>
            <h2 className="mb-5 font-title text-3xl font-bold tracking-tighter text-gray-900 md:text-4xl lg:text-[44px] leading-[1.08]">
              Quando o contrato fica engavetado, o risco fica espalhado.
            </h2>
            <p className="mb-10 max-w-[760px] text-lg leading-relaxed text-gray-700">
              A planilha que ninguém abriu na semana passada é a multa que chega no mês que vem. Antes de calcular, vale dimensionar o que está em risco.
            </p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-stone-200 bg-white p-5">
                <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">
                  Multa LGPD
                </p>
                <p className="mb-2 font-title text-2xl font-extrabold tracking-tight text-gray-900">
                  até 2% do faturamento
                </p>
                <p className="text-[13px] leading-relaxed text-gray-600">
                  NDA assinado, dados vazados. A multa cresce com o tamanho da empresa, e a reputação queimada não tem teto.
                </p>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-white p-5">
                <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">
                  Cliente perdido
                </p>
                <p className="mb-2 font-title text-2xl font-extrabold tracking-tight text-gray-900">
                  ordem de grandeza
                </p>
                <p className="text-[13px] leading-relaxed text-gray-600">
                  O cliente que sai sem dizer porquê é o cliente que não volta. E leva consigo todas as indicações que ele geraria.
                </p>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-white p-5">
                <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">
                  Reconstrução de histórico
                </p>
                <p className="mb-2 font-title text-2xl font-extrabold tracking-tight text-gray-900">
                  3 semanas por caso
                </p>
                <p className="text-[13px] leading-relaxed text-gray-600">
                  Tempo de advogado externo recompondo versões, depoimentos, e e-mails que ninguém arquivou. Antes mesmo da estratégia.
                </p>
              </div>
              <div className="rounded-2xl border-2 p-5" style={{ borderColor: perfil.cor, background: perfil.corBg }}>
                <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-widest" style={{ color: perfil.cor }}>
                  Custo da <span className="normal-case">+legal_</span>
                </p>
                <p className="mb-2 font-title text-2xl font-extrabold tracking-tight" style={{ color: perfil.cor }}>
                  R$ 6 mil por ano
                </p>
                <p className="text-[13px] leading-relaxed text-gray-700">
                  No plano anual, por operador adicional. Mensal sai a R$ 550. Operador 1 sempre grátis, sem cartão. Ordem de grandeza menor que qualquer um dos riscos acima.
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-[760px] text-[15px] leading-relaxed text-gray-700">
              <strong className="font-semibold text-gray-900">A pergunta não é se a +legal_ se paga.</strong> A pergunta é quanto está custando manter contratos sem visibilidade, agora que isso já não dá para ignorar.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-200 bg-white">
        <div className="container-soma py-8 md:py-10">
          <p className="eyebrow mb-5">1 · Escolha seu perfil</p>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
            {PERFIS_LISTA.map((id) => {
              const p = PERFIS[id];
              const ativo = perfilId === id;
              const Icon = p.icon;
              return (
                <button
                  key={id}
                  onClick={() => trocarPerfil(id)}
                  className="group rounded-xl border-2 bg-white p-5 text-left transition-all hover:-translate-y-0.5"
                  style={{
                    borderColor: ativo ? p.cor : "#E7E5E4",
                    background: ativo ? p.corBg : "white",
                    boxShadow: ativo ? `0 4px 12px ${p.cor}1a` : undefined
                  }}
                >
                  <div className="mb-3 flex size-10 items-center justify-center rounded-xl" style={{ background: ativo ? p.cor : `${p.cor}1a` }}>
                    <Icon className="size-5" strokeWidth={1.6} style={{ color: ativo ? "white" : p.cor }} />
                  </div>
                  <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-widest" style={{ color: p.cor }}>
                    {p.rotulo}
                  </p>
                  <p className="text-[12px] leading-snug text-gray-700">{p.eyebrow}</p>
                </button>
              );
            })}
          </div>
          <p className="mt-5 text-[14px] leading-relaxed text-gray-600">{perfil.intro}</p>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <p className="eyebrow mb-5" style={{ color: perfil.cor }}>2 · Ajuste seus números</p>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div className="rounded-2xl border-2 bg-white p-7 md:p-8" style={{ borderColor: perfil.cor }}>
              <p className="mb-1 font-mono text-[11px] font-bold uppercase tracking-widest" style={{ color: perfil.cor }}>
                Sua operação
              </p>
              <p className="mb-7 text-[14px] leading-relaxed text-gray-600">
                Os valores começam pré-configurados para o perfil que você escolheu. Ajuste para refletir seu caso.
              </p>
              <div className="space-y-7">
                <SliderField label="Contratos B2B ativos" value={contratos} setValue={setContratos} min={1} max={500} step={1} display={String(contratos)} cor={perfil.cor} corBg={perfil.corBg} />
                <SliderField label="Ticket médio anual por contrato" value={ticket} setValue={setTicket} min={5000} max={500000} step={5000} display={formatBRL(ticket)} cor={perfil.cor} corBg={perfil.corBg} extremos={[formatBRL(5000), formatBRL(500000)]} />
                <SliderField label="Operadores no time (incluindo você)" value={operadores} setValue={setOperadores} min={1} max={20} step={1} display={String(operadores)} cor={perfil.cor} corBg={perfil.corBg} />
              </div>
              <div className="mt-7 rounded-xl border border-stone-200 bg-stone-50 p-4">
                <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">Portfólio anual total</p>
                <p className="font-title text-2xl font-extrabold tracking-tight text-gray-900">{formatBRL(calc.portfolioAnual)}</p>
              </div>
            </div>

            <div>
              <div className="mb-6 rounded-2xl p-7 text-white md:p-8" style={{ background: perfil.cor }}>
                <p className="mb-2 font-mono text-[11px] font-bold uppercase tracking-widest text-white/70">Estimativa anual de perda invisível</p>
                <p className="font-title text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">{formatBRL(calc.economiaTotal)}</p>
                <p className="mt-3 text-[14px] leading-relaxed text-white/85">
                  Soma das 4 fontes de perda silenciosa típicas do perfil <strong>{perfil.rotulo}</strong>. Conservador.
                </p>
              </div>

              <div className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                {calc.fontesCalc.map((f) => (
                  <div key={f.label} className="rounded-xl border border-stone-200 bg-white p-5">
                    <div className="mb-3 flex items-center gap-2">
                      <AlertTriangle className="size-4" strokeWidth={1.6} style={{ color: perfil.cor }} />
                      <p className="font-mono text-[10px] font-bold uppercase tracking-widest" style={{ color: perfil.cor }}>{f.label}</p>
                    </div>
                    <p className="mb-1 font-title text-2xl font-extrabold tracking-tight" style={{ color: perfil.cor }}>{formatBRL(f.valor)}</p>
                    <p className="text-[12px] leading-snug text-gray-600">{f.sub}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border-2 border-stone-200 bg-white p-7">
                <div className="mb-5 flex items-center gap-2">
                  <ShieldCheck className="size-4" strokeWidth={1.6} style={{ color: perfil.cor }} />
                  <p className="font-mono text-[11px] font-bold uppercase tracking-widest" style={{ color: perfil.cor }}>
                    Custo da <span className="normal-case">+legal_</span> no seu cenário
                  </p>
                </div>
                <div className="grid grid-cols-1 items-end gap-5 md:grid-cols-2">
                  <div>
                    <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">Custo da <span className="normal-case">+legal_</span></p>
                    <p className="font-title text-3xl font-extrabold tracking-tight text-gray-900">
                      {formatBRL(calc.custoLegal)}<span className="ml-1 text-base font-bold text-stone-500">/ano</span>
                    </p>
                    <p className="mt-1 text-[12px] leading-snug text-stone-600">
                      operador 1 grátis · {operadores > 1 ? `${operadores - 1} adicional${operadores - 1 > 1 ? "es" : ""}` : "nenhum adicional"} a R$ 550/mês
                    </p>
                    <p className="mt-1 text-[12px] leading-snug text-brand">
                      No plano anual: {formatBRL(calc.custoLegalAnual)}/ano (R$ 500/mês por adicional)
                    </p>
                  </div>
                  <div className="rounded-xl bg-emerald-50 p-4 text-center">
                    <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-700">Cada R$ 1 investido recupera</p>
                    <p className="font-title text-3xl font-extrabold text-emerald-700">{calc.ratio > 0 ? `${calc.ratio.toFixed(0)}×` : "-"}</p>
                    <p className="mt-1 text-[12px] leading-snug text-emerald-700">em economia evitada</p>
                  </div>
                </div>
              </div>
              <p className="mt-5 font-mono text-[11px] uppercase tracking-widest text-stone-500">
                Estimativa baseada em referências de mercado · Não é projeção exata
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white" style={{ background: perfil.cor }}>
        <div className="container-soma py-14 md:py-16">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="eyebrow-light mb-4">Próximo passo</p>
            <h2 className="mb-5 font-title text-2xl font-bold tracking-tighter md:text-3xl">
              Sua conta diz que vale a pena. E agora?
            </h2>
            <p className="mx-auto mb-8 max-w-[560px] text-[15px] leading-relaxed text-white/85">
              Conversa de 30 minutos com a equipe para validar se o cálculo bate com seu cenário, ou entra direto pelo Early Access com 1 operador grátis.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/agendar" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white bg-white px-7 py-3.5 text-[15px] font-semibold transition-colors hover:bg-stone-100" style={{ color: perfil.cor }}>
                Agendar conversa <ArrowRight className="size-4" />
              </Link>
              <Link href="/early-access" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 bg-transparent px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:border-white hover:bg-white/10">
                Entrar para o Early Access
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

type SliderProps = {
  label: string;
  value: number;
  setValue: (n: number) => void;
  min: number;
  max: number;
  step: number;
  display: string;
  cor: string;
  corBg: string;
  extremos?: [string, string];
};

function SliderField({ label, value, setValue, min, max, step, display, cor, corBg, extremos }: SliderProps) {
  const lo = extremos?.[0] ?? String(min);
  const hi = extremos?.[1] ?? String(max);
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <label className="font-title text-[15px] font-bold text-gray-900">{label}</label>
        <span className="rounded-full px-3 py-1 font-mono text-sm font-bold" style={{ background: corBg, color: cor }}>
          {display}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full"
        style={{ accentColor: cor }}
      />
      <div className="mt-1 flex justify-between font-mono text-[10px] text-stone-500">
        <span>{lo}</span>
        <span>{hi}</span>
      </div>
    </div>
  );
}
