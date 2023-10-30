import React from "react";

import github from "../Assets/github.png";
import linkedin from "../Assets/linkedin.png";
import instagram from "../Assets/instagram.png";
import logo from "../Assets/logo (1).png";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={github} alt="" />
          <img src={instagram} alt="" />
          <img src={linkedin} alt="" />
        </div>
        <div className="logo-f">
          <img src={logo} alt="" />
        </div>
      </div>

      <div className=" blur blur-1"></div>
      <div className=" blur blur-2"></div>
    </div>
  );
};

export default Footer;
