/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,jsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        mashomaro: ['MashomaroPopHeart', 'sans-serif'],
        yomogi: ['Yomogi', 'sans-serif'],// カスタムフォントを追加
      },
      colors: {
        'pink-base': '#FFEEEE',
      },
    },
  },
  plugins: [],
}