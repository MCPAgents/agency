/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,jsx}",
      "./components/**/*.{js,jsx}",
    ],
    theme: {
      extend: {
        colors: {
          "mcp-purple": "#7B61FF",
          "mcp-blue": "#1F3267",
          "nav-gradient-start": "#3B0073",
          "nav-gradient-end": "#7B61FF",
        },
      },
    },
    plugins: [],
  }
  