import React, { useState } from "react";
import "../../componentStyle/AdoptionPost/AddAdoptionForm.css";
import ImagePreview from "../../shaerdComponents/ImagePreview";
import ImageUploder from "../../shaerdComponents/ImageUploder";
import LocationView from "../../shaerdComponents/LocationView";

export default function AddAdoptionForm(props) {
  const [addAdoptionFormstate, setAddAdoptionFormstate] = useState({
    animalType: "",
    animalBreed: "",
    animalName: "",
    WhatsappNumber: "",
    facebookLink: "",
    phoneNumber: "",
    description: "",
    images: [],
    location: {
      lan: "",
      lng: "",
    },
  });
  const handleAnimalType = (event) => {
    setAddAdoptionFormstate({
      ...addAdoptionFormstate,
      animalType: event.target.value,
    });
  };
  const handleAnimalBrees = (event) => {
    setAddAdoptionFormstate({
      ...addAdoptionFormstate,
      animalBreed: event.target.value,
    });
  };
  const handleAnimalName = (event) => {
    setAddAdoptionFormstate({
      ...addAdoptionFormstate,
      animalName: event.target.value,
    });
  };
  const handleWhatsapp = (event) => {
    setAddAdoptionFormstate({
      ...addAdoptionFormstate,
      WhatsappNumber: event.target.value,
    });
  };
  const handleFacebook = (event) => {
    setAddAdoptionFormstate({
      ...addAdoptionFormstate,
      facebookLink: event.target.value,
    });
  };
  const handlePhoneNumber = (event) => {
    setAddAdoptionFormstate({
      ...addAdoptionFormstate,
      phoneNumber: event.target.value,
    });
  };
  const handleDescription = (event) => {
    setAddAdoptionFormstate({
      ...addAdoptionFormstate,
      description: event.target.value,
    });
  };

  const addAdoptionHandlerSubmit = (event) => {
    event.preventDefault();
    props.sendAddAdoptionData(addAdoptionFormstate, false);
    setAddAdoptionFormstate({
      animalType: "",
      animalBreed: "",
      animalName: "",
      WhatsappNumber: "",
      facebookLink: "",
      phoneNumber: "",
      description: "",
      images: [],
      location: {
        lan: "",
        lng: "",
      },
    });
  };
  return (
    <form
      className="add-adoption-form-holder"
      onSubmit={addAdoptionHandlerSubmit}
    >
      <div className="add-adoption-form-left-section">
        <div className="add-adoption-animal-information">
          <div className="header-word">Animal Information</div>
          <div className="add-adoption-animal-type-name-breed">
            <input
              placeholder="Animal Type"
              className="add-adoption-input"
              onChange={handleAnimalType}
              value={addAdoptionFormstate.animalType}
            />
            <input
              placeholder="Animal Breed"
              className="add-adoption-input"
              onChange={handleAnimalBrees}
              value={addAdoptionFormstate.animalBreed}
            />
            <input
              placeholder="Animal Name"
              className="add-adoption-input"
              onChange={handleAnimalName}
              value={addAdoptionFormstate.animalName}
            />
          </div>
        </div>
        <div className="add-adoption-description-social-media">
          <div className="add-adoption-description">
            <div className="header-word">Description</div>
            <input
              placeholder="what are you thinking about"
              className="add-adoption-input-description"
              onChange={handleDescription}
              value={addAdoptionFormstate.description}
            />
          </div>
          <div className="add-adoption-social-media">
            <div className="header-word">Social Media</div>
            <input
              placeholder="Whatsapp Number"
              className="add-adoption-input"
              onChange={handleWhatsapp}
              value={addAdoptionFormstate.WhatsappNumber}
            />
            <input
              placeholder="Facebook link (optional)"
              className="add-adoption-input"
              onChange={handleFacebook}
              value={addAdoptionFormstate.facebookLink}
            />
            <input
              placeholder="Phone Number (optional)"
              className="add-adoption-input"
              onChange={handlePhoneNumber}
              value={addAdoptionFormstate.phoneNumber}
            />
          </div>
        </div>
        <div className="add-adoption-upload-location">
          <ImageUploder height="11rem" width="12.5rem" />
          <LocationView height="11rem" width="12.5rem" />
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
