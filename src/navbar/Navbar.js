import React, { useState, useEffect } from "react";
import SearchIcon from "../assets/search2.png";
import { Link } from "react-router-dom";

function Navbar({ showSearch }) {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    if (showNav === true) {
      document.querySelector("*").style.overflowY = "hidden";
    } else {
      document.querySelector("*").style.overflowY = "visible";
    }
  }, [showNav]);

  const closeNav = () => setShowNav(false);
  const Search = () => {
    closeNav();
    showSearch(true);
  };
  return (
    <nav>
      <div className="insideNavbar">
        <h1>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            Cook<span>holic</span>
          </Link>
        </h1>

        <div
          className={`bgr ${showNav ? "change-bgr" : ""}`}
          onClick={() => setShowNav(!showNav)}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <div className={`leftSide ${showNav ? "active" : ""}`}>
          <img src={SearchIcon} alt="search" onClick={Search} />
          <Link to="/signup">
            <button className="signup" onClick={closeNav}>
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button className="signin" onClick={closeNav}>
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
