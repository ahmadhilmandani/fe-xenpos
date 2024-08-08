/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cust-yellow": "#FFD369",
        "cust-yellow-light": "#FAEF5D",
        "cust-bg-gray": "#EEEEEE",
        "cust-gray": "#DFDFDF",
        "cust-gray-darker": "#76797D",
        "cust-black": "#393E46",
        "cust-black-darker": "#222831",
      }
    },
  },
  plugins: [],
}