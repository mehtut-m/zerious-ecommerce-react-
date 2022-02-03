module.exports = {
  content: ['./src/**/*.{html,js,jsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#ff8b37',
        'main-bg-color': 'rgba(0, 0, 0, 0.75)',
        'facebook-color': '#4081EC',
        'login-input-bg-color': 'rgba(60, 60, 67, 0.6)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tw-elements/dist/plugin'),
    require('flowbite/plugin'),
  ],
};
