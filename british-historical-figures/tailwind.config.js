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
        'direct-url': 'url(https://img.freepik.com/free-vector/poster-flying-old-parchments_105738-466.jpg?w=2000&t=st=1710781725~exp=1710782325~hmac=2d4b63440f3910256913ea172e2aa9134eb4eb5e4b188fd90538c7183c9f837d)'
      },
    },
  },
  plugins: [],
}
