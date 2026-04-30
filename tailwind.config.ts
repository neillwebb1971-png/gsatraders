import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0D1F3C",
          50: "#E8EDF5",
          100: "#C5D2E8",
          200: "#8FA8CF",
          300: "#5A7EB6",
          400: "#2E5AA0",
          500: "#0D1F3C",
          600: "#0B1A33",
          700: "#08142A",
          800: "#060E1F",
          900: "#030812",
        },
        ocean: {
          DEFAULT: "#1A5276",
          50: "#EAF2F8",
          100: "#C5DCF0",
          200: "#8BBDE0",
          300: "#519FD0",
          400: "#2E7DB8",
          500: "#1A5276",
          600: "#154463",
          700: "#103750",
          800: "#0B293D",
          900: "#061C2A",
        },
        coastal: {
          DEFAULT: "#2980B9",
          50: "#EBF5FB",
          100: "#C8E4F5",
          200: "#91C9EB",
          300: "#5AAEE1",
          400: "#2E96D4",
          500: "#2980B9",
          600: "#226A9A",
          700: "#1B547B",
          800: "#143E5C",
          900: "#0D293D",
        },
        ice: {
          DEFAULT: "#EBF5FB",
          50: "#FAFCFE",
          100: "#EBF5FB",
          200: "#D6EBF7",
          300: "#C1E1F3",
          400: "#ADD7EF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      backgroundImage: {
        "gradient-ocean": "linear-gradient(135deg, #0D1F3C 0%, #1A5276 50%, #2980B9 100%)",
        "gradient-ice": "linear-gradient(180deg, #FAFCFE 0%, #EBF5FB 100%)",
        "gradient-hero": "linear-gradient(135deg, rgba(13,31,60,0.92) 0%, rgba(26,82,118,0.85) 60%, rgba(41,128,185,0.75) 100%)",
      },
      boxShadow: {
        card: "0 2px 16px rgba(13,31,60,0.08)",
        "card-hover": "0 8px 32px rgba(13,31,60,0.15)",
        nav: "0 2px 20px rgba(13,31,60,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
