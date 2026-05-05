import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark";
type Size = "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit";
  external?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-mid border border-brand transition-colors",
  secondary:
    "bg-white text-brand border border-stone-300 hover:bg-brand-tint hover:border-brand transition-colors",
  ghost:
    "bg-transparent text-brand hover:bg-brand-tint transition-colors border border-transparent",
  dark:
    "bg-white text-zinc-900 border border-white hover:bg-zinc-100 transition-colors"
};

const sizeStyles: Record<Size, string> = {
  md: "px-5 py-2.5 text-[14px]",
  lg: "px-7 py-3.5 text-[15px]"
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  external = false
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
