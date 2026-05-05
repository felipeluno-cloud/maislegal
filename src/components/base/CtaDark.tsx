import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "./Button";

interface CtaDarkProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  body?: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
}

// Apesar do nome "CtaDark" (legacy), agora usa fundo brand em vez de zinc-900
export function CtaDark({
  eyebrow = "Próximo passo",
  title,
  body,
  ctaLabel = "Entrar para o Early Access",
  ctaHref = "/early-access",
  ctaSecondaryLabel,
  ctaSecondaryHref
}: CtaDarkProps) {
  return (
    <section className="relative overflow-hidden bg-brand text-white">
      {/* Decorative elements */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute h-[600px] w-[600px] rounded-full opacity-[0.08]"
          style={{ background: "var(--peach)", top: "-200px", right: "-150px" }}
        />
        <div
          className="absolute h-[400px] w-[400px] rounded-full opacity-[0.06]"
          style={{ background: "white", bottom: "-150px", left: "-100px" }}
        />
        {/* Grid pattern */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="container-soma relative py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm">
            <span className="size-1.5 animate-pulse rounded-full bg-peach motion-reduce:animate-none" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-peach">
              {eyebrow}
            </span>
          </div>

          <h2 className="mb-5 font-title text-3xl font-bold tracking-tighter text-white md:text-4xl lg:text-5xl">
            {title}
          </h2>

          {body && (
            typeof body === "string" ? (
              <p className="mb-8 text-lg leading-relaxed text-white/80">
                {body}
              </p>
            ) : (
              <div className="mb-8 space-y-4 text-lg leading-relaxed text-white/80">
                {body}
              </div>
            )
          )}

          <div className="flex flex-wrap justify-center gap-3">
            <Button href={ctaHref} variant="dark" size="lg">
              {ctaLabel} <ArrowRight className="size-4" />
            </Button>
            {ctaSecondaryLabel && ctaSecondaryHref && (
              <Button
                href={ctaSecondaryHref}
                variant="ghost"
                size="lg"
                className="!text-white !border-white/30 hover:!bg-white/10"
              >
                {ctaSecondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
