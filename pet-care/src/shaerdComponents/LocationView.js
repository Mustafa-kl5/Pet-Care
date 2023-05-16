import React, { useEffect, useState } from "react";
import "../shaerdComponentStyle/LocationView.css";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import LoadingBar from "../shaerdComponents/LoadingBar";

const DefaultZoom = 10;

const MapComponent = withGoogleMap((props) => (
  <GoogleMap
    defaultZoom={DefaultZoom}
    defaultCenter={{ lat: props.lat, lng: props.lng }}
  >
    <Marker position={{ lat: props.lat, lng: props.lng }} />
  </GoogleMap>
));

export default function LocationView(props) {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8`;
    script.onerror = () => {
      console.error("Failed to load Google Maps script.");
    };
    script.onload = () => {
      setMapLoaded(true);
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="location-view-holder">
      <div className="location-word">Location</div>
      <div
        className="location-holder"
        style={{
          width: `${props.width}`,
          height: `${props.height}`,
        }}
      >
        {mapLoaded ? (
          <MapComponent
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "100%" }} />}
            lat={props.lat}
            lng={props.lng}
          />
        ) : (
          <LoadingBar />
        )}
      </div>
    </div>
  );
}
