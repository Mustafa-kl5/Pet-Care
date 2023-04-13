import React from "react";
import "../shaerdComponentStyle/PostUserInformation.css";
import userImage from "../Image/cat.jpg";
import timeIcon from "../Image/time.png";

export default function PostUserInformation() {
  return (
    <div className="post-username-user-image-time">
      <div
        className="post-user-mage"
        style={{ backgroundImage: `url("${userImage}")` }}
      ></div>
      <div className="post-username-time">
        <div className="post-username">Mustafa mahmood</div>
        <div className="post-time-holder">
          <div
            className="post-time-logo"
            style={{ backgroundImage: `url("${timeIcon}")` }}
          ></div>
          <div className="post-time">10 15 2025</div>
        </div>
      </div>
    </div>
  );
}
