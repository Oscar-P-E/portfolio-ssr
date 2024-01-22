// tailwind.config.js
import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["ProggyClean", "monospace"],
      },
      colors: {
        "neutral-850": "rgb(31, 31, 31)",
      },
    },
  },
  plugins: [],
} satisfies Config;
