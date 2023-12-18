/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors:{
      "primary-orange":"#FF971D",
      "primary-ash":"#EDEDED",
      "primary-main-blue":"#290059",
     }
    },
  },
  plugins: [],
}
