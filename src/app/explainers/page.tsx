import {
  Lightbulb,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { HeroLogoBg } from "@/components/base/HeroLogoBg";

const MOMENTOS = [
  { num: "01", muda: "Cliente pede mais entregas no mês", responde: "Aditivo registrado, escopo atualizado, sem renegociar tudo", permite: "A flexibilidade vira parte do acordo, não exceção informal" },
  { num: "02", muda: "Sócio sai da empresa", responde: "Assinaturas e permissões transferidas, histórico disponível para o substituto", permite: "O contexto fica na empresa, não na pessoa" },
  { num: "03", muda: "Mercado pressiona o preço", responde: "Renegociação documentada, contraproposta com data, decisão registrada para os dois lados", permite: "A negociação acontece sem desgaste de versões paralelas" },
  { num: "04", muda: "Time muda quem cuida do contrato", responde: "Contexto fica no ambiente, a passagem é direta", permite: "O novo responsável começa com o histórico, não com a página em branco" },
  { num: "05", muda: "Lei nova pede ajuste em uma cláusula", responde: "Revisão proposta, aprovada pelas partes, vigência clara", permite: "A adaptação é cooperativa, não imposta" },
  { num: "06", muda: "Combinado verbal precisa virar oficial", responde: "Aditivo formal em poucos minutos, com aprovação documentada", permite: "A confiança não depende de memória" }
];

const HABITOS = [
  {
    num: "01",
    titulo: "O contrato deixa de ser tarefa só do jurídico.",
    body: "Vira responsabilidade compartilhada com quem cuida do contrato no dia a dia: a diretora de operações, o sócio que atende o cliente, o gestor que toca o fornecedor. O jurídico continua consultado, mas não é mais o único lugar onde o contrato vive.",
    visual: "distribuido"
  },
  {
    num: "02",
    titulo: "Aditivos viram fluxo natural, não exceção burocrática.",
    body: "Cada mudança no negócio encontra um lugar para ser registrada. O aditivo deixa de ser evento raro que pede convocação e vira parte do funcionamento normal do relacionamento.",
    visual: "fluxo"
  },
  {
    num: "03",
    titulo: "As duas partes do contrato trabalham com a mesma versão, sempre.",
    body: "Acaba o desencontro de informação que produz desentendimento. Quando alguém pergunta \"como ficou aquela cláusula?\", a resposta é a mesma dos dois lados da mesa.",
    visual: "mesma-versao"
  },
  {
    num: "04",
    titulo: "O relacionamento fica protegido pela estrutura do contrato.",
    body: "Quando aparece divergência, a referência comum está disponível antes do conflito escalar. Quando chega ao impasse, a câmara SOMA está acoplada, com mediação primeiro e arbitragem se necessário.",
    visual: "soma"
  }
];

/* ════════════════════════════════════════════════════════════════
   ILUSTRAÇÃO 01 · Timeline Ramificada (Hero)
   Contrato vivo crescendo organicamente após a assinatura
   ──────────────────────────────────────────────────────────────── */

function TimelineRamificadaSVG() {
  return (
    <svg viewBox="0 0 480 460" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-hidden="true">
      {/* Eixo principal · timeline horizontal contínua */}
      <line x1="60" y1="230" x2="440" y2="230" stroke="var(--brand)" strokeWidth="2" strokeOpacity="0.3" strokeLinecap="round" />

      {/* Nó âncora · ASSINATURA */}
      <g transform="translate(60 230)">
        <circle r="14" fill="white" stroke="var(--brand)" strokeWidth="2" />
        <circle r="6" fill="var(--brand)" />
        <text x="0" y="-26" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="700" fill="var(--brand)" textAnchor="middle" letterSpacing="1.5">
          ASSINATURA
        </text>
      </g>

      {/* Ramo 1 · cima · Aditivo 03 (peach) */}
      <g>
        <path d="M 130 230 Q 150 180 170 130" fill="none" stroke="var(--peach-dark)" strokeWidth="1.6" strokeOpacity="0.55" strokeDasharray="3 3" />
        <circle cx="130" cy="230" r="3" fill="var(--brand)" opacity="0.5" />
        <circle cx="170" cy="130" r="14" fill="white" stroke="var(--peach-dark)" strokeWidth="1.6" />
        <circle cx="170" cy="130" r="5" fill="var(--peach-dark)" opacity="0.7" />
        <text x="170" y="105" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill="var(--peach-dark)" textAnchor="middle" letterSpacing="0.8">
          ADITIVO 03
        </text>
      </g>

      {/* Ramo 2 · baixo · Renovação (brand) */}
      <g>
        <path d="M 200 230 Q 220 280 240 330" fill="none" stroke="var(--brand)" strokeWidth="1.6" strokeOpacity="0.55" strokeDasharray="3 3" />
        <circle cx="200" cy="230" r="3" fill="var(--brand)" opacity="0.5" />
        <circle cx="240" cy="330" r="14" fill="white" stroke="var(--brand)" strokeWidth="1.6" />
        <circle cx="240" cy="330" r="5" fill="var(--brand)" opacity="0.7" />
        <text x="240" y="358" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill="var(--brand)" textAnchor="middle" letterSpacing="0.8">
          RENOVAÇÃO
        </text>
      </g>

      {/* Ramo 3 · cima · Nova Cláusula (peach) */}
      <g>
        <path d="M 280 230 Q 295 175 310 110" fill="none" stroke="var(--peach-dark)" strokeWidth="1.6" strokeOpacity="0.55" strokeDasharray="3 3" />
        <circle cx="280" cy="230" r="3" fill="var(--brand)" opacity="0.5" />
        <circle cx="310" cy="110" r="14" fill="white" stroke="var(--peach-dark)" strokeWidth="1.6" />
        <circle cx="310" cy="110" r="5" fill="var(--peach-dark)" opacity="0.7" />
        <text x="310" y="84" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill="var(--peach-dark)" textAnchor="middle" letterSpacing="0.8">
          NOVA CLÁUSULA
        </text>
      </g>

      {/* Ramo 4 · baixo · Novo Signatário (brand) */}
      <g>
        <path d="M 350 230 Q 365 285 380 340" fill="none" stroke="var(--brand)" strokeWidth="1.6" strokeOpacity="0.55" strokeDasharray="3 3" />
        <circle cx="350" cy="230" r="3" fill="var(--brand)" opacity="0.5" />
        <circle cx="380" cy="340" r="14" fill="white" stroke="var(--brand)" strokeWidth="1.6" />
        <circle cx="380" cy="340" r="5" fill="var(--brand)" opacity="0.7" />
        <text x="380" y="368" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill="var(--brand)" textAnchor="middle" letterSpacing="0.8">
          NOVO SIGNATÁRIO
        </text>
      </g>

      {/* Nó "Hoje" · pulsante · final do eixo */}
      <g transform="translate(440 230)">
        <circle r="16" fill="white" stroke="var(--brand)" strokeWidth="2.4" />
        <circle r="7" fill="var(--brand)">
          <animate attributeName="opacity" values="1;0.4;1" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <circle r="14" fill="none" stroke="var(--brand)" strokeWidth="1">
          <animate attributeName="r" values="10;22;10" dur="1.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0;0.5" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <text x="0" y="-30" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="700" fill="var(--brand)" textAnchor="middle" letterSpacing="1.5">
          HOJE
        </text>
      </g>

      {/* Footer mono · stats */}
      <text x="240" y="430" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill="var(--brand)" textAnchor="middle" letterSpacing="2" opacity="0.55">
        4 MOVIMENTOS · 1 RELAÇÃO · CONTRATO VIVO
      </text>
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════════
   ILUSTRAÇÃO 02 · Handover Gap
   O vácuo de atenção pós-assinatura
   ──────────────────────────────────────────────────────────────── */

function HandoverGapSVG() {
  return (
    <svg viewBox="0 0 720 320" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-hidden="true">
      {/* Eixo timeline horizontal */}
      <line x1="40" y1="230" x2="680" y2="230" stroke="#a8a29e" strokeWidth="1.5" strokeOpacity="0.35" />

      {/* PRÉ-ASSINATURA · 4 stakeholders descendo para a timeline */}
      {[
        { x: 80, color: "var(--brand)", label: "JURÍDICO" },
        { x: 160, color: "var(--peach-dark)", label: "COMERCIAL" },
        { x: 240, color: "var(--brand)", label: "OPERAÇÕES" },
        { x: 320, color: "var(--peach-dark)", label: "CLIENTE" }
      ].map((s, i) => (
        <g key={i}>
          {/* Linha descendente · atenção */}
          <line x1={s.x} y1="60" x2={s.x} y2="230" stroke={s.color} strokeWidth="1.4" strokeOpacity="0.5" strokeDasharray="2 3" />
          {/* Nó superior · stakeholder */}
          <circle cx={s.x} cy="60" r="10" fill="white" stroke={s.color} strokeWidth="1.6" />
          <circle cx={s.x} cy="60" r="4" fill={s.color} opacity="0.7" />
          {/* Nó inferior · contato com timeline */}
          <circle cx={s.x} cy="230" r="6" fill={s.color} />
          {/* Label */}
          <text x={s.x} y="38" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill={s.color} textAnchor="middle" letterSpacing="1">
            {s.label}
          </text>
        </g>
      ))}

      {/* Marcador ASSINATURA · vertical line + label */}
      <g>
        <line x1="380" y1="40" x2="380" y2="270" stroke="var(--brand)" strokeWidth="2" />
        <rect x="335" y="265" width="90" height="22" rx="11" fill="var(--brand)" />
        <text x="380" y="280" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="700" fill="white" textAnchor="middle" letterSpacing="1.5">
          ASSINATURA
        </text>
      </g>

      {/* PÓS-ASSINATURA · vácuo · timeline cinza, sem stakeholders */}
      <line x1="380" y1="230" x2="680" y2="230" stroke="#a8a29e" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="4 6" />

      {/* Marcadores de "tempo" cinza pós-assinatura · sem ninguém */}
      {[450, 520, 590, 660].map((x, i) => (
        <circle key={i} cx={x} cy="230" r="3" fill="#a8a29e" opacity={0.4 - i * 0.06} />
      ))}

      {/* Label "Vácuo de atenção" · pós-assinatura */}
      <text x="530" y="180" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill="#999" textAnchor="middle" letterSpacing="1.5">
        VÁCUO DE ATENÇÃO
      </text>
      <line x1="450" y1="195" x2="610" y2="195" stroke="#a8a29e" strokeWidth="0.8" strokeOpacity="0.4" />

      {/* Labels finais · contraste */}
      <text x="200" y="305" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill="var(--brand)" textAnchor="middle" letterSpacing="1.5" opacity="0.7">
        ATÉ AQUI · TODOS CUIDAM
      </text>
      <text x="530" y="305" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="700" fill="#999" textAnchor="middle" letterSpacing="1.5" opacity="0.7">
        DAQUI · NINGUÉM CUIDA
      </text>
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════════
   ILUSTRAÇÃO 03 · Mini-visuais por camada de custo
   ──────────────────────────────────────────────────────────────── */

function VisualErosaoFinanceira() {
  return (
    <svg viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg" className="h-12 w-20" aria-hidden="true">
      {/* Coluna sólida · valor original */}
      <rect x="6" y="8" width="20" height="44" rx="2" fill="var(--brand-tint)" stroke="var(--brand)" strokeWidth="1.4" />
      {/* Coluna parcial · valor erodido */}
      <rect x="32" y="22" width="20" height="30" rx="2" fill="white" stroke="var(--brand)" strokeWidth="1.4" />
      {/* Setinha de descida · perda */}
      <path d="M 60 18 L 70 18 L 70 42 M 66 38 L 70 42 L 74 38" fill="none" stroke="var(--brand)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      {/* Fissura na coluna parcial */}
      <line x1="35" y1="32" x2="38" y2="38" stroke="var(--brand)" strokeWidth="0.8" opacity="0.5" />
      <line x1="42" y1="38" x2="48" y2="42" stroke="var(--brand)" strokeWidth="0.8" opacity="0.5" />
    </svg>
  );
}

function VisualMemoriasDivergem() {
  return (
    <svg viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg" className="h-12 w-20" aria-hidden="true">
      {/* Ponto de origem comum */}
      <circle cx="14" cy="30" r="4" fill="var(--peach-dark)" />
      {/* Linha A · sobe */}
      <path d="M 18 30 Q 40 28 70 14" fill="none" stroke="var(--peach-dark)" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="70" cy="14" r="3.5" fill="var(--peach-dark)" />
      {/* Linha B · desce */}
      <path d="M 18 30 Q 40 32 70 46" fill="none" stroke="var(--peach-dark)" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="70" cy="46" r="3.5" fill="var(--peach-dark)" />
      {/* Espaço entre · indicação de divergência */}
      <line x1="70" y1="20" x2="70" y2="40" stroke="var(--peach-dark)" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5" />
    </svg>
  );
}

function VisualPilhaProcessos() {
  return (
    <svg viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg" className="h-12 w-20" aria-hidden="true">
      {/* Pilha de papéis · 5 camadas, mais baixa em cima */}
      {[8, 18, 28, 38, 48].map((y, i) => (
        <rect key={i} x={10 + i * 1.5} y={y} width={42 - i * 1.5} height="6" rx="1" fill="white" stroke="var(--soma)" strokeWidth="1.2" opacity={0.4 + i * 0.12} />
      ))}
      {/* Linha cronológica à direita · indicando tempo de espera */}
      <line x1="64" y1="10" x2="64" y2="52" stroke="var(--soma)" strokeWidth="1.4" strokeDasharray="3 2" opacity="0.6" />
      <text x="68" y="14" fontFamily="JetBrains Mono, monospace" fontSize="6" fontWeight="700" fill="var(--soma)" letterSpacing="0.5">
        2023
      </text>
      <text x="68" y="52" fontFamily="JetBrains Mono, monospace" fontSize="6" fontWeight="700" fill="var(--soma)" letterSpacing="0.5">
        2030
      </text>
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════════
   ILUSTRAÇÃO · Grid 100 (11% erodido)
   100 quadradinhos · 11 preenchidos em brand · 89 outline
   Analogia visual: para cada 100 reais em contratos, 11 se perdem
   ──────────────────────────────────────────────────────────────── */

function ErosaoGridSVG() {
  const cells = Array.from({ length: 100 }, (_, i) => {
    const row = Math.floor(i / 10);
    const col = i % 10;
    const isLost = i < 11;
    return (
      <rect
        key={i}
        x={col * 22 + 10}
        y={row * 22 + 10}
        width="16"
        height="16"
        rx="2.5"
        fill={isLost ? "var(--brand)" : "white"}
        stroke="var(--brand)"
        strokeWidth={isLost ? 0 : 1.2}
        strokeOpacity={isLost ? 0 : 0.22}
      />
    );
  });
  return (
    <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[240px]" aria-hidden="true">
      {cells}
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════════
   ILUSTRAÇÃO 05 · Pictogramas dos 4 hábitos
   ──────────────────────────────────────────────────────────────── */

function PictogramaDistribuido() {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" aria-hidden="true">
      {/* Documento central */}
      <rect x="22" y="22" width="20" height="24" rx="2" fill="white" stroke="var(--brand)" strokeWidth="1.5" />
      <line x1="26" y1="28" x2="38" y2="28" stroke="var(--brand)" strokeWidth="1" opacity="0.5" />
      <line x1="26" y1="32" x2="36" y2="32" stroke="var(--brand)" strokeWidth="1" opacity="0.5" />
      <line x1="26" y1="36" x2="38" y2="36" stroke="var(--brand)" strokeWidth="1" opacity="0.5" />
      {/* 4 pontos ao redor */}
      <circle cx="32" cy="10" r="3" fill="var(--brand)" />
      <circle cx="54" cy="32" r="3" fill="var(--brand)" />
      <circle cx="32" cy="54" r="3" fill="var(--brand)" />
      <circle cx="10" cy="32" r="3" fill="var(--brand)" />
      {/* Linhas conectoras tracejadas */}
      <line x1="32" y1="14" x2="32" y2="20" stroke="var(--brand)" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
      <line x1="44" y1="32" x2="50" y2="32" stroke="var(--brand)" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
      <line x1="32" y1="48" x2="32" y2="50" stroke="var(--brand)" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
      <line x1="14" y1="32" x2="20" y2="32" stroke="var(--brand)" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
    </svg>
  );
}

function PictogramaFluxo() {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" aria-hidden="true">
      {/* Linha do tempo horizontal */}
      <line x1="6" y1="32" x2="58" y2="32" stroke="var(--brand)" strokeWidth="1.5" strokeOpacity="0.3" />
      {/* 5 nós igualmente espaçados */}
      {[10, 22, 34, 46, 58].map((x, i) => (
        <circle key={i} cx={x} cy="32" r={i === 4 ? 4.5 : 3.5} fill="white" stroke="var(--brand)" strokeWidth="1.6" />
      ))}
      {/* Círculo interno em cada nó */}
      {[10, 22, 34, 46, 58].map((x, i) => (
        <circle key={i} cx={x} cy="32" r="1.5" fill="var(--brand)" opacity={0.4 + i * 0.15} />
      ))}
      {/* Setinha indicando continuação */}
      <path d="M 56 24 L 60 28" stroke="var(--brand)" strokeWidth="1" opacity="0.4" />
      <path d="M 56 40 L 60 36" stroke="var(--brand)" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

function PictogramaMesmaVersao() {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" aria-hidden="true">
      {/* 2 círculos sobrepostos formando interseção */}
      <circle cx="24" cy="32" r="16" fill="none" stroke="var(--brand)" strokeWidth="1.6" />
      <circle cx="40" cy="32" r="16" fill="none" stroke="var(--brand)" strokeWidth="1.6" />
      {/* Interseção destacada · brand-tint */}
      <path d="M 32 19 A 16 16 0 0 1 32 45 A 16 16 0 0 1 32 19 Z" fill="var(--brand-tint)" opacity="0.7" />
      {/* Re-overlay das bordas para ficar limpo */}
      <circle cx="24" cy="32" r="16" fill="none" stroke="var(--brand)" strokeWidth="1.6" />
      <circle cx="40" cy="32" r="16" fill="none" stroke="var(--brand)" strokeWidth="1.6" />
      {/* Ponto central · mesma versão */}
      <circle cx="32" cy="32" r="2.5" fill="var(--brand)" />
    </svg>
  );
}

function PictogramaSOMA() {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" aria-hidden="true">
      {/* Linha principal · contrato */}
      <line x1="6" y1="32" x2="34" y2="32" stroke="var(--brand)" strokeWidth="1.5" />
      <circle cx="6" cy="32" r="3" fill="var(--brand)" />
      {/* Bifurcação */}
      <path d="M 34 32 L 50 22" stroke="var(--brand)" strokeWidth="1.5" strokeOpacity="0.4" strokeLinecap="round" />
      <path d="M 34 32 L 50 42" stroke="var(--soma)" strokeWidth="1.5" strokeLinecap="round" />
      {/* Nó SOMA · destino do impasse */}
      <circle cx="50" cy="42" r="6" fill="white" stroke="var(--soma)" strokeWidth="1.8" />
      <text x="50" y="45" fontFamily="Barlow, sans-serif" fontSize="6" fontWeight="800" fill="var(--soma)" textAnchor="middle" letterSpacing="0.3">
        S
      </text>
      {/* Nó superior · continuidade pacífica */}
      <circle cx="50" cy="22" r="3" fill="var(--brand)" opacity="0.5" />
    </svg>
  );
}

function PictogramaHabito({ visual }: { visual: string }) {
  if (visual === "distribuido") return <PictogramaDistribuido />;
  if (visual === "fluxo") return <PictogramaFluxo />;
  if (visual === "mesma-versao") return <PictogramaMesmaVersao />;
  if (visual === "soma") return <PictogramaSOMA />;
  return null;
}

export default function ExplainersPage() {
  return (
    <>
      {/* HERO · Seção 1 */}
      <section className="relative overflow-hidden border-b border-stone-200 bg-white">
        <HeroLogoBg position="top-right" color="var(--brand)" opacity={0.07} width={560} />
        <HeroLogoBg position="bottom-left" color="var(--peach-dark)" opacity={0.05} width={320} />
        <div className="container-soma relative py-16 md:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-tint px-3.5 py-2">
                <Lightbulb className="size-4 text-brand" strokeWidth={1.6} />
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                  O que defendemos
                </span>
              </div>

              <h1 className="mb-8 font-title text-3xl font-bold tracking-tight text-gray-900 md:text-[40px] lg:text-[48px] leading-[1.1]">
                O contrato vivo se molda ao relacionamento.
                <br />
                <span className="text-stone-400">O contrato engavetado prende o relacionamento.</span>
              </h1>

              <p className="mb-4 text-xl leading-relaxed text-gray-800">
                Todo contrato comercial é uma promessa entre duas partes que combinaram fazer negócio juntas. Mas o negócio muda. O cliente pede mais escopo, o sócio sai, o mercado pressiona, uma cláusula precisa ser revisada por causa de lei nova.
              </p>

              <p className="mb-4 text-lg leading-relaxed text-gray-700">
                Quando o contrato acompanha essas mudanças, ele segue cumprindo a função que tinha no dia da assinatura: dar estrutura ao relacionamento comercial. Quando ele fica de fora delas, vira papel guardado, e a relação comercial passa a operar sem a referência que ela tinha.
              </p>

              <p className="text-lg leading-relaxed text-gray-700">
                Esta página é sobre essa diferença, e por que ela importa.
              </p>
            </div>

            <div className="hidden lg:block">
              <TimelineRamificadaSVG />
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 · Por que contratos engavetam */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mx-auto max-w-[820px]">
            <h2 className="mb-8 font-title text-2xl font-bold tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
              O contrato bem cuidado costuma terminar logo depois da assinatura.
            </h2>

            <p className="mb-6 text-xl leading-relaxed text-gray-800">
              A negociação foi cuidadosa. O time jurídico revisou cláusula por cláusula. As partes alinharam expectativas, ajustaram escopo, fecharam preço. No dia da assinatura, todo mundo sabia exatamente o que tinha sido combinado.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              E aí o contrato é arquivado.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Quem cuidou da negociação volta para o próximo negócio. Quem vai cuidar da operação do contrato no dia a dia herda um documento extenso, sem o contexto da discussão que produziu cada cláusula.
            </p>

            <div className="mb-8 rounded-xl border border-stone-200 bg-stone-50 px-5 py-4 md:px-6 md:py-5">
              <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">
                Termo do mercado
              </p>
              <p className="text-lg leading-relaxed text-gray-800">
                A <em>World Commerce &amp; Contracting</em> chama esse momento de <strong className="font-semibold text-brand">&ldquo;handover gap&rdquo;</strong>: o ponto em que o conhecimento construído na negociação não chega na operação que vai cuidar do contrato no dia a dia.
              </p>
            </div>

            <div className="my-12 rounded-2xl border border-stone-200 bg-white p-6 md:p-8">
              <HandoverGapSVG />
            </div>

            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              A consequência é mensurável. Estudo recente da WC&C com a Ironclad estima que empresas perdem em média <strong className="font-semibold text-gray-900">11% do valor do contrato</strong> no período pós-assinatura, por escopos não autorizados, ajustes de preço não aplicados, renovações automáticas em condições piores, e obrigações que ninguém acompanha.
            </p>

            {/* Visual stat · F · 11% grid + R$ 11 mi · ErosaoGridSVG */}
            <aside className="my-10 overflow-hidden rounded-2xl border border-brand/20 bg-white">
              <div className="border-b border-brand/15 bg-brand-tint px-7 py-4 md:px-9">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand">
                  O custo médio do pós-assinatura
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 px-7 py-8 md:grid-cols-[260px_1fr] md:items-center md:gap-10 md:px-9 md:py-10">
                {/* Visual · 10x10 grid */}
                <div className="flex flex-col items-center md:items-start">
                  <ErosaoGridSVG />
                  <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">
                    11 em cada 100 reais
                  </p>
                </div>

                {/* Stats stack */}
                <div className="space-y-6">
                  <div>
                    <p className="font-title text-5xl font-extrabold tracking-tight text-brand md:text-6xl">
                      11%
                    </p>
                    <p className="mt-2 max-w-[300px] text-[14px] leading-snug text-gray-700">
                      do valor do contrato erodido após a assinatura
                    </p>
                  </div>

                  <div className="border-t border-stone-200 pt-6">
                    <p className="font-title text-5xl font-extrabold tracking-tight text-brand md:text-6xl">
                      R$ 11 mi
                    </p>
                    <p className="mt-2 max-w-[320px] text-[14px] leading-snug text-gray-700">
                      por ano, em uma empresa com R$ 100 mi em contratos ativos
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-stone-200 bg-stone-50 px-7 py-3 md:px-9">
                <p className="font-mono text-[10px] uppercase tracking-widest text-stone-500">
                  Fonte: WC&amp;C × Ironclad
                </p>
              </div>
            </aside>

            <p className="text-lg leading-relaxed text-gray-700">
              Não é problema de negociação. É problema de cuidado contínuo.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 · O custo invisível */}
      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mx-auto max-w-[820px] mb-12">
            <h2 className="mb-8 font-title text-2xl font-bold tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
              Quando o contrato sai de cena, três coisas acontecem ao mesmo tempo.
            </h2>

            <ul className="mb-2 space-y-5">
              <li className="flex gap-4">
                <span className="mt-2.5 size-2 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong className="font-semibold text-gray-900">A primeira é financeira.</strong> Aditivos verbais que ninguém formaliza, descontos que viram costume, prazos que escorregam sem cobrança. O número da WC&C de 11% é a parte que aparece na planilha.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="mt-2.5 size-2 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong className="font-semibold text-gray-900">A segunda é relacional.</strong> Quando o contrato deixa de ser referência comum, cada parte começa a operar pela própria memória do que foi combinado. As memórias divergem, e o cliente que parecia satisfeito começa a se incomodar com pequenos ajustes. Na próxima renovação, ele decide não renovar, e nem sempre explica por quê.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="mt-2.5 size-2 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong className="font-semibold text-gray-900">A terceira é jurídica.</strong> Em 2023, <strong className="font-semibold text-gray-900">35,2 milhões</strong> de novos processos foram iniciados no Judiciário brasileiro, e <strong className="font-semibold text-gray-900">83,3 milhões</strong> estão em curso, recorde global. Disputas comerciais típicas levam de 4 a 7 anos para serem resolvidas em primeira instância, e o documento que devia funcionar como referência vira evidência em um processo público.
                </p>
              </li>
            </ul>
          </div>

          <div className="mx-auto max-w-[1100px] mb-10">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {[
                { eyebrow: "Camada Financeira", numero: "11%", contexto: "do valor do contrato erodido pós-assinatura", fonte: "WC&C × Ironclad", color: "var(--brand)", visual: "erosao" },
                { eyebrow: "Camada Relacional", numero: "memórias divergem", contexto: "cliente sai sem dizer porquê", fonte: "Observação de mercado", color: "var(--peach-dark)", visual: "divergencia" },
                { eyebrow: "Camada Jurídica", numero: "35,2 mi", contexto: "novos processos no Brasil em 2023", fonte: "CNJ Justiça em Números 2024", color: "var(--soma)", visual: "pilha" }
              ].map((c) => (
                <div key={c.eyebrow} className="rounded-2xl border-2 bg-white p-7" style={{ borderColor: `${c.color}33` }}>
                  <div className="mb-4">
                    {c.visual === "erosao" && <VisualErosaoFinanceira />}
                    {c.visual === "divergencia" && <VisualMemoriasDivergem />}
                    {c.visual === "pilha" && <VisualPilhaProcessos />}
                  </div>
                  <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-widest" style={{ color: c.color }}>
                    {c.eyebrow}
                  </p>
                  <p className="mb-2 font-title text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: c.color }}>
                    {c.numero}
                  </p>
                  <p className="mb-3 text-[14px] leading-relaxed text-gray-700">{c.contexto}</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-stone-500">{c.fonte}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto max-w-[820px]">
            <div className="rounded-2xl border-l-[3px] border-brand bg-brand-tint/40 px-7 py-7 md:px-9 md:py-8">
              <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-widest text-brand">
                Por isso
              </p>
              <p className="font-title text-[22px] font-bold leading-snug text-gray-900 md:text-[26px]">
                Em cada uma das três camadas, o que se perde vai além do dinheiro. <span className="text-brand">Perde-se a relação comercial que produziu o contrato em primeiro lugar.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 · O que muda quando o contrato vive */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mb-10 max-w-[820px]">
            <h2 className="mb-4 font-title text-2xl font-bold tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
              Seis momentos típicos do relacionamento comercial.
            </h2>
            <p className="text-xl leading-relaxed text-gray-800">
              O contrato vivo não é abstração. Aparece nos pequenos movimentos da relação que, na maioria das empresas, ficam fora do contrato.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
            <div className="hidden grid-cols-[60px_1fr_1.2fr_1.2fr] border-b border-stone-200 bg-stone-100 md:grid">
              <div className="p-4 font-mono text-[11px] font-bold uppercase tracking-widest text-stone-600">#</div>
              <div className="p-4 font-mono text-[11px] font-bold uppercase tracking-widest text-stone-600">O que muda no negócio</div>
              <div className="p-4 font-mono text-[11px] font-bold uppercase tracking-widest text-stone-600 border-l border-stone-200">Como o contrato responde</div>
              <div className="p-4 font-mono text-[11px] font-bold uppercase tracking-widest text-stone-600 border-l border-stone-200">O que isso permite na relação</div>
            </div>

            {MOMENTOS.map((m) => (
              <div key={m.num} className="grid grid-cols-1 border-b border-stone-200 last:border-0 md:grid-cols-[60px_1fr_1.2fr_1.2fr]">
                <div className="hidden items-center justify-center bg-stone-50 p-4 md:flex">
                  <span className="font-mono text-xs font-bold tracking-widest text-brand">{m.num}</span>
                </div>
                <div className="p-5">
                  <p className="mb-1 font-mono text-[11px] font-bold uppercase tracking-widest text-brand md:hidden">
                    {m.num} · O que muda
                  </p>
                  <p className="font-title text-[15px] font-semibold text-gray-900">{m.muda}</p>
                </div>
                <div className="border-t border-stone-200 bg-stone-50 p-5 md:border-l md:border-t-0 md:bg-white">
                  <p className="mb-1 font-mono text-[11px] font-bold uppercase tracking-widest text-brand md:hidden">
                    Como responde
                  </p>
                  <p className="text-[14.5px] leading-relaxed text-gray-700">{m.responde}</p>
                </div>
                <div className="border-t border-stone-200 bg-stone-50 p-5 md:border-l md:border-t-0">
                  <p className="mb-1 font-mono text-[11px] font-bold uppercase tracking-widest text-brand md:hidden">
                    O que permite
                  </p>
                  <p className="text-[14.5px] leading-relaxed text-gray-700">{m.permite}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 · Engavetado vs Vivo */}
      <section className="bg-white">
        <div className="container-soma section-soma">
          <div className="mx-auto max-w-[920px]">
            <div className="mb-10 max-w-[820px]">
              <h2 className="mb-4 font-title text-2xl font-bold tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
                Os dois caminhos depois da assinatura.
              </h2>
              <p className="text-xl leading-relaxed text-gray-800">
                A diferença entre o contrato engavetado e o contrato vivo não está no documento em si. Está no que acontece quando o cenário muda.
              </p>
            </div>

            {/* Engavetado */}
            <div className="mb-12 rounded-2xl border border-stone-200 bg-stone-50 p-7 md:p-10">
              <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-widest text-stone-500">
                Engavetado
              </p>
              <p className="mb-4 text-[16px] leading-relaxed text-gray-800">
                Depois da assinatura, o contrato é arquivado. Cada parte volta para o seu lado e começa a tocar o negócio pela memória do que foi combinado. As memórias divergem, e na maior parte do tempo isso não vira problema, porque a operação está fluindo.
              </p>
              <p className="mb-4 text-[16px] leading-relaxed text-gray-800">
                Mas quando aparece um ponto de tensão, um atraso, um ajuste de escopo, uma divergência de preço, cada lado abre seu PDF e procura a cláusula que sustenta sua versão.
              </p>

              <div className="my-6 border-l-[3px] border-stone-400 pl-5 md:pl-6">
                <p className="font-title text-xl font-semibold leading-snug text-gray-900 md:text-2xl">
                  O contrato deixa de ser referência comum, vira ponto de tensão.
                </p>
              </div>

              <p className="mb-4 text-[16px] leading-relaxed text-gray-800">
                As conversas que antes resolviam um ajuste em quinze minutos viram trocas formais entre advogados. A confiança não desaparece de uma vez, vai sendo gasta em atritos formais.
              </p>
              <p className="text-[16px] leading-relaxed text-gray-800">
                Se chega ao impasse, sem mediação ágil disponível, sobra litígio ou prejuízo aceito em silêncio. Em ambos os casos, a relação comercial saudável que existia antes da assinatura deixa de existir.
              </p>
            </div>

            {/* Visual divisor · split engavetado vs vivo */}
            <div className="my-10 rounded-2xl border border-stone-200 bg-white p-6 md:p-8">
              <SplitEngavetadoVivoSVG />
            </div>

            {/* Vivo */}
            <div className="rounded-2xl border-2 border-brand bg-white p-7 md:p-10">
              <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                Vivo
              </p>
              <p className="mb-4 text-[16px] leading-relaxed text-gray-800">
                Depois da assinatura, o contrato continua sendo a referência comum entre as partes. Cada movimento da relação fica registrado: o aditivo do escopo, a renegociação do preço, o combinado verbal que virou oficial. Quando alguém precisa voltar para verificar o que foi acordado, a versão única está disponível para os dois lados, ao mesmo tempo.
              </p>
              <p className="mb-4 text-[16px] leading-relaxed text-gray-800">
                Isso muda a qualidade da conversa. Como o histórico está disponível para todo mundo, ajustes e exceções ficam negociáveis sem desconfiança. Como a evolução do contrato está visível, ajustes novos se apoiam nos anteriores em vez de começar do zero. Como o registro é único, não há "minha versão" e "versão deles".
              </p>
              <p className="text-[16px] leading-relaxed text-gray-800">
                A relação amadurece a cada movimento. E quando trava, a câmara <span className="text-soma font-semibold">SOMA</span> está acoplada, com mediação primeiro, dentro do mesmo ambiente onde o contrato sempre viveu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 · O que muda na empresa */}
      <section className="bg-stone-50">
        <div className="container-soma section-soma">
          <div className="mx-auto max-w-[860px]">
            <div className="mb-12 max-w-[820px]">
              <h2 className="mb-4 font-title text-2xl font-bold tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
                Quatro hábitos que entram em cena.
              </h2>
              <p className="text-xl leading-relaxed text-gray-800">
                Tratar o contrato como ferramenta viva não é decisão técnica. É mudança de hábito. Quatro coisas começam a acontecer na rotina da empresa.
              </p>
            </div>

            <div className="space-y-6">
              {HABITOS.map((h) => (
                <div key={h.num} className="rounded-2xl border border-stone-200 bg-white p-7 md:p-8">
                  <div className="flex items-start gap-5">
                    <div className="flex flex-col items-center gap-3">
                      <PictogramaHabito visual={h.visual} />
                      <span className="font-mono text-xs font-bold tracking-widest text-brand">
                        {h.num}
                      </span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="mb-3 font-title text-xl font-bold leading-snug text-gray-900 md:text-2xl">
                        {h.titulo}
                      </h3>
                      <p className="text-[15px] leading-relaxed text-gray-700 md:text-base">
                        {h.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 7 · Fecho */}
      <section className="bg-brand text-white">
        <div className="container-soma py-16 md:py-24">
          <div className="mx-auto max-w-[760px] text-center">
            <h2 className="mb-8 font-title text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Contratos a serviço da relação comercial, não o contrário.
            </h2>

            <p className="mb-4 text-lg leading-relaxed text-white/90">
              A <span className="font-semibold">+legal_</span> é o ambiente onde o contrato continua vivo depois da assinatura. Cada movimento registrado, cada aditivo aprovado, cada prazo monitorado, todos com a mesma versão na mão para os dois lados.
            </p>

            <p className="mb-10 text-lg leading-relaxed text-white/90">
              Quando o contrato pede ajuste, a +legal_ ajusta. Quando alguém precisa voltar, a referência está lá. Quando trava, a câmara SOMA está acoplada.
            </p>

            <p className="mb-8 font-mono text-[11px] font-bold uppercase tracking-widest text-white/70">
              Quer ver isso funcionando em um portfólio real?
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/early-access" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white bg-white px-7 py-3.5 text-[15px] font-semibold text-brand transition-colors hover:bg-stone-100">
                Entrar para o Early Access <ArrowRight className="size-4" />
              </Link>
              <Link href="/agendar" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 bg-transparent px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:border-white hover:bg-white/10">
                Agendar conversa
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ════════════════════════════════════════════════════════════════
   ILUSTRAÇÃO 04 · Split Engavetado vs Vivo (substitui o antigo AntesDepois)
   ──────────────────────────────────────────────────────────────── */

function SplitEngavetadoVivoSVG() {
  return (
    <svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-hidden="true">
      {/* LADO ESQUERDO · ENGAVETADO */}
      <g>
        <text x="40" y="36" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="700" fill="#999" letterSpacing="2">
          ENGAVETADO
        </text>

        {/* Documento estático cinza */}
        <rect x="40" y="56" width="100" height="120" rx="4" fill="#f5f5f4" stroke="#a8a29e" strokeWidth="1.4" />
        {[72, 84, 96, 108, 120, 132, 144, 156].map((y) => (
          <line key={y} x1="50" y1={y} x2="130" y2={y} stroke="#a8a29e" strokeOpacity="0.4" strokeWidth="0.8" />
        ))}

        {/* Duas timelines paralelas que divergem · cada parte com sua interpretação */}
        <g transform="translate(0 200)">
          {/* Timeline A · interpretação parte A */}
          <line x1="40" y1="0" x2="180" y2="-20" stroke="#a8a29e" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
          <circle cx="40" cy="0" r="3" fill="#a8a29e" />
          <circle cx="180" cy="-20" r="4" fill="#a8a29e" />
          <text x="180" y="-26" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="#999" textAnchor="middle">
            VERSÃO A
          </text>

          {/* Timeline B · interpretação parte B */}
          <line x1="40" y1="20" x2="180" y2="40" stroke="#a8a29e" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
          <circle cx="40" cy="20" r="3" fill="#a8a29e" />
          <circle cx="180" cy="40" r="4" fill="#a8a29e" />
          <text x="180" y="56" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="#999" textAnchor="middle">
            VERSÃO B
          </text>

          {/* Colisão final · X */}
          <g transform="translate(220 10)">
            <circle r="14" fill="white" stroke="#dc2626" strokeWidth="1.6" />
            <line x1="-6" y1="-6" x2="6" y2="6" stroke="#dc2626" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="6" y1="-6" x2="-6" y2="6" stroke="#dc2626" strokeWidth="1.6" strokeLinecap="round" />
            <text x="0" y="36" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="#dc2626" textAnchor="middle" letterSpacing="0.5">
              IMPASSE
            </text>
          </g>
        </g>

        <text x="140" y="290" fontFamily="Inter, sans-serif" fontSize="11" fill="#78716c" textAnchor="middle">
          Estático · trancado · esquecido
        </text>
      </g>

      {/* DIVISOR central */}
      <line x1="400" y1="20" x2="400" y2="300" stroke="#e7e5e4" strokeWidth="1" strokeDasharray="2 4" />

      {/* LADO DIREITO · VIVO */}
      <g>
        <text x="460" y="36" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="700" fill="var(--brand)" letterSpacing="2">
          VIVO
        </text>

        {/* Documento ativo · brand */}
        <rect x="460" y="56" width="100" height="120" rx="4" fill="white" stroke="var(--brand)" strokeWidth="1.6" />
        {[72, 84, 96].map((y) => (
          <line key={y} x1="470" y1={y} x2="550" y2={y} stroke="var(--brand)" strokeOpacity="0.55" strokeWidth="0.8" />
        ))}
        {/* Highlight de "atualizado agora" */}
        <rect x="470" y="105" width="60" height="6" rx="1" fill="var(--peach-dark)" opacity="0.3" />
        {[120, 132, 144, 156].map((y) => (
          <line key={y} x1="470" y1={y} x2="550" y2={y} stroke="var(--brand)" strokeOpacity="0.4" strokeWidth="0.8" />
        ))}

        {/* Timeline única ramificando organicamente · ambas as partes acompanham juntas */}
        <g transform="translate(0 200)">
          {/* Eixo principal */}
          <line x1="460" y1="20" x2="600" y2="20" stroke="var(--brand)" strokeWidth="1.5" />
          <circle cx="460" cy="20" r="3" fill="var(--brand)" />

          {/* Ramo cima · peach (aditivo) */}
          <path d="M 510 20 Q 530 10 560 -8" fill="none" stroke="var(--peach-dark)" strokeWidth="1.4" />
          <circle cx="560" cy="-8" r="4" fill="var(--peach-dark)" />

          {/* Ramo baixo · brand (renovação) */}
          <path d="M 540 20 Q 560 32 590 48" fill="none" stroke="var(--brand)" strokeWidth="1.4" />
          <circle cx="590" cy="48" r="4" fill="var(--brand)" />

          {/* Nó destino · renovação ou continuidade · brand vivo */}
          <g transform="translate(700 20)">
            <circle r="14" fill="white" stroke="var(--brand)" strokeWidth="1.8" />
            <circle r="6" fill="var(--brand)">
              <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
            </circle>
            <text x="0" y="36" fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700" fill="var(--brand)" textAnchor="middle" letterSpacing="0.5">
              RENOVAÇÃO
            </text>
          </g>

          {/* Linha final ligando ramos ao nó destino */}
          <line x1="600" y1="20" x2="685" y2="20" stroke="var(--brand)" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="2 3" />
        </g>

        <text x="600" y="290" fontFamily="Inter, sans-serif" fontSize="11" fill="var(--brand)" textAnchor="middle">
          Ajusta · registra · acompanha
        </text>
      </g>
    </svg>
  );
}
