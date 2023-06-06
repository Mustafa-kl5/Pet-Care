import React from "react";
import "../../componentStyle/Information&Treatment/InformationText.css";
export default function InformationText(props) {
  return (
    <div className="text-holder">
      <div className="AnimalBreed-label">{props.Breed}</div>
      <div className="BreedDesc">{props.Information}</div>
    </div>
  );
}
