"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./Button";

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

const NAV: NavItem[] = [
  { label: "Como funciona", href: "/como-funciona" },
  {
    label: "Para você",
    children: [
      { label: "Liderança", href: "/para-operacoes" },
      { label: "Sócios e fundadores", href: "/para-pmes" },
      { label: "Escritórios", href: "/para-advogados" }
    ]
  },
  { label: "Câmara SOMA", href: "/resolucao-de-disputas" },
  { label: "Preços", href: "/precos" },
  {
    label: "Recursos",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "Calculadora de ROI", href: "/calculadora" },
      { label: "Perguntas frequentes", href: "/faq" }
    ]
  },
  { label: "Sobre nós", href: "/sobre" }
];

export function Header() {
  const [openMobile, setOpenMobile] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="container-soma flex h-16 items-center justify-between">
        <Logo height={26} />

        <nav className="ml-auto hidden items-center gap-6 lg:flex">
          {NAV.map(item => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() =>
                item.children && setOpenDropdown(item.label)
              }
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-brand"
                >
                  {item.label}
                </Link>
              ) : (
                <button className="flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors hover:text-brand">
                  {item.label}
                  <ChevronDown className="size-3.5" />
                </button>
              )}

              {item.children && openDropdown === item.label && (
                <div className="absolute left-0 top-full min-w-[220px] pt-3">
                  <div className="rounded-xl border border-stone-200 bg-white p-2 shadow-lg">
                    {item.children.map(child => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-brand-tint hover:text-brand"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <Button href="/early-access" variant="primary" size="md">
            Entrar para o Early Access
          </Button>
        </nav>

        <button
          className="ml-auto p-2 lg:hidden"
          onClick={() => setOpenMobile(!openMobile)}
          aria-label="Abrir menu"
        >
          {openMobile ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {openMobile && (
        <div className="border-t border-stone-200 bg-white lg:hidden">
          <div className="container-soma flex flex-col gap-1 py-4">
            {NAV.map(item =>
              item.href ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="py-2 text-base font-medium text-gray-900"
                  onClick={() => setOpenMobile(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <div key={item.label} className="py-2">
                  <p className="mb-1 font-mono text-xs uppercase tracking-widest text-stone-500">
                    {item.label}
                  </p>
                  {item.children?.map(c => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block py-1.5 pl-3 text-sm text-gray-700"
                      onClick={() => setOpenMobile(false)}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )
            )}
            <Button
              href="/early-access"
              variant="primary"
              size="md"
              className="mt-3"
            >
              Entrar para o Early Access
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
