import React from "react";
import "../../componentStyle/Information&Treatment/InfromationLocation.css";
export default function InformationLocation(props) {
  const location = props.location;
  return (
    <div className="Location-Holder">
      <div className="Location-Label">Clinic location</div>
      <div className="Location"></div>
    </div>
  );
}
