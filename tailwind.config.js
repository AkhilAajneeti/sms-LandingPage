module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./components/**/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Confident Academic Authority
        primary: {
          DEFAULT: "#AD1F37", // red-700
          50: "#FDF2F4", // red-50
          100: "#FCE4E8", // red-100
          200: "#F9C9D1", // red-200
          300: "#F5A3B3", // red-300
          400: "#E8667F", // red-400
          500: "#D93A56", // red-500
          600: "#AD1F37", // red-600
          700: "#8B1A2D", // red-700
          800: "#6B1523", // red-800
          900: "#4D0F19", // red-900
        },
        // Secondary Colors - Professional Depth
        secondary: {
          DEFAULT: "#2C3E50", // slate-800
          50: "#F8F9FA", // slate-50
          100: "#ECF0F1", // slate-100
          200: "#D5DBDB", // slate-200
          300: "#AEB6BF", // slate-300
          400: "#85929E", // slate-400
          500: "#5D6D7E", // slate-500
          600: "#34495E", // slate-600
          700: "#2C3E50", // slate-700
          800: "#1C2833", // slate-800
          900: "#17202A", // slate-900
        },
        // Accent Colors - Warm Achievement Highlights
        accent: {
          DEFAULT: "#E8B547", // yellow-500
          50: "#FFFBF0", // yellow-50
          100: "#FEF5E0", // yellow-100
          200: "#FDECC8", // yellow-200
          300: "#FBDFA3", // yellow-300
          400: "#F4CC6F", // yellow-400
          500: "#E8B547", // yellow-500
          600: "#D19A2E", // yellow-600
          700: "#A67C24", // yellow-700
          800: "#7D5D1B", // yellow-800
          900: "#5A4314", // yellow-900
        },
        // Background Colors
        background: "#FAFBFC", // gray-50
        surface: {
          DEFAULT: "#F4F6F8", // gray-100
          hover: "#E8EBF0", // gray-200
        },
        // Text Colors
        text: {
          primary: "#1A202C", // gray-900
          secondary: "#4A5568", // gray-600
          tertiary: "#718096", // gray-500
          disabled: "#A0AEC0", // gray-400
        },
        // Semantic Colors
        success: {
          DEFAULT: "#38A169", // green-600
          light: "#C6F6D5", // green-100
          dark: "#276749", // green-800
        },
        warning: {
          DEFAULT: "#D69E2E", // yellow-600
          light: "#FEFCBF", // yellow-100
          dark: "#975A16", // yellow-800
        },
        error: {
          DEFAULT: "#E53E3E", // red-600
          light: "#FED7D7", // red-100
          dark: "#9B2C2C", // red-800
        },
        info: {
          DEFAULT: "#3182CE", // blue-600
          light: "#BEE3F8", // blue-100
          dark: "#2C5282", // blue-800
        },
        // Border Colors
        border: {
          DEFAULT: "#E2E8F0", // gray-300
          light: "#EDF2F7", // gray-200
          dark: "#CBD5E0", // gray-400
        },
      },
      fontFamily: {
        headline: ['Inter', 'sans-serif'],
        body: ['Source Sans Pro', 'sans-serif'],
        cta: ['Inter', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'base': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.12)',
      },
      transitionDuration: {
        'fast': '200ms',
        'base': '300ms',
        'slow': '400ms',
      },
      transitionTimingFunction: {
        'out': 'ease-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      letterSpacing: {
        'tighter': '-0.02em',
      },
      lineHeight: {
        'tight': '1.1',
        'snug': '1.3',
        'relaxed': '1.75',
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-out',
        'slide-up': 'slideUp 400ms ease-out',
        'scale-in': 'scaleIn 300ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}