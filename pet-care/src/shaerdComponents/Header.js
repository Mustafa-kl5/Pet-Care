import React from "react";
import { Link } from "react-router-dom";
import "../shaerdComponentStyle/Header.css";

export default function Header() {
  return (
    <div className="header-holder">
      <div className="logo-section">
        <div className="header-logo"></div>
        <div className="header-text">PetCare</div>
      </div>
      <div className="payment">
        <Link to={"/Payment"}>
          <div className="backet"></div>
        </Link>
      </div>
    </div>
  );
}
