import React from "react";
import "../../componentStyle/AdoptionPost/AdoptionPostUserInformation.css";
import timeIcon from "../../Image/time.png";
export default function AdoptionPostUserInformation(props) {
  const date = new Date(props.postTime);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date
    .toLocaleDateString("en-US", options)
    .replace(",", "");
  return (
    <div className="adoption-post-username-user-image-time">
      <div
        className="adoption-post-user-mage"
        style={{ backgroundImage: `url("${props.userImage}")` }}
      ></div>
      <div className="adoption-post-username-time">
        <div className="adoption-post-username">{props.name}</div>
        <div className="adoption-post-time-holder">
          <div
            className="adoption-post-time-logo"
            style={{ backgroundImage: `url("${timeIcon}")` }}
          ></div>
          <div className="adoption-post-time">{formattedDate}</div>
        </div>
      </div>
    </div>
  );
}
