import React, { useState } from "react";
import "../../componentStyle/ProfilePage/UpdatePostFrom.css";
import ImageUploder from "../../shaerdComponents/ImageUploder";
import ImagePreview from "../../shaerdComponents/ImagePreview";
export default function UpdatePostForm(props) {
  const [postImages, setPostImages] = useState({});
  const [formState, setFormState] = useState({
    postDescription: "",
    postType: "",
    images: [],
    postTime: {},
  });
  const reciveImages = (images) => {
    setPostImages(images);
  };
  const deleteImage = () => {
    console.log("del");
  };
  const handelPostDescription = (event) => {
    setFormState({
      ...formState,
      postDescription: event.target.value,
      postTime: new Date(),
    });
  };
  const handelTypeDescription = (event) => {
    setFormState({
      ...formState,
      postType: event.target.value,
      postTime: new Date(),
    });
  };

  return (
    <form className="addpost-form-holder">
      <div className="update-post-form-left-section">
        <div className="update-post-descirption-input-holder">
          <div className="update-post-descirption-input">
            <div className="update-post-descirption">Description</div>
            <input
              placeholder="what are you thinking about"
              className="update-post-input"
              onChange={handelPostDescription}
              value={formState.postDescription}
            />
          </div>
          <div className="update-post-type-select">
            <div className="type-word">Type</div>
            <select
              className="select-post-type"
              onChange={handelTypeDescription}
              value={formState.postType}
            >
              <option value="missing">Missing</option>
              <option value="asking">Asking</option>
            </select>
          </div>
        </div>
        <ImageUploder width="25rem" height="14rem" sendImages={reciveImages} />
      </div>
      <div className="update-post-form-right-section">
        <ImagePreview handelDeleteImage={deleteImage} images={postImages} />
        <button className="update-post-submit-button" type="submit">
          POST
        </button>
      </div>
    </form>
  );
}
