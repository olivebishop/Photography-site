/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'rotate-45',
    '-rotate-45',
    'absolute',
    'h-56'
  ],
  theme: {
    boxShadow: {
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    },
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      'extra-bold': 800,
      black: 900,
    },
    fonts: {
      sans: [
        'system-ui',
        'BlinkMacSystemFont',
        '-apple-system',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
        'Alfa Slab One',
      ],
      serif: [
        'Constantia',
        'Lucida Bright',
        'Lucidabright',
        'Lucida Serif',
        'Lucida',
        'DejaVu Serif',
        'Bitstream Vera Serif',
        'Liberation Serif',
        'Georgia',
        'serif',
      ],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '7rem',
      '15xl': '10rem',
    },
  
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white':'white',
      'transparent':'transparent',
      'black':'black',
      'red':'red',
      'mono': '#dc2626',
      'wind':  '#27272A',
      'leaf': '#a3e635',
      'grade': '#ff001f',
      'offwhite':'#D4D4D8',
         'offgreen'  :       '#00cba9',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      spacing: {
        '0': '0px',
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
        '7': '90px',
        '20': '180px',
        '18': '170px',
        '25': '300px',
        '30': '500px',
        '35': '700px',
      },
    extend: {
      padding: {
        '5px': '5px',
        
      },
      outlineWidth:{
        5: '5px',
      },
      backgroundImage:{
        'graphy': "url('page/8f1115f1961d3d844ec39d9d528a6bc1--african-tribal-makeup-african-jewelry.jpg')",

     },
      height: {
        '20': '32rem',
        '19': '26rem',
        '25': '35rem',
        '10': '15rem',
        '16': '25rem',
        '8': '15rem'
      },
     
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '12px',
      },
      margin: {
        '5px': '5px',
        '10px': '10px',
        '14px': '14px',
        '13px': '13px',
        '17px': '17px',
        '28px': '28px',
        '12px': '12px',
      },
      maxWidth: {
        'xs': '20rem',
        'sm': '30rem',
        'md': '40rem',
        'lg': '50rem',
        'xl': '60rem',
        '2xl': '70rem',
        '3xl': '80rem',
        '4xl': '90rem',
        '5xl': '100rem',
        '10xl': '170rem',
        'full': '100%',
      },
      
    },
  },
  plugins: [

    
  ],
}

