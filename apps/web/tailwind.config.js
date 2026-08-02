/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        stout: "#170f0b",
        malt: "#f3b449",
        amber: "#d76b2b",
        foam: "#fff5df",
        hop: "#5b8c3a",
        ink: "#101014"
      },
      fontFamily: {
        display: ["Bebas Neue", "Impact", "Arial Narrow", "sans-serif"],
        body: ["Inter", "Segoe UI", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 24px 80px rgba(243, 180, 73, 0.32)",
        ink: "0 20px 60px rgba(0, 0, 0, 0.35)"
      }
    }
  },
  plugins: []
};
