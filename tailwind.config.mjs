/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        school: {
          primary: 'var(--color-school-primary)',
          'primary-hover': 'var(--color-school-primary-hover)',
          'primary-light': 'var(--color-school-primary-light)',
          secondary: 'var(--color-school-secondary)',
          'secondary-hover': 'var(--color-school-secondary-hover)',
          accent: 'var(--color-school-accent)',
          surface: 'var(--color-school-surface)',
          dark: 'var(--color-school-dark)',
          muted: 'var(--color-school-muted)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
