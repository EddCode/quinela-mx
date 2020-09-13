import { ApolloProvider } from "@apollo/client";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import client from "../services/api/graphql";

const Layout = ({ children }) => (
  <ApolloProvider client={client}>
    <Header />
    {children}
    <Footer />
  </ApolloProvider>
);
export default Layout;
