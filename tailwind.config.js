module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'custom-green' : '#89CDD3' , 
        'custom-light-blue' : '#E9F1F1' , 
        'custom-dark-blue' : '#2C3A5E'
      } 
    },
  },
  plugins: [],
}
