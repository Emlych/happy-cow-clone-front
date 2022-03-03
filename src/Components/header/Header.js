import "./header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

//import components
import CollapseNav from "../collapseNav/CollapseNav";
import CollapseProfile from "../collapseProfile/CollapseProfile";

//import pictures
import logo from "../../assets/img/logo.svg";
import avatar from "../../assets/img/nobody.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBars,
  faXmark,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import ReactCSSTransitionGroup from "react-transition-group";

const Header = ({ toggleModal, token, setUser, name }) => {
  console.log("my name is ", name);
  //open burger menu
  const [openBurger, setopenBurger] = useState(false);
  const openBurgerMenu = () => {
    setopenBurger(!openBurger);
  };

  //open profile menu
  const [openProfile, setOpenProfile] = useState(false);
  const openProfileMenu = () => {
    setOpenProfile(!openProfile);
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
            <div className="profile-menu">
              <button onClick={openProfileMenu} className="profile-btn">
                <img src={avatar} alt="cow pic on green background" /> {name}
                <FontAwesomeIcon icon={faChevronDown} className="icon" />
              </button>
              {openProfile && <CollapseProfile setUser={setUser} />}
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
            {!token ? (
              <button className="primary" onClick={toggleModal}>
                Login / Join
              </button>
            ) : (
              <div className="profile-menu" onClick={openProfileMenu}>
                <img src={avatar} alt="cow pic on green background" />
              </div>
            )}
            {token && openProfile && <CollapseProfile setUser={setUser} />}
          </div>
        </div>
        {openBurger && (
          <div className="transition-nav">
            <ReactCSSTransitionGroup
              transitionName="example"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}
            >
              <CollapseNav />
            </ReactCSSTransitionGroup>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
