import React from "react";
import "../../componentStyle/AdoptionPost/AdoptionPostCard.css";
function AdoptionPostCard(props) {
  return (
    <>
      {" "}
      <div className="Adoption-card">
        <div className="post-image"></div>
        <div className="post-info">
          <div className="user-image"></div>
          <div className="user-name">Ahmad zuiod</div>
        </div>
        <div className="state-del">{props.Del}</div>
      </div>
    </>
  );
}
export default AdoptionPostCard;
