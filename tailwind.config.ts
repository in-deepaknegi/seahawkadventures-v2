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
        clar: ["clash-reg"],
        clam: ["clash-med"],
        insr: ["ins-reg"],
        insm: ["ins-med"],
        paris: ["paris-reg"],
        clarm: ["clarke-med"],
      },
    }
  },
  plugins: [],
};
export default config;
