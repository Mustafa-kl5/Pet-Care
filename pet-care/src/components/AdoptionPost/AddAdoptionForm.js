import React, { useState, useRef, useEffect } from "react";
import "../../componentStyle/AdoptionPost/AddAdoptionForm.css";
import ImagePreview from "../../shaerdComponents/ImagePreview";
import ImageUploder from "../../shaerdComponents/ImageUploder";
import LocationPicker from "../../shaerdComponents/MapPicker";
import LoadingProgress from "../../shaerdComponents/LoadingProgress";
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { animalTypeSelector } from "../../Constant/AnimalTypeSelector";

export default function AddAdoptionForm(props) {
  const [isLoading, setIsLoading] = useState(false);

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
      lat: 32,
      lng: 35,
    },
  });
  const [recivedImages, setRecivedImages] = useState([]);
  const childRef = useRef();

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
  const reciveImages = (images) => {
    setRecivedImages(images);
    setAddAdoptionFormstate({
      ...addAdoptionFormstate,
      images: images,
    });
  };
  const reciveImagesPath = (imagePath) => {};
  const deleteImage = (currentIndex) => {
    childRef.current.deleteImage(currentIndex);
  };

  const reciveLocation = (selectedLocation) => {
    setAddAdoptionFormstate((prevState) => ({
      ...prevState,
      location: selectedLocation,
    }));
  };

  const addAdoptionHandlerSubmit = async (event) => {
    event.preventDefault();
    if (addAdoptionFormstate.images.length === 0) {
      notify("You Forget To Add At least One Image ");
      return;
    }

    setIsLoading(true);
    await api.post("/addAdoptionPost", addAdoptionFormstate);
    setIsLoading(false);
    notifySuccess();
    setTimeout(() => {
      props.CloseBackDrop();
      props.reloadPosts();
    }, 2000);

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
  const notifySuccess = () =>
    toast.success("Your Offer Added Successfully", {
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
      <form
        className="add-adoption-form-holder"
        onSubmit={addAdoptionHandlerSubmit}
      >
        <div className="add-adoption-form-left-section">
          <div className="add-adoption-animal-information">
            <div className="header-word">Animal Information</div>
            <div className="add-adoption-animal-type-name-breed">
              <select
                placeholder="Animal Type"
                className="add-adoption-select-input"
                onChange={handleAnimalType}
                value={addAdoptionFormstate.animalType}
                required={true}
              >
                <option>Animal Types</option>
                {animalTypeSelector()}
              </select>
              <input
                placeholder="Animal Breed"
                className="add-adoption-input"
                onChange={handleAnimalBrees}
                value={addAdoptionFormstate.animalBreed}
                required={true}
              />
              <input
                placeholder="Animal Name"
                className="add-adoption-input"
                onChange={handleAnimalName}
                value={addAdoptionFormstate.animalName}
                required={true}
              />
            </div>
          </div>
          <div className="add-adoption-description-social-media">
            <div className="add-adoption-description">
              <div className="header-word">Description</div>
              <textarea
                placeholder="what are you thinking about"
                className="add-adoption-input-description"
                onChange={handleDescription}
                value={addAdoptionFormstate.description}
                required={true}
              />
            </div>
            <div className="add-adoption-social-media">
              <div className="header-word">Social Media</div>
              <input
                placeholder="Whatsapp Number"
                className="add-adoption-input"
                onChange={handleWhatsapp}
                value={addAdoptionFormstate.WhatsappNumber}
                required={true}
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
            <ImageUploder
              height="11rem"
              width="12.5rem"
              sendImages={reciveImages}
              ref={childRef}
              sendImagesPath={reciveImagesPath}
            />
            <LocationPicker sendLocation={reciveLocation} />
          </div>
        </div>
        <div className="add-adoption-form-right-section">
          <ImagePreview
            handelDeleteImage={deleteImage}
            images={recivedImages}
          />
          <button className="add-adoption-submit-button" type="submit">
            POST
          </button>
        </div>
        <ToastContainer />
      </form>
      <LoadingProgress show={isLoading} />
    </>
  );
}
