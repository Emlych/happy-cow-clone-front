import "../header/header.css";
import React from "react";
import logo from "../../assets/img/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="bigscreen">
        <div className="left">
          <img src={logo} alt="violet cow" className="logo" />
          <nav>
            <ul>
              <li>Explore</li>
              <li>Contest</li>
              <li>Community</li>
              <li>Forum</li>
              <li>The App</li>
              <li>Shop</li>
              <li>More</li>
            </ul>
          </nav>
        </div>
        <div className="right">
          <FontAwesomeIcon icon={faSearch} className="primary-opposite" />
          <button className="primary-opposite">Add Listing</button>
          <button className="primary">Login / Join</button>
        </div>
      </div>
      <div className="smallscreen">
        <div className="left">
          <FontAwesomeIcon icon={faBars} />
          <img src={logo} alt="violet cow" className="logo" />
        </div>
        <div className="right">
          <FontAwesomeIcon icon={faSearch} className="primary-opposite" />
          <button className="primary">Login / Join</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
