import React, { useState } from "react";
import "../../componentStyle/ProfilePage/UpdatePostBackDrop.css";
import CloseBackDropButton from "../../shaerdComponents/CloseBackDropButton";
import plusIcon from "../../Image/postBox.png";
import UpdatePostForm from "./UpdatePostForm";
export default function UpdatePostBackDrop(props) {
  return props.show ? (
    <div className="update-post-backdrop-main">
      <div className="update-post-form-holder">
        <div className="update-post-header-section">
          <div className="update-post-logo-word">
            <div
              className="update-post-logo"
              style={{ backgroundImage: `url("${plusIcon}")` }}
            ></div>
            <div className="update-post-word">Update Post</div>
          </div>
          <CloseBackDropButton handelClose={props.CloseBackDrop} />
        </div>
        <div className="update-post-form-section">
          <UpdatePostForm />
        </div>
      </div>
    </div>
  ) : null;
}
