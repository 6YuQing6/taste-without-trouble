import type {} from "@mui/lab/themeAugmentation";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  // https://mui.com/material-ui/customization/palette/
  palette: {
    primary: {
      main: "rgb(44,47,38)",
      contrastText: "rgb(238,222,188)",
    },
    secondary: {
      main: "rgb(153, 44, 22)",
      light: "rgba(222, 64, 32, 1)",
      contrastText: "rgb(238,222,188)",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Custom border radius for all buttons
        },
      },
      variants: [
        {
          props: { variant: "text" },
          style: {
            color: "rgb(238,222,188)",
            "&:hover": {
              backgroundColor: "rgba(255, 253, 253, 0)",
              border: "none",
              outline: "none",
            },
            "&:active": {
              backgroundColor: "none",
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
            fontFamily: ["sans-serif", "Amazon Ember"],
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
              fontFamily: ["sans-serif", "Amazon Ember"],
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
  theme
);
