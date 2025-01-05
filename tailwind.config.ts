import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "anna-1":'#D7E2DC',
        "anna-2":'#FFE4D9',
        "anna-3":'#FFCAD4',
        "anna-4":'#F4ACB8',
        "anna-5":'#9F8189',
      },
    },
  },
  plugins: [],
} satisfies Config;
