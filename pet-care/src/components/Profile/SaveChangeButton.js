import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../services/api";
import LoadingProgress from "../../shaerdComponents/LoadingProgress";

export default function SaveChangeButton(props) {
  const [updatedPost, setUpdatedPost] = useState({
    postType: props.postType,
    postDescription: props.postDescription,
    images: props.postImage,
  });
  const [postId, setPostId] = useState(props.postId);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setPostId(props.postId);
  }, [props.postId]);

  useEffect(() => {
    setUpdatedPost((prevUpdatedPost) => ({
      ...prevUpdatedPost,
      postType: props.postType,
    }));
  }, [props.postType]);

  useEffect(() => {
    setUpdatedPost((prevUpdatedPost) => ({
      ...prevUpdatedPost,
      postDescription: props.postDescription,
    }));
  }, [props.postDescription]);

  useEffect(() => {
    setUpdatedPost((prevUpdatedPost) => ({
      ...prevUpdatedPost,
      images: props.postImage,
    }));
  }, [props.postImage]);
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
  const notifySuccess = (massage) =>
    toast.success("Your Post Updated Successfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleUpdatePost = async () => {
    if (
      updatedPost.images.length === 0 ||
      updatedPost.postDescription.length === 0
    ) {
      notify("You Forget To Add Picture or Description ");
    } else {
      setIsLoading(!isLoading);
      await api.post(`/updateNormalPost/:${postId}`, updatedPost);
      setIsLoading(false);
      notifySuccess();
    }
  };
  return (
    <>
      <LoadingProgress show={isLoading} />
      <div className="save-button ">
        <button
          type="button"
          className="next-previse-button"
          hidden={props.active}
          onClick={handleUpdatePost}
        >
          Save Change
        </button>
      </div>
      <ToastContainer />
    </>
  );
}
