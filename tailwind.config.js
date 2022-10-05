/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 12s infinite",
        test: "rainbow 10s ease 0s infinite alternate none running",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        rainbow: {
          "0%": {
            color: "rgb(240, 77, 255)",
          },
          "25%": {
            color: "rgb(255, 77, 77)",
          },
          "50%": {
            color: "rgb(255, 197, 77)",
          },
          "75%": {
            color: "rgb(106, 237, 118)",
          },
          "100%": {
            color: "rgb(0, 153, 255)",
          },
        },
      },
    },
  },
  plugins: [],
};
