/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        lora: ['Lora', 'sans-serif'],
        poppins: ['poppins', 'sans-serif'],
      },
      colors: {
        'primary': "#FDFDFD",
        'primary-two': "#FFF",
        "blue": "#0061FF",
        "blue-text": "#051F61",
        "primary-text": "#757897",
        "fill-color": "#EBF2FF"
      },
    
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}