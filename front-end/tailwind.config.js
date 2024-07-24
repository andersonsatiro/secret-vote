/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
    ],
  theme: {
    extend: {
      colors: {
        'white100': '#F6F6F3',

        'gray50': '#E2E8F0',
        'gray100': '#D9D9D9',
        'gray200': '#CFD3D4',
        'gray300': '#ABAFB1',
        'gray400': '#5E6366',
        'gray500': '#333333',
        'gray950': '#0F172A',

        'purple100': '#EFEDFA',
        'purple200': '#A068FD',
        'purple300': '#570EF2',
        'purple400': '#3B0BA1',

        'green50': '#13FAA6',
        'green100': '#32936F',

        'red100': '#EF4444',

        'blue100': '#4B6BFB',
      },

      boxShadow: {
        'modal': '0px 4px 14px rgba(0, 0, 0, 0.1)',
        'box-admin': '0px 1px 4px rgba(0, 0, 0, 0.16)',
      }
    },
  },
  plugins: [],
}

