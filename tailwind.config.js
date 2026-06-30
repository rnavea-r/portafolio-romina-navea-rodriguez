/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        'surface': '#161616',
        'surface-warm': '#111010',
        'on-surface': '#F5F5F5',
        'on-surface-variant': 'rgba(245,245,245,0.55)',
        'primary': '#F5F5F5',
        'outline': 'rgba(255,255,255,0.10)',
        'accent-blue': '#5B9CF6',
        'accent-green': '#4ADE80',
      },
      spacing: {
        'margin-page': 'clamp(1.5rem, 6vw, 6rem)',
        'section-gap': 'clamp(5rem, 12vw, 10rem)',
      }
    },
  },
  plugins: [],
}
