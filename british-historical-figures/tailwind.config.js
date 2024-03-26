/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './api/**/*.{js,ts,jsx,tsx}', // Add the API folder here
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      backgroundImage: {
        'custom-background': "url('https://img.freepik.com/free-photo/paper-texture_1048-4464.jpg?t=st=1711451554~exp=1711455154~hmac=27c0ade42ffeddfee1a24fb2c23a3a74915512d82a398ad432e8dc4c9dfa0714&w=740')",
      },
    },
  },
  plugins: [],
};
