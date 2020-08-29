import React from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styled/globalStyles";

// App entry point
import App from "@components/App";
import theme from "./styled/theme";

const Main = (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>
);

if (process.env.NODE_ENV !== "develop") {
  ReactDom.hydrate(<Main />, document.getElementById("app"));
} else {
  ReactDom.render(<Main />, document.getElementById("app"));
}

if (module.hot) {
  module.hot.accept("./components/App", () => {
    const App = require("./components/App").default;
    ReactDom.render(<App />, document.getElementById("app"));
  });
}
