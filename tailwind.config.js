/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
const rotateX = plugin(function ({ addUtilities }) {
    addUtilities({
        '.rotate-y-180': {
            transform: 'rotateY(180deg)',
        },
    });
});
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
        center: true,
        padding: '1rem',
    },
    screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1142px',
    },
    // fontFamily: {
    //     mulish: ['Mulish', 'sans-serif' ] ,
    // },
    colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        black: '#08111F',
        primary: '#5C96FD',  // '#47BDFF',
        secondary: '#6C4FFE',  // '#B476E5',
        gray: {
            DEFAULT: '#7780A1',
            dark: '#1C2331',
        },
    },
    extend: {
        typography: ({ theme }) => ({
            DEFAULT: {
                css: {
                    color: theme('colors.gray'),
                    fontSize: '1.125rem',
                },
            },
        }),
        fontFamily: {
            mulish: ['var(--font-mulish)'],
           
          },
     
    },
},
// eslint-disable-next-line no-undef
plugins: [
    // require('@tailwindcss/line-clamp'), 
    rotateX,require('@tailwindcss/typography'),
    // require("tw-elements/dist/plugin.cjs")
],
}
