import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                oggm: ["ogg-med"],
                oggr: ["ogg-reg"],
                insr: ["ins-reg"],
                insm: ["ins-med"],
                paris: ["paris"],
            },
            colors: {
                'dusk': {
                    100: '#f8f9fa',
                    200: '#f6f7f9',
                    300: '#f2f4f6',
                    400: '#edeff3',
                    500: '#e6e9ee',
                    600: '#e1e4eb',
                    700: '#dadee6',
                    800: '#d1d6e0',
                    900: '#c1c8d6',
                },
                'dawn': {
                    100: '#cccccc',
                    200: '#b3b3b3',
                    300: '#999999',
                    400: '#727272',
                    500: '#666666',
                    600: '#4c4c4c',
                    700: '#333333',
                    800: '#262626',
                    900: '#191919',
                    950: '#0c0c0c',
                },
            },
        }
    },
    plugins: [],
};
export default config;
