module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f7ff',
          100: '#edf1ff',
          500: '#3b82f6',
          600: '#1d4ed8',
          700: '#1e3a8a'
        },
        dark: '#0f172a'
      },
      boxShadow: {
        soft: '0 20px 50px rgba(15, 23, 42, 0.12)'
      }
    }
  },
  plugins: []
};
