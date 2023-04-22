import React from "react";
import "../../componentStyle/ProfilePage/EditBio.css";
export default function EditBio() {
  return (
    <>
      <div className="edit-bio-header">
        <div className="bio-image"></div>
        <div className="edit-bio-text">Update Bio</div>
      </div>
      <div className="Bio-Edit">
        <form className="Bio-form">
          <input
            className="Bio-Update"
            type={"text"}
            placeholder="Edit Your Bio ~"
          />
          <button className="bio-btn"> Save Changes</button>
        </form>
      </div>
    </>
  );
}
