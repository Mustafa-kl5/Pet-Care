import React from "react";
import "../shaerdComponentStyle/LocationView.css";
import image from "../Image/LocationImage.png";

export default function LocationView(props) {
  return (
    <div className="location-view-holder">
      <div className="location-word">Location</div>
      <div
        className="loaction-holder"
        style={{
          width: `${props.width}`,
          height: `${props.height}`,
          backgroundImage: `url("${image}")`,
        }}
      ></div>
    </div>
  );
}
