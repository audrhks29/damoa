import type { Config, } from "tailwindcss";

const config: Config = {
  darkMode: 'selector',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "dark-100": "#121212",
      "dark-200": "#282828",
      "dark-300": "#3f3f3f",
      "dark-400": "#575757"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    ({ addUtilities }: any) => {
      addUtilities({
        ".navigation_list": {
          "@apply w-36 text-center cursor-pointer hover:bg-dark-300 hover:transition-all duration-500":
            "",
        },
      })
    }
  ],
};
export default config;
