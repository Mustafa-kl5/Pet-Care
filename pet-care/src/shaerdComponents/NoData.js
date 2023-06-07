import React from "react";
import "../shaerdComponentStyle/NoData.css";

export default function NoData(props) {
  return (
    <div className="no-data-holder">
      <div className="no-data-image"></div>
      <div className="no-data-label">
        No Product In Your Pasket
        <br />
        Go Now To By some Thing for Your Pet
      </div>
    </div>
  );
}
