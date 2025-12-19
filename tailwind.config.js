/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#E6C260',
          500: '#D4AF37', // Classic Gold
          600: '#AA8C2C',
        },
        dark: {
          900: '#050505', // Rich Black
          800: '#121212', // Off Black
          700: '#1E1E1E',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        cinzel: ['"Cinzel"', 'serif'],
        decorative: ['"Cinzel Decorative"', 'cursive'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
      }
    },
  },
  plugins: [],
}
