/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f8e7fa",
          100: "#f1d0f5",
          200: "#e4a0eb",
          300: "#d671e0",
          400: "#c941d6",
          500: "#bb12cc",
          600: "#960ea3",
          700: "#700b7a",
          800: "#4b0752",
          900: "#250429",
        },
        secondary: {
          50: "#e8fcfa",
          100: "#d1f8f5",
          200: "#a3f2eb",
          300: "#75ebe2",
          400: "#47e5d8",
          500: "#19dece",
          600: "#14b2a5",
          700: "#0f857c",
          800: "#0a5952",
          900: "#052c29",
        },
      },
    },
  },
  plugins: [],
};
