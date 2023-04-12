import React from "react";
import "../shaerdComponentStyle/CloseBackDropButton.css";
import closeIcon from "../Image/close.png";
export default function CloseBackDropButton(props) {
  return (
    <button
      type="button"
      className="back-Drop-close"
      style={{ backgroundImage: `url("${closeIcon}")` }}
      onClick={props.handelClose}
    ></button>
  );
}
