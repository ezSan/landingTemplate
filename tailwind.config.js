/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // usamos sintaxis rgb(var(--...) / <alpha-value>) para admitir opacidades en Tailwind
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-foreground": "rgb(var(--color-primary-foreground) / <alpha-value>)",

        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        "secondary-foreground": "rgb(var(--color-secondary-foreground) / <alpha-value>)",

        bg: "rgb(var(--color-bg) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
      },
      fontFamily: {
        // mapearemos la variable --font-sans desde globals (next/font escribe la variable)
        sans: ["var(--font-sans)"],
      },
      borderRadius: {
        md: "var(--radius-md)",
      },
    },
  },
  plugins: [],
};
