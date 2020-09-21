import React from "react";
import App from "../components/App";
import Home from "../pages/Home";
import Dashboard from "../components/Protected";
import Login from "../pages/Login";

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
      {
        exact: true,
        path: "login",
        component: Login,
      },
    ],
  },
];
