import React from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styled/globalStyles";

// App entry point
import App from "@components/App";

const container = document.getElementById("app");

if (process.env.NODE_ENV !== "develop") ReactDom.hydrate(<App />, container);
else ReactDom.render(<App />, container);

if (module.hot) {
  module.hot.accept("./components/App", () => {
    const App = require("./components/App").default;
    ReactDom.render(<App />, document.getElementById("app"));
  });
}
