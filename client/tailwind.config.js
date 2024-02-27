/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      "hero-pattern": "url('./src/assets/images/hero.jpg')",
    },
    colors: {
      "c-main": "#ffffff",
      "c-primary": "#00293d",
      "c-sec": "#ffb100",
    },
  },
  plugins: [],
};
