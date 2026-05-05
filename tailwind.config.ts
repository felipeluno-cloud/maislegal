import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // Brand · azul (substitui amber-700 do SOMA como cor de acento)
        brand: {
          DEFAULT: "#1E3A5F",
          mid: "#2A4F7C",
          tint: "#EEF2F8",
          light: "#D6E2F0",
          darker: "#152C47"
        },
        // Peach (apenas o claro é canônico — manual v0.3: acento em fundos escuros)
        // peach-dark e peach-bg foram extensões fora do canon, redirecionadas para slate (5 mai 2026).
        peach: {
          DEFAULT: "#F0CDA7",
          dark: "#1E293B", // DEPRECATED alias · agora aponta para slate canônico
          bg: "#EEF1F5"    // DEPRECATED alias · agora aponta para slate-bg
        },
        // SOMA câmara
        soma: {
          DEFAULT: "#B8614E",
          bg: "#F7EFED"
        }
      },
      fontFamily: {
        title: ["var(--font-barlow)", "sans-serif"],
        body: ["var(--font-work-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"]
      },
      maxWidth: {
        "7xl": "80rem"
      }
    }
  },
  plugins: []
};

export default config;
