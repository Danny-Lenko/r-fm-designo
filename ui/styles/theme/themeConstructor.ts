import { Theme } from "@mui/system";

const assembleThemeObj = (mode: "light" | "dark", theme: Theme) => ({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Jost"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
    ].join(","),
    h1: {
      fontWeight: 500,
      fontSize: 48 / 16 + "rem",
      lineHeight: 1,
    },
    h2: {
      fontWeight: 500,
      fontSize: 40 / 16 + "rem",
      lineHeight: 48 / 40,
      letterSpacing: "2px",
    },
    h3: {
      fontWeight: 500,
      fontSize:
        20 / (theme.typography as { htmlFontSize: number }).htmlFontSize +
        "rem",
      lineHeight: 26 / 20,
      letterSpacing: "5px",
    },
    body1: {
      lineHeight: 26 / 16,
    },
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          text: {
            primary: "#1D1C1E",
          },
        }
      : {
          text: {
            primary: "hsl(0, 0%, 100%)",
          },
        }),
    common: {
      black: "#1D1C1E",
      white: "#FFFFFF",
    },
    greyCustom: {
      main: "hsl(223, 19%, 93%)",
      light: "#F1F3F5",
      dark: "#333136",
      contrastText: "#000",
    },
    peachCustom: {
      main: "#E7816B",
      light: "#FFAD9B",
    },
  },
});

export { assembleThemeObj };
