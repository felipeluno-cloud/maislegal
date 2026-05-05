export function Explainer4() {
  // 6 pares · o que muda no negócio → como o contrato se adapta
  const PARES = [
    {
      negocio: "Cliente pede mais entregas no mês",
      contrato: "Aditivo registrado, escopo atualizado, sem renegociar tudo do zero",
      color: "var(--brand)"
    },
    {
      negocio: "Sócio sai da empresa",
      contrato: "Assinaturas e permissões transferidas, histórico inteiro preservado para o substituto",
      color: "var(--brand)"
    },
    {
      negocio: "Mercado pressiona o preço",
      contrato: "Renegociação documentada, contraproposta com timestamp, decisão registrada para os dois lados",
      color: "var(--peach-dark)"
    },
    {
      negocio: "Time muda quem cuida do contrato",
      contrato: "Contexto fica no ambiente, não na cabeça do anterior, e a passagem de bastão é direta",
      color: "var(--peach-dark)"
    },
    {
      negocio: "Lei nova pede ajuste em uma cláusula",
      contrato: "Revisão proposta, aprovada pelas partes, vigência clara desde o momento da mudança",
      color: "var(--peach-dark)"
    },
    {
      negocio: "Combinado verbal precisa virar oficial",
      contrato: "Aditivo formal em poucos minutos, com aprovação documentada, sem precisar refazer o contrato inteiro",
      color: "var(--soma)"
    }
  ];

  return (
    <div className="rounded-2xl border-2 border-stone-200 bg-white p-8 md:p-12">
      {/* Header */}
      <div className="mb-8 max-w-[860px]">
        <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
          Explainer 04 · Ferramentas vivas
        </p>
        <h2 className="mb-4 font-title text-3xl font-bold tracking-tighter text-gray-900 md:text-4xl">
          O contrato vivo se molda ao relacionamento, não o contrário.
        </h2>
        <p className="text-base leading-relaxed text-gray-600 md:text-lg">
          Contratos são ferramentas vivas que se adaptam, se alteram, e se
          moldam em torno dos relacionamentos comerciais. Não existem para
          ficar parados em um arquivo, existem para acompanhar o que muda no
          negócio e garantir que o relacionamento continue prosperando.
        </p>
      </div>

      {/* Visual · Mapa "muda no negócio → muda no contrato" */}
      <div className="mb-8 overflow-hidden rounded-xl border border-stone-200 bg-stone-50 p-6 md:p-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand">
            Como o contrato se adapta na <span className="normal-case">+legal_</span>
          </p>
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">
            6 momentos típicos
          </p>
        </div>

        {/* Header de colunas */}
        <div className="mb-3 hidden grid-cols-[1fr_30px_1.4fr] gap-4 px-2 md:grid">
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">
            O que muda no negócio
          </p>
          <span />
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand">
            Como o contrato se adapta
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {PARES.map((p, i) => (
            <div
              key={i}
              className="grid grid-cols-1 items-center gap-3 rounded-lg border border-stone-200 bg-white p-4 md:grid-cols-[1fr_30px_1.4fr] md:gap-4 md:p-5"
              style={{ borderLeftWidth: "3px", borderLeftColor: p.color }}
            >
              {/* Coluna esquerda · negócio */}
              <div className="flex items-center gap-3">
                <span
                  className="flex size-7 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-bold text-white"
                  style={{ background: p.color }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-title text-[15px] font-bold text-gray-900 md:text-base">
                  {p.negocio}
                </p>
              </div>

              {/* Seta */}
              <div className="hidden items-center justify-center md:flex">
                <svg
                  viewBox="0 0 24 24"
                  className="size-6"
                  fill="none"
                  stroke={p.color}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ opacity: 0.7 }}
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>

              {/* Coluna direita · contrato */}
              <p className="text-[14px] leading-relaxed text-gray-700 md:text-[15px]">
                {p.contrato}
              </p>
            </div>
          ))}
        </div>

        {/* Footer · pulso indicando "vivo" */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-50" />
            <span className="relative inline-flex size-3 rounded-full bg-brand" />
          </span>
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand">
            Contrato vivo · ajustando-se em tempo real
          </p>
        </div>
      </div>

      {/* Por que essa analogia funciona */}
      <div className="mb-6 rounded-xl border border-stone-200 bg-stone-50 p-6 md:p-7">
        <p className="mb-5 font-mono text-[10px] font-bold uppercase tracking-widest text-brand">
          Por que pensar no contrato como ferramenta viva
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            {
              ideia: "O relacionamento é o que importa",
              nota: "O contrato existe para dar estrutura à relação comercial. Quando o negócio muda, o contrato precisa acompanhar, ou vira atrito."
            },
            {
              ideia: "Ferramentas se adaptam, papéis não",
              nota: "Um documento estático trava a relação. Uma ferramenta viva se ajusta, registra a mudança, e mantém todo mundo na mesma página."
            },
            {
              ideia: "Mudança é regra, não exceção",
              nota: "Em qualquer relacionamento comercial saudável, prazos, escopos e valores mudam várias vezes. O contrato precisa ser desenhado para isso."
            },
            {
              ideia: "Prosperar é continuar combinando",
              nota: "Negócios que duram são feitos de combinados que duram. Cada combinado novo merece estar registrado com o mesmo cuidado do primeiro."
            }
          ].map(item => (
            <div key={item.ideia} className="rounded-lg bg-white p-5">
              <p className="mb-2 font-title text-base font-bold text-brand">
                {item.ideia}
              </p>
              <p className="text-[13px] leading-relaxed text-gray-700">
                {item.nota}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* O que muda quando se entende assim */}
      <div className="mb-6 rounded-xl border border-stone-200 bg-stone-50 p-6 md:p-7">
        <p className="mb-5 font-mono text-[10px] font-bold uppercase tracking-widest text-brand">
          O que muda quando se trata o contrato como ferramenta viva
        </p>
        <ul className="space-y-3">
          {[
            "Você para de tratar contrato como peça que termina na assinatura.",
            "Você passa a esperar que ele se ajuste quando o negócio se ajusta.",
            "Aditivos viram fluxo natural, não exceção burocrática.",
            "O relacionamento comercial fica protegido pela própria estrutura do contrato."
          ].map((s, i) => (
            <li key={s} className="flex items-start gap-3">
              <span className="font-mono text-[10px] font-bold text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm leading-relaxed text-gray-700">
                {s}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Key insight */}
      <div className="rounded-xl border border-brand-light bg-brand-tint p-6 md:p-7">
        <div className="flex items-start gap-4">
          <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand font-mono text-sm font-bold text-white">
            ✓
          </div>
          <div>
            <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-widest text-brand">
              A ideia em uma frase
            </p>
            <p className="font-title text-xl font-bold leading-snug text-gray-900 md:text-2xl">
              O contrato vivo se molda ao relacionamento. O contrato engavetado
              prende o relacionamento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
