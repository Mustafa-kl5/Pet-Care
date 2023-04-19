import React from "react";
import image from "../../Image/mastercard.png";
import "../../componentStyle/Payment/CardCartType.css";
export default function CardCartType() {
  return (
    <div
      className="online-card-type"
      style={{ backgroundImage: `url("${image}")` }}
    ></div>
  );
}
