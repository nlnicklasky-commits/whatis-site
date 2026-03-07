/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Georgia', 'Cambria', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        primary: '#2563eb',
        accent: '#1d4ed8',
        warm: '#f59e0b',
        text: {
          DEFAULT: '#1a1a2e',
          light: '#4a5568',
        },
        border: '#e2e8f0',
        bg: {
          DEFAULT: '#ffffff',
          secondary: '#f1f5f9',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#1a1a2e',
            a: {
              color: '#2563eb',
              textDecoration: 'underline',
              textDecorationColor: '#e2e8f0',
              textUnderlineOffset: '3px',
              '&:hover': {
                color: '#1d4ed8',
                textDecorationColor: '#2563eb',
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
