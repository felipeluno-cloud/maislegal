import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";

const FUNDADORES = [
  {
    slug: "rafael-rossi",
    nome: "Rafael Rossi",
    initial: "R",
    area: "Estratégia",
    color: "var(--brand)",
    short: "Pricing, posicionamento e operações comerciais. 5 anos em pricing/estratégia em tech startups (Oda, Glovo)."
  },
  {
    slug: "paula-abi-chahine",
    nome: "Paula Abi-Chahine",
    initial: "P",
    area: "Câmara SOMA",
    color: "var(--soma)",
    short: "PhD em Direito Processual Civil pela USP. 18 anos em arbitragem e contencioso cível em escritórios de primeira linha."
  },
  {
    slug: "luis-fernando-hiar",
    nome: "Luis Fernando Hiar",
    initial: "L",
    area: "Contratos",
    color: "var(--peach-dark)",
    short: "MSc em Direito Contratual pelo Insper. 13 anos em arbitragem e contencioso cível."
  },
  {
    slug: "raul-mariotti",
    nome: "Raul Mariotti",
    initial: "R",
    area: "Tecnologia",
    color: "var(--brand)",
    short: "19 anos em engenharia de software. Fulbright Scholar. Lidera plataforma e infraestrutura da câmara."
  }
];

export default function EquipePage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="container-soma py-16 md:py-20">
          <div className="max-w-[820px]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-tint px-3 py-1.5">
              <Users className="size-4 text-brand" strokeWidth={1.6} />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                A equipe
              </span>
            </div>

            <h1 className="mb-4 font-title text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl lg:text-[52px] leading-[1.05]">
              Quatro pessoas. Quatro especializações que se encontram no contrato.
            </h1>

            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
              <strong className="font-semibold text-gray-900">Estratégia, câmara, contratos e tecnologia.</strong> Cada um com mais de uma década de experiência na sua área, e juntos cobrindo o ciclo inteiro que a +legal_ resolve.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
