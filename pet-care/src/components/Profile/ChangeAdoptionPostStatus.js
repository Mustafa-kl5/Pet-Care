import React, { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../services/api";

export default function ChangeAdoptionPostStatus(props) {
  const [postId, setPostId] = useState(props.postId);

  const [isActive, setIsActive] = useState(props.active);
  useEffect(() => {
    setPostId(props.postId);
  }, [props.postId]);

  useEffect(() => {
    setIsActive(props.active);
  }, [props.active]);
  const handleAdoptionPostStatus = async () => {
    api.post(`/changeAdoptionPostStatus/:${postId}`);
    setIsActive(!isActive);
    notifySuccess();
    setTimeout(() => {
      props.reloadPost();
    }, 2000);
  };

  const notifySuccess = () =>
    toast.success("Your Post status changed Successfully", {
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
    <div className="edit-checkbox-word-input-adoption">
      <div className="edit-checkbox-word-adoption">Adoption status change</div>
      <label className="switch">
        <input
          type="checkbox"
          onChange={handleAdoptionPostStatus}
          checked={isActive}
        />
        <span className="slider"></span>
      </label>
      <ToastContainer />
    </div>
  );
}
