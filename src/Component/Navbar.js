import React from "react";
import { Link } from "react-router-dom";

function Navlink() {
  return (
    <nav>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/product">product</Link>
    </nav>
  );
}

export default Navlink;
