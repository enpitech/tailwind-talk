/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' if you want to use the OS setting
  theme: {
    variants: {
      extend: {
        backgroundColor: ["dark"],
        textColor: ["dark"],
        // any other utilities you want to extend
      },
    },
  },
  plugins: [],
};
