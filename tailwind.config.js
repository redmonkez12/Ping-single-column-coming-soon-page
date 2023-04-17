/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderColor: {
        lightBlue: "rgba(76, 123, 243, 0.15)",
      },
      colors: {
          gray: "#969696",
          black: "#15202A",
          red: "#FF5466",
          blue: "#4C7BF3",
      },
    },
  },
  plugins: [],
}
