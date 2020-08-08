import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const AuthComponent = (props) => {
  const history = useHistory();

  useEffect(() => {
    if (true) history.push("/");
  }, []);

  return <>{props.children}</>;
};

export default AuthComponent;

