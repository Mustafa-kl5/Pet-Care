import React from "react";
import "../shaerdComponentStyle/LocationView.css";
import image from "../Image/LocationImage.png";
import MapPicker from "react-google-map-picker";

const DefaultLocation = { lat: 31.959542451417164, lng: 35.99211444729038 };
const DefaultZoom = 30;
export default function LocationView(props) {
  return (
    <div className="location-view-holder">
      <div className="location-word">Location</div>
      <div
        className="loaction-holder"
        style={{
          width: `${props.width}`,
          height: `${props.height}`,
        }}
      >
        <MapPicker
          defaultLocation={{ lat: props.lat, lng: props.lng }}
          mapTypeId="roadmap"
          zoom={DefaultZoom}
          style={{
            width: `${props.width}`,
            height: `${props.height}`,
          }}
          apiKey="AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8"
        />
      </div>
    </div>
  );
}
