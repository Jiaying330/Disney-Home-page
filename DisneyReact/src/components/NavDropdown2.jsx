import React, { useState } from "react";
import "./NavDropdown2.scss";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function NavDropdown2(props) {
  const { name, items } = props;
  const [open, setOpen] = useState(false);

  function handleOnClick() {
    let change = !open;
    setOpen(change);
  }
  return (
    <>
      <li className="navbar-small__contents-item" onClick={handleOnClick}>
        {name}
        {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
      </li>
      {open && (
        <ul className="navbar-small__dropdown">
          {items.map((item) => {
            return <li className="navbar-small__dropdown-item">{item}</li>;
          })}
        </ul>
      )}
    </>
  );
}
