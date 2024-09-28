/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#0067FF",
        secondaryColor: "#FFD600",
        yellowColor: "#FFD600",
        purpleColor: "#7D00FF",
        irisBlueColor: "#0067FF",
        headingColor:"#181A1E",
        textColor:"#4E545F", 
      },
      boxShadow:{
        panelShadow:"rgba(17,12,46,0.15) 0px 48px 100px 0px",
      }
    },
  },
  plugins: [],
}

