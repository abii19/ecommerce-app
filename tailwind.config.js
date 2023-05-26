/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        content: {
          primary: "var(--color-content-primary)",
          secondary: "var(--color-content-secondary)"
        }
      },
      fontSize: {
        heading: [
          "var(--fs-heading)",
          { lineHeight: "var(--lh-heading)", fontWeight: 500 }
        ],
        title: [
          "var(--fs-title)",
          { lineHeight: "var(--lh-title)", fontWeight: 500 }
        ],
        subtitle: [
          "var(--fs-subtitle)",
          { lineHeight: "var(--lh-subtitle)", fontWeight: 500 }
        ],
        subtitle: [
          "var(--fs-caption)",
          { lineHeight: "var(--lh-caption)", fontWeight: 400 }
        ],
        body: [
          "var(--fs-body)",
          { lineHeight: "var(--lh-body)", fontWeight: 500 }
        ]
      }
    },
    container: {
      center: true,
      padding: {
        "default": "1rem",
        "sm": "1rem",
        "lg": "2rem",
        "xl": "4rem",
        "2xl": "6.25rem"
      }
    }
  },
  plugins: []
};
