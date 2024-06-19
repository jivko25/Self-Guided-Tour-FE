/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('../public/images/headerImg.jpeg')",
      },
    },
    screens: {
      phone: "393px",
      tablet: "768px",
      web: "1280px",
      smallPhone: "320px",
    },
  },
  plugins: [],
};
