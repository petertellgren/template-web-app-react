import "@fontsource/rubik";
import "@fontsource/rubik/300.css";
import "@fontsource/rubik/400.css";
import "@fontsource/rubik/500.css";
import "@fontsource/rubik/700.css";
import "@fontsource/rubik/900.css";
import { PaletteMode } from "@mui/material";
import { Theme, createTheme, responsiveFontSizes } from "@mui/material/styles";

function createAppTheme(mode: PaletteMode = "light"): Theme {
  return responsiveFontSizes(
    createTheme({
      palette: {
        mode,
        ...(mode === "light"
          ? {
              // palette values for light mode
              primary: {
                main: "#50A8EA",
                contrastText: "#FFFFFF",
              },
              secondary: {
                main: "#2C3246",
              },
              background: {
                default: "#ffffff",
              },
            }
          : {
              // palette values for dark mode
              primary: {
                main: "#CECCCC",
              },
              secondary: {
                main: "#0F110C",
              },
              background: {
                default: "#273238",
              },
            }),
      },
      typography: {
        fontFamily: "Rubik",
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              minHeight: "42px",
              borderRadius: "18px",
              boxShadow: "rgba(95, 169, 236, 0.6) 0px 8px 24px",

              "&:hover": {
                boxShadow: "rgba(95, 169, 236, 1.0) 0px 8px 24px",
              },
            },
          },
        },
      },
    })
  );
}

export default createAppTheme;
