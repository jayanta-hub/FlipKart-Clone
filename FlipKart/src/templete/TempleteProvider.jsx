// Global Store

import React, { createContext } from "react";
import { CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const TempleteContext = createContext(null);
const TempleteProvider = ({ children }) => {
  const theme = createMuiTheme({
    overrides: {
      MuiDialog: {
        paperwidthsm: {
          maxwidth: "unset",
        },
      },
      MuiDialogContent: {
        root: {
          padding: 0,
          "&:first-child": {
            paddingTop: "0",
          },
        },
      },
    },
  });
  return (
    <TempleteContext.Provider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </TempleteContext.Provider>
  );
};

export default TempleteProvider;
