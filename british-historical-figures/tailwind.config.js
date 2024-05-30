const { Inter } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        Inter: ['Inter', 'serif'],
       },
      
    },
  },
  daisyui: {
    themes: [],
  }, // This closing brace was missing in the previous response
  plugins: [require("daisyui")],
};

