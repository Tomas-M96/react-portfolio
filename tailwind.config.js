/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          background: "#F4FAFF",
          primary: {
            main: "#7CC6FE",
            hover: "#b3ddfc",
            active: "#75a5c9",
          },
          secondary: "#837A75",
          accent: {
            primary: "#FFC15E",
            secondary: "#FF9F2C",
          },
          text: "#111D4A",
          input: "#E9F0F6",
        },
        dark: {
          background: "#111D4A",
          primary: {
            main: "#FFC15E",
            hover: "#ffd591",
            active: "#ba8c43",
          },
          secondary: "#837A75",
          accent: {
            primary: "#7CC6FE",
            secondary: "#FF9F2C",
          },
          text: "#F4FAFF",
        },
      },
    },
  },
  plugins: [],
};
