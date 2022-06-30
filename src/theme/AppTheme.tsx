import { useMemo } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import createAppTheme from "./Theme";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const AppTheme = ({ children }: Props): JSX.Element => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const mode = prefersDarkMode ? "dark" : "light";
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppTheme;
