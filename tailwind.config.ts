import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        clinical: {
          50: '#f3f8f8',
          100: '#d8ebeb',
          200: '#add8da',
          300: '#77bcc1',
          400: '#4898a0',
          500: '#2f7d85',
          600: '#2a656d',
          700: '#265259',
          800: '#25444a',
          900: '#233b40'
        }
      },
      boxShadow: {
        soft: '0 8px 30px rgba(15, 23, 42, 0.07)'
      }
    }
  },
  plugins: []
} satisfies Config;
