import React from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styled/globalStyles";

// App entry point
import App from "@components/App";
import theme from "./styled/theme";

ReactDom.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>,
  document.getElementById("app")
);

if (module.hot) {
  module.hot.accept("./components/App", () => {
    const App = require("./components/App").default;
    ReactDom.render(<App />, document.getElementById("app"));
  });
}
