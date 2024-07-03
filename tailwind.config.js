/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#57AEDD',
          100: '#ddeff8',
          200: '#c7e4f4',
          300: '#abd7ee',
          400: '#8fc9e8',
          500: '#73bce3',
          600: '#4991b8',
          700: '#293683'
        },
        secondary: {
          DEFAULT: '#212227',
          100: '#f1e8db',
          200: '#e8d9c3',
          300: '#ddc6a6',
          400: '#d1b388',
          500: '#c6a06a',
          600: '#ba8d4c',
          700: '#9b763f'
        },
        red: {
          DEFAULT: '#ff495c',
          100: '#ffdbde',
          200: '#ffc2c9',
          300: '#ffa4ae',
          400: '#ff8692',
          500: '#ff6777',
          600: '#ff495c',
          700: '#aa313d'
        },
        grey: {
          DEFAULT: '#212227',
          100: '#d3d3d4',
          200: '#b5b5b7',
          300: '#909193',
          400: '#6b6c6f',
          500: '#46474b',
          600: '#212227'
        }
      },
      fontFamily: {
        sans: ['Sofia Pro', 'sans-serif']
      },
      borderRadius: {
        DEFAULT: '8px'
      },
    },
  },
  plugins: []
}
