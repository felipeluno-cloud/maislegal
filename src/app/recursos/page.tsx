"use client";

import { useState } from "react";
import { AlertTriangle, ArrowRight, Briefcase, Building2, CheckCircle2, Download, FileCheck, FileText, Mail, Scale, ShieldCheck } from "lucide-react";
import { Button } from "@/components/base/Button";
import { HeroLogoBg } from "@/components/base/HeroLogoBg";

type Template = {
  slug: string;
  icon: typeof FileText;
  titulo: string;
  short: string;
  descricao: string[];
  paginas: string;
  formato: string;
  color: string;
};

const TEMPLATES: Template[] = [
  {
    slug: "checklist-compliance-contrato",
    icon: FileCheck,
    titulo: "Checklist · o que pedir antes de assinar",
    short: "20 perguntas que separam um contrato bom de um contrato problemático. O que pedir, o que cortar, o que ajustar antes da assinatura.",
    descricao: [
      "Cláusulas obrigatórias por categoria de contrato: prestação de serviço, fornecimento, parceria comercial.",
      "Sinais de risco a procurar antes de assinar: renovação automática silenciosa, multas desproporcionais, foro inadequado, ausência de cláusula de resolução de disputas.",
      "Como pedir cada ajuste sem desgastar a relação comercial, e o que aceitar quando não dá para mudar."
    ],
    paginas: "8 páginas",
    formato: ".pdf",
    color: "var(--brand)"
  },
  {
    slug: "checklist-portfolio-contratual",
    icon: Building2,
    titulo: "Checklist · auditoria do seu portfólio contratual",
    short: "20 perguntas estruturadas para você fazer um diagnóstico próprio do estado dos contratos B2B da sua empresa, sem precisar de consultoria.",
    descricao: [
      "Diagnóstico em 4 dimensões: organização, monitoramento, histórico, risco.",
      "Cada pergunta vem com explicação curta do porquê importa, e indicação de como interpretar a resposta.",
      "Sai com uma nota de 0 a 100 do estado do seu portfólio, e indicação de onde priorizar a estruturação."
    ],
    paginas: "6 páginas",
    formato: ".pdf",
    color: "var(--brand)"
  },
  {
    slug: "guia-custos-invisiveis",
    icon: AlertTriangle,
    titulo: "Whitepaper · custos invisíveis de contratos sem gestão",
    short: "Os números reais que se perdem em portfólios desorganizados. SLAs não cobrados, renovações sem renegociação, retrabalho jurídico, multas que poderiam ter sido evitadas.",
    descricao: [
      "Quantificação por porte de empresa: PME com 5 a 20 contratos, operação com 50 a 300, escritório com portfólio em diferentes clientes.",
      "Modelos de risco para cada tipo de contrato e como eles se acumulam em silêncio.",
      "Comparação direta: custo de uma plataforma de gestão vs. valor potencial das perdas evitadas em 12 meses."
    ],
    paginas: "14 páginas",
    formato: ".pdf",
    color: "var(--brand)"
  },
  {
    slug: "guia-pme-contrato-grande",
    icon: Briefcase,
    titulo: "Guia · PME contratando com cliente corporativo",
    short: "Para o sócio que assina contrato com cliente corporativo. O que ler, o que negociar, e onde insistir antes da assinatura.",
    descricao: [
      "Os 7 pontos do contrato em que a PME costuma se enrolar por desconhecimento, e como reconhecer cada um.",
      "Modelos de e-mail e perguntas para fazer ao jurídico do cliente sem soar agressivo.",
      "Quando vale envolver advogado externo, quando vale recusar, e quando vale aceitar e seguir em frente."
    ],
    paginas: "16 páginas",
    formato: ".pdf",
    color: "var(--peach-dark)"
  }
];

export default function RecursosPage() {
  const [emailEnviado, setEmailEnviado] = useState(false);
  const [templateSelecionado, setTemplateSelecionado] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>, slug: string) {
    e.preventDefault();
    setTemplateSelecionado(slug);
    setEmailEnviado(true);
    setTimeout(() => {
      setEmailEnviado(false);
      setTemplateSelecionado(null);
    }, 4000);
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-stone-200 bg-white">
        <HeroLogoBg position="top-right" color="var(--brand)" opacity={0.06} />

        <div className="container-soma relative py-12 md:py-16">
          <div className="max-w-[820px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-tint px-3 py-1.5">
              <Download className="size-4 text-brand" strokeWidth={1.6} />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                Recursos gratuitos
              </span>
            </div>

            <h1 className="mb-4 font-title text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl lg:text-[52px] leading-[1.05]">
              Checklists, estudos e guias para tomar decisões melhores nos seus contratos hoje.
            </h1>

            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
              <strong className="font-semibold text-gray-900">Recursos gratuitos</strong> revisados pelos fundadores da +legal_, prontos para usar. Não exige cadastro complicado. Só pedimos seu email para enviar o arquivo.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {TEMPLATES.map((t) => {
              const Icon = t.icon;
              const enviado = emailEnviado && templateSelecionado === t.slug;
              return (
                <div
                  key={t.slug}
                  className="rounded-2xl border-2 bg-white p-7"
                  style={{ borderColor: `${t.color}33` }}
                >
                  <div
                    className="mb-5 flex size-12 items-center justify-center rounded-xl"
                    style={{ background: `${t.color}14` }}
                  >
                    <Icon className="size-6" strokeWidth={1.5} style={{ color: t.color }} />
                  </div>

                  <p
                    className="mb-1 font-mono text-[10px] font-bold uppercase tracking-widest"
                    style={{ color: t.color }}
                  >
                    {t.formato} · {t.paginas}
                  </p>

                  <h2 className="mb-3 font-title text-xl font-bold leading-snug text-gray-900">
                    {t.titulo}
                  </h2>

                  <p className="mb-4 text-[14px] leading-relaxed text-gray-700">{t.short}</p>

                  <details className="mb-5 group">
                    <summary
                      className="cursor-pointer font-mono text-[11px] font-bold uppercase tracking-widest hover:underline"
                      style={{ color: t.color }}
                    >
                      Ver o que vem dentro
                    </summary>
                    <ul className="mt-3 space-y-2">
                      {t.descricao.map((d, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-[13px] leading-snug text-gray-700"
                        >
                          <span
                            className="mt-1.5 size-1.5 shrink-0 rounded-full"
                            style={{ background: t.color }}
                          />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </details>

                  {enviado ? (
                    <div className="rounded-xl bg-emerald-50 p-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="size-5 text-emerald-700" strokeWidth={2} />
                        <p className="font-title text-[13px] font-bold text-emerald-700">
                          Email enviado!
                        </p>
                      </div>
                      <p className="mt-1 text-[12px] leading-snug text-emerald-700">
                        Confira sua caixa de entrada nos próximos minutos.
                      </p>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => handleSubmit(e, t.slug)}
                      className="flex flex-col gap-2 sm:flex-row"
                    >
                      <input
                        type="email"
                        required
                        placeholder="seu@email.com.br"
                        className="flex-1 rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                      />
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 font-semibold text-white transition-opacity hover:opacity-90"
                        style={{ background: t.color }}
                      >
                        <Download className="size-4" strokeWidth={2} />
                        Baixar
                      </button>
                    </form>
                  )}

                  <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-stone-500">
                    Sem cadastro · Sem spam · Pode descadastrar a qualquer momento
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mx-auto max-w-[820px] rounded-2xl border-2 border-stone-200 bg-stone-50 p-8 md:p-10">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-xl bg-stone-100">
                <Mail className="size-5 text-stone-700" strokeWidth={1.6} />
              </div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-stone-700">
                Sobre os materiais
              </p>
            </div>

            <h2 className="mb-4 font-title text-2xl font-bold tracking-tighter text-gray-900 md:text-3xl">
              Modelos prontos não substituem advogado.
            </h2>

            <p className="mb-3 text-[15px] leading-relaxed text-gray-700">
              Esses materiais são pontos de partida para quem quer estruturar a gestão de contratos. <strong className="font-semibold text-gray-900">Não substituem advogado que entenda seu setor, seu cliente, e seu cenário específico</strong>, e nem nos eximem de te lembrar disso aqui.
            </p>

            <p className="mb-6 text-[15px] leading-relaxed text-gray-700">
              Use como base e customize o escopo, valores e SLAs para sua realidade. Quando o contrato for de valor relevante (acima de R$ 100 mil), passe em um advogado de confiança antes de assinar.
            </p>

            <div className="rounded-xl border border-stone-200 bg-white p-4">
              <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                Precisa de indicação de advogado?
              </p>
              <p className="mt-2 text-[13px] leading-snug text-gray-700">
                A equipe da +legal_ tem rede de advogados parceiros que conhecem o produto e o ciclo do contrato B2B. Mande um email para <a href="mailto:contato@maislegal.tech" className="text-brand underline underline-offset-4 hover:no-underline">contato@maislegal.tech</a> que indicamos sem compromisso.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand text-white">
        <div className="container-soma py-14 md:py-16">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="eyebrow-light mb-4">Próximo passo</p>
            <h2 className="mb-5 font-title text-2xl font-bold tracking-tighter md:text-3xl">
              Você baixou o material. Agora estrutura a operação.
            </h2>
            <p className="mx-auto mb-8 max-w-[560px] text-[15px] leading-relaxed text-white/85">
              Templates são ponto de partida. A +legal_ é onde os contratos vivem. Do rascunho à resolução. Comece com 1 operador grátis permanente.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Button href="/early-access" variant="primary" size="lg" className="!bg-white !text-brand hover:!bg-stone-100">
                Entrar para o Early Access <ArrowRight className="size-4" />
              </Button>
              <Button href="/agendar" variant="secondary" size="lg" className="!bg-transparent !border-white/40 !text-white hover:!bg-white/10 hover:!border-white">
                Agendar conversa
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
