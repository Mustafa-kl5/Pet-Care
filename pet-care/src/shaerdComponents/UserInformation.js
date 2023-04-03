import React from "react";
import "../shaerdComponentStyle/UserInformation.css";
import userImage from "../Image/cat.jpg";

export default function UserInformation() {
  return (
    <>
      <div className="user-information-holder">
        <div
          className="user-image"
          style={{ backgroundImage: `url("${userImage}")` }}
        ></div>
        <div className="user-text">
          <div className="userName">Mastafa Mahmood</div>
          <div className="userName">Mastafa513</div>
        </div>
      </div>
      <div className="Menu-word">Menu</div>
    </>
  );
}
