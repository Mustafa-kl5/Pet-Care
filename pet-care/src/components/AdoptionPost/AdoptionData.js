import React, { useState } from "react";
import "../../componentStyle/AdoptionPost/AdoptionPostData.css";
import PostDataCarousel from "../../shaerdComponents/PostDataCarousel";
import PostDescription from "../../shaerdComponents/PostDescription";
import LocationView from "../../shaerdComponents/LocationView";
import UserContact from "./UserContact";
import api from "../../services/api";
import { useParams } from "react-router-dom";
import PetInformation from "./PetInformation";
import AdoptionPostUserInformation from "./AdoptionPostUserInformation";
import AddAdoptionPostToFavourite from "./AddAdoptionPostToFavourite";
import AdoptionPostStatus from "./AdoptionPostStatus";

export default function AdoptionData(props) {
  const [post, setPost] = useState(props.postData);
  return (
    <div className="adoption-post-data-holder">
      <div className="user-information-pet-information">
        <AdoptionPostUserInformation
          name={post.postOwner}
          postTime={post.postTime}
          userImage={post.author.userImage}
        />
        <AddAdoptionPostToFavourite postId={post._id} />
        <PetInformation
          animalName={post.animalName}
          animalType={post.animalType}
          animalBrees={post.animalBreed}
        />
      </div>
      <div className="adoption-post-data-description-comment-carosil-holder">
        <div className="adoption-post-data-description-comment">
          <PostDescription postDescription={post.description} />
          <LocationView
            width="16rem"
            height="15.5rem"
            lat={post.ownerLocation.latitude}
            lng={post.ownerLocation.longitude}
            textCondition={true}
          />

          <div className="user-contact-post-status">
            <UserContact
              facebookLink={post.ownerSocialMedia.facebookLink}
              whatsappNumber={post.ownerSocialMedia.whatsappLink}
              phoneNumber={post.ownerSocialMedia.phoneNumber}
            />
            <AdoptionPostStatus status={post.status} />
          </div>
        </div>
        <div className="adoption-post-data-carosil">
          <PostDataCarousel postImage={post.Images} />
        </div>
      </div>
    </div>
  );
}
