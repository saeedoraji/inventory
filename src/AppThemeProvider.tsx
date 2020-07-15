import React, { FunctionComponent } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  ThemeProvider,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "light", // TODO, make it dark mode!
    primary: {
      main: "#EA7F28",
    },

    background: {
      default: "#fff",
    },
    text: {
      primary: "#4A4A4A",
    },
  },
});

export const AppThemeProvider: FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {" "}
      {/* to remove default css */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
