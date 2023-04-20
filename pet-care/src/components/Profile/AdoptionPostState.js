import React from "react";
import "../../componentStyle/ProfilePage/AdoptionPostState.css";
export default function AdoptionPostState(props) {
  return (
    <div className="main-toggle-holder">
      <div className="Toggle button">
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
      <div className="state-text">{props.text}</div>
    </div>
  );
}
