import React, { useEffect, useState } from "react";
import "../../componentStyle/ProfilePage/AdoptionPostEdit.css";
import EditpostDescription from "./EditpostDescription";
import uploadIcon from "../../Image/uploadIcon.png";
import PostImage from "./PostImage";
import { getUserId } from "../../hooks/auth/getUserId";
import LoadingBar from "../../shaerdComponents/LoadingBar";
import api from "../../services/api";
import PostNevigation from "./PostNevigation";
import NoPostFound from "./NoPostFound";
import DeleteAdoptionPost from "./DeleteAdoptionPost";
import AdoptionPostTypeNameBreed from "./AdoptionPostTypeNameBreed";
import ChangeAdoptionPostStatus from "./ChangeAdoptionPostStatus";

const enabelDrag = (
  <div className="empty-upload-ref">
    <div className="upload-word">Upload</div>
    <div
      className="drag-drop-section"
      style={{ width: `27.5rem`, height: `9rem` }}
    >
      <div
        className="upload-icon"
        style={{ backgroundImage: `url("${uploadIcon}")` }}
      ></div>
      <div className="drag-massage">
        Enable Edit then Drag & Drop images or
        <span className="browse-word">Browse</span>
      </div>
      <div className="support-type">Supported formates: JPEG, PNG, GIF.</div>
    </div>
  </div>
);
export default function DeleteAdoptationPostChangeStatus() {
  const [isEditable, setIsEditable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [reloadPost, setReloadPost] = useState(false);
  const [userPosts, setUserPosts] = useState([]);
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const [imagesBase64, setImagesBase64] = useState([]);

  useEffect(() => {
    getUserPost();
  }, []);

  useEffect(() => {
    getUserPost();
  }, [reloadPost]);

  useEffect(() => {
    setIsEditable(true);
    setImagesBase64([]);
  }, [currentPostIndex]);

  const getUserPost = async () => {
    setIsLoading(true);
    const response = await api.get(`/getAdoptionPost/:${getUserId()}`);
    setUserPosts(response.data);
    setIsLoading(false);
  };

  const handlePreviseIndex = () => {
    setCurrentPostIndex((prevIndex) =>
      prevIndex === 0 ? userPosts.length - 1 : prevIndex - 1
    );
  };
  const handleNextIndex = () => {
    setCurrentPostIndex((prevIndex) =>
      prevIndex === userPosts.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handelReloadPost = () => {
    setReloadPost(!reloadPost);
  };
  const reciveNewDescription = (decription) => {};
  const reciveNewImage = (images) => {};

  return isLoading ? (
    <div className="edit-center-loading">
      <LoadingBar />
    </div>
  ) : userPosts.length === 0 ? (
    <NoPostFound massage="You dont have any post" />
  ) : (
    <div className="edit-post-adoption-holder">
      <PostNevigation
        getPrevisePost={handlePreviseIndex}
        getNextPost={handleNextIndex}
      />
      <div className="edit-post-adoption-left-rigth">
        <div className="edit-post-adoption-left">
          <div className="edit-delete-switch-adoption">
            <ChangeAdoptionPostStatus
              active={userPosts[currentPostIndex]?.status}
              postId={userPosts[currentPostIndex]?._id}
              reloadPost={handelReloadPost}
            />
            <DeleteAdoptionPost
              postId={userPosts[currentPostIndex]?._id}
              reloadPost={handelReloadPost}
            />
          </div>
          <EditpostDescription
            active={isEditable}
            description={userPosts[currentPostIndex]?.description}
            sendNewDescription={reciveNewDescription}
          />

          <AdoptionPostTypeNameBreed
            animalType={userPosts[currentPostIndex]?.animalType}
            animalName={userPosts[currentPostIndex]?.animalName}
            animalBreed={userPosts[currentPostIndex]?.animalBreed}
          />
        </div>
        <div className="edit-post-adoption-rigth">
          <PostImage
            minHeight="22.5rem"
            active={isEditable}
            images={userPosts[currentPostIndex]?.Images}
            imagesBase64={imagesBase64}
            nextPost={currentPostIndex}
            sendNewImages={reciveNewImage}
          />
        </div>
      </div>
    </div>
  );
}
