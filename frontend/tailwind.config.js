/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        // main:"#74AFBE",
        // secondary:"#6d7678",
        // tertiary:"#D7E8EB",
        primary: "#74AFBE",
        secondary: "#f42c37",
        brandYellow: "#fdc62e",
        brandLightBlue:"#D7E8EB",
        brandGreen: "#2dcc6f",
        brandBlue: "#1376f4",
        brandWhite: "#eeeeee",
      },
      // container:{
      //   center: true,
      //   padding:{
      //     lg :"5rem",
      //     sm: "5rem",
      //     xs: "1rem",
      //     md: "1rem"
      //   }
      // }
    },
  },
  plugins: [],
}