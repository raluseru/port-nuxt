/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
        colors: {
            'regal-blue': '#A4EBF3',
            casal: {
                50: '#ecfffe',
                100: '#cffefd',
                200: '#a5fcfc',
                300: '#67f7f9',
                400: '#22e9ee',
                500: '#06ccd4',
                600: '#08a3b2',
                700: '#0e8290',
                800: '#156875',
                900: '#165764',
                950: '#083944',
            },
            scooter: {
                50: '#ecfeff',
                100: '#cff9fe',
                200: '#a5f1fc',
                300: '#67e4f9',
                400: '#22ceee',
                500: '#06bbe06e',
                600: '#088db2',
                700: '#0e7190',
                800: '#155c75',
                900: '#164c63',
                950: '#083244',
            },
        },
    },
},
darkMode: ['selector'],
plugins: [],
}

