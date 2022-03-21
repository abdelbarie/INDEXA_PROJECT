module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'custom-green' : '#89CDD3' , 
        'custom-light-blue' : '#E9F1FE' ,
        'custom-dark-bg' : '#0B1C1E',  
        'custom-white' : '#E1F2F4' , 
        'custom-dark-blue' : '#191F42' , 
        'custom-dark-green' : '#1C464A'
      } 
    },
  },
  darkMode : "class" ,
  plugins: [],
}
