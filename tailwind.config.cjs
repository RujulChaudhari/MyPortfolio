module.exports = {
  darkMode: 'class', // enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: "#22d3ee",
        dark: "#070b12",
        light: "#e5e7eb"
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular']
      },
      backgroundImage: {
        'site': 'linear-gradient(135deg, #070b12 0%, #101827 62%, #080b10 100%)',
      },
      boxShadow: {
        glow: '0 6px 30px rgba(34, 211, 238, 0.12)',
      }
    },
  },
  plugins: [],
}
