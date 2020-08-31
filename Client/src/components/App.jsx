import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styled/globalStyles";

//Components
import Home from "../pages/Home";
import Layout from "./Layout";
import AuthComponent from "./Authenticate";
import NotFound from "./NotFound";
import Dashboard from "./Protected";

import theme from "../styled/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Router exact path="/login">
              <h1> hello</h1>
            </Router>
            <AuthComponent>
              <Route path="/dashboard" component={Dashboard} />
            </AuthComponent>
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
