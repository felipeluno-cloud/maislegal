import { CtaDark } from "@/components/base/CtaDark";

export default function TermosPage() {
  return (
    <>
      <section className="bg-white">
        <div className="container-soma py-16 md:py-24">
          <div className="max-w-[720px]">
            <p className="eyebrow mb-6">Termos de Uso</p>
            <h1 className="h-soma-lg mb-6">
              As regras do ambiente.
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 mb-12">
              Termos e condições de uso da plataforma +legal_. Documento a ser
              elaborado pela equipe jurídica da +legal_ antes do lançamento
              público.
            </p>

            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="font-title text-2xl font-bold text-gray-900 mt-10 mb-4">
                Conteúdo a desenvolver
              </h2>
              <ul className="space-y-2">
                <li>1. Aceitação dos termos</li>
                <li>2. Definições</li>
                <li>3. Cadastro e contas de usuário</li>
                <li>4. Uso aceitável da plataforma</li>
                <li>5. Conteúdo e responsabilidade do usuário</li>
                <li>6. Pagamentos e cobrança</li>
                <li>7. Suspensão e cancelamento</li>
                <li>8. Propriedade intelectual</li>
                <li>9. Limitação de responsabilidade</li>
                <li>10. Resolução de disputas</li>
                <li>11. Foro e legislação aplicável</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaDark
        title="Dúvidas sobre os termos?"
        body="A equipe responde em contato@maislegal.tech."
        ctaLabel="Falar com a equipe"
        ctaHref="mailto:contato@maislegal.tech"
      />
    </>
  );
}
