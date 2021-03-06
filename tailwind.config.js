module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff8b37',
        secondary: '#EFEFEF',
        'primary-typography': '#000',
        'secondary-typography': 'rgba(85,85,85,.8);',
        'main-bg-color': 'rgba(0, 0, 0, 0.75)',
        'facebook-color': '#4081EC',
        'login-input-bg-color': 'rgba(60, 60, 67, 0.6)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('tw-elements/dist/plugin'),
  ],
};
