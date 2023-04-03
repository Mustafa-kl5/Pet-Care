import React from "react";
import "../shaerdComponentStyle/ContentHolder.css";
import Header from "../shaerdComponents/Header";
import SocialMedia from "../shaerdComponents/SocialMedia";
import UserInformation from "../shaerdComponents/UserInformation.js";
import NavigationMenu from "../shaerdComponents/NavigationMenu";
export default function ContentHolder(props) {
  return (
    <div className="content-holder">
      <div className="content-header-holder">
        <Header />
      </div>
      <div className="left-riht-section">
        <div className="left-section">
          <UserInformation />
          <NavigationMenu />
          <SocialMedia />
        </div>
        <div className="right-section">{props.children}</div>
      </div>
    </div>
  );
}
