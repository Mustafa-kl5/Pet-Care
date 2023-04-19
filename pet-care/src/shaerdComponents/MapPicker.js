import React, { useState } from "react";
import LocationPicker from "react-location-picker";
const defaultPosition = {
  lat: 27.9878,
  lng: 86.925,
};
export default function MapPicker() {
  const [locationState, setLocationState] = useState({
    address: "Kala Pattar Ascent Trail, Khumjung 56000, Nepal",
    position: {
      lat: 0,
      lng: 0,
    },
  });
  const handleLocationChange = ({ position1, address1, places }) => {
    setLocationState({
      ...locationState,
      position: position1,
      address: address1,
    });
  };
  return (
    <div>
      <h1>{locationState.address}</h1>
      <div>
        <LocationPicker
          containerElement={<div style={{ height: "500px" }} />}
          mapElement={<div style={{ height: "400px" }} />}
          defaultPosition={defaultPosition}
          onChange={handleLocationChange}
        />
      </div>
    </div>
  );
}
