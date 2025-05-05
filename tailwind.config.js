/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-purple-to-black': 'linear-gradient(to bottom, #6a0dad, #f5f5f5)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        'roboto': ['Roboto', 'system-ui'],
      },
      colors: {
        'gray-light': '#020617',
        'primaryblue': '#020617',
        'primaryblack': '#f0f0f0',
        'purple-dark': '#020617',
        'primaryBlue': '#0060ff',
        'primaryGreen': '#a1d302',
      },
      textColor: {
        'textrosa': '#0060ff',
        'textblue': '#0060ff',
      },
      animation: {
        'spin-slow-30': 'spin 30s linear infinite',
        'spin-slow-25': 'spin 25s linear infinite',
        'spin-slow-10': 'spin 10s linear infinite',
        'marquee-infinite': 'marquee 25s linear infinite',
        'bgCycle': 'bgCycle 12s infinite ease-in-out',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        bgCycle: {
          '0%': { backgroundColor: '#F5C518' },       // amarillo libro
          '25%': { backgroundColor: '#D62828' },      // rojo sabiduría
          '50%': { backgroundColor: '#3AB7F5' },      // azul cielo
          '75%': { backgroundColor: '#090E24' },      // azul oscuro de imagen
          '100%': { backgroundColor: '#F5C518' },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    require('daisyui'),
    nextui({
      themes: {
        // Puedes añadir configuraciones de temas personalizados aquí si es necesario
      },
    }),
  ],
};
