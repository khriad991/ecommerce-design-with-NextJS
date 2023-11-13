/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '448px',
      'md': '768px',
      'lg': '1324px',
    },
    colors:{
      yellow:"#e7ab3c",
      black:"#252525",
      blackMd:"#111111",
      blackLg:"#3b3b3b",
      gray :'#636363',
      white:"#ffffff",
      transparent:"transparent"

    },
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
