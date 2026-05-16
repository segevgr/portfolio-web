/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
    keyframes: {
      "fade-in": {
        "0%": { opacity: "0", transform: "translateY(10px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
    },
    animation: {
      "fade-in": "fade-in 0.6s ease-out forwards",
    },
    colors: {
      background: "#1C1A2E",
      primary: "#A78BFA",
      secondary: "#C084FC",
      textPrimary: "#E2E0F0",
      textSecondary: "#A8A0C8",
      white: "#FFFFFF",
      softWhite: "#272440",
      black: "#000000",
      graySide: "#141225",
      cardsGray: "#A8A0C8",
      lightBlue: "#2D1F5E",
      red: "#EF4444",
      backgroundSoft: "#272440",
      badgeBg: "#3A2E6E",
      badgeText: "#D4CFEE",
      badgeBorder: "#5844A0",
    },
  },
  plugins: [],
};
