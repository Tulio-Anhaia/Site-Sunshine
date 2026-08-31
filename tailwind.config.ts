import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta oficial Sunshine — derivada do logotipo anexado (dourado + grafite)
        // Ver [CONFIRMAR PALETA] em /lib/data.ts para pendências de validação
        gold: {
          DEFAULT: "#B08D57",
          light: "#D4B483",
          dark: "#8C6D3F",
        },
        navy: {
          DEFAULT: "#12233A",
          light: "#1C334F",
        },
        graphite: "#202124",
        cream: "#F5F3EF",
        success: "#2E7D32",
        danger: "#C62828",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
        btn: "8px",
      },
      boxShadow: {
        card: "0 2px 12px rgba(18,35,58,0.08)",
        cardHover: "0 8px 24px rgba(18,35,58,0.14)",
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
