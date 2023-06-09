import React from "react";
import "../../componentStyle/ProfilePage/ProfileOption.css";
import ImageIcon from "../../Image/Change-Image.png";
import resetPassword from "../../Image/password-reset.png";
import postIcon from "../../Image/AdoptionCard-logo.png";
import pasketIcon from "../../Image/backet.png";
import bioIcon from "../../Image/UpdateBio.jpg";
export default function ProfileOption(props) {
  const handleButtonClick = (option, icon) => {
    props.handleCilck(option, icon);
  };

  return (
    <div className="profile-option-holder">
      <div className="profile-option-word">Profile Option :</div>
      <div className="option-holder">
        <div
          className="option-item"
          onClick={() => handleButtonClick("Update Profile Image", ImageIcon)}
        >
          <div
            className="option-icon"
            style={{ backgroundImage: `url("${ImageIcon}")` }}
          ></div>
          Update Profile Image
        </div>
        <div
          className="option-item"
          onClick={() => handleButtonClick("Password reset", resetPassword)}
        >
          <div
            className="option-icon"
            style={{ backgroundImage: `url("${resetPassword}")` }}
          ></div>
          Password reset
        </div>
        <div
          className="option-item"
          onClick={() =>
            handleButtonClick(
              "Delete adoption post or Update post status",
              postIcon
            )
          }
        >
          <div
            className="option-icon"
            style={{ backgroundImage: `url("${postIcon}")` }}
          ></div>
          Delete adoption post or Update post status
        </div>
        <div
          className="option-item"
          onClick={() => handleButtonClick("Edite post or delete", postIcon)}
        >
          <div
            className="option-icon"
            style={{ backgroundImage: `url("${postIcon}")` }}
          ></div>
          Edite post or delete
        </div>
        <div
          className="option-item"
          onClick={() => handleButtonClick("Favourite Adoption Post", postIcon)}
        >
          <div
            className="option-icon"
            style={{ backgroundImage: `url("${postIcon}")` }}
          ></div>
          Favourite Adoption Post
        </div>
        <div
          className="option-item"
          onClick={() => handleButtonClick("Order History", pasketIcon)}
        >
          <div
            className="option-icon"
            style={{ backgroundImage: `url("${pasketIcon}")` }}
          ></div>
          Order History
        </div>
      </div>
    </div>
  );
}
