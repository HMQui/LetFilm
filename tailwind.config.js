/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    1350: '#000b08',
                    1250: '#00140d',
                    1150: '#011a14',
                    1050: '#01281d',
                    950: '#022c22',
                    900: '#064e3b',
                    800: '#065f46',
                    700: '#047857',
                    100: '#d1fae5',
                    50: '#ecfdf5',
                },
            },
            spacing: {
                'g-0.5': '4.166667%', // Half column
                'g-1': '8.333333%', // 1 column
                'g-1.5': '12.5%', // 1.5 columns
                'g-2': '16.666667%', // 2 columns
                'g-2.5': '20.833333%', // 2.5 columns
                'g-3': '25%', // 3 columns
                'g-3.5': '29.166667%', // 3.5 columns
                'g-4': '33.333333%', // 4 columns
                'g-4.5': '37.5%', // 4.5 columns
                'g-5': '41.666667%', // 5 columns
                'g-5.5': '45.833333%', // 5.5 columns
                'g-6': '50%', // 6 columns
                'g-6.5': '54.166667%', // 6.5 columns
                'g-7': '58.333333%', // 7 columns
                'g-7.5': '62.5%', // 7.5 columns
                'g-8': '66.666667%', // 8 columns
                'g-8.5': '70.833333%', // 8.5 columns
                'g-9': '75%', // 9 columns
                'g-9.5': '79.166667%', // 9.5 columns
                'g-10': '83.333333%', // 10 columns
                'g-10.5': '87.5%', // 10.5 columns
                'g-11': '91.666667%', // 11 columns
                'g-11.5': '95.833333%', // 11.5 columns
                'g-12': '100%', // 12 columns (full width)
            },
            screens: {
                'mobile': '360px',
            },
            blur: {
                'xs': '2px'
            }
        },
    },
    darkMode: 'class',
    plugins: [],
};
