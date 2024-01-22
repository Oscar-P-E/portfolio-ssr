import { type Config } from "tailwindcss";
// import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Concourse T4", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["Advocate C51", "sans-serif"],
        "sans-extralight": [
          "Concourse T2",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        "heading-wider": ["Advocate C63", "sans-serif"],
        mono: ["ProggyClean Nerd Font", "ui-monospace", "monospace"],
      },
      colors: {
        "neutral-850": "rgb(31, 31, 31)",
      },
    },
  },
  plugins: [],
} satisfies Config;
