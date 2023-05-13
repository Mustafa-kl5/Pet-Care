import React, { useState } from "react";
import "../../componentStyle/AdoptionPost/AdoptionPostData.css";
import PostUserInformation from "../../shaerdComponents/PostUserInformation";
import PostDataCarousel from "../../shaerdComponents/PostDataCarousel";
import PostDescription from "../../shaerdComponents/PostDescription";
import LocationView from "../../shaerdComponents/LocationView";
import UserContact from "./UserContact";
import api from "../../services/api";
import { useParams } from "react-router-dom";

export default function AdoptionData(props) {
  const [post, setPost] = useState(props.postData);
  return (
    <div className="adoption-post-data-holder">
      <PostUserInformation name={post.postOwner} postTime={post.postTime} />
      <div className="adoption-post-data-description-comment-carosil-holder">
        <div className="adoption-post-data-description-comment">
          <PostDescription postDescription={post.description} />
          <LocationView
            width="16rem"
            height="15.5rem"
            lat={35.99211444729038}
            lng={31.959542451417164}
          />
          <UserContact />
        </div>
        <div className="adoption-post-data-carosil">
          <PostDataCarousel postImage={post.Images} />
        </div>
      </div>
    </div>
  );
}
