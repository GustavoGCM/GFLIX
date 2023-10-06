import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      dropShadow: {
        lg: "0 10px 8px rgba(255, 255, 255, 0.40)",
      },
      colors: {
        blue: {
          500: "#667eb9",
        },
        gray: {
          300: "#141111",
          400: "#1E1B1B",
          500: "#D2D2D2",
          600: "#9CA3AF",
          700: "#4B4C50",
          800: "#312D2D",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
