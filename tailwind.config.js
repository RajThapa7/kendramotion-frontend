/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-section": "url('/src/assets/kendra.jpg')",
      },
    },
  },
  plugins: [],
  // set background image url
};
