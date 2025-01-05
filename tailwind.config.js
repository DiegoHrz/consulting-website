/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "anna-turquoise":'#D7E2DC',
        "anna-gray":"#DFDFDF",
        "anna-brown":"#4D4D4D",
        "anna-blue":'#8B97A5',
        "anna-white":"#F7F7F7",
      },
    },
  },
  plugins: [],
}