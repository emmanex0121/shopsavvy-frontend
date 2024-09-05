/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: "#7D54F3", // Custom purple color
        customGrey: "#CCCCCC",
        customGreyLight: "ECECEC",
        customOrange: "#EB7E80",
        customWhite: "#FBFBFB",
        customGreen: "#02B962",
        customBlack: "#000000",
        customPurpleLight: "#D3C4FC",
        // Add more custom colors here
      },
    },
  },
  plugins: [],
};
