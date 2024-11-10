/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        pink: {
          400: '#F472B6',
          500: '#EC4899',
          600: '#DB2777',
        },
      },
    },
  },
  plugins: [],
};