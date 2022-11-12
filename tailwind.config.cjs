/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url('/public/image1.png')",
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui', ],
        'serif': ['ui-serif', 'Georgia', ],
        'mono': ['ui-monospace', 'SFMono-Regular',],
        'display': ['Oswald', ],
        "poppin": ['Poppins', 'sans-serif']

      }
    },
  },
  plugins: [],
}
