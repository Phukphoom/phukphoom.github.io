module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class',
    theme: {
        nightwind: {
            transitionDuration: '300ms',
            colorClasses: ['gradient', 'ring', 'ring-offset', 'divide', 'placeholder'],
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [require('nightwind')],
};
