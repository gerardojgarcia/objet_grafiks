/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	 "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      backgroundImage: {
        'blog-card1': "url('./public/pexels-eberhard-grossgasteiger-1670187.jpg')",
        'blog-card2': "url('./public/pexels-eberhard-grossgasteiger-1699030.jpg')",
      }
    },
  },
  plugins: [],
}
