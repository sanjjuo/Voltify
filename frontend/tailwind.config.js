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
        primary: "#f42c37",
        secondary: "#f42c37",
        brandYellow: "#fdc62e",
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