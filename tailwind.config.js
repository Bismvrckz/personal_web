/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      tablet: "640px",

      laptop: "1024px",

      desktop: "1440px",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
