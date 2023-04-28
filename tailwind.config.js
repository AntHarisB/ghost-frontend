/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#292929',
        secondary:'#272934',
        customColor:'#1A3835',  
        tertiary:'#B1B5CA',  
      },
      width:{
        450:"450px",
      }
    },
  },
  plugins: [],
}

