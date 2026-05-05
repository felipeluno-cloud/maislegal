"use client";

import { useState } from "react";
import {
  HelpCircle,
  Layers,
  Tag,
  Scale,
  Sparkles,
  ShieldCheck,
  Plus,
  Minus
} from "lucide-react";

type Categoria = {
  slug: string;
  label: string;
  icon: typeof HelpCircle;
  perguntas: { q: string; a: string }[];
};

const CATEGORIAS: Categoria[] = [
  {
    slug: "plataforma",
    label: "A plataforma",
    icon: Layers,
    perguntas: [
      {
        q: "O que a +legal_ faz, em uma frase?",
        a: "É o ambiente onde os contratos da sua empresa vivem. Do combinado à resolução. Combina ambiente colaborativo entre as partes, monitoramento ativo de obrigações, e câmara de mediação acoplada quando a disputa precisa ser resolvida."
      },
      {
        q: "Substitui DocuSign ou ClickSign?",
        a: "Não. A +legal_ integra com as principais plataformas de assinatura digital. A assinatura é uma etapa, não o produto inteiro, e a +legal_ cobre tudo o que vem depois dela."
      },
      {
        q: "Substitui meu CRM ou ERP?",
        a: "Não. A +legal_ se conecta com Slack, Calendar, HubSpot, Pipedrive, e roda em paralelo com as ferramentas que você já usa. Ela cobre o espaço entre os sistemas, onde o contrato vive."
      },
      {
        q: "É só Drive com nome jurídico?",
        a: "Não. Drive guarda arquivo. A +legal_ guarda contexto, histórico, obrigações, alertas, e garante que quem participa do contrato vê a mesma versão ao mesmo tempo."
      },
      {
        q: "É baseado em IA?",
        a: "A tecnologia cuida do processo. As pessoas cuidam das decisões que importam. Existe extração automatizada de obrigações e alertas, mas decisões jurídicas e comerciais ficam com quem precisa decidir."
      },
      {
        q: "Funciona para contratos não-B2B?",
        a: "O foco é B2B (empresa-empresa) com contratos recorrentes ou de serviços. Para contratos B2C, locação residencial ou trabalhistas, hoje não é o caso de uso primário."
      }
    ]
  },
  {
    slug: "precos",
    label: "Preços e planos",
    icon: Tag,
    perguntas: [
      {
        q: "O que conta como operador?",
        a: "Qualquer usuário que edita, assina ou aprova contratos. Visitantes (acesso somente leitura) não contam como operadores."
      },
      {
        q: "É realmente gratuito?",
        a: "Sim. O primeiro operador de cada workspace é gratuito de forma permanente, sem cartão e sem prazo limitado. A partir do segundo operador, R$ 550 por mês (mensal sem fidelidade) ou R$ 500 por mês no plano anual."
      },
      {
        q: "Tem trial limitado?",
        a: "Não. O primeiro operador é gratuito permanente, não é trial. Você usa quanto tempo quiser, com 1 operador, sem custo."
      },
      {
        q: "Tem contrato anual ou fidelidade?",
        a: "Não. Pagamento mensal, sem fidelidade. Você cancela quando quiser, sem multa."
      },
      {
        q: "Posso convidar a outra parte do contrato?",
        a: "Sim. Visitantes (acesso somente leitura) não geram cobrança. A outra parte do contrato e seu advogado externo entram de graça como visitantes."
      },
      {
        q: "Como funciona o desconto SOMA do Premium?",
        a: "20% de desconto nas taxas de administração da câmara SOMA. Não se aplica aos honorários de árbitros ou mediadores."
      },
      {
        q: "Como cancelo?",
        a: "Pelo próprio painel, em poucos cliques. Os contratos ficam acessíveis para exportação em formato aberto por 90 dias depois do cancelamento."
      },
      {
        q: "Tem preço diferenciado para escritórios de advocacia?",
        a: "Sim. R$ 250 por operador, com modelo que considera o volume de relacionamentos ativos e credenciais externas como especialização em arbitragem e registros na OAB."
      },
      {
        q: "Como sei que vale o custo?",
        a: "R$ 6 mil por ano (no plano anual, por operador adicional) é ordem de grandeza menor que qualquer um desses riscos. Uma multa de LGPD pode chegar a 2% do faturamento anual. Um cliente perdido por descumprimento sem aviso vai embora sem voltar. Um caso de arbitragem mal documentado custa três semanas de advogado externo só para reconstruir histórico."
      },
      {
        q: "E se eu não fizer nada?",
        a: "Tudo continua funcionando como funciona hoje. Os contratos continuam fechados com cuidado e depois desaparecendo em pastas. Os SLAs continuam não cobrados. As renovações continuam acontecendo na inércia. O custo está aí, distribuído em vários lugares onde ninguém somou ainda."
      }
    ]
  },
  {
    slug: "camara",
    label: "Câmara SOMA",
    icon: Scale,
    perguntas: [
      {
        q: "+legal_ e SOMA são a mesma empresa?",
        a: "Não. São entidades separadas, com integração estrutural. A integração existe porque faz sentido para o cliente, não porque há favorecimento entre plataforma e câmara."
      },
      {
        q: "Preciso usar a SOMA para usar a +legal_?",
        a: "Não. Você pode usar a +legal_ sem usar a SOMA, e vice-versa. Quando uma disputa acontece, a SOMA está acoplada como opção, mas você escolhe se usa ou não."
      },
      {
        q: "Quanto custa a câmara SOMA?",
        a: "Tabela pública, com taxa de abertura, taxa de administração e honorários de árbitros/mediadores. Procedimento simplificado com até 6 meses de duração, padrão até 1 ano. Consulte somalegal.tech para a tabela atualizada."
      },
      {
        q: "Como funciona a mediação primeiro?",
        a: "A mediação vem antes da arbitragem, com incentivo financeiro. Se a mediação não resolve, os honorários da mediação viram desconto direto na arbitragem. Você começa pela conversa estruturada e só escala se precisar."
      },
      {
        q: "É sigiloso?",
        a: "Sim. Sigilo é regra, não exceção. Nada da resolução é público, nem o fato de ter ocorrido. Concorrentes, prospects ou jornalistas que pesquisam o nome da empresa não encontram."
      }
    ]
  },
  {
    slug: "early-access",
    label: "Early Access",
    icon: Sparkles,
    perguntas: [
      {
        q: "Quanto tempo dura o Early Access?",
        a: "Não há prazo fixo. O Early Access fecha quando atingirmos o número de workspaces que conseguimos acompanhar com qualidade. Os benefícios permanecem para quem já entrou."
      },
      {
        q: "Os benefícios expiram depois do lançamento público?",
        a: "Não. Os primeiros workspaces preservam os benefícios mesmo depois do lançamento público: operador 1 grátis permanente, preço de lançamento garantido, acesso direto aos fundadores."
      },
      {
        q: "Como funciona a importação acompanhada?",
        a: "A equipe da +legal_ importa os primeiros contratos críticos com você, configura os campos do seu portfólio, e ajusta os alertas para os SLAs que importam mais. Sessão de 1 hora normalmente cobre 10 a 20 contratos."
      },
      {
        q: "Quem entra no Early Access fala com fundadores?",
        a: "Sim. Sessões mensais com Rafael Rossi (Estratégia) e os fundadores das outras áreas. Seu feedback orienta o que entra em produção nos próximos meses."
      },
      {
        q: "Quanto tempo a equipe leva para responder?",
        a: "Em até 3 dias úteis depois do cadastro. Se for conversa pelo /agendar, o calendário mostra os horários disponíveis."
      }
    ]
  },
  {
    slug: "seguranca",
    label: "Segurança e LGPD",
    icon: ShieldCheck,
    perguntas: [
      {
        q: "Os dados ficam onde?",
        a: "Servidores em território brasileiro, com criptografia em trânsito (TLS 1.3) e em repouso (AES-256). Backup diário automático com retenção de 30 dias."
      },
      {
        q: "A +legal_ está em conformidade com a LGPD?",
        a: "Sim. Operamos como controlador conjunto com você quando faz sentido (ex: dados de contraparte que você compartilha) e como operador quando você é o controlador. DPO designado disponível em dpo@maislegal.tech."
      },
      {
        q: "Como funciona o controle de acesso?",
        a: "Cada workspace tem operadores e visitantes, com permissões diferenciadas. Logs de acesso e modificação ficam disponíveis para auditoria. SSO via Google e Microsoft (Microsoft em construção)."
      },
      {
        q: "Vocês têm SOC 2 ou ISO 27001?",
        a: "Em processo. SOC 2 Tipo I previsto para o segundo semestre de 2026. Trust Center detalhado em /seguranca."
      },
      {
        q: "O que acontece com os dados se eu cancelar?",
        a: "Por 90 dias depois do cancelamento, os contratos ficam acessíveis para exportação em formato aberto. Depois desse prazo, os dados são apagados conforme política de retenção, salvo se você pedir extensão."
      }
    ]
  }
];

export default function FaqPage() {
  const [aberta, setAberta] = useState<string | null>(null);
  const [filtroAtivo, setFiltroAtivo] = useState<string>("todas");

  const total = CATEGORIAS.reduce((sum, c) => sum + c.perguntas.length, 0);

  return (
    <>
      {/* HERO · resposta direta antes de abrir as perguntas */}
      <section className="relative overflow-hidden border-b border-stone-200 bg-white">
        <div className="container-soma py-12 md:py-16">
          <div className="max-w-[820px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-tint px-3 py-1.5">
              <HelpCircle className="size-4 text-brand" strokeWidth={1.6} />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                Perguntas frequentes
              </span>
            </div>

            <h1 className="mb-4 font-title text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl">
              {total} respostas curtas para o que você está se perguntando.
            </h1>

            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
              <strong className="font-semibold text-gray-900">Categorizadas por tema.</strong> Se a sua pergunta não está aqui, manda uma linha para <a href="mailto:contato@maislegal.tech" className="text-brand underline underline-offset-4 hover:no-underline">contato@maislegal.tech</a>.
            </p>
          </div>
        </div>
      </section>

      {/* FILTROS POR CATEGORIA */}
      <section className="border-b border-stone-200 bg-white">
        <div className="container-soma py-4">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setFiltroAtivo("todas")}
              className={`rounded-full px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-widest transition-colors ${
                filtroAtivo === "todas"
                  ? "bg-brand text-white"
                  : "border border-stone-300 bg-white text-stone-600 hover:bg-stone-50"
              }`}
            >
              Todas · {total}
            </button>
            {CATEGORIAS.map((c) => {
              const Icon = c.icon;
              const ativo = filtroAtivo === c.slug;
              return (
                <button
                  key={c.slug}
                  onClick={() => setFiltroAtivo(c.slug)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-widest transition-colors ${
                    ativo
                      ? "bg-brand text-white"
                      : "border border-stone-300 bg-white text-stone-600 hover:bg-stone-50"
                  }`}
                >
                  <Icon className="size-3.5" strokeWidth={2} />
                  {c.label} · {c.perguntas.length}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* PERGUNTAS · agrupadas por categoria */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="space-y-12">
            {CATEGORIAS.filter(
              (c) => filtroAtivo === "todas" || filtroAtivo === c.slug
            ).map((categoria) => {
              const Icon = categoria.icon;
              return (
                <div key={categoria.slug}>
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-brand-tint">
                      <Icon className="size-5 text-brand" strokeWidth={1.6} />
                    </div>
                    <h2 className="font-title text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
                      {categoria.label}
                    </h2>
                  </div>

                  <div className="space-y-2">
                    {categoria.perguntas.map((p, i) => {
                      const id = `${categoria.slug}-${i}`;
                      const aberto = aberta === id;
                      return (
                        <div
                          key={id}
                          className="overflow-hidden rounded-xl border border-stone-200 bg-white"
                        >
                          <button
                            onClick={() => setAberta(aberto ? null : id)}
                            className="flex w-full items-start justify-between gap-4 p-5 text-left hover:bg-stone-50"
                            aria-expanded={aberto}
                          >
                            <span className="flex-1 font-title text-[15px] font-bold leading-snug text-gray-900 md:text-base">
                              {p.q}
                            </span>
                            <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-stone-100">
                              {aberto ? (
                                <Minus className="size-4 text-stone-600" strokeWidth={2.5} />
                              ) : (
                                <Plus className="size-4 text-stone-600" strokeWidth={2.5} />
                              )}
                            </span>
                          </button>
                          {aberto && (
                            <div className="border-t border-stone-200 px-5 pb-5 pt-4">
                              <p className="text-[14px] leading-relaxed text-gray-700">
                                {p.a}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
