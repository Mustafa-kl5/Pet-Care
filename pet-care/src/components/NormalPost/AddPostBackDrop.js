import React from "react";
import "../../componentStyle/NormalPost/AddPostBackDrop.css";
import CloseBackDropButton from "../../shaerdComponents/CloseBackDropButton";
import plusIcon from "../../Image/postBox.png";
import AddPostForm from "./AddPostForm";
import "animate.css";

export default function AddPostBackDrop(props) {
  const handelCloseBackDrop = (backdrop) => {
    props.sendCloseBackDrop(backdrop);
  };
  const handleAddPost = (newPost) => {
    props.handleAddPost(newPost);
  };

  return props.show ? (
    <div
      className={`add-post-backdrop-main animate__animated ${
        props.showExitAnimation
          ? "animate__slideOutRight"
          : "animate__slideInRight"
      }`}
    >
      <div className={`add-post-form-holder `}>
        <div className="add-post-header-section">
          <div className="add-post-logo-word">
            <div
              className="add-post-logo"
              style={{ backgroundImage: `url("${plusIcon}")` }}
            ></div>
            <div className="add-post-word">Create Post</div>
          </div>
          <CloseBackDropButton handelClose={props.CloseBackDrop} />
        </div>
        <div className="add-post-form-section">
          <AddPostForm
            closeBackDrop={handelCloseBackDrop}
            handleAddPost={handleAddPost}
          />
        </div>
      </div>
    </div>
  ) : null;
}
