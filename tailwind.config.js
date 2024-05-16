/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 darkMode:"class",
  theme: {
    extend: {
      colors: {
        'purple': '#CB3CFF',
        'lightpurple':'#0A1330',
        'background-color':'#081028',
        'navbarbg':'#071029',
        'textcolor':'#AEB9E1',
        'graphbg':'#0B1739',
        'lightbackground':"#F2F4F6",
        'lighttextcolor':"#2D3748",
        'whit':"#FFFFFF",
        'bordercolor':"#F8F9FC",
        'lightmodebg':"#F4F7FE"

      },
     fontFamily: {
        Montserrat: "Montserrat",
      },
      fontSize: {
        '1xl': '13px', 
        
      },
    },
  },
  plugins: [],
}

