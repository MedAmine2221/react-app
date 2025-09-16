// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         'primary-pink': '#ff52af',
//         'primary-purple': '#9f53ff',
//         'light-bg': '#f5f0ff',
//         'dark-bg': '#14092a',
//         'text-dark': '#2c2c54',
//         'text-light': '#6c7293',
//       },
//     },
//   },
//   plugins: [],
// }


module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pinkPrimary: "#ff52af",
        purplePrimary: "#9f53ff",
        lightBg: "#f5f0ff",
        darkBg: "#14092a",
        textDark: "#2c2c54",
        textLight: "#6c7293",
      },
      boxShadow: {
        card: "0 20px 60px rgba(0, 0, 0, 0.1)",
        cardDark: "0 20px 60px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
