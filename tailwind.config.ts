import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        manrope: ['Manrope', ...fontFamily.sans], // Adding Manrope
        firaCode: ['Fira Code', ...fontFamily.mono], // Adding Fira Code
      },
      
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
} satisfies Config;
