import { ShieldAlert } from "lucide-react";

const RISCOS = [
  {
    eixo: "Relacionamentos",
    personaTag: "Para você que cuida do contrato sem advogado interno.",
    title: "O cliente não disse nada. Só não voltou.",
    body1:
      "Cliente grande percebe quando o histórico do relacionamento não está em lugar nenhum. Não reclama, e também não renova. E não indica.",
    body2:
      "A rede dele já soube como foi a transição.",
    custoLabel: "Custo total",
    custoValue: "LTV + INDICAÇÕES + REDE",
    custoSub: "ticket × anos × indicações",
    tese: "A +legal_ guarda o que aconteceu no relacionamento.",
    teseStrong: "Quem chega depois herda contexto, não dúvida.",
    visual: "relacionamento",
    accent: "var(--slate)"
  },
  {
    eixo: "Dados expostos",
    personaTag: "Para você que responde por dados sensíveis.",
    title: "A cláusula de confidencialidade ninguém leu.",
    body1:
      "Você assina o NDA com o contrato e ele some. A lista do que é sensível fica no documento, não na rotina do time.",
    body2:
      "Quando algum dado escorrega, a multa LGPD chega antes da explicação.",
    custoLabel: "Multa LGPD",
    custoValue: "ATÉ 2% DO FATURAMENTO",
    custoSub: "limite de R$ 50 mi por infração",
    tese: "A +legal_ deixa o NDA visível para o time.",
    teseStrong: "Sensível deixa de ser surpresa.",
    visual: "dados",
    accent: "var(--brand)"
  },
  {
    eixo: "Reputação queimada",
    personaTag: "Para você que conduz disputas contratuais.",
    title: "Sua disputa virou consulta pública.",
    body1:
      "Quando a disputa contratual entra na fila judicial, o processo é público. Qualquer concorrente, prospect ou jornalista que pesquisar o nome da empresa encontra na primeira página.",
    body2:
      "Você gastou anos construindo confiança. Um processo público corrói em meses.",
    custoLabel: "Custo nominal",
    custoValue: "CONTRATOS PERDIDOS",
    custoSub: "na diligência do próximo cliente",
    tese: "A +legal_ tem câmara SOMA acoplada.",
    teseStrong: "Resolução privada por padrão.",
    visual: "reputacao",
    accent: "var(--soma)"
  }
] as const;

export function RiscosSilenciosos() {
  return (
    <section className="relative bg-stone-50">
      <div className="container-soma section-soma">
        <div className="mb-12 max-w-[860px]">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1.5"
            style={{
              background: "var(--brand-tint)",
              borderColor: "rgba(30,58,95,0.25)"
            }}
          >
            <ShieldAlert className="size-4" style={{ color: "var(--brand)" }} strokeWidth={1.6} />
            <span
              className="font-mono text-[11px] font-bold uppercase tracking-widest"
              style={{ color: "var(--brand)" }}
            >
              O que está em risco
            </span>
          </div>

          <h2 className="h-soma mb-5">
            Contratos ruins expõem relacionamentos, dados e reputação.
          </h2>

          <p className="mb-3 text-lg leading-relaxed text-gray-700">
            Alguns clientes vão embora calados. Outros processam sem aviso. E uma informação que devia ser confidencial vira consulta pública.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Cuidar do contrato é proteger o time para fazer o que importa: criar produto, atender cliente, fechar próximo deal. O contrato cuidado é a estrutura que sustenta tudo isso, em segundo plano.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {RISCOS.map((r, i) => (
            <div
              key={r.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border-2 bg-white"
              style={{ borderColor: `${r.accent}26` }}
            >
              {/* Eixo · header colorido · case normal + voz direta */}
              <div
                className="border-b border-stone-200 px-7 py-5"
                style={{ background: `${r.accent}14` }}
              >
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span
                    className="font-mono text-[13px] font-bold"
                    style={{ color: r.accent }}
                  >
                    Risco 0{i + 1} · {r.eixo}
                  </span>
                  <span
                    className="size-2 shrink-0 rounded-full"
                    style={{ background: r.accent }}
                  />
                </div>
                <p
                  className="text-[13px] leading-snug"
                  style={{ color: r.accent, opacity: 0.85 }}
                >
                  {r.personaTag}
                </p>
              </div>

              {/* Conteúdo */}
              <div className="flex flex-1 flex-col px-7 py-6">
                <h3 className="mb-4 font-title text-xl font-bold leading-snug text-gray-900">
                  {r.title}
                </h3>

                <p className="mb-3 text-[14.5px] leading-relaxed text-gray-700">
                  {r.body1}
                </p>
                <p className="mb-6 text-[14.5px] leading-relaxed text-gray-700">
                  {r.body2}
                </p>

                {/* Custo · selo destacado · min-height para altura uniforme */}
                <div className="mt-auto min-h-[112px] rounded-xl border border-stone-200 bg-stone-50 p-4">
                  <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">
                    {r.custoLabel}
                  </p>
                  <p
                    className="mb-1 font-title text-base font-extrabold tracking-tight"
                    style={{ color: r.accent }}
                  >
                    {r.custoValue}
                  </p>
                  <p className="text-xs leading-relaxed text-stone-500">
                    {r.custoSub}
                  </p>
                </div>
              </div>

              {/* O que +legal_ faz · footer paralelo */}
              <div
                className="border-t-2 px-7 py-4"
                style={{
                  borderColor: r.accent,
                  background: `${r.accent}08`
                }}
              >
                <p className="text-[13px] leading-relaxed text-gray-700">
                  {r.tese}{" "}
                  <span
                    className="font-bold"
                    style={{ color: r.accent }}
                  >
                    {r.teseStrong}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
