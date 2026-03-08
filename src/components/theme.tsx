import type {} from "@mui/lab/themeAugmentation";
import { createTheme } from "@mui/material";

const color = {
  DARKSPRUCE: "#265a41",
  SEAGREEN: "#549a68",
  GREEN: "#55784c",
  BRIGHTFERN: "#38b000",
  BRIGHTLEMON: "#e8edaf",
  YELLOW: "rgb(252, 255, 243)",
  COFFEE: "#230C0F",
};

export const theme = createTheme({
  // https://mui.com/material-ui/customization/palette/
  palette: {
    primary: {
      main: color.DARKSPRUCE,
      contrastText: color.YELLOW,
    },
    secondary: {
      main: color.BRIGHTLEMON,
      contrastText: color.COFFEE,
    },
  },
  typography: {
    fontFamily: "SN Pro",
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true, // Disable ripple for all buttons
      },
      styleOverrides: {
        root: {
          borderRadius: 8, // Custom border radius for all buttons
        },
      },
      variants: [
        {
          props: { variant: "text" },
          style: {
            color: color.YELLOW,
            "&:hover": {
              backgroundColor: color.DARKSPRUCE,
              color: color.BRIGHTLEMON,
              border: "none",
              outline: "none",
            },
            "&:active": {
              backgroundColor: "none",
              color: color.BRIGHTLEMON,
              border: "none",
              outline: `none`,
            },
          },
        },
      ],
    },
  },
});

export const cardTheme = createTheme(
  {
    components: {
      MuiCard: {
        variants: [
          {
            props: { variant: "outlined" },
            style: {
              borderWidth: "1px",
              borderColor: "rgba(0, 0, 0, 0.12)",
              boxShadow: "none",
            },
          },
        ],
        defaultProps: {
          raised: false,
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            fontFamily: ["SN Pro"],
            padding: "0px",
            "&:last-child": {
              paddingBottom: "0px",
            },
          },
        },
      },
      MuiTypography: {
        variants: [
          {
            props: { component: "h1" },
            style: {
              fontFamily: ["SN Pro"],
              fontSize: 28,
              fontWeight: 400,
              lineHeight: 1.2,
              color: "text.primary",
            },
          },
        ],
      },
    },
  },
  theme,
);
