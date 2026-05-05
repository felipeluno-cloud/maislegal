import {
  ArrowRight,
  CalendarCheck,
  MessageSquare,
  Clock,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/base/Button";
import { HeroLogoBg } from "@/components/base/HeroLogoBg";

const PROMESSAS = [
  {
    icon: Clock,
    title: "30 minutos, sem demo de slide",
    body: "Conversa de descoberta. Você conta o cenário, a gente entende o portfólio, e responde se faz sentido."
  },
  {
    icon: MessageSquare,
    title: "Direto com quem decide o produto",
    body: "Você fala com Rafael Rossi (Estratégia) ou com a pessoa da equipe que cobre seu cenário, não com vendedor genérico."
  },
  {
    icon: ShieldCheck,
    title: "Sem cartão, sem compromisso",
    body: "Conversa livre. Se não fizer sentido para você, ninguém vai insistir. A +legal_ está em Early Access curado."
  }
];

const O_QUE_PREPARAR = [
  "Quantos contratos B2B ativos sua empresa tem hoje (faixa, não precisa ser exato).",
  "Quantas pessoas operam contratos no seu time.",
  "Como o histórico de versões e aditivos é mantido hoje (Drive, e-mail, planilha, outra plataforma de gestão de contratos).",
  "Se já houve disputa contratual nos últimos 24 meses, o que aconteceu."
];

export default function AgendarPage() {
  return (
    <>
      {/* HERO · fala diretamente com quem está pronto para conversar */}
      <section id="topo-da-pagina" className="relative overflow-hidden border-b border-stone-200 bg-white">
        <HeroLogoBg position="top-right" color="var(--brand)" opacity={0.06} />

        <div className="container-soma relative py-16 md:py-24">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-tint px-3 py-1.5">
                <CalendarCheck className="size-4 text-brand" strokeWidth={1.6} />
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                  Agendar conversa
                </span>
              </div>

              <h1 className="mb-6 font-title text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl lg:text-[52px] leading-[1.06]">
                Você conversa 30 minutos com a equipe. Decide depois.
              </h1>

              <p className="mb-3 text-lg leading-relaxed text-gray-600 md:text-xl">
                Não é demo de slide. É <strong className="font-semibold text-gray-900">conversa de descoberta</strong> sobre o seu portfólio de contratos, o que está doendo hoje, e se a +legal_ faz sentido para você.
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 md:text-xl">
                Se fizer, a equipe te orienta sobre o Early Access. Se não, você sai <strong className="font-semibold text-gray-900">sabendo o que precisa estruturar</strong>.
              </p>

              <div className="space-y-4">
                {PROMESSAS.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={p.title}
                      className="flex items-start gap-4 rounded-xl border border-stone-200 bg-stone-50 p-4"
                    >
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-tint">
                        <Icon className="size-5 text-brand" strokeWidth={1.6} />
                      </div>
                      <div>
                        <p className="font-title text-[15px] font-bold leading-tight text-gray-900">
                          {p.title}
                        </p>
                        <p className="mt-0.5 text-[13.5px] leading-snug text-gray-700">
                          {p.body}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Coluna direita · Calendly placeholder */}
            <div>
              <div className="rounded-2xl border-2 border-brand bg-white p-7 shadow-lg md:p-8">
                <div className="mb-6">
                  <p className="mb-2 font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                    Janelas disponíveis
                  </p>
                  <h2 className="font-title text-2xl font-bold tracking-tighter text-gray-900 md:text-[28px] leading-[1.15]">
                    Escolha um horário que funciona para você.
                  </h2>
                </div>

                {/* Placeholder do Calendly · substituir pelo embed real */}
                <div
                  className="mb-6 flex min-h-[420px] items-center justify-center rounded-xl border-2 border-dashed border-stone-300 bg-stone-50 p-8"
                  aria-label="Placeholder do widget Calendly"
                >
                  <div className="text-center">
                    <CalendarCheck className="mx-auto mb-4 size-10 text-stone-400" strokeWidth={1.5} />
                    <p className="mb-2 font-title text-base font-bold text-gray-900">
                      Embed do Calendly aqui
                    </p>
                    <p className="mx-auto max-w-[280px] text-[13px] leading-relaxed text-stone-600">
                      Substituir por iframe ou widget oficial do Calendly da equipe quando o link estiver pronto.
                    </p>
                    <code className="mt-4 inline-block rounded bg-white px-3 py-1.5 font-mono text-[11px] text-stone-700 border border-stone-200">
                      data-url="https://calendly.com/maislegal/30min"
                    </code>
                  </div>
                </div>

                {/* CTA fallback · email enquanto o Calendly não está pronto */}
                <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
                  <p className="mb-3 text-[13px] leading-relaxed text-gray-700">
                    Prefere conversar por email primeiro? Manda uma linha sobre o seu cenário, a equipe responde em 1 dia útil.
                  </p>
                  <Button
                    href="mailto:contato@maislegal.tech?subject=Quero%20agendar%20uma%20conversa"
                    variant="secondary"
                    size="md"
                    className="w-full !border-stone-300"
                  >
                    Enviar email para a equipe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE PREPARAR · ajuda quem está chegando */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mb-10 max-w-[820px]">
            <p className="eyebrow mb-3 text-brand">O que adianta preparar</p>
            <h2 className="h-soma mb-4">
              Quatro coisas que tornam a conversa mais útil.
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Não é obrigatório, mas se você chegar com essas respostas na mão, em 30 minutos a gente cobre muito mais.
            </p>
          </div>

          <ul className="space-y-3">
            {O_QUE_PREPARAR.map((item, i) => (
              <li
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-stone-200 bg-white p-5"
              >
                <div
                  className="flex size-9 shrink-0 items-center justify-center rounded-lg font-mono text-[11px] font-bold text-white"
                  style={{ background: "var(--brand)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="pt-1.5 text-[15px] leading-relaxed text-gray-700">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TRÊS RESPOSTAS POSSÍVEIS · expectativa */}
      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mb-10 max-w-[820px]">
            <p className="eyebrow mb-3 text-brand">As três respostas que você pode receber</p>
            <h2 className="h-soma mb-4">
              Sem promessa furada. A equipe te diz se faz sentido.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                tag: "Faz sentido agora",
                color: "var(--brand)",
                bg: "var(--brand-tint)",
                body: "Seu portfólio cabe no Early Access, e a equipe te orienta sobre como entrar com importação acompanhada e primeiro operador grátis."
              },
              {
                tag: "Faz sentido daqui a 6 meses",
                color: "var(--peach-dark)",
                bg: "var(--peach-bg)",
                body: "Hoje seu cenário é cedo demais ou o portfólio é pequeno demais, mas a equipe te avisa quando fizer sentido. Sem insistência."
              },
              {
                tag: "Não faz sentido",
                color: "#666",
                bg: "#F4F4F2",
                body: "Outra ferramenta cobre melhor o seu caso, ou você não tem o problema que a +legal_ resolve. A equipe te aponta o caminho certo."
              }
            ].map((r) => (
              <div
                key={r.tag}
                className="rounded-2xl border-2 bg-white p-6"
                style={{ borderColor: `${r.color}33` }}
              >
                <div
                  className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1"
                  style={{ background: r.bg }}
                >
                  <span
                    className="size-1.5 rounded-full"
                    style={{ background: r.color }}
                  />
                  <span
                    className="font-mono text-[10px] font-bold uppercase tracking-widest"
                    style={{ color: r.color }}
                  >
                    {r.tag}
                  </span>
                </div>
                <p className="text-[14px] leading-relaxed text-gray-700">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA forte · próximo passo */}
      <section className="bg-brand text-white">
        <div className="container-soma py-16 md:py-20">
          <div className="mx-auto max-w-[860px] text-center">
            <p className="eyebrow-light mb-5">Próximo passo</p>
            <h2 className="mb-6 font-title text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              Você pega a janela de 30 minutos, ou entra direto pelo Early Access.
            </h2>
            <p className="mx-auto mb-10 max-w-[640px] text-lg leading-relaxed text-white/80">
              Conversa não é pré-requisito do Early Access. Se você prefere começar com 1 operador grátis e ver no produto, vai direto.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Button
                href="#topo-da-pagina"
                variant="primary"
                size="lg"
                className="!bg-white !text-brand hover:!bg-stone-100"
              >
                Escolher horário <ArrowRight className="size-4" />
              </Button>
              <Button
                href="/early-access"
                variant="secondary"
                size="lg"
                className="!bg-transparent !border-white/40 !text-white hover:!bg-white/10 hover:!border-white"
              >
                Entrar para o Early Access
              </Button>
            </div>

            <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-white/60">
              Operador grátis permanente · sem cartão
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
