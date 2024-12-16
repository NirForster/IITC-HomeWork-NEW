/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          paleBlue: "hsl(225, 100%, 94%)",
          brightBlue: "hsl(245, 75%, 52%)",
        },
        neutral: {
          veryPaleBlue: "hsl(225, 100%, 98%)",
          desaturatedBlue: "hsl(224, 23%, 55%)",
          darkBlue: "hsl(223, 47%, 23%)",
        },
      },
      fontFamily: {
        redHat: ['"Red Hat Display"', "sans-serif"],
      },
      fontSize: {
        paragraph: "16px",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
