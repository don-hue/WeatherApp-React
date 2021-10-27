module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      textColor: {
        primary: "#adff2f"
      },
      
      spacing: {
        1: "0.5rem",
        2: "0.75rem",
        3: "1rem",
        4: "1.5rem",
        5: "2rem",
        6: "3rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "4rem",
        xl: "1.5rem",
      },
      backgroundImage: {
        mainBackground: "url(/src/Styles/Images/background.jpeg)",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#adff2f",
      }),
      transitionDuration:{
        '400':'400ms',
        '600':'600ms',
        '800':'00ms',
        '900':'900ms',
        '1100':'1100ms', 
        '1200':'1200ms',
        '1300':'1300ms', 
        '1500':'1500ms', 
        '1600':'1600ms',
        '1700':'1700ms', 
        '1800':'1800ms',
        '1900':'1900ms',
        '2000':'2000ms',
        '2100':'2100ms',
        '2200': '2200ms', 
        '4000': '4000ms',

      }
    },
    outline: {
      mine: '1px solid white'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
