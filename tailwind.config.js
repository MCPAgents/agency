/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,jsx}",
      "./components/**/*.{js,jsx}",
    ],
    theme: {
      extend: {
        // Customize your theme for a futuristic look if needed
        colors: {
          "mcp-purple": "#7B61FF",
          "mcp-blue": "#1F3267",
        },
      },
    },
    plugins: [],
  }
  