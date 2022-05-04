module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
    colors : {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'bhumi2': {
        50: '#EEDCD3',
        100: '#DDB5A6',
        200: '#D29D89',
        300: '#C1795C',
        400: '#BC6D4E',
        500: '#A35A3E',
        600: '#854A32',
        700: '#76402D',
        800: '#593122',
        900: '#3A1F17',
      },
      'bhumi': {
        50: '#FFFFFF',
        100: '#CAF0F8',
        200: '#ADE8F4',
        300: '#90E0EF',
        400: '#48CAE4',
        500: '#00B4D8',
        600: '#0096C7',
        700: '#0077B6',
        800: '#023E8A',
        900: '#03045E',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
