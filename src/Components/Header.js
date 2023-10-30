import "./Header.css";

import React from "react";
import logo from "../Assets/logo (1).png";

const Header = () => {
  return (
    <div className="Header">
      <img src={logo} alt="" className="logo" />

      <ul className="Header-menu"> 
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonials</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Header;
