import Home from "../pages/Home";
import React from "react";

export default [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    exact: true,
    path: "/login",
    component: <h1>Hello</h1>,
  },
];
