import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const themer = require("tailwindcss-themer");

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      /* breakpoints */
      screens: {
        ssm: "400px",
      },
      /* fonts */
      fontFamily: {
        "open-sans": "'Open Sans'",
      },

      /* animations */
      keyframes: {
        "loading-pin": {
          "0%, 40%, 100%": { height: "0.5em", "background-color": "#282336" },
          "20%": { height: "1em", "background-color": "white" },
        },
      },
      animation: { "loading-pin": "loading-pin 1.8s ease-in-out infinite" },
    }
  },
  plugins: [
    require("tailwind-scrollbar"),
    plugin(({ addVariant }) => {
      addVariant("dir-neutral", "[dir] &");
    }),
  ]
}

export default config;