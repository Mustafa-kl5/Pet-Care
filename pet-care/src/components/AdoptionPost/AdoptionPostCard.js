import React from "react";
import "../../componentStyle/AdoptionPost/AdoptionPostCard.css";
import { Link } from "react-router-dom";
function AdoptionPostCard(props) {
  return (
    <Link
      className="Adoption-card-link"
      to={`/adoptionPostData/:${props.postId}`}
    >
      <div className="Adoption-card">
        <div className="post-image"></div>
        <div className="post-info">
          <div className="user-image"></div>
          <div className="user-name">Ahmad zuoid</div>
        </div>
      </div>
    </Link>
  );
}
export default AdoptionPostCard;
