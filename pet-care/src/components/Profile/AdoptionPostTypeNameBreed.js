import React, { useEffect, useState } from "react";
import "../../componentStyle/ProfilePage/AdoptionPostTypeNameBreed.css";

export default function AdoptionPostTypeNameBreed(props) {
  const [animalType, setAnimalType] = useState(props.animalType);
  const [animalName, setAnimalName] = useState(props.animalName);
  const [animalBrees, setAnimalBrees] = useState(props.animalBreed);

  useEffect(() => {
    setAnimalType(props.animalType);
  }, [props.animalType]);
  useEffect(() => {
    setAnimalName(props.animalName);
  }, [props.animalName]);

  useEffect(() => {
    setAnimalBrees(props.animalBreed);
  }, [props.animalBreed]);
  return (
    <div className="edit-table-content">
      <div className="edit-animal-information-header">
        <div className="edit-animal-information-header-item">Animal Name</div>
        <div className="edit-animal-information-header-item">Animal Type</div>
        <div className="edit-animal-information-header-item">Animal Breed</div>
      </div>
      <div className="edit-animal-information-data">
        <div className="edit-animal-information-data-item">{animalName}</div>
        <div className="edit-animal-information-data-item">{animalType}</div>
        <div className="edit-animal-information-data-item">{animalBrees}</div>
      </div>
    </div>
  );
}
