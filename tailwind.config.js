/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FAFAF7",
        ink: "#14181F",
        accent: "#1F4A3F",
        brass: "#B8935A",
        rule: "#DDDBD3",
        "ink-soft": "#4A5058",
      },
      fontFamily: {
        serif: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        base: ["17px", { lineHeight: "1.65" }],
      },
      maxWidth: {
        content: "1120px",
        prose: "720px",
      },
      borderRadius: { sm: "4px", DEFAULT: "6px" },
      boxShadow: { lift: "0 4px 14px rgba(20,24,31,0.06)" },
    },
  },
  plugins: [],
};