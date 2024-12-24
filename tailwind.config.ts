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
                monr: ["mon-reg"],
                monm: ["mon-med"],

                paris: ["paris"],
            },
        }
    },
    plugins: [],
};
export default config;
