import React from "react";
import "../../componentStyle/AdoptionPost/AdoptionPostStatus.css";

export default function AdoptionPostStatus(props) {
  return (
    <div className="adoption-post-status-holder">
      <div
        className={
          props.status ? "status-section adopted" : "status-section not-adopted"
        }
      >
        {props.status ? "The pet is adopted " : "The pet is not adopted yet"}
      </div>
    </div>
  );
}
