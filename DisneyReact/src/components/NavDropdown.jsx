import React, { useState } from "react";
import "./NavDropdown.scss";

export default function NavDropdown(props) {
  const { items } = props;

  return (
    <div className="navbar__item-dropdown">
      <ul className="navbar__item-dropdown-list">
        {items.map((item) => {
          return (
            <li className="navbar__item-dropdown-item">
              <a href="#" className="navbar__item-dropdown-link">
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
