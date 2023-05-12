import React from "react";
import "../shaerdComponentStyle/PostDescription.css";
export default function PostDescription(props) {
  return (
    <div className="post-decription-holder-section">
      <div className="post-decription-word">Description</div>
      <div className="post-decription-scroll">
        <div className="post-decription-holder">{props.postDescription}</div>
      </div>
    </div>
  );
}
