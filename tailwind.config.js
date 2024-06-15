/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0078A4",
        secondary: "#CBE6F6",
        highlight: "#007AFF",
        dark: "#005371",
      },
    },
  },
  plugins: [],
};
