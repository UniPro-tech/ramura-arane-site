import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
            'custom-gradient': 'linear-gradient(110deg, #1f1f1f 50%, #ffffff 50%)',
          },
    },
    fontFamily: {
      BIZMincho: ["BIZ UDPMincho", "serif"],
    },
  },
  plugins: [],
};
export default config;
