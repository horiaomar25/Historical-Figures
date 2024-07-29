/* eslint-disable import/no-anonymous-default-export */
import daisyui from "daisyui";

export default {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
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
    colors: {
      
    },
  },
  boxShadow: {
    
  },
  extend: {
   
  },
  fontFamily: {
    poppins: "Poppins",
    rethinksans: "Rethink Sans"
  },
  daisyui: {
    themes: [],
  },
  plugins: [daisyui],
};



