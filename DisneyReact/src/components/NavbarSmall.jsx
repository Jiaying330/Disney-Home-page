import React, { useState } from "react";
import "./NavbarSmall.scss";
import NavDropdown2 from "./NavDropdown2";

export default function NavbarSmall() {
  const [checked, setChecked] = useState(false);
  const [search, setSearch] = useState(false);
  function toggleOnChange() {
    let change = !checked;
    setChecked(change);
    setSearch(false);
    let nav = document.querySelector(".navbar-small");
    if (change) {
      nav.style.position = "fixed";
      nav.style.height = "100vh";
    } else {
      nav.style.position = "relative";
      nav.style.height = "auto";
    }
  }

  function searchOnChange() {
    let change = !search;
    setSearch(change);
    setChecked(false);
    let nav = document.querySelector(".navbar-small");
    if (change) {
      nav.style.position = "fixed";
    } else {
      nav.style.position = "relative";
    }
  }

  return (
    <nav className="navbar-small">
      <ul className="navbar-small__list">
        <li className="navbar-small__item">
          <input
            type="checkbox"
            className="navbar-small__checkbox"
            id="navi-toggle"
            checked={checked}
            onChange={toggleOnChange}
          />
          <label htmlFor="navi-toggle" className="navbar-small__button">
            <span className="navbar-small__icon">&nbsp;</span>
          </label>
        </li>
        <li className="navbar-small__item navbar-small__item--main">
          <a href="#" className="navbar__link  navbar__link--logo">
            <img alt="Disney" src="/disney_logo.svg" />
          </a>
        </li>
        <li className="navbar-small__item">
          <div className="navbar__search">
            <button
              className="navbar-small__search-button"
              onClick={searchOnChange}
            >
              <img src="/search_logo.svg" alt="search-icon" />
            </button>
          </div>
        </li>
      </ul>
      {checked && (
        <div className="navbar-small__contents">
          <ul className="navbar-small__contents-list">
            <li className="navbar-small__contents-item">Log in</li>
            <li className="navbar-small__contents-item">Disney.com</li>
            <NavDropdown2
              name="Disney+"
              items={["Home", "On Disney+", "The Disney Bundle"]}
            />
            <NavDropdown2
              name="Parks &amp; Travel"
              items={[
                "Walt Disney World Resort",
                "Disneyland Resort",
                "Disney Cruise Line",
                "Auani - A Disney Resort and Spa",
                "Disney Vacation Club",
              ]}
            />
            <NavDropdown2
              name="Movies"
              items={["All Movies", "Movies Anywhere", "20th Century Studios"]}
            />
            <NavDropdown2
              name="Shop"
              items={["Sale", "Clothes", "Accessories", "Toys", "Shop All"]}
            />
            <li className="navbar-small__contents-item">Disney News</li>
            <li className="navbar-small__contents-item">D23</li>
            <NavDropdown2
              name="Live Shows"
              items={[
                "Home",
                "Disney on Broadway",
                "Disney on Ice",
                "Disney Live!",
              ]}
            />
            <li className="navbar-small__contents-item">Music</li>
          </ul>
        </div>
      )}
      {search && (
        <div className="navbar-small__search-bar">
          <input
            type="text"
            className="navbar__search-bar"
            placeholder="Search"
          />
          <button className="navbar__search-button">
            <img src="/search_logo.svg" alt="search-icon" />
          </button>
          <a className="navbar__search-button" onClick={searchOnChange}>
            CANCEL
          </a>
        </div>
      )}
    </nav>
  );
}
