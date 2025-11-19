import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular'],
      },
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#dce7ff',
          200: '#b9ceff',
          300: '#8daeff',
          400: '#5f84ff',
          500: '#345cff',
          600: '#1e3edb',
          700: '#152ea9',
          800: '#101f77',
          900: '#0a134d',
        },
      },
      boxShadow: {
        glow: '0 10px 60px rgba(52, 92, 255, 0.3)',
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)',
        'grid-dark':
          'linear-gradient(rgba(226,232,240,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(226,232,240,0.08) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
    },
  },
  plugins: [forms],
}
