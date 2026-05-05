import { CtaDark } from "@/components/base/CtaDark";

export default function PrivacidadePage() {
  return (
    <>
      <section className="bg-white">
        <div className="container-soma py-16 md:py-24">
          <div className="max-w-[720px]">
            <p className="eyebrow mb-6">Política de Privacidade</p>
            <h1 className="h-soma-lg mb-6">
              Como tratamos os seus dados.
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 mb-12">
              Texto integral da Política de Privacidade da +legal_, em
              conformidade com a LGPD. Documento a ser elaborado pela equipe
              jurídica da +legal_ antes do lançamento público.
            </p>

            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="font-title text-2xl font-bold text-gray-900 mt-10 mb-4">
                Conteúdo a desenvolver
              </h2>
              <ul className="space-y-2">
                <li>1. Dados pessoais coletados</li>
                <li>2. Finalidade do tratamento</li>
                <li>3. Compartilhamento com terceiros</li>
                <li>4. Direitos do titular dos dados</li>
                <li>5. Tempo de retenção</li>
                <li>6. Medidas de segurança</li>
                <li>7. Cookies e tecnologias de rastreamento</li>
                <li>8. Encarregado de dados (DPO)</li>
                <li>9. Atualizações desta política</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaDark
        title="Dúvidas sobre privacidade?"
        body="Nosso encarregado de dados responde em privacidade@maislegal.tech."
        ctaLabel="Falar com a equipe"
        ctaHref="mailto:privacidade@maislegal.tech"
      />
    </>
  );
}
