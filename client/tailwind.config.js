// tailwind.config.js


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',      // Scans files in the 'app' directory (for App Router pages/layouts)
    './pages/**/*.{js,ts,jsx,tsx,mdx}',    // Scans files in the 'pages' directory (if you still have Pages Router pages)
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Scans files in your 'components' directory
    // Add any other directories where you create files that use Tailwind classes
    // e.g., './public/**/*.html', if you have static HTML files with Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#11001f',
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
      boxShadow: {
        'black' : '4px 4px 0 #000',
        'white' : '4px 4px 0 #fff'
      }
    },
  },
  plugins: [],
}