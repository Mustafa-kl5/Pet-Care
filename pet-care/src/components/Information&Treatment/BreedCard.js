import React from "react";
import "../../componentStyle/Information&Treatment/BreedCard.css";

export default function BreedCard(props) {
  return (
    <div className="breed-card">
      <div
        className="breed-image"
        style={{ backgroundImage: `url("${props.BreedImage}")` }}
      >
        <div className="breed-name">{props.BreedName}</div>
      </div>
    </div>
  );
}
