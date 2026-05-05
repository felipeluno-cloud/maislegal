"use client";

import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";

type Props = {
  variant?: "compact" | "card" | "inline";
  title?: string;
  subtitle?: string;
};

export function NewsletterCapture({
  variant = "card",
  title = "Receba conteúdo sobre contratos vivos.",
  subtitle = "Newsletter quinzenal dos fundadores da +legal_, com conteúdo prático sobre gestão de contratos B2B. Sem spam, sem promessa furada."
}: Props) {
  const [enviado, setEnviado] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => {
      setEnviado(false);
      setEmail("");
    }, 4000);
  }

  if (variant === "inline") {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white p-4">
        <Mail className="size-5 shrink-0 text-brand" strokeWidth={1.6} />
        <p className="flex-1 text-[13px] leading-snug text-gray-700">
          Quer receber conteúdo como esse no email?
        </p>
        {enviado ? (
          <span className="flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-700">
            <CheckCircle2 className="size-3.5" strokeWidth={2.5} /> Inscrito
          </span>
        ) : (
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com.br"
              className="rounded-lg border border-stone-300 px-3 py-1.5 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            />
            <button
              type="submit"
              className="rounded-lg bg-brand px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-white hover:bg-brand-mid"
            >
              Inscrever
            </button>
          </form>
        )}
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className="rounded-xl border border-stone-200 bg-white p-5">
        <div className="mb-3 flex items-center gap-2">
          <Mail className="size-4 text-brand" strokeWidth={1.6} />
          <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
            Newsletter
          </p>
        </div>
        <h3 className="mb-2 font-title text-base font-bold text-gray-900">{title}</h3>
        <p className="mb-4 text-[13px] leading-relaxed text-gray-700">{subtitle}</p>

        {enviado ? (
          <div className="rounded-lg bg-emerald-50 p-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-700" strokeWidth={2} />
              <p className="font-title text-[13px] font-bold text-emerald-700">Inscrito!</p>
            </div>
            <p className="mt-1 text-[11px] leading-snug text-emerald-700">
              Você recebe a próxima edição em 2 semanas.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com.br"
              className="rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            />
            <button
              type="submit"
              className="rounded-lg bg-brand px-4 py-2 font-semibold text-white hover:bg-brand-mid"
            >
              Inscrever-se
            </button>
          </form>
        )}
      </div>
    );
  }

  // card (default)
  return (
    <div className="rounded-2xl border-2 border-brand bg-brand-tint p-7 md:p-8">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex size-11 items-center justify-center rounded-xl bg-brand text-white">
          <Mail className="size-5" strokeWidth={1.6} />
        </div>
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
          Newsletter da <span className="normal-case">+legal_</span>
        </p>
      </div>

      <h3 className="mb-3 font-title text-2xl font-bold tracking-tighter text-gray-900 md:text-3xl">
        {title}
      </h3>

      <p className="mb-6 text-[15px] leading-relaxed text-gray-700">{subtitle}</p>

      {enviado ? (
        <div className="rounded-xl bg-emerald-50 p-5">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-5 text-emerald-700" strokeWidth={2} />
            <p className="font-title text-base font-bold text-emerald-700">Você está inscrito.</p>
          </div>
          <p className="mt-1 text-[13px] leading-snug text-emerald-700">
            A primeira edição chega no seu email em até 2 semanas.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com.br"
            className="flex-1 rounded-lg border border-stone-300 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-mid"
          >
            Inscrever-se
          </button>
        </form>
      )}

      <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-stone-500">
        Quinzenal · Sem spam · Pode descadastrar a qualquer momento
      </p>
    </div>
  );
}
