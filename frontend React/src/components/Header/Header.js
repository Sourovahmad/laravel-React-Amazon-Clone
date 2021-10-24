import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.css";


const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="header-logo" />
      <nav>

            <Link to={`/shop`}> Shop </Link>

        <a href="/review">Order Review</a>
        <a href="/manage"> Mange Inventory</a>
      </nav>
    </div>
  );
};

export default Header;
