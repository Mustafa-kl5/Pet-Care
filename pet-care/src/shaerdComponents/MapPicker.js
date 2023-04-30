import React, { useState } from "react";

import MapPicker from "react-google-map-picker";
const DefaultLocation = { lat: 20, lng: 106 };
const DefaultZoom = 10;

export default function MapPickerr() {
  const [defaultLocation] = useState(DefaultLocation);
  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);

  function handleChangeLocation(lat, lng) {
    setLocation({ lat: lat, lng: lng });
  }

  function handleChangeZoom(newZoom) {
    setZoom(newZoom);
  }

  return (
    <div>
      <MapPicker
        defaultLocation={location}
        zoom={zoom}
        style={{ height: "11rem", width: "12rem", zindex: "100" }}
        onChangeLocation={handleChangeLocation}
        onChangeZoom={handleChangeZoom}
        apiKey="AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8"
      />
    </div>
  );
}
