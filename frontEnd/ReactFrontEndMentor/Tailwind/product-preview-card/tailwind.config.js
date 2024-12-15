/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      colors: {
        darkCyan: "hsl(158, 36%, 37%)",
        Cream: "hsl(30, 38%, 92%)",
        darkBlue: "hsl(212, 21%, 14%)",
        grayishBlue: "hsl(228, 12%, 48%)",
        White: "hsl(0, 0%, 100%)",
      },
      screens: {
        Mobile: "375px",
        Desktop: "1440px",
      },
    },
  },
  plugins: [],
};
