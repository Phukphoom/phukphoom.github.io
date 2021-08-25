module.exports = {
    purge: false,
    darkMode: 'class',
    theme: {
        nightwind: {
            transitionDuration: '300ms',
            colorClasses: ['gradient', 'ring', 'ring-offset', 'divide', 'placeholder'],
        },
        extend: {
            keyframes: {
                'fade-in': {
                    '0%': {
                        opacity: '0',
                    },
                    '100%': {
                        opacity: '1',
                    },
                },
                'fade-out': {
                    '0%': {
                        opacity: '1',
                    },
                    '100%': {
                        opacity: '0',
                    },
                },
                'wiggle-move': {
                    '0%,100%': {
                        transform: 'translateX(-0.5px) translateY(-0.5px)',
                    },
                    '50%': {
                        transform: 'translateX(0.5px) translateY(0.5px)',
                    },
                },
            },
            animation: {
                'fade-in': 'fade-in 0.5s ease-in-out',
                'fade-out': 'fade-out 0.5s ease-in-out',
                'wiggle-move': 'wiggle-move 2s ease-in-out infinite',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('nightwind')],
};
