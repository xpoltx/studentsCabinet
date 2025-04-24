/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-primary': "#f4f6f8",
        'light-secondary': "#2e384d",
        'light-table': "#ffffff",
        'light-accent': "#6366f1",
        'light-text-primary': "#1e2939",

        'dark-primary': "#1e293b",        
        'dark-secondary': "#e2e8f0",      
        'dark-table': "#2d3748",          
        'dark-accent': "#a78bfa",
        'dark-text-primary': "#e1d6c6",

        success: "",
        warning: "",
        error: "",

      }

    },
  },
  variants: {
    extend: {
      backgroundOpacity: ['active'],
    }
  }
}