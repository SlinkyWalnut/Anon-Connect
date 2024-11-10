/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/component/**/*.{js,jsx,ts,tsx}",
    // Add other directories here as needed
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette
        primary: '#FF5733', // Example primary color
        secondary: '#33FF57',
        accent: '#3357FF',
        'custom-gray': '#B0BEC5', // Example custom gray color
        dark: '#212121',
        light: '#f0f0f0',
        'light-blue': '#a3c9fc', // New light blue color
        'peach': '#ffbc89', // New peachy background color
        'warm-gray': '#d3d3d3', // New warm gray color
        'bright-blue': '#1e40af', // New bright blue color
      },
      boxShadow: {
        'custom-light': '0px 4px 8px rgba(0, 0, 0, 0.2)', // Light shadow
        'custom-dark': '0px 4px 8px rgba(0, 0, 0, 0.4)', // Darker shadow
      },
      spacing: {
        '72': '18rem', // Custom spacing for large elements
        '84': '21rem', // Custom spacing for larger elements
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Custom sans-serif font
        serif: ['Merriweather', 'serif'], // Custom serif font
      },
    },
  },
  plugins: [],
}


