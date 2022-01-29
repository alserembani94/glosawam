const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#F5F5F5",
      }
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': {
          fontSize: theme('fontSize.2xl'),
          fontWeight: theme('fontWeight.bold'),
          color: theme('colors.slate'),
        },
        'h2': {
          fontSize: theme('fontSize.xl'),
          fontWeight: theme('fontWeight.bold'),
          color: theme('colors.slate'),
        },
        'h3': {
          fontSize: theme('fontSize.lg'),
          fontWeight: theme('fontWeight.bold'),
          color: theme('colors.slate'),
        },
        'h4': {
          fontSize: theme('fontSize.base'),
          fontWeight: theme('fontWeight.bold'),
          color: theme('colors.slate'),
        },
        'h5': {
          fontSize: theme('fontSize.sm'),
          fontWeight: theme('fontWeight.bold'),
          color: theme('colors.slate'),
        },
        'h6': {
          fontSize: theme('fontSize.xs'),
          fontWeight: theme('fontWeight.bold'),
          color: theme('colors.slate'),
        },
        'p': {
          fontSize: theme('fontSize.base'),
          color: theme('colors.slate'),
        },
        'a': {
          color: theme('colors.slate'),
        },
        'a:hover': {
          color: theme('colors.slate'),
        },
        'a:focus': {
          color: theme('colors.slate'),
        },
        'a:active': {
          color: theme('colors.slate'),
        },
      });
    }),
  ],
}
