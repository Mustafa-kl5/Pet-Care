import React from "react";
import "../../componentStyle/AdoptionPost/AdoptionPostCard.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AdoptionPostState from "../Profile/AdoptionPostState";
import DeletePost from "../Profile/DeletePost";
function AdoptionPostCard(props) {
  const location = useLocation();

  const s = {
    top: 36.8,
    left: 208,
  };
  return (
    <div className="Adoption-card">
      {location.pathname === "/Profile" ? (
        <DeletePost PostID={props.postId} style={s} />
      ) : null}
      <Link
        className="Adoption-card-link"
        to={`/adoptionPostData/:${props.postId}`}
      >
        <div className="post-image"></div>
      </Link>
      <div className="post-info">
        <div className="user-image"></div>
        <div className="user-name">Ahmad zuiod</div>
        <div className="post-state">
          {location.pathname === "/Profile" ? (
            <AdoptionPostState PostID={props.postId} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default AdoptionPostCard;
