import { ImageOff } from "lucide-react";

type Variant = "screenshot" | "portrait" | "logo" | "video";

type Props = {
  /** Tipo de placeholder para ajustar aspect-ratio e ícone */
  variant?: Variant;
  /** Texto curto que descreve o que vai entrar aqui */
  label?: string;
  /** Cor do placeholder. Default: brand */
  color?: string;
  /** Largura customizada (Tailwind class) */
  className?: string;
};

const ASPECTS: Record<Variant, string> = {
  screenshot: "aspect-[16/10]",
  portrait: "aspect-[4/5]",
  logo: "aspect-[3/2]",
  video: "aspect-video"
};

/**
 * Slot visual placeholder, com aparência alinhada à marca +legal_, para reservar
 * o espaço onde uma foto/screenshot/logo real vai entrar depois. Usa pattern de
 * grid sutil + ícone + label, em vez de "imagem quebrada".
 */
export function PlaceholderSlot({
  variant = "screenshot",
  label = "Imagem em produção",
  color = "var(--brand)",
  className = ""
}: Props) {
  return (
    <div
      className={`relative ${ASPECTS[variant]} w-full overflow-hidden rounded-2xl border-2 border-dashed ${className}`}
      style={{ borderColor: `${color}33`, background: `${color}08` }}
      aria-label={label}
    >
      {/* grid sutil de fundo */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.18]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id={`ph-grid-${color.replace(/[^a-z]/gi, "")}`} width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke={color} strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#ph-grid-${color.replace(/[^a-z]/gi, "")})`} />
      </svg>

      {/* conteúdo central */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <div
          className="flex size-12 items-center justify-center rounded-xl"
          style={{ background: `${color}1a` }}
        >
          <ImageOff className="size-6" strokeWidth={1.6} style={{ color }} />
        </div>
        <p
          className="font-mono text-[10px] font-bold uppercase tracking-widest"
          style={{ color }}
        >
          {label}
        </p>
      </div>
    </div>
  );
}
