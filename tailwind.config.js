/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          background: "#F4FAFF",
          primary: "#7CC6FE",
          secondary: "#837A75",
          accent: {
            primary: "#FFC15E",
            secondary: "#FF9F2C",
          },
          text: "#111D4A",
        },
        dark: {
          background: "#111D4A",
          primary: "#7CC6FE",
          secondary: "#837A75",
          accent: {
            primary: "#FFC15E",
            secondary: "#FF9F2C",
          },
          text: "#F4FAFF",
        },
      },
    },
  },
  plugins: [],
};
