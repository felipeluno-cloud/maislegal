import { Hero } from "@/components/home/Hero";
import { RiscosSilenciosos } from "@/components/home/RiscosSilenciosos";
import { TresPassos } from "@/components/home/TresPassos";
import { MockupPlataforma } from "@/components/home/MockupPlataforma";
import { Diferencial } from "@/components/home/Diferencial";
import { PortasPersona } from "@/components/home/PortasPersona";
import { BlocoSOMA } from "@/components/home/BlocoSOMA";
import { OQueNaoE } from "@/components/home/OQueNaoE";
import { CtaDark } from "@/components/base/CtaDark";

export default function Home() {
  return (
    <>
      <Hero />
      <RiscosSilenciosos />
      <TresPassos />
      <MockupPlataforma />
      <Diferencial />
      <PortasPersona />
      <BlocoSOMA />
      <OQueNaoE />
      <CtaDark
        eyebrow="Comece agora"
        title="Operador sempre gratuito. Sem cartão. Sem compromisso."
        body="Convide a outra parte de graça. Do contrato à resolução, no mesmo ambiente."
        ctaLabel="Entrar para o Early Access"
        ctaHref="/early-access"
      />
    </>
  );
}
