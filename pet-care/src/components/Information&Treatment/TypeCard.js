import React from "react";
import "../../componentStyle/Information&Treatment/TypeCard.css";
function TypeCard(props) {
  return (
    <div className="type-card">
      <div
        className="type-image"
        style={{ backgroundImage: `url("${props.TypeImage}")` }}
      ></div>
      <div className="type-name">{props.TypeName}</div>
    </div>
  );
}
export default TypeCard;
