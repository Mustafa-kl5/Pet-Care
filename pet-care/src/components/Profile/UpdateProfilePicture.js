import React, { useState, useRef, useEffect } from "react";
import "../../componentStyle/ProfilePage/UpdateProfilePicture.css";
import { getUserId } from "../../hooks/auth/getUserId";
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function UpdateProfilePicture() {
  const [userImage, setUserImage] = useState(
    "https://drive.google.com/uc?export=view&id=1E3BnucRlTp-NGO-Za4HjUc8HktclTb-f"
  );
  const fileInputRef = useRef(null);
  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = async () => {
      const base64String = reader.result;
      setUserImage(base64String);

      await api.post(`/changeUserImage/:${getUserId()}`, {
        userImageToUpload: base64String,
      });
      notifySuccess();
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleChooseButtonClick = () => {
    fileInputRef.current.click();
  };
  useEffect(() => {
    getUserImage();
  }, [userImage]);

  const getUserImage = async () => {
    const response = await api.get(`/getProfilePicture/:${getUserId()}`);
    setUserImage(response.data.userImage);
  };

  const notifySuccess = () =>
    toast.success("Your Profile Picture Changed Successfully", {
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
    <div className="update-image-holder">
      <img src={userImage} className="update-user-image" alt="userImage" />
      <ToastContainer />
      <button
        className="uploade-user-image-button"
        onClick={handleChooseButtonClick}
      >
        Upload picture
      </button>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
    </div>
  );
}
