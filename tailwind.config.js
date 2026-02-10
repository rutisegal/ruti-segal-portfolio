/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
      },
      colors: {
        neon: {
          pink: '#ff007f',
          purple: '#b026ff',
          cyan: '#00f3ff',
        },
        dark: {
          900: '#030305',
          800: '#0a0a10',
          700: '#14141e',
        }
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0, 243, 255, 0.5)',
        'glow-pink': '0 0 20px rgba(255, 0, 127, 0.5)',
        'glow-purple': '0 0 20px rgba(176, 38, 255, 0.5)',
        'glow-cyan-intense': '0 0 40px rgba(0, 243, 255, 0.8), inset 0 0 20px rgba(0, 243, 255, 0.4)',
        'glow-pink-intense': '0 0 40px rgba(255, 0, 127, 0.8), inset 0 0 20px rgba(255, 0, 127, 0.4)',
        'glow-purple-intense': '0 0 40px rgba(176, 38, 255, 0.8), inset 0 0 20px rgba(176, 38, 255, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    }
  },
  plugins: [],
}