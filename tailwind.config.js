/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      // => @media (min-width: 900px) { ... }
      'mobile': '500px',
      'sm': '600px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'md-lg': '900px',
      'md-800': '800px',
    },
  },
  plugins: [],
}
