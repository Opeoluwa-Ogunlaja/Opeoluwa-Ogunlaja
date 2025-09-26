/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      fold: '352px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      red: '#F5433D',
      green: '#A3EACB',
      violet: '#661AEE',
      white: '#FFFFFF',
      snow: '#FFFAFA',
      gray: '#A3A19F',
      neutral: {
        1100: '#F2F2F3',
        1200: '#BAAFCF',
        1300: '#0E1D54',
        1400: '#262338',
        9100: '#F7F3EA',
        9200: '#60798A',
        9300: '#15273C',
        9400: '#1E2C33',
        9500: '#020408'
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
      sm: '.5rem',
      lg: '1rem',
      full: '9999px'
    },
    extend: {
      fontFamily: {
        axiforma: 'Axiforma',
        quicksand: 'Quicksand'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        spotlight: {
          '0%': {
            opacity: '0',
            transform: 'translate(-72%, -62%) scale(0.5)'
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%,-40%) scale(1)'
          }
        },
        shimmer: {
          from: {
            backgroundPosition: '0 0'
          },
          to: {
            backgroundPosition: '-200% 0'
          }
        },
        moveHorizontal: {
          '0%': {
            transform: 'translateX(-50%) translateY(-10%)'
          },
          '50%': {
            transform: 'translateX(50%) translateY(10%)'
          },
          '100%': {
            transform: 'translateX(-50%) translateY(-10%)'
          }
        },
        moveInCircle: {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '50%': {
            transform: 'rotate(180deg)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          }
        },
        moveVertical: {
          '0%': {
            transform: 'translateY(-50%)'
          },
          '50%': {
            transform: 'translateY(50%)'
          },
          '100%': {
            transform: 'translateY(-50%)'
          }
        },
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        spotlight: 'spotlight 2s ease .75s 1 forwards',
        shimmer: 'shimmer 2s linear infinite',
        first: 'moveVertical 30s ease infinite',
        second: 'moveInCircle 20s reverse infinite',
        third: 'moveInCircle 40s linear infinite',
        fourth: 'moveHorizontal 40s ease infinite',
        fifth: 'moveInCircle 20s ease infinite',
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite'
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/forms'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.text-10': {
          'font-size': 'var(--text-10)',
          'line-height': '12px'
        },
        '.text-12': {
          'font-size': 'var(--text-12)',
          'line-height': '16px'
        },
        '.text-14': {
          'font-size': 'var(--text-14)',
          'line-height': '20px'
        },
        '.text-16': {
          'font-size': 'var(--text-16)',
          'line-height': '24px'
        },
        '.text-18': {
          'font-size': 'var(--text-18)',
          'line-height': '28px'
        },

        '.text-heading-20': {
          'font-size': 'var(--text-20)',
          'line-height': '28px'
        },
        '.text-heading-24': {
          'font-size': 'var(--text-24)',
          'line-height': '32px'
        },
        '.text-heading-28': {
          'font-size': 'var(--text-28)',
          'line-height': '36px'
        },
        '.text-heading-32': {
          'font-size': 'var(--text-32)',
          'line-height': '40px'
        },
        '.text-heading-40': {
          'font-size': 'var(--text-40)',
          'line-height': '48px'
        },
        '.text-heading-48': {
          'font-size': 'var(--text-48)',
          'line-height': '56px'
        },
        '.text-heading-56': {
          'font-size': 'var(--text-56)',
          'line-height': '64px'
        }
      })
    })
  ]
}
