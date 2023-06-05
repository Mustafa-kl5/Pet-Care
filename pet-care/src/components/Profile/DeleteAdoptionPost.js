import React, { useEffect, useState } from "react";
import "../../componentStyle/ProfilePage/DeleteNormalPost.css";
import api from "../../services/api";
import LoadingProgress from "../../shaerdComponents/LoadingProgress";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function DeleteAdoptionPost(props) {
  const [postId, setPostId] = useState(props.postId);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setPostId(props.postId);
  }, [props.postId]);

  const handleDeletePost = async () => {
    setIsLoading(true);
    await api.delete(`/deleteAdoptionPost/:${postId}`);
    setIsLoading(false);

    notifySuccess();
    setTimeout(() => {
      props.reloadPost();
    }, 2000);
  };
  const notifySuccess = () =>
    toast.success("Your Post Deleted Successfully", {
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
      <LoadingProgress show={isLoading} />
      <div className="delete-normal-post">
        <button
          type="button"
          className="delete-normal-post-button"
          onClick={handleDeletePost}
        >
          Delete Post
        </button>
        <ToastContainer />
      </div>
    </>
  );
}
