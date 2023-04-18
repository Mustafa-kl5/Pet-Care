import React from "react";
import CloseBackDropButton from "../../shaerdComponents/CloseBackDropButton";
import plusIcon from "../../Image/adoptationPost.png";
import AddAdoptionForm from "./AddAdoptionForm";

export default function AddAdoptionBackDrop(props) {
  return props.show ? (
    <div className="add-post-backdrop-main">
      <div className="add-post-form-holder">
        <div className="add-post-header-section">
          <div className="add-post-logo-word">
            <div
              className="add-post-logo"
              style={{ backgroundImage: `url("${plusIcon}")` }}
            ></div>
            <div className="add-post-word">Create Adoption Post</div>
          </div>
          <CloseBackDropButton handelClose={props.CloseBackDrop} />
        </div>
        <div className="add-post-form-section">
          <AddAdoptionForm />
        </div>
      </div>
    </div>
  ) : null;
}
