/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["../**/*.{razor,html,cshtml,scss}"],
    theme: {
        container: {
            center: true,
        },
        extend: {
            fontFamily: {
                gemunu: ['Gemunu Libre', 'serif'],
                open: ['Open Sans', 'serif'],
            },
            colors: {
                'gega-red': '#BC1A45',
                'gega-melon': '#FFD369',
                'gega-grey': '#DDDDDD',
                'gega-white': '#F7F7F7',
            }
        },
    },
    plugins: [],
}

