module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      roboto: ['Roboto'],
    },
    extend: {
      colors: {
        'bunker': {
          DEFAULT: '#131C21',
          '50': '#6E96AC',
          '100': '#5E8AA2',
          '200': '#4B6E82',
          '300': '#385362',
          '400': '#263741',
          '500': '#131C21',
          '600': '#000101',
          '700': '#000000',
          '800': '#000000',
          '900': '#000000'
        },
        'outer-space': {
          DEFAULT: '#2A3033',
          '50': '#98A4AA',
          '100': '#8A989F',
          '200': '#6F7F87',
          '300': '#58656B',
          '400': '#414A4F',
          '500': '#2A3033',
          '600': '#131617',
          '700': '#000000',
          '800': '#000000',
          '900': '#000000'
        },
        'ebony-clay': {
          DEFAULT: '#222F37',
          '50': '#89A5B6',
          '100': '#7999AC',
          '200': '#5C8096',
          '300': '#496576',
          '400': '#354A57',
          '500': '#222F37',
          '600': '#0F1417',
          '700': '#000000',
          '800': '#000000',
          '900': '#000000'
        },
        'primary': {
          DEFAULT: '#06AF9C',
          '50': '#9FFCF1',
          '100': '#86FBEE',
          '200': '#55F9E7',
          '300': '#24F7E0',
          '400': '#08E0C8',
          '500': '#06AF9C',
          '600': '#047E70',
          '700': '#034C44',
          '800': '#011B18',
          '900': '#000000'
        },
      },
      width: {
        '104': '24rem',
        '112': '28rem'
      },
      minWidth: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem'
      },
      minHeight: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem'
      },
      backgroundSize: {
        'fill': '100% 100%',
        'fill-x': '100% auto',
        'fill-y': 'auto 100%'
      },
      margin: {
        '-0.5': '-0.78px',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.25rem',
        '4xl': '1.5rem',
        '2xl': '2rem',
      },
      rotate: {
        '-10': '-10deg',
        '-15': '-15deg',
        '-35': '-35deg',
        '-75': '-75deg',
        '-135': '-135deg',
        '-165': '-165deg',
        '-270': '-270deg',
        '15': '15deg',
        '35': '35deg',
        '75': '75deg',
        '135': '135deg',
        '270': '270deg'
      },
      spacing: {
         '22': '5.5rem',
      },
      letterSpacing: {
        'custom': '5em'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
     require('tailwindcss-animatecss')({
      settings: {
          animatedSpeed: 1000,
          heartBeatSpeed: 1000,
          hingeSpeed: 2000,
          bounceInSpeed: 750,
          bounceOutSpeed: 750,
          animationDelaySpeed: 1000
      },
      variants: ['responsive', 'hover', 'reduced-motion'],
    }),
  ],
}
