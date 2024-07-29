

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./Components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./node_modules/daisyui/**/*.{js,jsx,ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      backgroundImage: {
        'blue-gradient': 'linear-gradient(to right, #3b82f6, #60a5fa)',
      },
      boxShadow: {
        'white-shadow': '0 4px 15px rgba(255, 255, 255, 0.5)',
      },
      keyframes: {
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        bob: 'bob 3s infinite',
      },
    },
      
  
  },
  daisyui: {
    themes: [],
  }, // This closing brace was missing in the previous response
  plugins: [require("daisyui")],
  
};



