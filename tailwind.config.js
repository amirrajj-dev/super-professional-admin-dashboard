/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dana-demi' : 'dana-demi',
        'dana-medium' : 'dana-medium',
        'dana-regular' : 'dana-regular',
      }
    },
  },
  plugins: [],
}