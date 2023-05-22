import React, { useState, useRef, useEffect } from "react";
import "../../componentStyle/NormalPost/AddPostForm.css";
import ImageUploder from "../../shaerdComponents/ImageUploder";
import ImagePreview from "../../shaerdComponents/ImagePreview";
import { async } from "q";
import api from "../../services/api";
import ErrorBackDrop from "../ErrorMessages/ErrorBackDrop";
import LoadingProgress from "../../shaerdComponents/LoadingProgress";
import WarningBar from "../../shaerdComponents/WarningBar";
export default function AddPostForm(props) {
  const [recivedImages, setRecivedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [warning, setWarning] = useState(false);
  const [warningMassage, setWarningMassage] = useState(
    "You must add at least one photo"
  );
  const childRef = useRef();
  const [formState, setFormState] = useState({
    postDescription: "",
    postType: "missing",
    images: [],
  });
  useEffect(() => {
    if (warning) {
      const timer = setTimeout(() => {
        setWarning(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [warning]);
  const reciveImages = (images) => {
    setRecivedImages(images);
    setFormState({
      ...formState,
      images: images,
    });
  };
  const reciveImagesPath = (imagePath) => {};
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

  const handelAddPostForm = async (event) => {
    event.preventDefault();

    if (formState.images.length === 0) {
      setWarning(true);
      return;
    } else {
      setIsLoading(true);
      await api.post("/addPost", formState);
      setIsLoading(false);
      props.handleAddPost(true);
      props.closeBackDrop(false);
      setFormState({
        postDescription: "",
        postType: "",
        images: [],
      });
    }
  };
  return (
    <>
      <form
        className="addpost-form-holder"
        id="addpost-form"
        onSubmit={handelAddPostForm}
      >
        <div className="addpost-form-left-section">
          <div className="addpost-descirption-input-holder">
            <div className="addpost-descirption-input">
              <div className="addpost-descirption">Description</div>
              <textarea
                placeholder="what are you thinking about"
                className="addpost-input"
                onChange={handelPostDescription}
                value={formState.postDescription}
                required={true}
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
            sendImagesPath={reciveImagesPath}
          />
        </div>
        <div className="addpost-form-right-section">
          <ImagePreview
            handelDeleteImage={deleteImage}
            images={recivedImages}
          />
          <button className="addpost-submit-button" type="submit">
            POST
          </button>
        </div>
      </form>
      <LoadingProgress show={isLoading} />
      <WarningBar showWarning={warning} massage={warningMassage} />
    </>
  );
}
