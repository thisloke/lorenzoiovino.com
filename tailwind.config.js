/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      white: "#FEFEFF",
      primary: "#FFB600",
      secondary: "#00baff",
      accent: "#0028FF",
      neutral: "#2a2009",
      "base-100": "#fffafd",
      info: "#00bade",
      success: "#00c448",
      warning: "#ff8b00",
      error: "#ff5f7d",
      transparent: "transparent",
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
    },
  },
  plugins: [],
}

