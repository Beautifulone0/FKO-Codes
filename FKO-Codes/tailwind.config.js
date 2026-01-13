export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        lobster: ["var(--font-lobster)"],
        oswald: ["var(--font-oswald)"],
      },
    },
  },
};
