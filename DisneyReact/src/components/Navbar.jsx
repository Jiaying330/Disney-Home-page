import React, { useState } from "react";
import "./Navbar.scss";
import NavDropdown from "./NavDropdown";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__left">
          <ul className="navbar__list">
            <li className="navbar__item navbar__item--main">
              <a href="#" className="navbar__link  navbar__link--logo">
                <img alt="Disney" src="/disney_logo.svg" />
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                Disney+
              </a>
              <NavDropdown items={["On Disney+", "The Disney Bundle"]} />
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                Parks{" & "}Travel
              </a>
              <NavDropdown
                items={[
                  "Walt Disney World Resort",
                  "Disneyland Resort",
                  "Disney Cruise Line",
                  "Auani - A Disney Resort and Spa",
                  "Disney Vacation Club",
                ]}
              />
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                Movies
              </a>
              <NavDropdown
                items={[
                  "All Movies",
                  "Movies Anywhere",
                  "20th Century Studios",
                ]}
              />
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">
                Shop
              </a>
              <NavDropdown
                items={["Sale", "Clothes", "Accessories", "Toys", "Shop All"]}
              />
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link navbar__link--more">
                More
              </a>
              <NavDropdown
                items={[
                  "Disney News",
                  "D23: The Official Disney Fan Club",
                  "Live Shows",
                  "Music",
                ]}
              />
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
              <img src="/search_logo.svg" alt="search-icon" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
