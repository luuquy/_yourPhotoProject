import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <div className="row">
        <div className="col text-center">
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li>
                <Link className="header__nav-list-item" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="header__nav-list-item" to="/AddPhoto">
                  Add Photo
                </Link>
              </li>
            </ul>
          </nav>{" "}
        </div>
      </div>
    </div>
  );
}

export default Header;
