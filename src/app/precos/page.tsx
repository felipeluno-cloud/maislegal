"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Tag,
  Scale,
  Calculator,
  CheckCircle2,
  User,
  Users,
  Building2,
  Minus,
  Plus
} from "lucide-react";
import { HeroLogoBg } from "@/components/base/HeroLogoBg";

const FAQ = [
  {
    q: "O que conta como operador?",
    a: 'Qualquer pessoa que <strong class="font-semibold text-gray-900">edita, assina ou aprova</strong> contratos. Visitantes (acesso somente leitura) não contam, e podem entrar sem limite no workspace.'
  },
  {
    q: "O primeiro operador é grátis?",
    a: "Sim. Sem cartão, sem prazo limitado. O primeiro operador de cada workspace é grátis para sempre."
  },
  {
    q: "Posso convidar a outra parte do contrato?",
    a: "Sim. Você manda o convite por email e a outra parte entra direto, sem cobrança nem limite."
  },
  {
    q: "Como cancelo?",
    a: "Pelo próprio painel, em poucos cliques. Os contratos seguem disponíveis para você exportar nos 90 dias seguintes."
  },
  {
    q: "Tem preço diferenciado para escritórios?",
    a: "Sim, R$ 250 por operador adicional. O detalhe completo está no bloco \"Modelo para escritórios\" acima ou na conversa com a equipe."
  }
];

const TAMANHOS = [
  { id: "solo", icon: User, label: "Os primeiros contratos", ops: 1, desc: "Para você que está fechando os primeiros contratos com cliente corporativo. Advogado externo entra como visitante." },
  { id: "pequeno", icon: Users, label: "Quando o time entra", ops: 3, desc: "Quando os contratos B2B se acumulam e o time entra junto: edita, envia, arquiva e assina, coordenando com clientes e advogados." },
  { id: "medio", icon: Building2, label: "Operação plena", ops: 6, desc: "Para operações maiores: time distribuído, contratos grandes, SLAs e renovações toda semana." }
];

const PRECO_MENSAL = 550;
const PRECO_ANUAL_MES = 500;

function formatBRL(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0
  }).format(value);
}

export default function PrecosPage() {
  const [modo, setModo] = useState<"mensal" | "anual">("anual");
  const [opsCustom, setOpsCustom] = useState(4);
  const isAnual = modo === "anual";
  const opPrice = isAnual ? PRECO_ANUAL_MES : PRECO_MENSAL;

  function precoTotalMes(ops: number) {
    const adicionais = Math.max(0, ops - 1);
    return adicionais * opPrice;
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-stone-200 bg-white">
        <HeroLogoBg position="top-right" color="var(--brand)" opacity={0.07} width={560} />

        <div className="container-soma relative py-16 md:py-24">
          <div className="max-w-[820px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-tint px-3 py-1.5">
              <Tag className="size-4 text-brand" strokeWidth={1.6} />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                Preços
              </span>
            </div>

            <h1 className="mb-6 font-title text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl lg:text-[56px] leading-[1.05]">
              Você começa grátis. A gente acompanha quando o seu time crescer.
            </h1>

            <p className="mb-3 text-lg leading-relaxed text-gray-700 md:text-xl">
              O primeiro operador é <strong className="font-semibold text-gray-900">grátis para sempre</strong>, sem cartão, sem prazo limitado. Você testa, importa contratos, organiza o ambiente.
            </p>
            <p className="mb-5 text-lg leading-relaxed text-gray-700 md:text-xl">
              Do segundo em diante: <strong className="font-semibold text-gray-900">R$ 550</strong> no plano mensal, ou <strong className="font-semibold text-gray-900">R$ 500</strong> no anual. Clientes e advogados externos entram como visitantes, sem custo nem limite.
            </p>
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              Os seus contratos cobertos do rascunho à resolução: nosso <strong className="font-semibold text-brand">combinado que não sai caro</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          {/* Toggle */}
          <div className="mb-10 flex flex-col items-center gap-3">
            <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-stone-500">
              Como você prefere pagar?
            </p>
            <div className="inline-flex items-center rounded-full border border-stone-300 bg-white p-1">
              <button
                onClick={() => setModo("mensal")}
                className={`rounded-full px-5 py-2 font-mono text-[11px] font-bold uppercase tracking-widest transition-colors ${
                  !isAnual ? "bg-brand text-white" : "text-stone-600 hover:text-brand"
                }`}
              >
                Mensal
              </button>
              <button
                onClick={() => setModo("anual")}
                className={`relative rounded-full px-5 py-2 font-mono text-[11px] font-bold uppercase tracking-widest transition-colors ${
                  isAnual ? "bg-brand text-white" : "text-stone-600 hover:text-brand"
                }`}
              >
                Anual
                <span
                  className={`ml-2 rounded-full px-1.5 py-0.5 text-[9px] font-bold ${
                    isAnual ? "bg-white/20 text-white" : "bg-emerald-100 text-emerald-700"
                  }`}
                >
                  -9%
                </span>
              </button>
            </div>
          </div>

          {/* 3 cards de tamanho */}
          <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {TAMANHOS.map((t) => {
              const Icon = t.icon;
              const total = precoTotalMes(t.ops);
              return (
                <div
                  key={t.id}
                  className="rounded-2xl border border-stone-200 bg-white p-7 transition-shadow hover:shadow-md"
                >
                  <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-brand-tint">
                    <Icon className="size-5 text-brand" strokeWidth={1.6} />
                  </div>

                  <p className="mb-1 font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                    {t.label}
                  </p>
                  <p className="mb-5 font-title text-base font-bold text-gray-900">
                    {t.ops} {t.ops === 1 ? "operador" : "operadores"}
                  </p>
                  <p className="mb-6 text-[13px] leading-relaxed text-gray-600">{t.desc}</p>

                  <div className="border-t border-stone-200 pt-5">
                    {total === 0 ? (
                      <p className="font-title text-3xl font-extrabold tracking-tight text-emerald-700">
                        Grátis
                      </p>
                    ) : (
                      <>
                        <p className="font-title text-3xl font-extrabold tracking-tight text-gray-900">
                          {formatBRL(total)}
                          <span className="ml-1 text-sm font-bold text-stone-500">/mês</span>
                        </p>
                        <p className="mt-1 text-[12px] leading-snug text-stone-600">
                          {isAnual
                            ? `${formatBRL(total * 12)} por ano, antecipado`
                            : `${t.ops - 1} ${t.ops - 1 > 1 ? "operadores adicionais" : "operador adicional"} × R$ 550`}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Calculador inline */}
          <div className="rounded-2xl border-2 border-brand bg-white p-7 md:p-9">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1.2fr_1fr] md:gap-12">
              <div>
                <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                  Outro tamanho?
                </p>
                <h3 className="mb-4 font-title text-2xl font-bold tracking-tighter text-gray-900 md:text-3xl">
                  Calcule aqui o preço para o seu time.
                </h3>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setOpsCustom(Math.max(1, opsCustom - 1))}
                    className="flex size-12 items-center justify-center rounded-xl border-2 border-stone-300 bg-white text-stone-700 transition-colors hover:border-brand hover:text-brand"
                    aria-label="Diminuir operadores"
                  >
                    <Minus className="size-5" strokeWidth={2} />
                  </button>
                  <div className="flex-1 rounded-xl border-2 border-brand-tint bg-brand-tint/40 px-4 py-3 text-center">
                    <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                      Operadores
                    </p>
                    <p className="font-title text-3xl font-extrabold tracking-tight text-brand">
                      {opsCustom}
                    </p>
                  </div>
                  <button
                    onClick={() => setOpsCustom(Math.min(50, opsCustom + 1))}
                    className="flex size-12 items-center justify-center rounded-xl border-2 border-stone-300 bg-white text-stone-700 transition-colors hover:border-brand hover:text-brand"
                    aria-label="Aumentar operadores"
                  >
                    <Plus className="size-5" strokeWidth={2} />
                  </button>
                </div>
              </div>

              <div className="rounded-xl bg-brand p-7 text-white">
                <p className="mb-2 font-mono text-[11px] font-bold uppercase tracking-widest text-white/70">
                  Sua conta
                </p>
                {opsCustom === 1 ? (
                  <>
                    <p className="font-title text-4xl font-extrabold tracking-tight">Grátis</p>
                    <p className="mt-2 text-[13px] leading-snug text-white/85">
                      Primeiro operador sempre grátis. Sem cartão, sem trial.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="font-title text-4xl font-extrabold tracking-tight md:text-5xl">
                      {formatBRL(precoTotalMes(opsCustom))}
                      <span className="ml-1 text-base font-bold text-white/70">/mês</span>
                    </p>
                    <p className="mt-2 text-[13px] leading-snug text-white/85">
                      {isAnual
                        ? `${formatBRL(precoTotalMes(opsCustom) * 12)} por ano · operador 1 grátis + ${opsCustom - 1} a R$ 500/mês`
                        : `Operador 1 grátis + ${opsCustom - 1} ${opsCustom - 1 > 1 ? "operadores adicionais" : "operador adicional"} × R$ 550/mês`}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESCRITÓRIOS · banda separada */}
      <section className="bg-white">
        <div className="container-soma section-soma">
          <div
            className="mx-auto flex max-w-[920px] flex-col items-start gap-6 rounded-2xl border-2 p-7 md:flex-row md:items-center md:gap-10 md:p-9"
            style={{ borderColor: "var(--soma)", background: "var(--soma-bg)" }}
          >
            <div
              className="flex size-12 shrink-0 items-center justify-center rounded-xl"
              style={{ background: "var(--soma)" }}
            >
              <Scale className="size-6 text-white" strokeWidth={1.6} />
            </div>

            <div className="flex-1">
              <p
                className="mb-2 font-mono text-[11px] font-bold uppercase tracking-widest"
                style={{ color: "var(--soma)" }}
              >
                Modelo para escritórios de advocacia
              </p>
              <h3 className="mb-3 font-title text-xl font-bold tracking-tight text-gray-900 md:text-2xl">
                Advogados são nossos parceiros e recebem atenção especial.
              </h3>
              <p className="mb-3 text-[14px] leading-relaxed text-gray-700">
                Você atende vários clientes ao mesmo tempo, cada um com seus processos e seu ritmo. O modelo padrão por assinatura individual não cabe.
              </p>
              <p className="mb-3 text-[14px] leading-relaxed text-gray-700">
                Por isso desenhamos um preço próprio: R$ 250 por operador, e o seu cliente entra como visitante, sem custo nem limite.
              </p>
              <p className="text-[14px] leading-relaxed text-gray-700">
                O resto a gente ajusta junto, conforme o seu volume e suas credenciais (OAB, arbitragem, especializações). <strong className="font-semibold text-soma">Vamos conversar?</strong>
              </p>
            </div>

            <Link
              href="mailto:contato@maislegal.tech?subject=Conversa%20com%20escrit%C3%B3rio"
              className="inline-flex items-center gap-2 rounded-lg border-2 bg-white px-5 py-3 font-semibold transition-colors"
              style={{ borderColor: "var(--soma)", color: "var(--soma)" }}
            >
              Falar com a equipe <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mb-10 max-w-[820px]">
            <p className="eyebrow mb-3">Perguntas frequentes</p>
            <h2 className="h-soma">Antes de você procurar a letra miúda.</h2>
          </div>

          <div className="mx-auto max-w-[820px] space-y-4">
            {FAQ.map((f) => (
              <div key={f.q} className="rounded-2xl border border-stone-200 bg-white p-6">
                <p className="mb-2 flex items-start gap-2 font-title text-[16px] font-bold text-gray-900">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" strokeWidth={1.6} />
                  {f.q}
                </p>
                <p
                  className="pl-6 text-[15px] leading-relaxed text-gray-700"
                  dangerouslySetInnerHTML={{ __html: f.a }}
                />
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-[820px] text-center">
            <Link href="/faq" className="font-semibold text-brand hover:underline">
              Ver todas as perguntas frequentes →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-brand text-white">
        <div className="container-soma py-14 md:py-16">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="eyebrow-light mb-4">Próximo passo</p>
            <h2 className="mb-5 font-title text-2xl font-bold tracking-tighter md:text-3xl">
              Comece grátis hoje. A nossa equipe te acompanha desde o primeiro contrato.
            </h2>
            <p className="mx-auto mb-8 max-w-[560px] text-[15px] leading-relaxed text-white/85">
              O caminho rápido é entrar para o Early Access. O cauteloso é uma conversa de 30 minutos com a equipe antes de decidir.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/early-access"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white bg-white px-7 py-3.5 text-[15px] font-semibold text-brand transition-colors hover:bg-stone-100"
              >
                Entrar para o Early Access <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/calculadora"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 bg-transparent px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Calcular o custo de não fazer <Calculator className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
