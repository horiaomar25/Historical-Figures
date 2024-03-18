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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'direct-url': 'url(https://img.freepik.com/free-vector/realistic-old-paper-texture-with-empty-space_52683-74455.jpg)'
      },
    },
  },
  plugins: [],
}
