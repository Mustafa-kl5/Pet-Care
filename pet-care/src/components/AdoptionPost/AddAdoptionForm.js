import React from "react";
import "../../componentStyle/AdoptionPost/AddAdoptionForm.css";
import ImagePreview from "../../shaerdComponents/ImagePreview";
import ImageUploder from "../../shaerdComponents/ImageUploder";

export default function AddAdoptionForm() {
  return (
    <form className="add-adoption-form-holder">
      <div className="add-adoption-form-left-section">
        <div className="add-adoption-animal-information">
          <div className="header-word">Animal Information</div>
          <div className="add-adoption-animal-type-name-breed">
            <input placeholder="Animal Type" className="add-adoption-input" />
            <input placeholder="Animal Breed" className="add-adoption-input" />
            <input placeholder="Animal Name" className="add-adoption-input" />
          </div>
        </div>
        <div className="add-adoption-description-social-media">
          <div className="add-adoption-description">
            <div className="header-word">Description</div>
            <input
              placeholder="what are you thinking about"
              className="add-adoption-input-description"
            />
          </div>
          <div className="add-adoption-social-media">
            <div className="header-word">Social Media</div>
            <input
              placeholder="Whatsapp Number"
              className="add-adoption-input"
            />
            <input
              placeholder="Facebook link (optional)"
              className="add-adoption-input"
            />
            <input
              placeholder="Phone Number (optional)"
              className="add-adoption-input"
            />
          </div>
        </div>
        <div className="add-adoption-upload-location">
          <ImageUploder height="11rem" width="12.5rem" />
        </div>
      </div>
      <div className="add-adoption-form-right-section">
        <ImagePreview />
        <button className="add-adoption-submit-button" type="submit">
          POST
        </button>
      </div>
    </form>
  );
}
