import React, { useState, useRef } from "react";
import "../../componentStyle/NormalPost/AddPostForm.css";
import ImageUploder from "../../shaerdComponents/ImageUploder";
import ImagePreview from "../../shaerdComponents/ImagePreview";
export default function AddPostForm(props) {
  const [recivedImages, setRecivedImages] = useState([]);
  const childRef = useRef();
  const [formState, setFormState] = useState({
    postDescription: "",
    postType: "missing",
    images: [],
  });

  const reciveImages = (images) => {
    setRecivedImages(images);
    setFormState({
      ...formState,
      images: images,
    });
  };
  const deleteImage = (currentIndex) => {
    childRef.current.deleteImage(currentIndex);
  };

  const handelPostDescription = (event) => {
    setFormState({
      ...formState,
      postDescription: event.target.value,
    });
  };
  const handelTypeDescription = (event) => {
    setFormState({
      ...formState,
      postType: event.target.value,
    });
  };
  const handelAddPostForm = (event) => {
    event.preventDefault();
    props.sendPostData(formState);
    setFormState({
      postDescription: "",
      postType: "",
      images: [],
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
        <ImageUploder
          width="25rem"
          height="14rem"
          sendImages={reciveImages}
          ref={childRef}
        />
      </div>
      <div className="addpost-form-right-section">
        <ImagePreview handelDeleteImage={deleteImage} images={recivedImages} />
        <button className="addpost-submit-button" type="submit">
          POST
        </button>
      </div>
    </form>
  );
}
