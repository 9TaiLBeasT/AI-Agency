/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
        // RivRang Ganesh Festival colors
        rivrang: {
          // Festival oranges (from Ganesha's body)
          orange: '#ff8c42',
          'orange-light': '#ffb380',
          'orange-dark': '#e6732a',
          
          // Sacred reds (from robes and decorations)
          red: '#dc2626',
          'red-light': '#f87171',
          'red-dark': '#b91c1c',
          
          // Golden yellows (from ornaments and crown)
          gold: '#fbbf24',
          'gold-light': '#fde68a',
          'gold-dark': '#d97706',
          
          // Royal blues (from clothing accents)
          blue: '#2563eb',
          'blue-light': '#93c5fd',
          'blue-dark': '#1d4ed8',
          
          // Clean white cream backgrounds
          cream: '#fefefe',
          'cream-warm': '#f8f8f8',
          
          // Lotus pinks (from lotus petals)
          pink: '#ec4899',
          'pink-light': '#f9a8d4',
          'pink-dark': '#be185d',
          
          // Text colors for clean white background
          'text-primary': '#1f2937',
          'text-secondary': '#4b5563',
          'text-muted': '#6b7280',
          
          // Additional colors for clean design
          'mint': '#10b981',
          'mint-light': '#6ee7b7',
          'mint-dark': '#047857',
          'blush-warm': '#f97316',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'skew-scroll': {
          '0%': {
            transform: 'rotateX(20deg) rotateZ(-20deg) skewX(20deg)',
          },
          '100%': {
            transform: 'rotateX(20deg) rotateZ(-20deg) skewX(20deg) translateY(-100%)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'skew-scroll': 'skew-scroll 20s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};