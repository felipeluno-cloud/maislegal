import Image from "next/image";
import Link from "next/link";

type LogoVariant = "black" | "white";

interface LogoProps {
  variant?: LogoVariant;
  height?: number;
  href?: string | null;
  className?: string;
}

const LOGO_RATIO = 2.64; // 1803 / 683

export function Logo({
  variant = "black",
  height = 32,
  href = "/",
  className = ""
}: LogoProps) {
  const src =
    variant === "black"
      ? "/logos/maislegal-logo-black.png"
      : "/logos/maislegal-logo-white.png";

  const width = Math.round(height * LOGO_RATIO);

  const img = (
    <Image
      src={src}
      alt="+legal_"
      width={width}
      height={height}
      priority
      className={className}
      style={{ height, width: "auto" }}
    />
  );

  if (!href) return img;

  return (
    <Link href={href} aria-label="Página inicial da +legal_">
      {img}
    </Link>
  );
}
