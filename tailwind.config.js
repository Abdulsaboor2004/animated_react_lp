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
      NeueMontreal: ['NeueMontreal', 'sans-serif']
    },
  },
  plugins: [],
};
