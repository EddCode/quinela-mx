import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import { USER } from "../services/api/graphql/user";

const Home = () => {
  const { loading, error, data } = useQuery(USER, {
    variables: { id: "asfad3" },
  });
  let [counter, setCounter] = useState(0);

  if (loading) return <p>Hello loading</p>;
  if (error) return <span>Error</span>;

  console.log(data, "data");
  return (
    <>
      <h1>Counter {counter} with hot module 😎 alo</h1>
      <button onClick={() => setCounter(counter + 1)}>increment</button>
      <button onClick={() => setCounter(counter - 1)}>decrement</button>
    </>
  );
};

export default Home;
