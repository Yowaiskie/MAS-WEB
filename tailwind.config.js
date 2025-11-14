/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Tinitingnan nito ang LAHAT ng PHP files sa loob ng src/pages/ at src/components/
    './src/**/*.{php,js}', 
    // Kung gusto mong mas specific:
    // './src/pages/**/*.php',
    // './src/components/**/*.php',
    // './src/js/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}