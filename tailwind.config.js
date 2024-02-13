/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      maxWidth: {
        max: "2000px",
      },
      fontFamily: { 
        primary: ["Rubik", "sans-serif"],
        secondary: ["krub", "sans-serif"],
        tertiary:["League Spartan"," sans-serif"] 
      },
      colors: {
        'blacked': '#1C1F35',
        "yellowed":"#FFB629",
        "button-text":"#23212A"
      
      }, 
      backgroundImage: {
        'yellow-gradient': 'linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)',
      },
    },
  },
  plugins: [], 
  mode: 'jit',  
} 