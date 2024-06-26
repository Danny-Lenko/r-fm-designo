import { Theme } from "@mui/system";

export const styles = (theme: Theme) => ({
  position: "relative",
  cursor: "pointer",
  backgroundColor: "peachCustom.main",
  borderRadius: "15px",
  overflow: "hidden",

  "&:hover": {
    [theme.breakpoints.up("sm")]: {
      zIndex: 2,
      "& .img": {
        transform: "scale(1.2)",
        opacity: 0.3,
      },
    },
  },

  "&.highItem": {
    gridRowStart: 1,
    gridRowEnd: { xs: 1, md: "span 2" },
  },

  // img box
  "& .img": {
    width: "100%",
    height: "100%",
    borderRadius: "15px",
    [theme.breakpoints.up("sm")]: {
      transition: `
         transform 750ms cubic-bezier(.5, 0, .5, 1),
         opacity 250ms linear
      `,
    },

    "& img": {
      blendMode: "darken",
      filter: "brightness(0.5)",
    },
  },

  // typography items
  "& .textbox": {
    width: "100%",
    textAlign: "center",
    zIndex: 3,
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",

    "& .MuiTypography-h2, & .MuiTypography-body1": {
      textTransform: "uppercase",
      color: "common.white",
      px: 3,
    },

    "& .MuiTypography-body1": {
      fontSize: 15 / 16 + "rem",
      letterSpacing: "5px",
      display: "inline-flex",
      position: "relative",
      mt: 3,
      "& .MuiSvgIcon-root": {
        position: "absolute",
        right: -5,
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: "inherit",
        color: "peachCustom.main",
      },
    },
  },
});
