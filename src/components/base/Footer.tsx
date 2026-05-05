import Link from "next/link";
import { Logo } from "./Logo";

const COLUMNS = [
  {
    title: "Produto",
    items: [
      { label: "Como Funciona", href: "/como-funciona" },
      { label: "Funcionalidades", href: "/funcionalidades" },
      { label: "Integrações", href: "/integracoes" },
      { label: "Preços", href: "/precos" }
    ]
  },
  {
    title: "Para Quem",
    items: [
      { label: "Liderança", href: "/para-operacoes" },
      { label: "Sócios e fundadores", href: "/para-pmes" },
      { label: "Escritórios", href: "/para-advogados" }
    ]
  },
  {
    title: "Resolução",
    items: [
      { label: "Resolução de Disputas", href: "/resolucao-de-disputas" },
      { label: "Câmara SOMA", href: "/resolucao-de-disputas" },
      { label: "Como +legal_ e SOMA se relacionam", href: "/sobre/legal-soma" },
      {
        label: "Conhecer a câmara",
        href: "https://somalegal.tech",
        external: true
      }
    ]
  },
  {
    title: "Recursos",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "Calculadora de ROI", href: "/calculadora" },
      { label: "Perguntas frequentes", href: "/faq" },
      { label: "Segurança", href: "/seguranca" }
    ]
  },
  {
    title: "Empresa",
    items: [
      { label: "Sobre nós", href: "/sobre" },
      { label: "+legal_ × SOMA", href: "/sobre/legal-soma" },
      { label: "Blog", href: "/blog" },
      { label: "Contato", href: "mailto:contato@maislegal.tech" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/maislegal",
        external: true
      }
    ]
  }
];

export function Footer() {
  return (
    <footer className="bg-zinc-900 px-4 py-10 text-sm text-white md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Logo variant="white" height={28} />
            <p className="mt-4 max-w-[240px] text-[13px] leading-relaxed text-zinc-400">
              Fechar um bom contrato é legal. Ver o combinado funcionar é
              +legal_.
            </p>
          </div>

          {COLUMNS.map(col => (
            <div key={col.title}>
              <h4 className="mb-4 font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.items.map(item => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      target={
                        "external" in item && item.external ? "_blank" : undefined
                      }
                      rel={
                        "external" in item && item.external
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-zinc-300 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-zinc-700 pt-6 md:flex-row md:items-center">
          <p className="text-[12px] text-zinc-500">
            +legal_ © {new Date().getFullYear()} · Ambiente de gestão de
            contratos com câmara de resolução acoplada
          </p>
          <div className="flex gap-5 text-[12px] text-zinc-500">
            <Link href="/privacidade" className="hover:text-white">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="hover:text-white">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
