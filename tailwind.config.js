module.exports = {
  mdoe: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      fontWeight: ["responsive", "hover", "focus", "active", "group-hover"],
      animation: ["group-hover"],
      backgroundColor: ["active"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
