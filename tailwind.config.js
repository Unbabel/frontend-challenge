/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
