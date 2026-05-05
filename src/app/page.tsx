import { Hero } from "@/components/home/Hero";
import { EmUmaFrase } from "@/components/home/EmUmaFrase";
import { RiscosSilenciosos } from "@/components/home/RiscosSilenciosos";
import { Pilar01Colaborativo } from "@/components/home/Pilar01Colaborativo";
import { Pilar02RascunhoResolucao } from "@/components/home/Pilar02RascunhoResolucao";
import { Pilar03CamaraAcoplada } from "@/components/home/Pilar03CamaraAcoplada";
import { AnalogiasHome } from "@/components/home/AnalogiasHome";
import { CtaDark } from "@/components/base/CtaDark";

export default function Home() {
  return (
    <>
      <Hero />
      <EmUmaFrase />
      <AnalogiasHome />
      <RiscosSilenciosos />
      <Pilar01Colaborativo />
      <Pilar02RascunhoResolucao />
      <Pilar03CamaraAcoplada />
      <CtaDark
        eyebrow={
          <>
            Os primeiros workspaces moldam a <span className="normal-case">+legal_</span>
          </>
        }
        title="Primeiro operador sempre gratuito. Sem cartão. Sem compromisso."
        body={
          <>
            <p>
              O Early Access é mais que acesso antecipado. Quem entra agora ajuda a definir como o produto evolui, com canal direto com os fundadores.
            </p>
            <p>E mantém o acesso depois do lançamento público.</p>
          </>
        }
        ctaLabel="Entrar para o Early Access"
        ctaHref="/early-access"
      />
    </>
  );
}
