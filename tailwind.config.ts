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
                satm: ["sat-med"],
                satr: ["sat-reg"],
            },
            animation: {
                fadeIn: "fadein 1s ease-in-out",
                carousel: "marquee 40s linear infinite",
                blink: "blink 1.4s both infinite",
                marque: "marque 80s linear infinite",
                "marquee-vertical":
                    "marquee-vertical 20s linear infinite",
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                fadein: {
                    from: { opacity: "0.015" },
                    to: { opacity: "1" },
                },
                marquee: {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(calc(-100% - 0px))" },
                },
                blink: {
                    "0%": { opacity: "0.2" },
                    "20%": { opacity: "1" },
                    "100% ": { opacity: "0.2" },
                },
                marque: {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(calc(-100% - var(--gap)))" },
                },
                "marquee-vertical": {
                    from: { transform: "translateY(0)" },
                    to: { transform: "translateY(calc(-100% - var(--gap)))" },
                },
            },
        }
    },
    plugins: [],
};
export default config;
