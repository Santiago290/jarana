/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'exm':'420px',
        'sm': '512px',
        'smd': '600px',
        'md': '800px',
        'lg': '1024px',
        'lgx' : '1150px',
        'xl': '1300px',
        '2xl':'1500px',
        '3xl' : '1800px',
      },
      colors:{
        rojo:"#ff1800",
        negro :"#000000",
        plomo:"#111111",
        humo: "#7f7f7f",
        blanco:"#FFFFFF",
        textHumo:"#898989"
      },
      fontFamily: {
        'poppins': ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        'extralight': 100, 
        'light': 300,
        'medium':500,       
        'bold': 700,  
      },
      keyframes: {
        slider: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slider: 'slider 5s linear infinite',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(255,255,255,1) 10%, rgba(0,0,0,0) 50%, rgba(255,255,255,1) 90%)',
      },
    },
  },
  plugins: [],
}

