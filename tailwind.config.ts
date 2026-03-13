import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0a1628",
          mid: "#112240",
          light: "#1a3460",
        },
        gold: {
          DEFAULT: "#c9a84c",
          light: "#e2c97e",
          pale: "#f5e9c8",
        },
        muted: "#8a9ab5",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(201,168,76,0.07) 0%, transparent 60%), linear-gradient(160deg, #0a1628 0%, #112240 60%, #0d1f3c 100%)",
        "gold-gradient": "linear-gradient(135deg, #c9a84c 0%, #e2c97e 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(17,34,64,0.9), rgba(26,52,96,0.9))",
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "float-delay": "float 4s 1.5s ease-in-out infinite",
        "float-slow": "float 5s 0.5s ease-in-out infinite",
        pulse: "pulse 2s infinite",
        "wa-bounce": "waBounce 2s 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        waBounce: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.06)" },
        },
      },
      boxShadow: {
        gold: "0 4px 20px rgba(201,168,76,0.25)",
        "gold-lg": "0 8px 30px rgba(201,168,76,0.35)",
        wa: "0 4px 20px rgba(37,211,102,0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
