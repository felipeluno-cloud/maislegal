import { Heart, Target, Compass, Users, Scale, ArrowRight } from "lucide-react";
import { Button } from "@/components/base/Button";
import { HeroLogoBg } from "@/components/base/HeroLogoBg";

const FUNDADORES = [
  {
    nome: "Rafael Rossi",
    sobrenome: "Rossi",
    role: "Estratégia e produto",
    initial: "R",
    color: "brand",
    bio: "Define o que +legal_ promete ao mercado e como o produto entrega isso. Olha para o contrato pelo lado comercial: o que organiza relacionamentos, o que protege a relação, o que evita atrito.",
    cred:
      "MSc Economia (University of York), Bc. Direito (USP), Bc. Administração (FGV-EAESP). 5 anos em pricing e estratégia em tech startups (Oda, Glovo)."
  },
  {
    nome: "Paula Abi-Chahine",
    sobrenome: "Abi-Chahine",
    role: "Câmara e arbitragem",
    initial: "P",
    color: "soma",
    bio: "Conduz a câmara SOMA e desenha como mediação e arbitragem operam dentro da +legal_. 18 anos vendo o pós-conflito de empresas que esqueceram do contrato.",
    cred:
      "PhD e MSc Direito Processual Civil (USP). Professora no Insper. 18 anos em arbitragem e contencioso cível em Lobo & de Rizzo, ASBZ e Mattos Filho."
  },
  {
    nome: "Luis Fernando Hiar",
    sobrenome: "Hiar",
    role: "Contratos e jurídico",
    initial: "L",
    color: "peach",
    bio: "Desenha o lado jurídico-contratual da plataforma e define o que precisa ficar registrado em cada momento do ciclo. Sabe na pele o quanto custa reconstruir um contrato bagunçado três anos depois.",
    cred:
      "MSc Direito Contratual (Insper), Bc. Direito (USP). 13 anos em arbitragem e contencioso cível, em Lobo & de Rizzo e Lefosse."
  },
  {
    nome: "Raul Mariotti",
    sobrenome: "Mariotti",
    role: "Tecnologia e arquitetura",
    initial: "R",
    color: "brand",
    bio: "Constrói a tecnologia que faz tudo isso funcionar sem virar uma ferramenta a mais para a empresa aprender. 19 anos integrando sistemas que precisavam conversar e não conversavam.",
    cred:
      "Bc. Análise de Sistemas (Unicamp), Fullbright Scholar (Daytona State College). 19 anos em tecnologia da informação e engenharia de software."
  }
];

const PRINCIPIOS = [
  {
    icon: Target,
    title: "Ambiente justo.",
    body: "O ambiente é o <strong class=\"font-semibold text-gray-900\">mesmo para os dois lados</strong>. Pertence a todos os envolvidos no contrato, não é ferramenta de uma parte só."
  },
  {
    icon: Compass,
    title: "Clareza radical.",
    body: "O que foi combinado <strong class=\"font-semibold text-gray-900\">fica combinado</strong>, sem versões paralelas e sem surpresas no final, porque o registro é único e pertence a todos os envolvidos no contrato."
  },
  {
    icon: Heart,
    title: "Honestidade radical.",
    body: "A +legal_ não promete o que não entrega. Quando algo está fora do escopo, a gente fala. Quando algo é uma comodidade opcional, deixa claro."
  }
];

const COLOR_PERSONA: Record<string, { bg: string; text: string; border: string }> = {
  brand: { bg: "var(--brand)", text: "white", border: "var(--brand)" },
  peach: { bg: "var(--peach-dark)", text: "white", border: "var(--peach-dark)" },
  soma: { bg: "var(--soma)", text: "white", border: "var(--soma)" }
};

export default function SobrePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-stone-200 bg-white">
        <HeroLogoBg position="top-right" color="var(--brand)" opacity={0.07} width={560} />
      <HeroLogoBg position="bottom-left" color="var(--peach-dark)" opacity={0.05} width={320} />
        <div className="container-soma relative py-16 md:py-24">
          <div className="max-w-[820px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-tint px-3 py-1.5">
              <Heart className="size-4 text-brand" strokeWidth={1.6} />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                Sobre
              </span>
            </div>

            <h1 className="mb-6 font-title text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl lg:text-[56px] leading-[1.05]">
              Existimos para o contrato servir ao relacionamento, não o contrário.
            </h1>

            <p className="mb-3 text-lg leading-relaxed text-gray-600 md:text-xl max-w-[760px]">
              Somos quatro fundadores. Estratégia, câmara, jurídico, tecnologia. Cada um viu o mesmo problema por um ângulo diferente.
            </p>
            <p className="text-lg leading-relaxed text-gray-600 md:text-xl max-w-[760px]">
              A <span className="text-brand">+legal_</span> é onde esses ângulos se encontram.
            </p>
          </div>
        </div>
      </section>

      {/* POR QUE EXISTIMOS · manifesto */}
      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mx-auto max-w-[820px]">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-tint px-3 py-1.5">
              <span className="size-1.5 rounded-full bg-brand" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                Por que existimos
              </span>
            </div>

            <h2 className="h-soma mb-8">
              A camada que faltava entre o jurídico e o comercial.
            </h2>

            <div className="space-y-5 text-lg leading-relaxed text-gray-700">
              <p>
                A +legal_ nasceu da observação de algo que se repete em empresas B2B do Brasil inteiro: contratos são fechados com muito cuidado, com horas de negociação e revisão. Depois desaparecem em pastas, drives e e-mails, e só voltam à tona quando já é tarde.
              </p>
              <p>
                Os quatro fundadores chegaram a esse problema por caminhos diferentes. Paula e Luis viam o lado pós-conflito, com escritórios passando semanas reconstruindo histórico antes de cada arbitragem.
              </p>
              <p>
                Raul vinha da tecnologia, onde ferramentas existem mas não se conversam. Rafael vinha de operações comerciais em startups, onde o contrato é o que organiza o relacionamento entre cliente e fornecedor.
              </p>
              <p>
                A conclusão veio rápido: o problema não é só jurídico, nem só tecnológico. É de relacionamento comercial. Faltava uma camada entre as duas pontas.
              </p>
              <p>
                A +legal_ é essa camada. Um <strong className="font-semibold text-gray-900">ambiente colaborativo</strong> entre quem participa do contrato, com cuidado contínuo durante o ciclo inteiro, e com a <strong className="font-semibold text-gray-900">câmara SOMA acoplada</strong> para quando uma disputa precisar ser resolvida. Tudo no mesmo lugar, sem precisar trocar nenhuma das ferramentas que você já usa.
              </p>
            </div>

            <p className="mt-10 font-title text-2xl font-bold tracking-tight text-brand md:text-3xl">
              Coração jurídico, alma comercial.
            </p>
          </div>
        </div>
      </section>

      {/* TAGLINE founder-led, expert-run */}
      <section className="bg-white">
        <div className="container-soma pb-2">
          <div className="mx-auto max-w-[820px] border-t border-stone-200 pt-10">
            <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
              Quem constrói
            </p>
            <p className="mt-3 font-title text-2xl font-bold tracking-tighter text-gray-900 md:text-3xl">
              Construída pelos fundadores. Operada por especialistas que vivem o problema todo dia.
            </p>
          </div>
        </div>
      </section>

      {/* MISSÃO E VISÃO */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-brand bg-white p-8">
              <div
                className="mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5"
                style={{ background: "var(--brand-tint)" }}
              >
                <Target className="size-4 text-brand" strokeWidth={1.6} />
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                  Missão
                </span>
              </div>
              <h2 className="mb-4 font-title text-3xl font-bold tracking-tighter text-gray-900 md:text-4xl">
                Transformar contratos em ferramentas vivas.
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Reduzir riscos, prevenir conflitos e preservar os
                relacionamentos que fazem os negócios crescerem. Contratos <strong className="font-semibold text-gray-900">a serviço da relação comercial</strong>, não o contrário.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-peach-dark bg-white p-8">
              <div
                className="mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5"
                style={{ background: "var(--peach-bg)" }}
              >
                <Compass className="size-4 text-peach-dark" strokeWidth={1.6} />
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-peach-dark">
                  Visão
                </span>
              </div>
              <h2 className="mb-4 font-title text-3xl font-bold tracking-tighter text-gray-900 md:text-4xl">
                A infraestrutura padrão do B2B brasileiro.
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Ser o ambiente onde empresas brasileiras gerenciam todas as
                fases dos seus contratos B2B. Da negociação ao fechamento, do
                cumprimento aos ajustes, até a resolução quando necessária.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCÍPIOS */}
      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mb-12 max-w-[820px]">
            <p className="eyebrow mb-4">Princípios</p>
            <h2 className="h-soma">Três frases de identidade.</h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {PRINCIPIOS.map((p, i) => {
              const Icon = p.icon;
              const accentColor =
                i === 0 ? "var(--brand)" : i === 1 ? "var(--peach-dark)" : "var(--soma)";
              const accentBg =
                i === 0 ? "var(--brand-tint)" : i === 1 ? "var(--peach-bg)" : "var(--soma-bg)";
              return (
                <div
                  key={p.title}
                  className="flex flex-col rounded-2xl border-2 border-stone-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ borderColor: accentColor }}
                >
                  <div
                    className="mb-5 flex size-14 items-center justify-center rounded-xl"
                    style={{ background: accentBg }}
                  >
                    <Icon className="size-7" style={{ color: accentColor }} strokeWidth={1.5} />
                  </div>
                  <h3
                    className="mb-3 font-title text-xl font-bold tracking-tight"
                    style={{ color: accentColor }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed text-gray-700"
                    dangerouslySetInnerHTML={{ __html: p.body }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FUNDADORES */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mb-12 max-w-[820px]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-tint px-3 py-1.5">
              <Users className="size-4 text-brand" strokeWidth={1.6} />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                Os fundadores
              </span>
            </div>
            <h2 className="h-soma mb-4">
              Quatro pessoas. Quatro especializações.
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Estratégia, câmara, contratos e tecnologia. Cada um com décadas
              de experiência na sua área.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {FUNDADORES.map(f => {
              const c = COLOR_PERSONA[f.color];
              const parts = f.nome.split(" ");
              const initials = parts[0][0] + parts[parts.length - 1][0];
              return (
                <div
                  key={f.nome}
                  className="flex items-start gap-5 rounded-2xl border border-stone-200 border-l-4 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ borderLeftColor: c.border }}
                >
                  <div
                    className="flex size-16 shrink-0 items-center justify-center rounded-full"
                    style={{ background: c.bg }}
                  >
                    <span className="font-title text-xl font-bold tracking-tight text-white">
                      {initials}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p
                      className="mb-1 font-mono text-[10px] font-bold uppercase tracking-widest"
                      style={{ color: c.bg }}
                    >
                      {f.role}
                    </p>
                    <h3 className="mb-3 font-title text-2xl font-bold text-gray-900">
                      {f.nome}
                    </h3>
                    <p className="mb-3 text-[15px] leading-relaxed text-gray-800">
                      {f.bio}
                    </p>
                    <p className="border-t border-stone-200 pt-3 text-xs leading-relaxed text-gray-500">
                      {f.cred}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CO-PRESENÇA SOMA */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--soma-bg)" }}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute h-[400px] w-[400px] rounded-full opacity-[0.1]"
            style={{ background: "var(--soma)", top: "-100px", right: "-100px" }}
          />
        </div>

        <div className="container-soma section-soma relative">
          <div className="mx-auto max-w-[820px] text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-soma/30 bg-white px-3 py-1.5">
              <Scale className="size-4 text-soma" strokeWidth={1.6} />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-soma">
                Co-presença com SOMA
              </span>
            </div>
            <h2 className="h-soma mb-5">
              +legal_ e SOMA, juntas mas independentes.
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              A SOMA, nossa câmara de mediação e arbitragem, é uma entidade
              separada da +legal_. A integração existe porque faz sentido
              para o cliente, não porque há favorecimento entre as duas
              empresas. <strong className="font-semibold text-gray-900">Combinado não sai caro</strong>, e cada combinado entre
              cliente e câmara é independente da plataforma.
            </p>
          </div>
        </div>
      </section>

      {/* CTA forte · próximo passo */}
      <section className="bg-brand text-white">
        <div className="container-soma py-16 md:py-20">
          <div className="mx-auto max-w-[860px] text-center">
            <p className="eyebrow-light mb-5">Próximo passo</p>
            <h2 className="mb-6 font-title text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              Você entra para os primeiros workspaces, ou conversa primeiro com a equipe.
            </h2>
            <p className="mx-auto mb-10 max-w-[640px] text-lg leading-relaxed text-white/80">
              O caminho rápido é entrar para o Early Access e começar com 1 operador grátis. O cauteloso é uma conversa de 30 minutos antes de decidir.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Button
                href="/early-access"
                variant="primary"
                size="lg"
                className="!bg-white !text-brand hover:!bg-stone-100"
              >
                Entrar para o Early Access <ArrowRight className="size-4" />
              </Button>
              <Button
                href="mailto:contato@maislegal.tech?subject=Conversa%20com%20a%20equipe"
                variant="secondary"
                size="lg"
                className="!bg-transparent !border-white/40 !text-white hover:!bg-white/10 hover:!border-white"
              >
                Conversar com a equipe primeiro
              </Button>
            </div>

            <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-white/60">
              Resposta da equipe em 1 dia útil
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
