import React from "react";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { theme } from "src/theme/globalStyle";

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};

export default Root;
