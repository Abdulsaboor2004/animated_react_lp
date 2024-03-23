/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        dark: '#212121',
        dim_white: '#F1F1F1',
      },
    },
    fontFamily: {
      Paragraph: ['Pathway Extreme', 'sans-serif'],
      Paragraph2: ['Schibsted Grotesk', 'sans-serif'],
      Heading: ['Fjalla One', 'sans-serif'],
      NeueMontreal: ['NeueMontreal', 'sans-serif'],
    },
    screens: {
      xs: '1700px',
      ss: '1200px',
      sm: '1060px',
      md: '768px',
      lg: '620px',
      xl: '280px',
    },
  },
  plugins: [],
};

// BreakPoint Values are assigned in Descending Order cuz i made this on Desktop First 👆🏻
