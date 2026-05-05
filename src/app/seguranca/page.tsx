import {
  ShieldCheck,
  Lock,
  Server,
  KeyRound,
  FileCheck,
  AlertTriangle,
  ArrowRight,
  Mail
} from "lucide-react";
import { Button } from "@/components/base/Button";
import { HeroLogoBg } from "@/components/base/HeroLogoBg";

const PILARES = [
  {
    icon: Lock,
    title: "Criptografia em trânsito e em repouso",
    body: "TLS 1.3 para todas as conexões com a plataforma. AES-256 para dados em repouso, com chaves rotacionadas regularmente.",
    extra: "Quem intercepta a conexão não lê. Quem tem acesso ao disco não lê."
  },
  {
    icon: Server,
    title: "Infraestrutura em território brasileiro",
    body: "Servidores hospedados em datacenters certificados em São Paulo. Dados não saem do Brasil sem consentimento explícito.",
    extra: "Soberania de dado é regra, e residência geográfica facilita a conformidade com LGPD."
  },
  {
    icon: KeyRound,
    title: "Controle de acesso com auditoria",
    body: "Cada workspace tem operadores e visitantes com permissões diferenciadas. Logs imutáveis registram cada acesso, modificação e exportação.",
    extra: "Você sabe quem viu o quê, quando, e a partir de onde."
  },
  {
    icon: FileCheck,
    title: "Backup diário com retenção de 30 dias",
    body: "Backup automático a cada 24 horas, com retenção mínima de 30 dias. Restore point-in-time disponível para recuperação granular.",
    extra: "Falha de hardware ou erro humano não significa perda de dado."
  }
];

const COMPLIANCE = [
  {
    sigla: "LGPD",
    title: "Lei Geral de Proteção de Dados",
    status: "Conforme desde o lançamento",
    body: "Operamos como controlador conjunto ou operador conforme o caso. DPO designado. Política de privacidade pública detalhando bases legais, retenção e direitos do titular.",
    statusColor: "var(--brand)"
  },
  {
    sigla: "SOC 2",
    title: "Service Organization Controls",
    status: "Tipo I previsto · 2º semestre 2026",
    body: "Auditoria independente em andamento, cobrindo segurança, disponibilidade, integridade de processamento, confidencialidade e privacidade. Relatório completo será disponibilizado para clientes Enterprise.",
    statusColor: "var(--peach-dark)"
  },
  {
    sigla: "ISO 27001",
    title: "Sistema de Gestão de Segurança",
    status: "Em avaliação · planejamento 2027",
    body: "Avaliação inicial em curso. Decisão de certificar baseada em demanda dos primeiros clientes Enterprise.",
    statusColor: "#666"
  }
];

const PRATICAS = [
  "Senhas armazenadas com hash bcrypt, nunca em texto plano.",
  "Autenticação 2FA disponível para todos os operadores.",
  "SSO via Google. Microsoft em construção.",
  "Pen test anual independente, com remediação em prazo definido.",
  "Princípio do menor privilégio aplicado a toda conta de operação.",
  "Política formal de gestão de incidentes, com SLAs de comunicação."
];

export default function SegurancaPage() {
  return (
    <>
      {/* HERO · fala diretamente com decisor de TI/segurança */}
      <section className="relative overflow-hidden border-b border-stone-200 bg-white">
        <HeroLogoBg position="top-right" color="var(--brand)" opacity={0.07} width={560} />
        <div className="container-soma relative py-16 md:py-24">
          <div className="max-w-[820px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-tint px-3 py-1.5">
              <ShieldCheck className="size-4 text-brand" strokeWidth={1.6} />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                Trust Center
              </span>
            </div>

            <h1 className="mb-6 font-title text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl lg:text-[52px] leading-[1.06]">
              Seu time de TI vai querer saber dessas coisas. A gente tem as respostas.
            </h1>

            <p className="mb-3 text-lg leading-relaxed text-gray-600 md:text-xl">
              A +legal_ guarda contratos B2B sensíveis: NDAs, valores comerciais, dados de contraparte, obrigações em curso. <strong className="font-semibold text-gray-900">Segurança e conformidade</strong> não são opção, são pré-requisito.
            </p>

            <p className="mb-8 text-lg leading-relaxed text-gray-600 md:text-xl">
              Esta página resume as <strong className="font-semibold text-gray-900">práticas, certificações e políticas</strong> que sustentam a plataforma. Se o seu time precisar de detalhe técnico ou de relatório formal, fala com a equipe.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button href="mailto:seguranca@maislegal.tech" variant="primary" size="lg">
                <Mail className="size-4" /> Falar com seguranca@maislegal.tech
              </Button>
              <Button href="/privacidade" variant="secondary" size="lg" className="!border-stone-300">
                Política de privacidade completa
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4 PILARES · práticas concretas */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mb-12 max-w-[820px]">
            <p className="eyebrow mb-3 text-brand">Quatro pilares de segurança</p>
            <h2 className="h-soma mb-4">
              Como a +legal_ protege os contratos da sua empresa.
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Não são promessas genéricas. São práticas implementadas, auditáveis e descritas em política formal disponível sob NDA.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {PILARES.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="rounded-2xl border border-stone-200 bg-white p-7"
                >
                  <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-brand-tint">
                    <Icon className="size-6 text-brand" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-3 font-title text-lg font-bold leading-snug text-gray-900">
                    {p.title}
                  </h3>
                  <p className="mb-3 text-[14px] leading-relaxed text-gray-700">
                    {p.body}
                  </p>
                  <p className="border-t border-stone-100 pt-3 text-[13px] leading-relaxed text-gray-600">
                    {p.extra}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPLIANCE · status de certificações */}
      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mb-12 max-w-[820px]">
            <p className="eyebrow mb-3 text-brand">Status de conformidade</p>
            <h2 className="h-soma mb-4">
              Onde estamos hoje, e o que vem pela frente.
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Transparência sobre o que já está em vigor e o que está em andamento. Sem prometer certificação que ainda não veio.
            </p>
          </div>

          <div className="space-y-4">
            {COMPLIANCE.map((c) => (
              <div
                key={c.sigla}
                className="rounded-2xl border border-stone-200 bg-white p-6 md:p-7"
              >
                <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-[auto_1fr_auto]">
                  <div
                    className="flex size-16 items-center justify-center rounded-2xl font-title text-lg font-extrabold text-white"
                    style={{ background: c.statusColor }}
                  >
                    {c.sigla}
                  </div>
                  <div>
                    <h3 className="mb-1 font-title text-xl font-bold text-gray-900">
                      {c.title}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-gray-700">
                      {c.body}
                    </p>
                  </div>
                  <div
                    className="inline-flex items-center gap-2 self-start rounded-full px-3 py-1.5 md:self-center"
                    style={{ background: `${c.statusColor}14` }}
                  >
                    <span
                      className="size-1.5 rounded-full"
                      style={{ background: c.statusColor }}
                    />
                    <span
                      className="font-mono text-[10px] font-bold uppercase tracking-widest"
                      style={{ color: c.statusColor }}
                    >
                      {c.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LGPD · seção própria · destaque */}
      <section className="bg-brand-tint">
        <div className="container-soma section-soma">
          <div className="mx-auto max-w-[920px] rounded-2xl border-2 border-brand bg-white p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-xl bg-brand text-white">
                <FileCheck className="size-6" strokeWidth={1.6} />
              </div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                LGPD em detalhe
              </p>
            </div>

            <h2 className="mb-5 font-title text-3xl font-bold tracking-tighter text-gray-900 md:text-4xl">
              A +legal_ trata dado pessoal todos os dias. Não dá para improvisar com isso.
            </h2>

            <p className="mb-3 text-[15px] leading-relaxed text-gray-700">
              Quando você cadastra contratos B2B na +legal_, dados pessoais aparecem: assinantes, representantes legais, advogados, gestores de contratos. A LGPD se aplica.
            </p>

            <p className="mb-6 text-[15px] leading-relaxed text-gray-700">
              Por isso temos DPO designado, política formal pública, e protocolos para atender exercícios de direitos do titular dentro do prazo legal.
            </p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
                <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-widest text-brand">
                  DPO
                </p>
                <p className="mb-1 font-title text-base font-bold text-gray-900">
                  Encarregado de proteção de dados
                </p>
                <a
                  href="mailto:dpo@maislegal.tech"
                  className="font-mono text-[12px] text-brand underline underline-offset-4 hover:no-underline"
                >
                  dpo@maislegal.tech
                </a>
              </div>
              <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
                <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-widest text-brand">
                  Direitos do titular
                </p>
                <p className="mb-1 font-title text-base font-bold text-gray-900">
                  Solicite acesso, correção, portabilidade
                </p>
                <p className="text-[12px] text-gray-600">
                  Resposta em até 15 dias corridos
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/privacidade" variant="primary" size="md">
                Ler política de privacidade <ArrowRight className="size-4" />
              </Button>
              <Button href="mailto:dpo@maislegal.tech" variant="secondary" size="md" className="!border-stone-300">
                Falar com o DPO
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PRÁTICAS · lista enxuta */}
      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mb-12 max-w-[820px]">
            <p className="eyebrow mb-3 text-brand">Práticas operacionais</p>
            <h2 className="h-soma mb-4">
              O que está rodando, em código, em política, todos os dias.
            </h2>
          </div>

          <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {PRATICAS.map((p, i) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-xl border border-stone-200 bg-stone-50 p-5"
              >
                <div
                  className="flex size-8 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-bold text-white"
                  style={{ background: "var(--brand)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="pt-1 text-[14px] leading-snug text-gray-700">{p}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* INCIDENTE · transparência */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mx-auto max-w-[820px] rounded-2xl border-2 border-stone-200 bg-white p-8 md:p-10">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-xl bg-stone-100">
                <AlertTriangle className="size-5 text-stone-700" strokeWidth={1.6} />
              </div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-stone-700">
                Política de incidentes
              </p>
            </div>

            <h3 className="mb-4 font-title text-2xl font-bold tracking-tighter text-gray-900">
              Se algo der errado, você fica sabendo rápido.
            </h3>

            <p className="mb-3 text-[14.5px] leading-relaxed text-gray-700">
              Compromisso público de comunicar incidentes de segurança ou violação de dados pessoais aos clientes afetados em até 72 horas após confirmação, e à ANPD dentro do prazo legal.
            </p>

            <p className="mb-3 text-[14.5px] leading-relaxed text-gray-700">
              Comunicação inclui o que aconteceu, quais dados foram afetados, o que estamos fazendo para conter, e o que você precisa fazer do seu lado.
            </p>

            <p className="text-[14.5px] leading-relaxed text-gray-700">
              Reporte de vulnerabilidade ou suspeita de incidente pode ser enviado para <a href="mailto:seguranca@maislegal.tech" className="text-brand underline underline-offset-4 hover:no-underline">seguranca@maislegal.tech</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
