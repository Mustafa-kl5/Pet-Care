import React from "react";
import "../../componentStyle/ProfilePage/ProfileImageSection.css";

export default function ProfileImagSection() {
  const FileSelectHandler = (event) => {
    console.log(event);
  };
  return (
    <>
      <div className="change-image-header">
        <div className="change-image-logo"></div>
        <div className="change-image-label">Profile Image</div>
      </div>
      <div className="change-image-section">
        <div className="image-holder"></div>

        <button className="change-image-btn">Change Image</button>
      </div>
    </>
  );
}
