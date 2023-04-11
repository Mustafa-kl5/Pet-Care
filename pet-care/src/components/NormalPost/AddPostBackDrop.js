import React from "react";
import "../../componentStyle/NormalPost/AddPostBackDrop.css";

export default function AddPostBackDrop(props) {
  return props.show ? (
    <div className="add-post-backdrop-main">
      <div className="add-post-form-holder"></div>
    </div>
  ) : null;
}
