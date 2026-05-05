import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Layers, Scale, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/base/Button";
import { HeroLogoBg } from "@/components/base/HeroLogoBg";

export default function LegalSomaPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="container-soma py-4">
          <Link
            href="/sobre"
            className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-widest text-stone-600 hover:text-brand"
          >
            <ArrowLeft className="size-3.5" strokeWidth={2.5} />
            Voltar para Sobre
          </Link>
        </div>
      </section>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-stone-200 bg-white">
        <HeroLogoBg position="top-right" color="var(--brand)" opacity={0.05} />
        <HeroLogoBg position="bottom-left" color="var(--soma)" opacity={0.05} width={400} />

        <div className="container-soma relative py-12 md:py-16">
          <div className="max-w-[860px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-3 py-1.5">
              <Layers className="size-4 text-stone-700" strokeWidth={1.6} />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-stone-700">
                <span className="normal-case">+legal_</span> × SOMA · institucional
              </span>
            </div>

            <h1 className="mb-4 font-title text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl lg:text-[52px] leading-[1.05]">
              Duas <span className="text-brand">marcas</span>, uma <span className="text-soma">tese</span>.
            </h1>

            <p className="mb-3 text-lg leading-relaxed text-gray-600 md:text-xl">
              A +legal_ é a plataforma de gestão de contratos. A SOMA é a câmara de mediação e arbitragem. <strong className="font-semibold text-gray-900">Entidades separadas, integradas pelo desenho.</strong>
            </p>

            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
              Cada uma tem sua governança, seu regulamento, e existe para resolver problemas distintos. A integração existe porque <strong className="font-semibold text-gray-900">faz sentido para o cliente</strong>, não porque há favorecimento entre as duas.
            </p>
          </div>
        </div>
      </section>

      {/* DUAS COLUNAS · O QUE CADA UMA É */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mb-10 max-w-[820px]">
            <p className="eyebrow mb-3 text-stone-700">Quem é quem</p>
            <h2 className="h-soma mb-4">O que cada uma faz, lado a lado.</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* +legal_ */}
            <div className="rounded-2xl border-2 border-brand bg-white p-7 md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-xl bg-brand text-white">
                  <Layers className="size-6" strokeWidth={1.6} />
                </div>
                <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                  <span className="normal-case">+legal_</span>
                </p>
              </div>

              <h3 className="mb-4 font-title text-2xl font-bold tracking-tighter text-gray-900">
                Plataforma de gestão de contratos
              </h3>

              <p className="mb-3 text-[15px] leading-relaxed text-gray-700">
                Ambiente colaborativo onde os contratos B2B vivem. Do rascunho à resolução. Cobre negociação, monitoramento, aditivos, e histórico íntegro do contrato.
              </p>
              <p className="mb-5 text-[15px] leading-relaxed text-gray-700">
                Operada como software com modelo de assinatura mensal por operador. Sediada no Brasil, em conformidade com LGPD.
              </p>

              <div className="space-y-2">
                {[
                  "Ambiente colaborativo entre as partes do contrato",
                  "Monitoramento ativo de obrigações e prazos",
                  "Aditivos formalizados com aprovação documentada",
                  "Histórico auditável e exportável"
                ].map((p) => (
                  <div key={p} className="flex items-start gap-2 text-[13px] leading-snug text-gray-700">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
                    {p}
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-stone-200 pt-5">
                <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">
                  Onde fica
                </p>
                <p className="text-[14px] text-gray-700">maislegal.tech</p>
              </div>
            </div>

            {/* SOMA */}
            <div
              className="rounded-2xl border-2 bg-white p-7 md:p-8"
              style={{ borderColor: "var(--soma)" }}
            >
              <div className="mb-5 flex items-center gap-3">
                <div
                  className="flex size-12 items-center justify-center rounded-xl text-white"
                  style={{ background: "var(--soma)" }}
                >
                  <Scale className="size-6" strokeWidth={1.6} />
                </div>
                <p
                  className="font-mono text-[11px] font-bold uppercase tracking-widest"
                  style={{ color: "var(--soma)" }}
                >
                  SOMA
                </p>
              </div>

              <h3 className="mb-4 font-title text-2xl font-bold tracking-tighter text-gray-900">
                Câmara de mediação e arbitragem
              </h3>

              <p className="mb-3 text-[15px] leading-relaxed text-gray-700">
                Câmara 100% digital, com procedimentos padronizados e especialistas selecionados por área de conflito. Resolve disputas comerciais B2B em meses, com sigilo por padrão.
              </p>
              <p className="mb-5 text-[15px] leading-relaxed text-gray-700">
                Operada como instituição arbitral autônoma, com regulamento próprio e lista de árbitros credenciados pela equipe da câmara. Independente da +legal_.
              </p>

              <div className="space-y-2">
                {[
                  "Mediação primeiro, com crédito financeiro para arbitragem",
                  "Procedimento simplificado em até 6 meses",
                  "Procedimento padrão em até 1 ano",
                  "Tabela de custos pública e simulador de valor"
                ].map((p) => (
                  <div key={p} className="flex items-start gap-2 text-[13px] leading-snug text-gray-700">
                    <span
                      className="mt-1.5 size-1.5 shrink-0 rounded-full"
                      style={{ background: "var(--soma)" }}
                    />
                    {p}
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-stone-200 pt-5">
                <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">
                  Onde fica
                </p>
                <p className="text-[14px] text-gray-700">somalegal.tech</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO SE INTEGRAM */}
      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mb-10 max-w-[820px]">
            <p className="eyebrow mb-3 text-stone-700">A integração</p>
            <h2 className="h-soma mb-4">
              Como duas entidades separadas operam juntas.
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              A integração é estrutural, não obrigatória. Você pode usar a +legal_ sem usar a SOMA, e vice-versa. Quem combina ganha vantagens operacionais.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                titulo: "Histórico chega íntegro na câmara",
                body: "Quando uma disputa abre, o histórico do contrato vai para SOMA com um clique. Sem exportar, sem reconstruir, sem semanas de investigação preliminar."
              },
              {
                titulo: "Cláusula escalonada pré-configurada",
                body: "Contratos criados na +legal_ podem ter cláusula escalonada (mediação primeiro, arbitragem depois) com a SOMA pré-indicada como câmara responsável."
              },
              {
                titulo: "Premium tem desconto na câmara",
                body: "Plano Premium da +legal_ inclui 20% de desconto nas taxas de administração da SOMA. Não vale para honorários de árbitros ou mediadores."
              }
            ].map((c) => (
              <div
                key={c.titulo}
                className="rounded-2xl border border-stone-200 bg-stone-50 p-6"
              >
                <h3 className="mb-3 font-title text-base font-bold leading-snug text-gray-900">
                  {c.titulo}
                </h3>
                <p className="text-[14px] leading-relaxed text-gray-700">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDEPENDÊNCIA INSTITUCIONAL */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mx-auto max-w-[820px] rounded-2xl border-2 border-stone-200 bg-white p-8 md:p-10">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-xl bg-stone-100">
                <ShieldCheck className="size-5 text-stone-700" strokeWidth={1.6} />
              </div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-stone-700">
                Independência institucional
              </p>
            </div>

            <h2 className="mb-5 font-title text-2xl font-bold tracking-tighter text-gray-900 md:text-3xl">
              A SOMA não favorece clientes da +legal_.
            </h2>

            <p className="mb-3 text-[15px] leading-relaxed text-gray-700">
              A independência institucional é princípio fundador. A SOMA é uma câmara arbitral autônoma, com regulamento próprio aprovado. Mantém neutralidade entre as partes em qualquer procedimento, independentemente de qual lado é cliente da +legal_.
            </p>

            <p className="mb-3 text-[15px] leading-relaxed text-gray-700">
              Os árbitros e mediadores da SOMA são <strong className="font-semibold text-gray-900">selecionados por critério de mérito</strong> (formação, experiência, especialização), não por relacionamento comercial com a +legal_. A lista é pública e auditável.
            </p>

            <p className="text-[15px] leading-relaxed text-gray-700">
              O desconto Premium nas taxas administrativas da SOMA é aplicado em momento posterior à decisão arbitral. <strong className="font-semibold text-gray-900">Não influencia</strong> o resultado do procedimento. Disputa, mérito e laudo são processados de forma 100% independente do status comercial.
            </p>
          </div>
        </div>
      </section>

      {/* QUEM ESTÁ POR TRÁS */}
      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mb-10 max-w-[820px]">
            <p className="eyebrow mb-3 text-brand">Quem está por trás</p>
            <h2 className="h-soma mb-4">
              Os fundadores cobrem as duas pontas.
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Os 4 fundadores estão presentes nas duas entidades, com responsabilidades distribuídas. Cada uma tem governança e operação independentes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { nome: "Rafael Rossi", area: "Estratégia · +legal_", initial: "R", color: "var(--brand)" },
              { nome: "Paula Abi-Chahine", area: "Câmara · SOMA", initial: "P", color: "var(--soma)" },
              { nome: "Luis Fernando Hiar", area: "Contratos · +legal_", initial: "L", color: "var(--peach-dark)" },
              { nome: "Raul Mariotti", area: "Tecnologia · ambas", initial: "R", color: "var(--brand)" }
            ].map((f) => (
              <Link
                key={f.nome}
                href={`/equipe/${f.nome.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                className="group flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div
                  className="flex size-12 shrink-0 items-center justify-center rounded-xl text-xl font-extrabold text-white"
                  style={{ background: f.color }}
                >
                  {f.initial}
                </div>
                <div>
                  <p className="font-title text-[14px] font-bold text-gray-900 group-hover:underline">
                    {f.nome}
                  </p>
                  <p
                    className="mt-0.5 font-mono text-[10px] font-bold uppercase tracking-widest"
                    style={{ color: f.color }}
                  >
                    {f.area}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* QUANDO USAR CADA */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mb-10 max-w-[820px]">
            <p className="eyebrow mb-3 text-brand">Quando você usa cada uma</p>
            <h2 className="h-soma mb-4">Cenários típicos.</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                cenario: "Você gerencia 80 contratos B2B sem disputa formal",
                ferramenta: "+legal_",
                cor: "var(--brand)",
                explicacao: "Foco é gestão e prevenção. SOMA fica acoplada, mas não ativada."
              },
              {
                cenario: "Disputa contratual abriu, você precisa de mediação",
                ferramenta: "SOMA",
                cor: "var(--soma)",
                explicacao: "Procedimento aberto na câmara. Se você é cliente +legal_, histórico do contrato vai junto."
              },
              {
                cenario: "Negociação com cliente novo, sem disputa em curso",
                ferramenta: "+legal_",
                cor: "var(--brand)",
                explicacao: "Ambiente colaborativo para negociação. Cláusula escalonada SOMA pode ser pré-configurada."
              },
              {
                cenario: "Empresa precisa de câmara sem usar a plataforma",
                ferramenta: "SOMA",
                cor: "var(--soma)",
                explicacao: "SOMA opera independente. Você pode levar contrato externo direto para câmara."
              },
              {
                cenario: "Você quer usar plataforma sem comprometer com câmara específica",
                ferramenta: "+legal_",
                cor: "var(--brand)",
                explicacao: "Cláusula de resolução de disputas pode apontar para qualquer câmara, inclusive tradicionais. A SOMA é uma opção, não obrigação."
              }
            ].map((s, i) => (
              <div
                key={i}
                className="grid grid-cols-1 gap-3 rounded-2xl border border-stone-200 bg-white p-5 md:grid-cols-[2fr_auto_2fr] md:items-center md:gap-5"
              >
                <p className="text-[14px] leading-snug text-gray-900">{s.cenario}</p>
                <div
                  className="inline-flex w-fit items-center gap-2 rounded-full px-3 py-1"
                  style={{ background: `${s.cor}14` }}
                >
                  <span
                    className="size-1.5 rounded-full"
                    style={{ background: s.cor }}
                  />
                  <span
                    className="font-mono text-[10px] font-bold uppercase tracking-widest"
                    style={{ color: s.cor }}
                  >
                    {s.ferramenta}
                  </span>
                </div>
                <p className="text-[13px] leading-snug text-gray-600">{s.explicacao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand text-white">
        <div className="container-soma py-14 md:py-16">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="eyebrow-light mb-4">Próximo passo</p>
            <h2 className="mb-5 font-title text-2xl font-bold tracking-tighter md:text-3xl">
              Você quer entender uma das duas, ou as duas juntas?
            </h2>
            <p className="mx-auto mb-8 max-w-[560px] text-[15px] leading-relaxed text-white/85">
              Conversa de 30 minutos com a equipe da +legal_, ou navegue pelo site da SOMA. As duas portas abrem.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Button href="/agendar" variant="primary" size="lg" className="!bg-white !text-brand hover:!bg-stone-100">
                Conversar com +legal_ <ArrowRight className="size-4" />
              </Button>
              <Button
                href="https://somalegal.tech"
                variant="secondary"
                size="lg"
                external
                className="!bg-transparent !border-white/40 !text-white hover:!bg-white/10 hover:!border-white"
              >
                Conhecer a SOMA <ExternalLink className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
