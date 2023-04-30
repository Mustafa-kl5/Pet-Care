import React from "react";
import "../../componentStyle/ProfilePage/AdoptionPostState.css";
export default function AdoptionPostState(props) {
  const postId = props.PostID;
  const HandleStateClick = (postId) => {
    console.log(postId);
  };
  return (
    <div className="main-toggle-holder">
      <div className="toggle-button" onClick={HandleStateClick}>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
      <div className="state-text">Active</div>
    </div>
  );
}
