import Home from "../pages/Home";
import Dashboard from "../components/Protected";
import React from "react";

export default [
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
];
