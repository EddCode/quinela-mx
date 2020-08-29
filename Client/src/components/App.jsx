import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Home from "../pages/Home";
import Layout from "./Layout";
import AuthComponent from "./Authenticate";
import NotFound from "./NotFound";
import Dashboard from "./Protected";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <AuthComponent>
            <Route path="/dashboard" component={Dashboard} />
          </AuthComponent>
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
