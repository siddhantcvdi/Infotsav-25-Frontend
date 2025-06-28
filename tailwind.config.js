/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pixelhugger: ["pixelhugger_font", "sans-serif"],
        pixelify: ["PixelifySans-Regular", "sans-serif"],
        "pixelify-bold": ["PixelifySans-Bold", "sans-serif"],
        "pixelify-medium": ["PixelifySans-Medium", "sans-serif"],
        "pixelify-semibold": ["PixelifySans-SemiBold", "sans-serif"],
        "pixelify-variable": ["PixelifySans-VariableFont_wght", "sans-serif"],
        urbanist: ['"Urbanist"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
