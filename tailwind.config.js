/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Montserrat", "sans-serif"],
      secondary: ["Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        heading: {
          100: "#414C5E",
        },
        itemTitle: {
          100: "#566074",
        },
        itemContent: {
          100: "#778195",
        },
      },
    },
  },
  plugins: [],
};
