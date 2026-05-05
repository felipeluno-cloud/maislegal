import { Hero } from "@/components/home/Hero";
import { EmUmaFrase } from "@/components/home/EmUmaFrase";
import { Pilar01Colaborativo } from "@/components/home/Pilar01Colaborativo";
import { Pilar02RascunhoResolucao } from "@/components/home/Pilar02RascunhoResolucao";
import { Pilar03CamaraAcoplada } from "@/components/home/Pilar03CamaraAcoplada";
import { MockupPlataforma } from "@/components/home/MockupPlataforma";
import { AnalogiasHome } from "@/components/home/AnalogiasHome";
import { OQueNaoE } from "@/components/home/OQueNaoE";
import { CtaDark } from "@/components/base/CtaDark";
import { RiscosSilenciososLab } from "@/components/lab/RiscosSilenciososLab";

/*
 * /lab/home · página órfã para testar a paleta proposta pelo Rafael.
 *
 * O wrapper aplica CSS variables sobrescritas para simular a paleta nova
 * sem tocar nos tokens globais do site.
 *
 * Paleta em teste:
 * #2F3A4A Dark              · texto principal e brand
 * #F0CDA7 Peach Claro        · acento decorativo (já é var(--peach))
 * #FAFAF8 Off-white         · fundo padrão
 * #EEF2F8 Azul Fundo         · backgrounds de cards (já é var(--brand-tint))
 * #B8614E Terracotta SOMA    · só em co-presença explícita com SOMA
 * #F7EFED Terracotta Claro   · só em co-presença explícita com SOMA
 *
 * Diferenças vs produção:
 * - --brand: #1E3A5F → #2F3A4A (mais cinza, menos navy puro)
 * - --brand-mid: #2A4F7C → #3D4A5C (proporção)
 * - --brand-darker: #152C47 → #20262F
 * - Risco 03 da home (Reputação queimada) usa peach (era SOMA terracotta)
 *   porque o conteúdo não menciona SOMA explicitamente
 *
 * Mantém:
 * - Pilar 03 (Câmara SOMA acoplada) com terracotta · SOMA é mencionada como produto
 * - --peach, --peach-dark, --peach-bg
 * - Cores de status (#dc2626 vermelho, #16a34a verde)
 */

const paletaLab: React.CSSProperties = {
  // @ts-expect-error · CSS custom properties não tipadas
  "--brand": "#2F3A4A",
  "--brand-mid": "#3D4A5C",
  "--brand-darker": "#20262F"
};

export default function LabHomePage() {
  return (
    <div style={paletaLab}>
      {/* Banner topo · indica que é página de teste */}
      <div
        className="relative z-50 border-b"
        style={{
          background: "#2F3A4A",
          borderColor: "rgba(255,255,255,0.08)"
        }}
      >
        <div className="container-soma flex flex-wrap items-center justify-between gap-3 py-3">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-white">
              Página de teste
            </span>
            <p className="text-[13px] text-white/85">
              Paleta proposta em teste. Não é a versão de produção.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">
              Comparar com
            </span>
            <a
              href="/"
              className="rounded-full border border-white/30 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-white/10"
            >
              / produção
            </a>
          </div>
        </div>
      </div>

      <Hero />
      <EmUmaFrase />
      <AnalogiasHome />
      <RiscosSilenciososLab />
      <Pilar01Colaborativo />
      <Pilar02RascunhoResolucao />
      <Pilar03CamaraAcoplada />
      <MockupPlataforma />
      <OQueNaoE />
      <CtaDark
        eyebrow="Os primeiros workspaces moldam a +legal_"
        title="Operador sempre gratuito. Sem cartão. Sem compromisso."
        body="O Early Access é mais que acesso antecipado. Quem entra agora ajuda a definir como o produto evolui, com voz direta nos fundadores e benefícios que se mantêm depois do lançamento público."
        ctaLabel="Entrar para o Early Access"
        ctaHref="/early-access"
      />
    </div>
  );
}
