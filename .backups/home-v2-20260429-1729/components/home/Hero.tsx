import { ArrowRight } from "lucide-react";
import { Button } from "@/components/base/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-stone-200 bg-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute h-[700px] w-[700px] rounded-full opacity-[0.04]"
          style={{ background: "var(--brand)", top: "-200px", right: "-150px" }}
        />
        <div
          className="absolute h-[300px] w-[300px] rounded-full opacity-[0.05]"
          style={{ background: "var(--peach-dark)", bottom: "-80px", left: "-60px" }}
        />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.025]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-brand"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-soma relative py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          {/* COLUNA ESQUERDA · narrativa */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-tint px-3 py-1.5">
              <span className="size-1.5 animate-pulse rounded-full bg-brand" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                Gestão de contratos +legal_
              </span>
            </div>

            {/* Headline com hierarquia melhor entre as 2 frases */}
            <h1 className="mb-8 font-title font-bold tracking-tighter">
              <span className="block text-2xl font-medium text-stone-400 md:text-3xl lg:text-[34px]">
                Fechar um bom contrato é legal.
              </span>
              <span className="mt-2 block text-[34px] leading-[1.05] text-gray-900 md:text-[44px] lg:text-[56px]">
                Ver o combinado funcionar é{" "}
                <span className="text-brand">+legal_</span>.
              </span>
            </h1>

            <p className="mb-8 max-w-[540px] text-lg leading-relaxed text-gray-600">
              Um ambiente colaborativo. Do rascunho à resolução. Com câmara de
              mediação e arbitragem acoplada.
            </p>

            <p className="mb-8 max-w-[540px] border-l-2 border-brand pl-4 font-mono text-xs uppercase tracking-widest text-stone-600">
              Para diretores de operações, sócios de PME e escritórios de
              advocacia.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button href="/early-access" variant="primary" size="lg">
                Entrar para o Early Access <ArrowRight className="size-4" />
              </Button>
              <Button href="/como-funciona" variant="secondary" size="lg">
                Ver como funciona
              </Button>
            </div>
          </div>

          {/* COLUNA DIREITA · ilustração marcante */}
          <div className="relative hidden lg:block">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

// Ilustração marcante: ciclo do contrato + câmara SOMA
// Pentagon simétrico com anel orbital, setas de fluxo e SOMA destacada
function HeroIllustration() {
  // Pentagon symmetric: 5 pontos a 72° de distância, começando do topo
  // Centro em (250, 250), raio 175
  const CX = 250;
  const CY = 250;
  const R = 175;

  const angle = (i: number) => (-Math.PI / 2) + (i * 2 * Math.PI) / 5;
  const pos = (i: number) => ({
    x: CX + R * Math.cos(angle(i)),
    y: CY + R * Math.sin(angle(i))
  });

  const STAGES = [
    { i: 0, num: "01", label: "RASCUNHO", color: "var(--brand)" },
    { i: 1, num: "02", label: "ASSINATURA", color: "var(--brand)" },
    { i: 2, num: "03", label: "MONITORAR", color: "var(--peach-dark)" },
    { i: 3, num: "04", label: "ADITIVOS", color: "var(--peach-dark)" },
    { i: 4, num: "05", label: "RESOLUÇÃO", color: "var(--soma)", isSoma: true }
  ];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[500px]">
      <svg
        viewBox="0 0 500 540"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <marker
            id="arrow-brand"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 8 5 L 0 10 z" fill="var(--brand)" opacity="0.6" />
          </marker>
          <marker
            id="arrow-peach"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 8 5 L 0 10 z" fill="var(--peach-dark)" opacity="0.6" />
          </marker>
          <radialGradient id="soma-glow">
            <stop offset="0%" stopColor="var(--soma)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--soma)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Anel orbital principal · sólido sutil */}
        <circle
          cx={CX}
          cy={CY}
          r={R}
          fill="none"
          stroke="var(--brand)"
          strokeWidth="1.2"
          opacity="0.15"
        />

        {/* Anel decorativo externo · pontilhado */}
        <circle
          cx={CX}
          cy={CY}
          r={R + 22}
          fill="none"
          stroke="var(--brand)"
          strokeWidth="0.8"
          strokeDasharray="2 6"
          opacity="0.2"
        />

        {/* Arcos do fluxo entre os estágios · pequenos pedaços de arco com setas */}
        {STAGES.map((s, idx) => {
          const next = STAGES[(idx + 1) % STAGES.length];
          const startA = angle(s.i);
          const endA = angle(next.i);
          // Encurta o arco pra não sobrepor os círculos
          const buffer = 0.18;
          const sx = CX + R * Math.cos(startA + buffer);
          const sy = CY + R * Math.sin(startA + buffer);
          const ex = CX + R * Math.cos(endA - buffer);
          const ey = CY + R * Math.sin(endA - buffer);
          const isSomaArc = next.isSoma;
          const color = isSomaArc ? "var(--soma)" : s.color;
          const opacity = isSomaArc ? "0.5" : "0.4";
          return (
            <path
              key={`arc-${idx}`}
              d={`M ${sx} ${sy} A ${R} ${R} 0 0 1 ${ex} ${ey}`}
              fill="none"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity={opacity}
              markerEnd={
                isSomaArc
                  ? undefined
                  : s.color === "var(--brand)"
                  ? "url(#arrow-brand)"
                  : "url(#arrow-peach)"
              }
            />
          );
        })}

        {/* SOMA glow halo · destaca como diferencial */}
        {(() => {
          const p = pos(4);
          return <circle cx={p.x} cy={p.y} r="50" fill="url(#soma-glow)" />;
        })()}

        {/* Contrato central · documento */}
        <g transform={`translate(${CX} ${CY})`}>
          {/* Sombra */}
          <rect
            x="-60"
            y="-74"
            width="120"
            height="148"
            rx="12"
            fill="var(--peach-bg)"
            transform="translate(8 8)"
            opacity="0.5"
          />
          {/* Documento */}
          <rect
     