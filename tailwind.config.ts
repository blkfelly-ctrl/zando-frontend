import type { Config } from 'tailwindcss'
 
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700',      // Jaune ZANDO+
        secondary: '#00A651',    // Vert ZANDO+
        accent: '#FF8C00',       // Orange
        danger: '#DC2626',       // Rouge
        success: '#10B981',      // Vert succès
        warning: '#F59E0B',      // Orange warning
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
