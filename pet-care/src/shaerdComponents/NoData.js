import React from "react";
import "../shaerdComponentStyle/NoData.css";

export default function NoData(props) {
  return (
    <div className="no-data-holder">
      <div className="no-data-image"></div>
      <div className="no-data-label">
        You don't have any products yet!
        <br />
        Go now to but something for your pet!
      </div>
    </div>
  );
}
