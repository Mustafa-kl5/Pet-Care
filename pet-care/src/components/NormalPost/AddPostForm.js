import React, { useState, useRef, useEffect } from "react";
import "../../componentStyle/NormalPost/AddPostForm.css";
import ImageUploder from "../../shaerdComponents/ImageUploder";
import ImagePreview from "../../shaerdComponents/ImagePreview";
import { async } from "q";
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingProgress from "../../shaerdComponents/LoadingProgress";
export default function AddPostForm(props) {
  const [recivedImages, setRecivedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
      notify("You Forget To Add At least One Image ");
      return;
    } else {
      setIsLoading(true);
      await api.post("/addPost", formState);
      setIsLoading(false);
      notifySuccess();
      setTimeout(() => {
        props.handleAddPost(true);
        props.closeBackDrop(false);
      }, 2000);
      setFormState({
        postDescription: "",
        postType: "",
        images: [],
      });
    }
  };
  const notify = (massage) =>
    toast.warn(massage, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const notifySuccess = () =>
    toast.success("Your Post Added Successfully", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
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
        <ToastContainer />
      </form>
      <LoadingProgress show={isLoading} />
    </>
  );
}
