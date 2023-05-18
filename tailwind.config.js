const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
          extend: {
               colors: {
                    primary: colors.indigo,
                    secondary: colors.indigo,
               },
               fontFamily: {
                    sans: ["'Inter', sans-serif"],
                    jetBrains: ["'JetBrains Mono', monospace"],
               },
          },
     },
     plugins: [],
};
