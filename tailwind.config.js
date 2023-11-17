/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
      'lexend': ['Lexend', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
    },
      colors: {
        'primary': "#E84545",
      }
    },
  },
  plugins: [],
}

