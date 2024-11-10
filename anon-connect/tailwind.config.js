/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/component/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
      // Custom color palette
      primary: '#FF5733', // Add custom color names and values
      secondary: '#33FF57',
      accent: '#3357FF',
      'custom-gray': '#B0BEC5', // Example of a custom gray color
      dark: '#212121',
      light: '#f0f0f0',
    },
    },
  },
  plugins: [],
}

