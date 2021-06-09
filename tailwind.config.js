module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        haip: {
          light: "#798cb2",
          dark: "#365696",
        },
      },
    },
  },
  variants: {
    extend: {
      scale: ["hover"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
