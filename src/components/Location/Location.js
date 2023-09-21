import React from "react";
import "./Location.css";
import locationIcon from "../../images/location.svg";
function Location() {
  return (
    <div className="location">
      <p>29 Hola street, California, USA</p>
      <img src={locationIcon} alt="icon" />
    </div>
  );
}

export default Location;
