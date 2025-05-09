import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "gradient-x": "gradient 15s ease infinite",
        "fade-in": "fadeIn 1s ease-out",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(110deg, #1f1f1f 50%, #ffffff 50%)",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
    fontFamily: {
      BIZMincho: ["BIZ UDPMincho", "serif"],
    },
  },
  plugins: [],
};
export default config;
