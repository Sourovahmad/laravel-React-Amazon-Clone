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
    <Link to="review"> Order Review </Link>
        <Link to="/inventory"> Mange Inventory</Link>
      </nav>
    </div>
  );
};

export default Header;
