/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Georgia', 'Cambria', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: '#3498db',
        accent: '#667eea',
        text: {
          DEFAULT: '#1a1a2e',
          light: '#4a5568',
        },
        border: '#e2e8f0',
        bg: {
          DEFAULT: '#ffffff',
          secondary: '#f8fafc',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#1a1a2e',
            a: {
              color: '#3498db',
              textDecoration: 'underline',
              textDecorationColor: '#e2e8f0',
              textUnderlineOffset: '3px',
              '&:hover': {
                color: '#667eea',
                textDecorationColor: '#667eea',
              },
            },
            h2: {
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: '700',
              marginTop: '2.5em',
            },
            h3: {
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: '600',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
