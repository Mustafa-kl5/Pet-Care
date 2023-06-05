import React from "react";
import "../../componentStyle/ProfilePage/FavouriteAdoptionPostCard.css";
import { useNavigate } from "react-router-dom";

export default function FavouriteAdoptionPostCard(props) {
  const navigate = useNavigate();

  const handelNavigation = () => {
    navigate(`/adoptionPostData/:${props.postId}`);
  };
  return (
    <div className="favourite-adoption-post-card" onClick={handelNavigation}>
      <div
        style={{ backgroundImage: `url("${props.postImage}")` }}
        className="favourite-adoption-post-card-image"
      />
      <div className="favourite-adoption-post-owner-image-name">
        <div
          className="favourite-adoption-post-owner-image"
          style={{ backgroundImage: `url("${props.postOwnerImage}")` }}
        />
        <div className="favourite-adoption-post-owner-name">
          {props.postOwnerName}
        </div>
      </div>
    </div>
  );
}
