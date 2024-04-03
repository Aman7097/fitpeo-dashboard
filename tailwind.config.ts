import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          // Customize it on globals.css :root
          50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
          // ... (other color values)
        },
        dark: '#222222',
      },
      keyframes: {
        flicker: {
          // ... (flicker keyframes)
        },
        shimmer: {
          // ... (shimmer keyframes)
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
      noScroll: {
        scrollbar: {
          display: 'none',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
