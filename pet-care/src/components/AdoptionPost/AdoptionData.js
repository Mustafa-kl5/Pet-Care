import React from "react";
import "../../componentStyle/AdoptionPost/AdoptionPostData.css";
import PostUserInformation from "../../shaerdComponents/PostUserInformation";
import PostDataCarousel from "../../shaerdComponents/PostDataCarousel";
import PostDescription from "../../shaerdComponents/PostDescription";
import LocationView from "../../shaerdComponents/LocationView";

export default function AdoptionData() {
  return (
    <div className="adoption-post-data-holder">
      <PostUserInformation />
      <div className="adoption-post-data-description-comment-carosil-holder">
        <div className="adoption-post-data-description-comment">
          <PostDescription />
          <LocationView
            width="16rem"
            height="15.5rem"
            lat={35.99211444729038}
            lng={31.959542451417164}
          />
        </div>
        <div className="adoption-post-data-carosil">
          <PostDataCarousel />
        </div>
      </div>
    </div>
  );
}
