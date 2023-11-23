/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      mixBlendMode: {
        multiply: 'multiply',
        screen: 'screen',
        overlay: 'overlay',
        luminosity: 'luminosity',
        hue: 'hue',
        darken: 'darken',
        light: 'light',
        softlight: 'soft-light',
        colorburn: 'color-burn',
      },
      animation: {
        loopL: 'loopText 4s linear infinite',
      },
      keyframes: {
        loopText: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      fontFamily: {
        'adventpro-small': ['adventpro-small'],
        'adventpro-medium': ['adventpro-medium'],
        'adventpro-semibold': ['adventpro-semibold'],
        capsuula: ['capsuula'],
        blazium: ['blazium'],
        'boisu-fill': ['boisu-fill'],
        'boisu-stroke': ['boisu-stroke'],
        bpdots1: ['bpdots1'],
        bpdots2: ['bpdots2'],
        hhenum: ['hhenum'],
        'iawriter-reg': ['iawriter-reg'],
        'iawriter-it': ['iawriter-it'],
        immortal: ['immortal'],
        'notcourier-bold': ['notcourier-bold'],
        notcourier: ['notcourier'],
        'impactLabel-rev': ['impactLabel-rev'],
        impactLabel: ['impactLabel'],
        bonveno: ['bonveno'],
        calabrese: ['calabrese'],
        mluvka: ['mluvka'],
        'poiret-reg': ['poiret-reg'],
        snippet: ['snippet'],
        voltaire: ['voltaire'],
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const blendModes = theme('mixBlendMode');
      const utilities = Object.keys(blendModes).map((key) => {
        return {
          [`.blend-${key}`]: {
            mixBlendMode: blendModes[key],
          },
        };
      });
      addUtilities(utilities, ['responsive', 'hover']);
    },
  ],
};
