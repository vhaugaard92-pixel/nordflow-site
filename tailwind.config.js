/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      colors: {
        bg: '#08080a',
        fg: '#f6f6f8',
        muted: '#8a8a94',
        accent: '#9d6bff'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
