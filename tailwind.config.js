/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Georgia', 'Times New Roman', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'ethiopic': ['Noto Sans Ethiopic', 'serif'],
      },
      colors: {
        // Earth tones for Ethiopian landscapes
        earth: {
          50: '#fef7f0',
          100: '#fdeee0',
          200: '#fad5b8',
          300: '#f6b888',
          400: '#f19356',
          500: '#ed7530',
          600: '#de5a1f',
          700: '#b8451a',
          800: '#93391c',
          900: '#1a0f0a',
        },
        // Ethiopian flag colors
        ethiopian: {
          green: '#009639',
          yellow: '#FFCD00', 
          red: '#DA020E',
          blue: '#0F47AF',
        },
        // Traditional Gojjam colors
        gojjam: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        // Traditional Ethiopian earth tones
        habesha: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#d4b5a0',
          400: '#c19a7e',
          500: '#a67c52',
          600: '#8b5a3c',
          700: '#6d4428',
          800: '#4a2c1a',
          900: '#2d1a0f',
        },
      },
      backgroundImage: {
        'ethiopian-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23eab308\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M30 30l15-15v30l-15-15zm0 0l-15 15h30l-15-15z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        'gojjam-textile': "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23ca8a04\" fill-opacity=\"0.03\"%3E%3Cpath d=\"M20 20l10-10v20l-10-10zm0 0l-10 10h20l-10-10z\"/%3E%3C/g%3E%3C/svg%3E')",
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}