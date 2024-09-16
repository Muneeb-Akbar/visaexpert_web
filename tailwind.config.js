/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "button-color": "#1d1d5d",
        "red-theme": "#FF0D07",
        "light-theme": "#8C8B92",
        "blue-theme": "#1D1D5D"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  
  },
  plugins: [],
};
