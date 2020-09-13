import { ApolloClient, InMemoryCache } from "@apollo/client";

export default new ApolloClient({
  uri: process.env.API,
  cache: new InMemoryCache(),
});
