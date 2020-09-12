import App from "../components/App";
import Home from "../pages/Home";
import Dashboard from "../components/Protected";
import React from "react";

export default [
  {
    component: App,
    routes: [
      {
        exact: true,
        path: "/",
        component: Home,
      },
      {
        exact: true,
        path: "/dashboard",
        component: Dashboard,
      },
    ],
  },
];
