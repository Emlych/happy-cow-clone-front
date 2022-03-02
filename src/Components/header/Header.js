import "./header.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CollapseNav from "../collapseNav/CollapseNav";
import logo from "../../assets/img/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
// import ReactCSSTransition from "react-transition-group";

const Header = ({ toggleModal, token, setUser }) => {
  const [openBurger, setopenBurger] = useState(false);
  const openBurgerMenu = () => {
    setopenBurger(!openBurger);
  };
  const disconnect = () => {
    setUser(null);
  };
  return (
    <div className="header">
      <div className="bigscreen">
        <div className="left">
          <Link to={"/"}>
            <img src={logo} alt="violet cow" className="logo" />
          </Link>

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
          {!token ? (
            <button className="primary" onClick={toggleModal}>
              Login / Join
            </button>
          ) : (
            <div>
              <button onClick={disconnect}>Disconnect</button>
            </div>
          )}
        </div>
      </div>
      <div className="smallscreen">
        <div className="topbar">
          <div className="left">
            <button className="no-btn" onClick={openBurgerMenu}>
              {!openBurger ? (
                <FontAwesomeIcon icon={faBars} />
              ) : (
                <FontAwesomeIcon icon={faXmark} />
              )}
            </button>
            <Link to={"/"}>
              <img src={logo} alt="violet cow" className="logo" />
            </Link>
          </div>
          <div className="right">
            <FontAwesomeIcon icon={faSearch} className="primary-opposite" />
            <button className="primary" onClick={toggleModal}>
              Login / Join
            </button>
          </div>
        </div>
        {openBurger && (
          <div className="transition-nav">
            {/* <ReactCSSTransition> */}
            <CollapseNav />
            {/* </ReactCSSTransition> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
