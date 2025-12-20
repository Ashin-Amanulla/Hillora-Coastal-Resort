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
        'primary-teal': '#358A99',
        'light-teal': '#5EC4C7',
        'deep-teal': '#2d7a85',
        'warm-accent': '#C9A962',
        'gold': '#C9A962',
        'gold-light': '#E8D5A3',
        'sand-beige': '#F5F1E8',
        'ocean-blue': '#0D5E73',
        'off-white': '#FAFAFA',
        'text-dark': '#212529',
        'text-light': '#6c757d',
      },
      fontFamily: {
        nunito: ['var(--font-nunito)', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 25px 50px -12px rgba(53, 138, 153, 0.25)',
        'gold': '0 10px 40px -10px rgba(201, 169, 98, 0.35)',
      },
    },
  },
  plugins: [],
};


