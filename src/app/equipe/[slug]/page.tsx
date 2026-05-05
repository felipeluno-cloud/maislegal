import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Linkedin, Mail, GraduationCap, Briefcase, Quote } from "lucide-react";
import { Button } from "@/components/base/Button";

type Fundador = {
  slug: string;
  nome: string;
  initial: string;
  area: string;
  color: "brand" | "soma" | "peach";
  short: string;
  bio: string[];
  formacao: string[];
  experiencia: string[];
  papel: string;
  citacao: string;
  linkedin: string;
  email: string;
};

const FUNDADORES: Fundador[] = [
  {
    slug: "rafael-rossi",
    nome: "Rafael Rossi",
    initial: "R",
    area: "Estratégia",
    color: "brand",
    short: "Pricing, estratégia e operações comerciais. Cuida de como a +legal_ chega ao mercado.",
    bio: [
      "Rafael lidera estratégia da +legal_, do posicionamento ao modelo comercial. Vem de 5 anos em pricing e estratégia em tech startups (Oda, Glovo), onde aprendeu a desenhar produtos B2B que escalam sem perder a intenção original.",
      "Na +legal_, traduz a tese fundadora (contratos a serviço da relação comercial, não o contrário) em decisões concretas de produto, preço, funil e comunicação."
    ],
    formacao: [
      "MSc Economia · University of York",
      "Bc. Direito · USP",
      "Bc. Administração · FGV-EAESP"
    ],
    experiencia: [
      "Strategy & Pricing Lead · Oda · 2 anos",
      "Strategy · Glovo · 3 anos",
      "Consultor Estratégia · Bain & Company · 2 anos"
    ],
    papel: "Define posicionamento, modelo de preço, estratégia de lançamento, e cuida do diálogo com mercado. É quem se senta com clientes corporativos no comercial mais sensível.",
    citacao: "A +legal_ tem coração jurídico, mas tem alma comercial. Sem essa segunda parte, vira mais um software jurídico sem tração.",
    linkedin: "https://linkedin.com/in/rafaelrossi",
    email: "rafael@maislegal.tech"
  },
  {
    slug: "paula-abi-chahine",
    nome: "Paula Abi-Chahine",
    initial: "P",
    area: "Câmara SOMA",
    color: "soma",
    short: "18 anos em arbitragem e contencioso cível. Lidera a câmara SOMA acoplada à +legal_.",
    bio: [
      "Paula é uma das principais referências em arbitragem comercial do Brasil. PhD em Direito Processual Civil pela USP, professora no Insper, e atua há 18 anos em arbitragem e contencioso de alta complexidade nos maiores escritórios do país.",
      "Na +legal_, lidera a câmara SOMA, que está acoplada à plataforma quando uma disputa precisa ser resolvida. Define procedimentos, lista de árbitros e mediadores, e cuida da reputação institucional da câmara."
    ],
    formacao: [
      "PhD Direito Processual Civil · USP",
      "MSc Direito Processual Civil · USP",
      "Bc. Direito · USP"
    ],
    experiencia: [
      "Sócia · Lobo & de Rizzo · 8 anos",
      "Associada Sênior · ASBZ · 5 anos",
      "Associada · Mattos Filho · 5 anos",
      "Professora · Insper · em curso"
    ],
    papel: "Garante que a SOMA tenha o rigor das câmaras tradicionais (CAMARB, FIESP) com a eficiência operacional de uma câmara digital. É quem decide quem entra na lista de árbitros.",
    citacao: "Câmara digital não pode ser sinônimo de câmara fraca. A SOMA existe para provar o contrário.",
    linkedin: "https://linkedin.com/in/paula-abi-chahine",
    email: "paula@somalegal.tech"
  },
  {
    slug: "luis-fernando-hiar",
    nome: "Luis Fernando Hiar",
    initial: "L",
    area: "Contratos",
    color: "peach",
    short: "13 anos em arbitragem e contencioso cível. Lidera a estrutura contratual da plataforma.",
    bio: [
      "Luis Fernando atua há 13 anos em arbitragem e contencioso cível em escritórios de primeira linha. MSc em Direito Contratual pelo Insper, traz para +legal_ a perspectiva de quem vê o contrato chegar fragmentado e quebrado quando a disputa começa.",
      "Lidera a estrutura contratual da plataforma: como cada cláusula vira obrigação rastreável, como aditivos são formalizados, e como o histórico chega íntegro na câmara quando precisa."
    ],
    formacao: [
      "MSc Direito Contratual · Insper",
      "Bc. Direito · USP"
    ],
    experiencia: [
      "Sócio · Lobo & de Rizzo · 6 anos",
      "Associado · Lefosse · 7 anos"
    ],
    papel: "Define a arquitetura contratual da plataforma. Cada decisão de produto sobre cláusulas, aditivos, obrigações e histórico passa pela mesa dele.",
    citacao: "Quase todo conflito que chega na arbitragem podia ter sido resolvido em conversa, se alguém tivesse o histórico organizado.",
    linkedin: "https://linkedin.com/in/luis-fernando-hiar",
    email: "luis@maislegal.tech"
  },
  {
    slug: "raul-mariotti",
    nome: "Raul Mariotti",
    initial: "R",
    area: "Tecnologia",
    color: "brand",
    short: "19 anos em engenharia de software. Lidera a tecnologia da plataforma e da câmara.",
    bio: [
      "Raul lidera a tecnologia da +legal_, da arquitetura da plataforma à infraestrutura da câmara SOMA. Vem de 19 anos em engenharia de software, com Fulbright Scholarship pelos EUA e formação em Análise de Sistemas pela Unicamp.",
      "Tem a regra que organiza o produto: tecnologia cuida do processo, pessoas cuidam das decisões que importam. Isso aparece em cada funcionalidade da plataforma."
    ],
    formacao: [
      "Bc. Análise de Sistemas · Unicamp",
      "Fulbright Scholar · Daytona State College"
    ],
    experiencia: [
      "Tech Lead · stack proprietária · 8 anos",
      "Engineer · projetos B2B SaaS · 11 anos"
    ],
    papel: "Decide o que entra em produção, com que prioridade, e mantém a infraestrutura da plataforma e da câmara rodando. É quem vai responder se seu time de TI ligar com pergunta técnica.",
    citacao: "Software jurídico fica preguiçoso se ninguém cobra dele a velocidade do produto. A +legal_ é cobrada, e por isso entrega.",
    linkedin: "https://linkedin.com/in/raul-mariotti",
    email: "raul@maislegal.tech"
  }
];

const COLORS = {
  brand: { bg: "var(--brand)", tint: "var(--brand-tint)" },
  soma: { bg: "var(--soma)", tint: "var(--soma-bg)" },
  peach: { bg: "var(--peach-dark)", tint: "var(--peach-bg)" }
};

export function generateStaticParams() {
  return FUNDADORES.map((f) => ({ slug: f.slug }));
}

export default async function FundadorPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const f = FUNDADORES.find((x) => x.slug === slug);
  if (!f) notFound();

  const c = COLORS[f.color];

  return (
    <>
      {/* Volta · breadcrumb */}
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
      <section className="relative overflow-hidden bg-white">
        <div className="container-soma py-12 md:py-16">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[auto_1fr]">
            <div
              className="flex size-32 shrink-0 items-center justify-center rounded-3xl text-5xl font-extrabold text-white md:size-40 md:text-6xl"
              style={{ background: c.bg }}
            >
              {f.initial}
            </div>

            <div>
              <p
                className="mb-3 font-mono text-[11px] font-bold uppercase tracking-widest"
                style={{ color: c.bg }}
              >
                {f.area}
              </p>

              <h1 className="mb-4 font-title text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl lg:text-[52px] leading-[1.05]">
                {f.nome}
              </h1>

              <p className="mb-6 max-w-[680px] text-lg leading-relaxed text-gray-600 md:text-xl">
                {f.short}
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={f.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-5 py-2.5 font-semibold text-gray-900 hover:bg-stone-50"
                >
                  <Linkedin className="size-4" strokeWidth={2} /> LinkedIn
                </a>
                <a
                  href={`mailto:${f.email}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-5 py-2.5 font-semibold text-gray-900 hover:bg-stone-50"
                >
                  <Mail className="size-4" strokeWidth={2} /> {f.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIO · prosa */}
      <section className="border-y border-stone-200 bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mx-auto max-w-[820px]">
            <p className="eyebrow mb-3" style={{ color: c.bg }}>
              Sobre {f.nome.split(" ")[0]}
            </p>
            <h2 className="h-soma mb-6">Quem é, o que faz na +legal_.</h2>

            <div className="space-y-4">
              {f.bio.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-gray-700">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PAPEL · destaque */}
      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mx-auto max-w-[820px]">
            <div
              className="rounded-2xl border-2 p-8 md:p-10"
              style={{ borderColor: c.bg, background: c.tint }}
            >
              <p
                className="mb-3 font-mono text-[11px] font-bold uppercase tracking-widest"
                style={{ color: c.bg }}
              >
                Papel na <span className="normal-case">+legal_</span>
              </p>
              <p className="text-[18px] leading-relaxed text-gray-900 md:text-[20px]">
                {f.papel}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORMAÇÃO + EXPERIÊNCIA */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mx-auto grid max-w-[820px] grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-white p-7">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-stone-100">
                  <GraduationCap className="size-5 text-stone-700" strokeWidth={1.6} />
                </div>
                <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-stone-700">
                  Formação
                </p>
              </div>
              <ul className="space-y-3">
                {f.formacao.map((x) => (
                  <li
                    key={x}
                    className="flex items-start gap-3 text-[14px] leading-snug text-gray-700"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-stone-400" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-7">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-stone-100">
                  <Briefcase className="size-5 text-stone-700" strokeWidth={1.6} />
                </div>
                <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-stone-700">
                  Experiência
                </p>
              </div>
              <ul className="space-y-3">
                {f.experiencia.map((x) => (
                  <li
                    key={x}
                    className="flex items-start gap-3 text-[14px] leading-snug text-gray-700"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-stone-400" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CITAÇÃO · destaque */}
      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mx-auto max-w-[820px] text-center">
            <Quote
              className="mx-auto mb-5 size-10"
              style={{ color: c.bg }}
              strokeWidth={1.5}
            />
            <p
              className="font-title text-2xl font-bold leading-snug tracking-tight text-gray-900 md:text-3xl"
              style={{ color: c.bg }}
            >
              "{f.citacao}"
            </p>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-widest text-stone-500">
              {f.nome}
            </p>
          </div>
        </div>
      </section>

      {/* OUTROS FUNDADORES · navegação */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mb-10 max-w-[820px]">
            <p className="eyebrow mb-3 text-brand">Os outros</p>
            <h2 className="h-soma mb-4">Conheça as outras três especializações.</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {FUNDADORES.filter((x) => x.slug !== f.slug).map((x) => {
              const xc = COLORS[x.color];
              return (
                <Link
                  key={x.slug}
                  href={`/equipe/${x.slug}`}
                  className="group flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div
                    className="flex size-14 shrink-0 items-center justify-center rounded-xl text-2xl font-extrabold text-white"
                    style={{ background: xc.bg }}
                  >
                    {x.initial}
                  </div>
                  <div className="flex-1">
                    <p
                      className="mb-0.5 font-mono text-[11px] font-bold uppercase tracking-widest"
                      style={{ color: xc.bg }}
                    >
                      {x.area}
                    </p>
                    <p className="font-title text-base font-bold text-gray-900 group-hover:underline">
                      {x.nome}
                    </p>
                  </div>
                  <ArrowRight className="size-4 text-stone-400 group-hover:text-brand" strokeWidth={1.6} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
