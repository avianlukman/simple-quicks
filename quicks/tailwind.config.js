/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        inter: ['Lato'],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'primary': '#2F80ED',
      'primary-dark-grey':'#4F4F4F',
      'primary-grey': '#828282',
      'primary-light-grey': '#E0E0E0',
      'indicator-orange': '#F8B76B',
      'indicator-purple': '#8785FF',
      'indicator-red': '#EB5757',
      'indicator-yellow': '#F2C94C',
      'chat-yellow': '#E5A443',
      'chat-light-yellow': '#FCEED3',
      'chat-purple': '#9B51E0',
      'chat-light purple': '#EEDCFF',
      'chat-green': '#43B78D',
      'chat-light-green': '#D2F2EA',
      'sticker-white': '#E9F3FF',
      'sticker-orange': '#FDCFA4',
      'sticker-yellow': '#F9E9C3',
      'sticker-green': '#AFEBDB',
      'sticker-light-green': '#CBF1C2',
      'sticker-purple': '#CFCEF9',
      'sticker-pink': '#F9E0FD',
    },
  },
  plugins: [],
}