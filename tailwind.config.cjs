/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '376px',
        'mobile': '576px',
        'tablet': '768px',
        'pc': '1440px'
      },
      colors: {
        'style1': '#8E7E74'
      },
      backgroundColor: {
        'bg1': 'rgba(255, 255, 255, 0.9)',
        'bg2': '#FFAC89',
        'bg3': '#FF7D45'
      },
      fontSize: {
        '2xs': ['clamp(0.76rem, calc(0.71rem + 0.26vw), 1.02rem)'],
        'xs': ['clamp(0.91rem, calc(0.84rem + 0.37vw), 1.28rem)'],
        'sm': ['clamp(1.09rem, calc(0.99rem + 0.51vw), 1.60rem)'],
        'base': ['clamp(1.31rem, calc(1.18rem + 0.69vw), 2.00rem)'],
        'md': ['clamp(1.58rem, calc(1.39rem + 0.93vw), 2.50rem)'],
        'lg': ['clamp(1.89rem, calc(1.64rem + 1.24vw), 3.13rem)'],
        'xl': ['clamp(2.27rem, calc(1.94rem + 1.64vw), 3.91rem)'],
        '2xl': ['clamp(2.72rem, calc(2.29rem + 2.16vw), 4.88rem)'],
        '3xl': ['clamp(3.27rem, calc(2.70rem + 2.84vw), 6.10rem)'],
      },
      fontFamily: {
        'notosans-light': ['notosans-light'],
      },
      dropShadow: {
        'shadow1': '0px 4px 30px rgba(116, 48, 48, 0.4)'
      },

    }
  },
  plugins: [],
}