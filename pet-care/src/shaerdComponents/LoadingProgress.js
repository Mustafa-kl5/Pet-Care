import React from "react";
import "../shaerdComponentStyle/LoadingProgress.css";

export default function LoadingProgress(props) {
  return props.show ? (
    <div className="Loading-Holder-main">
      <span className="loader-spinner"></span>
    </div>
  ) : null;
}
