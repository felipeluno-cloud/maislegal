/**
 * HeroLogoBg
 *
 * Decoração de fundo desativada (removida do site em 5 maio 2026 a pedido
 * do Felipe). O componente continua aceitando as mesmas props para não
 * quebrar imports existentes, mas não renderiza nada.
 *
 * Para reativar no futuro, restaurar a versão anterior em
 * HeroLogoBg.tsx.bak.20260505 (ou git history).
 */

type Position = "top-right" | "top-left" | "bottom-right" | "bottom-left";

type Props = {
  position?: Position;
  color?: string;
  opacity?: number;
  width?: number;
  margin?: number;
};

export function HeroLogoBg(_props: Props = {}) {
  return null;
}
