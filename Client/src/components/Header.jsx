import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/"> Home </Link>
      <ul>
        <li>Item</li>
      </ul>
    </header>
  );
};
export default Header;

