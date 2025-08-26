/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#effef6',   
          100: '#8f8f8f',  
          200: '#f4b6e5',   
          300: '#ba63b7',   
          400: '#0f7450',   
          500: '#bccfca',   
        }
      }
    },
  },
  plugins: [],
}
