/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          background: {
            100: "#F4FAFF",
            200: "#",
            300: "#",
            400: "#",
            500: "#",
            600: "#",
            700: "#",
            800: "#",
            900: "#",
          },
          primary: {
            100: "#",
            200: "#",
            300: "#",
            400: "#",
            500: "#",
            600: "#",
            700: "#",
            800: "#",
            900: "#",
          },
          secondary: {
            100: "#",
            200: "#",
            300: "#",
            400: "#",
            500: "#",
            600: "#",
            700: "#",
            800: "#",
            900: "#",
          },
          accent: {
            100: "#",
            200: "#",
            300: "#",
            400: "#",
            500: "#",
            600: "#",
            700: "#",
            800: "#",
            900: "#",
          },
          text: {
            100: "#F4FAFF",
            900: "#000B14",
          },
        },
        dark: {
          background: "#111D4A",
          primary: "#7CC6FE",
          secondary: "#837A75",
          accent: {
            primary: "#FFC15E",
            secondary: "#FF9F2C",
          },
          text: "#000B14",
        },
      },
    },
  },
  plugins: [],
};
