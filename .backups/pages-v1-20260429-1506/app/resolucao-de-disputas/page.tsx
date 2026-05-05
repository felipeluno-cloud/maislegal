import {
  ArrowRight,
  ShieldCheck,
  MousePointerClick,
  Coins,
  Lock,
  Star,
  Monitor,
  Users,
  Clock,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/base/Button";
import { CtaDark } from "@/components/base/CtaDark";

const PRACTICE = [
  {
    icon: ShieldCheck,
    title: "Histórico disponível",
    body: "Árbitro ou mediador acessa o histórico completo do contrato, sem reconstrução manual."
  },
  {
    icon: MousePointerClick,
    title: "Abertura com 1 clique",
    body: "Qualquer parte abre procedimento diretamente do contrato na plataforma."
  },
  {
    icon: Coins,
    title: "Crédito de mediação",
    body: "Se a mediação não resolver, os honorários viram desconto na arbitragem."
  },
  {
    icon: Lock,
    title: "Sigilo por padrão",
    body: "Nenhuma parte da resolução é pública, nem o facto de ter ocorrido."
  },
  {
    icon: Star,
    title: "Plano Premium",
    body: "20% de desconto nas taxas de administração da câmara SOMA para assinantes."
  }
];

const FLUXO = [
  { num: "01", label: "Contrato em execução", body: "Acompanhamento normal pela +legal_." },
  { num: "02", label: "Divergência", body: "Surge desacordo entre as partes sobre cumprimento ou interpretação." },
  { num: "03", label: "Câmara SOMA ativada em 24h", body: "Procedimento aberto com um clique. Histórico já disponível." },
  { num: "04", label: "Resolução em meses, não anos", body: "Mediação primeiro com incentivo financeiro. Arbitragem se necessário." }
];

export default function ResolucaoPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="container-soma py-16 md:py-24">
          <div className="max-w-[820px]">
            <p className="eyebrow mb-6 text-soma">Resolução de Disputas</p>
            <h1 className="h-soma-lg mb-6">
              Todos os outros sistemas terminam quando o contrato vai a litígio.
              A +legal_ continua.
            </h1>
            <p className="mb-10 text-lg leading-relaxed text-gray-600 md:text-xl">
              A integração com a nossa câmara de mediação e arbitragem, SOMA,
              é o diferencial estrutural. Único ambiente de gestão de contratos
              no Brasil com câmara de resolução integrada.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/early-access" variant="primary" size="lg">
                Entrar para o Early Access <ArrowRight className="size-4" />
              </Button>
              <Button href="https://somalegal.tech" variant="secondary" size="lg" external>
                Conhecer a câmara <ExternalLink className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soma-bg">
        <div className="container-soma section-soma">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow mb-4 text-soma">A câmara</p>
              <h2 className="h-soma mb-6">
                Conheça a SOMA, nossa câmara de mediação e arbitragem.
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                100% digital. Procedimentos padronizados. Especialistas por área.
              </p>
              <ul className="space-y-3 text-base text-gray-700">
                <li className="flex items-start gap-3">
                  <Clock className="mt-1 size-5 flex-shrink-0 text-soma" strokeWidth={1.5} />
                  <span>
                    <strong>Procedimento simplificado em até 6 meses.</strong>{" "}
                    Para disputas de menor valor, custos publicados.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-1 size-5 flex-shrink-0 text-soma" strokeWidth={1.5} />
                  <span>
                    <strong>Procedimento padrão em até 1 ano.</strong> Para
                    disputas mais complexas, com mais fases.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="mt-1 size-5 flex-shrink-0 text-soma" strokeWidth={1.5} />
                  <span>
                    <strong>Especialistas por área.</strong> Árbitros e mediadores
                    selecionados conforme a matéria do conflito.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Monitor className="mt-1 size-5 flex-shrink-0 text-soma" strokeWidth={1.5} />
                  <span>
                    <strong>Tudo online.</strong> Sem deslocamento, sem papel,
                    sem necessidade de advogados locais.
                  </span>
                </li>
              </ul>
              <div className="mt-8">
                <Button href="https://somalegal.tech" variant="primary" size="lg" external className="!bg-soma !border-soma hover:!bg-soma/90">
                  Ver o site da SOMA <ExternalLink className="size-4" />
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-soma/20 bg-white p-7 shadow-sm">
              <p className="mb-5 font-mono text-[11px] uppercase tracking-widest text-soma">
                O que muda na prática
              </p>
              <ul className="divide-y divide-stone-200">
                {PRACTICE.map(p => {
                  const Icon = p.icon;
                  return (
                    <li key={p.title} className="flex items-start gap-3 py-4">
                      <Icon className="size-5 flex-shrink-0 text-soma" strokeWidth={1.5} />
                      <div>
                        <p className="mb-1 font-semibold text-gray-900">
                          {p.title}
                        </p>
                        <p className="text-sm text-gray-700">{p.body}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mb-12 max-w-[780px]">
            <p className="eyebrow mb-4">O fluxo em 4 passos</p>
            <h2 className="h-soma mb-4">Da divergência à resolução, sem sair do ambiente.</h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {FLUXO.map(f => (
              <div key={f.num} className="card-soma flex flex-col gap-3">
                <p className="font-mono text-xs uppercase tracking-widest text-brand">
                  Passo {f.num}
                </p>
                <h3 className="font-title text-lg font-bold leading-snug text-gray-900">
                  {f.label}
                </h3>
                <p className="text-sm leading-relaxed text-gray-700">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-tint">
        <div className="container-soma section-soma">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-5">Vantagem estrutural</p>
            <p className="font-title text-2xl font-bold leading-tight text-brand md:text-3xl">
              "Único ambiente de gestão de contratos no Brasil com câmara de
              resolução integrada. Não é uma feature, é arquitectura."
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow mb-4">Nota de independência</p>
            <p className="text-base italic leading-relaxed text-gray-700">
              "+legal_ e SOMA são entidades separadas. A integração existe
              porque faz sentido para o cliente, não porque há favoritismo entre
              plataforma e câmara."
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-xl bg-stone-50 p-7 text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-stone-500 mb-3">
              Dado de contexto
            </p>
            <p className="font-title text-3xl font-bold text-gray-900">
              83 milhões de processos em curso no Brasil.
            </p>
            <p className="mt-2 text-base text-gray-600">
              A judicialização não é solução, é fila. Resolução privada deixa
              de ser luxo.
            </p>
            <p className="mt-3 font-mono text-[11px] text-stone-500">
              Fonte: CNJ 2024
            </p>
          </div>
        </div>
      </section>

      <CtaDark
        eyebrow="Próximo passo"
        title="Operador grátis para sempre. Câmara SOMA quando precisar."
        body="20% de desconto nas taxas SOMA para assinantes Premium da +legal_."
        ctaSecondaryLabel="Conhecer a câmara"
        ctaSecondaryHref="https://somalegal.tech"
      />
    </>
  );
}
