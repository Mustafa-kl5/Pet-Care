import React from "react";
import CatType from "../Image/CatLogo.png";
import DogType from "../Image/DogLogo.png";
import RabbitType from "../Image/RabbitLogo.png";
import BirdType from "../Image/BirdLogo.png";
import "../shaerdComponentStyle/InformationandTreatmentHeaderType.css";
export default function InformationandTreatmentHeaderType(props) {
  return (
    <>
      <div className="info-Header">
        <div
          className="info-Logo"
          style={{ backgroundImage: `url("${props.AnimalTypeImage}")` }}
        />
        <div className="Info-Text">{props.AnimalType}</div>
      </div>
    </>
  );
}
