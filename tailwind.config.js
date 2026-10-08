/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        // Laterite / terracotta — the colour of Nigerian red earth
        brand: {
          50: "#fdf6ee",
          100: "#fae9d4",
          200: "#f4cfa6",
          300: "#eaae6f",
          400: "#e08a3f",
          500: "#d46f22",
          600: "#b95618",
          700: "#984117",
          800: "#7a3519",
          900: "#642d17",
        },
        ink: {
          DEFAULT: "#14161a",
          900: "#0e1013",
          800: "#1d2026",
          700: "#2a2e36",
          600: "#3a3f4a",
        },
        sand: "#f7f3ee",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 35s linear infinite",
      },
    },
  },
  plugins: [],
};
