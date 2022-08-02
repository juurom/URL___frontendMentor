/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mygray': '#bfbfbf',
        'mymint': '#2acfcf',
        'myviolet': '#3b3054',
        'mybggray': '#f2f1f3',
        'mydeepviolet': '#232127',
      },
      backgroundImage: {
        'violetpattern': "url('./images/bg-shorten-desktop.svg')",
      }, 
    },
  },
  plugins: [

  ],
}
