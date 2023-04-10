import React from "react";
import "../../componentStyle/NormalPost/CreatePostButton.css";

export default function CreatePostButton(props) {
  return (
    <div className="create-normal-post-holder">
      <button
        type="button"
        className="create-normal-post-button"
        onClick={props.buttonClick}
      >
        Add Post
      </button>
    </div>
  );
}
