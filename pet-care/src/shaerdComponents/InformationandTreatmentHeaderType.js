import React from "react";
import CatType from "../Image/CatLogo.png";
import DogType from "../Image/DogLogo.png";
import RabbitType from "../Image/RabbitLogo.png";
import BirdType from "../Image/BirdLogo.png";
import "../shaerdComponentStyle/InformationandTreatmentHeaderType.css";
export default function InformationandTreatmentHeaderType(props) {
  let url = CatType;
  const choice = props.AnimalType;
  if (choice === ":Dogs") {
    url = DogType;
  } else if (choice === ":Birds") {
    url = BirdType;
  } else if (choice === ":Rabbits") {
    url = RabbitType;
  }

  return (
    <div className="Header-Holder">
      <div
        className="Type-Image"
        style={{ backgroundImage: `url("${url}")` }}
      ></div>
      <div className="Type-Text">{props.AnimalType}</div>
    </div>
  );
}
