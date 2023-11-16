/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    mytheme: {
      primary: "#ddd6fe",
      secondary: "#38bdf8",
      accent: "#f43f5e",
      neutral: "#6b7280",
      "base-100": "#121c22",
      info: "#e7e5e4",
      success: "#ffffff",
      warning: "#ffffff",
      error: "#fef08a",
    },
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1124px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
