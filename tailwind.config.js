/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['apercu-pro', '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

