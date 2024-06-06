import React, { useState } from "react";
import "./NavbarSmall.scss";

export default function NavbarSmall() {
  return (
    <nav className="navbar-small">
      <ul className="navbar-small__list">
        <li className="navbar-small__item">hamburger</li>
        <li className="navbar-small__item navbar-small__item--main">
          <a href="#" className="navbar__link  navbar__link--logo">
            <img alt="Disney" src="/disney_logo.svg" />
          </a>
        </li>
        <li className="navbar-small__item">
          <div className="navbar__search">
            {/* <input
              type="text"
              className="navbar__search-bar"
              placeholder="Search"
            /> */}
            <button className="navbar-small__search-button">
              <img src="/search_logo.svg" alt="search-icon" />
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
}
