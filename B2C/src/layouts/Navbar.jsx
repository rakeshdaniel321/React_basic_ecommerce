import React from "react";
import  "../styles/navbar.css"
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <div id="navbar-cintainer">
        <div id="nav-Left">
            <h1>Beuati<span>fully</span></h1>
        </div>
        <div id="nav-right">
            <Link to="/product">product</Link>
            <Link to="/cart">Cart</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
