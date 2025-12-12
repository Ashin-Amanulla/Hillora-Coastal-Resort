/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-teal': '#2D9B9E',
        'light-teal': '#5EC4C7',
        'deep-teal': '#1A7577',
        'warm-accent': '#FFA500',
        'sand-beige': '#F5F1E8',
        'ocean-blue': '#0D5E73',
        'off-white': '#FAFAFA',
        'text-dark': '#212529',
        'text-light': '#6c757d',
      },
      fontFamily: {
        nunito: ['var(--font-nunito)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};


