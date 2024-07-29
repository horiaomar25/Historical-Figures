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
     
      boxShadow: {
        "nav-shadow": "0 4px 30px rgba(248, 135, 73, 0.5);",
      },
      hover: {
        "nav-shadow": "0 4px 30px rgba(248, 135, 73, 0.8);",
      },
      backgroundImage: {
        
      },
      colors: {
        orange: "#F88749",
        yellow: "#FCF0BB",
        blue: "#eaeefe",
      },
    },
  },
  daisyui: {
    themes: [],
  }, // This closing brace was missing in the previous response
  plugins: [require("daisyui")],
};



