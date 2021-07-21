module.exports = {
  purge: ["./index.html", "./src/**/*{.ts,.js}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: "350px",
      },
      colors: {
        theme: "#4affae",
      },
      fontFamily: {
        cursive: ["lobster", "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
