/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        subtitle: "#757575",
        login: "#EEF2F6",
      },
    },
  },
  plugins: [],
};
