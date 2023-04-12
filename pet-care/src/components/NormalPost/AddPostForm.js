import React, { useState } from "react";
import "../../componentStyle/NormalPost/AddPostForm.css";
import ImageUploder from "../../shaerdComponents/ImageUploder";
import ImagePreview from "../../shaerdComponents/ImagePreview";
export default function AddPostForm() {
  const [postImages, setPostImages] = useState({});
  const reciveImages = (images) => {
    setPostImages(images);
  };
  const deleteImage = () => {
    console.log("del");
  };
  return (
    <form className="addpost-form-holder" id="addpost-form">
      <div className="addpost-form-left-section">
        <div className="addpost-descirption-input-holder">
          <div className="addpost-descirption-input">
            <div className="addpost-descirption">Desciption</div>
            <input
              placeholder="what are you thinking about"
              className="addpost-input"
            />
          </div>
          <div className="addpost-type-select">
            <div className="type-word">Type</div>
            <select className="select-post-type">
              <option value="missing">Missing</option>
              <option value="asking">Asking</option>
            </select>
          </div>
        </div>
        <ImageUploder width="25rem" height="14rem" sendImages={reciveImages} />
      </div>
      <div className="addpost-form-right-section">
        <ImagePreview handelDeleteImage={deleteImage} images={postImages} />
      </div>
    </form>
  );
}
