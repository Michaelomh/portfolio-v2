import type { Config } from 'tailwindcss'

const { fontFamily } = require('tailwindcss/defaultTheme')

const config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    screens: {
      // screen are overriden (no xs:, sm:, md:, lg:, xl:)
      // mobile (< 768px)
      // tablet (768px - 1280px)
      tablet: '768px',
      // desktop (> 1280px)
      desktop: '1280px',
    },
    fontSize: {
      xs: ['16px', { lineHeight: '24px' }],
      sm: ['18px', { lineHeight: '28px' }],
      lg: ['20px', { lineHeight: '28px' }],
      xl: ['28px', { lineHeight: '36px' }],
      '2xl': ['36px', { lineHeight: '48px' }],
      '3xl': ['48px', { lineHeight: '56px' }],
      '4xl': ['56px', { lineHeight: '64px' }],
      '5xl': ['80px', { lineHeight: '80px' }],
    },
    extend: {
      boxShadow: {
        'new-sm': '0px 2px 4px 0px rgba(11, 10, 55, 0.15)',
        'new-lg': '0px 8px 20px 0px rgba(18, 16, 99, 0.06)',
      },
      fontFamily: {
        sans: ['var(--font-urbanist)', ...fontFamily.sans],
        heading: ['var(--font-jetbrainsMono)', ...fontFamily.sans],
        mono: ['var(--font-rubik-mono-one)', ...fontFamily.mono],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
