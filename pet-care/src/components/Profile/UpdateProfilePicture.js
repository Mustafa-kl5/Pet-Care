import React, { useState, useRef, useEffect } from "react";
import "../../componentStyle/ProfilePage/UpdateProfilePicture.css";
import defaultUserImage from "../../Image/cat.jpg";
import { getUserId } from "../../hooks/auth/getUserId";
import api from "../../services/api";
import { id } from "date-fns/locale";
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

      const response = await api.post(`/changeUserImage/:${getUserId()}`, {
        userImageToUpload: base64String,
      });
      console.log(response.data);
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

  return (
    <div className="update-image-holder">
      <img src={userImage} className="update-user-image" />
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
