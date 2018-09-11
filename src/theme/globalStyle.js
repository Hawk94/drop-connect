import styled, { injectGlobal, css } from "styled-components";
import { media } from "./style-utils";
import CircularStd from "src/assets/fonts/CircularStd-Book.otf";
import CircularMedium from "src/assets/fonts/CircularStd-Medium.otf";
import CircularBold from "src/assets/fonts/CircularStd-Bold.otf";

export const theme = {
  white: "#fff",
  black: "#000",
  primary: "#29dc8d",
  primaryText: "#6e7b8c",
  secondary: "#e1e6ec",
  secondaryText: "#a2aebf",
  danger: "#ff4a4a",
  info: "#ddebf8",
  interest: "#f6ebd2",
  light: "#f4f4f4",
  lightText: "#9dabba",
  dark: "#9dabba",
  darkText: "#4a5665",
  borderRadius: "6px"
};

injectGlobal`

  @font-face {
    font-family: "CircularStd";
    src: url('${CircularStd}') format('opentype');
  }

  @font-face {
    font-family: "CircularStd Medium";
    src: url('${CircularMedium}') format('opentype');
  }

  @font-face {
    font-family: "CircularStd Bold";
    src: url('${CircularBold}') format('opentype');
  }

  * {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
