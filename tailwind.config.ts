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
          DEFAULT: "#248F86",
          soft: "rgba(36, 143, 134, 0.12)",
          deep: "#1D7A72",
        },
        accent: "#D4A853",
        surface: "#FAFAF7",
        "text-primary": "#1A1A1A",
        "text-muted": "rgba(26, 26, 26, 0.6)",
        border: "rgba(26, 26, 26, 0.08)",
      },
      fontFamily: {
        fraunces: ["var(--font-fraunces)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        readex: ["var(--font-readex)", "sans-serif"],
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
