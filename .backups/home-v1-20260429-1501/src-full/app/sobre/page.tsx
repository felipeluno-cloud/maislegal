import { Heart, Target, Compass } from "lucide-react";
import { CtaDark } from "@/components/base/CtaDark";

const FUNDADORES = [
  {
    nome: "Rafael Rossi",
    role: "Estratégia",
    cred:
      "MSc Economia (University of York), Bc. Direito (USP), Bc. Administração (FGV-EAESP). 5 anos em pricing e estratégia em tech startups (Oda, Glovo)."
  },
  {
    nome: "Paula Abi-Chahine",
    role: "Câmara",
    cred:
      "PhD e MSc Direito Processual Civil (USP). Professora no Insper. 18 anos em arbitragem e contencioso cível em escritórios como Lobo & de Rizzo, ASBZ e Mattos Filho."
  },
  {
    nome: "Luis Fernando Hiar",
    role: "Contratos",
    cred:
      "MSc Direito Contratual (Insper), Bc. Direito (USP). 13 anos em arbitragem e contencioso cível, em Lobo & de Rizzo e Lefosse."
  },
  {
    nome: "Raul Mariotti",
    role: "Tecnologia",
    cred:
      "Bc. Análise de Sistemas (Unicamp), Fullbright Scholar (Daytona State College). 19 anos em tecnologia da informação e engenharia de software."
  }
];

const PRINCIPIOS = [
  {
    icon: Target,
    title: "Ambiente justo.",
    body: "Nenhum dos lados tem vantagem de casa. O ambiente pertence aos dois, não é ferramenta de uma parte só."
  },
  {
    icon: Compass,
    title: "Clareza radical.",
    body: "O que foi combinado, fica combinado. Sem versões paralelas, sem surpresas no final. O registro é único e pertence a todos os envolvidos."
  },
  {
    icon: Heart,
    title: "Coração jurídico. Alma comercial.",
    body: "A +legal_ respeita a precisão da lei e a velocidade do negócio. Sem escolher entre os dois. Contratos são sobre relações, não sobre papel."
  }
];

export default function SobrePage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="container-soma py-16 md:py-24">
          <div className="max-w-[820px]">
            <p className="eyebrow mb-6">Sobre</p>
            <h1 className="h-soma-lg mb-6">
              "Coração jurídico. Alma comercial."
            </h1>
            <p className="text-base font-mono uppercase tracking-widest text-stone-500 mb-8">
              — Rafael Rossi
            </p>
            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
              Infraestrutura para relacionamentos comerciais. A +legal_ existe
              porque contratos terminam fragmentados em sistemas de cada parte,
              voltam apenas quando já é tarde, e a relação comercial paga o
              preço dessa desorganização.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <p className="eyebrow mb-4">Missão</p>
              <h2 className="h-soma mb-5">Transformar contratos em ferramentas vivas.</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Reduzir riscos, prevenir conflitos e preservar os relacionamentos
                que fazem os negócios crescerem. Contratos a serviço da relação
                comercial, não o contrário.
              </p>
            </div>

            <div>
              <p className="eyebrow mb-4">Visão</p>
              <h2 className="h-soma mb-5">A infraestrutura padrão do B2B brasileiro.</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Ser o ambiente onde empresas brasileiras gerenciam todas as
                fases dos seus contratos B2B. Da negociação ao fechamento, do
                cumprimento aos ajustes, até a resolução quando necessária.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mb-12 max-w-[780px]">
            <p className="eyebrow mb-4">Princípios</p>
            <h2 className="h-soma">Três frases de identidade.</h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {PRINCIPIOS.map(p => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="card-soma flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-lg"
                >
                  <Icon className="size-7 text-brand" strokeWidth={1.5} />
                  <h3 className="font-title text-xl font-bold text-gray-900">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-700">
                    {p.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mb-12 max-w-[780px]">
            <p className="eyebrow mb-4">Os fundadores</p>
            <h2 className="h-soma">Quatro pessoas. Quatro especializações.</h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {FUNDADORES.map(f => (
              <div key={f.nome} className="card-soma">
                <p className="mb-2 font-mono text-xs uppercase tracking-widest text-brand">
                  {f.role}
                </p>
                <h3 className="mb-3 font-title text-2xl font-bold text-gray-900">
                  {f.nome}
                </h3>
                <p className="text-sm leading-relaxed text-gray-700">{f.cred}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soma-bg">
        <div className="container-soma section-soma">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-5 text-soma">Co-presença com SOMA</p>
            <h2 className="h-soma mb-5">+legal_ e SOMA, juntas mas independentes.</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              A nossa câmara de mediação e arbitragem, SOMA, é uma entidade
              separada da +legal_, integrada por design. A integração existe
              porque faz sentido para o cliente, sem favorecimento entre as
              duas.
            </p>
          </div>
        </div>
      </section>

      <CtaDark
        title="Conhecer melhor é fácil. Operador grátis."
        body="Os primeiros workspaces moldam a +legal_. Acesso prioritário, voz no desenvolvimento."
      />
    </>
  );
}
