import React, { useState } from "react";

const Home = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>init {counter}</h1>
      <button onClick={() => console.log("alo")}>Set counter</button>
    </>
  );
};

export default Home;
