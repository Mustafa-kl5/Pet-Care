import React, { useState } from "react";
import "../../componentStyle/NormalPost/AddPostForm.css";
import ImageUploder from "../../shaerdComponents/ImageUploder";
import ImagePreview from "../../shaerdComponents/ImagePreview";
export default function AddPostForm(props) {
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
  const handelAddPostForm = (event) => {
    event.preventDefault();
    const backDropCondition = false;
    props.sendPostData(formState, backDropCondition);
    setFormState({
      postDescription: "",
      postType: "",
      images: [],
      postTime: {},
    });
  };
  return (
    <form
      className="addpost-form-holder"
      id="addpost-form"
      onSubmit={handelAddPostForm}
    >
      <div className="addpost-form-left-section">
        <div className="addpost-descirption-input-holder">
          <div className="addpost-descirption-input">
            <div className="addpost-descirption">Description</div>
            <input
              placeholder="what are you thinking about"
              className="addpost-input"
              onChange={handelPostDescription}
              value={formState.postDescription}
            />
          </div>
          <div className="addpost-type-select">
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
      <div className="addpost-form-right-section">
        <ImagePreview handelDeleteImage={deleteImage} images={postImages} />
        <button className="addpost-submit-button" type="submit">
          POST
        </button>
      </div>
    </form>
  );
}
