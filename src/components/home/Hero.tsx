import { ArrowRight } from "lucide-react";
import { Button } from "@/components/base/Button";
import { HeroLogoBg } from "@/components/base/HeroLogoBg";
import { HeroPlatformShowcase } from "@/components/home/HeroPlatformShowcase";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-stone-200 bg-white">
      <HeroLogoBg position="top-right" color="var(--brand)" opacity={0.07} width={620} />
      <HeroLogoBg position="bottom-left" color="var(--peach-dark)" opacity={0.05} width={320} />

      <div className="container-soma relative py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          {/* COLUNA ESQUERDA · narrativa */}
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-tint px-3.5 py-2">
              <span className="size-1.5 animate-pulse rounded-full bg-brand" />
              <span className="font-mono text-[12px] font-bold uppercase tracking-widest text-brand">
                Gestão de contratos <span className="normal-case">+legal_</span>
              </span>
            </div>

            <h1 className="mb-7 font-title font-bold tracking-tighter">
              <span className="block text-2xl font-medium text-stone-400 md:text-3xl lg:text-[34px]">
                Fechar um bom contrato é legal.
              </span>
              <span className="mt-2 block text-[34px] leading-[1.05] text-gray-900 md:text-[44px] lg:text-[56px]">
                Ver o combinado funcionar é{" "}
                <span className="text-brand">+legal_</span>.
              </span>
            </h1>

            <p className="mb-4 max-w-[540px] text-lg leading-relaxed text-gray-600">
              Todo contrato bem fechado define escopo, deixa claro o que cada lado espera, e dá às partes um lugar para voltar. Mas o cenário muda, e o contrato se espalha: uma versão no Drive, um aditivo no e-mail, um combinado em uma reunião que ninguém anotou.
            </p>
            <p className="mb-10 max-w-[540px] text-lg leading-relaxed text-gray-700">
              A <span className="text-brand">+legal_</span> existe para que o contrato continue vivo depois da assinatura. <strong className="font-semibold text-gray-900">E para o combinado virar mais negócio e menos problema.</strong>
            </p>

            <div className="flex flex-wrap gap-3">
              <Button href="/early-access" variant="primary" size="lg">
                Entrar para o Early Access <ArrowRight className="size-4" />
              </Button>
              <Button href="/como-funciona" variant="ghost" size="lg">
                Ver como funciona
              </Button>
            </div>
          </div>

          {/* COLUNA DIREITA · plataforma em ação */}
          <div className="hidden lg:block">
            <HeroPlatformShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}
