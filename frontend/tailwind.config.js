module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust the paths according to your project structure
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class', // Enable dark mode support with class strategy
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      'light', 
      'dark',
      {
        lightblue: {
          primary: '#3b82f6', // Blue
          secondary: '#60a5fa', // Light Blue
          accent: '#bfdbfe', // Very Light Blue
          neutral: '#1e3a8a', // Dark Blue
          'base-100': '#e0f2fe', // Light Blue Background
          info: '#38bdf8', // Info Blue
          success: '#34d399', // Success Green
          warning: '#fbbf24', // Warning Yellow
          error: '#f87171', // Error Red
        },
      },
    ],
  },
};