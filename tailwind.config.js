/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px'
    },
    colors: {
      'red': '#F5433D',
      'green': '#A3EACB',
      'violet': '#661AEE',
      'white': '#FFFFFF',
      'snow': '#FFFAFA',
      'gray': "#A3A19F",
      'neutral-light': {
        100: '#F2F2F3',
        200: '#BAAFCF',
        300: '#0E1D54',
        400: '#262338'
      },
      'neutral-dark': {
        100: '#F7F3EA',
        200: '#60798A',
        300: '#15273C',
        400: '#1E2C33',
        500: '#020408'
      }
    },
    spacing: {
      4: '4px',
      8: '8px',
      12: '12px',
      16: '16px',
      24: '24px',
      32: '32px',
      48: '48px',
      64: '64px',
      96: '96px',
      128: '128px',
      192: '192px'
    },
    borderRadius: {
      'sm': '.5rem',
      'lg': '1rem',
      'full': '9999px'
    },
    extend: {
      fontFamily: {
        'axiforma': 'Axiforma',
        'quicksand': 'Quicksand'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.text-10': {
          'font-size': 'var(--text-10)',
          'line-height': '12px',
        },
        '.text-12': {
          'font-size': 'var(--text-12)',
          'line-height': '16px',
        },
        '.text-14': {
          'font-size': 'var(--text-14)',
          'line-height': '20px',
        },
        '.text-16': {
          'font-size': 'var(--text-16)',
          'line-height': '24px',
        },
        '.text-18': {
          'font-size': 'var(--text-18)',
          'line-height': '28px',
        },

        '.text-heading-20': {
          'font-size': 'var(--text-20)',
          'line-height': '28px',
        },
        '.text-heading-24': {
          'font-size': 'var(--text-24)',
          'line-height': '32px',
        },
        '.text-heading-28': {
          'font-size': 'var(--text-28)',
          'line-height': '36px',
        },
        '.text-heading-32': {
          'font-size': 'var(--text-32)',
          'line-height': '40px',
        },
        '.text-heading-40': {
          'font-size': 'var(--text-40)',
          'line-height': '48px',
        },
        '.text-heading-48': {
          'font-size': 'var(--text-48)',
          'line-height': '56px',
        },
        '.text-heading-56': {
          'font-size': 'var(--text-56)',
          'line-height': '64px',
        }
      })
    }),
  ],
}

