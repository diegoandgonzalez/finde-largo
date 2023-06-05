/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customMain: "#d63444",
        customGray: "#ededed",
        customDarkPurple: "#201e23",
      },
    },
  },
  plugins: [],
  darkMode: "class",
}

