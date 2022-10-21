const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Lato', 'Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': '#00FA01',
        'highlight': '#FFC7FF',
        'reading': '#E7EBF0',
        'giros-orange': '#fa6b04',
        'giros-pink': '#FFEECB',
        'giros-blue': '#013A9B',
        'giros-green': '#00FA01',
        'giros-card-gray': '#1A202C',
        'giros-reading-gray': '#B2BDC2',
        'giros-reading-white': '#E7EBF0',
        'giros-dark-bg': 'rgb(26, 32, 44)'
      }
    },
    boxShadow: {
      'DEFAULT': '0 0px 3px 0, 0 0px 2px -1px',
      'md': '0 0px 6px -1px, 0 0px 4px -2px'
    },
    letterSpacing: {
      normal: '.025em',
      wide: '.05em',
    }
  },
  plugins: [],
}