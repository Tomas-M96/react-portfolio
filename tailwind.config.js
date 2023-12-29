/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          background: "#f2d3a8",
        },
        dark: {
          background: "#0D2C57",
        },
      },
    },
  },
  plugins: [],
};
