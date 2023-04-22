import React from "react";
import "../../componentStyle/ProfilePage/AdoptionPostSection.css";
export default function AdoptionPostSection(props) {
  return (
    <div className="adoption-post-holder">
      <div className="adoption-logo-holder"></div>
      <div className="adoption-text">{props.text} Adoption Post</div>
    </div>
  );
}
