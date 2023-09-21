import React from "react";
import "./Header.css";
import headerIcon from "../../images/header-icon.svg";
function Header() {
  return (
    <div className="header">
      <img src={headerIcon} alt="icon" />
      <p>Delivery</p>
    </div>
  );
}

export default Header;
