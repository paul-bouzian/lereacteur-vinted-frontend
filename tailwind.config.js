/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vinted: ["V-Inter", "sans-serif"],
      },
      screens: {
        tablet: "870px",
      },
    },
  },
  plugins: [],
};
