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
        primary: {
          DEFAULT: "#2563A0",
          soft: "rgba(37, 99, 160, 0.08)",
          tint: "rgba(37, 99, 160, 0.14)",
          deep: "#1E5289",
          fg: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#D4A853",
          soft: "rgba(212, 168, 83, 0.12)",
        },
        surface: {
          DEFAULT: "#FAFAF7",
          raised: "#FFFFFF",
          deep: "#F4F2EC",
        },
        "text-primary": "#1A1A1A",
        "text-secondary": "#4A4A4A",
        "text-muted": "#7A7A7A",
        "text-on-dark": "#FAFAF7",
        border: {
          DEFAULT: "rgba(26, 26, 26, 0.08)",
          strong: "rgba(26, 26, 26, 0.16)",
        },
        success: "#2D7A4F",
        error: "#B84A3E",
      },
      fontFamily: {
        plex: ["var(--font-plex)", "sans-serif"],
        "plex-ar": ["var(--font-plex-ar)", "sans-serif"],
      },
      borderRadius: {
        "2xl": "16px",
      },
      keyframes: {
        "gradient-breathe": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "gradient-breathe": "gradient-breathe 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
