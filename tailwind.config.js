/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "serif"],
        jakarta: ["Plus Jakarta Sans", "serif"],
      },
      colors: {
        shade_1: "#1C1C1C",
        shade_2: "#777",
        shade_3: "#5767391A",
        shade_4: "#E6A6231A",
        shade_5: "#F4F4F4",
        shade_6: "#5D5A6F",
        shade_7: "#D2D2D2",
        shade_8: "#494949",
      },
      boxShadow: {
        shadow_1: "0px 7px 50px 0px rgba(0,0,0,0.06)",
      },
      backgroundImage: {
        "card-image": "url('../images/client.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
