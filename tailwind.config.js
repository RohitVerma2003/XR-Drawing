/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",              // Root app file
    "./src/**/*.{js,jsx,ts,tsx}",         // All files inside src/, including components and screens
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors : {
        'custom-white' : '#F4EEFF',
        'custom-gray' : '#DCD6F7',
        'custom-light-purple' : '#A6B1E1',
        'custom-purple' : '#424874'
      },
      fontFamily: {
        'sketch': ['CabinSketch-Regular'], // Default font
        'sketch-bold': ['CabinSketch-Bold'], // Bold variant
      },
    },
  },
  plugins: [],
};
