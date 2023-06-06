import React from "react";
import "../shaerdComponentStyle/NoData.css";

export default function NoData(props) {
  return (
    <div className="no-data-holder">
      <div
        className="no-data-image"
        style={{ backgroundImage: `url(${props.imageURL}) ` }}
      ></div>
      <div className="no-data-label">{props.NoDataLabel}</div>
    </div>
  );
}
