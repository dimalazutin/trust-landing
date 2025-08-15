/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        navy: "#2563EB",      // точный синий, как на https://the-trust-construct.com
        "navy-dark": "#1E40AF"
      }
    }
  },
  plugins: []
};
