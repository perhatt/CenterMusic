/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 15s linear infinite",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1124px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
};
