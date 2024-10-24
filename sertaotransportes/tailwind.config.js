/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mm: "320px", // 'min-width
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      righ: ["Righteous", "sans-serif"],
      robotoC: ["Roboto Condensed", "sans-serif"],
    },
    extend: {
      colors: {
        "custom-blue-dark": "#00497E",
        "custom-blue-light": "#296693",
      },
      minHeight: {
        "height-full-16px": "calc(100vh - 64px)",
      },
    },
    screens: {
      mm: "320px", // 'min-width
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
};
