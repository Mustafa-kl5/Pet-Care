import React from "react";
import "../shaerdComponentStyle/PostUserInformation.css";
import timeIcon from "../Image/time.png";

export default function PostUserInformation(props) {
  const date = new Date(props.postTime);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date
    .toLocaleDateString("en-US", options)
    .replace(",", "");
  return (
    <div className="post-username-user-image-time">
      <div
        className="post-user-mage"
        style={{ backgroundImage: `url("${props.userImage}")` }}
      ></div>
      <div className="post-username-time">
        <div className="post-username">{props.name}</div>
        <div className="post-time-holder">
          <div
            className="post-time-logo"
            style={{ backgroundImage: `url("${timeIcon}")` }}
          ></div>
          <div className="post-time">{formattedDate}</div>
        </div>
      </div>
    </div>
  );
}
