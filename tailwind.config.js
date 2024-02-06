/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "30px", // Define custom breakpoint for screens with width 420px
        // Add more custom breakpoints as needed
      },
    },
  },
  plugins: [],
};
