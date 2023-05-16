import React, { useEffect, useState } from "react";
import "../shaerdComponentStyle/MapPicker.css";
import { GoogleMap, Marker } from "@react-google-maps/api";

const LocationPicker = (props) => {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 32.00788395891741,
    lng: 35.96250060135491,
  });
  useEffect(() => {
    props.sendLocation(selectedLocation);
  }, [selectedLocation]);
  const [showMap, setShowMap] = useState(false);

  const handleShowMap = () => {
    setShowMap(!showMap);
  };

  const handleMapClick = (event) => {
    const { latLng } = event;
    setSelectedLocation({ lat: latLng.lat(), lng: latLng.lng() });
  };

  return (
    <div className="map-picker-holder">
      <div className="map-picker-location-word">Location</div>
      <div className="open-map" onClick={handleShowMap}>
        <div className="location-icon"></div>
        <div className="location-word-choose">Click to choose a location</div>
      </div>
      {showMap && (
        <div className="back-drop-map">
          <GoogleMap
            mapContainerStyle={{ height: "30rem", width: "40rem" }}
            center={selectedLocation || { lat: 0, lng: 0 }}
            zoom={selectedLocation ? 12 : 2}
            onClick={handleMapClick}
          >
            {selectedLocation && <Marker position={selectedLocation} />}
          </GoogleMap>
          <button
            type="button"
            className="close-map-button"
            onClick={handleShowMap}
          >
            Save Location
          </button>
        </div>
      )}
    </div>
  );
};

export default LocationPicker;
