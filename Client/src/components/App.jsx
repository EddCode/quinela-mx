import React from "react";
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styled/globalStyles";

//Components
import Home from "../pages/Home";
import Layout from "./Layout";
import AuthComponent from "./Authenticate";
import NotFound from "./NotFound";
import Dashboard from "./Protected";
import Login from "../pages/login";

import theme from "../styled/theme";

const history = createMemoryHistory();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router history={history}>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={Login} />
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
