/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
    ],
  theme: {
    extend: {
      colors: {
        'white-100': '#F6F6F3',

        'gray-50': '#E2E8F0',
        'gray-100': '#D9D9D9',
        'gray-200': '#CFD3D4',
        'gray-300': '#ABAFB1',
        'gray-400': '#5E6366',
        'gray-950': '#0F172A',

        'purple-100': '#EFEDFA',
        'purple-200': '#A068FD',
        'purple-300': '#570EF2',
        'purple-400': '#3B0BA1',

        'green-50': '#13FAA6',
        'green-100': '#32936F',

        'red-100': '#EF4444',

        'blue-100': '#4B6BFB',
      }
    },
  },
  plugins: [],
}

