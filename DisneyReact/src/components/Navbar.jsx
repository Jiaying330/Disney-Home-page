import React, { useState } from "react";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__left">
          <ul className="navbar__list">
            <li className="navbar__item navbar__item--main">
              <a href="#" className="navbar__link  navbar__link--logo">
                <img
                  alt="Disney"
                  src="https://static-mh.content.disney.io/matterhorn/assets/goc/disney_logo_dark@2x-45d70f7dd57b.png"
                />
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                Disney+
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                Parks{" & "}Travel
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                Movies
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                Shop
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link navbar__link--more">
                More
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar__right">
          <a href="" className="navbar__login">
            Log in
          </a>
          <div className="navbar__search">
            <input
              type="text"
              className="navbar__search-bar"
              placeholder="Search"
            />
            <button className="navbar__search-button">
              <img
                src="https://static-mh.content.disney.io/matterhorn/assets/goc/inc-search-input-icon-blue-331475a2cf98.svg"
                alt="search-icon"
              />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
