import React from "react";
import "../shaerdComponentStyle/inputFIledStyle.css";

export default function InputFiled(props) {
  return (
    <input className="input-filed-shape" placeholder={props.placeholder} />
  );
}
