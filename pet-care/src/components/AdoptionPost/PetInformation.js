import React from "react";
import "../../componentStyle/AdoptionPost/PetInformation.css";

export default function PetInformation(props) {
  return (
    <div className="table-content">
      <div className="animal-information-header">
        <div className="animal-information-header-item">Animal Name</div>
        <div className="animal-information-header-item">Animal Type</div>
        <div className="animal-information-header-item">Animal Breed</div>
      </div>
      <div className="animal-information-data">
        <div className="animal-information-data-item">{props.animalName}</div>
        <div className="animal-information-data-item">{props.animalType}</div>
        <div className="animal-information-data-item">{props.animalBrees}</div>
      </div>
    </div>
  );
}
