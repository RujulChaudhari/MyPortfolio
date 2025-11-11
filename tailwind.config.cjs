module.exports = {
  darkMode: 'class', // enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: "#00FFFF",
        dark: "#0a0a0f",
        light: "#e5e7eb"
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular']
      },
      backgroundImage: {
        'gradient-tech': 'linear-gradient(135deg, #0a0a0f 0%, #0f1724 100%)',
      },
      boxShadow: {
        glow: '0 6px 30px rgba(0, 255, 255, 0.12)',
      }
    },
  },
  plugins: [],
}
