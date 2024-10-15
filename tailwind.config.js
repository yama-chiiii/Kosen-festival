/** @type {import('tailwindcss').Config} */
const range = require("lodash/range");

module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx,ts}"],
  theme: {
    spacing: {
      px: "1px",
      ...range(1, 800).reduce((acc, i) => {
        acc[i] = `${i}px`;
        return acc;
      }, {}),
    },
    extend: {
      fontFamily: {
        mashomaro: ['MashomaroPopHeart', 'sans-serif'],
        yomogi: ['Yomogi', 'sans-serif'],// カスタムフォントを追加
      },
      colors: {
        'pink-base': '#FFEEEE',
        'pink-dark': '#FFBCDC',
        'blue-dark': '#D9E2FE',
      },
    },
  },
  plugins: [],
}