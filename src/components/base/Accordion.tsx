"use client";

import { useState, ReactNode } from "react";
import { Plus, Minus } from "lucide-react";

export interface AccordionItem {
  id: string;
  question: string;
  // Conteúdo expandido pode ser texto, JSX ou um array de elementos
  answer: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  // Se true, permite múltiplos abertos ao mesmo tempo
  allowMultiple?: boolean;
  // ID do item aberto inicialmente (se nenhum, todos começam fechados)
  initiallyOpen?: string;
}

export function Accordion({ items, allowMultiple = false, initiallyOpen }: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(
    initiallyOpen ? new Set([initiallyOpen]) : new Set()
  );

  const toggle = (id: string) => {
    setOpenIds(prev => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="flex flex-col gap-3">
      {items.map(item => {
        const isOpen = openIds.has(item.id);
        return (
          <div
            key={item.id}
            className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
              isOpen ? "border-brand shadow-md" : "border-stone-200"
            }`}
          >
            <button
              onClick={() => toggle(item.id)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-stone-50 md:px-8 md:py-6"
              aria-expanded={isOpen}
            >
              <span
                className={`font-title text-lg font-bold tracking-tight md:text-xl ${
                  isOpen ? "text-brand" : "text-gray-900"
                }`}
              >
                {item.question}
              </span>
              <span
                className={`flex size-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                  isOpen ? "bg-brand text-white" : "bg-brand-tint text-brand"
                }`}
              >
                {isOpen ? (
                  <Minus className="size-5" strokeWidth={2.2} />
                ) : (
                  <Plus className="size-5" strokeWidth={2.2} />
                )}
              </span>
            </button>

            {isOpen && (
              <div className="border-t border-stone-200 px-6 py-6 md:px-8 md:py-7">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
