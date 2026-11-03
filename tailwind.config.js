/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cinema: {
          bg: '#0B0B0D',
          surface: '#141418',
          card: '#181820',
          border: '#26262E',
          red: '#E5383B',
          redDark: '#A71D2A',
          amber: '#F4A261',
          text: '#EDE8DF',
          muted: '#8E8A83',
          faint: '#4A4844'
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Anton', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace']
      },
      animation: {
        'pulse-rec': 'pulseRec 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shutter-flash': 'shutterFlash 0.35s ease-out forwards',
        'grain': 'grain 8s steps(10) infinite',
      },
      keyframes: {
        pulseRec: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.2', transform: 'scale(0.85)' }
        },
        shutterFlash: {
          '0%': { opacity: '0.9', backgroundColor: '#FFFFFF' },
          '100%': { opacity: '0', backgroundColor: 'transparent' }
        }
      }
    },
  },
  plugins: [],
}
