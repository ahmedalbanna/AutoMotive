/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#f99a0e",
        royalblue: "#457eff",
        gray: {
          "100": "#8e8e94",
          "200": "rgba(0, 0, 0, 0.4)",
          "300": "rgba(255, 255, 255, 0.2)",
        },
        aliceblue: "#f3f7fb",
        whitesmoke: "#eaeaea",
        darkorange: "#dc880b",
        peru: "#9e6104",
        "primary-contrast": "#fff",
        slategray: "#576074",
        darkslategray: {
          "100": "#434343",
          "200": "#424242",
          "300": "#334158",
          "400": "#303030",
        },
        cornflowerblue: {
          "100": "#1262af",
          "200": "#1262ae",
        },
        gainsboro: {
          "100": "#e7e7e7",
          "200": "rgba(226, 226, 226, 0.1)",
        },
        lavender: "#ccdcec",
        darkgray: "#999",
        lightgray: "#cecece",
        black: "#000",
        "studio-darkmode-enabledlabel-e8effd": "#e8effd",
        "text-primary": "rgba(0, 0, 0, 0.87)",
        "studio-darkmode-popuplabels-5e6a86": "#5e6a86",
      },
      fontFamily: {
        "components-button-large": "Roboto",
        "text-small": "Inter",
        "baloo-bhai": "'Baloo Bhai'",
      },
      borderRadius: {
        "smi-2": "12.2px",
        "12xl": "31px",
        "3xs": "10px",
        "19xl": "38px",
        "5xs": "8px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      lg: "18px",
      "base-8": "16.8px",
      mini: "15px",
      "11xl": "30px",
      "3xl": "22px",
      "13xl": "32px",
      "19xl": "38px",
      "5xl": "24px",
      "42xl": "61px",
      "23xl": "42px",
      xs: "12px",
      "2xs": "11px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
