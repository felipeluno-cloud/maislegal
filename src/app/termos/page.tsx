import { ScrollText, AlertCircle, Mail } from "lucide-react";
import { Button } from "@/components/base/Button";
import { HeroLogoBg } from "@/components/base/HeroLogoBg";

const SECOES = [
  "Aceitação dos termos",
  "Definições",
  "Cadastro e contas de usuário",
  "Uso aceitável da plataforma",
  "Conteúdo e responsabilidade do usuário",
  "Pagamentos e cobrança",
  "Suspensão e cancelamento",
  "Propriedade intelectual",
  "Limitação de responsabilidade",
  "Resolução de disputas",
  "Foro e legislação aplicável"
];

export default function TermosPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-stone-200 bg-white">
        <HeroLogoBg position="top-right" color="var(--brand)" opacity={0.07} width={560} />
        <div className="container-soma relative py-16 md:py-24">
          <div className="max-w-[820px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-tint px-3 py-1.5">
              <ScrollText className="size-4 text-brand" strokeWidth={1.6} />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                Termos de Uso
              </span>
            </div>

            <h1 className="mb-6 font-title text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl lg:text-6xl">
              As regras
              <br />
              <span className="text-brand">do ambiente</span>.
            </h1>

            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
              Termos e condições de uso da plataforma +legal_. Documento em
              elaboração pela equipe jurídica antes do lançamento público.
            </p>
          </div>
        </div>
      </section>

      {/* AVISO + ÍNDICE */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mx-auto max-w-[760px]">
            <div className="mb-10 flex items-start gap-4 rounded-2xl border-l-4 border-peach-dark bg-peach-bg p-6">
              <AlertCircle
                className="mt-1 size-5 flex-shrink-0 text-peach-dark"
                strokeWidth={2}
              />
              <div>
                <p className="mb-1 font-mono text-[11px] font-bold uppercase tracking-widest text-peach-dark">
                  Documento em construção
                </p>
                <p className="text-sm leading-relaxed text-gray-700">
                  A versão final dos Termos de Uso está em revisão jurídica.
                  Esta página apresenta o índice das seções que vão ser
                  publicadas antes do lançamento público.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-8 md:p-10">
              <p className="mb-6 font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                Conteúdo planejado · 11 seções
              </p>

              <ol className="space-y-2.5">
                {SECOES.map((s, i) => (
                  <li
                    key={s}
                    className="flex items-start gap-3 border-b border-stone-200 pb-2.5 last:border-b-0"
                  >
                    <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base text-gray-700">{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mx-auto max-w-[760px] rounded-2xl border border-brand-light bg-brand-tint p-8 md:p-10">
            <div className="flex items-start gap-5">
              <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                <Mail className="size-6" strokeWidth={1.6} />
              </div>
              <div className="flex-1">
                <p className="mb-2 font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                  Dúvidas sobre os termos
                </p>
                <h2 className="mb-3 font-title text-2xl font-bold text-gray-900">
                  Fale direto com a equipe.
                </h2>
                <p className="mb-5 text-base leading-relaxed text-gray-700">
                  Qualquer questão sobre o uso da plataforma, condições
                  comerciais ou interpretação dos termos, a gente responde por
                  e-mail.
                </p>
                <Button
                  href="mailto:contato@maislegal.tech"
                  variant="primary"
                  size="md"
                >
                  contato@maislegal.tech
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
