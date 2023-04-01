import React from "react";
import "../../../componentStyle/LoginForm/LeftImage.css";

function LeftImage(props) {
  return (
    <div className="image-holder" style={{ width: `${props.width}` }}></div>
  );
}

export default LeftImage;
