import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import { USERS } from "../services/api/graphql/user";

const Home = () => {
  const { loading, error, data } = useQuery(USERS);
  let [counter, setCounter] = useState(0);

  if (loading) return <p>Hello loading</p>;
  if (error) return <span>Error</span>;

  return (
    <>
      <h1>Counter {counter} with hot module 😎 alo</h1>
      <h1>Hello parners</h1>
      <ul>
        {data.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={() => setCounter(counter + 1)}>increment</button>
      <button onClick={() => setCounter(counter - 1)}>decrement</button>
    </>
  );
};

export default Home;
