/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#F2E3C6',
          DEFAULT: '#E6C88F',
          dark: '#D4B676',
        },
        emerald: {
          light: '#14B8A6',
          DEFAULT: '#0D9488',
          dark: '#0F766E',
        },
        teal: {
          light: '#5EEAD4',
          DEFAULT: '#14B8A6',
          dark: '#0F766E',
        },
        success: {
          light: '#86EFAC',
          DEFAULT: '#22C55E',
          dark: '#16A34A',
        },
        warning: {
          light: '#FDE68A',
          DEFAULT: '#F59E0B',
          dark: '#D97706',
        },
        error: {
          light: '#FECACA',
          DEFAULT: '#EF4444',
          dark: '#DC2626',
        },
      },
      fontFamily: {
        primary: ['Playfair Display', 'serif'],
        arabic: ['Amiri', 'serif'],
        body: ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'pattern-geometric': "url('/patterns/geometric.svg')",
        'pattern-arabesque': "url('/patterns/arabesque.svg')",
      },
    },
  },
  plugins: [],
};