import { ReactNode } from "react";

type CardVariant = "default" | "highlight" | "peach" | "soma" | "warn";

interface CardProps {
  children: ReactNode;
  variant?: CardVariant;
  className?: string;
}

const variantStyles: Record<CardVariant, string> = {
  default: "bg-white border border-grey-2",
  highlight: "bg-azul-bg border border-azul-light",
  peach: "bg-peach-bg border border-peach-dark/30",
  soma: "bg-soma-bg border border-soma/30",
  warn: "bg-before-bg border border-before/20"
};

export function Card({
  children,
  variant = "default",
  className = ""
}: CardProps) {
  return (
    <div
      className={`rounded-2xl p-6 md:p-7 ${variantStyles[variant]} ${className}`}
    >
      {children}
    </div>
  );
}
