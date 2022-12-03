/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        vlg: "2000px",
      },
      margin: {
        "-13rem": "-13rem",
        "-16rem": "-16rem",
        "-17rem": "-17rem",
      },
    },
  },
  plugins: [],
};
