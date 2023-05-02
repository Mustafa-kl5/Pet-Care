import React, { useEffect, useState } from "react";
import "../shaerdComponentStyle/MapPicker.css";
import MapPicker from "react-google-map-picker";
import locationIcon from "../Image/location.png";

const DefaultLocation = { lat: 31.959542451417164, lng: 35.99211444729038 };
const DefaultZoom = 30;
export default function LocationPicker(props) {
  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);
  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);
  const [showMap, SetShowMap] = useState(false);
  function handleChangeLocation(lat, lng) {
    setLocation({ lat: lat.toString(), lng: lng.toString() });
  }
  useEffect(() => {
    props.sendLocation(location);
  }, [location]);
  function handleChangeZoom(newZoom) {
    setZoom(newZoom);
  }
  const handleShowMap = () => {
    SetShowMap(!showMap);
  };

  return (
    <div className="map-picker-holder">
      <div className="map-picker-location-word">Location</div>
      <div className="open-map" onClick={handleShowMap}>
        <div className="location-icon"></div>
        <div className="location-word-choose"> click to choose location</div>
      </div>
      {showMap ? (
        <div className="back-drop-map">
          <MapPicker
            defaultLocation={defaultLocation}
            mapTypeId="roadmap"
            zoom={zoom}
            onChangeLocation={handleChangeLocation}
            style={{ height: "30rem", width: "40rem" }}
            onChangeZoom={handleChangeZoom}
            apiKey="AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8"
          />

          <button
            type="button"
            className="close-map-button"
            onClick={handleShowMap}
          >
            Save Location
          </button>
        </div>
      ) : null}
    </div>
  );
}
