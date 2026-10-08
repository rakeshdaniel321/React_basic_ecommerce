import React from "react";
import  "../styles/navbar.css"
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav id="navbar-cintainer">
        <div id="nav-Left">
          <Link to="/"><h1>Beuati<span>fully</span></h1></Link>
        </div>
        <div id="nav-right">
            <Link className="nav-link" to="/product">product</Link>
            <Link  className="nav-link" to="/cart">Cart</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
