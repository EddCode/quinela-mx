import React from "react";
import ReactDom from "react-dom";

// App entry point
import App from "@components/App";

const container = document.getElementById("app");

ReactDom.hydrate(<App />, container);

console.log(module.hot);
if (module.hot) {
  module.hot.accept("./components/App", () => {
    const App = require("./components/App").default;
    ReactDom.render(<App />, document.getElementById("app"));
  });
}
