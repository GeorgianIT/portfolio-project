/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mRoad': "url('../src/pages/components/assetsTravelApp/photoshop.png')",
        'photoshop': "url('../src/pages/components/assetsTravelApp/final2.png')",
        'bridge': "url('../src/pages/components/assetsTravelApp/bridge.jpg')",
        'bookBg' : "url('../src/pages/components/booksapp/booksAssets/bookBack.jpg')"
      },
    },
  },
  plugins: [],
  screens: {
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
  },
  darkMode: 'class',
}

