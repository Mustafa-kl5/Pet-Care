import React from "react";
import "../shaerdComponentStyle/InformationandTreatmentHeaderType.css";
export default function InformationandTreatmentHeaderType(props) {
  return (
    <>
      <div className="info-Header">
        <div
          className="info-Logo"
          style={{ backgroundImage: `url("${props?.AnimalTypeImage}")` }}
        />
        <div className="Info-Text">{props?.AnimalType}</div>
      </div>
    </>
  );
}
