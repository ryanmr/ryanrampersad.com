const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        "10xl": "8rem",
      },
      minWidth: {
        64: "16rem",
      },
      colors: {
        "ryan-off-white": "rgb(221, 221, 221)",
        "ryan-black": "rgb(24, 24, 24)",
        "ryan-black-transparent": "rgba(0, 0, 0, .5)",
      },
      fontFamily: {
        brand: ["League Gothic", "sans-serif"],
        cursive: ["Pacifico", "cursive"],
        hyper: ["Atkinson Hyperlegible", defaultTheme.fontFamily.sans],
      },
      keyframes: {
        fadeY: {
          "100%": {
            transform: "translateY(0px)",
            opacity: 1,
          },
        },
        fadeX: {
          "100%": {
            transform: "translateX(0px)",
            opacity: 1,
          },
        },
      },
      animation: {
        "fade-down": "fadeY 0.75s linear 1s 1 forwards",
        "fade-x": "fadeX 0.75s linear 1s 1 forwards",
      },
    },
  },
  plugins: [],
};
