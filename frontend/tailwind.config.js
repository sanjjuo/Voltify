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
        primary: "#74AFBE",
        secondary: "#f42c37",
        brandHeadSet:"#D9D7F1",
        brandSmartWatch: "#E5DDC5",
        brandLightBlue:"#D7E8EB",
        brandVR: "#95D2B3",
        brandSpeaker: "#CAF4FF",
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