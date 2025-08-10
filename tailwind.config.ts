import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#e3e3e3',
        sky: '#328bff',
        lime: '#21b13b',
        coral: '#ff806f',
        canvas: '#000000'
      }
    }
  },
  plugins: []
} satisfies Config


