import React from "react";
import ReactDom from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

// App entry point
import App from "@components/App";

const history = createBrowserHistory();
const container = document.getElementById("app");
const Main = (
  <Router history={history}>
    <App />
  </Router>
);

if (process.env.NODE_ENV !== "develop") ReactDom.hydrate(<Main />, container);
else ReactDom.render(<Main />, container);

if (module.hot) {
  module.hot.accept("./components/App", () => {
    const App = require("./components/App").default;
    ReactDom.render(<App />, document.getElementById("app"));
  });
}
