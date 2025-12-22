/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
      },
      fontFamily: {
        sfProLight: ["SFProLight"],
        sfProRegular: ["SFProRegular"],
        sfProMedium: ["SFProMedium"],
        sfProSemibold: ["SFProSemibold"],
        sfProBold: ["SFProBold"],
        sfProBlack: ["SFProBlack"],
      },
      fontSize: {
        authMainheading: ["28px", { lineHeight: "34px" }], // heading
        text25: ["25px", { lineHeight: "28px" }], // medium large
        text24: ["24px", { lineHeight: "28px" }],
        text20: ["20px", { lineHeight: "28px" }],
        text16: ["16px", { lineHeight: "20px" }],
        text17: ["17px", { lineHeight: "20px" }],
        text15: ["15px", { lineHeight: "20px" }],
        text13: ["13px", { lineHeight: "20px" }],
        text14: ["14px", { lineHeight: "20px" }],
        text12: ["12px", { lineHeight: "20px" }],
        text10: ["10px", { lineHeight: "18px" }],
      },

      colors: {
        primaryColor: "#3A3734",
        secondaryColor: "#989898",
        inactive: "#B9B9B9",
        green: "#36B357",
        red: "#CA3535",
        bgGray: "#E9E9E9",
        goldenBoarder: "#D6C176",
        bgGray20: "#989898",
      },
    },
  },
  plugins: [],
};
