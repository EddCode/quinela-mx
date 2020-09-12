import React, { useState } from "react";

const Home = () => {
  let [counter, setCounter] = useState(0);

  return (
    <>
      <h1>init {counter} module</h1>
      <button onClick={() => setCounter(counter + 1)}>increment</button>
      <button onClick={() => setCounter(counter - 1)}>decrement</button>
    </>
  );
};

export default Home;
