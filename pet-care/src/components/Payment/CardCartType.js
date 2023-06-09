import React from "react";
import "../../componentStyle/Payment/CardCartType.css";
export default function CardCartType(props) {
  return (
    <div
      className="online-card-type"
      style={{ backgroundImage: `url("${props.imageSrc}")` }}
    ></div>
  );
}
