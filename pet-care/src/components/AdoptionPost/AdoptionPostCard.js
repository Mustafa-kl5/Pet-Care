import React from "react";
import "../../componentStyle/AdoptionPost/AdoptionPostCard.css";
import { Link } from "react-router-dom";
function AdoptionPostCard(props) {
  return (
    <div className="Adoption-card">
      <Link
        className="Adoption-card-link"
        to={`/adoptionPostData/:${props.postId}`}
      >
        <div className="post-image">{props.DeleteComp}</div>
      </Link>
      <div className="post-info">
        <div className="user-image"></div>
        <div className="user-name">Ahmad zuiod</div>
        <div className="post-state">{props.StateComp} </div>
      </div>
    </div>
  );
}
export default AdoptionPostCard;
